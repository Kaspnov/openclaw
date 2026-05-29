import type { ImageContent, Message, TextContent } from "../../../llm-core/src/index.js";
import type { AgentMessage } from "../types.js";
import { requireSessionTimestampMs } from "./session/timestamps.js";

/** Public constant for COMPACTION SUMMARY PREFIX behavior in packages/agent-core. */
export const COMPACTION_SUMMARY_PREFIX = `The conversation history before this point was compacted into the following summary:

<summary>
`;

/** Public constant for COMPACTION SUMMARY SUFFIX behavior in packages/agent-core. */
export const COMPACTION_SUMMARY_SUFFIX = `
</summary>`;

/** Public constant for BRANCH SUMMARY PREFIX behavior in packages/agent-core. */
export const BRANCH_SUMMARY_PREFIX = `The following is a summary of a branch that this conversation came back from:

<summary>
`;

/** Public constant for BRANCH SUMMARY SUFFIX behavior in packages/agent-core. */
export const BRANCH_SUMMARY_SUFFIX = `</summary>`;

/** Public type describing Bash Execution Message for packages/agent-core. */
export interface BashExecutionMessage {
  role: "bashExecution";
  command: string;
  output: string;
  exitCode: number | undefined;
  cancelled: boolean;
  truncated: boolean;
  fullOutputPath?: string;
  timestamp: number;
  excludeFromContext?: boolean;
}

/** Public type describing Custom Message for packages/agent-core. */
export interface CustomMessage<T = unknown> {
  role: "custom";
  customType: string;
  content: string | (TextContent | ImageContent)[];
  display: boolean;
  details?: T;
  timestamp: number;
}

/** Public type describing Branch Summary Message for packages/agent-core. */
export interface BranchSummaryMessage {
  role: "branchSummary";
  summary: string;
  fromId: string;
  timestamp: number;
}

/** Public type describing Compaction Summary Message for packages/agent-core. */
export interface CompactionSummaryMessage {
  role: "compactionSummary";
  summary: string;
  tokensBefore: number;
  timestamp: number;
}

declare module "../types.js" {
  interface CustomAgentMessages {
    bashExecution: BashExecutionMessage;
    custom: CustomMessage;
    branchSummary: BranchSummaryMessage;
    compactionSummary: CompactionSummaryMessage;
  }
}

/** Public helper for bash Execution To Text behavior in packages/agent-core. */
export function bashExecutionToText(msg: BashExecutionMessage): string {
  let text = `Ran \`${msg.command}\`\n`;
  if (msg.output) {
    text += `\`\`\`\n${msg.output}\n\`\`\``;
  } else {
    text += "(no output)";
  }
  if (msg.cancelled) {
    text += "\n\n(command cancelled)";
  } else if (msg.exitCode !== null && msg.exitCode !== undefined && msg.exitCode !== 0) {
    text += `\n\nCommand exited with code ${msg.exitCode}`;
  }
  if (msg.truncated && msg.fullOutputPath) {
    text += `\n\n[Output truncated. Full output: ${msg.fullOutputPath}]`;
  }
  return text;
}

/** Public helper for create Branch Summary Message behavior in packages/agent-core. */
export function createBranchSummaryMessage(
  summary: string,
  fromId: string,
  timestamp: string,
): BranchSummaryMessage {
  return {
    role: "branchSummary",
    summary,
    fromId,
    timestamp: requireSessionTimestampMs(timestamp, "branch summary timestamp"),
  };
}

/** Public helper for create Compaction Summary Message behavior in packages/agent-core. */
export function createCompactionSummaryMessage(
  summary: string,
  tokensBefore: number,
  timestamp: string,
): CompactionSummaryMessage {
  return {
    role: "compactionSummary",
    summary,
    tokensBefore,
    timestamp: requireSessionTimestampMs(timestamp, "compaction summary timestamp"),
  };
}

/** Public helper for create Custom Message behavior in packages/agent-core. */
export function createCustomMessage(
  customType: string,
  content: string | (TextContent | ImageContent)[],
  display: boolean,
  details: unknown,
  timestamp: string,
): CustomMessage {
  return {
    role: "custom",
    customType,
    content,
    display,
    details,
    timestamp: requireSessionTimestampMs(timestamp, "custom message timestamp"),
  };
}

/** Public helper for convert To Llm behavior in packages/agent-core. */
export function convertToLlm(messages: AgentMessage[]): Message[] {
  return messages
    .map((m): Message | undefined => {
      switch (m.role) {
        case "bashExecution":
          if (m.excludeFromContext) {
            return undefined;
          }
          return {
            role: "user",
            content: [{ type: "text", text: bashExecutionToText(m) }],
            timestamp: m.timestamp,
          };
        case "custom": {
          const content =
            typeof m.content === "string"
              ? [{ type: "text" as const, text: m.content }]
              : m.content;
          return {
            role: "user",
            content,
            timestamp: m.timestamp,
          };
        }
        case "branchSummary":
          return {
            role: "user",
            content: [
              {
                type: "text" as const,
                text: BRANCH_SUMMARY_PREFIX + m.summary + BRANCH_SUMMARY_SUFFIX,
              },
            ],
            timestamp: m.timestamp,
          };
        case "compactionSummary":
          return {
            role: "user",
            content: [
              {
                type: "text" as const,
                text: COMPACTION_SUMMARY_PREFIX + m.summary + COMPACTION_SUMMARY_SUFFIX,
              },
            ],
            timestamp: m.timestamp,
          };
        case "user":
        case "assistant":
        case "toolResult":
          return m;
        default:
          return undefined;
      }
    })
    .filter((m): m is Message => m !== undefined);
}
