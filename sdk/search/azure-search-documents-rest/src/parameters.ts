// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  SearchIndexerDataSource,
  SearchIndexer,
  SearchIndexerSkillset,
  SynonymMap,
  SearchIndex,
  AnalyzeRequest,
  QueryType,
  SearchMode,
  ScoringStatistics,
  SemanticErrorMode,
  QueryAnswerType,
  QueryCaptionType,
  SearchRequest,
  SuggestRequest,
  IndexBatch,
  AutocompleteMode,
  AutocompleteRequest,
} from "./models.js";

export interface GetServiceStatisticsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetServiceStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & GetServiceStatisticsHeaders;
}

export type GetServiceStatisticsParameters = GetServiceStatisticsHeaderParam &
  RequestParameters;

export interface DataSourcesOperationsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesOperationsCreateOrUpdateBodyParam {
  /** The definition of the datasource to create or update. */
  body: SearchIndexerDataSource;
}

export interface DataSourcesOperationsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & DataSourcesOperationsCreateOrUpdateHeaders;
}

export type DataSourcesOperationsCreateOrUpdateParameters =
  DataSourcesOperationsCreateOrUpdateHeaderParam &
    DataSourcesOperationsCreateOrUpdateBodyParam &
    RequestParameters;

export interface DataSourcesOperationsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesOperationsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesOperationsDeleteHeaders;
}

export type DataSourcesOperationsDeleteParameters =
  DataSourcesOperationsDeleteHeaderParam & RequestParameters;

export interface DataSourcesOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesOperationsGetHeaders;
}

export type DataSourcesOperationsGetParameters =
  DataSourcesOperationsGetHeaderParam & RequestParameters;

export interface DataSourcesOperationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesOperationsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface DataSourcesOperationsListQueryParam {
  queryParameters?: DataSourcesOperationsListQueryParamProperties;
}

export interface DataSourcesOperationsListHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesOperationsListHeaders;
}

export type DataSourcesOperationsListParameters =
  DataSourcesOperationsListQueryParam &
    DataSourcesOperationsListHeaderParam &
    RequestParameters;

export interface DataSourcesOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DataSourcesOperationsCreateBodyParam {
  /** The definition of the datasource to create. */
  body: SearchIndexerDataSource;
}

export interface DataSourcesOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & DataSourcesOperationsCreateHeaders;
}

export type DataSourcesOperationsCreateParameters =
  DataSourcesOperationsCreateHeaderParam &
    DataSourcesOperationsCreateBodyParam &
    RequestParameters;

export interface IndexersOperationsResetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsResetHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsResetHeaders;
}

export type IndexersOperationsResetParameters =
  IndexersOperationsResetHeaderParam & RequestParameters;

export interface IndexersOperationsRunHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsRunHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsRunHeaders;
}

export type IndexersOperationsRunParameters = IndexersOperationsRunHeaderParam &
  RequestParameters;

export interface IndexersOperationsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsCreateOrUpdateBodyParam {
  /** The definition of the indexer to create or update. */
  body: SearchIndexer;
}

export interface IndexersOperationsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & IndexersOperationsCreateOrUpdateHeaders;
}

export type IndexersOperationsCreateOrUpdateParameters =
  IndexersOperationsCreateOrUpdateHeaderParam &
    IndexersOperationsCreateOrUpdateBodyParam &
    RequestParameters;

export interface IndexersOperationsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsDeleteHeaders;
}

export type IndexersOperationsDeleteParameters =
  IndexersOperationsDeleteHeaderParam & RequestParameters;

export interface IndexersOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsGetHeaders;
}

export type IndexersOperationsGetParameters = IndexersOperationsGetHeaderParam &
  RequestParameters;

export interface IndexersOperationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface IndexersOperationsListQueryParam {
  queryParameters?: IndexersOperationsListQueryParamProperties;
}

export interface IndexersOperationsListHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsListHeaders;
}

export type IndexersOperationsListParameters =
  IndexersOperationsListQueryParam &
    IndexersOperationsListHeaderParam &
    RequestParameters;

export interface IndexersOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsCreateBodyParam {
  /** The definition of the indexer to create. */
  body: SearchIndexer;
}

export interface IndexersOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsCreateHeaders;
}

export type IndexersOperationsCreateParameters =
  IndexersOperationsCreateHeaderParam &
    IndexersOperationsCreateBodyParam &
    RequestParameters;

export interface IndexersOperationsGetStatusHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexersOperationsGetStatusHeaderParam {
  headers?: RawHttpHeadersInput & IndexersOperationsGetStatusHeaders;
}

export type IndexersOperationsGetStatusParameters =
  IndexersOperationsGetStatusHeaderParam & RequestParameters;

export interface SkillsetsOperationsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsOperationsCreateOrUpdateBodyParam {
  /**
   * The skillset containing one or more skills to create or update in a search
   * service.
   */
  body: SearchIndexerSkillset;
}

export interface SkillsetsOperationsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & SkillsetsOperationsCreateOrUpdateHeaders;
}

export type SkillsetsOperationsCreateOrUpdateParameters =
  SkillsetsOperationsCreateOrUpdateHeaderParam &
    SkillsetsOperationsCreateOrUpdateBodyParam &
    RequestParameters;

export interface SkillsetsOperationsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsOperationsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsOperationsDeleteHeaders;
}

export type SkillsetsOperationsDeleteParameters =
  SkillsetsOperationsDeleteHeaderParam & RequestParameters;

export interface SkillsetsOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsOperationsGetHeaders;
}

export type SkillsetsOperationsGetParameters =
  SkillsetsOperationsGetHeaderParam & RequestParameters;

export interface SkillsetsOperationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsOperationsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface SkillsetsOperationsListQueryParam {
  queryParameters?: SkillsetsOperationsListQueryParamProperties;
}

export interface SkillsetsOperationsListHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsOperationsListHeaders;
}

export type SkillsetsOperationsListParameters =
  SkillsetsOperationsListQueryParam &
    SkillsetsOperationsListHeaderParam &
    RequestParameters;

export interface SkillsetsOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SkillsetsOperationsCreateBodyParam {
  /** The skillset containing one or more skills to create in a search service. */
  body: SearchIndexerSkillset;
}

export interface SkillsetsOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & SkillsetsOperationsCreateHeaders;
}

export type SkillsetsOperationsCreateParameters =
  SkillsetsOperationsCreateHeaderParam &
    SkillsetsOperationsCreateBodyParam &
    RequestParameters;

export interface SynonymMapsOperationsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsOperationsCreateOrUpdateBodyParam {
  /** The definition of the synonym map to create or update. */
  body: SynonymMap;
}

export interface SynonymMapsOperationsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & SynonymMapsOperationsCreateOrUpdateHeaders;
}

export type SynonymMapsOperationsCreateOrUpdateParameters =
  SynonymMapsOperationsCreateOrUpdateHeaderParam &
    SynonymMapsOperationsCreateOrUpdateBodyParam &
    RequestParameters;

export interface SynonymMapsOperationsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsOperationsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsOperationsDeleteHeaders;
}

export type SynonymMapsOperationsDeleteParameters =
  SynonymMapsOperationsDeleteHeaderParam & RequestParameters;

export interface SynonymMapsOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsOperationsGetHeaders;
}

export type SynonymMapsOperationsGetParameters =
  SynonymMapsOperationsGetHeaderParam & RequestParameters;

export interface SynonymMapsOperationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsOperationsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface SynonymMapsOperationsListQueryParam {
  queryParameters?: SynonymMapsOperationsListQueryParamProperties;
}

export interface SynonymMapsOperationsListHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsOperationsListHeaders;
}

export type SynonymMapsOperationsListParameters =
  SynonymMapsOperationsListQueryParam &
    SynonymMapsOperationsListHeaderParam &
    RequestParameters;

export interface SynonymMapsOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SynonymMapsOperationsCreateBodyParam {
  /** The definition of the synonym map to create. */
  body: SynonymMap;
}

export interface SynonymMapsOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & SynonymMapsOperationsCreateHeaders;
}

export type SynonymMapsOperationsCreateParameters =
  SynonymMapsOperationsCreateHeaderParam &
    SynonymMapsOperationsCreateBodyParam &
    RequestParameters;

export interface IndexesOperationsCreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsCreateBodyParam {
  /** The definition of the index to create. */
  body: SearchIndex;
}

export interface IndexesOperationsCreateHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsCreateHeaders;
}

export type IndexesOperationsCreateParameters =
  IndexesOperationsCreateHeaderParam &
    IndexesOperationsCreateBodyParam &
    RequestParameters;

export interface IndexesOperationsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsListQueryParamProperties {
  /**
   * Selects which top-level properties to retrieve.
   * Specified as a comma-separated list of JSON property names,
   * or '*' for all properties. The default is all properties.
   */
  $select?: string;
}

