// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureKeyCredential } from "@azure/core-auth";
import createAnomalyDetectorClient, {
  paginate,
} from "@azure-rest/ai-anomaly-detector";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ListMultivariateModels
 *
 * @summary call operation ListMultivariateModels
 */
async function listMultivariateModelsSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const initialResponse = await client
    .path("/multivariate/models")
    .get({ queryParameters: { skip: 123, top: 123 } });
  const pageData = paginate(client, initialResponse);
  const result = [];
  for await (const item of pageData) {
    result.push(item);
  }
  console.log(result);
}

async function main() {
  listMultivariateModelsSample();
}

main().catch(console.error);
