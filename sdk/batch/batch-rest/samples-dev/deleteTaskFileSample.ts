// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteTaskFile
 *
 * @summary call operation DeleteTaskFile
 */
async function deleteTaskFileSample() {
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
    .delete({
      queryParameters: { timeOut: 123, recursive: true },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
      },
    });
  console.log(result);
}

async function main() {
  deleteTaskFileSample();
}

main().catch(console.error);
