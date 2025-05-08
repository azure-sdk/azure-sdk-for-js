// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetAnnotation200Response,
  GetAnnotationDefaultResponse,
  SubmitAnnotation202Response,
  SubmitAnnotationDefaultResponse,
  GetJailBreakDatasetWithType200Response,
  GetJailBreakDatasetWithTypeDefaultResponse,
  GetAttackObjectives200Response,
  GetAttackObjectivesDefaultResponse,
  GetJailBreakDataset200Response,
  GetJailBreakDatasetDefaultResponse,
  GetTemplateParametersWithType200Response,
  GetTemplateParametersWithTypeDefaultResponse,
  GetTemplateParameters200Response,
  GetTemplateParametersDefaultResponse,
  GetTemplateParametersImage200Response,
  GetTemplateParametersImageDefaultResponse,
  SubmitSimulation202Response,
  SubmitSimulationDefaultResponse,
  SubmitAoaiEvaluation202Response,
  SubmitAoaiEvaluationDefaultResponse,
  GetOperationResult200Response,
  GetOperationResultDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /checkannotation": ["200"],
  "POST /submitannotation": ["202"],
  "GET /simulation/jailbreak/{type}": ["200"],
  "GET /simulation/attackobjectives": ["200"],
  "GET /simulation/jailbreak/": ["200"],
  "GET /simulation/template/parameters/{type}": ["200"],
  "GET /simulation/template/parameters/": ["200"],
  "GET /simulation/template/parameters/image": ["200"],
  "POST /simulation/chat/completions/submit": ["202"],
  "POST /submitaoaievaluation": ["202"],
  "GET /operations/{operationId}": ["200"],
};

export function isUnexpected(
  response: GetAnnotation200Response | GetAnnotationDefaultResponse,
): response is GetAnnotationDefaultResponse;
export function isUnexpected(
  response: SubmitAnnotation202Response | SubmitAnnotationDefaultResponse,
): response is SubmitAnnotationDefaultResponse;
export function isUnexpected(
  response:
    | GetJailBreakDatasetWithType200Response
    | GetJailBreakDatasetWithTypeDefaultResponse,
): response is GetJailBreakDatasetWithTypeDefaultResponse;
export function isUnexpected(
  response: GetAttackObjectives200Response | GetAttackObjectivesDefaultResponse,
): response is GetAttackObjectivesDefaultResponse;
export function isUnexpected(
  response: GetJailBreakDataset200Response | GetJailBreakDatasetDefaultResponse,
): response is GetJailBreakDatasetDefaultResponse;
export function isUnexpected(
  response:
    | GetTemplateParametersWithType200Response
    | GetTemplateParametersWithTypeDefaultResponse,
): response is GetTemplateParametersWithTypeDefaultResponse;
export function isUnexpected(
  response:
    | GetTemplateParameters200Response
    | GetTemplateParametersDefaultResponse,
): response is GetTemplateParametersDefaultResponse;
export function isUnexpected(
  response:
    | GetTemplateParametersImage200Response
    | GetTemplateParametersImageDefaultResponse,
): response is GetTemplateParametersImageDefaultResponse;
export function isUnexpected(
  response: SubmitSimulation202Response | SubmitSimulationDefaultResponse,
): response is SubmitSimulationDefaultResponse;
export function isUnexpected(
  response:
    | SubmitAoaiEvaluation202Response
    | SubmitAoaiEvaluationDefaultResponse,
): response is SubmitAoaiEvaluationDefaultResponse;
export function isUnexpected(
  response: GetOperationResult200Response | GetOperationResultDefaultResponse,
): response is GetOperationResultDefaultResponse;
export function isUnexpected(
  response:
    | GetAnnotation200Response
    | GetAnnotationDefaultResponse
    | SubmitAnnotation202Response
    | SubmitAnnotationDefaultResponse
    | GetJailBreakDatasetWithType200Response
    | GetJailBreakDatasetWithTypeDefaultResponse
    | GetAttackObjectives200Response
    | GetAttackObjectivesDefaultResponse
    | GetJailBreakDataset200Response
    | GetJailBreakDatasetDefaultResponse
    | GetTemplateParametersWithType200Response
    | GetTemplateParametersWithTypeDefaultResponse
    | GetTemplateParameters200Response
    | GetTemplateParametersDefaultResponse
    | GetTemplateParametersImage200Response
    | GetTemplateParametersImageDefaultResponse
    | SubmitSimulation202Response
    | SubmitSimulationDefaultResponse
    | SubmitAoaiEvaluation202Response
    | SubmitAoaiEvaluationDefaultResponse
    | GetOperationResult200Response
    | GetOperationResultDefaultResponse,
): response is
  | GetAnnotationDefaultResponse
  | SubmitAnnotationDefaultResponse
  | GetJailBreakDatasetWithTypeDefaultResponse
  | GetAttackObjectivesDefaultResponse
  | GetJailBreakDatasetDefaultResponse
  | GetTemplateParametersWithTypeDefaultResponse
  | GetTemplateParametersDefaultResponse
  | GetTemplateParametersImageDefaultResponse
  | SubmitSimulationDefaultResponse
  | SubmitAoaiEvaluationDefaultResponse
  | GetOperationResultDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
