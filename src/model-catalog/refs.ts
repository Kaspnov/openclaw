// model-catalog refs helpers and runtime behavior.
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";

/** Reused helper for normalize Model Catalog Provider Id behavior in src/model-catalog. */
export function normalizeModelCatalogProviderId(provider: string): string {
  return normalizeLowercaseStringOrEmpty(provider);
}

/** Reused helper for build Model Catalog Ref behavior in src/model-catalog. */
export function buildModelCatalogRef(provider: string, modelId: string): string {
  return `${normalizeModelCatalogProviderId(provider)}/${modelId}`;
}

/** Reused helper for build Model Catalog Merge Key behavior in src/model-catalog. */
export function buildModelCatalogMergeKey(provider: string, modelId: string): string {
  return `${normalizeModelCatalogProviderId(provider)}::${normalizeLowercaseStringOrEmpty(modelId)}`;
}
