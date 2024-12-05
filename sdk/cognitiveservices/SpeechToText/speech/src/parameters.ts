// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RequestParameters } from "@azure-rest/core-client";
import {
  Transcription,
  TranscriptionUpdate,
  TranscribeDefinition,
} from "./models.js";

export interface SubmitTranscriptionBodyParam {
  /** Transcription */
  body: Transcription;
}

export type SubmitTranscriptionParameters = SubmitTranscriptionBodyParam &
  RequestParameters;

export interface GetTranscriptionsQueryParamProperties {
  /** Number of datasets that will be skipped. */
  skip?: number;
  /** Number of datasets that will be included after skipping. */
  top?: number;
  /**
   * A filtering expression for selecting a subset of the available transcriptions.
   *             - Supported properties: displayName, description, createdDateTime, lastActionDateTime, status, locale.
   *             - Operators:
   *               - eq, ne are supported for all properties.
   *               - gt, ge, lt, le are supported for createdDateTime and lastActionDateTime.
   *               - and, or, not are supported.
   *             - Example:
   *               filter=createdDateTime gt 2022-02-01T11:00:00Z
   */
  filter?: string;
}

export interface GetTranscriptionsQueryParam {
  queryParameters?: GetTranscriptionsQueryParamProperties;
}

export type GetTranscriptionsParameters = GetTranscriptionsQueryParam &
  RequestParameters;
export type GetTranscriptionParameters = RequestParameters;
/** Transcription Update */
export type TranscriptionUpdateResourceMergeAndPatch =
  Partial<TranscriptionUpdate>;

export interface PatchTranscriptionBodyParam {
  /** Transcription Update */
  body: TranscriptionUpdate;
}

export interface PatchTranscriptionMediaTypesParam {
  /** request content type */
  contentType: "application/json" | "application/merge-patch+json";
}

export type PatchTranscriptionParameters = PatchTranscriptionMediaTypesParam &
  PatchTranscriptionBodyParam &
  RequestParameters;
export type DeleteTranscriptionParameters = RequestParameters;

export interface TranscribeBodyParam {
  body:
    | FormData
    | Array<
        | { name: "definition"; body: TranscribeDefinition }
        | {
            name: "audio";
            body:
              | string
              | Uint8Array
              | ReadableStream<Uint8Array>
              | NodeJS.ReadableStream
              | File;
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
