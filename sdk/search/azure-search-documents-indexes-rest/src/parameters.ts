// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  SearchIndexerDataSource,
  SearchIndexer,
  SearchIndexerSkillset,
  SynonymMap,
  SearchIndex,
  AnalyzeRequest,
} from "./models.js";

export interface GetServiceStatisticsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetServiceStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & GetServiceStatisticsHeaders;
}

export type GetServiceStatisticsParameters = GetServiceStatisticsHeaderParam & RequestParameters;

export interface DataSourcesCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesCreateOrUpdateBodyParam {
  /** The definition of the datasource to create or update. */
  body: SearchIndexerDataSource;
}

export interface DataSourcesCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & DataSourcesCreateOrUpdateHeaders;
}

export type DataSourcesCreateOrUpdateParameters = DataSourcesCreateOrUpdateHeaderParam &
  DataSourcesCreateOrUpdateBodyParam &
  RequestParameters;

export interface DataSourcesDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesDeleteHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesDeleteHeaders;
}

export type DataSourcesDeleteParameters = DataSourcesDeleteHeaderParam & RequestParameters;

export interface DataSourcesGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesGetHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesGetHeaders;
}

export type DataSourcesGetParameters = DataSourcesGetHeaderParam & RequestParameters;

export interface DataSourcesListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface DataSourcesListQueryParam {
  queryParameters?: DataSourcesListQueryParamProperties;
}

export interface DataSourcesListHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesListHeaders;
}

export type DataSourcesListParameters = DataSourcesListQueryParam &
  DataSourcesListHeaderParam &
  RequestParameters;

export interface DataSourcesCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesCreateBodyParam {
  /** The definition of the datasource to create. */
  body: SearchIndexerDataSource;
}

export interface DataSourcesCreateHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesCreateHeaders;
}

export type DataSourcesCreateParameters = DataSourcesCreateHeaderParam &
  DataSourcesCreateBodyParam &
  RequestParameters;

export interface IndexersResetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersResetHeaderParam {
  headers?: RawHttpHeadersInput & IndexersResetHeaders;
}

export type IndexersResetParameters = IndexersResetHeaderParam & RequestParameters;

export interface IndexersRunHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersRunHeaderParam {
  headers?: RawHttpHeadersInput & IndexersRunHeaders;
}

export type IndexersRunParameters = IndexersRunHeaderParam & RequestParameters;

export interface IndexersCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersCreateOrUpdateBodyParam {
  /** The definition of the indexer to create or update. */
  body: SearchIndexer;
}

export interface IndexersCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & IndexersCreateOrUpdateHeaders;
}

export type IndexersCreateOrUpdateParameters = IndexersCreateOrUpdateHeaderParam &
  IndexersCreateOrUpdateBodyParam &
  RequestParameters;

export interface IndexersDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersDeleteHeaderParam {
  headers?: RawHttpHeadersInput & IndexersDeleteHeaders;
}

export type IndexersDeleteParameters = IndexersDeleteHeaderParam & RequestParameters;

export interface IndexersGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersGetHeaderParam {
  headers?: RawHttpHeadersInput & IndexersGetHeaders;
}

export type IndexersGetParameters = IndexersGetHeaderParam & RequestParameters;

export interface IndexersListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface IndexersListQueryParam {
  queryParameters?: IndexersListQueryParamProperties;
}

export interface IndexersListHeaderParam {
  headers?: RawHttpHeadersInput & IndexersListHeaders;
}

export type IndexersListParameters = IndexersListQueryParam &
  IndexersListHeaderParam &
  RequestParameters;

export interface IndexersCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersCreateBodyParam {
  /** The definition of the indexer to create. */
  body: SearchIndexer;
}

export interface IndexersCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexersCreateHeaders;
}

export type IndexersCreateParameters = IndexersCreateHeaderParam &
  IndexersCreateBodyParam &
  RequestParameters;

export interface IndexersGetStatusHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersGetStatusHeaderParam {
  headers?: RawHttpHeadersInput & IndexersGetStatusHeaders;
}

export type IndexersGetStatusParameters = IndexersGetStatusHeaderParam & RequestParameters;

export interface SkillsetsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsCreateOrUpdateBodyParam {
  /**
   * The skillset containing one or more skills to create or update in a search
   * service.
   */
  body: SearchIndexerSkillset;
}

export interface SkillsetsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & SkillsetsCreateOrUpdateHeaders;
}

export type SkillsetsCreateOrUpdateParameters = SkillsetsCreateOrUpdateHeaderParam &
  SkillsetsCreateOrUpdateBodyParam &
  RequestParameters;

export interface SkillsetsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsDeleteHeaders;
}

export type SkillsetsDeleteParameters = SkillsetsDeleteHeaderParam & RequestParameters;

export interface SkillsetsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsGetHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsGetHeaders;
}

export type SkillsetsGetParameters = SkillsetsGetHeaderParam & RequestParameters;

