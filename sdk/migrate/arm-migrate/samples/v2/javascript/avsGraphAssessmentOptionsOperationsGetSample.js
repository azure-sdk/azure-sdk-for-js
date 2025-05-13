// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MigrateClient } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a AvsGraphAssessmentOptions
 *
 * @summary get a AvsGraphAssessmentOptions
 * x-ms-original-file: 2024-03-03-preview/AvsGraphAssessmentOptionsOperations_Get_MaximumSet_Gen.json
 */
async function avsGraphAssessmentOptionsOperationsGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsGraphAssessmentOptionsOperations.get(
    "rgavsAssessments",
    "contosoProject",
  );
  console.log(result);
}

async function main() {
  await avsGraphAssessmentOptionsOperationsGetMaximumSet();
}

main().catch(console.error);
