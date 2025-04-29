// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { AccessToken, OS } from "./models.js";

export interface CreateOrReplaceHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface CreateOrReplaceBodyParam {
  /** The resource instance. */
  body: AccessToken;
}

export interface CreateOrReplaceHeaderParam {
  headers?: RawHttpHeadersInput & CreateOrReplaceHeaders;
}

export type CreateOrReplaceParameters = CreateOrReplaceHeaderParam &
  CreateOrReplaceBodyParam &
  RequestParameters;

export interface GetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetHeaderParam {
  headers?: RawHttpHeadersInput & GetHeaders;
}

export type GetParameters = GetHeaderParam & RequestParameters;

export interface DeleteHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeleteHeaderParam {
  headers?: RawHttpHeadersInput & DeleteHeaders;
}

export type DeleteParameters = DeleteHeaderParam & RequestParameters;

export interface ListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListHeaderParam {
  headers?: RawHttpHeadersInput & ListHeaders;
}

export type ListParameters = ListHeaderParam & RequestParameters;

export interface GetBrowsersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetBrowsersQueryParamProperties {
  /**
   * The os provided by client for remote script runs.
   *
   * Possible values: "Linux", "Windows"
   */
  os?: OS;
  /** The runId provided by client to track remote script runs. It should match regex ^[a-zA-Z0-9-]{3,24}$ */
  runId?: string;
}

export interface GetBrowsersQueryParam {
  queryParameters?: GetBrowsersQueryParamProperties;
}

export interface GetBrowsersHeaderParam {
  headers?: RawHttpHeadersInput & GetBrowsersHeaders;
}

export type GetBrowsersParameters = GetBrowsersQueryParam &
  GetBrowsersHeaderParam &
  RequestParameters;
