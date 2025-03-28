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
  /** Debug information that applies to the search results as a whole. */
  readonly "@search.debug"?: DebugInfoOutput;
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
  /**
   * Type of query rewrite that was used to retrieve documents.
   *
   * Possible values: "originalQueryOnly"
   */
  readonly "@search.semanticQueryRewritesResultType"?: SemanticQueryRewritesResultTypeOutput;
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
  /**
   * The nested facet query results for the search operation, organized as a
   * collection of buckets for each faceted field; null if the query did not contain
   * any nested facets.
   */
  readonly "@search.facets"?: Record<string, Array<FacetResultOutput>>;
  /** The resulting total sum for the facet when a sum metric is requested. */
  readonly sum?: number;
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
 * Contains debugging information that can be used to further explore your search
 * results.
 */
export interface DebugInfoOutput {
  /** Contains debugging information specific to query rewrites. */
  readonly queryRewrites?: QueryRewritesDebugInfoOutput;
}

/** Contains debugging information specific to query rewrites. */
export interface QueryRewritesDebugInfoOutput {
  /** List of query rewrites generated for the text query. */
  readonly text?: QueryRewritesValuesDebugInfoOutput;
  /** List of query rewrites generated for the vectorizable text queries. */
  readonly vectors?: Array<QueryRewritesValuesDebugInfoOutput>;
}

/** Contains debugging information specific to query rewrites. */
export interface QueryRewritesValuesDebugInfoOutput {
  /**
   * The input text to the generative query rewriting model. There may be cases
   * where the user query and the input to the generative model are not identical.
   */
  readonly inputQuery?: string;
  /** List of query rewrites. */
  readonly rewrites?: string[];
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
   * Enables a debugging tool that can be used to further explore your reranked
   * results.
   *
   * Possible values: "disabled", "semantic", "vector", "queryRewrites", "all"
   */
  debug?: QueryDebugModeOutput;
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
   * A value that specifies the language of the search query.
   *
   * Possible values: "none", "en-us", "en-gb", "en-in", "en-ca", "en-au", "fr-fr", "fr-ca", "de-de", "es-es", "es-mx", "zh-cn", "zh-tw", "pt-br", "pt-pt", "it-it", "ja-jp", "ko-kr", "ru-ru", "cs-cz", "nl-be", "nl-nl", "hu-hu", "pl-pl", "sv-se", "tr-tr", "hi-in", "ar-sa", "ar-eg", "ar-ma", "ar-kw", "ar-jo", "da-dk", "no-no", "bg-bg", "hr-hr", "hr-ba", "ms-my", "ms-bn", "sl-sl", "ta-in", "vi-vn", "el-gr", "ro-ro", "is-is", "id-id", "th-th", "lt-lt", "uk-ua", "lv-lv", "et-ee", "ca-es", "fi-fi", "sr-ba", "sr-me", "sr-rs", "sk-sk", "nb-no", "hy-am", "bn-in", "eu-es", "gl-es", "gu-in", "he-il", "ga-ie", "kn-in", "ml-in", "mr-in", "fa-ae", "pa-in", "te-in", "ur-pk"
   */
  queryLanguage?: QueryLanguageOutput;
  /**
   * A value that specified the type of the speller to use to spell-correct
   * individual search query terms.
   *
   * Possible values: "none", "lexicon"
   */
  speller?: QuerySpellerTypeOutput;
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
  /**
   * A value that specifies whether query rewrites should be generated to augment
   * the search query.
   *
   * Possible values: "none", "generative"
   */
  queryRewrites?: QueryRewritesTypeOutput;
  /** The comma-separated list of field names used for semantic ranking. */
  semanticFields?: string;
  /** The query parameters for vector and hybrid search queries. */
  vectorQueries?: Array<VectorQueryOutput>;
  /**
   * Determines whether or not filters are applied before or after the vector search
   * is performed. Default is 'preFilter' for new indexes.
   *
   * Possible values: "postFilter", "preFilter"
   */
  vectorFilterMode?: VectorFilterModeOutput;
  /** The query parameters to configure hybrid search behaviors. */
  hybridSearch?: HybridSearchOutput;
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
  /** The threshold used for vector queries. Note this can only be set if all 'fields' use the same similarity metric. */
  threshold?: VectorThresholdOutput;
  /**
   * The OData filter expression to apply to this specific vector query. If no
   * filter expression is defined at the vector level, the expression defined in the
   * top level filter parameter is used instead.
   */
  filterOverride?: string;
  kind: VectorQueryKindOutput;
}

