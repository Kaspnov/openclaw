/** Runtime imports isolated for subagent spawn lazy loading and tests. */
export {
  DEFAULT_SUBAGENT_MAX_CHILDREN_PER_AGENT,
  DEFAULT_SUBAGENT_MAX_SPAWN_DEPTH,
} from "../config/agent-limits.js";
/** Runtime config loader needed only when spawning subagents. */
export { getRuntimeConfig } from "../config/config.js";
/** Session store mutation helpers used by subagent session creation. */
export { mergeSessionEntry, updateSessionStore } from "../config/sessions.js";
/** Parent session fork helpers used before launching a child session. */
export {
  forkSessionFromParent,
  resolveParentForkDecision,
  type ParentForkDecision,
} from "../auto-reply/reply/session-fork.js";
/** Lazy context-engine initialization for spawned subagents. */
export { ensureContextEnginesInitialized } from "../context-engine/init.js";
/** Resolves the context engine selected for a spawned subagent. */
export { resolveContextEngine } from "../context-engine/registry.js";
/** Gateway RPC helper used to create and notify spawned sessions. */
export { callGateway } from "../gateway/call.js";
/** Gateway admin method scope helpers for spawn-time RPC authorization. */
export { ADMIN_SCOPE, isAdminOnlyMethod } from "../gateway/method-scopes.js";
/** Gateway session store targeting and legacy key cleanup helpers. */
export {
  pruneLegacyStoreKeys,
  resolveGatewaySessionStoreTarget,
} from "../gateway/session-utils.js";
/** Global hook runner used for subagent lifecycle hooks. */
export { getGlobalHookRunner } from "../plugins/hook-runner-global.js";
/** Emits session lifecycle events for spawned subagents. */
export { emitSessionLifecycleEvent } from "../sessions/session-lifecycle-events.js";
/** Delivery-context normalization and merge helpers for child sessions. */
export {
  mergeDeliveryContext,
  normalizeDeliveryContext,
} from "../utils/delivery-context.shared.js";
/** Resolves agent config for the requested subagent id. */
export { resolveAgentConfig } from "./agent-scope.js";
/** Lane id used for subagent execution. */
export { AGENT_LANE_SUBAGENT } from "./lanes.js";
/** Sandbox runtime status resolver used before spawning isolated work. */
export { resolveSandboxRuntimeStatus } from "./sandbox/runtime-status.js";
/** Builds the subagent-specific system prompt. */
export { buildSubagentSystemPrompt } from "./subagent-system-prompt.js";
/** Session key display/internal alias helpers for spawned sessions. */
export {
  resolveDisplaySessionKey,
  resolveInternalSessionKey,
  resolveMainSessionAlias,
} from "./tools/sessions-helpers.js";
