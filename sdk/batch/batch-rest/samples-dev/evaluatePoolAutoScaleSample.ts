// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation EvaluatePoolAutoScale
 *
 * @summary call operation EvaluatePoolAutoScale
 */
async function evaluatePoolAutoScaleSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const result = await client
    .path("/pools/{poolId}/evaluateautoscale", poolId)
    .post({
      body: { autoScaleFormula: "{Your autoScaleFormula}" },
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
  evaluatePoolAutoScaleSample();
}

main().catch(console.error);
