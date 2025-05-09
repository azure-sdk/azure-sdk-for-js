// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DashboardClient } from "@azure/arm-dashboard";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a IntegrationFabric
 *
 * @summary create a IntegrationFabric
 * x-ms-original-file: 2024-10-01/IntegrationFabrics_Create.json
 */
async function integrationFabricsCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DashboardClient(credential, subscriptionId);
  const result = await client.integrationFabrics.create(
    "myResourceGroup",
    "myWorkspace",
    "sampleIntegration",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await integrationFabricsCreate();
}

main().catch(console.error);
