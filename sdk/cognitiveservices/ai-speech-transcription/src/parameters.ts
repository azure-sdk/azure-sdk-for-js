// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { TranscriptionOptions } from "./models.js";

export interface TranscribeBodyParam {
  body:
    | FormData
    | Array<
        | { name: "definition"; body: TranscriptionOptions }
        | {
            name: "audio";
            body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream | File;
            filename?: string;
            contentType?: string;
          }
      >;
}

export interface TranscribeMediaTypesParam {
  /** request content type */
  contentType: "multipart/form-data";
}

export type TranscribeParameters = TranscribeMediaTypesParam &
  TranscribeBodyParam &
  RequestParameters;
