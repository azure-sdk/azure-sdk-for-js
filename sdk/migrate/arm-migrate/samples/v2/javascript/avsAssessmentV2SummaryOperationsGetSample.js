// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MigrateClient } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a AvsAssessmentV2Summary
 *
 * @summary get a AvsAssessmentV2Summary
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentV2SummaryOperations_Get_MaximumSet_Gen.json
 */
async function avsAssessmentV2SummaryOperationsGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsAssessmentV2SummaryOperations.get(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
    "PaaSPreferred",
  );
  console.log(result);
}

async function main() {
  await avsAssessmentV2SummaryOperationsGetMaximumSet();
}

main().catch(console.error);
