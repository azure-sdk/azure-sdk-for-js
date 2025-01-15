// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TranscribeParameters } from "./parameters.js";
import { Transcribe200Response } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

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
