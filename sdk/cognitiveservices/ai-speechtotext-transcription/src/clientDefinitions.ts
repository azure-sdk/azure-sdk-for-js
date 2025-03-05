// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  SubmitTranscriptionParameters,
  GetTranscriptionParameters,
  PatchTranscriptionParameters,
  DeleteTranscriptionParameters,
  ListTranscriptionsParameters,
  ListTranscriptionFilesParameters,
  TranscribeParameters,
} from "./parameters.js";
import type {
  SubmitTranscription201Response,
  SubmitTranscriptionDefaultResponse,
  GetTranscription200Response,
  GetTranscriptionDefaultResponse,
  PatchTranscription200Response,
  PatchTranscriptionDefaultResponse,
  DeleteTranscription204Response,
  DeleteTranscriptionDefaultResponse,
  ListTranscriptions200Response,
  ListTranscriptionsDefaultResponse,
  ListTranscriptionFiles200Response,
  ListTranscriptionFilesDefaultResponse,
  Transcribe200Response,
  TranscribeDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SubmitTranscription {
  /** Submits a new transcription job. */
  post(
    options: SubmitTranscriptionParameters,
  ): StreamableMethod<SubmitTranscription201Response | SubmitTranscriptionDefaultResponse>;
}

export interface GetTranscription {
  /** Gets the transcription identified by the given ID. */
  get(
    options?: GetTranscriptionParameters,
  ): StreamableMethod<GetTranscription200Response | GetTranscriptionDefaultResponse>;
  /** Updates the mutable details of the transcription identified by its ID. */
  patch(
    options: PatchTranscriptionParameters,
  ): StreamableMethod<PatchTranscription200Response | PatchTranscriptionDefaultResponse>;
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

export interface Transcribe {
  /** Transcribes the provided audio stream. */
  post(
    options: TranscribeParameters,
  ): StreamableMethod<Transcribe200Response | TranscribeDefaultResponse>;
}

export interface Routes {
  /** Resource for '/transcriptions:submit' has methods for the following verbs: post */
  (path: "/transcriptions:submit"): SubmitTranscription;
  /** Resource for '/transcriptions/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/transcriptions/{id}", id: string): GetTranscription;
  /** Resource for '/transcriptions' has methods for the following verbs: get */
  (path: "/transcriptions"): ListTranscriptions;
  /** Resource for '/transcriptions/\{id\}/files' has methods for the following verbs: get */
  (path: "/transcriptions/{id}/files", id: string): ListTranscriptionFiles;
  /** Resource for '/transcriptions:transcribe' has methods for the following verbs: post */
  (path: "/transcriptions:transcribe"): Transcribe;
}

export type SpeechToTextClient = Client & {
  path: Routes;
};
