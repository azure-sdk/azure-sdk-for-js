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

export interface DocumentsCountHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsCountHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsCountHeaders;
}

export type DocumentsCountParameters = DocumentsCountHeaderParam & RequestParameters;

export interface DocumentsSearchGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `highlight` with explode set to false and style set to form. */
export interface DocumentsSearchGetHighlightQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface DocumentsSearchGetOrderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsSearchGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsSearchGetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `facet` with explode set to true and style set to form. */
export interface DocumentsSearchGetFacetQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `scoringParameter` with explode set to true and style set to form. */
export interface DocumentsSearchGetScoringParameterQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface DocumentsSearchGetQueryParamProperties {
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
  facet?: DocumentsSearchGetFacetQueryParam;
  /** The OData $filter expression to apply to the search query. */
  $filter?: string;
  /**
   * The list of field names to use for hit highlights. Only searchable fields can
   * be used for hit highlighting.
   */
  highlight?: string[] | DocumentsSearchGetHighlightQueryParam;
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
  $orderby?: string[] | DocumentsSearchGetOrderbyQueryParam;
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
  scoringParameter?: DocumentsSearchGetScoringParameterQueryParam;
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
  searchFields?: string[] | DocumentsSearchGetSearchFieldsQueryParam;
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
  $select?: string[] | DocumentsSearchGetSelectQueryParam;
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

export interface DocumentsSearchGetQueryParam {
  queryParameters?: DocumentsSearchGetQueryParamProperties;
}

export interface DocumentsSearchGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsSearchGetHeaders;
}

export type DocumentsSearchGetParameters = DocumentsSearchGetQueryParam &
  DocumentsSearchGetHeaderParam &
  RequestParameters;

export interface DocumentsSearchPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsSearchPostBodyParam {
  /** The definition of the Search request. */
  body: SearchRequest;
}

export interface DocumentsSearchPostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsSearchPostHeaders;
}

export type DocumentsSearchPostParameters = DocumentsSearchPostHeaderParam &
  DocumentsSearchPostBodyParam &
  RequestParameters;

export interface DocumentsGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsGetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsGetQueryParamProperties {
  /**
   * List of field names to retrieve for the document; Any field not retrieved will
   * be missing from the returned document.
   */
  $select?: string[] | DocumentsGetSelectQueryParam;
}

export interface DocumentsGetQueryParam {
  queryParameters?: DocumentsGetQueryParamProperties;
}

export interface DocumentsGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsGetHeaders;
}

export type DocumentsGetParameters = DocumentsGetQueryParam &
  DocumentsGetHeaderParam &
  RequestParameters;

export interface DocumentsSuggestGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface DocumentsSuggestGetOrderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsSuggestGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface DocumentsSuggestGetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsSuggestGetQueryParamProperties {
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
  $orderby?: string[] | DocumentsSuggestGetOrderbyQueryParam;
  /**
   * The list of field names to search for the specified search text. Target fields
   * must be included in the specified suggester.
   */
  searchFields?: string[] | DocumentsSuggestGetSearchFieldsQueryParam;
  /**
   * The list of fields to retrieve. If unspecified, only the key field will be
   * included in the results.
   */
  $select?: string[] | DocumentsSuggestGetSelectQueryParam;
  /**
   * The number of suggestions to retrieve. The value must be a number between 1 and
   * 100. The default is 5.
   */
  $top?: number;
}

export interface DocumentsSuggestGetQueryParam {
  queryParameters: DocumentsSuggestGetQueryParamProperties;
}

export interface DocumentsSuggestGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsSuggestGetHeaders;
}

export type DocumentsSuggestGetParameters = DocumentsSuggestGetQueryParam &
  DocumentsSuggestGetHeaderParam &
  RequestParameters;

export interface DocumentsSuggestPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsSuggestPostBodyParam {
  /** The Suggest request. */
  body: SuggestRequest;
}

export interface DocumentsSuggestPostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsSuggestPostHeaders;
}

export type DocumentsSuggestPostParameters = DocumentsSuggestPostHeaderParam &
  DocumentsSuggestPostBodyParam &
  RequestParameters;

export interface DocumentsIndexHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsIndexBodyParam {
  /** The batch of index actions. */
  body: IndexBatch;
}

export interface DocumentsIndexHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsIndexHeaders;
}

export type DocumentsIndexParameters = DocumentsIndexHeaderParam &
  DocumentsIndexBodyParam &
  RequestParameters;

export interface DocumentsAutocompleteGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface DocumentsAutocompleteGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface DocumentsAutocompleteGetQueryParamProperties {
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
  searchFields?: string[] | DocumentsAutocompleteGetSearchFieldsQueryParam;
  /**
   * The number of auto-completed terms to retrieve. This must be a value between 1
   * and 100. The default is 5.
   */
  $top?: number;
}

export interface DocumentsAutocompleteGetQueryParam {
  queryParameters: DocumentsAutocompleteGetQueryParamProperties;
}

export interface DocumentsAutocompleteGetHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsAutocompleteGetHeaders;
}

export type DocumentsAutocompleteGetParameters = DocumentsAutocompleteGetQueryParam &
  DocumentsAutocompleteGetHeaderParam &
  RequestParameters;

export interface DocumentsAutocompletePostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DocumentsAutocompletePostBodyParam {
  /** The definition of the Autocomplete request. */
  body: AutocompleteRequest;
}

export interface DocumentsAutocompletePostHeaderParam {
  headers?: RawHttpHeadersInput & DocumentsAutocompletePostHeaders;
}

export type DocumentsAutocompletePostParameters = DocumentsAutocompletePostHeaderParam &
  DocumentsAutocompletePostBodyParam &
  RequestParameters;
