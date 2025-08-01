// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export function checkURL(testString: string): URL {
  return new URL(testString);
}

export function sanitizeEndpoint(url: string): string {
  return new URL(url).href.replace(/\/$/, "");
}

/**
 * @internal
 */
export function normalizeEndpoint(endpoint: string): string {
  return endpoint.replace(/\s+/g, "").toLowerCase();
}
