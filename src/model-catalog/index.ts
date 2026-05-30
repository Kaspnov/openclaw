// Public model catalog barrel for normalization, planning, refs, and provider index data.
/** Re-export catalog row authority merging. */
export { mergeModelCatalogRowsByAuthority } from "./authority.js";
/** Re-export model catalog ref and provider-id helpers. */
export {
  buildModelCatalogMergeKey,
  buildModelCatalogRef,
  normalizeModelCatalogProviderId,
} from "./refs.js";
/** Re-export model catalog normalizers. */
export { normalizeModelCatalog, normalizeModelCatalogRows } from "./normalize.js";
/** Re-export the OpenClaw-owned provider index loader. */
export { loadOpenClawProviderIndex } from "./provider-index/index.js";
/** Re-export manifest model catalog planners. */
export {
  planManifestModelCatalogRows,
  planManifestModelCatalogSuppressions,
} from "./manifest-planner.js";
/** Re-export provider-index preview catalog planner. */
export { planProviderIndexModelCatalogRows } from "./provider-index-planner.js";
/** Re-export manifest suppression plan entry type. */
export type { ManifestModelCatalogSuppressionEntry } from "./manifest-planner.js";
/** Re-export public model catalog data contracts. */
export type {
  ModelCatalog,
  ModelCatalogAlias,
  ModelCatalogCost,
  ModelCatalogDiscovery,
  ModelCatalogInput,
  ModelCatalogModel,
  ModelCatalogProvider,
  ModelCatalogSource,
  ModelCatalogStatus,
  ModelCatalogSuppression,
  ModelCatalogTieredCost,
  NormalizedModelCatalogRow,
  UnifiedModelCatalogEntry,
  UnifiedModelCatalogKind,
  UnifiedModelCatalogSource,
} from "./types.js";
/** Re-export public OpenClaw provider index provider type. */
export type { OpenClawProviderIndexProvider } from "./provider-index/index.js";
