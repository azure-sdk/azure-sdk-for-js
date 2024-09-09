// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetTaskFile
 *
 * @summary call operation GetTaskFile
 */
async function getTaskFileSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobId = "{Your jobId}";
  const taskId = "{Your taskId}";
  const filePath = "{Your filePath}";
  const result = await client
    .path(
      "/jobs/{jobId}/tasks/{taskId}/files/{filePath}",
      jobId,
      taskId,
      filePath,
    )
    .get({
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
        "If-Modified-Since": "{Your If-Modified-Since}",
        "If-Unmodified-Since": "{Your If-Unmodified-Since}",
        "ocp-range": "{Your ocp-range}",
      },
    });
  console.log(result);
}

async function main() {
  getTaskFileSample();
}

main().catch(console.error);
