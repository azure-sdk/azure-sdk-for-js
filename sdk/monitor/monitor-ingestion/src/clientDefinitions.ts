// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { UploadParameters } from "./parameters.js";
import { Upload204Response, UploadDefaultResponse } from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface Upload {
  /** Ingestion API used to directly ingest data using Data Collection Rules. */
  post(
    options: UploadParameters,
  ): StreamableMethod<Upload204Response | UploadDefaultResponse>;
}

export interface Routes {
  /** Resource for '/dataCollectionRules/\{ruleId\}/streams/\{stream\}' has methods for the following verbs: post */
  (
    path: "/dataCollectionRules/{ruleId}/streams/{stream}",
    ruleId: string,
    stream: string,
  ): Upload;
}

export type LogsIngestionClientClient = Client & {
  path: Routes;
};
