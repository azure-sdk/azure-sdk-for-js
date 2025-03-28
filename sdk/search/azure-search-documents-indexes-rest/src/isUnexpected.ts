// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetServiceStatistics200Response,
  GetServiceStatisticsDefaultResponse,
  DataSourcesCreateOrUpdate200Response,
  DataSourcesCreateOrUpdate201Response,
  DataSourcesCreateOrUpdateDefaultResponse,
  DataSourcesDelete204Response,
  DataSourcesDelete404Response,
  DataSourcesDeleteDefaultResponse,
  DataSourcesGet200Response,
  DataSourcesGetDefaultResponse,
  DataSourcesList200Response,
  DataSourcesListDefaultResponse,
  DataSourcesCreate201Response,
  DataSourcesCreateDefaultResponse,
  IndexersReset204Response,
  IndexersResetDefaultResponse,
  IndexersRun202Response,
  IndexersRunDefaultResponse,
  IndexersCreateOrUpdate200Response,
  IndexersCreateOrUpdate201Response,
  IndexersCreateOrUpdateDefaultResponse,
  IndexersDelete204Response,
  IndexersDelete404Response,
  IndexersDeleteDefaultResponse,
  IndexersGet200Response,
  IndexersGetDefaultResponse,
  IndexersList200Response,
  IndexersListDefaultResponse,
  IndexersCreate201Response,
  IndexersCreateDefaultResponse,
  IndexersGetStatus200Response,
  IndexersGetStatusDefaultResponse,
  SkillsetsCreateOrUpdate200Response,
  SkillsetsCreateOrUpdate201Response,
  SkillsetsCreateOrUpdateDefaultResponse,
  SkillsetsDelete204Response,
  SkillsetsDelete404Response,
  SkillsetsDeleteDefaultResponse,
  SkillsetsGet200Response,
  SkillsetsGetDefaultResponse,
  SkillsetsList200Response,
  SkillsetsListDefaultResponse,
  SkillsetsCreate201Response,
  SkillsetsCreateDefaultResponse,
  SynonymMapsCreateOrUpdate200Response,
  SynonymMapsCreateOrUpdate201Response,
  SynonymMapsCreateOrUpdateDefaultResponse,
  SynonymMapsDelete204Response,
  SynonymMapsDelete404Response,
  SynonymMapsDeleteDefaultResponse,
  SynonymMapsGet200Response,
  SynonymMapsGetDefaultResponse,
  SynonymMapsList200Response,
  SynonymMapsListDefaultResponse,
  SynonymMapsCreate201Response,
  SynonymMapsCreateDefaultResponse,
  IndexesCreate201Response,
  IndexesCreateDefaultResponse,
  IndexesList200Response,
  IndexesListDefaultResponse,
  IndexesCreateOrUpdate200Response,
  IndexesCreateOrUpdate201Response,
  IndexesCreateOrUpdateDefaultResponse,
  IndexesDelete204Response,
  IndexesDelete404Response,
  IndexesDeleteDefaultResponse,
  IndexesGet200Response,
  IndexesGetDefaultResponse,
  IndexesGetStatistics200Response,
  IndexesGetStatisticsDefaultResponse,
  IndexesAnalyze200Response,
  IndexesAnalyzeDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /servicestats": ["200"],
  "PUT /datasources('{dataSourceName}')": ["200", "201"],
  "DELETE /datasources('{dataSourceName}')": ["204", "404"],
  "GET /datasources('{dataSourceName}')": ["200"],
  "GET /datasources": ["200"],
  "POST /datasources": ["201"],
  "POST /indexers('{indexerName}')/search.reset": ["204"],
  "POST /indexers('{indexerName}')/search.run": ["202"],
  "PUT /indexers('{indexerName}')": ["200", "201"],
  "DELETE /indexers('{indexerName}')": ["204", "404"],
  "GET /indexers('{indexerName}')": ["200"],
  "GET /indexers": ["200"],
  "POST /indexers": ["201"],
  "GET /indexers('{indexerName}')/search.status": ["200"],
  "PUT /skillsets('{skillsetName}')": ["200", "201"],
  "DELETE /skillsets('{skillsetName}')": ["204", "404"],
  "GET /skillsets('{skillsetName}')": ["200"],
  "GET /skillsets": ["200"],
  "POST /skillsets": ["201"],
  "PUT /synonymmaps('{synonymMapName}')": ["200", "201"],
  "DELETE /synonymmaps('{synonymMapName}')": ["204", "404"],
  "GET /synonymmaps('{synonymMapName}')": ["200"],
  "GET /synonymmaps": ["200"],
  "POST /synonymmaps": ["201"],
  "POST /indexes": ["201"],
  "GET /indexes": ["200"],
  "PUT /indexes('{indexName}')": ["200", "201"],
  "DELETE /indexes('{indexName}')": ["204", "404"],
  "GET /indexes('{indexName}')": ["200"],
  "GET /indexes('{indexName}')/search.stats": ["200"],
  "POST /indexes('{indexName}')/search.analyze": ["200"],
};

