// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 *
 * @summary gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_List.json
 */
async function listAllSAPMonitorsProvidersInASubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.providerInstances.listByMonitor(
    "myResourceGroup",
    "mySapMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listAllSAPMonitorsProvidersInASubscription();
}

main().catch(console.error);
