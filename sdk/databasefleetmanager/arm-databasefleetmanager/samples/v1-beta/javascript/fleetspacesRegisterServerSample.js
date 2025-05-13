// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to migrates an existing logical server into fleet.
 *
 * @summary migrates an existing logical server into fleet.
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_RegisterServer_MaximumSet_Gen.json
 */
async function fleetspacesRegisterServerMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleetspaces.registerServer(
    "rg-database-fleet-manager",
    "production-fleet",
    "primary-space",
    {
      tierName: "Standard",
      sourceSubscriptionId: "c76e2b32-46c7-4325-8f4f-476828a5b207",
      sourceResourceGroupName: "rg-source-database",
      sourceServerName: "source-db-server-prod",
      destinationTierOverrides: [
        {
          resourceType: "Database",
          tierName: "bronze",
          resourceName: "source-db-prod",
        },
      ],
    },
  );
}

async function main() {
  await fleetspacesRegisterServerMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
