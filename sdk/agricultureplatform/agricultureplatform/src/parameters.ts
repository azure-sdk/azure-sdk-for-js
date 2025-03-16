// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  Catalog,
  Collection,
  FileModel,
  AcceptHeaderEnum,
  Link,
  Asset,
  Item,
  ItemQuery,
  CrossCollectionItemSearchQuery,
  SatelliteFetchRequest,
  SatelliteStacRequest,
  Schema,
  Solution,
  SolutionData,
  WeatherRequest,
} from "./models.js";

/** This is the wrapper object for the parameter `names` with explode set to true and style set to form. */
export interface CatalogsOperationsListNamesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `propertyFilters` with explode set to true and style set to form. */
export interface CatalogsOperationsListPropertyFiltersQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `statuses` with explode set to true and style set to form. */
export interface CatalogsOperationsListStatusesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `ids` with explode set to true and style set to form. */
export interface CatalogsOperationsListIdsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface CatalogsOperationsListQueryParamProperties {
  /** Names of the resource. */
  names?: CatalogsOperationsListNamesQueryParam;
  /**
   * Filters on key-value pairs within the Properties object.
   * eg. "{testKey} eq {testValue}".
   */
  propertyFilters?: CatalogsOperationsListPropertyFiltersQueryParam;
  /** Statuses of the resource. */
  statuses?: CatalogsOperationsListStatusesQueryParam;
  /** Ids of the resource. */
  ids?: CatalogsOperationsListIdsQueryParam;
  /** Minimum creation date of resource (inclusive). */
  minCreatedDateTime?: Date | string;
  /** Maximum creation date of resource (inclusive). */
  maxCreatedDateTime?: Date | string;
  /** Minimum last modified date of resource (inclusive). */
  minLastModifiedDateTime?: Date | string;
  /** Maximum last modified date of resource (inclusive). */
  maxLastModifiedDateTime?: Date | string;
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

export interface CatalogsOperationsListQueryParam {
  queryParameters?: CatalogsOperationsListQueryParamProperties;
}

export type CatalogsOperationsListParameters = CatalogsOperationsListQueryParam & RequestParameters;
export type CatalogsOperationsGetParameters = RequestParameters;
/** The resource instance. */
export type CatalogResourceMergeAndPatch = Partial<Catalog>;

export interface CatalogsOperationsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: CatalogResourceMergeAndPatch;
}

export interface CatalogsOperationsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CatalogsOperationsCreateOrUpdateParameters =
  CatalogsOperationsCreateOrUpdateMediaTypesParam &
    CatalogsOperationsCreateOrUpdateBodyParam &
    RequestParameters;
export type CatalogsOperationsDeleteParameters = RequestParameters;

/** This is the wrapper object for the parameter `names` with explode set to true and style set to form. */
export interface CollectionsOperationsListNamesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `propertyFilters` with explode set to true and style set to form. */
export interface CollectionsOperationsListPropertyFiltersQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `statuses` with explode set to true and style set to form. */
export interface CollectionsOperationsListStatusesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `ids` with explode set to true and style set to form. */
export interface CollectionsOperationsListIdsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface CollectionsOperationsListQueryParamProperties {
  /** Names of the resource. */
  names?: CollectionsOperationsListNamesQueryParam;
  /**
   * Filters on key-value pairs within the Properties object.
   * eg. "{testKey} eq {testValue}".
   */
  propertyFilters?: CollectionsOperationsListPropertyFiltersQueryParam;
  /** Statuses of the resource. */
  statuses?: CollectionsOperationsListStatusesQueryParam;
  /** Ids of the resource. */
  ids?: CollectionsOperationsListIdsQueryParam;
  /** Minimum creation date of resource (inclusive). */
  minCreatedDateTime?: Date | string;
  /** Maximum creation date of resource (inclusive). */
  maxCreatedDateTime?: Date | string;
  /** Minimum last modified date of resource (inclusive). */
  minLastModifiedDateTime?: Date | string;
  /** Maximum last modified date of resource (inclusive). */
  maxLastModifiedDateTime?: Date | string;
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

export interface CollectionsOperationsListQueryParam {
  queryParameters?: CollectionsOperationsListQueryParamProperties;
}

export type CollectionsOperationsListParameters = CollectionsOperationsListQueryParam &
  RequestParameters;
export type CollectionsOperationsGetParameters = RequestParameters;
/** The resource instance. */
export type CollectionResourceMergeAndPatch = Partial<Collection>;

export interface CollectionsOperationsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: CollectionResourceMergeAndPatch;
}

