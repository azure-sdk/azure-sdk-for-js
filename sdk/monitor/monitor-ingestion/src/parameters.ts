// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface UploadHeaders {
  /** The content encoding of the request body which is always 'gzip'. */
  "Content-Encoding"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface UploadBodyParam {
  /** The array of objects matching the schema defined by the provided stream. */
  body: Record<string, unknown>[];
}

export interface UploadHeaderParam {
  headers?: RawHttpHeadersInput & UploadHeaders;
}

export type UploadParameters = UploadHeaderParam &
  UploadBodyParam &
  RequestParameters;
