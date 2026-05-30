// Provider catalog projection into unified text-model catalog rows.
import type { UnifiedModelCatalogEntry } from "../model-catalog/types.js";
import type { ProviderCatalogResult } from "./types.js";

/** Convert plugin provider catalog results into unified text catalog entries. */
export function projectProviderCatalogResultToUnifiedTextRows(params: {
  providerId: string;
  result: ProviderCatalogResult;
  source: UnifiedModelCatalogEntry["source"];
}): UnifiedModelCatalogEntry[] {
  if (!params.result) {
    return [];
  }
  const providers =
    "provider" in params.result
      ? { [params.providerId]: params.result.provider }
      : params.result.providers;
  const rows: UnifiedModelCatalogEntry[] = [];
  for (const [providerId, providerConfig] of Object.entries(providers)) {
    for (const model of providerConfig.models ?? []) {
      rows.push({
        kind: "text",
        provider: providerId,
        model: model.id,
        ...(model.name ? { label: model.name } : {}),
        source: params.source,
      });
    }
  }
  return rows;
}
