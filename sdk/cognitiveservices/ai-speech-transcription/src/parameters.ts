// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { HttpPartTranscriptionOptions, HttpPartBytes } from "./models.js";

export interface TranscribeBodyParam {
  /** The body of the multipart request. */
  body:
    | FormData
    | Array<
        | { name: "definition"; body: HttpPartTranscriptionOptions }
        | { name: "audio"; body: HttpPartBytes }
      >;
}

export interface TranscribeMediaTypesParam {
  /** request content type */
  contentType: "multipart/form-data";
}

export type TranscribeParameters = TranscribeMediaTypesParam &
  TranscribeBodyParam &
  RequestParameters;
