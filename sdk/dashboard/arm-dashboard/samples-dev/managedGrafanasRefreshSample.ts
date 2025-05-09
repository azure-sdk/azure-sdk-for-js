// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to refresh and sync managed private endpoints of a grafana resource to latest state.
 *
 * @summary refresh and sync managed private endpoints of a grafana resource to latest state.
 * x-ms-original-file: 2024-10-01/ManagedPrivateEndpoints_Refresh.json
 */
async function managedPrivateEndpointRefresh(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  await client.managedGrafanas.refresh("myResourceGroup", "myWorkspace");
}

async function main(): Promise<void> {
  await managedPrivateEndpointRefresh();
}

main().catch(console.error);
