// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to revert a database transparent data encryption (TDE).
 *
 * @summary revert a database transparent data encryption (TDE).
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_Revert_MaximumSet_Gen.json
 */
async function revertTransparentDataEncryptionInDatabaseGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetDatabases.revert(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    "customer-db-prod",
  );
}

async function main(): Promise<void> {
  await revertTransparentDataEncryptionInDatabaseGeneratedByPolicy();
}

main().catch(console.error);
