// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type { TranscriptionResultOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Transcribe200Response extends HttpResponse {
  status: "200";
  body: TranscriptionResultOutput;
}

export interface TranscribeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TranscribeDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TranscribeDefaultHeaders;
}
