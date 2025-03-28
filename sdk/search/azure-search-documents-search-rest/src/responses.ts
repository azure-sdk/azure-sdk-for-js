// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type {
  ErrorResponseOutput,
  SearchDocumentsResultOutput,
  LookupDocumentOutput,
  SuggestDocumentsResultOutput,
  IndexDocumentsResultOutput,
  AutocompleteResultOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface Count200Response extends HttpResponse {
  status: "200";
  body: number;
}

export interface CountDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SearchGet200Response extends HttpResponse {
  status: "200";
  body: SearchDocumentsResultOutput;
}

export interface SearchGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SearchPost200Response extends HttpResponse {
  status: "200";
  body: SearchDocumentsResultOutput;
}

export interface SearchPostDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: LookupDocumentOutput;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SuggestGet200Response extends HttpResponse {
  status: "200";
  body: SuggestDocumentsResultOutput;
}

export interface SuggestGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface SuggestPost200Response extends HttpResponse {
  status: "200";
  body: SuggestDocumentsResultOutput;
}

export interface SuggestPostDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/**
 * Response containing the status of operations for all documents in the indexing
 * request.
 */
export interface Index200Response extends HttpResponse {
  status: "200";
  body: IndexDocumentsResultOutput;
}

/**
 * Response containing the status of operations for all documents in the indexing
 * request.
 */
export interface Index207Response extends HttpResponse {
  status: "207";
  body: IndexDocumentsResultOutput;
}

export interface IndexDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AutocompleteGet200Response extends HttpResponse {
  status: "200";
  body: AutocompleteResultOutput;
}

export interface AutocompleteGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface AutocompletePost200Response extends HttpResponse {
  status: "200";
  body: AutocompleteResultOutput;
}

export interface AutocompletePostDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
