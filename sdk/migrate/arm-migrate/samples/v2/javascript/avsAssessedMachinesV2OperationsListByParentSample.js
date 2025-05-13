// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MigrateClient } = require("@azure/arm-migrate");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list AvsAssessedMachineV2 resources by AvsAssessmentV2
 *
 * @summary list AvsAssessedMachineV2 resources by AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessedMachinesV2Operations_ListByParent_MaximumSet_Gen.json
 */
async function avsAssessedMachinesV2OperationsListByParentMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.avsAssessedMachinesV2Operations.listByParent(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
    {
      filter: "ozyotnnfedxreohjtgfqxmefn",
      pageSize: 26,
      continuationToken: "vhdrqptyyromhgz",
      totalRecordCount: 7,
    },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await avsAssessedMachinesV2OperationsListByParentMaximumSet();
}

main().catch(console.error);
