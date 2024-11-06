// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import { Index, Prompt } from "./models.js";

export type IndexesGetParameters = RequestParameters;

export interface IndexesCreateOrUpdateBodyParam {
  /** Properties of an Index Version. */
  body: Index;
}

export type IndexesCreateOrUpdateParameters = IndexesCreateOrUpdateBodyParam &
  RequestParameters;

export interface IndexesListQueryParamProperties {
  /** View type for including/excluding (for example) archived entities. */
  listViewType: string;
  /** Ordering of list: Please choose orderby value from ['createdAt', 'lastModifiedAt']. */
  orderby?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2. */
  tags?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface IndexesListQueryParam {
  queryParameters: IndexesListQueryParamProperties;
}

export type IndexesListParameters = IndexesListQueryParam & RequestParameters;
export type IndexesGetLatestParameters = RequestParameters;
export type IndexesGetNextVersionParameters = RequestParameters;

export interface IndexesListLatestQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface IndexesListLatestQueryParam {
  queryParameters?: IndexesListLatestQueryParamProperties;
}

export type IndexesListLatestParameters = IndexesListLatestQueryParam &
  RequestParameters;
export type PromptsGetParameters = RequestParameters;

export interface PromptsCreateOrUpdateBodyParam {
  /** Properties of a Prompt Version. */
  body: Prompt;
}

export type PromptsCreateOrUpdateParameters = PromptsCreateOrUpdateBodyParam &
  RequestParameters;

export interface PromptsListQueryParamProperties {
  /** View type for including/excluding (for example) archived entities. */
  listViewType: string;
  /** Ordering of list: Please choose orderby value from ['createdAt', 'lastModifiedAt']. */
  orderby?: string;
  /** Comma-separated list of tag names (and optionally values). Example: tag1,tag2=value2. */
  tags?: string;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface PromptsListQueryParam {
  queryParameters: PromptsListQueryParamProperties;
}

export type PromptsListParameters = PromptsListQueryParam & RequestParameters;
export type PromptsGetLatestParameters = RequestParameters;
export type PromptsGetNextVersionParameters = RequestParameters;

export interface PromptsListLatestQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface PromptsListLatestQueryParam {
  queryParameters?: PromptsListLatestQueryParamProperties;
}

export type PromptsListLatestParameters = PromptsListLatestQueryParam &
  RequestParameters;
