// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to unregisters all databases from a fleetspace
 *
 * @summary unregisters all databases from a fleetspace
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_Unregister_MaximumSet_Gen.json
 */
async function fleetspacesUnregisterMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetspaces.unregister(
    "rg-database-fleet-manager",
    "production-fleet",
    "primary-space",
  );
}

async function main(): Promise<void> {
  await fleetspacesUnregisterMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
