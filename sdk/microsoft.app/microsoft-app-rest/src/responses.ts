// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  SessionCodeExecutionResultOutput,
  PagedSessionResourceFileOutput,
  SessionResourceFileOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ExecuteCode200Response extends HttpResponse {
  status: "200";
  body: SessionCodeExecutionResultOutput;
}

export interface ExecuteCodeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ExecuteCodeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ExecuteCodeDefaultHeaders;
}

/** The request has succeeded. */
export interface GetCodeExecutionResult200Response extends HttpResponse {
  status: "200";
  body: SessionCodeExecutionResultOutput;
}

export interface GetCodeExecutionResultDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetCodeExecutionResultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetCodeExecutionResultDefaultHeaders;
}

/** The request has succeeded. */
export interface ListFilesMetadata200Response extends HttpResponse {
  status: "200";
  body: PagedSessionResourceFileOutput;
}

export interface ListFilesMetadataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListFilesMetadataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListFilesMetadataDefaultHeaders;
}

/** The request has succeeded. */
export interface GetFileMetadata200Response extends HttpResponse {
  status: "200";
  body: SessionResourceFileOutput;
}

export interface GetFileMetadataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetFileMetadataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetFileMetadataDefaultHeaders;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteFile204Response extends HttpResponse {
  status: "204";
}

export interface DeleteFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteFileDefaultHeaders;
}

/** The request has succeeded. */
export interface DownloadFile200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface DownloadFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DownloadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DownloadFileDefaultHeaders;
}

/** The request has succeeded. */
export interface UploadFile200Response extends HttpResponse {
  status: "200";
  body: SessionResourceFileOutput;
}

export interface UploadFileDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface UploadFileDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & UploadFileDefaultHeaders;
}
