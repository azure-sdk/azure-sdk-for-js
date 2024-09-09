// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAnomalyDetectorClient from "@azure-rest/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation GetMultivariateBatchDetectionResult
 *
 * @summary call operation GetMultivariateBatchDetectionResult
 */
async function getMultivariateBatchDetectionResultSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const resultId = "{Your resultId}";
  const result = await client
    .path("/multivariate/detect-batch/{resultId}", resultId)
    .get();
  console.log(result);
}

async function main() {
  getMultivariateBatchDetectionResultSample();
}

main().catch(console.error);
