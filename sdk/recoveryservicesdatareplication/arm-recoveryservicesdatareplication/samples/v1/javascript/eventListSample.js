// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const {
  AzureSiteRecoveryManagementServiceAPI,
} = require("@azure/arm-recoveryservicesdatareplication");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets the list of events in the given vault.
 *
 * @summary gets the list of events in the given vault.
 * x-ms-original-file: 2024-09-01/Event_List.json
 */
async function listsTheEvents() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "930CEC23-4430-4513-B855-DBA237E2F3BF";
  const client = new AzureSiteRecoveryManagementServiceAPI(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.event.list("rgswagger_2024-09-01", "4", {
    continuationToken: "gabpzsxrifposvleqqcjnvofz",
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listsTheEvents();
}

main().catch(console.error);
