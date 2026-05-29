// Shared types for model-catalog/provider-index types behavior.
import type { ModelCatalogProvider } from "../types.js";

/** Shared type for Open Claw Provider Index Plugin Install in src/model-catalog/provider-index. */
export type OpenClawProviderIndexPluginInstall = {
  clawhubSpec?: string;
  npmSpec?: string;
  defaultChoice?: "clawhub" | "npm";
  minHostVersion?: string;
  expectedIntegrity?: string;
};

/** Shared type for Open Claw Provider Index Plugin in src/model-catalog/provider-index. */
export type OpenClawProviderIndexPlugin = {
  id: string;
  package?: string;
  source?: string;
  install?: OpenClawProviderIndexPluginInstall;
};

/** Shared type for Open Claw Provider Index Provider Auth Choice in src/model-catalog/provider-index. */
export type OpenClawProviderIndexProviderAuthChoice = {
  method: string;
  choiceId: string;
  choiceLabel: string;
  choiceHint?: string;
  assistantPriority?: number;
  assistantVisibility?: "visible" | "manual-only";
  groupId?: string;
  groupLabel?: string;
  groupHint?: string;
  optionKey?: string;
  cliFlag?: string;
  cliOption?: string;
  cliDescription?: string;
  onboardingScopes?: readonly ("text-inference" | "image-generation" | "music-generation")[];
};

/** Shared type for Open Claw Provider Index Provider in src/model-catalog/provider-index. */
export type OpenClawProviderIndexProvider = {
  id: string;
  name: string;
  plugin: OpenClawProviderIndexPlugin;
  docs?: string;
  categories?: readonly string[];
  authChoices?: readonly OpenClawProviderIndexProviderAuthChoice[];
  previewCatalog?: ModelCatalogProvider;
};

/** Shared type for Open Claw Provider Index in src/model-catalog/provider-index. */
export type OpenClawProviderIndex = {
  version: number;
  providers: Readonly<Record<string, OpenClawProviderIndexProvider>>;
};
