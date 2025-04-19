// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to disables a tier.
 *
 * @summary disables a tier.
 * x-ms-original-file: 2025-02-01-preview/FleetTiers_Disable_MaximumSet_Gen.json
 */
async function fleetTiersDisableMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetTiers.disable(
    "rg-database-fleet-manager",
    "critical-production-fleet",
    "general-purpose-tier",
  );
  console.log(result);
}

async function main() {
  await fleetTiersDisableMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
