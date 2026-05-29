// plugins hook types helpers and runtime behavior.
import type { AgentMessage } from "../agents/runtime/index.js";
import type { SourceReplyDeliveryMode } from "../auto-reply/get-reply-options.types.js";
import type { ReplyPayload } from "../auto-reply/reply-payload.js";
import type {
  ReplyDispatchKind,
  ReplyDispatcher,
} from "../auto-reply/reply/reply-dispatcher.types.js";
import type { FinalizedMsgContext } from "../auto-reply/templating.js";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import type { TtsAutoMode } from "../config/types.tts.js";
import type { DiagnosticTraceContext } from "../infra/diagnostic-trace-context.js";
import type {
  PluginHookBeforeAgentStartEvent,
  PluginHookBeforeAgentStartResult,
  PluginHookBeforeModelResolveEvent,
  PluginHookBeforeModelResolveResult,
  PluginHookBeforePromptBuildEvent,
  PluginHookBeforePromptBuildResult,
} from "./hook-before-agent-start.types.js";
import type { InputGateDecision } from "./hook-decision-types.js";
import type {
  PluginHookInboundClaimContext,
  PluginHookInboundClaimEvent,
  PluginHookMessageContext,
  PluginHookMessageReceivedEvent,
  PluginHookMessageSendingEvent,
  PluginHookMessageSendingResult,
  PluginHookMessageSentEvent,
} from "./hook-message.types.js";
import type { PluginJsonValue } from "./host-hook-json.js";
import type {
  PluginAgentTurnPrepareEvent,
  PluginAgentTurnPrepareResult,
  PluginHeartbeatPromptContributionEvent,
  PluginHeartbeatPromptContributionResult,
} from "./host-hook-turn-types.js";

/** Re-exported API for src/plugins. */
export type {
  PluginHookBeforeAgentStartEvent,
  PluginHookBeforeAgentStartOverrideResult,
  PluginHookBeforeAgentStartResult,
  PluginHookBeforeModelResolveAttachment,
  PluginHookBeforeModelResolveEvent,
  PluginHookBeforeModelResolveResult,
  PluginHookBeforePromptBuildEvent,
  PluginHookBeforePromptBuildResult,
} from "./hook-before-agent-start.types.js";
/** Re-exported API for src/plugins. */
export {
  PLUGIN_PROMPT_MUTATION_RESULT_FIELDS,
  stripPromptMutationFieldsFromLegacyHookResult,
} from "./hook-before-agent-start.types.js";
/** Re-exported API for src/plugins. */
export type {
  PluginAgentTurnPrepareEvent,
  PluginAgentTurnPrepareResult,
  PluginHeartbeatPromptContributionEvent,
  PluginHeartbeatPromptContributionResult,
} from "./host-hook-turn-types.js";
/** Re-exported API for src/plugins. */
export type {
  PluginHookInboundClaimContext,
  PluginHookInboundClaimEvent,
  PluginHookMessageContext,
  PluginHookMessageReceivedEvent,
  PluginHookMessageSendingEvent,
  PluginHookMessageSendingResult,
  PluginHookMessageSentEvent,
} from "./hook-message.types.js";

/** Shared type for Plugin Hook Name in src/plugins. */
export type PluginHookName =
  | "before_model_resolve"
  | "agent_turn_prepare"
  | "before_prompt_build"
  | "before_agent_start"
  | "before_agent_reply"
  | "model_call_started"
  | "model_call_ended"
  | "llm_input"
  | "llm_output"
  | "before_agent_finalize"
  | "agent_end"
  | "before_compaction"
  | "after_compaction"
  | "before_reset"
  | "inbound_claim"
  | "message_received"
  | "message_sending"
  | "reply_payload_sending"
  | "message_sent"
  | "before_tool_call"
  | "after_tool_call"
  | "tool_result_persist"
  | "before_message_write"
  | "session_start"
  | "session_end"
  | "subagent_spawning"
  | "subagent_delivery_target"
  | "subagent_spawned"
  | "subagent_ended"
  /** @deprecated Use gateway_stop. */
  | "deactivate"
  | "gateway_start"
  | "gateway_stop"
  | "heartbeat_prompt_contribution"
  | "cron_changed"
  | "before_dispatch"
  | "reply_dispatch"
  | "before_install"
  | "before_agent_run";

/** Reused constant for PLUGIN HOOK NAMES behavior in src/plugins. */
export const PLUGIN_HOOK_NAMES = [
  "before_model_resolve",
  "agent_turn_prepare",
  "before_prompt_build",
  "before_agent_start",
  "before_agent_reply",
  "model_call_started",
  "model_call_ended",
  "llm_input",
  "llm_output",
  "before_agent_finalize",
  "agent_end",
  "before_compaction",
  "after_compaction",
  "before_reset",
  "inbound_claim",
  "message_received",
  "message_sending",
  "reply_payload_sending",
  "message_sent",
  "before_tool_call",
  "after_tool_call",
  "tool_result_persist",
  "before_message_write",
  "session_start",
  "session_end",
  "subagent_spawning",
  "subagent_delivery_target",
  "subagent_spawned",
  "subagent_ended",
  "deactivate",
  "gateway_start",
  "gateway_stop",
  "heartbeat_prompt_contribution",
  "cron_changed",
  "before_dispatch",
  "reply_dispatch",
  "before_install",
  "before_agent_run",
] as const satisfies readonly PluginHookName[];

