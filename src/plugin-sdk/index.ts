// Shared root plugin-sdk surface.
// Keep this entry intentionally tiny. Channel/provider helpers belong on
// dedicated subpaths or, for legacy consumers, the compat surface.

/** Re-exported API for src/plugin-sdk. */
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
/** Re-exported API for src/plugin-sdk, starting with Channel Gateway Context. */
export type { ChannelGatewayContext } from "../channels/plugins/types.adapters.js";
/** Re-exported API for src/plugin-sdk, starting with Channel Config Schema. */
export type { ChannelConfigSchema, ChannelConfigUiHint } from "../channels/plugins/types.config.js";
/** Re-exported API for src/plugin-sdk, starting with Channel Setup Input. */
export type { ChannelSetupInput } from "../channels/plugins/types.public.js";
/** Re-exported API for src/plugin-sdk, starting with Channel Setup Adapter. */
export type { ChannelSetupAdapter } from "../channels/plugins/types.adapters.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  ChannelConfiguredBindingConversationRef,
  ChannelConfiguredBindingMatch,
  ChannelConfiguredBindingProvider,
} from "../channels/plugins/types.adapters.js";
/** Re-exported API for src/plugin-sdk, starting with Channel Plugin. */
export type { ChannelPlugin } from "../channels/plugins/types.plugin.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  ConfiguredBindingConversation,
  ConfiguredBindingResolution,
  CompiledConfiguredBinding,
  StatefulBindingTargetDescriptor,
} from "../channels/plugins/binding-types.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  StatefulBindingTargetDriver,
  StatefulBindingTargetReadyResult,
  StatefulBindingTargetResetResult,
  StatefulBindingTargetSessionResult,
} from "../channels/plugins/stateful-target-drivers.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  ChannelSetupWizard,
  ChannelSetupWizardAllowFromEntry,
} from "../channels/plugins/setup-wizard-types.js";
/** Re-exported API for src/plugin-sdk. */
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
/** Re-exported API for src/plugin-sdk. */
export type {
  UnifiedModelCatalogEntry,
  UnifiedModelCatalogKind,
  UnifiedModelCatalogSource,
} from "../model-catalog/types.js";
/** Re-exported API for src/plugin-sdk, starting with Provider Runtime Model. */
export type { ProviderRuntimeModel } from "../plugins/provider-runtime-model.types.js";
/** Re-exported API for src/plugin-sdk, starting with Resolved Provider Runtime Auth. */
export type { ResolvedProviderRuntimeAuth } from "../plugins/runtime/model-auth-types.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  PluginRuntime,
  RuntimeLogger,
  SubagentRunParams,
  SubagentRunResult,
} from "../plugins/runtime/types.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  LlmCompleteCaller,
  LlmCompleteMessage,
  LlmCompleteParams,
  LlmCompleteResult,
  LlmCompleteUsage,
} from "../plugins/runtime/types-core.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  BoundTaskFlowsRuntime,
  BoundTaskRunsRuntime,
  DetachedTaskLifecycleRuntime,
  PluginRuntimeTaskFlows,
  PluginRuntimeTaskRuns,
  PluginRuntimeTasks,
} from "../plugins/runtime/runtime-tasks.types.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  TaskFlowDetail,
  TaskFlowView,
  TaskRunAggregateSummary,
  TaskRunCancelResult,
  TaskRunDetail,
  TaskRunView,
} from "../plugins/runtime/task-domain-types.js";
/** Re-exported API for src/plugin-sdk, starting with Open Claw Config. */
export type { OpenClawConfig } from "../config/config.js";
/** @deprecated Use OpenClawConfig instead */
export type { OpenClawConfig as ClawdbotConfig } from "../config/config.js";
/** @deprecated Use OpenClawConfig instead */
export type { OpenClawConfig as OpenClawSchemaType } from "../config/config.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  MemoryPluginCapability,
  MemoryPluginPublicArtifact,
  MemoryPluginPublicArtifactsProvider,
} from "../plugins/memory-state.js";
/** Re-exported API for src/plugin-sdk, starting with Cli Backend Config. */
export type { CliBackendConfig } from "../config/types.js";
/** Shared type for this surface in src/plugin-sdk. */
export type * from "./image-generation.js";
/** Shared type for this surface in src/plugin-sdk. */
export type * from "./music-generation.js";
/** Re-exported API for src/plugin-sdk, starting with Secret Input. */
export type { SecretInput, SecretRef } from "../config/types.secrets.js";
/** Re-exported API for src/plugin-sdk, starting with Runtime Env. */
export type { RuntimeEnv } from "../runtime.js";
/** Re-exported API for src/plugin-sdk, starting with Hook Entry. */
export type { HookEntry } from "../hooks/types.js";
/** Re-exported API for src/plugin-sdk, starting with Reply Payload. */
export type { ReplyPayload } from "./reply-payload.js";
/** Re-exported API for src/plugin-sdk, starting with Wizard Prompter. */
export type { WizardPrompter } from "../wizard/prompts.js";
/** Re-exported API for src/plugin-sdk. */
export type {
  ContextEngineFactory,
  ContextEngineFactoryContext,
} from "../context-engine/registry.js";
/** Re-exported API for src/plugin-sdk, starting with Diagnostic Event Payload. */
export type { DiagnosticEventPayload } from "../infra/diagnostic-events.js";
/** Re-exported API for src/plugin-sdk, starting with Diagnostic Trace Context. */
export type { DiagnosticTraceContext } from "../infra/diagnostic-trace-context.js";
/** Re-exported API for src/plugin-sdk. */
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

/** Re-exported API for src/plugin-sdk, starting with empty Plugin Config Schema. */
export { emptyPluginConfigSchema } from "../plugins/config-schema.js";
/** Re-exported API for src/plugin-sdk, starting with register Context Engine. */
export { registerContextEngine } from "../context-engine/registry.js";
/** Re-exported API for src/plugin-sdk, starting with assert Context Engine Host Support. */
export { assertContextEngineHostSupport } from "../context-engine/host-compat.js";
/** Re-exported API for src/plugin-sdk. */
export {
  buildMemorySystemPromptAddition,
  delegateCompactionToRuntime,
} from "../context-engine/delegate.js";
/** Re-exported API for src/plugin-sdk, starting with on Diagnostic Event. */
export { onDiagnosticEvent } from "../infra/diagnostic-events.js";
/** Re-exported API for src/plugin-sdk, starting with optional String Enum. */
export { optionalStringEnum, stringEnum } from "../agents/schema/typebox.js";
