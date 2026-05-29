// TypeBox schemas for agent management, model discovery, skills, and tool catalog RPCs.
import { Type } from "typebox";
import { NonEmptyString } from "./primitives.js";

/** Model option returned to clients for agent configuration. */
export const ModelChoiceSchema = Type.Object(
  {
    id: NonEmptyString,
    name: NonEmptyString,
    provider: NonEmptyString,
    alias: Type.Optional(NonEmptyString),
    contextWindow: Type.Optional(Type.Integer({ minimum: 1 })),
    reasoning: Type.Optional(Type.Boolean()),
  },
  { additionalProperties: false },
);

/** Compact agent descriptor used by list responses and session defaults. */
export const AgentSummarySchema = Type.Object(
  {
    id: NonEmptyString,
    name: Type.Optional(NonEmptyString),
    identity: Type.Optional(
      Type.Object(
        {
          name: Type.Optional(NonEmptyString),
          theme: Type.Optional(NonEmptyString),
          emoji: Type.Optional(NonEmptyString),
          avatar: Type.Optional(NonEmptyString),
          avatarUrl: Type.Optional(NonEmptyString),
        },
        { additionalProperties: false },
      ),
    ),
    workspace: Type.Optional(NonEmptyString),
    model: Type.Optional(
      Type.Object(
        {
          primary: Type.Optional(NonEmptyString),
          fallbacks: Type.Optional(Type.Array(NonEmptyString)),
        },
        { additionalProperties: false },
      ),
    ),
    agentRuntime: Type.Optional(
      Type.Object(
        {
          id: NonEmptyString,
          fallback: Type.Optional(Type.Union([Type.Literal("openclaw"), Type.Literal("none")])),
          source: Type.Union([
            Type.Literal("env"),
            Type.Literal("agent"),
            Type.Literal("defaults"),
            Type.Literal("model"),
            Type.Literal("provider"),
            Type.Literal("implicit"),
          ]),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

/** Empty params schema for listing configured agents. */
export const AgentsListParamsSchema = Type.Object({}, { additionalProperties: false });

/** Result schema for configured agents plus default session routing metadata. */
export const AgentsListResultSchema = Type.Object(
  {
    defaultId: NonEmptyString,
    mainKey: NonEmptyString,
    scope: Type.Union([Type.Literal("per-sender"), Type.Literal("global")]),
    agents: Type.Array(AgentSummarySchema),
  },
  { additionalProperties: false },
);

/** Params schema for creating an agent profile. */
export const AgentsCreateParamsSchema = Type.Object(
  {
    name: NonEmptyString,
    workspace: NonEmptyString,
    model: Type.Optional(NonEmptyString),
    emoji: Type.Optional(Type.String()),
    avatar: Type.Optional(Type.String()),
  },
  { additionalProperties: false },
);

/** Result schema for successful agent creation. */
export const AgentsCreateResultSchema = Type.Object(
  {
    ok: Type.Literal(true),
    agentId: NonEmptyString,
    name: NonEmptyString,
    workspace: NonEmptyString,
    model: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

/** Params schema for patching mutable agent profile fields. */
export const AgentsUpdateParamsSchema = Type.Object(
  {
    agentId: NonEmptyString,
    name: Type.Optional(NonEmptyString),
    workspace: Type.Optional(NonEmptyString),
    model: Type.Optional(NonEmptyString),
    emoji: Type.Optional(Type.String()),
    avatar: Type.Optional(Type.String()),
  },
  { additionalProperties: false },
);

/** Result schema for successful agent update. */
export const AgentsUpdateResultSchema = Type.Object(
  {
    ok: Type.Literal(true),
    agentId: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Params schema for deleting an agent and optionally its files. */
export const AgentsDeleteParamsSchema = Type.Object(
  {
    agentId: NonEmptyString,
    deleteFiles: Type.Optional(Type.Boolean()),
  },
  { additionalProperties: false },
);

/** Result schema for agent deletion and removed session binding count. */
export const AgentsDeleteResultSchema = Type.Object(
  {
    ok: Type.Literal(true),
    agentId: NonEmptyString,
    removedBindings: Type.Integer({ minimum: 0 }),
  },
  { additionalProperties: false },
);

/** Agent-owned file descriptor with optional loaded content. */
export const AgentsFileEntrySchema = Type.Object(
  {
    name: NonEmptyString,
    path: NonEmptyString,
    missing: Type.Boolean(),
    size: Type.Optional(Type.Integer({ minimum: 0 })),
    updatedAtMs: Type.Optional(Type.Integer({ minimum: 0 })),
    content: Type.Optional(Type.String()),
  },
  { additionalProperties: false },
);

/** Params schema for listing files owned by an agent. */
export const AgentsFilesListParamsSchema = Type.Object(
  {
    agentId: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Result schema for agent file listings. */
export const AgentsFilesListResultSchema = Type.Object(
  {
    agentId: NonEmptyString,
    workspace: NonEmptyString,
    files: Type.Array(AgentsFileEntrySchema),
  },
  { additionalProperties: false },
);

/** Params schema for reading one named agent file. */
export const AgentsFilesGetParamsSchema = Type.Object(
  {
    agentId: NonEmptyString,
    name: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Result schema for one agent file lookup. */
export const AgentsFilesGetResultSchema = Type.Object(
  {
    agentId: NonEmptyString,
    workspace: NonEmptyString,
    file: AgentsFileEntrySchema,
  },
  { additionalProperties: false },
);

/** Params schema for writing one named agent file. */
export const AgentsFilesSetParamsSchema = Type.Object(
  {
    agentId: NonEmptyString,
    name: NonEmptyString,
    content: Type.String(),
  },
  { additionalProperties: false },
);

/** Result schema for a successful agent file write. */
export const AgentsFilesSetResultSchema = Type.Object(
  {
    ok: Type.Literal(true),
    agentId: NonEmptyString,
    workspace: NonEmptyString,
    file: AgentsFileEntrySchema,
  },
  { additionalProperties: false },
);

/** Params schema for selecting default, configured, or full model lists. */
export const ModelsListParamsSchema = Type.Object(
  {
    view: Type.Optional(
      Type.Union([Type.Literal("default"), Type.Literal("configured"), Type.Literal("all")]),
    ),
  },
  { additionalProperties: false },
);

/** Result schema for model discovery. */
export const ModelsListResultSchema = Type.Object(
  {
    models: Type.Array(ModelChoiceSchema),
  },
  { additionalProperties: false },
);

/** Params schema for reading installed skill status, optionally scoped by agent. */
export const SkillsStatusParamsSchema = Type.Object(
  {
    agentId: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

/** Empty params schema for listing available skill install bins. */
export const SkillsBinsParamsSchema = Type.Object({}, { additionalProperties: false });

/** Result schema for available skill install bins. */
export const SkillsBinsResultSchema = Type.Object(
  {
    bins: Type.Array(NonEmptyString),
  },
  { additionalProperties: false },
);

const Sha256String = Type.String({
  minLength: 64,
  maxLength: 64,
  pattern: "^[a-fA-F0-9]{64}$",
});
const SkillUploadIdempotencyKeyString = Type.String({
  minLength: 1,
  maxLength: 2048,
});
const SkillUploadDataBase64String = Type.String({
  minLength: 1,
  maxLength: 5_592_408,
});

/** Params schema for starting an uploaded skill archive install. */
export const SkillsUploadBeginParamsSchema = Type.Object(
  {
    kind: Type.Literal("skill-archive"),
    slug: NonEmptyString,
    sizeBytes: Type.Integer({ minimum: 1 }),
    sha256: Type.Optional(Sha256String),
    force: Type.Optional(Type.Boolean()),
    idempotencyKey: Type.Optional(SkillUploadIdempotencyKeyString),
  },
  { additionalProperties: false },
);

/** Params schema for uploading one base64 skill archive chunk. */
export const SkillsUploadChunkParamsSchema = Type.Object(
  {
    uploadId: NonEmptyString,
    offset: Type.Integer({ minimum: 0 }),
    dataBase64: SkillUploadDataBase64String,
  },
  { additionalProperties: false },
);

/** Params schema for finalizing an uploaded skill archive. */
export const SkillsUploadCommitParamsSchema = Type.Object(
  {
    uploadId: NonEmptyString,
    sha256: Type.Optional(Sha256String),
  },
  { additionalProperties: false },
);

/** Params schema for installing skills from curated bins, ClawHub, or uploads. */
export const SkillsInstallParamsSchema = Type.Union([
  Type.Object(
    {
      name: NonEmptyString,
      installId: NonEmptyString,
      dangerouslyForceUnsafeInstall: Type.Optional(Type.Boolean()),
      timeoutMs: Type.Optional(Type.Integer({ minimum: 1000 })),
    },
    { additionalProperties: false },
  ),
  Type.Object(
    {
      source: Type.Literal("clawhub"),
      slug: NonEmptyString,
      version: Type.Optional(NonEmptyString),
      force: Type.Optional(Type.Boolean()),
      timeoutMs: Type.Optional(Type.Integer({ minimum: 1000 })),
    },
    { additionalProperties: false },
  ),
  Type.Object(
    {
      source: Type.Literal("upload"),
      uploadId: NonEmptyString,
      slug: NonEmptyString,
      force: Type.Optional(Type.Boolean()),
      sha256: Type.Optional(Sha256String),
      timeoutMs: Type.Optional(Type.Integer({ minimum: 1000 })),
    },
    { additionalProperties: false },
  ),
]);

/** Params schema for updating installed skill config or ClawHub-managed skills. */
export const SkillsUpdateParamsSchema = Type.Union([
  Type.Object(
    {
      skillKey: NonEmptyString,
      enabled: Type.Optional(Type.Boolean()),
      apiKey: Type.Optional(Type.String()),
      env: Type.Optional(Type.Record(NonEmptyString, Type.String())),
    },
    { additionalProperties: false },
  ),
  Type.Object(
    {
      source: Type.Literal("clawhub"),
      slug: Type.Optional(NonEmptyString),
      all: Type.Optional(Type.Boolean()),
    },
    { additionalProperties: false },
  ),
]);

/** Params schema for searching ClawHub skills. */
export const SkillsSearchParamsSchema = Type.Object(
  {
    query: Type.Optional(NonEmptyString),
    limit: Type.Optional(Type.Integer({ minimum: 1, maximum: 100 })),
  },
  { additionalProperties: false },
);

/** Result schema for ClawHub skill search hits. */
export const SkillsSearchResultSchema = Type.Object(
  {
    results: Type.Array(
      Type.Object(
        {
          score: Type.Number(),
          slug: NonEmptyString,
          displayName: NonEmptyString,
          summary: Type.Optional(Type.String()),
          version: Type.Optional(NonEmptyString),
          updatedAt: Type.Optional(Type.Integer()),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

/** Params schema for reading ClawHub skill detail by slug. */
export const SkillsDetailParamsSchema = Type.Object(
  {
    slug: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Params schema for reading security verdicts for requested/installed skills. */
export const SkillsSecurityVerdictsParamsSchema = Type.Object(
  {
    agentId: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

/** Result schema for ClawHub skill detail, latest version, metadata, and owner. */
export const SkillsDetailResultSchema = Type.Object(
  {
    skill: Type.Union([
      Type.Object(
        {
          slug: NonEmptyString,
          displayName: NonEmptyString,
          summary: Type.Optional(Type.String()),
          tags: Type.Optional(Type.Record(NonEmptyString, Type.String())),
          createdAt: Type.Integer(),
          updatedAt: Type.Integer(),
        },
        { additionalProperties: false },
      ),
      Type.Null(),
    ]),
    latestVersion: Type.Optional(
      Type.Union([
        Type.Object(
          {
            version: NonEmptyString,
            createdAt: Type.Integer(),
            changelog: Type.Optional(Type.String()),
          },
          { additionalProperties: false },
        ),
        Type.Null(),
      ]),
    ),
    metadata: Type.Optional(
      Type.Union([
        Type.Object(
          {
            os: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])),
            systems: Type.Optional(Type.Union([Type.Array(Type.String()), Type.Null()])),
          },
          { additionalProperties: false },
        ),
        Type.Null(),
      ]),
    ),
    owner: Type.Optional(
      Type.Union([
        Type.Object(
          {
            handle: Type.Optional(Type.Union([NonEmptyString, Type.Null()])),
            displayName: Type.Optional(Type.Union([NonEmptyString, Type.Null()])),
            image: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          },
          { additionalProperties: false },
        ),
        Type.Null(),
      ]),
    ),
  },
  { additionalProperties: false },
);

/** Result schema for skill registry security verdicts and audit metadata. */
export const SkillsSecurityVerdictsResultSchema = Type.Object(
  {
    schema: Type.Literal("openclaw.skills.security-verdicts.v1"),
    items: Type.Array(
      Type.Object(
        {
          registry: NonEmptyString,
          ok: Type.Boolean(),
          decision: NonEmptyString,
          reasons: Type.Array(Type.String()),
          requestedSlug: NonEmptyString,
          requestedVersion: NonEmptyString,
          slug: Type.Optional(Type.Union([NonEmptyString, Type.Null()])),
          version: Type.Optional(Type.Union([NonEmptyString, Type.Null()])),
          displayName: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          publisherHandle: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          publisherDisplayName: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          createdAt: Type.Optional(Type.Union([Type.Integer(), Type.Null()])),
          checkedAt: Type.Optional(Type.Union([Type.Integer(), Type.Null()])),
          skillUrl: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          securityAuditUrl: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          securityStatus: Type.Optional(Type.Union([Type.String(), Type.Null()])),
          securityPassed: Type.Optional(Type.Union([Type.Boolean(), Type.Null()])),
          error: Type.Optional(
            Type.Object(
              {
                code: Type.Optional(Type.String()),
                message: Type.Optional(Type.String()),
              },
              { additionalProperties: false },
            ),
          ),
        },
        { additionalProperties: false },
      ),
    ),
  },
  { additionalProperties: false },
);

/** Params schema for reading an installed skill card file. */
export const SkillsSkillCardParamsSchema = Type.Object(
  {
    agentId: Type.Optional(NonEmptyString),
    skillKey: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Result schema for an installed skill card file and content. */
export const SkillsSkillCardResultSchema = Type.Object(
  {
    schema: Type.Literal("openclaw.skills.skill-card.v1"),
    skillKey: NonEmptyString,
    path: NonEmptyString,
    sizeBytes: Type.Integer({ minimum: 0 }),
    content: Type.String(),
  },
  { additionalProperties: false },
);

/** Params schema for reading the configured tool catalog. */
export const ToolsCatalogParamsSchema = Type.Object(
  {
    agentId: Type.Optional(NonEmptyString),
    includePlugins: Type.Optional(Type.Boolean()),
  },
  { additionalProperties: false },
);

/** Params schema for reading effective tools for an agent session. */
export const ToolsEffectiveParamsSchema = Type.Object(
  {
    agentId: Type.Optional(NonEmptyString),
    sessionKey: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Params schema for invoking a tool through the gateway. */
export const ToolsInvokeParamsSchema = Type.Object(
  {
    name: NonEmptyString,
    args: Type.Optional(Type.Record(Type.String(), Type.Unknown())),
    sessionKey: Type.Optional(NonEmptyString),
    agentId: Type.Optional(NonEmptyString),
    confirm: Type.Optional(Type.Boolean()),
    idempotencyKey: Type.Optional(NonEmptyString),
  },
  { additionalProperties: false },
);

/** Tool profile descriptor used by catalog responses. */
export const ToolCatalogProfileSchema = Type.Object(
  {
    id: Type.Union([
      Type.Literal("minimal"),
      Type.Literal("coding"),
      Type.Literal("messaging"),
      Type.Literal("full"),
    ]),
    label: NonEmptyString,
  },
  { additionalProperties: false },
);

/** Tool catalog entry before session-specific filtering is applied. */
export const ToolCatalogEntrySchema = Type.Object(
  {
    id: NonEmptyString,
    label: NonEmptyString,
    description: Type.String(),
    source: Type.Union([Type.Literal("core"), Type.Literal("plugin")]),
    pluginId: Type.Optional(NonEmptyString),
    optional: Type.Optional(Type.Boolean()),
    risk: Type.Optional(
      Type.Union([Type.Literal("low"), Type.Literal("medium"), Type.Literal("high")]),
    ),
    tags: Type.Optional(Type.Array(NonEmptyString)),
    defaultProfiles: Type.Array(
      Type.Union([
        Type.Literal("minimal"),
        Type.Literal("coding"),
        Type.Literal("messaging"),
        Type.Literal("full"),
      ]),
    ),
  },
  { additionalProperties: false },
);

/** Tool catalog group keyed by core/plugin source. */
export const ToolCatalogGroupSchema = Type.Object(
  {
    id: NonEmptyString,
    label: NonEmptyString,
    source: Type.Union([Type.Literal("core"), Type.Literal("plugin")]),
    pluginId: Type.Optional(NonEmptyString),
    tools: Type.Array(ToolCatalogEntrySchema),
  },
  { additionalProperties: false },
);

/** Result schema for the full configured tool catalog. */
export const ToolsCatalogResultSchema = Type.Object(
  {
    agentId: NonEmptyString,
    profiles: Type.Array(ToolCatalogProfileSchema),
    groups: Type.Array(ToolCatalogGroupSchema),
  },
  { additionalProperties: false },
);

/** Tool entry after profile, channel, plugin, and session filters apply. */
export const ToolsEffectiveEntrySchema = Type.Object(
  {
    id: NonEmptyString,
    label: NonEmptyString,
    description: Type.String(),
    rawDescription: Type.String(),
    source: Type.Union([
      Type.Literal("core"),
      Type.Literal("plugin"),
      Type.Literal("channel"),
      Type.Literal("mcp"),
    ]),
    pluginId: Type.Optional(NonEmptyString),
    channelId: Type.Optional(NonEmptyString),
    risk: Type.Optional(
      Type.Union([Type.Literal("low"), Type.Literal("medium"), Type.Literal("high")]),
    ),
    tags: Type.Optional(Type.Array(NonEmptyString)),
  },
  { additionalProperties: false },
);

/** Effective tool group keyed by source family. */
export const ToolsEffectiveGroupSchema = Type.Object(
  {
    id: Type.Union([
      Type.Literal("core"),
      Type.Literal("plugin"),
      Type.Literal("channel"),
      Type.Literal("mcp"),
    ]),
    label: NonEmptyString,
    source: Type.Union([
      Type.Literal("core"),
      Type.Literal("plugin"),
      Type.Literal("channel"),
      Type.Literal("mcp"),
    ]),
    tools: Type.Array(ToolsEffectiveEntrySchema),
  },
  { additionalProperties: false },
);

/** Informational or warning notice attached to effective tool results. */
export const ToolsEffectiveNoticeSchema = Type.Object(
  {
    id: NonEmptyString,
    severity: Type.Union([Type.Literal("info"), Type.Literal("warning")]),
    message: Type.String(),
  },
  { additionalProperties: false },
);

/** Result schema for effective tool availability in a session. */
export const ToolsEffectiveResultSchema = Type.Object(
  {
    agentId: NonEmptyString,
    profile: NonEmptyString,
    groups: Type.Array(ToolsEffectiveGroupSchema),
    notices: Type.Optional(Type.Array(ToolsEffectiveNoticeSchema)),
  },
  { additionalProperties: false },
);

/** Structured tool invocation failure returned by gateway tool execution. */
export const ToolsInvokeErrorSchema = Type.Object(
  {
    code: NonEmptyString,
    message: NonEmptyString,
    details: Type.Optional(Type.Unknown()),
  },
  { additionalProperties: false },
);

/** Result schema for tool invocation output, approval requirements, or failure. */
export const ToolsInvokeResultSchema = Type.Object(
  {
    ok: Type.Boolean(),
    toolName: NonEmptyString,
    output: Type.Optional(Type.Unknown()),
    requiresApproval: Type.Optional(Type.Boolean()),
    approvalId: Type.Optional(NonEmptyString),
    source: Type.Optional(
      Type.Union([
        Type.Literal("core"),
        Type.Literal("plugin"),
        Type.Literal("mcp"),
        Type.Literal("channel"),
        Type.String(),
      ]),
    ),
    error: Type.Optional(ToolsInvokeErrorSchema),
  },
  { additionalProperties: false },
);
