// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateNodeUser
 *
 * @summary call operation CreateNodeUser
 */
async function createNodeUserSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const nodeId = "{Your nodeId}";
  const result = await client
    .path("/pools/{poolId}/nodes/{nodeId}/users", poolId, nodeId)
    .post({
      body: {
        name: "{Your name}",
        isAdmin: true,
        expiryTime: new Date(),
        password: "{Your password}",
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
  createNodeUserSample();
}

main().catch(console.error);
