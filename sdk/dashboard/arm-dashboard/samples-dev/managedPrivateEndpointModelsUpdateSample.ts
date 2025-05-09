// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a managed private endpoint for an existing grafana resource.
 *
 * @summary update a managed private endpoint for an existing grafana resource.
 * x-ms-original-file: 2024-10-01/ManagedPrivateEndpoints_Patch.json
 */
async function managedPrivateEndpointsPatch(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  const result = await client.managedPrivateEndpointModels.update(
    "myResourceGroup",
    "myWorkspace",
    "myMPEName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await managedPrivateEndpointsPatch();
}

main().catch(console.error);
