// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReplaceTask
 *
 * @summary call operation ReplaceTask
 */
async function replaceTaskSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobId = "{Your jobId}";
  const taskId = "{Your taskId}";
  const result = await client
    .path("/jobs/{jobId}/tasks/{taskId}", jobId, taskId)
    .put({
      body: {
        constraints: {
          maxWallClockTime: "{Your maxWallClockTime}",
          retentionTime: "{Your retentionTime}",
          maxTaskRetryCount: 123,
        },
      },
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
        "If-Modified-Since": "{Your If-Modified-Since}",
        "If-Unmodified-Since": "{Your If-Unmodified-Since}",
        "If-Match": "{Your If-Match}",
        "If-None-Match": "{Your If-None-Match}",
      },
      contentType: "application/json; odata=minimalmetadata",
    });
  console.log(result);
}

async function main() {
  replaceTaskSample();
}

main().catch(console.error);
