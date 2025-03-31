// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  IndexOutput,
  PagedIndexOutput,
  VersionInfoOutput,
  PromptOutput,
  PagedPromptOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface IndexesGet200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface IndexesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: IndexOutput;
}

export interface IndexesCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesCreateOrUpdateDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesList200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesGetLatest200Response extends HttpResponse {
  status: "200";
  body: IndexOutput;
}

export interface IndexesGetLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesGetNextVersion200Response extends HttpResponse {
  status: "200";
  body: VersionInfoOutput;
}

export interface IndexesGetNextVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesGetNextVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesGetNextVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface IndexesListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedIndexOutput;
}

export interface IndexesListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface IndexesListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & IndexesListLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsGet200Response extends HttpResponse {
  status: "200";
  body: PromptOutput;
}

export interface PromptsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsGetDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: PromptOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface PromptsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: PromptOutput;
}

export interface PromptsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsCreateOrUpdateDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsList200Response extends HttpResponse {
  status: "200";
  body: PagedPromptOutput;
}

export interface PromptsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsListDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsGetLatest200Response extends HttpResponse {
  status: "200";
  body: PromptOutput;
}

export interface PromptsGetLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsGetLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsGetLatestDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsGetNextVersion200Response extends HttpResponse {
  status: "200";
  body: VersionInfoOutput;
}

export interface PromptsGetNextVersionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsGetNextVersionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsGetNextVersionDefaultHeaders;
}

/** The request has succeeded. */
export interface PromptsListLatest200Response extends HttpResponse {
  status: "200";
  body: PagedPromptOutput;
}

export interface PromptsListLatestDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PromptsListLatestDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PromptsListLatestDefaultHeaders;
}
