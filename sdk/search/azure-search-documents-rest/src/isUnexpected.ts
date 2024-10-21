// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  GetServiceStatistics200Response,
  GetServiceStatisticsDefaultResponse,
  DataSourcesOperationsCreateOrUpdate200Response,
  DataSourcesOperationsCreateOrUpdate201Response,
  DataSourcesOperationsCreateOrUpdateDefaultResponse,
  DataSourcesOperationsDelete204Response,
  DataSourcesOperationsDeleteDefaultResponse,
  DataSourcesOperationsGet200Response,
  DataSourcesOperationsGet201Response,
  DataSourcesOperationsGetDefaultResponse,
  DataSourcesOperationsList200Response,
  DataSourcesOperationsListDefaultResponse,
  DataSourcesOperationsCreate200Response,
  DataSourcesOperationsCreate201Response,
  DataSourcesOperationsCreateDefaultResponse,
  IndexersOperationsReset204Response,
  IndexersOperationsResetDefaultResponse,
  IndexersOperationsRun204Response,
  IndexersOperationsRunDefaultResponse,
  IndexersOperationsCreateOrUpdate200Response,
  IndexersOperationsCreateOrUpdate201Response,
  IndexersOperationsCreateOrUpdateDefaultResponse,
  IndexersOperationsDelete204Response,
  IndexersOperationsDeleteDefaultResponse,
  IndexersOperationsGet200Response,
  IndexersOperationsGet201Response,
  IndexersOperationsGetDefaultResponse,
  IndexersOperationsList200Response,
  IndexersOperationsListDefaultResponse,
  IndexersOperationsCreate200Response,
  IndexersOperationsCreate201Response,
  IndexersOperationsCreateDefaultResponse,
  IndexersOperationsGetStatus200Response,
  IndexersOperationsGetStatusDefaultResponse,
  SkillsetsOperationsCreateOrUpdate200Response,
  SkillsetsOperationsCreateOrUpdate201Response,
  SkillsetsOperationsCreateOrUpdateDefaultResponse,
  SkillsetsOperationsDelete204Response,
  SkillsetsOperationsDeleteDefaultResponse,
  SkillsetsOperationsGet200Response,
  SkillsetsOperationsGet201Response,
  SkillsetsOperationsGetDefaultResponse,
  SkillsetsOperationsList200Response,
  SkillsetsOperationsListDefaultResponse,
  SkillsetsOperationsCreate200Response,
  SkillsetsOperationsCreate201Response,
  SkillsetsOperationsCreateDefaultResponse,
  SynonymMapsOperationsCreateOrUpdate200Response,
  SynonymMapsOperationsCreateOrUpdate201Response,
  SynonymMapsOperationsCreateOrUpdateDefaultResponse,
  SynonymMapsOperationsDelete204Response,
  SynonymMapsOperationsDeleteDefaultResponse,
  SynonymMapsOperationsGet200Response,
  SynonymMapsOperationsGet201Response,
  SynonymMapsOperationsGetDefaultResponse,
  SynonymMapsOperationsList200Response,
  SynonymMapsOperationsListDefaultResponse,
  SynonymMapsOperationsCreate200Response,
  SynonymMapsOperationsCreate201Response,
  SynonymMapsOperationsCreateDefaultResponse,
  IndexesOperationsCreate200Response,
  IndexesOperationsCreate201Response,
  IndexesOperationsCreateDefaultResponse,
  IndexesOperationsList200Response,
  IndexesOperationsListDefaultResponse,
  IndexesOperationsCreateOrUpdate200Response,
  IndexesOperationsCreateOrUpdate201Response,
  IndexesOperationsCreateOrUpdateDefaultResponse,
  IndexesOperationsDelete204Response,
  IndexesOperationsDeleteDefaultResponse,
  IndexesOperationsGet200Response,
  IndexesOperationsGet201Response,
  IndexesOperationsGetDefaultResponse,
  IndexesOperationsGetStatistics200Response,
  IndexesOperationsGetStatisticsDefaultResponse,
  IndexesOperationsAnalyze200Response,
  IndexesOperationsAnalyzeDefaultResponse,
  DocumentsOperationsCount200Response,
  DocumentsOperationsCountDefaultResponse,
  DocumentsOperationsSearchGet200Response,
  DocumentsOperationsSearchGetDefaultResponse,
  DocumentsOperationsSearchPost200Response,
  DocumentsOperationsSearchPostDefaultResponse,
  DocumentsOperationsGet200Response,
  DocumentsOperationsGetDefaultResponse,
  DocumentsOperationsSuggestGet200Response,
  DocumentsOperationsSuggestGetDefaultResponse,
  DocumentsOperationsSuggestPost200Response,
  DocumentsOperationsSuggestPostDefaultResponse,
  DocumentsOperationsIndex200Response,
  DocumentsOperationsIndex207Response,
  DocumentsOperationsIndexDefaultResponse,
  DocumentsOperationsAutocompleteGet200Response,
  DocumentsOperationsAutocompleteGetDefaultResponse,
  DocumentsOperationsAutocompletePost200Response,
  DocumentsOperationsAutocompletePostDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /servicestats": ["200"],
  "PUT /datasources('{dataSourceName}')": ["200", "201"],
  "DELETE /datasources('{dataSourceName}')": ["204"],
  "GET /datasources('{dataSourceName}')": ["200", "201"],
  "GET /datasources": ["200"],
  "POST /datasources": ["200", "201"],
  "POST /indexers('{indexerName}')/search.reset": ["204"],
  "POST /indexers('{indexerName}')/search.run": ["204"],
  "PUT /indexers('{indexerName}')": ["200", "201"],
  "DELETE /indexers('{indexerName}')": ["204"],
  "GET /indexers('{indexerName}')": ["200", "201"],
  "GET /indexers": ["200"],
  "POST /indexers": ["200", "201"],
  "GET /indexers('{indexerName}')/search.status": ["200"],
  "PUT /skillsets('{skillsetName}')": ["200", "201"],
  "DELETE /skillsets('{skillsetName}')": ["204"],
  "GET /skillsets('{skillsetName}')": ["200", "201"],
  "GET /skillsets": ["200"],
  "POST /skillsets": ["200", "201"],
  "PUT /synonymmaps('{synonymMapName}')": ["200", "201"],
  "DELETE /synonymmaps('{synonymMapName}')": ["204"],
  "GET /synonymmaps('{synonymMapName}')": ["200", "201"],
  "GET /synonymmaps": ["200"],
  "POST /synonymmaps": ["200", "201"],
  "POST /indexes": ["200", "201"],
  "GET /indexes": ["200"],
  "PUT /indexes('{indexName}')": ["200", "201"],
  "DELETE /indexes('{indexName}')": ["204"],
  "GET /indexes('{indexName}')": ["200", "201"],
  "GET /indexes('{indexName}')/search.stats": ["200"],
  "POST /indexes('{indexName}')/search.analyze": ["200"],
  "GET /indexes('{indexName}')/docs/$count": ["200"],
  "GET /indexes('{indexName}')/docs": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.search": ["200"],
  "GET /indexes('{indexName}')/docs('{key}')": ["200"],
  "GET /indexes('{indexName}')/docs/search.suggest": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.suggest": ["200"],
  "POST /indexes('{indexName}')/docs/search.index": ["200", "207"],
  "GET /indexes('{indexName}')/docs/search.autocomplete": ["200"],
  "POST /indexes('{indexName}')/docs/search.post.autocomplete": ["200"],
};

