// config types skills helpers and runtime behavior.
import type { SecretInput } from "./types.secrets.js";

/** Shared type for Skill Config in src/config. */
export type SkillConfig = {
  enabled?: boolean;
  apiKey?: SecretInput;
  env?: Record<string, string>;
  config?: Record<string, unknown>;
};

/** Shared type for Skills Load Config in src/config. */
export type SkillsLoadConfig = {
  /**
   * Additional skill folders to scan (lowest precedence).
   * Each directory should contain skill subfolders with `SKILL.md`.
   */
  extraDirs?: string[];
  /**
   * Real target directories that skill symlinks may resolve into even when they
   * sit outside the configured source root.
   */
  allowSymlinkTargets?: string[];
  /** Watch skill folders for changes and refresh the skills snapshot. */
  watch?: boolean;
  /** Debounce for the skills watcher (ms). */
  watchDebounceMs?: number;
};

/** Shared type for Skills Install Config in src/config. */
export type SkillsInstallConfig = {
  preferBrew?: boolean;
  nodeManager?: "npm" | "pnpm" | "yarn" | "bun";
  /** Allow gateway clients to install zip archives staged through skills.upload.*. */
  allowUploadedArchives?: boolean;
};

/** Shared type for Skills Limits Config in src/config. */
export type SkillsLimitsConfig = {
  /** Max number of immediate child directories to consider under a skills root before treating it as suspicious. */
  maxCandidatesPerRoot?: number;
  /** Max number of skills to load per skills source (bundled/managed/workspace/extra). */
  maxSkillsLoadedPerSource?: number;
  /** Max number of skills to include in the model-facing skills prompt. */
  maxSkillsInPrompt?: number;
  /** Max characters for the model-facing skills prompt block (approx). */
  maxSkillsPromptChars?: number;
  /** Max size (bytes) allowed for a SKILL.md file to be considered. */
  maxSkillFileBytes?: number;
};

/** Shared type for Skills Config in src/config. */
export type SkillsConfig = {
  /** Optional bundled-skill allowlist (only affects bundled skills). */
  allowBundled?: string[];
  load?: SkillsLoadConfig;
  install?: SkillsInstallConfig;
  limits?: SkillsLimitsConfig;
  entries?: Record<string, SkillConfig>;
};
