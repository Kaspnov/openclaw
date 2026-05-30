// Shared root plugin-sdk surface.
// Keep this entry intentionally tiny. Channel/provider helpers belong on
// dedicated subpaths or, for legacy consumers, the compat surface.

/** Public channel identity, capability, status, and action adapter types. */
export type {
  ChannelAccountSnapshot,
  ChannelAgentTool,
  ChannelAgentToolFactory,
  ChannelCapabilities,
  ChannelId,
  ChannelMessageActionAdapter,
  ChannelMessageActionContext,
  ChannelMessageActionName,
  ChannelStatusIssue,
} from "../channels/plugins/types.public.js";
/** Gateway runtime context exposed to channel plugins. */
export type { ChannelGatewayContext } from "../channels/plugins/types.adapters.js";
/** Channel plugin config schema and UI hint types. */
export type { ChannelConfigSchema, ChannelConfigUiHint } from "../channels/plugins/types.config.js";
/** Channel setup input contract exposed to setup flows. */
export type { ChannelSetupInput } from "../channels/plugins/types.public.js";
/** Channel setup adapter contract exposed to plugins. */
export type { ChannelSetupAdapter } from "../channels/plugins/types.adapters.js";
/** Configured binding resolution types for channel route matching. */
export type {
  ChannelConfiguredBindingConversationRef,
  ChannelConfiguredBindingMatch,
  ChannelConfiguredBindingProvider,
} from "../channels/plugins/types.adapters.js";
/** Channel plugin entry contract. */
export type { ChannelPlugin } from "../channels/plugins/types.plugin.js";
/** Stateful binding target descriptors used by channel setup and routing. */
export type {
  ConfiguredBindingConversation,
  ConfiguredBindingResolution,
  CompiledConfiguredBinding,
  StatefulBindingTargetDescriptor,
} from "../channels/plugins/binding-types.js";
/** Stateful binding target driver contracts for setup/session flows. */
export type {
  StatefulBindingTargetDriver,
  StatefulBindingTargetReadyResult,
  StatefulBindingTargetResetResult,
  StatefulBindingTargetSessionResult,
} from "../channels/plugins/stateful-target-drivers.js";
/** Setup wizard contracts for channel plugin onboarding. */
export type {
  ChannelSetupWizard,
  ChannelSetupWizardAllowFromEntry,
} from "../channels/plugins/setup-wizard-types.js";
/** Core plugin, provider, logging, auth, and catalog extension contracts. */
export type {
  AgentHarness,
  AnyAgentTool,
  CliBackendPlugin,
  MediaUnderstandingProviderPlugin,
  OpenClawPluginApi,
  OpenClawPluginConfigSchema,
  PluginLogger,
  ProviderAuthContext,
  ProviderAuthResult,
  ProviderPreparedRuntimeAuth,
  RealtimeTranscriptionProviderPlugin,
  SpeechProviderPlugin,
  UnifiedModelCatalogProviderContext,
  UnifiedModelCatalogProviderPlugin,
} from "../plugins/types.js";
/** Unified model catalog entry and source metadata types. */
export type {
  UnifiedModelCatalogEntry,
  UnifiedModelCatalogKind,
  UnifiedModelCatalogSource,
} from "../model-catalog/types.js";
/** Provider runtime model descriptor exposed to provider plugins. */
export type { ProviderRuntimeModel } from "../plugins/provider-runtime-model.types.js";
/** Resolved provider runtime auth payload passed to provider transports. */
export type { ResolvedProviderRuntimeAuth } from "../plugins/runtime/model-auth-types.js";
/** Plugin runtime and subagent run contracts. */
export type {
  PluginRuntime,
  RuntimeLogger,
  SubagentRunParams,
  SubagentRunResult,
} from "../plugins/runtime/types.js";
/** LLM completion helper request, result, caller, and usage types. */
export type {
  LlmCompleteCaller,
  LlmCompleteMessage,
  LlmCompleteParams,
  LlmCompleteResult,
  LlmCompleteUsage,
} from "../plugins/runtime/types-core.js";
/** Runtime task facade types for plugin task flows and runs. */
export type {
  BoundTaskFlowsRuntime,
  BoundTaskRunsRuntime,
  DetachedTaskLifecycleRuntime,
  PluginRuntimeTaskFlows,
  PluginRuntimeTaskRuns,
  PluginRuntimeTasks,
} from "../plugins/runtime/runtime-tasks.types.js";
/** Task flow/run view and aggregate domain types. */
export type {
  TaskFlowDetail,
  TaskFlowView,
  TaskRunAggregateSummary,
  TaskRunCancelResult,
  TaskRunDetail,
  TaskRunView,
} from "../plugins/runtime/task-domain-types.js";
/** Canonical OpenClaw config type exposed to plugins. */
export type { OpenClawConfig } from "../config/config.js";
/** @deprecated Use OpenClawConfig instead */
export type { OpenClawConfig as ClawdbotConfig } from "../config/config.js";
/** @deprecated Use OpenClawConfig instead */
export type { OpenClawConfig as OpenClawSchemaType } from "../config/config.js";
/** Memory plugin public artifact and capability contracts. */
export type {
  MemoryPluginCapability,
  MemoryPluginPublicArtifact,
  MemoryPluginPublicArtifactsProvider,
} from "../plugins/memory-state.js";
/** CLI backend config type used by agent harness plugins. */
export type { CliBackendConfig } from "../config/types.js";
/** Image-generation plugin contracts. */
export type * from "./image-generation.js";
/** Music-generation plugin contracts. */
export type * from "./music-generation.js";
/** Secret input and reference config types exposed to plugins. */
export type { SecretInput, SecretRef } from "../config/types.secrets.js";
/** Runtime environment descriptor exposed to plugin entrypoints. */
export type { RuntimeEnv } from "../runtime.js";
/** Hook registration descriptor exposed to plugins. */
export type { HookEntry } from "../hooks/types.js";
/** Structured reply payload type exposed to channel and tool plugins. */
export type { ReplyPayload } from "./reply-payload.js";
/** Interactive wizard prompt facade used by setup flows. */
export type { WizardPrompter } from "../wizard/prompts.js";
/** Context engine factory registration contracts. */
export type {
  ContextEngineFactory,
  ContextEngineFactoryContext,
} from "../context-engine/registry.js";
/** Diagnostic event payload shape emitted through SDK diagnostics. */
export type { DiagnosticEventPayload } from "../infra/diagnostic-events.js";
/** Diagnostic trace context carried through plugin operations. */
export type { DiagnosticTraceContext } from "../infra/diagnostic-trace-context.js";
/** Context engine runtime, operation, and transcript rewrite contracts. */
export type {
  AssembleResult,
  BootstrapResult,
  CompactResult,
  ContextEngine,
  ContextEngineHostCapability,
  ContextEngineHostRequirements,
  ContextEngineInfo,
  ContextEngineMaintenanceResult,
  ContextEngineOperation,
  ContextEngineRuntimeContext,
  IngestBatchResult,
  IngestResult,
  SubagentEndReason,
  SubagentSpawnPreparation,
  TranscriptRewriteReplacement,
  TranscriptRewriteRequest,
  TranscriptRewriteResult,
} from "../context-engine/types.js";

/** Empty plugin config schema helper for plugins without settings. */
export { emptyPluginConfigSchema } from "../plugins/config-schema.js";
/** Registers a context engine implementation with the host registry. */
export { registerContextEngine } from "../context-engine/registry.js";
/** Asserts that host context-engine capabilities satisfy plugin requirements. */
export { assertContextEngineHostSupport } from "../context-engine/host-compat.js";
/** Context-engine delegation helpers used by plugin runtimes. */
export {
  buildMemorySystemPromptAddition,
  delegateCompactionToRuntime,
} from "../context-engine/delegate.js";
/** Subscribes to SDK diagnostic events. */
export { onDiagnosticEvent } from "../infra/diagnostic-events.js";
/** TypeBox string enum helpers exposed for plugin schemas. */
export { optionalStringEnum, stringEnum } from "../agents/schema/typebox.js";
