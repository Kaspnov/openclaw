/** Runtime imports isolated for subagent spawn lazy loading and tests. */
export {
  DEFAULT_SUBAGENT_MAX_CHILDREN_PER_AGENT,
  DEFAULT_SUBAGENT_MAX_SPAWN_DEPTH,
} from "../config/agent-limits.js";
/** Re-exported API for src/agents, starting with get Runtime Config. */
export { getRuntimeConfig } from "../config/config.js";
/** Re-exported API for src/agents, starting with merge Session Entry. */
export { mergeSessionEntry, updateSessionStore } from "../config/sessions.js";
/** Re-exported API for src/agents. */
export {
  forkSessionFromParent,
  resolveParentForkDecision,
  type ParentForkDecision,
} from "../auto-reply/reply/session-fork.js";
/** Re-exported API for src/agents, starting with ensure Context Engines Initialized. */
export { ensureContextEnginesInitialized } from "../context-engine/init.js";
/** Re-exported API for src/agents, starting with resolve Context Engine. */
export { resolveContextEngine } from "../context-engine/registry.js";
/** Re-exported API for src/agents, starting with call Gateway. */
export { callGateway } from "../gateway/call.js";
/** Re-exported API for src/agents, starting with ADMIN SCOPE. */
export { ADMIN_SCOPE, isAdminOnlyMethod } from "../gateway/method-scopes.js";
/** Re-exported API for src/agents. */
export {
  pruneLegacyStoreKeys,
  resolveGatewaySessionStoreTarget,
} from "../gateway/session-utils.js";
/** Re-exported API for src/agents, starting with get Global Hook Runner. */
export { getGlobalHookRunner } from "../plugins/hook-runner-global.js";
/** Re-exported API for src/agents, starting with emit Session Lifecycle Event. */
export { emitSessionLifecycleEvent } from "../sessions/session-lifecycle-events.js";
/** Re-exported API for src/agents. */
export {
  mergeDeliveryContext,
  normalizeDeliveryContext,
} from "../utils/delivery-context.shared.js";
/** Re-exported API for src/agents, starting with resolve Agent Config. */
export { resolveAgentConfig } from "./agent-scope.js";
/** Re-exported API for src/agents, starting with AGENT LANE SUBAGENT. */
export { AGENT_LANE_SUBAGENT } from "./lanes.js";
/** Re-exported API for src/agents, starting with resolve Sandbox Runtime Status. */
export { resolveSandboxRuntimeStatus } from "./sandbox/runtime-status.js";
/** Re-exported API for src/agents, starting with build Subagent System Prompt. */
export { buildSubagentSystemPrompt } from "./subagent-system-prompt.js";
/** Re-exported API for src/agents. */
export {
  resolveDisplaySessionKey,
  resolveInternalSessionKey,
  resolveMainSessionAlias,
} from "./tools/sessions-helpers.js";
