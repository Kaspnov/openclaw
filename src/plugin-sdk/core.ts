/** Main public Plugin SDK barrel for core plugin, channel, provider, runtime, and setup contracts. */
import type { ResolvedConfiguredAcpBinding } from "../acp/persistent-bindings.types.js";
import { buildChatChannelMetaById } from "../channels/chat-meta-shared.js";
import type { ChatChannelId } from "../channels/ids.js";
import { emptyChannelConfigSchema } from "../channels/plugins/config-schema.js";
import { buildAccountScopedDmSecurityPolicy } from "../channels/plugins/helpers.js";
import {
  createScopedAccountReplyToModeResolver,
  createTopLevelChannelReplyToModeResolver,
} from "../channels/plugins/threading-helpers.js";
import type {
  ChannelOutboundAdapter,
  ChannelPairingAdapter,
  ChannelSecurityAdapter,
} from "../channels/plugins/types.adapters.js";
import type { ChannelConfigSchema } from "../channels/plugins/types.config.js";
import type {
  ChannelMessagingAdapter,
  ChannelOutboundSessionRoute,
  ChannelPollResult,
  ChannelThreadingAdapter,
} from "../channels/plugins/types.core.js";
import type { ChannelPlugin } from "../channels/plugins/types.plugin.js";
import type { ChannelMeta } from "../channels/plugins/types.public.js";
import type { ReplyToMode } from "../config/types.base.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import { buildOutboundBaseSessionKey } from "../infra/outbound/base-session-key.js";
import type { OutboundDeliveryResult } from "../infra/outbound/deliver.js";
import { normalizeOutboundThreadId } from "../infra/outbound/thread-id.js";
import { resolveBundledPluginsDir } from "../plugins/bundled-dir.js";
import type { PluginRuntime } from "../plugins/runtime/types.js";
import type { OpenClawPluginApi } from "../plugins/types.js";
import { resolveThreadSessionKeys } from "../routing/session-key.js";
import {
  normalizeSessionKeyPreservingOpaquePeerIds,
  parseThreadSessionSuffix,
} from "../sessions/session-key-utils.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";

