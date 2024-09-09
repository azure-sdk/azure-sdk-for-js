// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createAnomalyDetectorClient from "@azure-rest/ai-anomaly-detector";
import { AzureKeyCredential } from "@azure/core-auth";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation TrainMultivariateModel
 *
 * @summary call operation TrainMultivariateModel
 */
async function trainMultivariateModelSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new AzureKeyCredential("{Your API key}");
  const client = createAnomalyDetectorClient(endpointParam, credential);
  const result = await client
    .path("/multivariate/models")
    .post({
      body: {
        dataSource: "{Your dataSource}",
        dataSchema: "OneTable",
        startTime: new Date(),
        endTime: new Date(),
        displayName: "{Your displayName}",
        slidingWindow: 123,
        alignPolicy: {
          alignMode: "Inner",
          fillNAMethod: "Previous",
          paddingValue: 123,
        },
      },
    });
  console.log(result);
}

async function main() {
  trainMultivariateModelSample();
}

main().catch(console.error);
