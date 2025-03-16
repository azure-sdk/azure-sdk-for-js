// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  CatalogsOperationsList200Response,
  CatalogsOperationsListDefaultResponse,
  CatalogsOperationsGet200Response,
  CatalogsOperationsGetDefaultResponse,
  CatalogsOperationsCreateOrUpdate200Response,
  CatalogsOperationsCreateOrUpdate201Response,
  CatalogsOperationsCreateOrUpdateDefaultResponse,
  CatalogsOperationsDelete204Response,
  CatalogsOperationsDeleteDefaultResponse,
  CollectionsOperationsList200Response,
  CollectionsOperationsListDefaultResponse,
  CollectionsOperationsGet200Response,
  CollectionsOperationsGetDefaultResponse,
  CollectionsOperationsCreateOrUpdate200Response,
  CollectionsOperationsCreateOrUpdate201Response,
  CollectionsOperationsCreateOrUpdateDefaultResponse,
  CollectionsOperationsDelete204Response,
  CollectionsOperationsDeleteDefaultResponse,
  FileOperationsDelete204Response,
  FileOperationsDeleteDefaultResponse,
  FileOperationsDownload200Response,
  FileOperationsDownloadDefaultResponse,
  FileOperationsUpload200Response,
  FileOperationsUploadDefaultResponse,
  ItemsOperationsCreate200Response,
  ItemsOperationsCreate201Response,
  ItemsOperationsCreateDefaultResponse,
  ItemsOperationsGet200Response,
  ItemsOperationsGetDefaultResponse,
  ItemsOperationsCreateOrUpdate200Response,
  ItemsOperationsCreateOrUpdate201Response,
  ItemsOperationsCreateOrUpdateDefaultResponse,
  ItemsOperationsDelete204Response,
  ItemsOperationsDeleteDefaultResponse,
  ItemsOperationsGetAllUnderCollection200Response,
  ItemsOperationsGetAllUnderCollectionDefaultResponse,
  ItemsOperationsSearchAcrossCollection200Response,
  ItemsOperationsSearchAcrossCollectionDefaultResponse,
  SatelliteOperationsFetchItems200Response,
  SatelliteOperationsFetchItemsDefaultResponse,
  SatelliteOperationsSearchItems200Response,
  SatelliteOperationsSearchItemsDefaultResponse,
  SchemasOperationsList200Response,
  SchemasOperationsListDefaultResponse,
  SchemasOperationsGet200Response,
  SchemasOperationsGetDefaultResponse,
  SchemasOperationsCreateOrUpdate200Response,
  SchemasOperationsCreateOrUpdate201Response,
  SchemasOperationsCreateOrUpdateDefaultResponse,
  SchemasOperationsDelete204Response,
  SchemasOperationsDeleteDefaultResponse,
  SolutionsOperationsCancelJob200Response,
  SolutionsOperationsCancelJobDefaultResponse,
  SolutionsOperationsCreateJob202Response,
  SolutionsOperationsCreateJobDefaultResponse,
  SolutionsOperationsGetData200Response,
  SolutionsOperationsGetDataDefaultResponse,
  SolutionsOperationsGetJob200Response,
  SolutionsOperationsGetJobDefaultResponse,
  WeatherOperationsGet200Response,
  WeatherOperationsGetDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "GET /catalogs": ["200"],
  "GET /catalogs/{catalogId}": ["200"],
  "PATCH /catalogs/{catalogId}": ["200", "201"],
  "DELETE /catalogs/{catalogId}": ["204"],
  "GET /catalogs/{catalogId}/collections": ["200"],
  "GET /catalogs/{catalogId}/collections/{collectionId}": ["200"],
  "PATCH /catalogs/{catalogId}/collections/{collectionId}": ["200", "201"],
  "DELETE /catalogs/{catalogId}/collections/{collectionId}": ["204"],
  "POST /file:delete": ["204"],
  "POST /file:download": ["200"],
  "POST /file:upload": ["200"],
  "POST /catalogs/{catalogId}/collections/{collectionId}/items:create": ["200", "201"],
  "GET /catalogs/{catalogId}/collections/{collectionId}/items/{itemId}": ["200"],
  "PATCH /catalogs/{catalogId}/collections/{collectionId}/items/{itemId}": ["200", "201"],
  "DELETE /catalogs/{catalogId}/collections/{collectionId}/items/{itemId}": ["204"],
  "POST /catalogs/{catalogId}/collections/{collectionId}/items:search": ["200"],
  "POST /catalogs/{catalogId}/items:search": ["200"],
  "POST /external/satellite:fetch": ["200"],
  "POST /external/satellite:stac": ["200"],
  "GET /schemas": ["200"],
  "GET /schemas/{schemaId}": ["200"],
  "PATCH /schemas/{schemaId}": ["200", "201"],
  "DELETE /schemas/{schemaId}": ["204"],
  "POST /external/solutions:cancel-job": ["200"],
  "POST /external/solutions:create-job": ["202"],
  "POST /external/solutions:get-data": ["200"],
  "POST /external/solutions:get-job": ["200"],
  "POST /external/weather:fetch": ["200"],
};