export interface CollectionsOperationsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CollectionsOperationsCreateOrUpdateParameters =
  CollectionsOperationsCreateOrUpdateMediaTypesParam &
    CollectionsOperationsCreateOrUpdateBodyParam &
    RequestParameters;
export type CollectionsOperationsDeleteParameters = RequestParameters;

export interface FileOperationsDeleteBodyParam {
  body: FileModel;
}

export type FileOperationsDeleteParameters = FileOperationsDeleteBodyParam & RequestParameters;

export interface FileOperationsDownloadHeaders {
  /**
   * Accept header
   *
   * Possible values: "application/json", "application/octet-stream"
   */
  accept: AcceptHeaderEnum;
}

export interface FileOperationsDownloadBodyParam {
  body: FileModel;
}

export interface FileOperationsDownloadHeaderParam {
  headers: RawHttpHeadersInput & FileOperationsDownloadHeaders;
}

export type FileOperationsDownloadParameters = FileOperationsDownloadHeaderParam &
  FileOperationsDownloadBodyParam &
  RequestParameters;
export type FileOperationsUploadParameters = RequestParameters;

export interface ItemsOperationsCreateBodyParam {
  body: {
    links?: Array<Link>;
    status?: string;
    source?: string;
    name?: string;
    description?: string;
    properties?: Record<string, unknown>;
    data: Record<string, unknown>;
    ownerItemId?: string;
    assets?: Array<Asset>;
  };
}

export type ItemsOperationsCreateParameters = ItemsOperationsCreateBodyParam & RequestParameters;
export type ItemsOperationsGetParameters = RequestParameters;
/** The resource instance. */
export type ItemResourceMergeAndPatch = Partial<Item>;

export interface ItemsOperationsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: ItemResourceMergeAndPatch;
}

export interface ItemsOperationsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type ItemsOperationsCreateOrUpdateParameters = ItemsOperationsCreateOrUpdateMediaTypesParam &
  ItemsOperationsCreateOrUpdateBodyParam &
  RequestParameters;
export type ItemsOperationsDeleteParameters = RequestParameters;

export interface ItemsOperationsGetAllUnderCollectionBodyParam {
  body: ItemQuery;
}

export interface ItemsOperationsGetAllUnderCollectionQueryParamProperties {
  /**
   * Maximum number of items needed (inclusive). Minimum = 10, Maximum = 1000,
   * Default Value = 50.
   */
  maxPageSize?: number;
}

export interface ItemsOperationsGetAllUnderCollectionQueryParam {
  queryParameters?: ItemsOperationsGetAllUnderCollectionQueryParamProperties;
}

export type ItemsOperationsGetAllUnderCollectionParameters =
  ItemsOperationsGetAllUnderCollectionQueryParam &
    ItemsOperationsGetAllUnderCollectionBodyParam &
    RequestParameters;

export interface ItemsOperationsSearchAcrossCollectionBodyParam {
  body: CrossCollectionItemSearchQuery;
}

export interface ItemsOperationsSearchAcrossCollectionQueryParamProperties {
  /**
   * Maximum number of items needed (inclusive). Minimum = 10, Maximum = 1000,
   * Default Value = 50.
   */
  maxPageSize?: number;
}

export interface ItemsOperationsSearchAcrossCollectionQueryParam {
  queryParameters?: ItemsOperationsSearchAcrossCollectionQueryParamProperties;
}

export type ItemsOperationsSearchAcrossCollectionParameters =
  ItemsOperationsSearchAcrossCollectionQueryParam &
    ItemsOperationsSearchAcrossCollectionBodyParam &
    RequestParameters;

export interface SatelliteOperationsFetchItemsBodyParam {
  body: SatelliteFetchRequest;
}

export interface SatelliteOperationsFetchItemsQueryParamProperties {
  /**
   * Maximum number of items needed (inclusive). Minimum = 1, Maximum = 100, Default
   * value = 10.
   */
  maxpagesize?: number;
  /** Skip token for getting next set of results. */
  skip?: number;
}

export interface SatelliteOperationsFetchItemsQueryParam {
  queryParameters?: SatelliteOperationsFetchItemsQueryParamProperties;
}

