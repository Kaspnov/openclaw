import { normalizeProviderId } from "@openclaw/model-catalog-core/provider-id";
import type { OpenClawConfig } from "../config/types.openclaw.js";
import {
  buildManifestBuiltInModelSuppressionResolver,
  resolveManifestBuiltInModelSuppression,
} from "../plugins/manifest-model-suppression.js";
import { normalizeLowercaseStringOrEmpty } from "../shared/string-coerce.js";

function resolveBuiltInModelSuppressionFromManifest(params: {
  provider?: string | null;
  id?: string | null;
  baseUrl?: string | null;
  config?: OpenClawConfig;
  unconditionalOnly?: boolean;
}) {
  const provider = normalizeProviderId(params.provider ?? "");
  const modelId = normalizeLowercaseStringOrEmpty(params.id);
  if (!provider || !modelId) {
    return undefined;
  }
  return resolveManifestBuiltInModelSuppression({
    provider,
    id: modelId,
    ...(params.config ? { config: params.config } : {}),
    ...(params.baseUrl ? { baseUrl: params.baseUrl } : {}),
    unconditionalOnly: params.unconditionalOnly,
    env: process.env,
  });
}

function resolveBuiltInModelSuppression(params: {
  provider?: string | null;
  id?: string | null;
  baseUrl?: string | null;
  config?: OpenClawConfig;
}) {
  const manifestResult = resolveBuiltInModelSuppressionFromManifest(params);
  if (manifestResult?.suppress) {
    return manifestResult;
  }
  const provider = normalizeProviderId(params.provider ?? "");
  const modelId = normalizeLowercaseStringOrEmpty(params.id);
  if (!provider || !modelId) {
    return undefined;
  }
  return undefined;
}

/** Return whether a manifest explicitly suppresses a built-in model. */
export function shouldSuppressBuiltInModelFromManifest(params: {
  provider?: string | null;
  id?: string | null;
  config?: OpenClawConfig;
}) {
  return resolveBuiltInModelSuppressionFromManifest(params)?.suppress ?? false;
}

/** Return whether a built-in model should be hidden. */
export function shouldSuppressBuiltInModel(params: {
  provider?: string | null;
  id?: string | null;
  baseUrl?: string | null;
  config?: OpenClawConfig;
}) {
  return resolveBuiltInModelSuppression(params)?.suppress ?? false;
}

// Checks only unconditional suppressions (no `when` clause). Used for inline
// model entries where user configuration may override conditional suppressions
// (e.g. custom endpoint overrides) but not absolute provider capability blocks.
/** Return whether a model is unconditionally suppressed. */
export function shouldUnconditionallySuppress(params: {
  provider?: string | null;
  id?: string | null;
  config?: OpenClawConfig;
}): boolean {
  return (
    resolveBuiltInModelSuppressionFromManifest({ ...params, unconditionalOnly: true })?.suppress ??
    false
  );
}

/** Build an error message for suppressed built-in model use. */
export function buildSuppressedBuiltInModelError(params: {
  provider?: string | null;
  id?: string | null;
  baseUrl?: string | null;
  config?: OpenClawConfig;
}): string | undefined {
  return resolveBuiltInModelSuppression(params)?.errorMessage;
}

/** Build a reusable built-in model suppression predicate. */
export function buildShouldSuppressBuiltInModel(params: {
  config?: OpenClawConfig;
}): (input: { provider?: string | null; id?: string | null; baseUrl?: string | null }) => boolean {
  const resolver = buildManifestBuiltInModelSuppressionResolver({
    config: params.config,
    env: process.env,
  });

  return (input) => {
    const provider = normalizeProviderId(input.provider ?? "");
    const id = normalizeLowercaseStringOrEmpty(input.id);
    if (!provider || !id) {
      return false;
    }
    return resolver({ ...input, provider, id })?.suppress ?? false;
  };
}
