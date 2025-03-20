// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deregisters the ScVmm fabric cloud from Azure.
 *
 * @summary deregisters the ScVmm fabric cloud from Azure.
 * x-ms-original-file: 2024-06-01/Clouds_Delete_MaximumSet_Gen.json
 */
async function cloudsDeleteMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.clouds.delete("rgscvmm", "-", { force: "true" });
}

/**
 * This sample demonstrates how to deregisters the ScVmm fabric cloud from Azure.
 *
 * @summary deregisters the ScVmm fabric cloud from Azure.
 * x-ms-original-file: 2024-06-01/Clouds_Delete_MinimumSet_Gen.json
 */
async function cloudsDeleteMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  await client.clouds.delete("rgscvmm", "1");
}

async function main(): Promise<void> {
  await cloudsDeleteMaximumSet();
  await cloudsDeleteMinimumSet();
}

main().catch(console.error);
