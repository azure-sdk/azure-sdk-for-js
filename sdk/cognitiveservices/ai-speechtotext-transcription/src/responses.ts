// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  TranscriptionJobOutput,
  TranscriptionJobListOutput,
  TranscriptionFileListOutput,
  TranscribeResultOutput,
} from "./outputModels.js";

/** The request has succeeded and a new resource has been created as a result. */
export interface SubmitTranscription201Response extends HttpResponse {
  status: "201";
  body: TranscriptionJobOutput;
}

export interface SubmitTranscriptionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SubmitTranscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SubmitTranscriptionDefaultHeaders;
}

/** The request has succeeded. */
export interface GetTranscription200Response extends HttpResponse {
  status: "200";
  body: TranscriptionJobOutput;
}

export interface GetTranscriptionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetTranscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetTranscriptionDefaultHeaders;
}

/** The request has succeeded. */
export interface PatchTranscription200Response extends HttpResponse {
  status: "200";
  body: TranscriptionJobOutput;
}

export interface PatchTranscriptionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface PatchTranscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & PatchTranscriptionDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTranscription204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTranscriptionDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteTranscriptionDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteTranscriptionDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTranscriptions200Response extends HttpResponse {
  status: "200";
  body: TranscriptionJobListOutput;
}

export interface ListTranscriptionsDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTranscriptionsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTranscriptionsDefaultHeaders;
}

/** The request has succeeded. */
export interface ListTranscriptionFiles200Response extends HttpResponse {
  status: "200";
  body: TranscriptionFileListOutput;
}

export interface ListTranscriptionFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListTranscriptionFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListTranscriptionFilesDefaultHeaders;
}

/** The request has succeeded. */
export interface Transcribe200Response extends HttpResponse {
  status: "200";
  body: TranscribeResultOutput;
}

export interface TranscribeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TranscribeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TranscribeDefaultHeaders;
}
