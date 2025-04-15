// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts.
 *
 * @summary gets a list of alerts in the specified SAP monitor. The operations returns various properties of each alerts.
 * x-ms-original-file: 2024-02-01-preview/Alerts_List.json
 */
async function listAllAlertsInASubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.alerts.list("myResourceGroup", "mySapMonitor")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listAllAlertsInASubscription();
}

main().catch(console.error);
