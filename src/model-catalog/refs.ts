// Helpers for canonical model catalog provider ids and merge keys.
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";

/** Normalize provider ids before catalog lookup and merge-key construction. */
export function normalizeModelCatalogProviderId(provider: string): string {
  return normalizeLowercaseStringOrEmpty(provider);
}

/** Build the user-facing provider/model reference string. */
export function buildModelCatalogRef(provider: string, modelId: string): string {
  return `${normalizeModelCatalogProviderId(provider)}/${modelId}`;
}

/** Build the case-insensitive key used to merge duplicate catalog rows. */
export function buildModelCatalogMergeKey(provider: string, modelId: string): string {
  return `${normalizeModelCatalogProviderId(provider)}::${normalizeLowercaseStringOrEmpty(modelId)}`;
}
