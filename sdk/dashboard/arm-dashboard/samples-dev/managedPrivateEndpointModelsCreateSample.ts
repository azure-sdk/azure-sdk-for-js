// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a managed private endpoint for a grafana resource.
 *
 * @summary create or update a managed private endpoint for a grafana resource.
 * x-ms-original-file: 2024-10-01/ManagedPrivateEndpoints_Create.json
 */
async function managedPrivateEndpointCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  const result = await client.managedPrivateEndpointModels.create(
    "myResourceGroup",
    "myWorkspace",
    "myMPEName",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await managedPrivateEndpointCreate();
}

main().catch(console.error);
