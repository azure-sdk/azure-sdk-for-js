// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 *
 * @summary create or update a workspace for Grafana resource. This API is idempotent, so user can either create a new grafana or update an existing grafana.
 * x-ms-original-file: 2024-10-01/Grafana_Create.json
 */
async function grafanaCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  const result = await client.managedGrafanas.create("myResourceGroup", "myWorkspace");
  console.log(result);
}

async function main(): Promise<void> {
  await grafanaCreate();
}

main().catch(console.error);
