// model-catalog index helpers and runtime behavior.
/** Re-exported API for src/model-catalog, starting with merge Model Catalog Rows By Authority. */
export { mergeModelCatalogRowsByAuthority } from "./authority.js";
/** Re-exported API for src/model-catalog. */
export {
  buildModelCatalogMergeKey,
  buildModelCatalogRef,
  normalizeModelCatalogProviderId,
} from "./refs.js";
/** Re-exported API for src/model-catalog, starting with normalize Model Catalog. */
export { normalizeModelCatalog, normalizeModelCatalogRows } from "./normalize.js";
/** Re-exported API for src/model-catalog, starting with load Open Claw Provider Index. */
export { loadOpenClawProviderIndex } from "./provider-index/index.js";
/** Re-exported API for src/model-catalog. */
export {
  planManifestModelCatalogRows,
  planManifestModelCatalogSuppressions,
} from "./manifest-planner.js";
/** Re-exported API for src/model-catalog, starting with plan Provider Index Model Catalog Rows. */
export { planProviderIndexModelCatalogRows } from "./provider-index-planner.js";
/** Re-exported API for src/model-catalog, starting with Manifest Model Catalog Suppression Entry. */
export type { ManifestModelCatalogSuppressionEntry } from "./manifest-planner.js";
/** Re-exported API for src/model-catalog. */
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
/** Re-exported API for src/model-catalog, starting with Open Claw Provider Index Provider. */
export type { OpenClawProviderIndexProvider } from "./provider-index/index.js";