type MissingPluginHookNames = Exclude<PluginHookName, (typeof PLUGIN_HOOK_NAMES)[number]>;
type AssertAllPluginHookNamesListed = MissingPluginHookNames extends never ? true : never;
const assertAllPluginHookNamesListed: AssertAllPluginHookNamesListed = true;
void assertAllPluginHookNamesListed;

const pluginHookNameSet = new Set<PluginHookName>(PLUGIN_HOOK_NAMES);

/** Reused constant for is Plugin Hook Name behavior in src/plugins. */
export const isPluginHookName = (hookName: unknown): hookName is PluginHookName =>
  typeof hookName === "string" && pluginHookNameSet.has(hookName as PluginHookName);

/** Reused constant for PROMPT INJECTION HOOK NAMES behavior in src/plugins. */
export const PROMPT_INJECTION_HOOK_NAMES = [
  "agent_turn_prepare",
  "before_prompt_build",
  "before_agent_start",
  "heartbeat_prompt_contribution",
] as const satisfies readonly PluginHookName[];

/** Shared type for Prompt Injection Hook Name in src/plugins. */
export type PromptInjectionHookName = (typeof PROMPT_INJECTION_HOOK_NAMES)[number];

const promptInjectionHookNameSet = new Set<PluginHookName>(PROMPT_INJECTION_HOOK_NAMES);

/** Reused constant for is Prompt Injection Hook Name behavior in src/plugins. */
export const isPromptInjectionHookName = (hookName: PluginHookName): boolean =>
  promptInjectionHookNameSet.has(hookName);

/** Reused constant for CONVERSATION HOOK NAMES behavior in src/plugins. */
export const CONVERSATION_HOOK_NAMES = [
  "before_model_resolve",
  "before_agent_reply",
  "llm_input",
  "llm_output",
  "before_agent_finalize",
  "agent_end",
  "before_agent_run",
] as const satisfies readonly PluginHookName[];

/** Shared type for Conversation Hook Name in src/plugins. */
export type ConversationHookName = (typeof CONVERSATION_HOOK_NAMES)[number];

const conversationHookNameSet = new Set<PluginHookName>(CONVERSATION_HOOK_NAMES);

/** Reused constant for is Conversation Hook Name behavior in src/plugins. */
export const isConversationHookName = (hookName: PluginHookName): boolean =>
  conversationHookNameSet.has(hookName);

/** Shared type for Plugin Hook Agent Context in src/plugins. */
export type PluginHookAgentContext = {
  runId?: string;
  jobId?: string;
  trace?: DiagnosticTraceContext;
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  workspaceDir?: string;
  modelProviderId?: string;
  modelId?: string;
  messageProvider?: string;
  trigger?: string;
  channelId?: string;
  /** Resolved effective context-token budget after model/config/agent caps. */
  contextTokenBudget?: number;
  /** Source that supplied the resolved context-token budget. */
  contextWindowSource?: PluginHookContextWindowSource;
  /** Native/configured reference window when a lower cap wins. */
  contextWindowReferenceTokens?: number;
};

/** Shared type for Plugin Hook Context Window Source in src/plugins. */
export type PluginHookContextWindowSource =
  | "model"
  | "modelsConfig"
  | "agentContextTokens"
  | "default";

/** Shared type for Plugin Hook Before Agent Reply Event in src/plugins. */
export type PluginHookBeforeAgentReplyEvent = {
  cleanedBody: string;
};

/** Shared type for Plugin Hook Before Agent Reply Result in src/plugins. */
export type PluginHookBeforeAgentReplyResult = {
  handled: boolean;
  reply?: ReplyPayload;
  reason?: string;
};

/** Shared type for Plugin Hook Llm Input Event in src/plugins. */
export type PluginHookLlmInputEvent = {
  runId: string;
  sessionId: string;
  provider: string;
  model: string;
  systemPrompt?: string;
  prompt: string;
  historyMessages: unknown[];
  imagesCount: number;
  tools?: unknown[];
};

/** Shared type for Plugin Hook Model Call Base Event in src/plugins. */
export type PluginHookModelCallBaseEvent = {
  runId: string;
  callId: string;
  sessionKey?: string;
  sessionId?: string;
  provider: string;
  model: string;
  api?: string;
  transport?: string;
  /** Resolved effective context-token budget after model/config/agent caps. */
  contextTokenBudget?: number;
  /** Source that supplied the resolved context-token budget. */
  contextWindowSource?: PluginHookContextWindowSource;
  /** Native/configured reference window when a lower cap wins. */
  contextWindowReferenceTokens?: number;
};

/** Shared type for Plugin Hook Model Call Started Event in src/plugins. */
export type PluginHookModelCallStartedEvent = PluginHookModelCallBaseEvent;

/** Shared type for Plugin Hook Model Call Ended Event in src/plugins. */
export type PluginHookModelCallEndedEvent = PluginHookModelCallBaseEvent & {
  durationMs: number;
  outcome: "completed" | "error";
  errorCategory?: string;
  failureKind?: "aborted" | "connection_closed" | "connection_reset" | "terminated" | "timeout";
  requestPayloadBytes?: number;
  responseStreamBytes?: number;
  timeToFirstByteMs?: number;
  upstreamRequestIdHash?: string;
};

