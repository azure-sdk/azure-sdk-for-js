// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetServiceStatistics200Response,
  GetServiceStatisticsDefaultResponse,
  GetIndexStatsSummary200Response,
  GetIndexStatsSummaryDefaultResponse,
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
  IndexersResetDocs204Response,
  IndexersResetDocsDefaultResponse,
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
  SkillsetsResetSkills204Response,
  SkillsetsResetSkillsDefaultResponse,
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
  AliasesCreate201Response,
  AliasesCreateDefaultResponse,
  AliasesList200Response,
  AliasesListDefaultResponse,
  AliasesCreateOrUpdate200Response,
  AliasesCreateOrUpdate201Response,
  AliasesCreateOrUpdateDefaultResponse,
  AliasesDelete204Response,
  AliasesDelete404Response,
  AliasesDeleteDefaultResponse,
  AliasesGet200Response,
  AliasesGetDefaultResponse,
  DocumentsCount200Response,
  DocumentsCountDefaultResponse,
  DocumentsSearchGet200Response,
  DocumentsSearchGetDefaultResponse,
  DocumentsSearchPost200Response,
  DocumentsSearchPostDefaultResponse,
  DocumentsGet200Response,
  DocumentsGetDefaultResponse,
  DocumentsSuggestGet200Response,
  DocumentsSuggestGetDefaultResponse,
  DocumentsSuggestPost200Response,
  DocumentsSuggestPostDefaultResponse,
  DocumentsIndex200Response,
  DocumentsIndex207Response,
  DocumentsIndexDefaultResponse,
  DocumentsAutocompleteGet200Response,
  DocumentsAutocompleteGetDefaultResponse,
  DocumentsAutocompletePost200Response,
  DocumentsAutocompletePostDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /servicestats": ["200"],
  "GET /indexstats": ["200"],
  "PUT /datasources('{dataSourceName}')": ["200", "201"],
  "DELETE /datasources('{dataSourceName}')": ["204", "404"],
  "GET /datasources('{dataSourceName}')": ["200"],
  "GET /datasources": ["200"],
  "POST /datasources": ["201"],
  "POST /indexers('{indexerName}')/search.reset": ["204"],
  "POST /indexers('{indexerName}')/search.resetdocs": ["204"],
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
  "POST /skillsets('{skillsetName}')/search.resetskills": ["204"],
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
  "POST /aliases": ["201"],
  "GET /aliases": ["200"],
  "PUT /aliases('{aliasName}')": ["200", "201"],
  "DELETE /aliases('{aliasName}')": ["204", "404"],
  "GET /aliases('{aliasName}')": ["200"],
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
  response: GetServiceStatistics200Response | GetServiceStatisticsDefaultResponse,
): response is GetServiceStatisticsDefaultResponse;
export function isUnexpected(
  response: GetIndexStatsSummary200Response | GetIndexStatsSummaryDefaultResponse,
): response is GetIndexStatsSummaryDefaultResponse;
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
  response: IndexersResetDocs204Response | IndexersResetDocsDefaultResponse,
): response is IndexersResetDocsDefaultResponse;
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
  response: SkillsetsResetSkills204Response | SkillsetsResetSkillsDefaultResponse,
): response is SkillsetsResetSkillsDefaultResponse;
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
  response: AliasesCreate201Response | AliasesCreateDefaultResponse,
): response is AliasesCreateDefaultResponse;
export function isUnexpected(
  response: AliasesList200Response | AliasesListDefaultResponse,
): response is AliasesListDefaultResponse;
export function isUnexpected(
  response:
    | AliasesCreateOrUpdate200Response
    | AliasesCreateOrUpdate201Response
    | AliasesCreateOrUpdateDefaultResponse,
): response is AliasesCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: AliasesDelete204Response | AliasesDelete404Response | AliasesDeleteDefaultResponse,
): response is AliasesDeleteDefaultResponse;
export function isUnexpected(
  response: AliasesGet200Response | AliasesGetDefaultResponse,
): response is AliasesGetDefaultResponse;
export function isUnexpected(
  response: DocumentsCount200Response | DocumentsCountDefaultResponse,
): response is DocumentsCountDefaultResponse;
export function isUnexpected(
  response: DocumentsSearchGet200Response | DocumentsSearchGetDefaultResponse,
): response is DocumentsSearchGetDefaultResponse;
export function isUnexpected(
  response: DocumentsSearchPost200Response | DocumentsSearchPostDefaultResponse,
): response is DocumentsSearchPostDefaultResponse;
export function isUnexpected(
  response: DocumentsGet200Response | DocumentsGetDefaultResponse,
): response is DocumentsGetDefaultResponse;
export function isUnexpected(
  response: DocumentsSuggestGet200Response | DocumentsSuggestGetDefaultResponse,
): response is DocumentsSuggestGetDefaultResponse;
export function isUnexpected(
  response: DocumentsSuggestPost200Response | DocumentsSuggestPostDefaultResponse,
): response is DocumentsSuggestPostDefaultResponse;
export function isUnexpected(
  response: DocumentsIndex200Response | DocumentsIndex207Response | DocumentsIndexDefaultResponse,
): response is DocumentsIndexDefaultResponse;
export function isUnexpected(
  response: DocumentsAutocompleteGet200Response | DocumentsAutocompleteGetDefaultResponse,
): response is DocumentsAutocompleteGetDefaultResponse;
export function isUnexpected(
  response: DocumentsAutocompletePost200Response | DocumentsAutocompletePostDefaultResponse,
): response is DocumentsAutocompletePostDefaultResponse;
export function isUnexpected(
  response:
    | GetServiceStatistics200Response
    | GetServiceStatisticsDefaultResponse
    | GetIndexStatsSummary200Response
    | GetIndexStatsSummaryDefaultResponse
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
    | IndexersResetDocs204Response
    | IndexersResetDocsDefaultResponse
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
    | SkillsetsResetSkills204Response
    | SkillsetsResetSkillsDefaultResponse
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
    | IndexesAnalyzeDefaultResponse
    | AliasesCreate201Response
    | AliasesCreateDefaultResponse
    | AliasesList200Response
    | AliasesListDefaultResponse
    | AliasesCreateOrUpdate200Response
    | AliasesCreateOrUpdate201Response
    | AliasesCreateOrUpdateDefaultResponse
    | AliasesDelete204Response
    | AliasesDelete404Response
    | AliasesDeleteDefaultResponse
    | AliasesGet200Response
    | AliasesGetDefaultResponse
    | DocumentsCount200Response
    | DocumentsCountDefaultResponse
    | DocumentsSearchGet200Response
    | DocumentsSearchGetDefaultResponse
    | DocumentsSearchPost200Response
    | DocumentsSearchPostDefaultResponse
    | DocumentsGet200Response
    | DocumentsGetDefaultResponse
    | DocumentsSuggestGet200Response
    | DocumentsSuggestGetDefaultResponse
    | DocumentsSuggestPost200Response
    | DocumentsSuggestPostDefaultResponse
    | DocumentsIndex200Response
    | DocumentsIndex207Response
    | DocumentsIndexDefaultResponse
    | DocumentsAutocompleteGet200Response
    | DocumentsAutocompleteGetDefaultResponse
    | DocumentsAutocompletePost200Response
    | DocumentsAutocompletePostDefaultResponse,
): response is
  | GetServiceStatisticsDefaultResponse
  | GetIndexStatsSummaryDefaultResponse
  | DataSourcesCreateOrUpdateDefaultResponse
  | DataSourcesDeleteDefaultResponse
  | DataSourcesGetDefaultResponse
  | DataSourcesListDefaultResponse
  | DataSourcesCreateDefaultResponse
  | IndexersResetDefaultResponse
  | IndexersResetDocsDefaultResponse
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
  | SkillsetsResetSkillsDefaultResponse
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
  | IndexesAnalyzeDefaultResponse
  | AliasesCreateDefaultResponse
  | AliasesListDefaultResponse
  | AliasesCreateOrUpdateDefaultResponse
  | AliasesDeleteDefaultResponse
  | AliasesGetDefaultResponse
  | DocumentsCountDefaultResponse
  | DocumentsSearchGetDefaultResponse
  | DocumentsSearchPostDefaultResponse
  | DocumentsGetDefaultResponse
  | DocumentsSuggestGetDefaultResponse
  | DocumentsSuggestPostDefaultResponse
  | DocumentsIndexDefaultResponse
  | DocumentsAutocompleteGetDefaultResponse
  | DocumentsAutocompletePostDefaultResponse {
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
