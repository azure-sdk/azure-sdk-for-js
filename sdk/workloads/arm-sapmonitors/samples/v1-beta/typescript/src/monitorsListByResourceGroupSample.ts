// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets a list of SAP monitors in the specified resource group.
 *
 * @summary gets a list of SAP monitors in the specified resource group.
 * x-ms-original-file: 2024-02-01-preview/Monitors_ListByResourceGroup.json
 */
async function listAllSAPMonitorsInAResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.monitors.listByResourceGroup("example-rg")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllSAPMonitorsInAResourceGroup();
}

main().catch(console.error);