/** Shared type for Plugin Hook Llm Output Event in src/plugins. */
export type PluginHookLlmOutputEvent = {
  runId: string;
  sessionId: string;
  provider: string;
  model: string;
  /** Resolved effective context-token budget after model/config/agent caps. */
  contextTokenBudget?: number;
  /** Source that supplied the resolved context-token budget. */
  contextWindowSource?: PluginHookContextWindowSource;
  /** Native/configured reference window when a lower cap wins. */
  contextWindowReferenceTokens?: number;
  /**
   * Fully resolved provider/model ref used for the call.
   *
   * This intentionally keeps the provider prefix so operator tooling can
   * distinguish e.g. openai-codex/gpt-5.4 from codex/gpt-5.4 even when display
   * names collapse to just the model id.
   */
  resolvedRef?: string;
  /**
   * Harness/backend responsible for the model loop. Kept separate from
   * `resolvedRef` so provider/model consumers keep a stable parse contract.
   */
  harnessId?: string;
  /** The original user prompt that produced this output. */
  prompt?: string;
  assistantTexts: string[];
  lastAssistant?: unknown;
  usage?: {
    input?: number;
    output?: number;
    cacheRead?: number;
    cacheWrite?: number;
    total?: number;
  };
};

/** Shared type for Plugin Hook Agent End Event in src/plugins. */
export type PluginHookAgentEndEvent = {
  runId?: string;
  messages: unknown[];
  success: boolean;
  error?: string;
  durationMs?: number;
};

/** Shared type for Plugin Hook Before Agent Finalize Event in src/plugins. */
export type PluginHookBeforeAgentFinalizeEvent = {
  runId?: string;
  sessionId: string;
  sessionKey?: string;
  turnId?: string;
  provider?: string;
  model?: string;
  cwd?: string;
  transcriptPath?: string;
  stopHookActive: boolean;
  lastAssistantMessage?: string;
  messages?: unknown[];
};

/** Shared type for Plugin Hook Before Agent Finalize Result in src/plugins. */
export type PluginHookBeforeAgentFinalizeResult = {
  /**
   * continue: accept normal finalization.
   * revise: block finalization and ask the harness for another model pass.
   * finalize: force finalization even if another hook requested revision.
   */
  action?: "continue" | "revise" | "finalize";
  reason?: string;
  retry?: {
    instruction: string;
    idempotencyKey?: string;
    maxAttempts?: number;
  };
};

/** Shared type for Plugin Hook Before Compaction Event in src/plugins. */
export type PluginHookBeforeCompactionEvent = {
  messageCount: number;
  compactingCount?: number;
  tokenCount?: number;
  messages?: unknown[];
  sessionFile?: string;
};

/** Shared type for Plugin Hook Before Reset Event in src/plugins. */
export type PluginHookBeforeResetEvent = {
  sessionFile?: string;
  messages?: unknown[];
  reason?: string;
};

/** Shared type for Plugin Hook After Compaction Event in src/plugins. */
export type PluginHookAfterCompactionEvent = {
  messageCount: number;
  tokenCount?: number;
  compactedCount: number;
  sessionFile?: string;
};

/** Shared type for Plugin Hook Inbound Claim Result in src/plugins. */
export type PluginHookInboundClaimResult = {
  handled: boolean;
  reply?: ReplyPayload;
};

/** Shared type for Plugin Hook Before Dispatch Event in src/plugins. */
export type PluginHookBeforeDispatchEvent = {
  content: string;
  body?: string;
  channel?: string;
  sessionKey?: string;
  senderId?: string;
  isGroup?: boolean;
  timestamp?: number;
};

/** Shared type for Plugin Hook Before Dispatch Context in src/plugins. */
export type PluginHookBeforeDispatchContext = {
  channelId?: string;
  accountId?: string;
  conversationId?: string;
  sessionKey?: string;
  senderId?: string;
};

/** Shared type for Plugin Hook Before Dispatch Result in src/plugins. */
export type PluginHookBeforeDispatchResult = {
  handled: boolean;
  text?: string;
};

/** Shared type for Plugin Hook Reply Dispatch Event in src/plugins. */
export type PluginHookReplyDispatchEvent = {
  ctx: FinalizedMsgContext;
  runId?: string;
  sessionKey?: string;
  images?: Array<{ data: string; mimeType: string }>;
  inboundAudio: boolean;
  sessionTtsAuto?: TtsAutoMode;
  ttsChannel?: string;
  suppressUserDelivery?: boolean;
  suppressReplyLifecycle?: boolean;
  sourceReplyDeliveryMode?: SourceReplyDeliveryMode;
  shouldRouteToOriginating: boolean;
  originatingChannel?: string;
  originatingTo?: string;
  shouldSendToolSummaries: boolean;
  sendPolicy: "allow" | "deny";
  isTailDispatch?: boolean;
};