export interface IndexesOperationsListQueryParam {
  queryParameters?: IndexesOperationsListQueryParamProperties;
}

export interface IndexesOperationsListHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsListHeaders;
}

export type IndexesOperationsListParameters = IndexesOperationsListQueryParam &
  IndexesOperationsListHeaderParam &
  RequestParameters;

export interface IndexesOperationsCreateOrUpdateHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** For HTTP PUT requests, instructs the service to return the created/updated resource on success. */
  Prefer: "return=representation";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsCreateOrUpdateBodyParam {
  /** The definition of the index to create or update. */
  body: SearchIndex;
}

export interface IndexesOperationsCreateOrUpdateQueryParamProperties {
  /**
   * Allows new analyzers, tokenizers, token filters, or char filters to be added to
   * an index by taking the index offline for at least a few seconds. This
   * temporarily causes indexing and query requests to fail. Performance and write
   * availability of the index can be impaired for several minutes after the index
   * is updated, or longer for very large indexes.
   */
  allowIndexDowntime?: boolean;
}

export interface IndexesOperationsCreateOrUpdateQueryParam {
  queryParameters?: IndexesOperationsCreateOrUpdateQueryParamProperties;
}

export interface IndexesOperationsCreateOrUpdateHeaderParam {
  headers: RawHttpHeadersInput & IndexesOperationsCreateOrUpdateHeaders;
}

export type IndexesOperationsCreateOrUpdateParameters =
  IndexesOperationsCreateOrUpdateQueryParam &
    IndexesOperationsCreateOrUpdateHeaderParam &
    IndexesOperationsCreateOrUpdateBodyParam &
    RequestParameters;

export interface IndexesOperationsDeleteHeaders {
  /** Defines the If-Match condition. The operation will be performed only if the ETag on the server matches this value. */
  "If-Match"?: string;
  /** Defines the If-None-Match condition. The operation will be performed only if the ETag on the server does not match this value. */
  "If-None-Match"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsDeleteHeaders;
}

export type IndexesOperationsDeleteParameters =
  IndexesOperationsDeleteHeaderParam & RequestParameters;

export interface IndexesOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsGetHeaders;
}

export type IndexesOperationsGetParameters = IndexesOperationsGetHeaderParam &
  RequestParameters;

export interface IndexesOperationsGetStatisticsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsGetStatisticsHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsGetStatisticsHeaders;
}

export type IndexesOperationsGetStatisticsParameters =
  IndexesOperationsGetStatisticsHeaderParam & RequestParameters;

export interface IndexesOperationsAnalyzeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexesOperationsAnalyzeBodyParam {
  /** The text and analyzer or analysis components to test. */
  body: AnalyzeRequest;
}

export interface IndexesOperationsAnalyzeHeaderParam {
  headers?: RawHttpHeadersInput & IndexesOperationsAnalyzeHeaders;
}

export type IndexesOperationsAnalyzeParameters =
  IndexesOperationsAnalyzeHeaderParam &
    IndexesOperationsAnalyzeBodyParam &
    RequestParameters;

export interface DocumentsOperationsCountHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsOperationsCountHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsCountHeaders;
}

export type DocumentsOperationsCountParameters =
  DocumentsOperationsCountHeaderParam & RequestParameters;

export interface DocumentsOperationsSearchGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `highlight` with explode set to false and style set to form. */
export interface DocumentsOperationsSearchGetHighlightQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface DocumentsOperationsSearchGet$orderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsOperationsSearchGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsOperationsSearchGet$selectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `facet` with explode set to true and style set to form. */
export interface DocumentsOperationsSearchGetFacetQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `scoringParameter` with explode set to true and style set to form. */
export interface DocumentsOperationsSearchGetScoringParameterQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface DocumentsOperationsSearchGetQueryParamProperties {
  /**
   * A full-text search query expression; Use "*" or omit this parameter to match
   * all documents.
   */
  search?: string;
  /**
   * A value that specifies whether to fetch the total count of results. Default is
   * false. Setting this value to true may have a performance impact. Note that the
   * count returned is an approximation.
   */
  $count?: boolean;
  /**
   * The list of facet expressions to apply to the search query. Each facet
   * expression contains a field name, optionally followed by a comma-separated list
   * of name:value pairs.
   */
  facet?: DocumentsOperationsSearchGetFacetQueryParam;
  /** The OData $filter expression to apply to the search query. */
  $filter?: string;
  /**
   * The list of field names to use for hit highlights. Only searchable fields can
   * be used for hit highlighting.
   */
  highlight?: string[] | DocumentsOperationsSearchGetHighlightQueryParam;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. Default is &lt;/em&gt;.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. Default is &lt;em&gt;.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by a search query in order for the query to be reported as a success.
   * This parameter can be useful for ensuring search availability even for services
   * with only one replica. The default is 100.
   */
  minimumCoverage?: number;
  /**
   * The list of OData $orderby expressions by which to sort the results. Each
   * expression can be either a field name or a call to either the geo.distance() or
   * the search.score() functions. Each expression can be followed by asc to
   * indicate ascending, and desc to indicate descending. The default is ascending
   * order. Ties will be broken by the match scores of documents. If no OrderBy is
   * specified, the default sort order is descending by document match score. There
   * can be at most 32 $orderby clauses.
   */
  $orderby?: string[] | DocumentsOperationsSearchGet$orderbyQueryParam;
  /**
   * A value that specifies the syntax of the search query. The default is 'simple'.
   * Use 'full' if your query uses the Lucene query syntax.
   *
   * Possible values: "simple", "full", "semantic"
   */
  queryType?: QueryType;
  /**
   * The list of parameter values to be used in scoring functions (for example,
   * referencePointParameter) using the format name-values. For example, if the
   * scoring profile defines a function with a parameter called 'mylocation' the
   * parameter string would be "mylocation--122.2,44.8" (without the quotes).
   */
  scoringParameter?: DocumentsOperationsSearchGetScoringParameterQueryParam;
  /**
   * The name of a scoring profile to evaluate match scores for matching documents
   * in order to sort the results.
   */
  scoringProfile?: string;
  /**
   * The list of field names to which to scope the full-text search. When using
   * fielded search (fieldName:searchExpression) in a full Lucene query, the field
   * names of each fielded search expression take precedence over any field names
   * listed in this parameter.
   */
  searchFields?: string[] | DocumentsOperationsSearchGetSearchFieldsQueryParam;
  /**
   * A value that specifies whether any or all of the search terms must be matched
   * in order to count the document as a match.
   *
   * Possible values: "any", "all"
   */
  searchMode?: SearchMode;
  /**
   * A value that specifies whether we want to calculate scoring statistics (such as
   * document frequency) globally for more consistent scoring, or locally, for lower
   * latency.
   *
   * Possible values: "local", "global"
   */
  scoringStatistics?: ScoringStatistics;
  /**
   * A value to be used to create a sticky session, which can help to get more
   * consistent results. As long as the same sessionId is used, a best-effort
   * attempt will be made to target the same replica set. Be wary that reusing the
   * same sessionID values repeatedly can interfere with the load balancing of the
   * requests across replicas and adversely affect the performance of the search
   * service. The value used as sessionId cannot start with a '_' character.
   */
  sessionId?: string;
  /**
   * The list of fields to retrieve. If unspecified, all fields marked as
   * retrievable in the schema are included.
   */
  $select?: string[] | DocumentsOperationsSearchGet$selectQueryParam;
  /**
   * The number of search results to skip. This value cannot be greater than
   * 100,000. If you need to scan documents in sequence, but cannot use $skip due to
   * this limitation, consider using $orderby on a totally-ordered key and $filter
   * with a range query instead.
   */
  $skip?: number;
  /**
   * The number of search results to retrieve. This can be used in conjunction with
   * $skip to implement client-side paging of search results. If results are
   * truncated due to server-side paging, the response will include a continuation
   * token that can be used to issue another Search request for the next page of
   * results.
   */
  $top?: number;
  /**
   * The name of the semantic configuration that lists which fields should be used
   * for semantic ranking, captions, highlights, and answers
   */
  semanticConfiguration?: string;
  /**
   * Allows the user to choose whether a semantic call should fail completely, or to
   * return partial results (default).
   *
   * Possible values: "partial", "fail"
   */
  semanticErrorHandling?: SemanticErrorMode;
  /**
   * Allows the user to set an upper bound on the amount of time it takes for
   * semantic enrichment to finish processing before the request fails.
   */
  semanticMaxWaitInMilliseconds?: number;
  /**
   * This parameter is only valid if the query type is `semantic`. If set, the query
   * returns answers extracted from key passages in the highest ranked documents.
   * The number of answers returned can be configured by appending the pipe
   * character `|` followed by the `count-<number of answers>` option after the
   * answers parameter value, such as `extractive|count-3`. Default count is 1. The
   * confidence threshold can be configured by appending the pipe character `|`
   * followed by the `threshold-<confidence threshold>` option after the answers
   * parameter value, such as `extractive|threshold-0.9`. Default threshold is 0.7.
   *
   * Possible values: "none", "extractive"
   */
  answers?: QueryAnswerType;
  /**
   * This parameter is only valid if the query type is `semantic`. If set, the query
   * returns captions extracted from key passages in the highest ranked documents.
   * When Captions is set to `extractive`, highlighting is enabled by default, and
   * can be configured by appending the pipe character `|` followed by the
   * `highlight-<true/false>` option, such as `extractive|highlight-true`. Defaults
   * to `None`.
   *
   * Possible values: "none", "extractive"
   */
  captions?: QueryCaptionType;
  /**
   * Allows setting a separate search query that will be solely used for semantic
   * reranking, semantic captions and semantic answers. Is useful for scenarios
   * where there is a need to use different queries between the base retrieval and
   * ranking phase, and the L2 semantic phase.
   */
  semanticQuery?: string;
}

