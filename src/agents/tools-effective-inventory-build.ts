import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { ProviderRuntimeModel } from "../plugins/provider-runtime-model.types.js";
import { getActivePluginRegistry } from "../plugins/runtime.js";
import { buildPluginToolMetadataKey, getPluginToolMeta } from "../plugins/tools.js";
import {
  normalizeLowercaseStringOrEmpty,
  normalizeOptionalString,
} from "../shared/string-coerce.js";
import { getChannelAgentToolMeta } from "./channel-tools.js";
import { normalizeAgentRuntimeTools } from "./runtime-plan/tools.js";
import { summarizeToolDescriptionText } from "./tool-description-summary.js";
import { resolveToolDisplay } from "./tool-display.js";
import {
  filterRuntimeCompatibleTools,
  projectRuntimeToolInputSchema,
  type RuntimeToolSchemaDiagnostic,
} from "./tool-schema-projection.js";
import { buildEffectiveToolInventoryGroups } from "./tools-effective-inventory-groups.js";
import type {
  EffectiveToolInventoryEntry,
  EffectiveToolInventoryNotice,
  EffectiveToolSource,
} from "./tools-effective-inventory.types.js";
import type { AnyAgentTool } from "./tools/common.js";

function resolveEffectiveToolLabel(tool: AnyAgentTool): string {
  const rawLabel = normalizeOptionalString(tool.label) ?? "";
  if (
    rawLabel &&
    normalizeLowercaseStringOrEmpty(rawLabel) !== normalizeLowercaseStringOrEmpty(tool.name)
  ) {
    return rawLabel;
  }
  return resolveToolDisplay({ name: tool.name }).title;
}

function resolveRawToolDescription(tool: AnyAgentTool): string {
  return normalizeOptionalString(tool.description) ?? "";
}

function summarizeToolDescription(tool: AnyAgentTool): string {
  return summarizeToolDescriptionText({
    rawDescription: resolveRawToolDescription(tool),
    displaySummary: tool.displaySummary,
  });
}

function resolveEffectiveToolSource(
  tool: AnyAgentTool,
  fallbackTool?: AnyAgentTool,
): {
  source: EffectiveToolSource;
  pluginId?: string;
  channelId?: string;
} {
  const pluginMeta = readPluginToolMeta(tool) ?? readPluginToolMeta(fallbackTool);
  if (pluginMeta) {
    if (pluginMeta.pluginId === "bundle-mcp") {
      return { source: "mcp", pluginId: pluginMeta.pluginId };
    }
    return { source: "plugin", pluginId: pluginMeta.pluginId };
  }
  const channelMeta = readChannelToolMeta(tool) ?? readChannelToolMeta(fallbackTool);
  if (channelMeta) {
    return { source: "channel", channelId: channelMeta.channelId };
  }
  return { source: "core" };
}

function readPluginToolMeta(tool: AnyAgentTool | undefined): ReturnType<typeof getPluginToolMeta> {
  if (!tool) {
    return undefined;
  }
  try {
    return getPluginToolMeta(tool);
  } catch {
    return undefined;
  }
}

function readChannelToolMeta(
  tool: AnyAgentTool | undefined,
): ReturnType<typeof getChannelAgentToolMeta> {
  if (!tool) {
    return undefined;
  }
  try {
    return getChannelAgentToolMeta(tool as never);
  } catch {
    return undefined;
  }
}

function readToolAtIndex(
  tools: readonly AnyAgentTool[],
  toolIndex: number,
): AnyAgentTool | undefined {
  try {
    return tools[toolIndex];
  } catch {
    return undefined;
  }
}