/** Shared type for Plugin Hook Reply Dispatch Context in src/plugins. */
export type PluginHookReplyDispatchContext = {
  cfg: OpenClawConfig;
  dispatcher: ReplyDispatcher;
  abortSignal?: AbortSignal;
  onReplyStart?: () => Promise<void> | void;
  recordProcessed: (
    outcome: "completed" | "skipped" | "error",
    opts?: {
      reason?: string;
      error?: string;
    },
  ) => void;
  markIdle: (reason: string) => void;
};

/** Shared type for Plugin Hook Reply Dispatch Result in src/plugins. */
export type PluginHookReplyDispatchResult = {
  handled: boolean;
  queuedFinal: boolean;
  counts: Record<ReplyDispatchKind, number>;
};

/** Shared type for Plugin Hook Reply Payload Sending Event in src/plugins. */
export type PluginHookReplyPayloadSendingEvent = {
  payload: PluginHookReplyPayload;
  kind: ReplyDispatchKind;
  channel?: string;
  sessionKey?: string;
  runId?: string;
};

/** Shared type for Plugin Hook Reply Payload in src/plugins. */
export type PluginHookReplyPayload = Omit<ReplyPayload, "trustedLocalMedia">;
/** Shared type for Plugin Hook Reply Payload Sending Context in src/plugins. */
export type PluginHookReplyPayloadSendingContext = PluginHookMessageContext;

/** Shared type for Plugin Hook Reply Payload Sending Result in src/plugins. */
export type PluginHookReplyPayloadSendingResult = {
  payload?: PluginHookReplyPayload;
  cancel?: boolean;
  reason?: string;
};

/** Shared type for Plugin Hook Tool Kind in src/plugins. */
export type PluginHookToolKind = "code_mode_exec";
/** Shared type for Plugin Hook Tool Input Kind in src/plugins. */
export type PluginHookToolInputKind = "javascript" | "typescript";

/** Shared type for Plugin Hook Tool Context in src/plugins. */
export type PluginHookToolContext = {
  agentId?: string;
  sessionKey?: string;
  sessionId?: string;
  runId?: string;
  trace?: DiagnosticTraceContext;
  toolName: string;
  /** Host-authoritative discriminator for tools that intentionally share names. */
  toolKind?: PluginHookToolKind;
  /** Host-authoritative input/runtime family for tools whose payloads need policy distinction. */
  toolInputKind?: PluginHookToolInputKind;
  toolCallId?: string;
  getSessionExtension?: (namespace: string) => PluginJsonValue | undefined;
  channelId?: string;
};

/** Shared type for Plugin Hook Before Tool Call Event in src/plugins. */
export type PluginHookBeforeToolCallEvent = {
  toolName: string;
  params: Record<string, unknown>;
  /** Host-authoritative discriminator for tools that intentionally share names. */
  toolKind?: PluginHookToolKind;
  /** Host-authoritative input/runtime family for tools whose payloads need policy distinction. */
  toolInputKind?: PluginHookToolInputKind;
  runId?: string;
  toolCallId?: string;
  /**
   * Optional best-effort destination path hints the host derived from `params`
   * for well-known tool envelopes (e.g. `apply_patch`).
   *
   * This is a convenience hint, not an authoritative parse result: the host's
   * extractor may be intentionally lenient and can return paths for malformed
   * or partial envelopes. Plugins may use `derivedPaths` as a fast path, but
   * should parse and validate `params` themselves when correctness or policy
   * decisions depend on the exact set of affected paths. Absent for tools the
   * host does not know how to derive paths for.
   */
  derivedPaths?: readonly string[];
};

/** Reused constant for Plugin Approval Resolutions behavior in src/plugins. */
export const PluginApprovalResolutions = {
  ALLOW_ONCE: "allow-once",
  ALLOW_ALWAYS: "allow-always",
  DENY: "deny",
  TIMEOUT: "timeout",
  CANCELLED: "cancelled",
} as const;

/** Shared type for Plugin Approval Resolution in src/plugins. */
export type PluginApprovalResolution =
  (typeof PluginApprovalResolutions)[keyof typeof PluginApprovalResolutions];

/** Shared type for Plugin Hook Before Tool Call Result in src/plugins. */
export type PluginHookBeforeToolCallResult = {
  params?: Record<string, unknown>;
  block?: boolean;
  blockReason?: string;
  requireApproval?: {
    title: string;
    description: string;
    severity?: "info" | "warning" | "critical";
    timeoutMs?: number;
    timeoutBehavior?: "allow" | "deny";
    allowedDecisions?: Array<"allow-once" | "allow-always" | "deny">;
    pluginId?: string;
    onResolution?: (decision: PluginApprovalResolution) => Promise<void> | void;
  };
};

/** Shared type for Plugin Hook After Tool Call Event in src/plugins. */
export type PluginHookAfterToolCallEvent = {
  toolName: string;
  params: Record<string, unknown>;
  runId?: string;
  toolCallId?: string;
  result?: unknown;
  error?: string;
  durationMs?: number;
};

/** Shared type for Plugin Hook Tool Result Persist Context in src/plugins. */
export type PluginHookToolResultPersistContext = {
  agentId?: string;
  sessionKey?: string;
  toolName?: string;
  toolCallId?: string;
};

