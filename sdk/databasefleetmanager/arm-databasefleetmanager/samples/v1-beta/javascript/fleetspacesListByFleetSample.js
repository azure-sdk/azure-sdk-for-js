// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists fleetspaces in a fleet.
 *
 * @summary lists fleetspaces in a fleet.
 * x-ms-original-file: 2025-02-01-preview/Fleetspaces_ListByFleet_MaximumSet_Gen.json
 */
async function fleetspacesListByFleetMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "C3897315-3847-4D8A-B2FC-7307B066AD63";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleetspaces.listByFleet(
    "rg-database-fleet-manager",
    "production-fleet",
    { skip: 27, top: 7, skiptoken: "qaorjlbhvuntmn" },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await fleetspacesListByFleetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
