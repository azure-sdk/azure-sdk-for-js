// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation TerminateJob
 *
 * @summary call operation TerminateJob
 */
async function terminateJobSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobId = "{Your jobId}";
  const result = await client
    .path("/jobs/{jobId}/terminate", jobId)
    .post({
      body: { terminateReason: "{Your terminateReason}" },
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
  terminateJobSample();
}

main().catch(console.error);
