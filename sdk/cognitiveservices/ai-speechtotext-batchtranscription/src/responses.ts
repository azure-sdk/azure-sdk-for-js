// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse } from "@azure-rest/core-client";
import type {
  TranscriptionOutput,
  PageableTranscriptionOutput,
  PageableFileOutput,
} from "./outputModels.js";

export interface SubmitTranscription201Headers {
  /** The location of the created resource. */
  location?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface SubmitTranscription201Response extends HttpResponse {
  status: "201";
  body: TranscriptionOutput;
  headers: RawHttpHeaders & SubmitTranscription201Headers;
}

export interface GetTranscriptions200Headers {
  /** The minimum number of seconds to wait for a non terminal operation to complete. */
  "retry-after"?: number;
}

/** The request has succeeded. */
export interface GetTranscriptions200Response extends HttpResponse {
  status: "200";
  body: PageableTranscriptionOutput;
  headers: RawHttpHeaders & GetTranscriptions200Headers;
}

export interface GetTranscriptionFiles200Headers {
  /** The minimum number of seconds to wait for a non terminal operation to complete. */
  "retry-after"?: number;
}

/** The request has succeeded. */
export interface GetTranscriptionFiles200Response extends HttpResponse {
  status: "200";
  body: PageableFileOutput;
  headers: RawHttpHeaders & GetTranscriptionFiles200Headers;
}

export interface GetTranscription200Headers {
  /** The minimum number of seconds to wait for a non terminal operation to complete. */
  "retry-after"?: number;
}

/** The request has succeeded. */
export interface GetTranscription200Response extends HttpResponse {
  status: "200";
  body: TranscriptionOutput;
  headers: RawHttpHeaders & GetTranscription200Headers;
}

export interface PatchTranscription200Headers {
  /** The minimum number of seconds to wait for a non terminal operation to complete. */
  "retry-after"?: number;
}

/** The request has succeeded. */
export interface PatchTranscription200Response extends HttpResponse {
  status: "200";
  body: TranscriptionOutput;
  headers: RawHttpHeaders & PatchTranscription200Headers;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTranscription204Response extends HttpResponse {
  status: "204";
}