/** Core plugin-entry contracts for plugin definitions, providers, commands, and runtime hooks. */
export type {
  AgentPromptGuidance,
  AgentPromptGuidanceEntry,
  AgentPromptSurfaceKind,
  AgentHarness,
  AnyAgentTool,
  MediaUnderstandingProviderPlugin,
  OpenClawPluginApi,
  OpenClawPluginCommandDefinition,
  OpenClawPluginConfigSchema,
  OpenClawPluginDefinition,
  OpenClawPluginService,
  OpenClawPluginServiceContext,
  PluginCommandContext,
  PluginCommandResult,
  PluginAgentEventEmitParams,
  PluginAgentEventEmitResult,
  PluginAgentEventSubscriptionRegistration,
  PluginAgentTurnPrepareEvent,
  PluginAgentTurnPrepareResult,
  PluginControlUiDescriptor,
  PluginHeartbeatPromptContributionEvent,
  PluginHeartbeatPromptContributionResult,
  PluginJsonValue,
  PluginNextTurnInjection,
  PluginNextTurnInjectionEnqueueResult,
  PluginNextTurnInjectionRecord,
  PluginRunContextGetParams,
  PluginRunContextPatch,
  PluginRuntimeLifecycleRegistration,
  PluginSessionActionContext,
  PluginSessionActionRegistration,
  PluginSessionActionResult,
  PluginSessionAttachmentParams,
  PluginSessionAttachmentResult,
  PluginSessionSchedulerJobHandle,
  PluginSessionSchedulerJobRegistration,
  PluginSessionTurnScheduleParams,
  PluginSessionTurnUnscheduleByTagParams,
  PluginSessionTurnUnscheduleByTagResult,
  PluginSessionExtensionRegistration,
  PluginSessionExtensionProjection,
  PluginToolMetadataRegistration,
  PluginTrustedToolPolicyRegistration,
  PluginLogger,
  ProviderAuthContext,
  ProviderAuthDoctorHintContext,
  ProviderAuthMethod,
  ProviderAuthMethodNonInteractiveContext,
  ProviderAuthResult,
  ProviderAugmentModelCatalogContext,
  ProviderBuildMissingAuthMessageContext,
  ProviderBuildUnknownModelHintContext,
  ProviderBuiltInModelSuppressionContext,
  ProviderBuiltInModelSuppressionResult,
  ProviderCacheTtlEligibilityContext,
  ProviderCatalogContext,
  ProviderCatalogResult,
  ProviderDefaultThinkingPolicyContext,
  ProviderDiscoveryContext,
  ProviderFetchUsageSnapshotContext,
  ProviderModernModelPolicyContext,
  ProviderNormalizeResolvedModelContext,
  ProviderNormalizeToolSchemasContext,
  ProviderPrepareDynamicModelContext,
  ProviderPrepareExtraParamsContext,
  ProviderPrepareRuntimeAuthContext,
  ProviderPreparedRuntimeAuth,
  ProviderReasoningOutputMode,
  ProviderReasoningOutputModeContext,
  ProviderReplayPolicy,
  ProviderReplayPolicyContext,
  ProviderReplaySessionEntry,
  ProviderReplaySessionState,
  ProviderResolveDynamicModelContext,
  ProviderResolveTransportTurnStateContext,
  ProviderResolveWebSocketSessionPolicyContext,
  ProviderResolvedUsageAuth,
  RealtimeTranscriptionProviderPlugin,
  ProviderSanitizeReplayHistoryContext,
  ProviderTransportTurnState,
  ProviderToolSchemaDiagnostic,
  ProviderResolveUsageAuthContext,
  ProviderThinkingProfile,
  ProviderThinkingPolicyContext,
  ProviderValidateReplayTurnsContext,
  ProviderWebSocketSessionPolicy,
  ProviderWrapStreamFnContext,
  UnifiedModelCatalogProviderContext,
  UnifiedModelCatalogProviderPlugin,
  SpeechProviderPlugin,
} from "./plugin-entry.js";
/** Unified model catalog entry/source metadata exposed to provider plugins. */
export type {
  UnifiedModelCatalogEntry,
  UnifiedModelCatalogKind,
  UnifiedModelCatalogSource,
} from "../model-catalog/types.js";
/** Runtime model metadata used by provider registration. */
export type { ProviderRuntimeModel } from "../plugins/provider-runtime-model.types.js";
/** Plugin tool context/factory contracts exposed to SDK callers. */
export type {
  OpenClawPluginActiveModelContext,
  OpenClawPluginToolContext,
  OpenClawPluginToolFactory,
} from "../plugins/types.js";
/** Memory plugin public artifact contracts exposed through the SDK. */
export type {
  MemoryPluginCapability,
  MemoryPluginPublicArtifact,
  MemoryPluginPublicArtifactsProvider,
} from "../plugins/memory-state.js";
/** Reply hook payload dispatch contracts for plugin hook integrations. */
export type {
  PluginHookReplyPayloadSendingContext,
  PluginHookReplyPayloadSendingEvent,
  PluginHookReplyPayloadSendingResult,
  PluginHookReplyPayload,
  PluginHookReplyDispatchContext,
  PluginHookReplyDispatchEvent,
  PluginHookReplyDispatchResult,
} from "../plugins/types.js";
/** Host config type shared with plugins. */
export type { OpenClawConfig } from "../config/config.js";
/** Outbound identity shape used by channel send adapters. */
export type { OutboundIdentity } from "../infra/outbound/identity.js";
/** Reply history entry shape passed to channel/plugin hooks. */
export type { HistoryEntry } from "../auto-reply/reply/history.types.js";
/** Reply payload contract shared by channel plugins. */
export type { ReplyPayload } from "./reply-payload.js";
/** Allowlist match result used by channel security helpers. */
export type { AllowlistMatch } from "../channels/allowlist-match.js";
/** Public channel metadata/setup/probe contracts. */
export type {
  BaseProbeResult,
  ChannelAccountSnapshot,
  ChannelGroupContext,
  ChannelMessageActionName,
  ChannelMeta,
  ChannelSetupInput,
} from "../channels/plugins/types.public.js";
/** Chat type discriminator used by channel adapters. */
export type { ChatType } from "../channels/chat-type.js";
/** Normalized location metadata for channel messages. */
export type { NormalizedLocation } from "../channels/location.js";
/** Channel directory entry returned by directory-capable plugins. */
export type { ChannelDirectoryEntry } from "../channels/plugins/types.core.js";
/** Outbound adapter contract for channel plugins. */
export type { ChannelOutboundAdapter } from "../channels/plugins/types.adapters.js";
/** Poll creation input accepted by channel poll adapters. */
export type { PollInput } from "../polls.js";
/** SecretRef type guard for plugin config handling. */
export { isSecretRef } from "../config/types.secrets.js";
/** Gateway request handler options exposed to plugin gateway methods. */
export type { GatewayRequestHandlerOptions } from "../gateway/server-methods/types.js";
/** Channel messaging/session route contracts for outbound routing. */
export type {
  ChannelOutboundSessionRoute,
  ChannelMessagingAdapter,
} from "../channels/plugins/types.core.js";

