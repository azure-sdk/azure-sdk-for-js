// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MigrateClient } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a AvsAssessmentV2
 *
 * @summary get a AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessmentsV2Operations_Get_MaximumSet_Gen.json
 */
async function avsAssessmentsV2OperationsGetMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsAssessmentsV2Operations.get(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
  );
  console.log(result);
}

async function main() {
  await avsAssessmentsV2OperationsGetMaximumSet();
}

main().catch(console.error);
