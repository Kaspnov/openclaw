// extensions/skill-workshop api helpers and runtime behavior.
/** Re-exported skill-workshop plugin public API, starting with define Plugin Entry. */
export { definePluginEntry, jsonResult, type OpenClawPluginApi } from "openclaw/plugin-sdk/core";
/** Re-exported skill-workshop plugin public API, starting with resolve Default Agent Id. */
export { resolveDefaultAgentId } from "openclaw/plugin-sdk/agent-runtime";
/** Re-exported skill-workshop plugin public API, starting with bump Skills Snapshot Version. */
export { bumpSkillsSnapshotVersion } from "openclaw/plugin-sdk/skills-runtime";
