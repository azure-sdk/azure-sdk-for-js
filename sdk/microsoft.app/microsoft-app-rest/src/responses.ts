// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  CodeExecutionResponseOutput,
  PagedCodeExecutionFileOutput,
  CodeExecutionFilePropertiesOutput,
  CodeExecutionFileCollectionOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ExecuteCode200Response extends HttpResponse {
  status: "200";
  body: CodeExecutionResponseOutput;
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
export interface ListFileMetadata200Response extends HttpResponse {
  status: "200";
  body: PagedCodeExecutionFileOutput;
}

export interface ListFileMetadataDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListFileMetadataDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListFileMetadataDefaultHeaders;
}

/** The request has succeeded. */
export interface GetFileMetadata200Response extends HttpResponse {
  status: "200";
  body: { properties: CodeExecutionFilePropertiesOutput };
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

/** The request has succeeded. */
export interface UploadFile200Response extends HttpResponse {
  status: "200";
  body: CodeExecutionFileCollectionOutput;
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
