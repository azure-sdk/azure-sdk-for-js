// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets all fleet databases in a fleetspace.
 *
 * @summary gets all fleet databases in a fleetspace.
 * x-ms-original-file: 2025-02-01-preview/FleetDatabases_ListByFleetspace_MaximumSet_Gen.json
 */
async function listDatabasesInFleetspaceGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleetDatabases.listByFleetspace(
    "rg-database-operations",
    "data-fleet-01",
    "prod-environment",
    { skip: 24, top: 2, filter: "tier eq 'Premium'", skiptoken: "sbrskcoueja" },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listDatabasesInFleetspaceGeneratedByPolicy();
}

main().catch(console.error);