export interface DocumentsOperationsSearchGetQueryParam {
  queryParameters?: DocumentsOperationsSearchGetQueryParamProperties;
}

export interface DocumentsOperationsSearchGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsSearchGetHeaders;
}

export type DocumentsOperationsSearchGetParameters =
  DocumentsOperationsSearchGetQueryParam &
    DocumentsOperationsSearchGetHeaderParam &
    RequestParameters;

export interface DocumentsOperationsSearchPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsOperationsSearchPostBodyParam {
  /** The definition of the Search request. */
  body: SearchRequest;
}

export interface DocumentsOperationsSearchPostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsSearchPostHeaders;
}

export type DocumentsOperationsSearchPostParameters =
  DocumentsOperationsSearchPostHeaderParam &
    DocumentsOperationsSearchPostBodyParam &
    RequestParameters;

export interface DocumentsOperationsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsOperationsGet$selectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsOperationsGetQueryParamProperties {
  /**
   * List of field names to retrieve for the document; Any field not retrieved will
   * be missing from the returned document.
   */
  $select?: string[] | DocumentsOperationsGet$selectQueryParam;
}

export interface DocumentsOperationsGetQueryParam {
  queryParameters?: DocumentsOperationsGetQueryParamProperties;
}

export interface DocumentsOperationsGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsGetHeaders;
}

export type DocumentsOperationsGetParameters =
  DocumentsOperationsGetQueryParam &
    DocumentsOperationsGetHeaderParam &
    RequestParameters;

export interface DocumentsOperationsSuggestGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface DocumentsOperationsSuggestGet$orderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsOperationsSuggestGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsOperationsSuggestGet$selectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsOperationsSuggestGetQueryParamProperties {
  /**
   * The search text to use to suggest documents. Must be at least 1 character, and
   * no more than 100 characters.
   */
  search: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /** An OData expression that filters the documents considered for suggestions. */
  $filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the suggestions query.
   * Default is false. When set to true, the query will find terms even if there's a
   * substituted or missing character in the search text. While this provides a
   * better experience in some scenarios, it comes at a performance cost as fuzzy
   * suggestions queries are slower and consume more resources.
   */
  fuzzy?: boolean;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. If omitted, hit highlighting of suggestions is disabled.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. If omitted, hit highlighting of suggestions is disabled.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by a suggestions query in order for the query to be reported as a
   * success. This parameter can be useful for ensuring search availability even for
   * services with only one replica. The default is 80.
   */
  minimumCoverage?: number;
  /**
   * The list of OData $orderby expressions by which to sort the results. Each
   * expression can be either a field name or a call to either the geo.distance() or
   * the search.score() functions. Each expression can be followed by asc to
   * indicate ascending, or desc to indicate descending. The default is ascending
   * order. Ties will be broken by the match scores of documents. If no $orderby is
   * specified, the default sort order is descending by document match score. There
   * can be at most 32 $orderby clauses.
   */
  $orderby?: string[] | DocumentsOperationsSuggestGet$orderbyQueryParam;
  /**
   * The list of field names to search for the specified search text. Target fields
   * must be included in the specified suggester.
   */
  searchFields?: string[] | DocumentsOperationsSuggestGetSearchFieldsQueryParam;
  /**
   * The list of fields to retrieve. If unspecified, only the key field will be
   * included in the results.
   */
  $select?: string[] | DocumentsOperationsSuggestGet$selectQueryParam;
  /**
   * The number of suggestions to retrieve. The value must be a number between 1 and
   * 100. The default is 5.
   */
  $top?: number;
}

