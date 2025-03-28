// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Common error response for all Azure Resource Manager APIs to return error
 * details for failed operations. (This also follows the OData error response
 * format.).
 */
export interface ErrorResponseOutput {
  /** The error object. */
  error?: ErrorDetailOutput;
}

/** The error detail. */
export interface ErrorDetailOutput {
  /** The error code. */
  code?: string;
  /** The error message. */
  message?: string;
  /** The error target. */
  target?: string;
  /** The error details. */
  details?: Array<ErrorDetailOutput>;
  /** The error additional info. */
  additionalInfo?: Array<ErrorAdditionalInfoOutput>;
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfoOutput {
  /** The additional info type. */
  type?: string;
  /** The additional info. */
  info?: Record<string, string>;
}

/** Response containing search results from an index. */
export interface SearchDocumentsResultOutput {
  /**
   * The total count of results found by the search operation, or null if the count
   * was not requested. If present, the count may be greater than the number of
   * results in this response. This can happen if you use the $top or $skip
   * parameters, or if the query can't return all the requested documents in a
   * single response.
   */
  "@odata.count"?: number;
  /**
   * A value indicating the percentage of the index that was included in the query,
   * or null if minimumCoverage was not specified in the request.
   */
  "@search.coverage"?: number;
  /**
   * The facet query results for the search operation, organized as a collection of
   * buckets for each faceted field; null if the query did not include any facet
   * expressions.
   */
  "@search.facets"?: Record<string, Array<FacetResultOutput>>;
  /**
   * The answers query results for the search operation; null if the answers query
   * parameter was not specified or set to 'none'.
   */
  "@search.answers"?: Array<QueryAnswerResultOutput>;
  /**
   * Continuation JSON payload returned when the query can't return all the
   * requested results in a single response. You can use this JSON along with
   */
  "@search.nextPageParameters"?: SearchRequestOutput;
  /** The sequence of results returned by the query. */
  value: Array<SearchResultOutput>;
  /**
   * Continuation URL returned when the query can't return all the requested results
   * in a single response. You can use this URL to formulate another GET or POST
   * Search request to get the next part of the search response. Make sure to use
   * the same verb (GET or POST) as the request that produced this response.
   */
  "@odata.nextLink"?: string;
  /**
   * Reason that a partial response was returned for a semantic ranking request.
   *
   * Possible values: "maxWaitExceeded", "capacityOverloaded", "transient"
   */
  "@search.semanticPartialResponseReason"?: SemanticErrorReasonOutput;
  /**
   * Type of partial response that was returned for a semantic ranking request.
   *
   * Possible values: "baseResults", "rerankedResults"
   */
  "@search.semanticPartialResponseType"?: SemanticSearchResultsTypeOutput;
}

/**
 * A single bucket of a facet query result. Reports the number of documents with a
 * field value falling within a particular range or having a particular value or
 * interval.
 */
export interface FacetResultOutput extends Record<string, any> {
  /**
   * The approximate count of documents falling within the bucket described by this
   * facet.
   */
  count?: number;
}

/**
 * An answer is a text passage extracted from the contents of the most relevant
 * documents that matched the query. Answers are extracted from the top search
 * results. Answer candidates are scored and the top answers are selected.
 */
export interface QueryAnswerResultOutput extends Record<string, any> {
  /**
   * The score value represents how relevant the answer is to the query relative to
   * other answers returned for the query.
   */
  score?: number;
  /** The key of the document the answer was extracted from. */
  key?: string;
  /** The text passage extracted from the document contents as the answer. */
  text?: string;
  /**
   * Same text passage as in the Text property with highlighted text phrases most
   * relevant to the query.
   */
  highlights?: string;
}

/**
 * Parameters for filtering, sorting, faceting, paging, and other search query
 * behaviors.
 */
export interface SearchRequestOutput {
  /**
   * A value that specifies whether to fetch the total count of results. Default is
   * false. Setting this value to true may have a performance impact. Note that the
   * count returned is an approximation.
   */
  count?: boolean;
  /**
   * The list of facet expressions to apply to the search query. Each facet
   * expression contains a field name, optionally followed by a comma-separated list
   * of name:value pairs.
   */
  facets?: string[];
  /** The OData $filter expression to apply to the search query. */
  filter?: string;
  /**
   * The comma-separated list of field names to use for hit highlights. Only
   * searchable fields can be used for hit highlighting.
   */
  highlight?: string;
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
   * The comma-separated list of OData $orderby expressions by which to sort the
   * results. Each expression can be either a field name or a call to either the
   * geo.distance() or the search.score() functions. Each expression can be followed
   * by asc to indicate ascending, or desc to indicate descending. The default is
   * ascending order. Ties will be broken by the match scores of documents. If no
   * $orderby is specified, the default sort order is descending by document match
   * score. There can be at most 32 $orderby clauses.
   */
  orderby?: string;
  /**
   * A value that specifies the syntax of the search query. The default is 'simple'.
   * Use 'full' if your query uses the Lucene query syntax.
   *
   * Possible values: "simple", "full", "semantic"
   */
  queryType?: QueryTypeOutput;
  /**
   * A value that specifies whether we want to calculate scoring statistics (such as
   * document frequency) globally for more consistent scoring, or locally, for lower
   * latency. The default is 'local'. Use 'global' to aggregate scoring statistics
   * globally before scoring. Using global scoring statistics can increase latency
   * of search queries.
   *
   * Possible values: "local", "global"
   */
  scoringStatistics?: ScoringStatisticsOutput;
  /**
   * A value to be used to create a sticky session, which can help getting more
   * consistent results. As long as the same sessionId is used, a best-effort
   * attempt will be made to target the same replica set. Be wary that reusing the
   * same sessionID values repeatedly can interfere with the load balancing of the
   * requests across replicas and adversely affect the performance of the search
   * service. The value used as sessionId cannot start with a '_' character.
   */
  sessionId?: string;
  /**
   * The list of parameter values to be used in scoring functions (for example,
   * referencePointParameter) using the format name-values. For example, if the
   * scoring profile defines a function with a parameter called 'mylocation' the
   * parameter string would be "mylocation--122.2,44.8" (without the quotes).
   */
  scoringParameters?: string[];
  /**
   * The name of a scoring profile to evaluate match scores for matching documents
   * in order to sort the results.
   */
  scoringProfile?: string;
  /**
   * A full-text search query expression; Use "*" or omit this parameter to match
   * all documents.
   */
  search?: string;
  /**
   * The comma-separated list of field names to which to scope the full-text search.
   * When using fielded search (fieldName:searchExpression) in a full Lucene query,
   * the field names of each fielded search expression take precedence over any
   * field names listed in this parameter.
   */
  searchFields?: string;
  /**
   * A value that specifies whether any or all of the search terms must be matched
   * in order to count the document as a match.
   *
   * Possible values: "any", "all"
   */
  searchMode?: SearchModeOutput;
  /**
   * The comma-separated list of fields to retrieve. If unspecified, all fields
   * marked as retrievable in the schema are included.
   */
  select?: string;
  /**
   * The number of search results to skip. This value cannot be greater than
   * 100,000. If you need to scan documents in sequence, but cannot use skip due to
   * this limitation, consider using orderby on a totally-ordered key and filter
   * with a range query instead.
   */
  skip?: number;
  /**
   * The number of search results to retrieve. This can be used in conjunction with
   * $skip to implement client-side paging of search results. If results are
   * truncated due to server-side paging, the response will include a continuation
   * token that can be used to issue another Search request for the next page of
   * results.
   */
  top?: number;
  /**
   * The name of a semantic configuration that will be used when processing
   * documents for queries of type semantic.
   */
  semanticConfiguration?: string;
  /**
   * Allows the user to choose whether a semantic call should fail completely
   * (default / current behavior), or to return partial results.
   *
   * Possible values: "partial", "fail"
   */
  semanticErrorHandling?: SemanticErrorModeOutput;
  /**
   * Allows the user to set an upper bound on the amount of time it takes for
   * semantic enrichment to finish processing before the request fails.
   */
  semanticMaxWaitInMilliseconds?: number;
  /**
   * Allows setting a separate search query that will be solely used for semantic
   * reranking, semantic captions and semantic answers. Is useful for scenarios
   * where there is a need to use different queries between the base retrieval and
   * ranking phase, and the L2 semantic phase.
   */
  semanticQuery?: string;
  /**
   * A value that specifies whether answers should be returned as part of the search
   * response.
   *
   * Possible values: "none", "extractive"
   */
  answers?: QueryAnswerTypeOutput;
  /**
   * A value that specifies whether captions should be returned as part of the
   * search response.
   *
   * Possible values: "none", "extractive"
   */
  captions?: QueryCaptionTypeOutput;
  /** The query parameters for vector and hybrid search queries. */
  vectorQueries?: Array<VectorQueryOutput>;
  /**
   * Determines whether or not filters are applied before or after the vector search
   * is performed. Default is 'preFilter' for new indexes.
   *
   * Possible values: "postFilter", "preFilter"
   */
  vectorFilterMode?: VectorFilterModeOutput;
}

/** The query parameters for vector and hybrid search queries. */
export interface VectorQueryOutputParent {
  /** Number of nearest neighbors to return as top hits. */
  k?: number;
  /**
   * Vector Fields of type Collection(Edm.Single) to be included in the vector
   * searched.
   */
  fields?: string;
  /**
   * When true, triggers an exhaustive k-nearest neighbor search across all vectors
   * within the vector index. Useful for scenarios where exact matches are critical,
   * such as determining ground truth values.
   */
  exhaustive?: boolean;
  /**
   * Oversampling factor. Minimum value is 1. It overrides the 'defaultOversampling'
   * parameter configured in the index definition. It can be set only when 'rerankWithOriginalVectors'
   * is true. This parameter is only permitted when a
   * compression method is used on the underlying vector field.
   */
  oversampling?: number;
  /**
   * Relative weight of the vector query when compared to other vector query and/or
   * the text query within the same search request. This value is used when
   * combining the results of multiple ranking lists produced by the different
   * vector queries and/or the results retrieved through the text query. The higher
   * the weight, the higher the documents that matched that query will be in the
   * final ranking. Default is 1.0 and the value needs to be a positive number
   * larger than zero.
   */
  weight?: number;
  kind: VectorQueryKindOutput;
}

/**
 * The query parameters to use for vector search when a raw vector value is
 * provided.
 */
export interface VectorizedQueryOutput extends VectorQueryOutputParent {
  /** The vector representation of a search query. */
  vector: number[];
  /** The kind of vector query being performed. */
  kind: "vector";
}

/**
 * The query parameters to use for vector search when a text value that needs to
 * be vectorized is provided.
 */
export interface VectorizableTextQueryOutput extends VectorQueryOutputParent {
  /** The text to be vectorized to perform a vector search query. */
  text: string;
  /** The kind of vector query being performed. */
  kind: "text";
}

/** Contains a document found by a search query, plus associated metadata. */
export interface SearchResultOutput extends Record<string, any> {
  /**
   * The relevance score of the document compared to other documents returned by the
   * query.
   */
  "@search.score": number;
  /**
   * The relevance score computed by the semantic ranker for the top search results.
   * Search results are sorted by the RerankerScore first and then by the Score.
   * RerankerScore is only returned for queries of type 'semantic'.
   */
  "@search.rerankerScore"?: number;
  /**
   * Text fragments from the document that indicate the matching search terms,
   * organized by each applicable field; null if hit highlighting was not enabled
   * for the query.
   */
  "@search.highlights"?: Record<string, string[]>;
  /**
   * Captions are the most representative passages from the document relatively to
   * the search query. They are often used as document summary. Captions are only
   * returned for queries of type 'semantic'.
   */
  "@search.captions"?: Array<QueryCaptionResultOutput>;
}

/**
 * Captions are the most representative passages from the document relatively to
 * the search query. They are often used as document summary. Captions are only
 * returned for queries of type `semantic`.
 */
export interface QueryCaptionResultOutput extends Record<string, any> {
  /**
   * A representative text passage extracted from the document most relevant to the
   * search query.
   */
  text?: string;
  /**
   * Same text passage as in the Text property with highlighted phrases most
   * relevant to the query.
   */
  highlights?: string;
}

/** A document retrieved via a document lookup operation. */
export interface LookupDocumentOutput extends Record<string, any> {}

/** Response containing suggestion query results from an index. */
export interface SuggestDocumentsResultOutput {
  /** The sequence of results returned by the query. */
  value: Array<SuggestResultOutput>;
  /**
   * A value indicating the percentage of the index that was included in the query,
   * or null if minimumCoverage was not set in the request.
   */
  "@search.coverage"?: number;
}

/**
 * A result containing a document found by a suggestion query, plus associated
 * metadata.
 */
export interface SuggestResultOutput extends Record<string, any> {
  /** The text of the suggestion result. */
  "@search.text": string;
}

/**
 * Response containing the status of operations for all documents in the indexing
 * request.
 */
export interface IndexDocumentsResultOutput {
  /** The list of status information for each document in the indexing request. */
  value: Array<IndexingResultOutput>;
}

/** Status of an indexing operation for a single document. */
export interface IndexingResultOutput {
  /** The key of a document that was in the indexing request. */
  key: string;
  /**
   * The error message explaining why the indexing operation failed for the document
   * identified by the key; null if indexing succeeded.
   */
  errorMessage?: string;
  /**
   * A value indicating whether the indexing operation succeeded for the document
   * identified by the key.
   */
  status: boolean;
  /**
   * The status code of the indexing operation. Possible values include: 200 for a
   * successful update or delete, 201 for successful document creation, 400 for a
   * malformed input document, 404 for document not found, 409 for a version
   * conflict, 422 when the index is temporarily unavailable, or 503 for when the
   * service is too busy.
   */
  statusCode: number;
}

/** The result of Autocomplete query. */
export interface AutocompleteResultOutput {
  /**
   * A value indicating the percentage of the index that was considered by the
   * autocomplete request, or null if minimumCoverage was not specified in the
   * request.
   */
  "@search.coverage"?: number;
  /** The list of returned Autocompleted items. */
  value: Array<AutocompleteItemOutput>;
}

/** The result of Autocomplete requests. */
export interface AutocompleteItemOutput {
  /** The completed term. */
  text: string;
  /** The query along with the completed term. */
  queryPlusText: string;
}

/** The query parameters for vector and hybrid search queries. */
export type VectorQueryOutput =
  | VectorQueryOutputParent
  | VectorizedQueryOutput
  | VectorizableTextQueryOutput;
/** Alias for QueryTypeOutput */
export type QueryTypeOutput = string;
/** Alias for SearchModeOutput */
export type SearchModeOutput = string;
/** Alias for ScoringStatisticsOutput */
export type ScoringStatisticsOutput = string;
/** Alias for SemanticErrorModeOutput */
export type SemanticErrorModeOutput = string;
/** Alias for QueryAnswerTypeOutput */
export type QueryAnswerTypeOutput = string;
/** Alias for QueryCaptionTypeOutput */
export type QueryCaptionTypeOutput = string;
/** Alias for VectorQueryKindOutput */
export type VectorQueryKindOutput = string;
/** Alias for VectorFilterModeOutput */
export type VectorFilterModeOutput = string;
/** Alias for SemanticErrorReasonOutput */
export type SemanticErrorReasonOutput = string;
/** Alias for SemanticSearchResultsTypeOutput */
export type SemanticSearchResultsTypeOutput = string;
