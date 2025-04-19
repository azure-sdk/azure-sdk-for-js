// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a fleet.
 *
 * @summary deletes a fleet.
 * x-ms-original-file: 2025-02-01-preview/Fleets_Delete_MaximumSet_Gen.json
 */
async function fleetsDeleteMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.fleets.delete("rg-database-fleet-manager", "production-fleet-01");
}

async function main() {
  await fleetsDeleteMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
