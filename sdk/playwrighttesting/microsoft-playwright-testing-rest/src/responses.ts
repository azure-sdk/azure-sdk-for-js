// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type { AccessTokenOutput, PagedAccessTokenOutput, AccountOutput } from "./outputModels.js";

export interface AccessTokensCreateOrReplace200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccessTokensCreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: AccessTokenOutput;
  headers: RawHttpHeaders & AccessTokensCreateOrReplace200Headers;
}

export interface AccessTokensCreateOrReplace201Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AccessTokensCreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: AccessTokenOutput;
  headers: RawHttpHeaders & AccessTokensCreateOrReplace201Headers;
}

export interface AccessTokensCreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccessTokensCreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccessTokensCreateOrReplaceDefaultHeaders;
}

export interface AccessTokensGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccessTokensGet200Response extends HttpResponse {
  status: "200";
  body: AccessTokenOutput;
  headers: RawHttpHeaders & AccessTokensGet200Headers;
}

export interface AccessTokensGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccessTokensGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccessTokensGetDefaultHeaders;
}

export interface AccessTokensDelete204Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AccessTokensDelete204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & AccessTokensDelete204Headers;
}

export interface AccessTokensDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccessTokensDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccessTokensDeleteDefaultHeaders;
}

export interface AccessTokensList200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccessTokensList200Response extends HttpResponse {
  status: "200";
  body: PagedAccessTokenOutput;
  headers: RawHttpHeaders & AccessTokensList200Headers;
}

export interface AccessTokensListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccessTokensListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccessTokensListDefaultHeaders;
}

export interface AccountsGet200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGet200Response extends HttpResponse {
  status: "200";
  body: AccountOutput;
  headers: RawHttpHeaders & AccountsGet200Headers;
}

export interface AccountsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetDefaultHeaders;
}

export interface AccountsGetBrowsers302Headers {
  /** The redirect target URL to run test on remote browsers. */
  location: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** Redirection */
export interface AccountsGetBrowsers302Response extends HttpResponse {
  status: "302";
  headers: RawHttpHeaders & AccountsGetBrowsers302Headers;
}

export interface AccountsGetBrowsersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetBrowsersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetBrowsersDefaultHeaders;
}
