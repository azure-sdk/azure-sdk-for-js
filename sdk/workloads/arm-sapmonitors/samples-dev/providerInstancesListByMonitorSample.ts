// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 *
 * @summary gets a list of provider instances in the specified SAP monitor. The operations returns various properties of each provider instances.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_List.json
 */
async function listAllSAPMonitorsProvidersInASubscription(): Promise<void> {
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

async function main(): Promise<void> {
  await listAllSAPMonitorsProvidersInASubscription();
}

main().catch(console.error);