function createInlineTextPairingAdapter(params: {
  idLabel: string;
  message: string;
  normalizeAllowEntry?: ChannelPairingAdapter["normalizeAllowEntry"];
  notify: (
    params: Parameters<NonNullable<ChannelPairingAdapter["notifyApproval"]>>[0] & {
      message: string;
    },
  ) => Promise<void> | void;
}): ChannelPairingAdapter {
  return {
    idLabel: params.idLabel,
    normalizeAllowEntry: params.normalizeAllowEntry,
    notifyApproval: async (ctx) => {
      await params.notify({ ...ctx, message: params.message });
    },
  };
}
/** Provider usage snapshot types for usage-reporting plugins. */
export type {
  ProviderUsageSnapshot,
  UsageProviderId,
  UsageWindow,
} from "../infra/provider-usage.types.js";
/** Context passed to channel message action handlers. */
export type { ChannelMessageActionContext } from "../channels/plugins/types.public.js";
/** Channel plugin definition contract. */
export type { ChannelPlugin } from "../channels/plugins/types.plugin.js";
/** UI hint metadata for channel config fields. */
export type { ChannelConfigUiHint } from "../channels/plugins/types.config.js";
/** Plugin runtime and logger contracts passed during registration. */
export type { PluginRuntime, RuntimeLogger } from "../plugins/runtime/types.js";
/** Wizard prompt helper contract used by setup flows. */
export type { WizardPrompter } from "../wizard/prompts.js";

/** Define the main plugin entry module shape. */
export { definePluginEntry } from "./plugin-entry.js";
/** Plugin config schema builders and empty schema sentinel. */
export {
  buildJsonPluginConfigSchema,
  buildPluginConfigSchema,
  emptyPluginConfigSchema,
} from "../plugins/config-schema.js";
/** Keyed async queue utilities for serialized plugin work. */
export { KeyedAsyncQueue, enqueueKeyedTask } from "./keyed-async-queue.js";
/** Dedupe cache helpers for plugin send/probe flows. */
export { createDedupeCache, resolveGlobalDedupeCache } from "../infra/dedupe.js";
/** Secure random token/UUID helpers for plugin pairing and setup. */
export { generateSecureToken, generateSecureUuid } from "../infra/secure-random.js";
/** Context-engine delegation helpers exposed to memory/context plugins. */
export {
  buildMemorySystemPromptAddition,
  delegateCompactionToRuntime,
} from "../context-engine/delegate.js";
/** Account id constants and normalization for channel config. */
export { DEFAULT_ACCOUNT_ID, normalizeAccountId } from "../routing/session-key.js";
/** Channel config schema builders and empty schema sentinel. */
export {
  buildChannelConfigSchema,
  buildJsonChannelConfigSchema,
  emptyChannelConfigSchema,
} from "../channels/plugins/config-schema.js";
/** Account setup migration helpers for channel config sections. */
export {
  applyAccountNameToChannelSection,
  migrateBaseNameToDefaultAccount,
} from "../channels/plugins/setup-helpers.js";
/** Channel config mutation helpers for account entries. */
export {
  clearAccountEntryFields,
  deleteAccountFromConfigSection,
  setAccountEnabledInConfigSection,
} from "../channels/plugins/config-helpers.js";
/** Channel pairing hint formatting and delimited-entry parsing helpers. */
export {
  formatPairingApproveHint,
  parseOptionalDelimitedEntries,
} from "../channels/plugins/helpers.js";
/** TypeBox schema helpers for agent/channel tool parameters. */
export {
  channelTargetSchema,
  channelTargetsSchema,
  optionalStringEnum,
  stringEnum,
} from "../agents/schema/typebox.js";
/** Secret file size limits and bounded read helpers. */
export {
  DEFAULT_SECRET_FILE_MAX_BYTES,
  loadSecretFileSync,
  readSecretFileSync,
  tryReadSecretFileSync,
} from "../infra/secret-file.js";
/** Secret file read option/result contracts. */
export type { SecretFileReadOptions, SecretFileReadResult } from "../infra/secret-file.js";

/** Resolve gateway bind URL from config/env inputs. */
export { resolveGatewayBindUrl } from "../shared/gateway-bind-url.js";
/** Gateway bind URL resolution result. */
export type { GatewayBindUrlResult } from "../shared/gateway-bind-url.js";
/** Resolve gateway port from config/env inputs. */
export { resolveGatewayPort } from "../config/paths.js";
/** Create a subsystem-scoped logger for plugin helpers. */
export { createSubsystemLogger } from "../logging/subsystem.js";
/** Slug normalization helpers shared by channel/user identifiers. */
export { normalizeAtHashSlug, normalizeHyphenSlug } from "../shared/string-normalization.js";
/** Create a gated action helper for tool execution. */
export { createActionGate } from "../agents/tools/common.js";
/** Common agent tool result and parameter reader helpers. */
export {
  jsonResult,
  readNumberParam,
  readReactionParams,
  readStringArrayParam,
  readStringParam,
} from "../agents/tools/common.js";
/** Parse a strict positive integer from user/config input. */
export { parseStrictPositiveInteger } from "../infra/parse-finite-number.js";
/** Trusted proxy and client IP helpers for gateway-facing plugins. */
export { isTrustedProxyAddress, resolveClientIp } from "../gateway/net.js";
/** Format timestamps in a configured timezone. */
export { formatZonedTimestamp } from "../infra/format-time/format-datetime.js";
/** Resolve persisted ACP binding records from config. */
export { resolveConfiguredAcpBindingRecord } from "../acp/persistent-bindings.resolve.js";

