// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { TranscribeParameters } from "./parameters.js";
import type { Transcribe200Response } from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Transcribe {
  /** Transcribes the provided audio stream. */
  post(options: TranscribeParameters): StreamableMethod<Transcribe200Response>;
}

export interface Routes {
  /** Resource for '/transcriptions:transcribe' has methods for the following verbs: post */
  (path: "/transcriptions:transcribe"): Transcribe;
}

export type SpeechToTextClient = Client & {
  path: Routes;
};