/** Shared type for Plugin Hook Tool Result Persist Event in src/plugins. */
export type PluginHookToolResultPersistEvent = {
  toolName?: string;
  toolCallId?: string;
  message: AgentMessage;
  isSynthetic?: boolean;
};

/** Shared type for Plugin Hook Tool Result Persist Result in src/plugins. */
export type PluginHookToolResultPersistResult = {
  message?: AgentMessage;
};

/** Shared type for Plugin Hook Before Message Write Event in src/plugins. */
export type PluginHookBeforeMessageWriteEvent = {
  message: AgentMessage;
  sessionKey?: string;
  agentId?: string;
};

/** Shared type for Plugin Hook Before Message Write Result in src/plugins. */
export type PluginHookBeforeMessageWriteResult = {
  block?: boolean;
  message?: AgentMessage;
};

/** Shared type for Plugin Hook Session Context in src/plugins. */
export type PluginHookSessionContext = {
  agentId?: string;
  sessionId: string;
  sessionKey?: string;
};

/** Shared type for Plugin Hook Session Start Event in src/plugins. */
export type PluginHookSessionStartEvent = {
  sessionId: string;
  sessionKey?: string;
  resumedFrom?: string;
};

/** Shared type for Plugin Hook Session End Reason in src/plugins. */
export type PluginHookSessionEndReason =
  | "new"
  | "reset"
  | "idle"
  | "daily"
  | "compaction"
  | "deleted"
  | "shutdown"
  | "restart"
  | "unknown";

/** Shared type for Plugin Hook Session End Event in src/plugins. */
export type PluginHookSessionEndEvent = {
  sessionId: string;
  sessionKey?: string;
  messageCount: number;
  durationMs?: number;
  reason?: PluginHookSessionEndReason;
  sessionFile?: string;
  transcriptArchived?: boolean;
  nextSessionId?: string;
  nextSessionKey?: string;
};

/** Shared type for Plugin Hook Subagent Context in src/plugins. */
export type PluginHookSubagentContext = {
  runId?: string;
  childSessionKey?: string;
  requesterSessionKey?: string;
};

/** Shared type for Plugin Hook Subagent Target Kind in src/plugins. */
export type PluginHookSubagentTargetKind = "subagent" | "acp";

type PluginHookSubagentSpawnBase = {
  childSessionKey: string;
  agentId: string;
  label?: string;
  mode: "run" | "session";
  requester?: {
    channel?: string;
    accountId?: string;
    to?: string;
    threadId?: string | number;
  };
  threadRequested: boolean;
};

/** Shared type for Plugin Hook Subagent Spawning Event in src/plugins. */
export type PluginHookSubagentSpawningEvent = PluginHookSubagentSpawnBase;

/** Shared type for Plugin Hook Subagent Spawning Result in src/plugins. */
export type PluginHookSubagentSpawningResult =
  | {
      status: "ok";
      /**
       * @deprecated Core now resolves thread-bound spawn routing from session
       * bindings and channel route projection. Keep returning this only for
       * compatibility with older OpenClaw runtimes.
       */
      threadBindingReady?: boolean;
      /**
       * @deprecated Use channel `resolveDeliveryTarget` plus core
       * `SessionBindingRecord` projection instead of returning an ad hoc
       * delivery route from this hook.
       */
      deliveryOrigin?: {
        channel?: string;
        accountId?: string;
        to?: string;
        threadId?: string | number;
      };
    }
  | {
      status: "error";
      error: string;
    };

/** Shared type for Plugin Hook Subagent Delivery Target Event in src/plugins. */
export type PluginHookSubagentDeliveryTargetEvent = {
  childSessionKey: string;
  requesterSessionKey: string;
  requesterOrigin?: {
    channel?: string;
    accountId?: string;
    to?: string;
    threadId?: string | number;
  };
  childRunId?: string;
  spawnMode?: "run" | "session";
  expectsCompletionMessage: boolean;
};

/**
 * @deprecated Core route projection resolves subagent delivery targets from
 * `SessionBindingRecord` and channel `resolveDeliveryTarget`. This hook result
 * remains for plugin compatibility during the transition.
 */
export type PluginHookSubagentDeliveryTargetResult = {
  origin?: {
    channel?: string;
    accountId?: string;
    to?: string;
    threadId?: string | number;
  };
};

/** Shared type for Plugin Hook Subagent Spawned Event in src/plugins. */
export type PluginHookSubagentSpawnedEvent = PluginHookSubagentSpawnBase & {
  runId: string;
};

/** Shared type for Plugin Hook Subagent Ended Event in src/plugins. */
export type PluginHookSubagentEndedEvent = {
  targetSessionKey: string;
  targetKind: PluginHookSubagentTargetKind;
  reason: string;
  sendFarewell?: boolean;
  accountId?: string;
  runId?: string;
  endedAt?: number;
  outcome?: "ok" | "error" | "timeout" | "killed" | "reset" | "deleted";
  error?: string;
};

/** Shared type for Plugin Hook Gateway Context in src/plugins. */
export type PluginHookGatewayContext = {
  port?: number;
  config?: OpenClawConfig;
  workspaceDir?: string;
  getCron?: () => PluginHookGatewayCronService | undefined;
};