/** Lazily prepare a configured ACP binding without loading lifecycle code at module import. */
export async function ensureConfiguredAcpBindingReady(params: {
  cfg: OpenClawConfig;
  configuredBinding: ResolvedConfiguredAcpBinding | null;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const runtime = await import("../acp/persistent-bindings.lifecycle.js");
  return runtime.ensureConfiguredAcpBindingReady(params);
}

/** Resolve Tailnet host state using an injectable command runner. */
export { resolveTailnetHostWithRunner } from "../shared/tailscale-status.js";
/** Tailscale command runner/result contracts. */
export type {
  TailscaleStatusCommandResult,
  TailscaleStatusCommandRunner,
} from "../shared/tailscale-status.js";
/** Route peer/session-key helpers for channel plugins. */
export {
  buildAgentSessionKey,
  type RoutePeer,
  type RoutePeerKind,
} from "../routing/resolve-route.js";
/** Resolve parent/thread session keys for channel thread routing. */
export { resolveThreadSessionKeys } from "../routing/session-key.js";

/** Parameter shape accepted by channel outbound session route resolvers. */
export type ChannelOutboundSessionRouteParams = Parameters<
  NonNullable<ChannelMessagingAdapter["resolveOutboundSessionRoute"]>
>[0];

let cachedSdkChatChannelMeta:
  | {
      cacheKey: string;
      metaById: ReturnType<typeof buildChatChannelMetaById>;
    }
  | undefined;

function resolveSdkChatChannelMeta(id: string) {
  const cacheKey = resolveBundledPluginsDir(process.env) ?? "";
  if (cachedSdkChatChannelMeta?.cacheKey !== cacheKey) {
    cachedSdkChatChannelMeta = {
      cacheKey,
      metaById: buildChatChannelMetaById(),
    };
  }
  return cachedSdkChatChannelMeta.metaById[id];
}

/** Return bundled chat-channel metadata by id using the SDK metadata cache. */
export function getChatChannelMeta(id: ChatChannelId): ChannelMeta {
  return resolveSdkChatChannelMeta(id);
}

/** Remove one of the known provider prefixes from a free-form target string. */
export function stripChannelTargetPrefix(raw: string, ...providers: string[]): string {
  const trimmed = raw.trim();
  for (const provider of providers) {
    const prefix = `${normalizeLowercaseStringOrEmpty(provider)}:`;
    if (normalizeLowercaseStringOrEmpty(trimmed).startsWith(prefix)) {
      return trimmed.slice(prefix.length).trim();
    }
  }
  return trimmed;
}

/** Remove generic target-kind prefixes such as `user:` or `group:`. */
export function stripTargetKindPrefix(raw: string): string {
  return raw.replace(/^(user|channel|group|conversation|room|dm):/i, "").trim();
}

/**
 * Build the canonical outbound session route payload returned by channel
 * message adapters.
 */
export function buildChannelOutboundSessionRoute(params: {
  cfg: OpenClawConfig;
  agentId: string;
  channel: string;
  accountId?: string | null;
  peer: { kind: "direct" | "group" | "channel"; id: string };
  chatType: "direct" | "group" | "channel";
  from: string;
  to: string;
  threadId?: string | number;
}): ChannelOutboundSessionRoute {
  const baseSessionKey = buildOutboundBaseSessionKey({
    cfg: params.cfg,
    agentId: params.agentId,
    channel: params.channel,
    accountId: params.accountId,
    peer: params.peer,
  });
  return {
    sessionKey: baseSessionKey,
    baseSessionKey,
    peer: params.peer,
    chatType: params.chatType,
    from: params.from,
    to: params.to,
    ...(params.threadId !== undefined ? { threadId: params.threadId } : {}),
  };
}

/** Source priority token for selecting a thread id during outbound routing. */
export type ThreadAwareOutboundSessionRouteThreadSource =
  | "replyToId"
  | "threadId"
  | "currentSession";

/** Facts exposed to plugins when deciding whether current-thread recovery is valid. */
export type ThreadAwareOutboundSessionRouteRecoveryContext = {
  route: ChannelOutboundSessionRoute;
  currentBaseSessionKey: string;
  currentThreadId: string;
};

/** Recover a thread id from the current session key when it belongs to the same route. */
export function recoverCurrentThreadSessionId(params: {
  route: ChannelOutboundSessionRoute;
  currentSessionKey?: string | null;
  canRecover?: (context: ThreadAwareOutboundSessionRouteRecoveryContext) => boolean;
}): string | undefined {
  const current = parseThreadSessionSuffix(params.currentSessionKey);
  if (!current.baseSessionKey || !current.threadId) {
    return undefined;
  }
  if (
    normalizeSessionKeyPreservingOpaquePeerIds(current.baseSessionKey) !==
    normalizeSessionKeyPreservingOpaquePeerIds(params.route.baseSessionKey)
  ) {
    return undefined;
  }
  const context = {
    route: params.route,
    currentBaseSessionKey: current.baseSessionKey,
    currentThreadId: current.threadId,
  };
  if (params.canRecover && !params.canRecover(context)) {
    return undefined;
  }
  return current.threadId;
}

/** Build an outbound route that applies reply/thread/current-session precedence. */
export function buildThreadAwareOutboundSessionRoute(params: {
  route: ChannelOutboundSessionRoute;
  replyToId?: string | number | null;
  threadId?: string | number | null;
  currentSessionKey?: string | null;
  precedence?: readonly ThreadAwareOutboundSessionRouteThreadSource[];
  useSuffix?: boolean;
  parentSessionKey?: string;
  normalizeThreadId?: (threadId: string) => string;
  canRecoverCurrentThread?: (context: ThreadAwareOutboundSessionRouteRecoveryContext) => boolean;
}): ChannelOutboundSessionRoute {
  const recoveredThreadId = recoverCurrentThreadSessionId({
    route: params.route,
    currentSessionKey: params.currentSessionKey,
    canRecover: params.canRecoverCurrentThread,
  });
  const candidates: Record<
    ThreadAwareOutboundSessionRouteThreadSource,
    { routeThreadId: string | number; sessionThreadId: string } | undefined
  > = {
    replyToId: resolveThreadAwareOutboundCandidate(params.replyToId),
    threadId: resolveThreadAwareOutboundCandidate(params.threadId),
    currentSession: resolveThreadAwareOutboundCandidate(recoveredThreadId),
  };
  const precedence = params.precedence ?? ["replyToId", "threadId", "currentSession"];
  const candidate = precedence.map((source) => candidates[source]).find(Boolean);
  const threadKeys = resolveThreadSessionKeys({
    baseSessionKey: params.route.baseSessionKey,
    threadId: candidate?.sessionThreadId,
    parentSessionKey: candidate ? params.parentSessionKey : undefined,
    useSuffix: params.useSuffix,
    normalizeThreadId: params.normalizeThreadId,
  });
  return {
    ...params.route,
    sessionKey: threadKeys.sessionKey,
    ...(candidate !== undefined ? { threadId: candidate.routeThreadId } : {}),
  };
}

function resolveThreadAwareOutboundCandidate(
  threadId?: string | number | null,
): { routeThreadId: string | number; sessionThreadId: string } | undefined {
  const sessionThreadId = normalizeOutboundThreadId(threadId);
  if (sessionThreadId === undefined) {
    return undefined;
  }
  return {
    routeThreadId: typeof threadId === "number" ? threadId : sessionThreadId,
    sessionThreadId,
  };
}

/** Options for a channel plugin entry that should register a channel capability. */
type ChannelEntryConfigSchema<TPlugin> =
  TPlugin extends ChannelPlugin<unknown>
    ? NonNullable<TPlugin["configSchema"]>
    : ChannelConfigSchema;

type DefineChannelPluginEntryOptions<TPlugin = ChannelPlugin> = {
  id: string;
  name: string;
  description: string;
  plugin: TPlugin;
  configSchema?: ChannelEntryConfigSchema<TPlugin> | (() => ChannelEntryConfigSchema<TPlugin>);
  setRuntime?: (runtime: PluginRuntime) => void;
  registerCliMetadata?: (api: OpenClawPluginApi) => void;
  registerFull?: (api: OpenClawPluginApi) => void;
};

type DefinedChannelPluginEntry<TPlugin> = {
  id: string;
  name: string;
  description: string;
  configSchema: ChannelEntryConfigSchema<TPlugin>;
  register: (api: OpenClawPluginApi) => void;
  channelPlugin: TPlugin;
  setChannelRuntime?: (runtime: PluginRuntime) => void;
};

type CreateChannelPluginBaseOptions<TResolvedAccount> = {
  id: ChannelPlugin<TResolvedAccount>["id"];
  meta?: Partial<NonNullable<ChannelPlugin<TResolvedAccount>["meta"]>>;
  setupWizard?: NonNullable<ChannelPlugin<TResolvedAccount>["setupWizard"]>;
  capabilities?: ChannelPlugin<TResolvedAccount>["capabilities"];
  commands?: ChannelPlugin<TResolvedAccount>["commands"];
  doctor?: ChannelPlugin<TResolvedAccount>["doctor"];
  agentPrompt?: ChannelPlugin<TResolvedAccount>["agentPrompt"];
  streaming?: ChannelPlugin<TResolvedAccount>["streaming"];
  reload?: ChannelPlugin<TResolvedAccount>["reload"];
  gatewayMethods?: ChannelPlugin<TResolvedAccount>["gatewayMethods"];
  gatewayMethodDescriptors?: ChannelPlugin<TResolvedAccount>["gatewayMethodDescriptors"];
  configSchema?: ChannelPlugin<TResolvedAccount>["configSchema"];
  config?: ChannelPlugin<TResolvedAccount>["config"];
  security?: ChannelPlugin<TResolvedAccount>["security"];
  setup: NonNullable<ChannelPlugin<TResolvedAccount>["setup"]>;
  groups?: ChannelPlugin<TResolvedAccount>["groups"];
};

type CreatedChannelPluginBase<TResolvedAccount> = Pick<
  ChannelPlugin<TResolvedAccount>,
  "id" | "meta" | "setup"
> &
  Partial<
    Pick<
      ChannelPlugin<TResolvedAccount>,
      | "setupWizard"
      | "capabilities"
      | "commands"
      | "doctor"
      | "agentPrompt"
      | "streaming"
      | "reload"
      | "gatewayMethods"
      | "gatewayMethodDescriptors"
      | "configSchema"
      | "config"
      | "security"
      | "groups"
    >
  >;

/**
 * Canonical entry helper for channel plugins.
 *
 * This wraps `definePluginEntry(...)`, registers the channel capability, and
 * optionally exposes extra full-runtime registration such as tools or gateway
 * handlers that only make sense outside setup-only registration modes.
 */
export function defineChannelPluginEntry<TPlugin>({
  id,
  name,
  description,
  plugin,
  configSchema,
  setRuntime,
  registerCliMetadata,
  registerFull,
}: DefineChannelPluginEntryOptions<TPlugin>): DefinedChannelPluginEntry<TPlugin> {
  const resolvedConfigSchema: ChannelEntryConfigSchema<TPlugin> =
    typeof configSchema === "function"
      ? configSchema()
      : ((configSchema ?? emptyChannelConfigSchema()) as ChannelEntryConfigSchema<TPlugin>);
  const entry = {
    id,
    name,
    description,
    configSchema: resolvedConfigSchema,
    register(api: OpenClawPluginApi) {
      if (api.registrationMode === "cli-metadata") {
        registerCliMetadata?.(api);
        return;
      }
      if (api.registrationMode === "tool-discovery") {
        registerFull?.(api);
        return;
      }
      api.registerChannel({ plugin: plugin as ChannelPlugin });
      setRuntime?.(api.runtime);
      if (api.registrationMode === "discovery") {
        registerCliMetadata?.(api);
        return;
      }
      if (api.registrationMode !== "full") {
        return;
      }
      registerCliMetadata?.(api);
      registerFull?.(api);
    },
  };
  return {
    ...entry,
    channelPlugin: plugin,
    ...(setRuntime ? { setChannelRuntime: setRuntime } : {}),
  };
}

/**
 * Minimal setup-entry helper for channels that ship a separate `setup-entry.ts`.
 *
 * The setup entry only needs to export `{ plugin }`, but using this helper
 * keeps the shape explicit in examples and generated typings.
 */
export function defineSetupPluginEntry<TPlugin>(plugin: TPlugin) {
  return { plugin };
}

type ChatChannelPluginBase<TResolvedAccount, Probe, Audit> = Omit<
  ChannelPlugin<TResolvedAccount, Probe, Audit>,
  "security" | "pairing" | "threading" | "outbound"
> &
  Partial<
    Pick<
      ChannelPlugin<TResolvedAccount, Probe, Audit>,
      "security" | "pairing" | "threading" | "outbound"
    >
  >;

type ChatChannelSecurityOptions<TResolvedAccount extends { accountId?: string | null }> = {
  dm: {
    channelKey: string;
    resolvePolicy: (account: TResolvedAccount) => string | null | undefined;
    resolveAllowFrom: (account: TResolvedAccount) => Array<string | number> | null | undefined;
    resolveFallbackAccountId?: (account: TResolvedAccount) => string | null | undefined;
    defaultPolicy?: string;
    allowFromPathSuffix?: string;
    policyPathSuffix?: string;
    approveChannelId?: string;
    approveHint?: string;
    normalizeEntry?: (raw: string) => string;
    inheritSharedDefaultsFromDefaultAccount?: boolean;
  };
  collectWarnings?: ChannelSecurityAdapter<TResolvedAccount>["collectWarnings"];
  collectAuditFindings?: ChannelSecurityAdapter<TResolvedAccount>["collectAuditFindings"];
};

type ChatChannelPairingOptions = {
  text: {
    idLabel: string;
    message: string;
    normalizeAllowEntry?: ChannelPairingAdapter["normalizeAllowEntry"];
    notify: (
      params: Parameters<NonNullable<ChannelPairingAdapter["notifyApproval"]>>[0] & {
        message: string;
      },
    ) => Promise<void> | void;
  };
};

type ChatChannelThreadingReplyModeOptions<TResolvedAccount> =
  | { topLevelReplyToMode: string }
  | {
      scopedAccountReplyToMode: {
        resolveAccount: (cfg: OpenClawConfig, accountId?: string | null) => TResolvedAccount;
        resolveReplyToMode: (
          account: TResolvedAccount,
          chatType?: string | null,
        ) => ReplyToMode | null | undefined;
        fallback?: ReplyToMode;
      };
    }
  | {
      resolveReplyToMode: NonNullable<ChannelThreadingAdapter["resolveReplyToMode"]>;
    };

type ChatChannelThreadingOptions<TResolvedAccount> =
  ChatChannelThreadingReplyModeOptions<TResolvedAccount> &
    Omit<ChannelThreadingAdapter, "resolveReplyToMode">;

type ChatChannelAttachedOutboundOptions = {
  base: Omit<ChannelOutboundAdapter, "sendText" | "sendMedia" | "sendPoll">;
  attachedResults: {
    channel: string;
    sendText?: (
      ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendText"]>>[0],
    ) => MaybePromise<Omit<OutboundDeliveryResult, "channel">>;
    sendMedia?: (
      ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendMedia"]>>[0],
    ) => MaybePromise<Omit<OutboundDeliveryResult, "channel">>;
    sendPoll?: (
      ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendPoll"]>>[0],
    ) => MaybePromise<Omit<ChannelPollResult, "channel">>;
  };
};

type MaybePromise<T> = T | Promise<T>;

function createInlineAttachedChannelResultAdapter(
  params: ChatChannelAttachedOutboundOptions["attachedResults"],
) {
  return {
    sendText: params.sendText
      ? async (ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendText"]>>[0]) => ({
          channel: params.channel,
          ...(await params.sendText!(ctx)),
        })
      : undefined,
    sendMedia: params.sendMedia
      ? async (ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendMedia"]>>[0]) => ({
          channel: params.channel,
          ...(await params.sendMedia!(ctx)),
        })
      : undefined,
    sendPoll: params.sendPoll
      ? async (ctx: Parameters<NonNullable<ChannelOutboundAdapter["sendPoll"]>>[0]) => ({
          channel: params.channel,
          ...(await params.sendPoll!(ctx)),
        })
      : undefined,
  } satisfies Pick<ChannelOutboundAdapter, "sendText" | "sendMedia" | "sendPoll">;
}

