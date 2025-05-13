// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MigrateClient } from "@azure/arm-migrate";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a AvsAssessedMachineV2
 *
 * @summary get a AvsAssessedMachineV2
 * x-ms-original-file: 2024-03-03-preview/AvsAssessedMachinesV2Operations_Get_MaximumSet_Gen.json
 */
async function avsAssessedMachinesV2OperationsGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "BF03674C-B4D0-4FC9-B964-175F4C6CBFDD";
  const client = new MigrateClient(credential, subscriptionId);
  const result = await client.avsAssessedMachinesV2Operations.get(
    "rgavsAssessments",
    "contosoProject",
    "assessmentName",
    "machine1",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await avsAssessedMachinesV2OperationsGetMaximumSet();
}

main().catch(console.error);
