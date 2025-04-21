// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a tier.
 *
 * @summary deletes a tier.
 * x-ms-original-file: 2025-02-01-preview/FleetTiers_Delete_MaximumSet_Gen.json
 */
async function fleetTiersDeleteMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetTiers.delete(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    "general-purpose-tier",
  );
}

async function main() {
  await fleetTiersDeleteMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