/** The threshold used for vector queries. */
export interface VectorThresholdOutputParent {
  kind: VectorThresholdKindOutput;
}

/**
 * The results of the vector query will be filtered based on the vector similarity
 * metric. Note this is the canonical definition of similarity metric, not the 'distance'
 * version. The threshold direction (larger or smaller) will be chosen
 * automatically according to the metric used by the field.
 */
export interface VectorSimilarityThresholdOutput extends VectorThresholdOutputParent {
  /**
   * The threshold will filter based on the similarity metric value. Note this is
   * the canonical definition of similarity metric, not the 'distance' version. The
   * threshold direction (larger or smaller) will be chosen automatically according
   * to the metric used by the field.
   */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "vectorSimilarity";
}

/**
 * The results of the vector query will filter based on the '@search.score' value.
 * Note this is the @search.score returned as part of the search response. The
 * threshold direction will be chosen for higher @search.score.
 */
export interface SearchScoreThresholdOutput extends VectorThresholdOutputParent {
  /**
   * The threshold will filter based on the '@search.score' value. Note this is the
   * @search.score returned as part of the search response. The threshold direction
   * will be chosen for higher @search.score.
   */
  value: number;
  /** The kind of threshold used to filter vector queries */
  kind: "searchScore";
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
  /**
   * Can be configured to let a generative model rewrite the query before sending it
   * to be vectorized.
   *
   * Possible values: "none", "generative"
   */
  queryRewrites?: QueryRewritesTypeOutput;
  /** The kind of vector query being performed. */
  kind: "text";
}

/**
 * The query parameters to use for vector search when an url that represents an
 * image value that needs to be vectorized is provided.
 */
export interface VectorizableImageUrlQueryOutput extends VectorQueryOutputParent {
  /** The URL of an image to be vectorized to perform a vector search query. */
  url?: string;
  /** The kind of vector query being performed. */
  kind: "imageUrl";
}

/**
 * The query parameters to use for vector search when a base 64 encoded binary of
 * an image that needs to be vectorized is provided.
 */
export interface VectorizableImageBinaryQueryOutput extends VectorQueryOutputParent {
  /**
   * The base 64 encoded binary of an image to be vectorized to perform a vector
   * search query.
   */
  base64Image?: string;
  /** The kind of vector query being performed. */
  kind: "imageBinary";
}

