// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DefaultAzureCredential } from "@azure/identity";
import createBatchClient, { paginate } from "@azure-rest/batch";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListNodeExtensions
 *
 * @summary call operation ListNodeExtensions
 */
async function listNodeExtensionsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const nodeId = "{Your nodeId}";
  const initialResponse = await client
    .path("/pools/{poolId}/nodes/{nodeId}/extensions", poolId, nodeId)
    .get({
      queryParameters: {
        timeOut: 123,
        maxresults: 123,
        $select: ["{Your $select}"],
      },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
      },
    });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listNodeExtensionsSample();
}

main().catch(console.error);