/** Shared type for Plugin Hook Gateway Start Event in src/plugins. */
export type PluginHookGatewayStartEvent = {
  port: number;
};

/** Shared type for Plugin Hook Gateway Stop Event in src/plugins. */
export type PluginHookGatewayStopEvent = {
  reason?: string;
};

/** Shared type for Plugin Hook Gateway Cron Run Status in src/plugins. */
export type PluginHookGatewayCronRunStatus = "ok" | "error" | "skipped";

/** Shared type for Plugin Hook Gateway Cron Delivery Status in src/plugins. */
export type PluginHookGatewayCronDeliveryStatus =
  | "not-requested"
  | "delivered"
  | "not-delivered"
  | "unknown";

/** Shared type for Plugin Hook Gateway Cron Job State in src/plugins. */
export type PluginHookGatewayCronJobState = {
  nextRunAtMs?: number;
  runningAtMs?: number;
  lastRunAtMs?: number;
  lastRunStatus?: PluginHookGatewayCronRunStatus;
  lastError?: string;
  lastDurationMs?: number;
  lastDelivered?: boolean;
  lastDeliveryStatus?: PluginHookGatewayCronDeliveryStatus;
  lastDeliveryError?: string;
  lastFailureNotificationDelivered?: boolean;
  lastFailureNotificationDeliveryStatus?: PluginHookGatewayCronDeliveryStatus;
  lastFailureNotificationDeliveryError?: string;
};

/** Shared type for Plugin Hook Gateway Cron Job in src/plugins. */
export type PluginHookGatewayCronJob = {
  id: string;
  /** Agent id that owns this cron job. */
  agentId?: string;
  name?: string;
  description?: string;
  enabled?: boolean;
  schedule?:
    | {
        kind: "cron";
        expr?: string;
        tz?: string;
        staggerMs?: number;
      }
    | {
        kind: "at";
        at?: string;
      }
    | {
        kind: "every";
        everyMs?: number;
        anchorMs?: number;
      };
  sessionTarget?: string;
  wakeMode?: string;
  payload?: {
    kind?: string;
    text?: string;
  };
  state?: PluginHookGatewayCronJobState;
  createdAtMs?: number;
  updatedAtMs?: number;
};

/** Shared type for Plugin Hook Cron Changed Event in src/plugins. */
export type PluginHookCronChangedEvent = {
  action: "added" | "updated" | "removed" | "started" | "finished";
  jobId: string;
  job?: PluginHookGatewayCronJob;
  /** Top-level session target for downstream routing (mirrors job.sessionTarget). */
  sessionTarget?: string;
  /** Agent id that owns this cron job (mirrors job.agentId). */
  agentId?: string;
  runAtMs?: number;
  durationMs?: number;
  status?: PluginHookGatewayCronRunStatus;
  error?: string;
  summary?: string;
  delivered?: boolean;
  deliveryStatus?: PluginHookGatewayCronDeliveryStatus;
  deliveryError?: string;
  sessionId?: string;
  sessionKey?: string;
  runId?: string;
  nextRunAtMs?: number;
  model?: string;
  provider?: string;
};

/** Shared type for Plugin Hook Gateway Cron Create Input in src/plugins. */
export type PluginHookGatewayCronCreateInput = {
  name: string;
  description: string;
  enabled: boolean;
  schedule: {
    kind: string;
    expr: string;
    tz?: string;
  };
  sessionTarget: string;
  wakeMode: string;
  payload: {
    kind: string;
    text?: string;
  };
};

/** Shared type for Plugin Hook Gateway Cron Update Input in src/plugins. */
export type PluginHookGatewayCronUpdateInput = Partial<PluginHookGatewayCronCreateInput>;

/** Shared type for Plugin Hook Gateway Cron Remove Result in src/plugins. */
export type PluginHookGatewayCronRemoveResult = {
  removed?: boolean;
};

/** Shared type for Plugin Hook Gateway Cron Service in src/plugins. */
export type PluginHookGatewayCronService = {
  list: (opts?: { includeDisabled?: boolean }) => Promise<PluginHookGatewayCronJob[]>;
  add: (input: PluginHookGatewayCronCreateInput) => Promise<unknown>;
  update: (id: string, patch: PluginHookGatewayCronUpdateInput) => Promise<unknown>;
  remove: (id: string) => Promise<PluginHookGatewayCronRemoveResult>;
};

/** Shared type for Plugin Install Target Type in src/plugins. */
export type PluginInstallTargetType = "skill" | "plugin";
/** Shared type for Plugin Install Request Kind in src/plugins. */
export type PluginInstallRequestKind =
  | "skill-install"
  | "plugin-dir"
  | "plugin-archive"
  | "plugin-file"
  | "plugin-npm"
  | "plugin-git";
/** Shared type for Plugin Install Source Path Kind in src/plugins. */
export type PluginInstallSourcePathKind = "file" | "directory";

/** Shared type for Plugin Install Finding in src/plugins. */
export type PluginInstallFinding = {
  ruleId: string;
  severity: "info" | "warn" | "critical";
  file: string;
  line: number;
  message: string;
};

/** Shared type for Plugin Hook Before Install Request in src/plugins. */
export type PluginHookBeforeInstallRequest = {
  kind: PluginInstallRequestKind;
  mode: "install" | "update";
  requestedSpecifier?: string;
};