function buildUnsupportedToolSchemaNotice(params: {
  diagnostic: RuntimeToolSchemaDiagnostic;
  tool: AnyAgentTool | undefined;
  fallbackTool: AnyAgentTool | undefined;
}): EffectiveToolInventoryNotice {
  const source = params.tool
    ? resolveEffectiveToolSource(params.tool, params.fallbackTool)
    : { source: "core" as const };
  const owner =
    source.source === "plugin" && source.pluginId
      ? ` from plugin "${source.pluginId}"`
      : source.source === "channel" && source.channelId
        ? ` from channel "${source.channelId}"`
        : "";
  return {
    id: `unsupported-tool-schema:${params.diagnostic.toolName}`,
    severity: "warning",
    message: `Tool "${params.diagnostic.toolName}"${owner} has an unsupported runtime input schema (${params.diagnostic.violations.join(", ")}) and was quarantined before model projection. Fix or disable the owner, or remove the tool from active allowlists.`,
  };
}

function buildUnsupportedToolSchemaNotices(params: {
  diagnostics: readonly RuntimeToolSchemaDiagnostic[];
  tools: readonly AnyAgentTool[];
  rawToolsByName: ReadonlyMap<string, AnyAgentTool>;
}): EffectiveToolInventoryNotice[] {
  return params.diagnostics.map((diagnostic) =>
    buildUnsupportedToolSchemaNotice({
      diagnostic,
      tool: readToolAtIndex(params.tools, diagnostic.toolIndex),
      fallbackTool: params.rawToolsByName.get(diagnostic.toolName),
    }),
  );
}

function unreadableToolRowDiagnostic(toolIndex: number): RuntimeToolSchemaDiagnostic {
  return {
    toolName: `tool[${toolIndex}]`,
    toolIndex,
    violations: [`tool[${toolIndex}] is unreadable`],
  };
}

function readProviderNormalizableToolName(
  tool: AnyAgentTool,
  toolIndex: number,
): { toolName: string; violations: string[] } {
  try {
    return {
      toolName: typeof tool.name === "string" && tool.name ? tool.name : `tool[${toolIndex}]`,
      violations: [],
    };
  } catch {
    const toolName = `tool[${toolIndex}]`;
    return { toolName, violations: [`${toolName}.name is unreadable`] };
  }
}

function filterProviderNormalizableTools(tools: readonly AnyAgentTool[]): {
  tools: readonly AnyAgentTool[];
  diagnostics: readonly RuntimeToolSchemaDiagnostic[];
} {
  let length = 0;
  try {
    length = tools.length;
  } catch {
    return { tools: [], diagnostics: [unreadableToolRowDiagnostic(0)] };
  }
  const normalizableTools: AnyAgentTool[] = [];
  const diagnostics: RuntimeToolSchemaDiagnostic[] = [];
  for (let toolIndex = 0; toolIndex < length; toolIndex += 1) {
    let tool: AnyAgentTool | undefined;
    try {
      tool = tools[toolIndex];
    } catch {
      diagnostics.push(unreadableToolRowDiagnostic(toolIndex));
      continue;
    }
    if (!tool) {
      diagnostics.push(unreadableToolRowDiagnostic(toolIndex));
      continue;
    }
    const nameRead = readProviderNormalizableToolName(tool, toolIndex);
    let parameters: unknown;
    try {
      parameters = tool.parameters;
    } catch {
      diagnostics.push({
        toolName: nameRead.toolName,
        toolIndex,
        violations: [...nameRead.violations, `${nameRead.toolName}.parameters is unreadable`],
      });
      continue;
    }
    const schemaPath = `${nameRead.toolName}.parameters`;
    const serializationViolations =
      parameters !== null && typeof parameters === "object"
        ? projectRuntimeToolInputSchema(parameters, schemaPath).violations.filter(
            (violation) =>
              violation === `${schemaPath} is not JSON-serializable` ||
              violation === `${schemaPath} is not a JSON value`,
          )
        : [];
    const violations = [...nameRead.violations, ...serializationViolations];
    if (violations.length > 0) {
      diagnostics.push({ toolName: nameRead.toolName, toolIndex, violations });
      continue;
    }
    normalizableTools.push(tool);
  }
  return { tools: normalizableTools, diagnostics };
}

