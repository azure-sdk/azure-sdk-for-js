// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets all fleets in a resource group.
 *
 * @summary gets all fleets in a resource group.
 * x-ms-original-file: 2025-02-01-preview/Fleets_ListByResourceGroup_MaximumSet_Gen.json
 */
async function fleetsListByResourceGroupMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleets.listByResourceGroup("rg-database-fleet-manager", {
    skip: 6,
    top: 30,
    skiptoken: "ovlavzakdncfvvbdhqkal",
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await fleetsListByResourceGroupMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
