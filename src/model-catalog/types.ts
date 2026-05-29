// Shared types for model-catalog types behavior.
import type { ModelApi, ModelCompatConfig, ModelMediaInputConfig } from "../config/types.models.js";

/** Shared type for Model Catalog Input in src/model-catalog. */
export type ModelCatalogInput = "text" | "image" | "document";
/** Shared type for Model Catalog Discovery in src/model-catalog. */
export type ModelCatalogDiscovery = "static" | "refreshable" | "runtime";
/** Shared type for Model Catalog Status in src/model-catalog. */
export type ModelCatalogStatus = "available" | "preview" | "deprecated" | "disabled";
/** Shared type for Model Catalog Source in src/model-catalog. */
export type ModelCatalogSource =
  | "manifest"
  | "provider-index"
  | "cache"
  | "config"
  | "runtime-refresh";

/** Shared type for Unified Model Catalog Kind in src/model-catalog. */
export type UnifiedModelCatalogKind =
  | "text"
  | "voice"
  | "image_generation"
  | "video_generation"
  | "music_generation";

/** Shared type for Unified Model Catalog Source in src/model-catalog. */
export type UnifiedModelCatalogSource =
  | "manifest"
  | "provider-index"
  | "static"
  | "live"
  | "cache"
  | "configured"
  | "runtime-refresh";

/** Shared type for Unified Model Catalog Entry in src/model-catalog. */
export type UnifiedModelCatalogEntry<TCapabilities = unknown> = {
  kind: UnifiedModelCatalogKind;
  provider: string;
  model: string;
  label?: string;
  source: UnifiedModelCatalogSource;
  default?: boolean;
  configured?: boolean;
  capabilities?: TCapabilities;
  modes?: readonly string[];
  authEnvVars?: readonly string[];
  docsPath?: string;
  fetchedAt?: number;
  expiresAt?: number;
  warnings?: readonly string[];
};

/** Shared type for Model Catalog Tiered Cost in src/model-catalog. */
export type ModelCatalogTieredCost = {
  input: number;
  output: number;
  cacheRead: number;
  cacheWrite: number;
  range: [number, number] | [number];
};

/** Shared type for Model Catalog Cost in src/model-catalog. */
export type ModelCatalogCost = {
  input?: number;
  output?: number;
  cacheRead?: number;
  cacheWrite?: number;
  tieredPricing?: ModelCatalogTieredCost[];
};

/** Shared type for Model Catalog Model in src/model-catalog. */
export type ModelCatalogModel = {
  id: string;
  name?: string;
  api?: ModelApi;
  baseUrl?: string;
  headers?: Record<string, string>;
  input?: ModelCatalogInput[];
  reasoning?: boolean;
  contextWindow?: number;
  contextTokens?: number;
  maxTokens?: number;
  cost?: ModelCatalogCost;
  compat?: ModelCompatConfig;
  mediaInput?: ModelMediaInputConfig;
  status?: ModelCatalogStatus;
  statusReason?: string;
  replaces?: string[];
  replacedBy?: string;
  tags?: string[];
};

/** Shared type for Model Catalog Provider in src/model-catalog. */
export type ModelCatalogProvider = {
  baseUrl?: string;
  api?: ModelApi;
  headers?: Record<string, string>;
  models: ModelCatalogModel[];
};

/** Shared type for Model Catalog Alias in src/model-catalog. */
export type ModelCatalogAlias = {
  provider: string;
  api?: ModelApi;
  baseUrl?: string;
};

/** Shared type for Model Catalog Suppression in src/model-catalog. */
export type ModelCatalogSuppression = {
  provider: string;
  model: string;
  reason?: string;
  when?: {
    baseUrlHosts?: string[];
    providerConfigApiIn?: string[];
  };
};

/** Shared type for Model Catalog in src/model-catalog. */
export type ModelCatalog = {
  providers?: Record<string, ModelCatalogProvider>;
  aliases?: Record<string, ModelCatalogAlias>;
  suppressions?: ModelCatalogSuppression[];
  discovery?: Record<string, ModelCatalogDiscovery>;
  runtimeAugment?: boolean;
};

/** Shared type for Normalized Model Catalog Row in src/model-catalog. */
export type NormalizedModelCatalogRow = {
  provider: string;
  id: string;
  ref: string;
  mergeKey: string;
  name: string;
  source: ModelCatalogSource;
  input: ModelCatalogInput[];
  reasoning: boolean;
  status: ModelCatalogStatus;
  api?: ModelApi;
  baseUrl?: string;
  headers?: Record<string, string>;
  contextWindow?: number;
  contextTokens?: number;
  maxTokens?: number;
  cost?: ModelCatalogCost;
  compat?: ModelCompatConfig;
  mediaInput?: ModelMediaInputConfig;
  statusReason?: string;
  replaces?: string[];
  replacedBy?: string;
  tags?: string[];
};