function resolveChatChannelSecurity<TResolvedAccount extends { accountId?: string | null }>(
  security:
    | ChannelSecurityAdapter<TResolvedAccount>
    | ChatChannelSecurityOptions<TResolvedAccount>
    | undefined,
): ChannelSecurityAdapter<TResolvedAccount> | undefined {
  if (!security) {
    return undefined;
  }
  if (!("dm" in security)) {
    return security;
  }
  return {
    resolveDmPolicy: ({ cfg, accountId, account }) =>
      buildAccountScopedDmSecurityPolicy({
        cfg,
        channelKey: security.dm.channelKey,
        accountId,
        fallbackAccountId: security.dm.resolveFallbackAccountId?.(account) ?? account.accountId,
        policy: security.dm.resolvePolicy(account),
        allowFrom: security.dm.resolveAllowFrom(account) ?? [],
        defaultPolicy: security.dm.defaultPolicy,
        allowFromPathSuffix: security.dm.allowFromPathSuffix,
        policyPathSuffix: security.dm.policyPathSuffix,
        approveChannelId: security.dm.approveChannelId,
        approveHint: security.dm.approveHint,
        normalizeEntry: security.dm.normalizeEntry,
        inheritSharedDefaultsFromDefaultAccount:
          security.dm.inheritSharedDefaultsFromDefaultAccount,
      }),
    ...(security.collectWarnings ? { collectWarnings: security.collectWarnings } : {}),
    ...(security.collectAuditFindings
      ? { collectAuditFindings: security.collectAuditFindings }
      : {}),
  };
}

