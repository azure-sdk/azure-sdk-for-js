// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list AvsAssessedMachineV2 resources by AvsAssessmentV2
 *
 * @summary list AvsAssessedMachineV2 resources by AvsAssessmentV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessedMachinesV2Operations_ListByParent_MaximumSet_Gen.json
 */
async function avsAssessedMachinesV2OperationsListByParentMaximumSet(): Promise<void> {
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

async function main(): Promise<void> {
  await avsAssessedMachinesV2OperationsListByParentMaximumSet();
}

main().catch(console.error);
