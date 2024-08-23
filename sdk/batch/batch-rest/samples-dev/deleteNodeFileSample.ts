// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DeleteNodeFile
 *
 * @summary call operation DeleteNodeFile
 */
async function deleteNodeFileSample() {
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
  deleteNodeFileSample();
}

main().catch(console.error);