function resolveChatChannelPairing(
  pairing: ChannelPairingAdapter | ChatChannelPairingOptions | undefined,
): ChannelPairingAdapter | undefined {
  if (!pairing) {
    return undefined;
  }
  if (!("text" in pairing)) {
    return pairing;
  }
  return createInlineTextPairingAdapter(pairing.text);
}

function resolveChatChannelThreading<TResolvedAccount>(
  threading: ChannelThreadingAdapter | ChatChannelThreadingOptions<TResolvedAccount> | undefined,
): ChannelThreadingAdapter | undefined {
  if (!threading) {
    return undefined;
  }
  if (!("topLevelReplyToMode" in threading) && !("scopedAccountReplyToMode" in threading)) {
    return threading;
  }

  let resolveReplyToMode: ChannelThreadingAdapter["resolveReplyToMode"];
  if ("topLevelReplyToMode" in threading) {
    resolveReplyToMode = createTopLevelChannelReplyToModeResolver(threading.topLevelReplyToMode);
  } else {
    resolveReplyToMode = createScopedAccountReplyToModeResolver<TResolvedAccount>(
      threading.scopedAccountReplyToMode,
    );
  }

  return {
    ...threading,
    resolveReplyToMode,
  };
}

function resolveChatChannelOutbound(
  outbound: ChannelOutboundAdapter | ChatChannelAttachedOutboundOptions | undefined,
): ChannelOutboundAdapter | undefined {
  if (!outbound) {
    return undefined;
  }
  if (!("attachedResults" in outbound)) {
    return outbound;
  }
  return {
    ...outbound.base,
    ...createInlineAttachedChannelResultAdapter(outbound.attachedResults),
  };
}