export interface DocumentsOperationsSuggestGetQueryParam {
  queryParameters: DocumentsOperationsSuggestGetQueryParamProperties;
}

export interface DocumentsOperationsSuggestGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsSuggestGetHeaders;
}

export type DocumentsOperationsSuggestGetParameters =
  DocumentsOperationsSuggestGetQueryParam &
    DocumentsOperationsSuggestGetHeaderParam &
    RequestParameters;

export interface DocumentsOperationsSuggestPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsOperationsSuggestPostBodyParam {
  /** The Suggest request. */
  body: SuggestRequest;
}

export interface DocumentsOperationsSuggestPostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsSuggestPostHeaders;
}

export type DocumentsOperationsSuggestPostParameters =
  DocumentsOperationsSuggestPostHeaderParam &
    DocumentsOperationsSuggestPostBodyParam &
    RequestParameters;

export interface DocumentsOperationsIndexHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsOperationsIndexBodyParam {
  /** The batch of index actions. */
  body: IndexBatch;
}

export interface DocumentsOperationsIndexHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsIndexHeaders;
}

export type DocumentsOperationsIndexParameters =
  DocumentsOperationsIndexHeaderParam &
    DocumentsOperationsIndexBodyParam &
    RequestParameters;

export interface DocumentsOperationsAutocompleteGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsOperationsAutocompleteGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsOperationsAutocompleteGetQueryParamProperties {
  /** The incomplete term which should be auto-completed. */
  search: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /**
   * Specifies the mode for Autocomplete. The default is 'oneTerm'. Use 'twoTerms'
   * to get shingles and 'oneTermWithContext' to use the current context while
   * producing auto-completed terms.
   *
   * Possible values: "oneTerm", "twoTerms", "oneTermWithContext"
   */
  autocompleteMode?: AutocompleteMode;
  /**
   * An OData expression that filters the documents used to produce completed terms
   * for the Autocomplete result.
   */
  $filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the autocomplete query.
   * Default is false. When set to true, the query will find terms even if there's a
   * substituted or missing character in the search text. While this provides a
   * better experience in some scenarios, it comes at a performance cost as fuzzy
   * autocomplete queries are slower and consume more resources.
   */
  fuzzy?: boolean;
  /**
   * A string tag that is appended to hit highlights. Must be set with
   * highlightPreTag. If omitted, hit highlighting is disabled.
   */
  highlightPostTag?: string;
  /**
   * A string tag that is prepended to hit highlights. Must be set with
   * highlightPostTag. If omitted, hit highlighting is disabled.
   */
  highlightPreTag?: string;
  /**
   * A number between 0 and 100 indicating the percentage of the index that must be
   * covered by an autocomplete query in order for the query to be reported as a
   * success. This parameter can be useful for ensuring search availability even for
   * services with only one replica. The default is 80.
   */
  minimumCoverage?: number;
  /**
   * The list of field names to consider when querying for auto-completed terms.
   * Target fields must be included in the specified suggester.
   */
  searchFields?:
    | string[]
    | DocumentsOperationsAutocompleteGetSearchFieldsQueryParam;
  /**
   * The number of auto-completed terms to retrieve. This must be a value between 1
   * and 100. The default is 5.
   */
  $top?: number;
}

export interface DocumentsOperationsAutocompleteGetQueryParam {
  queryParameters: DocumentsOperationsAutocompleteGetQueryParamProperties;
}

export interface DocumentsOperationsAutocompleteGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsAutocompleteGetHeaders;
}

export type DocumentsOperationsAutocompleteGetParameters =
  DocumentsOperationsAutocompleteGetQueryParam &
    DocumentsOperationsAutocompleteGetHeaderParam &
    RequestParameters;

export interface DocumentsOperationsAutocompletePostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsOperationsAutocompletePostBodyParam {
  /** The definition of the Autocomplete request. */
  body: AutocompleteRequest;
}

export interface DocumentsOperationsAutocompletePostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsOperationsAutocompletePostHeaders;
}

export type DocumentsOperationsAutocompletePostParameters =
  DocumentsOperationsAutocompletePostHeaderParam &
    DocumentsOperationsAutocompletePostBodyParam &
    RequestParameters;