export function isUnexpected(
  response: CatalogsOperationsList200Response | CatalogsOperationsListDefaultResponse,
): response is CatalogsOperationsListDefaultResponse;
export function isUnexpected(
  response: CatalogsOperationsGet200Response | CatalogsOperationsGetDefaultResponse,
): response is CatalogsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsOperationsCreateOrUpdate200Response
    | CatalogsOperationsCreateOrUpdate201Response
    | CatalogsOperationsCreateOrUpdateDefaultResponse,
): response is CatalogsOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CatalogsOperationsDelete204Response | CatalogsOperationsDeleteDefaultResponse,
): response is CatalogsOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: CollectionsOperationsList200Response | CollectionsOperationsListDefaultResponse,
): response is CollectionsOperationsListDefaultResponse;
export function isUnexpected(
  response: CollectionsOperationsGet200Response | CollectionsOperationsGetDefaultResponse,
): response is CollectionsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | CollectionsOperationsCreateOrUpdate200Response
    | CollectionsOperationsCreateOrUpdate201Response
    | CollectionsOperationsCreateOrUpdateDefaultResponse,
): response is CollectionsOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: CollectionsOperationsDelete204Response | CollectionsOperationsDeleteDefaultResponse,
): response is CollectionsOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: FileOperationsDelete204Response | FileOperationsDeleteDefaultResponse,
): response is FileOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: FileOperationsDownload200Response | FileOperationsDownloadDefaultResponse,
): response is FileOperationsDownloadDefaultResponse;
export function isUnexpected(
  response: FileOperationsUpload200Response | FileOperationsUploadDefaultResponse,
): response is FileOperationsUploadDefaultResponse;
export function isUnexpected(
  response:
    | ItemsOperationsCreate200Response
    | ItemsOperationsCreate201Response
    | ItemsOperationsCreateDefaultResponse,
): response is ItemsOperationsCreateDefaultResponse;
export function isUnexpected(
  response: ItemsOperationsGet200Response | ItemsOperationsGetDefaultResponse,
): response is ItemsOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | ItemsOperationsCreateOrUpdate200Response
    | ItemsOperationsCreateOrUpdate201Response
    | ItemsOperationsCreateOrUpdateDefaultResponse,
): response is ItemsOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: ItemsOperationsDelete204Response | ItemsOperationsDeleteDefaultResponse,
): response is ItemsOperationsDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ItemsOperationsGetAllUnderCollection200Response
    | ItemsOperationsGetAllUnderCollectionDefaultResponse,
): response is ItemsOperationsGetAllUnderCollectionDefaultResponse;
export function isUnexpected(
  response:
    | ItemsOperationsSearchAcrossCollection200Response
    | ItemsOperationsSearchAcrossCollectionDefaultResponse,
): response is ItemsOperationsSearchAcrossCollectionDefaultResponse;
export function isUnexpected(
  response: SatelliteOperationsFetchItems200Response | SatelliteOperationsFetchItemsDefaultResponse,
): response is SatelliteOperationsFetchItemsDefaultResponse;
export function isUnexpected(
  response:
    | SatelliteOperationsSearchItems200Response
    | SatelliteOperationsSearchItemsDefaultResponse,
): response is SatelliteOperationsSearchItemsDefaultResponse;
export function isUnexpected(
  response: SchemasOperationsList200Response | SchemasOperationsListDefaultResponse,
): response is SchemasOperationsListDefaultResponse;
export function isUnexpected(
  response: SchemasOperationsGet200Response | SchemasOperationsGetDefaultResponse,
): response is SchemasOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | SchemasOperationsCreateOrUpdate200Response
    | SchemasOperationsCreateOrUpdate201Response
    | SchemasOperationsCreateOrUpdateDefaultResponse,
): response is SchemasOperationsCreateOrUpdateDefaultResponse;
export function isUnexpected(
  response: SchemasOperationsDelete204Response | SchemasOperationsDeleteDefaultResponse,
): response is SchemasOperationsDeleteDefaultResponse;
export function isUnexpected(
  response: SolutionsOperationsCancelJob200Response | SolutionsOperationsCancelJobDefaultResponse,
): response is SolutionsOperationsCancelJobDefaultResponse;
export function isUnexpected(
  response: SolutionsOperationsCreateJob202Response | SolutionsOperationsCreateJobDefaultResponse,
): response is SolutionsOperationsCreateJobDefaultResponse;
export function isUnexpected(
  response: SolutionsOperationsGetData200Response | SolutionsOperationsGetDataDefaultResponse,
): response is SolutionsOperationsGetDataDefaultResponse;
export function isUnexpected(
  response: SolutionsOperationsGetJob200Response | SolutionsOperationsGetJobDefaultResponse,
): response is SolutionsOperationsGetJobDefaultResponse;
export function isUnexpected(
  response: WeatherOperationsGet200Response | WeatherOperationsGetDefaultResponse,
): response is WeatherOperationsGetDefaultResponse;
export function isUnexpected(
  response:
    | CatalogsOperationsList200Response
    | CatalogsOperationsListDefaultResponse
    | CatalogsOperationsGet200Response
    | CatalogsOperationsGetDefaultResponse
    | CatalogsOperationsCreateOrUpdate200Response
    | CatalogsOperationsCreateOrUpdate201Response
    | CatalogsOperationsCreateOrUpdateDefaultResponse
    | CatalogsOperationsDelete204Response
    | CatalogsOperationsDeleteDefaultResponse
    | CollectionsOperationsList200Response
    | CollectionsOperationsListDefaultResponse
    | CollectionsOperationsGet200Response
    | CollectionsOperationsGetDefaultResponse
    | CollectionsOperationsCreateOrUpdate200Response
    | CollectionsOperationsCreateOrUpdate201Response
    | CollectionsOperationsCreateOrUpdateDefaultResponse
    | CollectionsOperationsDelete204Response
    | CollectionsOperationsDeleteDefaultResponse
    | FileOperationsDelete204Response
    | FileOperationsDeleteDefaultResponse
    | FileOperationsDownload200Response
    | FileOperationsDownloadDefaultResponse
    | FileOperationsUpload200Response
    | FileOperationsUploadDefaultResponse
    | ItemsOperationsCreate200Response
    | ItemsOperationsCreate201Response
    | ItemsOperationsCreateDefaultResponse
    | ItemsOperationsGet200Response
    | ItemsOperationsGetDefaultResponse
    | ItemsOperationsCreateOrUpdate200Response
    | ItemsOperationsCreateOrUpdate201Response
    | ItemsOperationsCreateOrUpdateDefaultResponse
    | ItemsOperationsDelete204Response
    | ItemsOperationsDeleteDefaultResponse
    | ItemsOperationsGetAllUnderCollection200Response
    | ItemsOperationsGetAllUnderCollectionDefaultResponse
    | ItemsOperationsSearchAcrossCollection200Response
    | ItemsOperationsSearchAcrossCollectionDefaultResponse
    | SatelliteOperationsFetchItems200Response
    | SatelliteOperationsFetchItemsDefaultResponse
    | SatelliteOperationsSearchItems200Response
    | SatelliteOperationsSearchItemsDefaultResponse
    | SchemasOperationsList200Response
    | SchemasOperationsListDefaultResponse
    | SchemasOperationsGet200Response
    | SchemasOperationsGetDefaultResponse
    | SchemasOperationsCreateOrUpdate200Response
    | SchemasOperationsCreateOrUpdate201Response
    | SchemasOperationsCreateOrUpdateDefaultResponse
    | SchemasOperationsDelete204Response
    | SchemasOperationsDeleteDefaultResponse
    | SolutionsOperationsCancelJob200Response
    | SolutionsOperationsCancelJobDefaultResponse
    | SolutionsOperationsCreateJob202Response
    | SolutionsOperationsCreateJobDefaultResponse
    | SolutionsOperationsGetData200Response
    | SolutionsOperationsGetDataDefaultResponse
    | SolutionsOperationsGetJob200Response
    | SolutionsOperationsGetJobDefaultResponse
    | WeatherOperationsGet200Response
    | WeatherOperationsGetDefaultResponse,
): response is
  | CatalogsOperationsListDefaultResponse
  | CatalogsOperationsGetDefaultResponse
  | CatalogsOperationsCreateOrUpdateDefaultResponse
  | CatalogsOperationsDeleteDefaultResponse
  | CollectionsOperationsListDefaultResponse
  | CollectionsOperationsGetDefaultResponse
  | CollectionsOperationsCreateOrUpdateDefaultResponse
  | CollectionsOperationsDeleteDefaultResponse
  | FileOperationsDeleteDefaultResponse
  | FileOperationsDownloadDefaultResponse
  | FileOperationsUploadDefaultResponse
  | ItemsOperationsCreateDefaultResponse
  | ItemsOperationsGetDefaultResponse
  | ItemsOperationsCreateOrUpdateDefaultResponse
  | ItemsOperationsDeleteDefaultResponse
  | ItemsOperationsGetAllUnderCollectionDefaultResponse
  | ItemsOperationsSearchAcrossCollectionDefaultResponse
  | SatelliteOperationsFetchItemsDefaultResponse
  | SatelliteOperationsSearchItemsDefaultResponse
  | SchemasOperationsListDefaultResponse
  | SchemasOperationsGetDefaultResponse
  | SchemasOperationsCreateOrUpdateDefaultResponse
  | SchemasOperationsDeleteDefaultResponse
  | SolutionsOperationsCancelJobDefaultResponse
  | SolutionsOperationsCreateJobDefaultResponse
  | SolutionsOperationsGetDataDefaultResponse
  | SolutionsOperationsGetJobDefaultResponse
  | WeatherOperationsGetDefaultResponse {
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