/** TThe query parameters to configure hybrid search behaviors. */
export interface HybridSearchOutput {
  /**
   * Determines the maximum number of documents to be retrieved by the text query
   * portion of a hybrid search request. Those documents will be combined with the
   * documents matching the vector queries to produce a single final list of
   * results. Choosing a larger maxTextRecallSize value will allow retrieving and
   * paging through more documents (using the top and skip parameters), at the cost
   * of higher resource utilization and higher latency. The value needs to be
   * between 1 and 10,000. Default is 1000.
   */
  maxTextRecallSize?: number;
  /**
   * Determines whether the count and facets should includes all documents that
   * matched the search query, or only the documents that are retrieved within the 'maxTextRecallSize' window.
   *
   * Possible values: "countRetrievableResults", "countAllResults"
   */
  countAndFacetMode?: HybridCountAndFacetModeOutput;
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
  /**
   * Contains debugging information that can be used to further explore your search
   * results.
   */
  readonly "@search.documentDebugInfo"?: Array<DocumentDebugInfoOutput>;
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

/**
 * Contains debugging information that can be used to further explore your search
 * results.
 */
export interface DocumentDebugInfoOutput {
  /** Contains debugging information specific to semantic ranking requests. */
  readonly semantic?: SemanticDebugInfoOutput;
  /** Contains debugging information specific to vector and hybrid search. */
  readonly vectors?: VectorsDebugInfoOutput;
}

/** Contains debugging information specific to semantic ranking requests. */
export interface SemanticDebugInfoOutput {
  /**
   * The title field that was sent to the semantic enrichment process, as well as
   * how it was used
   */
  readonly titleField?: QueryResultDocumentSemanticFieldOutput;
  /**
   * The content fields that were sent to the semantic enrichment process, as well
   * as how they were used
   */
  readonly contentFields?: Array<QueryResultDocumentSemanticFieldOutput>;
  /**
   * The keyword fields that were sent to the semantic enrichment process, as well
   * as how they were used
   */
  readonly keywordFields?: Array<QueryResultDocumentSemanticFieldOutput>;
  /** The raw concatenated strings that were sent to the semantic enrichment process. */
  readonly rerankerInput?: QueryResultDocumentRerankerInputOutput;
}

/**
 * Description of fields that were sent to the semantic enrichment process, as
 * well as how they were used
 */
export interface QueryResultDocumentSemanticFieldOutput {
  /** The name of the field that was sent to the semantic enrichment process */
  readonly name?: string;
  /**
   * The way the field was used for the semantic enrichment process (fully used,
   * partially used, or unused)
   *
   * Possible values: "used", "unused", "partial"
   */
  readonly state?: SemanticFieldStateOutput;
}

/** The raw concatenated strings that were sent to the semantic enrichment process. */
export interface QueryResultDocumentRerankerInputOutput {
  /** The raw string for the title field that was used for semantic enrichment. */
  readonly title?: string;
  /**
   * The raw concatenated strings for the content fields that were used for semantic
   * enrichment.
   */
  readonly content?: string;
  /**
   * The raw concatenated strings for the keyword fields that were used for semantic
   * enrichment.
   */
  readonly keywords?: string;
}

/** "Contains debugging information specific to vector and hybrid search.") */
export interface VectorsDebugInfoOutput {
  /**
   * The breakdown of subscores of the document prior to the chosen result set
   * fusion/combination method such as RRF.
   */
  readonly subscores?: QueryResultDocumentSubscoresOutput;
}

/**
 * The breakdown of subscores between the text and vector query components of the
 * search query for this document. Each vector query is shown as a separate object
 * in the same order they were received.
 */
export interface QueryResultDocumentSubscoresOutput {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly text?: TextResultOutput;
  /** The vector similarity and @search.score values for each vector query. */
  readonly vectors?: Record<string, SingleVectorFieldResultOutput>[];
  /** The BM25 or Classic score for the text portion of the query. */
  readonly documentBoost?: number;
}

/** The BM25 or Classic score for the text portion of the query. */
export interface TextResultOutput {
  /** The BM25 or Classic score for the text portion of the query. */
  readonly searchScore?: number;
}

/**
 * A single vector field result. Both @search.score and vector similarity values
 * are returned. Vector similarity is related to @search.score by an equation.
 */
export interface SingleVectorFieldResultOutput {
  /**
   * The @search.score value that is calculated from the vector similarity score.
   * This is the score that's visible in a pure single-field single-vector query.
   */
  readonly searchScore?: number;
  /**
   * The vector similarity score for this document. Note this is the canonical
   * definition of similarity metric, not the 'distance' version. For example,
   * cosine similarity instead of cosine distance.
   */
  readonly vectorSimilarity?: number;
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
  | VectorizableTextQueryOutput
  | VectorizableImageUrlQueryOutput
  | VectorizableImageBinaryQueryOutput;
/** The threshold used for vector queries. */
export type VectorThresholdOutput =
  | VectorThresholdOutputParent
  | VectorSimilarityThresholdOutput
  | SearchScoreThresholdOutput;
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
/** Alias for QueryRewritesTypeOutput */
export type QueryRewritesTypeOutput = string;
/** Alias for QueryDebugModeOutput */
export type QueryDebugModeOutput = string;
/** Alias for QueryLanguageOutput */
export type QueryLanguageOutput = string;
/** Alias for QuerySpellerTypeOutput */
export type QuerySpellerTypeOutput = string;
/** Alias for VectorThresholdKindOutput */
export type VectorThresholdKindOutput = string;
/** Alias for VectorQueryKindOutput */
export type VectorQueryKindOutput = string;
/** Alias for VectorFilterModeOutput */
export type VectorFilterModeOutput = string;
/** Alias for HybridCountAndFacetModeOutput */
export type HybridCountAndFacetModeOutput = string;
/** Alias for SemanticFieldStateOutput */
export type SemanticFieldStateOutput = string;
/** Alias for SemanticErrorReasonOutput */
export type SemanticErrorReasonOutput = string;
/** Alias for SemanticSearchResultsTypeOutput */
export type SemanticSearchResultsTypeOutput = string;
/** Alias for SemanticQueryRewritesResultTypeOutput */
export type SemanticQueryRewritesResultTypeOutput = string;
