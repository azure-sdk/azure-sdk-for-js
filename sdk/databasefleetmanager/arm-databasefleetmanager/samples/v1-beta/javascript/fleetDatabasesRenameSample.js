// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to renames a database.
 *
 * @summary renames a database.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_Rename_MaximumSet_Gen.json
 */
async function renameDatabaseInFleetspaceGeneratedByPolicy() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetDatabases.rename(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    "customer-db-prod",
    { newName: "new-customer-db-prod" },
  );
}

async function main() {
  await renameDatabaseInFleetspaceGeneratedByPolicy();
}

main().catch(console.error);
