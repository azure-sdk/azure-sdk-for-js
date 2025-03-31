// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets fleetspace resource.
 *
 * @summary gets fleetspace resource.
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_Get_MaximumSet_Gen.json
 */
async function fleetspacesGetMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.fleetspaces.get(
    "rgdatabasefleetmanager",
    "production-fleet",
    "primary-space",
  );
  console.log(result);
}

async function main() {
  await fleetspacesGetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
