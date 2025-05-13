// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates or updates a tier.
 *
 * @summary creates or updates a tier.
 * x-ms-original-file: 2025-02-01-preview/FleetTiers_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fleetTiersCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetTiers.createOrUpdate(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    "general-purpose-tier",
    {
      properties: {
        serverless: false,
        pooled: true,
        serviceTier: "GeneralPurpose",
        family: "Gen5",
        capacity: 4,
        poolNumOfDatabasesMax: 10,
        highAvailabilityReplicaCount: 5,
        zoneRedundancy: "Disabled",
        databaseCapacityMin: 0,
        databaseCapacityMax: 4,
        databaseSizeGbMax: 50,
      },
    },
  );
  console.log(result);
}

async function main() {
  await fleetTiersCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
