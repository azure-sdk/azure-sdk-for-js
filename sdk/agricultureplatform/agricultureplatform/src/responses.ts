// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  PagedCatalogOutput,
  CatalogOutput,
  PagedCollectionOutput,
  CollectionOutput,
  FileOutput,
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

export interface CatalogsOperationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CatalogsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CatalogsOperationsListDefaultHeaders;
}

/** The request has succeeded. */
export interface CatalogsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CatalogOutput;
}

export interface CatalogsOperationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CatalogsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CatalogsOperationsGetDefaultHeaders;
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

export interface CatalogsOperationsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CatalogsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CatalogsOperationsCreateOrUpdateDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CatalogsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CatalogsOperationsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CatalogsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CatalogsOperationsDeleteDefaultHeaders;
}

/** The request has succeeded. */
export interface CollectionsOperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedCollectionOutput;
}

export interface CollectionsOperationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CollectionsOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CollectionsOperationsListDefaultHeaders;
}

/** The request has succeeded. */
export interface CollectionsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: CollectionOutput;
}

export interface CollectionsOperationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CollectionsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CollectionsOperationsGetDefaultHeaders;
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

export interface CollectionsOperationsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CollectionsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CollectionsOperationsCreateOrUpdateDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface CollectionsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface CollectionsOperationsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CollectionsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CollectionsOperationsDeleteDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface FileOperationsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FileOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FileOperationsDeleteDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface FileOperationsDownload204Response extends HttpResponse {
  status: "204";
}

export interface FileOperationsDownloadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FileOperationsDownloadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FileOperationsDownloadDefaultHeaders;
}

/** The request has succeeded. */
export interface FileOperationsUpload200Response extends HttpResponse {
  status: "200";
  body: FileOutput;
}

export interface FileOperationsUploadDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface FileOperationsUploadDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & FileOperationsUploadDefaultHeaders;
}

/** The request has succeeded. */
export interface ItemsOperationsCreate200Response extends HttpResponse {
  status: "200";
  body: ItemResponseOutput;
}

export interface ItemsOperationsCreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsCreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsCreateDefaultHeaders;
}

/** The request has succeeded. */
export interface ItemsOperationsGet200Response extends HttpResponse {
  status: "200";
  body: ItemOutput;
}

export interface ItemsOperationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsGetDefaultHeaders;
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

export interface ItemsOperationsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsCreateOrUpdateDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface ItemsOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface ItemsOperationsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsDeleteDefaultHeaders;
}

/** The request has succeeded. */
export interface ItemsOperationsGetAllUnderCollection200Response extends HttpResponse {
  status: "200";
  body: ItemListResponseOutput;
}

export interface ItemsOperationsGetAllUnderCollectionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsGetAllUnderCollectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsGetAllUnderCollectionDefaultHeaders;
}

/** The request has succeeded. */
export interface ItemsOperationsSearchAcrossCollection200Response extends HttpResponse {
  status: "200";
  body: ItemListResponseOutput;
}

export interface ItemsOperationsSearchAcrossCollectionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ItemsOperationsSearchAcrossCollectionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ItemsOperationsSearchAcrossCollectionDefaultHeaders;
}

/** The request has succeeded. */
export interface SatelliteOperationsFetchItems200Response extends HttpResponse {
  status: "200";
  body: SatelliteFetchResponseOutput;
}

export interface SatelliteOperationsFetchItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SatelliteOperationsFetchItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SatelliteOperationsFetchItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface SatelliteOperationsSearchItems200Response extends HttpResponse {
  status: "200";
  body: SearchFeaturesResponseOutput;
}

export interface SatelliteOperationsSearchItemsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SatelliteOperationsSearchItemsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SatelliteOperationsSearchItemsDefaultHeaders;
}

/** The request has succeeded. */
export interface SchemasOperationsList200Response extends HttpResponse {
  status: "200";
  body: PagedSchemaOutput;
}

export interface SchemasOperationsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SchemasOperationsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SchemasOperationsListDefaultHeaders;
}

/** The request has succeeded. */
export interface SchemasOperationsGet200Response extends HttpResponse {
  status: "200";
  body: SchemaOutput;
}

export interface SchemasOperationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SchemasOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SchemasOperationsGetDefaultHeaders;
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

export interface SchemasOperationsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SchemasOperationsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SchemasOperationsCreateOrUpdateDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface SchemasOperationsDelete204Response extends HttpResponse {
  status: "204";
}

export interface SchemasOperationsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SchemasOperationsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SchemasOperationsDeleteDefaultHeaders;
}

/** The request has succeeded. */
export interface SolutionsOperationsCancelJob200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsCancelJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SolutionsOperationsCancelJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SolutionsOperationsCancelJobDefaultHeaders;
}

/** The request has succeeded. */
export interface SolutionsOperationsCreateJob200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsCreateJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SolutionsOperationsCreateJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SolutionsOperationsCreateJobDefaultHeaders;
}

/** The request has succeeded. */
export interface SolutionsOperationsGetData200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsGetDataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SolutionsOperationsGetDataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SolutionsOperationsGetDataDefaultHeaders;
}

/** The request has succeeded. */
export interface SolutionsOperationsGetJob200Response extends HttpResponse {
  status: "200";
  body: SamplePartnerResponseOutput;
}

export interface SolutionsOperationsGetJobDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SolutionsOperationsGetJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SolutionsOperationsGetJobDefaultHeaders;
}

/** The request has succeeded. */
export interface WeatherOperationsGet200Response extends HttpResponse {
  status: "200";
  body: WeatherResponseOutput;
}

export interface WeatherOperationsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface WeatherOperationsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & WeatherOperationsGetDefaultHeaders;
}
