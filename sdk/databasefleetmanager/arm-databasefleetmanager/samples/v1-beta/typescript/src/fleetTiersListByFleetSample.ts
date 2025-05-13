// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list tiers in a fleet.
 *
 * @summary list tiers in a fleet.
 * x-ms-original-file: 2025-02-01-preview/FleetTiers_ListByFleet_MaximumSet_Gen.json
 */
async function fleetTiersListByFleetMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleetTiers.listByFleet(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    { skip: 10, top: 1, skiptoken: "hfrg" },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await fleetTiersListByFleetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
