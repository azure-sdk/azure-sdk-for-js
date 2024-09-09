// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetNodeFile
 *
 * @summary call operation GetNodeFile
 */
async function getNodeFileSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const nodeId = "{Your nodeId}";
  const filePath = "{Your filePath}";
  const result = await client
    .path(
      "/pools/{poolId}/nodes/{nodeId}/files/{filePath}",
      poolId,
      nodeId,
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
  getNodeFileSample();
}

main().catch(console.error);
