// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReplaceNodeUser
 *
 * @summary call operation ReplaceNodeUser
 */
async function replaceNodeUserSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const nodeId = "{Your nodeId}";
  const userName = "{Your userName}";
  const result = await client
    .path(
      "/pools/{poolId}/nodes/{nodeId}/users/{userName}",
      poolId,
      nodeId,
      userName,
    )
    .put({
      body: {
        password: "{Your password}",
        expiryTime: new Date(),
        sshPublicKey: "{Your sshPublicKey}",
      },
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
      },
      contentType: "application/json; odata=minimalmetadata",
    });
  console.log(result);
}

async function main() {
  replaceNodeUserSample();
}

main().catch(console.error);