export function isUnexpected(
  response: GetServiceStatistics200Response | GetServiceStatisticsDefaultResponse,
): response is GetServiceStatisticsDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesCreateOrUpdate200Response
    | DataSourcesCreateOrUpdate201Response
    | DataSourcesCreateOrUpdateDefaultResponse,
): response is DataSourcesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | DataSourcesDelete204Response
    | DataSourcesDelete404Response
    | DataSourcesDeleteDefaultResponse,
): response is DataSourcesDeleteDefaultResponse;
export function isUnexpected(
  response: DataSourcesGet200Response | DataSourcesGetDefaultResponse,
): response is DataSourcesGetDefaultResponse;
export function isUnexpected(
  response: DataSourcesList200Response | DataSourcesListDefaultResponse,
): response is DataSourcesListDefaultResponse;
export function isUnexpected(
  response: DataSourcesCreate201Response | DataSourcesCreateDefaultResponse,
): response is DataSourcesCreateDefaultResponse;
export function isUnexpected(
  response: IndexersReset204Response | IndexersResetDefaultResponse,
): response is IndexersResetDefaultResponse;
export function isUnexpected(
  response: IndexersRun202Response | IndexersRunDefaultResponse,
): response is IndexersRunDefaultResponse;
export function isUnexpected(
  response:
    | IndexersCreateOrUpdate200Response
    | IndexersCreateOrUpdate201Response
    | IndexersCreateOrUpdateDefaultResponse,
): response is IndexersCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: IndexersDelete204Response | IndexersDelete404Response | IndexersDeleteDefaultResponse,
): response is IndexersDeleteDefaultResponse;
export function isUnexpected(
  response: IndexersGet200Response | IndexersGetDefaultResponse,
): response is IndexersGetDefaultResponse;
export function isUnexpected(
  response: IndexersList200Response | IndexersListDefaultResponse,
): response is IndexersListDefaultResponse;
export function isUnexpected(
  response: IndexersCreate201Response | IndexersCreateDefaultResponse,
): response is IndexersCreateDefaultResponse;
export function isUnexpected(
  response: IndexersGetStatus200Response | IndexersGetStatusDefaultResponse,
): response is IndexersGetStatusDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsCreateOrUpdate200Response
    | SkillsetsCreateOrUpdate201Response
    | SkillsetsCreateOrUpdateDefaultResponse,
): response is SkillsetsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SkillsetsDelete204Response
    | SkillsetsDelete404Response
    | SkillsetsDeleteDefaultResponse,
): response is SkillsetsDeleteDefaultResponse;
export function isUnexpected(
  response: SkillsetsGet200Response | SkillsetsGetDefaultResponse,
): response is SkillsetsGetDefaultResponse;
export function isUnexpected(
  response: SkillsetsList200Response | SkillsetsListDefaultResponse,
): response is SkillsetsListDefaultResponse;
export function isUnexpected(
  response: SkillsetsCreate201Response | SkillsetsCreateDefaultResponse,
): response is SkillsetsCreateDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsCreateOrUpdate200Response
    | SynonymMapsCreateOrUpdate201Response
    | SynonymMapsCreateOrUpdateDefaultResponse,
): response is SynonymMapsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response:
    | SynonymMapsDelete204Response
    | SynonymMapsDelete404Response
    | SynonymMapsDeleteDefaultResponse,
): response is SynonymMapsDeleteDefaultResponse;
export function isUnexpected(
  response: SynonymMapsGet200Response | SynonymMapsGetDefaultResponse,
): response is SynonymMapsGetDefaultResponse;
export function isUnexpected(
  response: SynonymMapsList200Response | SynonymMapsListDefaultResponse,
): response is SynonymMapsListDefaultResponse;
export function isUnexpected(
  response: SynonymMapsCreate201Response | SynonymMapsCreateDefaultResponse,
): response is SynonymMapsCreateDefaultResponse;
export function isUnexpected(
  response: IndexesCreate201Response | IndexesCreateDefaultResponse,
): response is IndexesCreateDefaultResponse;
export function isUnexpected(
  response: IndexesList200Response | IndexesListDefaultResponse,
): response is IndexesListDefaultResponse;
export function isUnexpected(
  response:
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse,
): response is IndexesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: IndexesDelete204Response | IndexesDelete404Response | IndexesDeleteDefaultResponse,
): response is IndexesDeleteDefaultResponse;
export function isUnexpected(
  response: IndexesGet200Response | IndexesGetDefaultResponse,
): response is IndexesGetDefaultResponse;
export function isUnexpected(
  response: IndexesGetStatistics200Response | IndexesGetStatisticsDefaultResponse,
): response is IndexesGetStatisticsDefaultResponse;
export function isUnexpected(
  response: IndexesAnalyze200Response | IndexesAnalyzeDefaultResponse,
): response is IndexesAnalyzeDefaultResponse;
export function isUnexpected(
  response:
    | GetServiceStatistics200Response
    | GetServiceStatisticsDefaultResponse
    | DataSourcesCreateOrUpdate200Response
    | DataSourcesCreateOrUpdate201Response
    | DataSourcesCreateOrUpdateDefaultResponse
    | DataSourcesDelete204Response
    | DataSourcesDelete404Response
    | DataSourcesDeleteDefaultResponse
    | DataSourcesGet200Response
    | DataSourcesGetDefaultResponse
    | DataSourcesList200Response
    | DataSourcesListDefaultResponse
    | DataSourcesCreate201Response
    | DataSourcesCreateDefaultResponse
    | IndexersReset204Response
    | IndexersResetDefaultResponse
    | IndexersRun202Response
    | IndexersRunDefaultResponse
    | IndexersCreateOrUpdate200Response
    | IndexersCreateOrUpdate201Response
    | IndexersCreateOrUpdateDefaultResponse
    | IndexersDelete204Response
    | IndexersDelete404Response
    | IndexersDeleteDefaultResponse
    | IndexersGet200Response
    | IndexersGetDefaultResponse
    | IndexersList200Response
    | IndexersListDefaultResponse
    | IndexersCreate201Response
    | IndexersCreateDefaultResponse
    | IndexersGetStatus200Response
    | IndexersGetStatusDefaultResponse
    | SkillsetsCreateOrUpdate200Response
    | SkillsetsCreateOrUpdate201Response
    | SkillsetsCreateOrUpdateDefaultResponse
    | SkillsetsDelete204Response
    | SkillsetsDelete404Response
    | SkillsetsDeleteDefaultResponse
    | SkillsetsGet200Response
    | SkillsetsGetDefaultResponse
    | SkillsetsList200Response
    | SkillsetsListDefaultResponse
    | SkillsetsCreate201Response
    | SkillsetsCreateDefaultResponse
    | SynonymMapsCreateOrUpdate200Response
    | SynonymMapsCreateOrUpdate201Response
    | SynonymMapsCreateOrUpdateDefaultResponse
    | SynonymMapsDelete204Response
    | SynonymMapsDelete404Response
    | SynonymMapsDeleteDefaultResponse
    | SynonymMapsGet200Response
    | SynonymMapsGetDefaultResponse
    | SynonymMapsList200Response
    | SynonymMapsListDefaultResponse
    | SynonymMapsCreate201Response
    | SynonymMapsCreateDefaultResponse
    | IndexesCreate201Response
    | IndexesCreateDefaultResponse
    | IndexesList200Response
    | IndexesListDefaultResponse
    | IndexesCreateOrUpdate200Response
    | IndexesCreateOrUpdate201Response
    | IndexesCreateOrUpdateDefaultResponse
    | IndexesDelete204Response
    | IndexesDelete404Response
    | IndexesDeleteDefaultResponse
    | IndexesGet200Response
    | IndexesGetDefaultResponse
    | IndexesGetStatistics200Response
    | IndexesGetStatisticsDefaultResponse
    | IndexesAnalyze200Response
    | IndexesAnalyzeDefaultResponse,
): response is
  | GetServiceStatisticsDefaultResponse
  | DataSourcesCreateOrUpdateDefaultResponse
  | DataSourcesDeleteDefaultResponse
  | DataSourcesGetDefaultResponse
  | DataSourcesListDefaultResponse
  | DataSourcesCreateDefaultResponse
  | IndexersResetDefaultResponse
  | IndexersRunDefaultResponse
  | IndexersCreateOrUpdateDefaultResponse
  | IndexersDeleteDefaultResponse
  | IndexersGetDefaultResponse
  | IndexersListDefaultResponse
  | IndexersCreateDefaultResponse
  | IndexersGetStatusDefaultResponse
  | SkillsetsCreateOrUpdateDefaultResponse
  | SkillsetsDeleteDefaultResponse
  | SkillsetsGetDefaultResponse
  | SkillsetsListDefaultResponse
  | SkillsetsCreateDefaultResponse
  | SynonymMapsCreateOrUpdateDefaultResponse
  | SynonymMapsDeleteDefaultResponse
  | SynonymMapsGetDefaultResponse
  | SynonymMapsListDefaultResponse
  | SynonymMapsCreateDefaultResponse
  | IndexesCreateDefaultResponse
  | IndexesListDefaultResponse
  | IndexesCreateOrUpdateDefaultResponse
  | IndexesDeleteDefaultResponse
  | IndexesGetDefaultResponse
  | IndexesGetStatisticsDefaultResponse
  | IndexesAnalyzeDefaultResponse {
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
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

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
