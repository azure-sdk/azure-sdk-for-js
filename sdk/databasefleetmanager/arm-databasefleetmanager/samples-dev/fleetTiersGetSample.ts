// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets a tier resource.
 *
 * @summary gets a tier resource.
 * x-ms-original-file: 2025-02-01-preview/FleetTiers_Get_MaximumSet_Gen.json
 */
async function fleetTiersGetMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetTiers.get(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    "general-purpose-tier",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fleetTiersGetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
