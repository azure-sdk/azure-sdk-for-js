// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  StartTranscriptionParameters,
  GetTranscriptionParameters,
  DeleteTranscriptionParameters,
  ListTranscriptionsParameters,
  ListTranscriptionFilesParameters,
} from "./parameters.js";
import type {
  StartTranscription201Response,
  StartTranscriptionDefaultResponse,
  GetTranscription200Response,
  GetTranscriptionDefaultResponse,
  DeleteTranscription204Response,
  DeleteTranscriptionDefaultResponse,
  ListTranscriptions200Response,
  ListTranscriptionsDefaultResponse,
  ListTranscriptionFiles200Response,
  ListTranscriptionFilesDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface StartTranscription {
  /** Starts a new transcription job. */
  post(
    options: StartTranscriptionParameters,
  ): StreamableMethod<StartTranscription201Response | StartTranscriptionDefaultResponse>;
}

export interface GetTranscription {
  /** Gets the transcription identified by the given ID. */
  get(
    options?: GetTranscriptionParameters,
  ): StreamableMethod<GetTranscription200Response | GetTranscriptionDefaultResponse>;
  /** Deletes the specified transcription task. */
  delete(
    options?: DeleteTranscriptionParameters,
  ): StreamableMethod<DeleteTranscription204Response | DeleteTranscriptionDefaultResponse>;
}

export interface ListTranscriptions {
  /** Gets a list of transcriptions for the authenticated subscription. */
  get(
    options?: ListTranscriptionsParameters,
  ): StreamableMethod<ListTranscriptions200Response | ListTranscriptionsDefaultResponse>;
}

export interface ListTranscriptionFiles {
  /** Gets the files of the transcription identified by the given ID */
  get(
    options?: ListTranscriptionFilesParameters,
  ): StreamableMethod<ListTranscriptionFiles200Response | ListTranscriptionFilesDefaultResponse>;
}

export interface Routes {
  /** Resource for '/transcriptions:submit' has methods for the following verbs: post */
  (path: "/transcriptions:submit"): StartTranscription;
  /** Resource for '/transcriptions/\{id\}' has methods for the following verbs: get, delete */
  (path: "/transcriptions/{id}", id: string): GetTranscription;
  /** Resource for '/transcriptions' has methods for the following verbs: get */
  (path: "/transcriptions"): ListTranscriptions;
  /** Resource for '/transcriptions/\{id\}/files' has methods for the following verbs: get */
  (path: "/transcriptions/{id}/files", id: string): ListTranscriptionFiles;
}

export type BatchTranscriptionClient = Client & {
  path: Routes;
};
