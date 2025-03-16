// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type {
  PagedCatalogOutput,
  ErrorResponseOutput,
  CatalogOutput,
  PagedCollectionOutput,
  CollectionOutput,
  FileModelOutput,
  ItemResponseOutput,
  ItemOutput,
  ItemListResponseOutput,
  SatelliteFetchResponseOutput,
  SearchFeaturesResponseOutput,
  PagedSchemaOutput,
  SchemaOutput,
  SamplePartnerResponseOutput,
  WeatherResponseOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface CatalogsOperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedCatalogOutput;
}

export interface CatalogsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CatalogsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CatalogOutput;
}

export interface CatalogsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CatalogsOperationsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CatalogOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CatalogsOperationsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CatalogOutput;
}

export interface CatalogsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CatalogsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CatalogsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsOperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedCollectionOutput;
}

export interface CollectionsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CollectionOutput;
}

export interface CollectionsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CollectionsOperationsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CollectionOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CollectionsOperationsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CollectionOutput;
}

export interface CollectionsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface FileOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FileOperationsDownload200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface FileOperationsDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface FileOperationsUpload200Response extends HttpResponse {
  status: "200";
  body: FileModelOutput;
}

export interface FileOperationsUploadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ItemsOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: ItemResponseOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ItemsOperationsCreate201Response extends HttpResponse {
  status: "201";
  body: ItemResponseOutput;
}

export interface ItemsOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ItemsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ItemOutput;
}

export interface ItemsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ItemsOperationsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: ItemOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface ItemsOperationsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: ItemOutput;
}

export interface ItemsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ItemsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface ItemsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ItemsOperationsGetAllUnderCollection200Response extends HttpResponse {
  status: "200";
  body: ItemListResponseOutput;
}

export interface ItemsOperationsGetAllUnderCollectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ItemsOperationsSearchAcrossCollection200Response extends HttpResponse {
  status: "200";
  body: ItemListResponseOutput;
}

export interface ItemsOperationsSearchAcrossCollectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SatelliteOperationsFetchItems200Response extends HttpResponse {
  status: "200";
  body: SatelliteFetchResponseOutput;
}

export interface SatelliteOperationsFetchItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SatelliteOperationsSearchItems200Response extends HttpResponse {
  status: "200";
  body: SearchFeaturesResponseOutput;
}

export interface SatelliteOperationsSearchItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SchemasOperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedSchemaOutput;
}

export interface SchemasOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SchemasOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SchemaOutput;
}

export interface SchemasOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SchemasOperationsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: SchemaOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SchemasOperationsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: SchemaOutput;
}

export interface SchemasOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SchemasOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface SchemasOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SolutionsOperationsCancelJob200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsCancelJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SolutionsOperationsCreateJob202Response extends HttpResponse {
  status: "202";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsCreateJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SolutionsOperationsGetData200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsGetDataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SolutionsOperationsGetJob200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsGetJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface WeatherOperationsGet200Response extends HttpResponse {
  status: "200";
  body: WeatherResponseOutput;
}

export interface WeatherOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
