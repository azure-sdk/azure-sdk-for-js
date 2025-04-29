// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to modifies a fleet resource.
 *
 * @summary modifies a fleet resource.
 * x-ms-original-file: 2025-02-01-preview/Fleets_Update_MaximumSet_Gen.json
 */
async function fleetsUpdateMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleets.update(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    {
      properties: {
        description:
          "Fleet containing critical production databases and high availability configurations.",
      },
      tags: { environment: "production", owner: "team-database" },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fleetsUpdateMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
