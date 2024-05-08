// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { Job, DeidRequest } from "./models.js";

export interface CreateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface CreateBodyParam {
  /** The resource instance. */
  body: Job;
}

export interface CreateHeaderParam {
  headers?: RawHttpHeadersInput & CreateHeaders;
}

export type CreateParameters = CreateHeaderParam &
  CreateBodyParam &
  RequestParameters;

export interface GetHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetHeaderParam {
  headers?: RawHttpHeadersInput & GetHeaders;
}

export type GetParameters = GetHeaderParam & RequestParameters;

export interface ListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListQueryParamProperties {
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Token to continue a previous query. */
  continuationToken?: string;
}

export interface ListQueryParam {
  queryParameters?: ListQueryParamProperties;
}

export interface ListHeaderParam {
  headers?: RawHttpHeadersInput & ListHeaders;
}

export type ListParameters = ListQueryParam &
  ListHeaderParam &
  RequestParameters;

export interface ListFilesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListFilesQueryParamProperties {
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Token to continue a previous query. */
  continuationToken?: string;
}

export interface ListFilesQueryParam {
  queryParameters?: ListFilesQueryParamProperties;
}

export interface ListFilesHeaderParam {
  headers?: RawHttpHeadersInput & ListFilesHeaders;
}

export type ListFilesParameters = ListFilesQueryParam &
  ListFilesHeaderParam &
  RequestParameters;

export interface CancelHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface CancelHeaderParam {
  headers?: RawHttpHeadersInput & CancelHeaders;
}

export type CancelParameters = CancelHeaderParam & RequestParameters;

export interface DeleteHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeleteHeaderParam {
  headers?: RawHttpHeadersInput & DeleteHeaders;
}

export type DeleteParameters = DeleteHeaderParam & RequestParameters;

export interface DeidBodyParam {
  /** The request body for realtime deidentification. */
  body: DeidRequest;
}

export type DeidParameters = DeidBodyParam & RequestParameters;
