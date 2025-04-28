// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary deletes an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Alerts_Delete.json
 */
async function deletesAnAlert(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  await client.alerts.delete("myResourceGroup", "mySapMonitor", "myAlert");
}

async function main(): Promise<void> {
  await deletesAnAlert();
}

main().catch(console.error);
