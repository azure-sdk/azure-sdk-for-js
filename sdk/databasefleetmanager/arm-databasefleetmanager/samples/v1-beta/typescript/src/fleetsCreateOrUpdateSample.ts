// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a fleet resource.
 *
 * @summary creates or updates a fleet resource.
 * x-ms-original-file: 2025-02-01-preview/Fleets_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fleetsCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleets.createOrUpdate(
    "rg-database-fleet-manager",
    "production-fleet-01",
    {
      properties: {
        description: "Production fleet for high availability and scalability.",
      },
      tags: { environment: "production", owner: "team-database" },
      location: "East US",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fleetsCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
