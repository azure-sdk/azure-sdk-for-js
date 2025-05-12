// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a workspace for Grafana resource.
 *
 * @summary update a workspace for Grafana resource.
 * x-ms-original-file: 2024-10-01/Grafana_Update.json
 */
async function grafanaUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  const result = await client.managedGrafanas.update("myResourceGroup", "myWorkspace");
  console.log(result);
}

async function main(): Promise<void> {
  await grafanaUpdate();
}

main().catch(console.error);
