// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { AccessToken, OS } from "./models.js";

export interface AccessTokensCreateOrReplaceHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensCreateOrReplaceBodyParam {
  /** The resource instance. */
  body: AccessToken;
}

export interface AccessTokensCreateOrReplaceHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensCreateOrReplaceHeaders;
}

export type AccessTokensCreateOrReplaceParameters = AccessTokensCreateOrReplaceHeaderParam &
  AccessTokensCreateOrReplaceBodyParam &
  RequestParameters;

export interface AccessTokensGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensGetHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensGetHeaders;
}

export type AccessTokensGetParameters = AccessTokensGetHeaderParam & RequestParameters;

export interface AccessTokensDeleteHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensDeleteHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensDeleteHeaders;
}

export type AccessTokensDeleteParameters = AccessTokensDeleteHeaderParam & RequestParameters;

export interface AccessTokensListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccessTokensListHeaderParam {
  headers?: RawHttpHeadersInput & AccessTokensListHeaders;
}

export type AccessTokensListParameters = AccessTokensListHeaderParam & RequestParameters;

export interface WorkspacesGetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface WorkspacesGetHeaderParam {
  headers?: RawHttpHeadersInput & WorkspacesGetHeaders;
}

export type WorkspacesGetParameters = WorkspacesGetHeaderParam & RequestParameters;

export interface WorkspacesGetBrowsersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface WorkspacesGetBrowsersQueryParamProperties {
  /**
   * The os provided by client for remote script runs.
   *
   * Possible values: "Linux", "Windows"
   */
  os?: OS;
}

export interface WorkspacesGetBrowsersQueryParam {
  queryParameters?: WorkspacesGetBrowsersQueryParamProperties;
}

export interface WorkspacesGetBrowsersHeaderParam {
  headers?: RawHttpHeadersInput & WorkspacesGetBrowsersHeaders;
}

export type WorkspacesGetBrowsersParameters = WorkspacesGetBrowsersQueryParam &
  WorkspacesGetBrowsersHeaderParam &
  RequestParameters;
