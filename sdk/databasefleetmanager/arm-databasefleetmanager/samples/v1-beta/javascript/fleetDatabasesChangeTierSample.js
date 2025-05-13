// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to moves database to a different tier.
 *
 * @summary moves database to a different tier.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_ChangeTier_MaximumSet_Gen.json
 */
async function changeDatabaseTierGeneratedByPolicy() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetDatabases.changeTier(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    "customer-db-prod",
    { targetTierName: "Standard" },
  );
}

async function main() {
  await changeDatabaseTierGeneratedByPolicy();
}

main().catch(console.error);
