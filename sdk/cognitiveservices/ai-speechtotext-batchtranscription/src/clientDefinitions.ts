// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  SubmitTranscriptionParameters,
  GetTranscriptionsParameters,
  GetTranscriptionFilesParameters,
  GetTranscriptionParameters,
  PatchTranscriptionParameters,
  DeleteTranscriptionParameters,
} from "./parameters.js";
import type {
  SubmitTranscription201Response,
  GetTranscriptions200Response,
  GetTranscriptionFiles200Response,
  GetTranscription200Response,
  PatchTranscription200Response,
  DeleteTranscription204Response,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SubmitTranscription {
  /** Submits a new transcription job. */
  post(options: SubmitTranscriptionParameters): StreamableMethod<SubmitTranscription201Response>;
}

export interface GetTranscriptions {
  /** Gets a list of transcriptions for the authenticated subscription. */
  get(options?: GetTranscriptionsParameters): StreamableMethod<GetTranscriptions200Response>;
}

export interface GetTranscriptionFiles {
  /** Gets the files of the transcription identified by the given ID */
  get(
    options?: GetTranscriptionFilesParameters,
  ): StreamableMethod<GetTranscriptionFiles200Response>;
}

export interface GetTranscription {
  /** Gets the transcription identified by the given ID. */
  get(options?: GetTranscriptionParameters): StreamableMethod<GetTranscription200Response>;
  /** Updates the mutable details of the transcription identified by its ID. */
  patch(options: PatchTranscriptionParameters): StreamableMethod<PatchTranscription200Response>;
  /** Deletes the specified transcription task. */
  delete(options?: DeleteTranscriptionParameters): StreamableMethod<DeleteTranscription204Response>;
}

export interface Routes {
  /** Resource for '/transcriptions:submit' has methods for the following verbs: post */
  (path: "/transcriptions:submit"): SubmitTranscription;
  /** Resource for '/transcriptions' has methods for the following verbs: get */
  (path: "/transcriptions"): GetTranscriptions;
  /** Resource for '/transcriptions/\{id\}/files' has methods for the following verbs: get */
  (path: "/transcriptions/{id}/files", id: string): GetTranscriptionFiles;
  /** Resource for '/transcriptions/\{id\}' has methods for the following verbs: get, patch, delete */
  (path: "/transcriptions/{id}", id: string): GetTranscription;
}

export type SpeechToTextClient = Client & {
  path: Routes;
};
