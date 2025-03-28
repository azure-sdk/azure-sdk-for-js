// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  CountParameters,
  SearchGetParameters,
  SearchPostParameters,
  GetParameters,
  SuggestGetParameters,
  SuggestPostParameters,
  IndexParameters,
  AutocompleteGetParameters,
  AutocompletePostParameters,
} from "./parameters.js";
import type {
  Count200Response,
  CountDefaultResponse,
  SearchGet200Response,
  SearchGetDefaultResponse,
  SearchPost200Response,
  SearchPostDefaultResponse,
  Get200Response,
  GetDefaultResponse,
  SuggestGet200Response,
  SuggestGetDefaultResponse,
  SuggestPost200Response,
  SuggestPostDefaultResponse,
  Index200Response,
  Index207Response,
  IndexDefaultResponse,
  AutocompleteGet200Response,
  AutocompleteGetDefaultResponse,
  AutocompletePost200Response,
  AutocompletePostDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Count {
  /** Queries the number of documents in the index. */
  get(options?: CountParameters): StreamableMethod<Count200Response | CountDefaultResponse>;
}

export interface SearchGet {
  /** Searches for documents in the index. */
  get(
    options?: SearchGetParameters,
  ): StreamableMethod<SearchGet200Response | SearchGetDefaultResponse>;
}

export interface SearchPost {
  /** Searches for documents in the index. */
  post(
    options: SearchPostParameters,
  ): StreamableMethod<SearchPost200Response | SearchPostDefaultResponse>;
}

export interface Get {
  /** Retrieves a document from the index. */
  get(options?: GetParameters): StreamableMethod<Get200Response | GetDefaultResponse>;
}

export interface SuggestGet {
  /** Suggests documents in the index that match the given partial query text. */
  get(
    options: SuggestGetParameters,
  ): StreamableMethod<SuggestGet200Response | SuggestGetDefaultResponse>;
}

export interface SuggestPost {
  /** Suggests documents in the index that match the given partial query text. */
  post(
    options: SuggestPostParameters,
  ): StreamableMethod<SuggestPost200Response | SuggestPostDefaultResponse>;
}

export interface Index {
  /** Sends a batch of document write actions to the index. */
  post(
    options: IndexParameters,
  ): StreamableMethod<Index200Response | Index207Response | IndexDefaultResponse>;
}

export interface AutocompleteGet {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  get(
    options: AutocompleteGetParameters,
  ): StreamableMethod<AutocompleteGet200Response | AutocompleteGetDefaultResponse>;
}

export interface AutocompletePost {
  /**
   * Autocompletes incomplete query terms based on input text and matching terms in
   * the index.
   */
  post(
    options: AutocompletePostParameters,
  ): StreamableMethod<AutocompletePost200Response | AutocompletePostDefaultResponse>;
}

export interface Routes {
  /** Resource for '/indexes('\{indexName\}')/docs/$count' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/$count", indexName: string): Count;
  /** Resource for '/indexes('\{indexName\}')/docs' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs", indexName: string): SearchGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.search' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.post.search", indexName: string): SearchPost;
  /** Resource for '/indexes('\{indexName\}')/docs('\{key\}')' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs('{key}')", key: string, indexName: string): Get;
  /** Resource for '/indexes('\{indexName\}')/docs/search.suggest' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/search.suggest", indexName: string): SuggestGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.suggest' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.post.suggest", indexName: string): SuggestPost;
  /** Resource for '/indexes('\{indexName\}')/docs/search.index' has methods for the following verbs: post */
  (path: "/indexes('{indexName}')/docs/search.index", indexName: string): Index;
  /** Resource for '/indexes('\{indexName\}')/docs/search.autocomplete' has methods for the following verbs: get */
  (path: "/indexes('{indexName}')/docs/search.autocomplete", indexName: string): AutocompleteGet;
  /** Resource for '/indexes('\{indexName\}')/docs/search.post.autocomplete' has methods for the following verbs: post */
  (
    path: "/indexes('{indexName}')/docs/search.post.autocomplete",
    indexName: string,
  ): AutocompletePost;
}

export type SearchClient = Client & {
  path: Routes;
};
