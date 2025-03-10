// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  CatalogsOperationsListParameters,
  CatalogsOperationsGetParameters,
  CatalogsOperationsCreateOrUpdateParameters,
  CatalogsOperationsDeleteParameters,
  CollectionsOperationsListParameters,
  CollectionsOperationsGetParameters,
  CollectionsOperationsCreateOrUpdateParameters,
  CollectionsOperationsDeleteParameters,
  FileOperationsDeleteParameters,
  FileOperationsDownloadParameters,
  FileOperationsUploadParameters,
  ItemsOperationsCreateParameters,
  ItemsOperationsGetParameters,
  ItemsOperationsCreateOrUpdateParameters,
  ItemsOperationsDeleteParameters,
  ItemsOperationsGetAllUnderCollectionParameters,
  ItemsOperationsSearchAcrossCollectionParameters,
  SatelliteOperationsFetchItemsParameters,
  SatelliteOperationsSearchItemsParameters,
  SchemasOperationsListParameters,
  SchemasOperationsGetParameters,
  SchemasOperationsCreateOrUpdateParameters,
  SchemasOperationsDeleteParameters,
  SolutionsOperationsCancelJobParameters,
  SolutionsOperationsCreateJobParameters,
  SolutionsOperationsGetDataParameters,
  SolutionsOperationsGetJobParameters,
  WeatherOperationsGetParameters,
} from "./parameters.js";
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
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface CatalogsOperationsList {
  /** Returns a paginated list of Catalog resources. */
  get(
    options?: CatalogsOperationsListParameters,
  ): StreamableMethod<CatalogsOperationsList200Response | CatalogsOperationsListDefaultResponse>;
}

