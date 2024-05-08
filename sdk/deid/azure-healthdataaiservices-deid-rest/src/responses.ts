// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  JobOutput,
  PagedJobOutput,
  PagedFileOutput,
  DeidResponseOutput,
} from "./outputModels.js";

export interface Create200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded. */
export interface Create200Response extends HttpResponse {
  status: "200";
  body: JobOutput;
  headers: RawHttpHeaders & Create200Headers;
}

export interface Create201Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface Create201Response extends HttpResponse {
  status: "201";
  body: JobOutput;
  headers: RawHttpHeaders & Create201Headers;
}

export interface CreateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CreateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CreateDefaultHeaders;
}

/** The final response for long-running create operation */
export interface CreateLogicalResponse extends HttpResponse {
  status: "200";
  body: JobOutput;
}

export interface Get200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface Get200Response extends HttpResponse {
  status: "200";
  body: JobOutput;
  headers: RawHttpHeaders & Get200Headers;
}

export interface GetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface GetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & GetDefaultHeaders;
}

export interface List200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface List200Response extends HttpResponse {
  status: "200";
  body: PagedJobOutput;
  headers: RawHttpHeaders & List200Headers;
}

export interface ListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListDefaultHeaders;
}

export interface ListFiles200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface ListFiles200Response extends HttpResponse {
  status: "200";
  body: PagedFileOutput;
  headers: RawHttpHeaders & ListFiles200Headers;
}

export interface ListFilesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListFilesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListFilesDefaultHeaders;
}

export interface Cancel200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface Cancel200Response extends HttpResponse {
  status: "200";
  body: JobOutput;
  headers: RawHttpHeaders & Cancel200Headers;
}

export interface CancelDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CancelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CancelDefaultHeaders;
}

export interface Delete204Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface Delete204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & Delete204Headers;
}

export interface DeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeleteDefaultHeaders;
}

/** The request has succeeded. */
export interface Deid200Response extends HttpResponse {
  status: "200";
  body: DeidResponseOutput;
}

export interface DeidDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeidDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeidDefaultHeaders;
}