function disambiguateLabels(entries: EffectiveToolInventoryEntry[]): EffectiveToolInventoryEntry[] {
  const counts = new Map<string, number>();
  for (const entry of entries) {
    counts.set(entry.label, (counts.get(entry.label) ?? 0) + 1);
  }
  return entries.map((entry) => {
    if ((counts.get(entry.label) ?? 0) < 2) {
      return entry;
    }
    const suffix = entry.pluginId ?? entry.channelId ?? entry.id;
    return { ...entry, label: `${entry.label} (${suffix})` };
  });
}

export function buildEffectiveToolInventoryEntries(
  tools: readonly AnyAgentTool[],
  rawToolsByName: ReadonlyMap<string, AnyAgentTool> = new Map(),
): EffectiveToolInventoryEntry[] {
  // Key metadata by plugin ownership and tool name so only the owning plugin can
  // project display/risk metadata for its own tool.
  const pluginToolMetadata = new Map(
    (getActivePluginRegistry()?.toolMetadata ?? []).map((entry) => [
      buildPluginToolMetadataKey(entry.pluginId, entry.metadata.toolName),
      entry.metadata,
    ]),
  );

  return disambiguateLabels(
    tools
      .map((tool) => {
        const source = resolveEffectiveToolSource(tool, rawToolsByName.get(tool.name));
        const metadata = source.pluginId
          ? pluginToolMetadata.get(buildPluginToolMetadataKey(source.pluginId, tool.name))
          : undefined;
        return Object.assign(
          {
            id: tool.name,
            label:
              normalizeOptionalString(metadata?.displayName) ?? resolveEffectiveToolLabel(tool),
            description:
              normalizeOptionalString(metadata?.description) ?? summarizeToolDescription(tool),
            rawDescription:
              normalizeOptionalString(metadata?.description) ??
              resolveRawToolDescription(tool) ??
              summarizeToolDescription(tool),
            ...(metadata?.risk ? { risk: metadata.risk } : {}),
            ...(metadata?.tags ? { tags: metadata.tags } : {}),
          },
          source,
        ) satisfies EffectiveToolInventoryEntry;
      })
      .toSorted((a, b) => a.label.localeCompare(b.label)),
  );
}

export function buildRuntimeCompatibleToolInventory(params: {
  tools: readonly AnyAgentTool[];
  cfg: OpenClawConfig;
  workspaceDir?: string;
  modelProvider?: string;
  modelId?: string;
  modelApi?: string | null;
  runtimeModel?: ProviderRuntimeModel;
}): {
  entries: EffectiveToolInventoryEntry[];
  notices: EffectiveToolInventoryNotice[];
} {
  const providerProjection = filterProviderNormalizableTools(params.tools);
  const rawToolsByName = new Map(providerProjection.tools.map((tool) => [tool.name, tool]));
  const normalizedTools = normalizeAgentRuntimeTools({
    // Schema normalization can replace tool definitions, so hand the runtime
    // policy a mutable copy while keeping this inventory API readonly.
    tools: [...providerProjection.tools],
    provider: params.modelProvider ?? "",
    config: params.cfg,
    workspaceDir: params.workspaceDir,
    modelId: params.modelId,
    modelApi: params.modelApi ?? undefined,
    model: params.runtimeModel,
  });
  const projection = filterRuntimeCompatibleTools(normalizedTools);
  return {
    entries: buildEffectiveToolInventoryEntries(projection.tools, rawToolsByName),
    notices: [
      ...buildUnsupportedToolSchemaNotices({
        diagnostics: providerProjection.diagnostics,
        tools: params.tools,
        rawToolsByName,
      }),
      ...buildUnsupportedToolSchemaNotices({
        diagnostics: projection.diagnostics,
        tools: normalizedTools,
        rawToolsByName,
      }),
    ],
  };
}

export { buildEffectiveToolInventoryGroups };
