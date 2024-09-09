// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation DisablePoolAutoScale
 *
 * @summary call operation DisablePoolAutoScale
 */
async function disablePoolAutoScaleSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const result = await client
    .path("/pools/{poolId}/disableautoscale", poolId)
    .post({
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
      },
    });
  console.log(result);
}

async function main() {
  disablePoolAutoScaleSample();
}

main().catch(console.error);
