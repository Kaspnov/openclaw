/** Re-exports agent-core message types through the session SDK surface. */
import type {
  BashExecutionMessage,
  BranchSummaryMessage,
  CompactionSummaryMessage,
  CustomMessage,
} from "../../../packages/agent-core/src/harness/messages.js";

/** Re-exported API for src/agents/sessions. */
export {
  bashExecutionToText,
  BRANCH_SUMMARY_PREFIX,
  BRANCH_SUMMARY_SUFFIX,
  COMPACTION_SUMMARY_PREFIX,
  COMPACTION_SUMMARY_SUFFIX,
  convertToLlm,
  createBranchSummaryMessage,
  createCompactionSummaryMessage,
  createCustomMessage,
} from "../../../packages/agent-core/src/harness/messages.js";

/** Re-exported API for src/agents/sessions. */
export type {
  BashExecutionMessage,
  BranchSummaryMessage,
  CompactionSummaryMessage,
  CustomMessage,
} from "../../../packages/agent-core/src/harness/messages.js";

declare module "openclaw/plugin-sdk/agent-core" {
  interface CustomAgentMessages {
    bashExecution: BashExecutionMessage;
    custom: CustomMessage;
    branchSummary: BranchSummaryMessage;
    compactionSummary: CompactionSummaryMessage;
  }
}