export interface SkillsetsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface SkillsetsListQueryParam {
  queryParameters?: SkillsetsListQueryParamProperties;
}

export interface SkillsetsListHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsListHeaders;
}

export type SkillsetsListParameters = SkillsetsListQueryParam &
  SkillsetsListHeaderParam &
  RequestParameters;

export interface SkillsetsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsCreateBodyParam {
  /** The skillset containing one or more skills to create in a search service. */
  body: SearchIndexerSkillset;
}

export interface SkillsetsCreateHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsCreateHeaders;
}

export type SkillsetsCreateParameters = SkillsetsCreateHeaderParam &
  SkillsetsCreateBodyParam &
  RequestParameters;

export interface SynonymMapsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsCreateOrUpdateBodyParam {
  /** The definition of the synonym map to create or update. */
  body: SynonymMap;
}

export interface SynonymMapsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & SynonymMapsCreateOrUpdateHeaders;
}

export type SynonymMapsCreateOrUpdateParameters = SynonymMapsCreateOrUpdateHeaderParam &
  SynonymMapsCreateOrUpdateBodyParam &
  RequestParameters;

export interface SynonymMapsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsDeleteHeaders;
}

export type SynonymMapsDeleteParameters = SynonymMapsDeleteHeaderParam & RequestParameters;

export interface SynonymMapsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsGetHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsGetHeaders;
}

export type SynonymMapsGetParameters = SynonymMapsGetHeaderParam & RequestParameters;

export interface SynonymMapsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface SynonymMapsListQueryParam {
  queryParameters?: SynonymMapsListQueryParamProperties;
}

export interface SynonymMapsListHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsListHeaders;
}

export type SynonymMapsListParameters = SynonymMapsListQueryParam &
  SynonymMapsListHeaderParam &
  RequestParameters;

export interface SynonymMapsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsCreateBodyParam {
  /** The definition of the synonym map to create. */
  body: SynonymMap;
}

export interface SynonymMapsCreateHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsCreateHeaders;
}

export type SynonymMapsCreateParameters = SynonymMapsCreateHeaderParam &
  SynonymMapsCreateBodyParam &
  RequestParameters;

export interface IndexesCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesCreateBodyParam {
  /** The definition of the index to create. */
  body: SearchIndex;
}

export interface IndexesCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexesCreateHeaders;
}

export type IndexesCreateParameters = IndexesCreateHeaderParam &
  IndexesCreateBodyParam &
  RequestParameters;

export interface IndexesListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface IndexesListQueryParam {
  queryParameters?: IndexesListQueryParamProperties;
}

export interface IndexesListHeaderParam {
  headers?: RawHttpHeadersInput & IndexesListHeaders;
}

export type IndexesListParameters = IndexesListQueryParam &
  IndexesListHeaderParam &
  RequestParameters;

export interface IndexesCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesCreateOrUpdateBodyParam {
  /** The definition of the index to create or update. */
  body: SearchIndex;
}

export interface IndexesCreateOrUpdateQueryParamProperties {
  /**
   * Allows new analyzers, tokenizers, token filters, or char filters to be added to
   * an index by taking the index offline for at least a few seconds. This
   * temporarily causes indexing and query requests to fail. Performance and write
   * availability of the index can be impaired for several minutes after the index
   * is updated, or longer for very large indexes.
   */
  allowIndexDowntime?: boolean;
}

export interface IndexesCreateOrUpdateQueryParam {
  queryParameters?: IndexesCreateOrUpdateQueryParamProperties;
}

export interface IndexesCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & IndexesCreateOrUpdateHeaders;
}

export type IndexesCreateOrUpdateParameters = IndexesCreateOrUpdateQueryParam &
  IndexesCreateOrUpdateHeaderParam &
  IndexesCreateOrUpdateBodyParam &
  RequestParameters;

export interface IndexesDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesDeleteHeaderParam {
  headers?: RawHttpHeadersInput & IndexesDeleteHeaders;
}

export type IndexesDeleteParameters = IndexesDeleteHeaderParam & RequestParameters;

export interface IndexesGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesGetHeaderParam {
  headers?: RawHttpHeadersInput & IndexesGetHeaders;
}

export type IndexesGetParameters = IndexesGetHeaderParam & RequestParameters;

export interface IndexesGetStatisticsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesGetStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & IndexesGetStatisticsHeaders;
}

export type IndexesGetStatisticsParameters = IndexesGetStatisticsHeaderParam & RequestParameters;

export interface IndexesAnalyzeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesAnalyzeBodyParam {
  /** The text and analyzer or analysis components to test. */
  body: AnalyzeRequest;
}

export interface IndexesAnalyzeHeaderParam {
  headers?: RawHttpHeadersInput & IndexesAnalyzeHeaders;
}

export type IndexesAnalyzeParameters = IndexesAnalyzeHeaderParam &
  IndexesAnalyzeBodyParam &
  RequestParameters;