/** Shared type for Plugin Hook Before Install Builtin Scan in src/plugins. */
export type PluginHookBeforeInstallBuiltinScan = {
  status: "ok" | "error";
  scannedFiles: number;
  critical: number;
  warn: number;
  info: number;
  findings: PluginInstallFinding[];
  error?: string;
};

/** Shared type for Plugin Hook Before Install Skill Install Spec in src/plugins. */
export type PluginHookBeforeInstallSkillInstallSpec = {
  id?: string;
  kind: "brew" | "node" | "go" | "uv" | "download";
  label?: string;
  bins?: string[];
  os?: string[];
  formula?: string;
  package?: string;
  module?: string;
  url?: string;
  archive?: string;
  extract?: boolean;
  stripComponents?: number;
  targetDir?: string;
};

/** Shared type for Plugin Hook Before Install Skill in src/plugins. */
export type PluginHookBeforeInstallSkill = {
  installId: string;
  installSpec?: PluginHookBeforeInstallSkillInstallSpec;
};

/** Shared type for Plugin Hook Before Install Plugin in src/plugins. */
export type PluginHookBeforeInstallPlugin = {
  pluginId: string;
  contentType: "bundle" | "package" | "file";
  packageName?: string;
  manifestId?: string;
  version?: string;
  extensions?: string[];
};

/** Shared type for Plugin Hook Before Install Context in src/plugins. */
export type PluginHookBeforeInstallContext = {
  targetType: PluginInstallTargetType;
  requestKind: PluginInstallRequestKind;
  origin?: string;
};

/** Shared type for Plugin Hook Before Install Event in src/plugins. */
export type PluginHookBeforeInstallEvent = {
  targetType: PluginInstallTargetType;
  targetName: string;
  sourcePath: string;
  sourcePathKind: PluginInstallSourcePathKind;
  origin?: string;
  request: PluginHookBeforeInstallRequest;
  builtinScan: PluginHookBeforeInstallBuiltinScan;
  skill?: PluginHookBeforeInstallSkill;
  plugin?: PluginHookBeforeInstallPlugin;
};

/** Shared type for Plugin Hook Before Install Result in src/plugins. */
export type PluginHookBeforeInstallResult = {
  findings?: PluginInstallFinding[];
  block?: boolean;
  blockReason?: string;
};

// ---------------------------------------------------------------------------
// before_agent_run — Lifecycle Gate Hook
// ---------------------------------------------------------------------------

/** Event payload for the before_agent_run gate hook. */
export type PluginHookBeforeAgentRunEvent = {
  /** The user's message that triggered this run. */
  prompt: string;
  /** Loaded session history before the current prompt is submitted. */
  messages: unknown[];
  /** Active system prompt prepared for this run. */
  systemPrompt?: string;
  /** Account identity when available. */
  accountId?: string;
  /** Channel the message came from. */
  channelId?: string;
  /** Sender identity when available. */
  senderId?: string;
  /** Trusted sender identity bit when available. */
  senderIsOwner?: boolean;
};

/** Result type for before_agent_run. Returns pass/block or void (= pass). */
export type PluginHookBeforeAgentRunResult = InputGateDecision | void;

