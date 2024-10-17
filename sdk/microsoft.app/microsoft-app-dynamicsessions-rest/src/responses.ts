// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  SessionCodeExecutionResponseOutput,
  PagedSessionResourceFileOutput,
  SessionResourceFileOutput,
} from "./outputModels.js";

export interface ExecuteCode202Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
  /** The id of this execution operation. */
  "operation-id"?: string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface ExecuteCode202Response extends HttpResponse {
  status: "202";
  body: SessionCodeExecutionResponseOutput;
  headers: RawHttpHeaders & ExecuteCode202Headers;
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

/** The final response for long-running executeCode operation */
export interface ExecuteCodeLogicalResponse extends HttpResponse {
  status: "200";
  body: SessionCodeExecutionResponseOutput;
}

export interface GetResult200Headers {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

/** The request has succeeded. */
export interface GetResult200Response extends HttpResponse {
  status: "200";
  body: SessionCodeExecutionResponseOutput;
  headers: RawHttpHeaders & GetResult200Headers;
}

export interface GetResultDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetResultDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetResultDefaultHeaders;
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

/** The request has succeeded. */
export interface GetFileContent200Response extends HttpResponse {
  status: "200";
  body: string;
}

export interface GetFileContentDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetFileContentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetFileContentDefaultHeaders;
}