// Shared higher-level builder for chat-style channels that mostly compose
// scoped DM security, text pairing, reply threading, and attached send results.
/** Compose common chat-channel security, pairing, threading, and outbound adapters. */
export function createChatChannelPlugin<
  TResolvedAccount extends { accountId?: string | null },
  Probe = unknown,
  Audit = unknown,
>(params: {
  base: ChatChannelPluginBase<TResolvedAccount, Probe, Audit>;
  security?:
    | ChannelSecurityAdapter<TResolvedAccount>
    | ChatChannelSecurityOptions<TResolvedAccount>;
  pairing?: ChannelPairingAdapter | ChatChannelPairingOptions;
  threading?: ChannelThreadingAdapter | ChatChannelThreadingOptions<TResolvedAccount>;
  outbound?: ChannelOutboundAdapter | ChatChannelAttachedOutboundOptions;
}): ChannelPlugin<TResolvedAccount, Probe, Audit> {
  return {
    ...params.base,
    conversationBindings: {
      supportsCurrentConversationBinding: true,
      ...params.base.conversationBindings,
    },
    ...(params.security ? { security: resolveChatChannelSecurity(params.security) } : {}),
    ...(params.pairing ? { pairing: resolveChatChannelPairing(params.pairing) } : {}),
    ...(params.threading ? { threading: resolveChatChannelThreading(params.threading) } : {}),
    ...(params.outbound ? { outbound: resolveChatChannelOutbound(params.outbound) } : {}),
  } as ChannelPlugin<TResolvedAccount, Probe, Audit>;
}

