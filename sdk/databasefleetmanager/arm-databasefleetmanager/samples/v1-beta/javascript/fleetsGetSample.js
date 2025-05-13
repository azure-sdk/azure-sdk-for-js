// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets a fleet resource.
 *
 * @summary gets a fleet resource.
 * x-ms-original-file: 2025-02-01-preview/Fleets_Get_MaximumSet_Gen.json
 */
async function fleetsGetMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleets.get("rg-database-fleet-manager", "production-fleet-01");
  console.log(result);
}

async function main() {
  await fleetsGetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