export type SatelliteOperationsFetchItemsParameters = SatelliteOperationsFetchItemsQueryParam &
  SatelliteOperationsFetchItemsBodyParam &
  RequestParameters;

export interface SatelliteOperationsSearchItemsBodyParam {
  body: SatelliteStacRequest;
}

export interface SatelliteOperationsSearchItemsQueryParamProperties {
  /**
   * Maximum number of items needed (inclusive). Minimum = 1, Maximum = 100, Default
   * value = 10.
   */
  maxpagesize?: number;
  /** Skip token for getting next set of results. */
  skip?: number;
}

export interface SatelliteOperationsSearchItemsQueryParam {
  queryParameters?: SatelliteOperationsSearchItemsQueryParamProperties;
}

export type SatelliteOperationsSearchItemsParameters = SatelliteOperationsSearchItemsQueryParam &
  SatelliteOperationsSearchItemsBodyParam &
  RequestParameters;

/** This is the wrapper object for the parameter `names` with explode set to true and style set to form. */
export interface SchemasOperationsListNamesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `propertyFilters` with explode set to true and style set to form. */
export interface SchemasOperationsListPropertyFiltersQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `statuses` with explode set to true and style set to form. */
export interface SchemasOperationsListStatusesQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `ids` with explode set to true and style set to form. */
export interface SchemasOperationsListIdsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface SchemasOperationsListQueryParamProperties {
  /** Names of the resource. */
  names?: SchemasOperationsListNamesQueryParam;
  /**
   * Filters on key-value pairs within the Properties object.
   * eg. "{testKey} eq {testValue}".
   */
  propertyFilters?: SchemasOperationsListPropertyFiltersQueryParam;
  /** Statuses of the resource. */
  statuses?: SchemasOperationsListStatusesQueryParam;
  /** Ids of the resource. */
  ids?: SchemasOperationsListIdsQueryParam;
  /** Minimum creation date of resource (inclusive). */
  minCreatedDateTime?: Date | string;
  /** Maximum creation date of resource (inclusive). */
  maxCreatedDateTime?: Date | string;
  /** Minimum last modified date of resource (inclusive). */
  minLastModifiedDateTime?: Date | string;
  /** Maximum last modified date of resource (inclusive). */
  maxLastModifiedDateTime?: Date | string;
  /**
   * Maximum number of items needed (inclusive).
   * Minimum = 10, Maximum = 1000, Default value = 50.
   */
  maxPageSize?: number;
  /** Skip token for getting next set of results. */
  skipToken?: string;
}

export interface SchemasOperationsListQueryParam {
  queryParameters?: SchemasOperationsListQueryParamProperties;
}

export type SchemasOperationsListParameters = SchemasOperationsListQueryParam & RequestParameters;
export type SchemasOperationsGetParameters = RequestParameters;
/** The resource instance. */
export type SchemaResourceMergeAndPatch = Partial<Schema>;

export interface SchemasOperationsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: SchemaResourceMergeAndPatch;
}

export interface SchemasOperationsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type SchemasOperationsCreateOrUpdateParameters =
  SchemasOperationsCreateOrUpdateMediaTypesParam &
    SchemasOperationsCreateOrUpdateBodyParam &
    RequestParameters;
export type SchemasOperationsDeleteParameters = RequestParameters;

export interface SolutionsOperationsCancelJobBodyParam {
  body: Solution;
}

export type SolutionsOperationsCancelJobParameters = SolutionsOperationsCancelJobBodyParam &
  RequestParameters;

export interface SolutionsOperationsCreateJobBodyParam {
  body: SolutionData;
}

export type SolutionsOperationsCreateJobParameters = SolutionsOperationsCreateJobBodyParam &
  RequestParameters;

export interface SolutionsOperationsGetDataBodyParam {
  body: SolutionData;
}

export type SolutionsOperationsGetDataParameters = SolutionsOperationsGetDataBodyParam &
  RequestParameters;

export interface SolutionsOperationsGetJobBodyParam {
  body: Solution;
}

export type SolutionsOperationsGetJobParameters = SolutionsOperationsGetJobBodyParam &
  RequestParameters;

export interface WeatherOperationsGetBodyParam {
  body: WeatherRequest;
}

export type WeatherOperationsGetParameters = WeatherOperationsGetBodyParam & RequestParameters;
