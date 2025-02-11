// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { HttpResponse } from "@azure-rest/core-client";
import type { TranscribeResultOutput } from "./outputModels.js";

/** The request has succeeded. */
export interface Transcribe200Response extends HttpResponse {
  status: "200";
  body: TranscribeResultOutput;
}