export interface CatalogsOperationsGet {
  /** Gets a specified Catalog resource. */
  get(
    options?: CatalogsOperationsGetParameters,
  ): StreamableMethod<CatalogsOperationsGet200Response | CatalogsOperationsGetDefaultResponse>;
  /** Creates or updates a Catalog resource. */
  patch(
    options: CatalogsOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CatalogsOperationsCreateOrUpdate200Response
    | CatalogsOperationsCreateOrUpdate201Response
    | CatalogsOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes Catalog for given Catalog id. */
  delete(
    options?: CatalogsOperationsDeleteParameters,
  ): StreamableMethod<
    CatalogsOperationsDelete204Response | CatalogsOperationsDeleteDefaultResponse
  >;
}

export interface CollectionsOperationsList {
  /** Returns a paginated list of Collection resources. */
  get(
    options?: CollectionsOperationsListParameters,
  ): StreamableMethod<
    CollectionsOperationsList200Response | CollectionsOperationsListDefaultResponse
  >;
}

export interface CollectionsOperationsGet {
  /** Gets a specified Collection resource. */
  get(
    options?: CollectionsOperationsGetParameters,
  ): StreamableMethod<
    CollectionsOperationsGet200Response | CollectionsOperationsGetDefaultResponse
  >;
  /** Creates or updates a Collection resource. */
  patch(
    options: CollectionsOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CollectionsOperationsCreateOrUpdate200Response
    | CollectionsOperationsCreateOrUpdate201Response
    | CollectionsOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes Collection for given Collection id. */
  delete(
    options?: CollectionsOperationsDeleteParameters,
  ): StreamableMethod<
    CollectionsOperationsDelete204Response | CollectionsOperationsDeleteDefaultResponse
  >;
}

export interface FileOperationsDelete {
  /** Deletes file. */
  post(
    options: FileOperationsDeleteParameters,
  ): StreamableMethod<FileOperationsDelete204Response | FileOperationsDeleteDefaultResponse>;
}

export interface FileOperationsDownload {
  /** Downloads and returns file Stream as response for the given input filePath. */
  post(
    options: FileOperationsDownloadParameters,
  ): StreamableMethod<FileOperationsDownload200Response | FileOperationsDownloadDefaultResponse>;
}

export interface FileOperationsUpload {
  /** Uploads a file. */
  post(
    options?: FileOperationsUploadParameters,
  ): StreamableMethod<FileOperationsUpload200Response | FileOperationsUploadDefaultResponse>;
}

export interface ItemsOperationsCreate {
  /** Creates or updates a Item resource. */
  post(
    options: ItemsOperationsCreateParameters,
  ): StreamableMethod<
    | ItemsOperationsCreate200Response
    | ItemsOperationsCreate201Response
    | ItemsOperationsCreateDefaultResponse
  >;
}

export interface ItemsOperationsGet {
  /** Gets a specified Item resource. */
  get(
    options?: ItemsOperationsGetParameters,
  ): StreamableMethod<ItemsOperationsGet200Response | ItemsOperationsGetDefaultResponse>;
  /** Creates or updates a Item resource. */
  patch(
    options: ItemsOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | ItemsOperationsCreateOrUpdate200Response
    | ItemsOperationsCreateOrUpdate201Response
    | ItemsOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes Item for given Item id. */
  delete(
    options?: ItemsOperationsDeleteParameters,
  ): StreamableMethod<ItemsOperationsDelete204Response | ItemsOperationsDeleteDefaultResponse>;
}

export interface ItemsOperationsGetAllUnderCollection {
  /** Search for Items across all parties by intersecting geometry. */
  post(
    options: ItemsOperationsGetAllUnderCollectionParameters,
  ): StreamableMethod<
    | ItemsOperationsGetAllUnderCollection200Response
    | ItemsOperationsGetAllUnderCollectionDefaultResponse
  >;
}

export interface ItemsOperationsSearchAcrossCollection {
  /** Search for Items across all collections. */
  post(
    options: ItemsOperationsSearchAcrossCollectionParameters,
  ): StreamableMethod<
    | ItemsOperationsSearchAcrossCollection200Response
    | ItemsOperationsSearchAcrossCollectionDefaultResponse
  >;
}

export interface SatelliteOperationsFetchItems {
  /** Fetches Satellite data. */
  post(
    options: SatelliteOperationsFetchItemsParameters,
  ): StreamableMethod<
    SatelliteOperationsFetchItems200Response | SatelliteOperationsFetchItemsDefaultResponse
  >;
}

export interface SatelliteOperationsSearchItems {
  /**
   * Searches for STAC items by collection id, bbox, intersecting geometry, start
   * and end datetime.
   */
  post(
    options: SatelliteOperationsSearchItemsParameters,
  ): StreamableMethod<
    SatelliteOperationsSearchItems200Response | SatelliteOperationsSearchItemsDefaultResponse
  >;
}

export interface SchemasOperationsList {
  /** Returns a paginated list of Schema resources. */
  get(
    options?: SchemasOperationsListParameters,
  ): StreamableMethod<SchemasOperationsList200Response | SchemasOperationsListDefaultResponse>;
}

export interface SchemasOperationsGet {
  /** Gets a specified Schema resource. */
  get(
    options?: SchemasOperationsGetParameters,
  ): StreamableMethod<SchemasOperationsGet200Response | SchemasOperationsGetDefaultResponse>;
  /** Creates or updates a Schema resource. */
  patch(
    options: SchemasOperationsCreateOrUpdateParameters,
  ): StreamableMethod<
    | SchemasOperationsCreateOrUpdate200Response
    | SchemasOperationsCreateOrUpdate201Response
    | SchemasOperationsCreateOrUpdateDefaultResponse
  >;
  /** Deletes Schema for given Schema id. */
  delete(
    options?: SchemasOperationsDeleteParameters,
  ): StreamableMethod<SchemasOperationsDelete204Response | SchemasOperationsDeleteDefaultResponse>;
}

export interface SolutionsOperationsCancelJob {
  /** Cancel Solution job Async. */
  post(
    options: SolutionsOperationsCancelJobParameters,
  ): StreamableMethod<
    SolutionsOperationsCancelJob200Response | SolutionsOperationsCancelJobDefaultResponse
  >;
}

export interface SolutionsOperationsCreateJob {
  /** Creates solution job async. */
  post(
    options: SolutionsOperationsCreateJobParameters,
  ): StreamableMethod<
    SolutionsOperationsCreateJob202Response | SolutionsOperationsCreateJobDefaultResponse
  >;
}

export interface SolutionsOperationsGetData {
  /** Gets solution Data async. */
  post(
    options: SolutionsOperationsGetDataParameters,
  ): StreamableMethod<
    SolutionsOperationsGetData200Response | SolutionsOperationsGetDataDefaultResponse
  >;
}

export interface SolutionsOperationsGetJob {
  /** Gets Solution get job response async. */
  post(
    options: SolutionsOperationsGetJobParameters,
  ): StreamableMethod<
    SolutionsOperationsGetJob200Response | SolutionsOperationsGetJobDefaultResponse
  >;
}

export interface WeatherOperationsGet {
  /** Returns a list of WeatherData. */
  post(
    options: WeatherOperationsGetParameters,
  ): StreamableMethod<WeatherOperationsGet200Response | WeatherOperationsGetDefaultResponse>;
}

export interface Routes {
  /** Resource for '/catalogs' has methods for the following verbs: get */
  (path: "/catalogs"): CatalogsOperationsList;
  /** Resource for '/catalogs/\{catalogId\}' has methods for the following verbs: get, patch, delete */
  (path: "/catalogs/{catalogId}", catalogId: string): CatalogsOperationsGet;
  /** Resource for '/catalogs/\{catalogId\}/collections' has methods for the following verbs: get */
  (path: "/catalogs/{catalogId}/collections", catalogId: string): CollectionsOperationsList;
  /** Resource for '/catalogs/\{catalogId\}/collections/\{collectionId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/catalogs/{catalogId}/collections/{collectionId}",
    catalogId: string,
    collectionId: string,
  ): CollectionsOperationsGet;
  /** Resource for '/file:delete' has methods for the following verbs: post */
  (path: "/file:delete"): FileOperationsDelete;
  /** Resource for '/file:download' has methods for the following verbs: post */
  (path: "/file:download"): FileOperationsDownload;
  /** Resource for '/file:upload' has methods for the following verbs: post */
  (path: "/file:upload"): FileOperationsUpload;
  /** Resource for '/catalogs/\{catalogId\}/collections/\{collectionId\}/items:create' has methods for the following verbs: post */
  (
    path: "/catalogs/{catalogId}/collections/{collectionId}/items:create",
    catalogId: string,
    collectionId: string,
  ): ItemsOperationsCreate;
  /** Resource for '/catalogs/\{catalogId\}/collections/\{collectionId\}/items/\{itemId\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/catalogs/{catalogId}/collections/{collectionId}/items/{itemId}",
    catalogId: string,
    collectionId: string,
    itemId: string,
  ): ItemsOperationsGet;
  /** Resource for '/catalogs/\{catalogId\}/collections/\{collectionId\}/items:search' has methods for the following verbs: post */
  (
    path: "/catalogs/{catalogId}/collections/{collectionId}/items:search",
    catalogId: string,
    collectionId: string,
  ): ItemsOperationsGetAllUnderCollection;
  /** Resource for '/catalogs/\{catalogId\}/items:search' has methods for the following verbs: post */
  (
    path: "/catalogs/{catalogId}/items:search",
    catalogId: string,
  ): ItemsOperationsSearchAcrossCollection;
  /** Resource for '/external/satellite:fetch' has methods for the following verbs: post */
  (path: "/external/satellite:fetch"): SatelliteOperationsFetchItems;
  /** Resource for '/external/satellite:stac' has methods for the following verbs: post */
  (path: "/external/satellite:stac"): SatelliteOperationsSearchItems;
  /** Resource for '/schemas' has methods for the following verbs: get */
  (path: "/schemas"): SchemasOperationsList;
  /** Resource for '/schemas/\{schemaId\}' has methods for the following verbs: get, patch, delete */
  (path: "/schemas/{schemaId}", schemaId: string): SchemasOperationsGet;
  /** Resource for '/external/solutions:cancel-job' has methods for the following verbs: post */
  (path: "/external/solutions:cancel-job"): SolutionsOperationsCancelJob;
  /** Resource for '/external/solutions:create-job' has methods for the following verbs: post */
  (path: "/external/solutions:create-job"): SolutionsOperationsCreateJob;
  /** Resource for '/external/solutions:get-data' has methods for the following verbs: post */
  (path: "/external/solutions:get-data"): SolutionsOperationsGetData;
  /** Resource for '/external/solutions:get-job' has methods for the following verbs: post */
  (path: "/external/solutions:get-job"): SolutionsOperationsGetJob;
  /** Resource for '/external/weather:fetch' has methods for the following verbs: post */
  (path: "/external/weather:fetch"): WeatherOperationsGet;
}

export type AgriculturePlatformClient = Client & {
  path: Routes;
};
