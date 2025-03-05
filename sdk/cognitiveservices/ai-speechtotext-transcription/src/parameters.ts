// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type { TranscriptionJob, TranscribeDefinition } from "./models.js";

export interface SubmitTranscriptionBodyParam {
  /** The resource instance. */
  body: TranscriptionJob;
}

export type SubmitTranscriptionParameters = SubmitTranscriptionBodyParam & RequestParameters;
export type GetTranscriptionParameters = RequestParameters;
/** The resource instance. */
export type TranscriptionJobResourceMergeAndPatch = Partial<TranscriptionJob>;

export interface PatchTranscriptionBodyParam {
  /** The resource instance. */
  body: TranscriptionJobResourceMergeAndPatch;
}

export interface PatchTranscriptionMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type PatchTranscriptionParameters = PatchTranscriptionMediaTypesParam &
  PatchTranscriptionBodyParam &
  RequestParameters;
export type DeleteTranscriptionParameters = RequestParameters;

export interface ListTranscriptionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface ListTranscriptionsQueryParam {
  queryParameters?: ListTranscriptionsQueryParamProperties;
}

export type ListTranscriptionsParameters = ListTranscriptionsQueryParam & RequestParameters;

export interface ListTranscriptionFilesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** Filter the result list using the given expression. */
  filter?: string;
}

export interface ListTranscriptionFilesQueryParam {
  queryParameters?: ListTranscriptionFilesQueryParamProperties;
}

export type ListTranscriptionFilesParameters = ListTranscriptionFilesQueryParam & RequestParameters;

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
