// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
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

export interface CountHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface CountHeaderParam {
  headers?: RawHttpHeadersInput & CountHeaders;
}

export type CountParameters = CountHeaderParam & RequestParameters;

export interface SearchGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `highlight` with explode set to false and style set to form. */
export interface SearchGetHighlightQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface SearchGetOrderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface SearchGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface SearchGetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `facet` with explode set to true and style set to form. */
export interface SearchGetFacetQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `scoringParameter` with explode set to true and style set to form. */
export interface SearchGetScoringParameterQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: true;
  /** Style of the value */
  style: "form";
}

export interface SearchGetQueryParamProperties {
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
  facet?: SearchGetFacetQueryParam;
  /** The OData $filter expression to apply to the search query. */
  $filter?: string;
  /**
   * The list of field names to use for hit highlights. Only searchable fields can
   * be used for hit highlighting.
   */
  highlight?: string[] | SearchGetHighlightQueryParam;
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
  $orderby?: string[] | SearchGetOrderbyQueryParam;
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
  scoringParameter?: SearchGetScoringParameterQueryParam;
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
  searchFields?: string[] | SearchGetSearchFieldsQueryParam;
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
  $select?: string[] | SearchGetSelectQueryParam;
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

export interface SearchGetQueryParam {
  queryParameters?: SearchGetQueryParamProperties;
}

export interface SearchGetHeaderParam {
  headers?: RawHttpHeadersInput & SearchGetHeaders;
}

export type SearchGetParameters = SearchGetQueryParam & SearchGetHeaderParam & RequestParameters;

export interface SearchPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SearchPostBodyParam {
  /** The definition of the Search request. */
  body: SearchRequest;
}

export interface SearchPostHeaderParam {
  headers?: RawHttpHeadersInput & SearchPostHeaders;
}

export type SearchPostParameters = SearchPostHeaderParam & SearchPostBodyParam & RequestParameters;

export interface GetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface GetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface GetQueryParamProperties {
  /**
   * List of field names to retrieve for the document; Any field not retrieved will
   * be missing from the returned document.
   */
  $select?: string[] | GetSelectQueryParam;
}

export interface GetQueryParam {
  queryParameters?: GetQueryParamProperties;
}

export interface GetHeaderParam {
  headers?: RawHttpHeadersInput & GetHeaders;
}

export type GetParameters = GetQueryParam & GetHeaderParam & RequestParameters;

export interface SuggestGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `$orderby` with explode set to false and style set to form. */
export interface SuggestGetOrderbyQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface SuggestGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

/** This is the wrapper object for the parameter `$select` with explode set to false and style set to form. */
export interface SuggestGetSelectQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface SuggestGetQueryParamProperties {
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
  $orderby?: string[] | SuggestGetOrderbyQueryParam;
  /**
   * The list of field names to search for the specified search text. Target fields
   * must be included in the specified suggester.
   */
  searchFields?: string[] | SuggestGetSearchFieldsQueryParam;
  /**
   * The list of fields to retrieve. If unspecified, only the key field will be
   * included in the results.
   */
  $select?: string[] | SuggestGetSelectQueryParam;
  /**
   * The number of suggestions to retrieve. The value must be a number between 1 and
   * 100. The default is 5.
   */
  $top?: number;
}

export interface SuggestGetQueryParam {
  queryParameters: SuggestGetQueryParamProperties;
}

export interface SuggestGetHeaderParam {
  headers?: RawHttpHeadersInput & SuggestGetHeaders;
}

export type SuggestGetParameters = SuggestGetQueryParam & SuggestGetHeaderParam & RequestParameters;

export interface SuggestPostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SuggestPostBodyParam {
  /** The Suggest request. */
  body: SuggestRequest;
}

export interface SuggestPostHeaderParam {
  headers?: RawHttpHeadersInput & SuggestPostHeaders;
}

export type SuggestPostParameters = SuggestPostHeaderParam &
  SuggestPostBodyParam &
  RequestParameters;

export interface IndexHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface IndexBodyParam {
  /** The batch of index actions. */
  body: IndexBatch;
}

export interface IndexHeaderParam {
  headers?: RawHttpHeadersInput & IndexHeaders;
}

export type IndexParameters = IndexHeaderParam & IndexBodyParam & RequestParameters;

export interface AutocompleteGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `searchFields` with explode set to false and style set to form. */
export interface AutocompleteGetSearchFieldsQueryParam {
  /** Value of the parameter */
  value: string[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface AutocompleteGetQueryParamProperties {
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
  searchFields?: string[] | AutocompleteGetSearchFieldsQueryParam;
  /**
   * The number of auto-completed terms to retrieve. This must be a value between 1
   * and 100. The default is 5.
   */
  $top?: number;
}

export interface AutocompleteGetQueryParam {
  queryParameters: AutocompleteGetQueryParamProperties;
}

export interface AutocompleteGetHeaderParam {
  headers?: RawHttpHeadersInput & AutocompleteGetHeaders;
}

export type AutocompleteGetParameters = AutocompleteGetQueryParam &
  AutocompleteGetHeaderParam &
  RequestParameters;

export interface AutocompletePostHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AutocompletePostBodyParam {
  /** The definition of the Autocomplete request. */
  body: AutocompleteRequest;
}

export interface AutocompletePostHeaderParam {
  headers?: RawHttpHeadersInput & AutocompletePostHeaders;
}

export type AutocompletePostParameters = AutocompletePostHeaderParam &
  AutocompletePostBodyParam &
  RequestParameters;
