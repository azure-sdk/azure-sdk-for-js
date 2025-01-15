// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import { TranscribeDefinition } from "./models.js";

export interface TranscribeBodyParam {
  body:
    | FormData
    | Array<
        | { name: "definition"; body: TranscribeDefinition }
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
