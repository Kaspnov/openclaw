// config types mcp helpers and runtime behavior.
/** Shared type for Mcp Codex Tool Approval Mode in src/config. */
export type McpCodexToolApprovalMode = "auto" | "prompt" | "approve";

/** Shared type for Mcp Server Codex Config in src/config. */
export type McpServerCodexConfig = {
  /** OpenClaw agent ids that should receive this server in Codex app-server threads. */
  agents?: string[];
  /** Codex MCP tool approval mode emitted as default_tools_approval_mode. */
  defaultToolsApprovalMode?: McpCodexToolApprovalMode;
  /** Codex-native spelling accepted for operator-authored config. */
  default_tools_approval_mode?: McpCodexToolApprovalMode;
};

/** Shared type for Mcp Server Config in src/config. */
export type McpServerConfig = {
  /** Stdio transport: command to spawn. */
  command?: string;
  /** Stdio transport: arguments for the command. */
  args?: string[];
  /** Environment variables passed to the server process (stdio only). */
  env?: Record<string, string | number | boolean>;
  /** Working directory for stdio server. */
  cwd?: string;
  /** Alias for cwd. */
  workingDirectory?: string;
  /** HTTP transport: URL of the remote MCP server (http or https). */
  url?: string;
  /** HTTP transport type for remote MCP servers. */
  transport?: "sse" | "streamable-http";
  /** HTTP transport: extra HTTP headers sent with every request. */
  headers?: Record<string, string | number | boolean>;
  /** Optional connection timeout in milliseconds. */
  connectionTimeoutMs?: number;
  /** Codex-specific projection controls for Codex app-server/runtime config. */
  codex?: McpServerCodexConfig;
  [key: string]: unknown;
};

/** Shared type for Mcp Config in src/config. */
export type McpConfig = {
  /** Named MCP server definitions managed by OpenClaw. */
  servers?: Record<string, McpServerConfig>;
  /**
   * Idle TTL for session-scoped bundled MCP runtimes, in milliseconds.
   *
   * Defaults to 10 minutes. Set to 0 to disable idle eviction.
   */
  sessionIdleTtlMs?: number;
};
