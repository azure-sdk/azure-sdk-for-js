// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SubmitTranscriptionParameters,
  GetTranscriptionsParameters,
  GetTranscriptionParameters,
  PatchTranscriptionParameters,
  DeleteTranscriptionParameters,
  TranscribeParameters,
} from "./parameters.js";
import {
  SubmitTranscription201Response,
  GetTranscriptions200Response,
  GetTranscription200Response,
  PatchTranscription200Response,
  DeleteTranscription204Response,
  Transcribe200Response,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SubmitTranscription {
  /** Submits a new transcription job. */
  post(
    options: SubmitTranscriptionParameters,
  ): StreamableMethod<SubmitTranscription201Response>;
}

export interface GetTranscriptions {
  /** Gets a list of transcriptions for the authenticated subscription. */
  get(
    options?: GetTranscriptionsParameters,
  ): StreamableMethod<GetTranscriptions200Response>;
}

export interface GetTranscription {
  /** Gets the transcription identified by the given ID. */
  get(
    options?: GetTranscriptionParameters,
  ): StreamableMethod<GetTranscription200Response>;
  /** Updates the mutable details of the transcription identified by its ID. */
  patch(
    options: PatchTranscriptionParameters,
  ): StreamableMethod<PatchTranscription200Response>;
  /** Deletes the specified transcription task. */
  delete(
    options?: DeleteTranscriptionParameters,
  ): StreamableMethod<DeleteTranscription204Response>;
}

export interface Transcribe {
  /** Transcribes the provided audio stream. */
  post(options: TranscribeParameters): StreamableMethod<Transcribe200Response>;
}

export interface Routes {
  /** Resource for '/transcriptions:submit' has methods for the following verbs: post */
  (path: "/transcriptions:submit"): SubmitTranscription;
  /** Resource for '/transcriptions' has methods for the following verbs: get */
  (path: "/transcriptions"): GetTranscriptions;
  /** Resource for '/transcriptions/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/transcriptions/{id}", id: string): GetTranscription;
  /** Resource for '/transcriptions:transcribe' has methods for the following verbs: post */
  (path: "/transcriptions:transcribe"): Transcribe;
}

export type SpeechToTextClient = Client & {
  path: Routes;
};