export function isUnexpected(
  response:
    | GetServiceStatistics200Response
    | GetServiceStatisticsDefaultResponse,
): response is GetServiceStatisticsDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesOperationsCreateOrUpdate200Response
    | DataSourcesOperationsCreateOrUpdate201Response
    | DataSourcesOperationsCreateOrUpdateDefaultResponse,
): response is DataSourcesOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesOperationsDelete204Response
    | DataSourcesOperationsDeleteDefaultResponse,
): response is DataSourcesOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesOperationsGet200Response
    | DataSourcesOperationsGet201Response
    | DataSourcesOperationsGetDefaultResponse,
): response is DataSourcesOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesOperationsList200Response
    | DataSourcesOperationsListDefaultResponse,
): response is DataSourcesOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesOperationsCreate200Response
    | DataSourcesOperationsCreate201Response
    | DataSourcesOperationsCreateDefaultResponse,
): response is DataSourcesOperationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsReset204Response
    | IndexersOperationsResetDefaultResponse,
): response is IndexersOperationsResetDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsRun204Response
    | IndexersOperationsRunDefaultResponse,
): response is IndexersOperationsRunDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsCreateOrUpdate200Response
    | IndexersOperationsCreateOrUpdate201Response
    | IndexersOperationsCreateOrUpdateDefaultResponse,
): response is IndexersOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsDelete204Response
    | IndexersOperationsDeleteDefaultResponse,
): response is IndexersOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsGet200Response
    | IndexersOperationsGet201Response
    | IndexersOperationsGetDefaultResponse,
): response is IndexersOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsList200Response
    | IndexersOperationsListDefaultResponse,
): response is IndexersOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsCreate200Response
    | IndexersOperationsCreate201Response
    | IndexersOperationsCreateDefaultResponse,
): response is IndexersOperationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | IndexersOperationsGetStatus200Response
    | IndexersOperationsGetStatusDefaultResponse,
): response is IndexersOperationsGetStatusDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsOperationsCreateOrUpdate200Response
    | SkillsetsOperationsCreateOrUpdate201Response
    | SkillsetsOperationsCreateOrUpdateDefaultResponse,
): response is SkillsetsOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsOperationsDelete204Response
    | SkillsetsOperationsDeleteDefaultResponse,
): response is SkillsetsOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsOperationsGet200Response
    | SkillsetsOperationsGet201Response
    | SkillsetsOperationsGetDefaultResponse,
): response is SkillsetsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsOperationsList200Response
    | SkillsetsOperationsListDefaultResponse,
): response is SkillsetsOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsOperationsCreate200Response
    | SkillsetsOperationsCreate201Response
    | SkillsetsOperationsCreateDefaultResponse,
): response is SkillsetsOperationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsOperationsCreateOrUpdate200Response
    | SynonymMapsOperationsCreateOrUpdate201Response
    | SynonymMapsOperationsCreateOrUpdateDefaultResponse,
): response is SynonymMapsOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsOperationsDelete204Response
    | SynonymMapsOperationsDeleteDefaultResponse,
): response is SynonymMapsOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsOperationsGet200Response
    | SynonymMapsOperationsGet201Response
    | SynonymMapsOperationsGetDefaultResponse,
): response is SynonymMapsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsOperationsList200Response
    | SynonymMapsOperationsListDefaultResponse,
): response is SynonymMapsOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsOperationsCreate200Response
    | SynonymMapsOperationsCreate201Response
    | SynonymMapsOperationsCreateDefaultResponse,
): response is SynonymMapsOperationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsCreate200Response
    | IndexesOperationsCreate201Response
    | IndexesOperationsCreateDefaultResponse,
): response is IndexesOperationsCreateDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsList200Response
    | IndexesOperationsListDefaultResponse,
): response is IndexesOperationsListDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsCreateOrUpdate200Response
    | IndexesOperationsCreateOrUpdate201Response
    | IndexesOperationsCreateOrUpdateDefaultResponse,
): response is IndexesOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsDelete204Response
    | IndexesOperationsDeleteDefaultResponse,
): response is IndexesOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsGet200Response
    | IndexesOperationsGet201Response
    | IndexesOperationsGetDefaultResponse,
): response is IndexesOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsGetStatistics200Response
    | IndexesOperationsGetStatisticsDefaultResponse,
): response is IndexesOperationsGetStatisticsDefaultResponse;
export function isUnexpected(
  response:
    | IndexesOperationsAnalyze200Response
    | IndexesOperationsAnalyzeDefaultResponse,
): response is IndexesOperationsAnalyzeDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsCount200Response
    | DocumentsOperationsCountDefaultResponse,
): response is DocumentsOperationsCountDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsSearchGet200Response
    | DocumentsOperationsSearchGetDefaultResponse,
): response is DocumentsOperationsSearchGetDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsSearchPost200Response
    | DocumentsOperationsSearchPostDefaultResponse,
): response is DocumentsOperationsSearchPostDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsGet200Response
    | DocumentsOperationsGetDefaultResponse,
): response is DocumentsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsSuggestGet200Response
    | DocumentsOperationsSuggestGetDefaultResponse,
): response is DocumentsOperationsSuggestGetDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsSuggestPost200Response
    | DocumentsOperationsSuggestPostDefaultResponse,
): response is DocumentsOperationsSuggestPostDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsIndex200Response
    | DocumentsOperationsIndex207Response
    | DocumentsOperationsIndexDefaultResponse,
): response is DocumentsOperationsIndexDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsAutocompleteGet200Response
    | DocumentsOperationsAutocompleteGetDefaultResponse,
): response is DocumentsOperationsAutocompleteGetDefaultResponse;
export function isUnexpected(
  response:
    | DocumentsOperationsAutocompletePost200Response
    | DocumentsOperationsAutocompletePostDefaultResponse,
): response is DocumentsOperationsAutocompletePostDefaultResponse;
export function isUnexpected(
  response:
    | GetServiceStatistics200Response
    | GetServiceStatisticsDefaultResponse
    | DataSourcesOperationsCreateOrUpdate200Response
    | DataSourcesOperationsCreateOrUpdate201Response
    | DataSourcesOperationsCreateOrUpdateDefaultResponse
    | DataSourcesOperationsDelete204Response
    | DataSourcesOperationsDeleteDefaultResponse
    | DataSourcesOperationsGet200Response
    | DataSourcesOperationsGet201Response
    | DataSourcesOperationsGetDefaultResponse
    | DataSourcesOperationsList200Response
    | DataSourcesOperationsListDefaultResponse
    | DataSourcesOperationsCreate200Response
    | DataSourcesOperationsCreate201Response
    | DataSourcesOperationsCreateDefaultResponse
    | IndexersOperationsReset204Response
    | IndexersOperationsResetDefaultResponse
    | IndexersOperationsRun204Response
    | IndexersOperationsRunDefaultResponse
    | IndexersOperationsCreateOrUpdate200Response
    | IndexersOperationsCreateOrUpdate201Response
    | IndexersOperationsCreateOrUpdateDefaultResponse
    | IndexersOperationsDelete204Response
    | IndexersOperationsDeleteDefaultResponse
    | IndexersOperationsGet200Response
    | IndexersOperationsGet201Response
    | IndexersOperationsGetDefaultResponse
    | IndexersOperationsList200Response
    | IndexersOperationsListDefaultResponse
    | IndexersOperationsCreate200Response
    | IndexersOperationsCreate201Response
    | IndexersOperationsCreateDefaultResponse
    | IndexersOperationsGetStatus200Response
    | IndexersOperationsGetStatusDefaultResponse
    | SkillsetsOperationsCreateOrUpdate200Response
    | SkillsetsOperationsCreateOrUpdate201Response
    | SkillsetsOperationsCreateOrUpdateDefaultResponse
    | SkillsetsOperationsDelete204Response
    | SkillsetsOperationsDeleteDefaultResponse
    | SkillsetsOperationsGet200Response
    | SkillsetsOperationsGet201Response
    | SkillsetsOperationsGetDefaultResponse
    | SkillsetsOperationsList200Response
    | SkillsetsOperationsListDefaultResponse
    | SkillsetsOperationsCreate200Response
    | SkillsetsOperationsCreate201Response
    | SkillsetsOperationsCreateDefaultResponse
    | SynonymMapsOperationsCreateOrUpdate200Response
    | SynonymMapsOperationsCreateOrUpdate201Response
    | SynonymMapsOperationsCreateOrUpdateDefaultResponse
    | SynonymMapsOperationsDelete204Response
    | SynonymMapsOperationsDeleteDefaultResponse
    | SynonymMapsOperationsGet200Response
    | SynonymMapsOperationsGet201Response
    | SynonymMapsOperationsGetDefaultResponse
    | SynonymMapsOperationsList200Response
    | SynonymMapsOperationsListDefaultResponse
    | SynonymMapsOperationsCreate200Response
    | SynonymMapsOperationsCreate201Response
    | SynonymMapsOperationsCreateDefaultResponse
    | IndexesOperationsCreate200Response
    | IndexesOperationsCreate201Response
    | IndexesOperationsCreateDefaultResponse
    | IndexesOperationsList200Response
    | IndexesOperationsListDefaultResponse
    | IndexesOperationsCreateOrUpdate200Response
    | IndexesOperationsCreateOrUpdate201Response
    | IndexesOperationsCreateOrUpdateDefaultResponse
    | IndexesOperationsDelete204Response
    | IndexesOperationsDeleteDefaultResponse
    | IndexesOperationsGet200Response
    | IndexesOperationsGet201Response
    | IndexesOperationsGetDefaultResponse
    | IndexesOperationsGetStatistics200Response
    | IndexesOperationsGetStatisticsDefaultResponse
    | IndexesOperationsAnalyze200Response
    | IndexesOperationsAnalyzeDefaultResponse
    | DocumentsOperationsCount200Response
    | DocumentsOperationsCountDefaultResponse
    | DocumentsOperationsSearchGet200Response
    | DocumentsOperationsSearchGetDefaultResponse
    | DocumentsOperationsSearchPost200Response
    | DocumentsOperationsSearchPostDefaultResponse
    | DocumentsOperationsGet200Response
    | DocumentsOperationsGetDefaultResponse
    | DocumentsOperationsSuggestGet200Response
    | DocumentsOperationsSuggestGetDefaultResponse
    | DocumentsOperationsSuggestPost200Response
    | DocumentsOperationsSuggestPostDefaultResponse
    | DocumentsOperationsIndex200Response
    | DocumentsOperationsIndex207Response
    | DocumentsOperationsIndexDefaultResponse
    | DocumentsOperationsAutocompleteGet200Response
    | DocumentsOperationsAutocompleteGetDefaultResponse
    | DocumentsOperationsAutocompletePost200Response
    | DocumentsOperationsAutocompletePostDefaultResponse,
): response is
  | GetServiceStatisticsDefaultResponse
  | DataSourcesOperationsCreateOrUpdateDefaultResponse
  | DataSourcesOperationsDeleteDefaultResponse
  | DataSourcesOperationsGetDefaultResponse
  | DataSourcesOperationsListDefaultResponse
  | DataSourcesOperationsCreateDefaultResponse
  | IndexersOperationsResetDefaultResponse
  | IndexersOperationsRunDefaultResponse
  | IndexersOperationsCreateOrUpdateDefaultResponse
  | IndexersOperationsDeleteDefaultResponse
  | IndexersOperationsGetDefaultResponse
  | IndexersOperationsListDefaultResponse
  | IndexersOperationsCreateDefaultResponse
  | IndexersOperationsGetStatusDefaultResponse
  | SkillsetsOperationsCreateOrUpdateDefaultResponse
  | SkillsetsOperationsDeleteDefaultResponse
  | SkillsetsOperationsGetDefaultResponse
  | SkillsetsOperationsListDefaultResponse
  | SkillsetsOperationsCreateDefaultResponse
  | SynonymMapsOperationsCreateOrUpdateDefaultResponse
  | SynonymMapsOperationsDeleteDefaultResponse
  | SynonymMapsOperationsGetDefaultResponse
  | SynonymMapsOperationsListDefaultResponse
  | SynonymMapsOperationsCreateDefaultResponse
  | IndexesOperationsCreateDefaultResponse
  | IndexesOperationsListDefaultResponse
  | IndexesOperationsCreateOrUpdateDefaultResponse
  | IndexesOperationsDeleteDefaultResponse
  | IndexesOperationsGetDefaultResponse
  | IndexesOperationsGetStatisticsDefaultResponse
  | IndexesOperationsAnalyzeDefaultResponse
  | DocumentsOperationsCountDefaultResponse
  | DocumentsOperationsSearchGetDefaultResponse
  | DocumentsOperationsSearchPostDefaultResponse
  | DocumentsOperationsGetDefaultResponse
  | DocumentsOperationsSuggestGetDefaultResponse
  | DocumentsOperationsSuggestPostDefaultResponse
  | DocumentsOperationsIndexDefaultResponse
  | DocumentsOperationsAutocompleteGetDefaultResponse
  | DocumentsOperationsAutocompletePostDefaultResponse {
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