// Shared base object for channel plugins that only need to override a few optional surfaces.
/** Build the common channel plugin base object with bundled metadata defaults. */
export function createChannelPluginBase<TResolvedAccount>(
  params: CreateChannelPluginBaseOptions<TResolvedAccount>,
): CreatedChannelPluginBase<TResolvedAccount> {
  return {
    id: params.id,
    meta: {
      ...resolveSdkChatChannelMeta(params.id),
      ...params.meta,
    },
    ...(params.setupWizard ? { setupWizard: params.setupWizard } : {}),
    ...(params.capabilities ? { capabilities: params.capabilities } : {}),
    ...(params.commands ? { commands: params.commands } : {}),
    ...(params.doctor ? { doctor: params.doctor } : {}),
    ...(params.agentPrompt ? { agentPrompt: params.agentPrompt } : {}),
    ...(params.streaming ? { streaming: params.streaming } : {}),
    ...(params.reload ? { reload: params.reload } : {}),
    ...(params.gatewayMethods ? { gatewayMethods: params.gatewayMethods } : {}),
    ...(params.gatewayMethodDescriptors
      ? { gatewayMethodDescriptors: params.gatewayMethodDescriptors }
      : {}),
    ...(params.configSchema ? { configSchema: params.configSchema } : {}),
    ...(params.config ? { config: params.config } : {}),
    ...(params.security ? { security: params.security } : {}),
    ...(params.groups ? { groups: params.groups } : {}),
    setup: params.setup,
  } as CreatedChannelPluginBase<TResolvedAccount>;
}