/** Shared type for Plugin Hook Handler Map in src/plugins. */
export type PluginHookHandlerMap = {
  agent_turn_prepare: (
    event: PluginAgentTurnPrepareEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginAgentTurnPrepareResult | void> | PluginAgentTurnPrepareResult | void;
  before_model_resolve: (
    event: PluginHookBeforeModelResolveEvent,
    ctx: PluginHookAgentContext,
  ) =>
    | Promise<PluginHookBeforeModelResolveResult | void>
    | PluginHookBeforeModelResolveResult
    | void;
  before_prompt_build: (
    event: PluginHookBeforePromptBuildEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginHookBeforePromptBuildResult | void> | PluginHookBeforePromptBuildResult | void;
  /** @deprecated Use before_model_resolve and before_prompt_build. */
  before_agent_start: (
    event: PluginHookBeforeAgentStartEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginHookBeforeAgentStartResult | void> | PluginHookBeforeAgentStartResult | void;
  before_agent_reply: (
    event: PluginHookBeforeAgentReplyEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginHookBeforeAgentReplyResult | void> | PluginHookBeforeAgentReplyResult | void;
  model_call_started: (
    event: PluginHookModelCallStartedEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  model_call_ended: (
    event: PluginHookModelCallEndedEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  llm_input: (event: PluginHookLlmInputEvent, ctx: PluginHookAgentContext) => Promise<void> | void;
  llm_output: (
    event: PluginHookLlmOutputEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  before_agent_finalize: (
    event: PluginHookBeforeAgentFinalizeEvent,
    ctx: PluginHookAgentContext,
  ) =>
    | Promise<PluginHookBeforeAgentFinalizeResult | void>
    | PluginHookBeforeAgentFinalizeResult
    | void;
  agent_end: (event: PluginHookAgentEndEvent, ctx: PluginHookAgentContext) => Promise<void> | void;
  before_compaction: (
    event: PluginHookBeforeCompactionEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  after_compaction: (
    event: PluginHookAfterCompactionEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  before_reset: (
    event: PluginHookBeforeResetEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<void> | void;
  inbound_claim: (
    event: PluginHookInboundClaimEvent,
    ctx: PluginHookInboundClaimContext,
  ) => Promise<PluginHookInboundClaimResult | void> | PluginHookInboundClaimResult | void;
  before_dispatch: (
    event: PluginHookBeforeDispatchEvent,
    ctx: PluginHookBeforeDispatchContext,
  ) => Promise<PluginHookBeforeDispatchResult | void> | PluginHookBeforeDispatchResult | void;
  reply_dispatch: (
    event: PluginHookReplyDispatchEvent,
    ctx: PluginHookReplyDispatchContext,
  ) => Promise<PluginHookReplyDispatchResult | void> | PluginHookReplyDispatchResult | void;
  reply_payload_sending: (
    event: PluginHookReplyPayloadSendingEvent,
    ctx: PluginHookReplyPayloadSendingContext,
  ) =>
    | Promise<PluginHookReplyPayloadSendingResult | void>
    | PluginHookReplyPayloadSendingResult
    | void;
  message_received: (
    event: PluginHookMessageReceivedEvent,
    ctx: PluginHookMessageContext,
  ) => Promise<void> | void;
  message_sending: (
    event: PluginHookMessageSendingEvent,
    ctx: PluginHookMessageContext,
  ) => Promise<PluginHookMessageSendingResult | void> | PluginHookMessageSendingResult | void;
  message_sent: (
    event: PluginHookMessageSentEvent,
    ctx: PluginHookMessageContext,
  ) => Promise<void> | void;
  before_tool_call: (
    event: PluginHookBeforeToolCallEvent,
    ctx: PluginHookToolContext,
  ) => Promise<PluginHookBeforeToolCallResult | void> | PluginHookBeforeToolCallResult | void;
  after_tool_call: (
    event: PluginHookAfterToolCallEvent,
    ctx: PluginHookToolContext,
  ) => Promise<void> | void;
  tool_result_persist: (
    event: PluginHookToolResultPersistEvent,
    ctx: PluginHookToolResultPersistContext,
  ) => PluginHookToolResultPersistResult | void;
  before_message_write: (
    event: PluginHookBeforeMessageWriteEvent,
    ctx: { agentId?: string; sessionKey?: string },
  ) => PluginHookBeforeMessageWriteResult | void;
  session_start: (
    event: PluginHookSessionStartEvent,
    ctx: PluginHookSessionContext,
  ) => Promise<void> | void;
  session_end: (
    event: PluginHookSessionEndEvent,
    ctx: PluginHookSessionContext,
  ) => Promise<void> | void;
  subagent_spawning: (
    event: PluginHookSubagentSpawningEvent,
    ctx: PluginHookSubagentContext,
  ) => Promise<PluginHookSubagentSpawningResult | void> | PluginHookSubagentSpawningResult | void;
  subagent_delivery_target: (
    event: PluginHookSubagentDeliveryTargetEvent,
    ctx: PluginHookSubagentContext,
  ) =>
    | Promise<PluginHookSubagentDeliveryTargetResult | void>
    | PluginHookSubagentDeliveryTargetResult
    | void;
  subagent_spawned: (
    event: PluginHookSubagentSpawnedEvent,
    ctx: PluginHookSubagentContext,
  ) => Promise<void> | void;
  subagent_ended: (
    event: PluginHookSubagentEndedEvent,
    ctx: PluginHookSubagentContext,
  ) => Promise<void> | void;
  /**
   * Deprecated compatibility alias for gateway_stop.
   *
   * New plugins should register gateway_stop directly; the loader normalizes
   * deactivate registrations onto gateway_stop so cleanup handlers still run
   * during Gateway shutdown.
   *
   * @deprecated Use gateway_stop.
   */
  deactivate: (
    event: PluginHookGatewayStopEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
  gateway_start: (
    event: PluginHookGatewayStartEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
  gateway_stop: (
    event: PluginHookGatewayStopEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
  heartbeat_prompt_contribution: (
    event: PluginHeartbeatPromptContributionEvent,
    ctx: PluginHookAgentContext,
  ) =>
    | Promise<PluginHeartbeatPromptContributionResult | void>
    | PluginHeartbeatPromptContributionResult
    | void;
  cron_changed: (
    event: PluginHookCronChangedEvent,
    ctx: PluginHookGatewayContext,
  ) => Promise<void> | void;
  before_install: (
    event: PluginHookBeforeInstallEvent,
    ctx: PluginHookBeforeInstallContext,
  ) => Promise<PluginHookBeforeInstallResult | void> | PluginHookBeforeInstallResult | void;
  before_agent_run: (
    event: PluginHookBeforeAgentRunEvent,
    ctx: PluginHookAgentContext,
  ) => Promise<PluginHookBeforeAgentRunResult> | PluginHookBeforeAgentRunResult;
};

/** Shared type for Plugin Hook Registration in src/plugins. */
export type PluginHookRegistration<K extends PluginHookName = PluginHookName> = {
  pluginId: string;
  hookName: K;
  handler: PluginHookHandlerMap[K];
  priority?: number;
  timeoutMs?: number;
  source: string;
};
