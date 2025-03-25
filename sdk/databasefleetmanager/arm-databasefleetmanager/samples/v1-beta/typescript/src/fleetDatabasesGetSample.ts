// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets a fleet database.
 *
 * @summary gets a fleet database.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_Get_MaximumSet_Gen.json
 */
async function retrieveDatabaseDetailsInFleetGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetDatabases.get(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    "customer-db-prod",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await retrieveDatabaseDetailsInFleetGeneratedByPolicy();
}

main().catch(console.error);
