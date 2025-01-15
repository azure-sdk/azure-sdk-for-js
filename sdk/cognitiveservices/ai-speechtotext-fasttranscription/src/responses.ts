// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HttpResponse } from "@azure-rest/core-client";
import { TranscribeResultOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Transcribe200Response extends HttpResponse {
  status: "200";
  body: TranscribeResultOutput;
}
