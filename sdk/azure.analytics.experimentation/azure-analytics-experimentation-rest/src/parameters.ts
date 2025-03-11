// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type { Metric } from "./models.js";

export interface GetHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetHeaderParam {
  headers?: RawHttpHeadersInput & GetHeaders;
}

export type GetParameters = GetHeaderParam & RequestParameters;

export interface CreateOrUpdateHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The resource instance. */
export type MetricResourceMergeAndPatch = Partial<Metric>;

export interface CreateOrUpdateBodyParam {
  /** The resource instance. */
  body: MetricResourceMergeAndPatch;
}

export interface CreateOrUpdateHeaderParam {
  headers?: RawHttpHeadersInput & CreateOrUpdateHeaders;
}

export interface CreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateParameters = CreateOrUpdateHeaderParam &
  CreateOrUpdateMediaTypesParam &
  CreateOrUpdateBodyParam &
  RequestParameters;

export interface ValidateHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ValidateBodyParam {
  /** Metric input to validate */
  body: Metric;
}

export interface ValidateHeaderParam {
  headers?: RawHttpHeadersInput & ValidateHeaders;
}

export type ValidateParameters = ValidateHeaderParam & ValidateBodyParam & RequestParameters;

export interface DeleteHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
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
