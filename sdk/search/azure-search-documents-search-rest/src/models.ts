// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * Parameters for filtering, sorting, faceting, paging, and other search query
 * behaviors.
 */
export interface SearchRequest {
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
  queryType?: QueryType;
  /**
   * A value that specifies whether we want to calculate scoring statistics (such as
   * document frequency) globally for more consistent scoring, or locally, for lower
   * latency. The default is 'local'. Use 'global' to aggregate scoring statistics
   * globally before scoring. Using global scoring statistics can increase latency
   * of search queries.
   *
   * Possible values: "local", "global"
   */
  scoringStatistics?: ScoringStatistics;
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
  searchMode?: SearchMode;
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
  semanticErrorHandling?: SemanticErrorMode;
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
  answers?: QueryAnswerType;
  /**
   * A value that specifies whether captions should be returned as part of the
   * search response.
   *
   * Possible values: "none", "extractive"
   */
  captions?: QueryCaptionType;
  /** The query parameters for vector and hybrid search queries. */
  vectorQueries?: Array<VectorQuery>;
  /**
   * Determines whether or not filters are applied before or after the vector search
   * is performed. Default is 'preFilter' for new indexes.
   *
   * Possible values: "postFilter", "preFilter"
   */
  vectorFilterMode?: VectorFilterMode;
}

/** The query parameters for vector and hybrid search queries. */
export interface VectorQueryParent {
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
  kind: VectorQueryKind;
}

/**
 * The query parameters to use for vector search when a raw vector value is
 * provided.
 */
export interface VectorizedQuery extends VectorQueryParent {
  /** The vector representation of a search query. */
  vector: number[];
  /** The kind of vector query being performed. */
  kind: "vector";
}

/**
 * The query parameters to use for vector search when a text value that needs to
 * be vectorized is provided.
 */
export interface VectorizableTextQuery extends VectorQueryParent {
  /** The text to be vectorized to perform a vector search query. */
  text: string;
  /** The kind of vector query being performed. */
  kind: "text";
}

/**
 * Parameters for filtering, sorting, fuzzy matching, and other suggestions query
 * behaviors.
 */
export interface SuggestRequest {
  /** An OData expression that filters the documents considered for suggestions. */
  filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the suggestion query.
   * Default is false. When set to true, the query will find suggestions even if
   * there's a substituted or missing character in the search text. While this
   * provides a better experience in some scenarios, it comes at a performance cost
   * as fuzzy suggestion searches are slower and consume more resources.
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
   * covered by a suggestion query in order for the query to be reported as a
   * success. This parameter can be useful for ensuring search availability even for
   * services with only one replica. The default is 80.
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
   * The search text to use to suggest documents. Must be at least 1 character, and
   * no more than 100 characters.
   */
  search: string;
  /**
   * The comma-separated list of field names to search for the specified search
   * text. Target fields must be included in the specified suggester.
   */
  searchFields?: string;
  /**
   * The comma-separated list of fields to retrieve. If unspecified, only the key
   * field will be included in the results.
   */
  select?: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /**
   * The number of suggestions to retrieve. This must be a value between 1 and 100.
   * The default is 5.
   */
  top?: number;
}

/** Contains a batch of document write actions to send to the index. */
export interface IndexBatch {
  /** The actions in the batch. */
  value: Array<IndexAction>;
}

/** Represents an index action that operates on a document. */
export interface IndexAction extends Record<string, unknown> {
  /**
   * The operation to perform on a document in an indexing batch.
   *
   * Possible values: "upload", "merge", "mergeOrUpload", "delete"
   */
  "@search.action"?: IndexActionType;
}

/** Parameters for fuzzy matching, and other autocomplete query behaviors. */
export interface AutocompleteRequest {
  /** The search text on which to base autocomplete results. */
  search: string;
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
  filter?: string;
  /**
   * A value indicating whether to use fuzzy matching for the autocomplete query.
   * Default is false. When set to true, the query will autocomplete terms even if
   * there's a substituted or missing character in the search text. While this
   * provides a better experience in some scenarios, it comes at a performance cost
   * as fuzzy autocomplete queries are slower and consume more resources.
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
   * The comma-separated list of field names to consider when querying for
   * auto-completed terms. Target fields must be included in the specified
   * suggester.
   */
  searchFields?: string;
  /**
   * The name of the suggester as specified in the suggesters collection that's part
   * of the index definition.
   */
  suggesterName: string;
  /**
   * The number of auto-completed terms to retrieve. This must be a value between 1
   * and 100. The default is 5.
   */
  top?: number;
}

/** The query parameters for vector and hybrid search queries. */
export type VectorQuery = VectorQueryParent | VectorizedQuery | VectorizableTextQuery;
/** Alias for QueryType */
export type QueryType = string;
/** Alias for SearchMode */
export type SearchMode = string;
/** Alias for ScoringStatistics */
export type ScoringStatistics = string;
/** Alias for SemanticErrorMode */
export type SemanticErrorMode = string;
/** Alias for QueryAnswerType */
export type QueryAnswerType = string;
/** Alias for QueryCaptionType */
export type QueryCaptionType = string;
/** Alias for VectorQueryKind */
export type VectorQueryKind = string;
/** Alias for VectorFilterMode */
export type VectorFilterMode = string;
/** Alias for IndexActionType */
export type IndexActionType = string;
/** Alias for AutocompleteMode */
export type AutocompleteMode = string;
