// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the AvailabilitySets resource.
 *
 * @summary updates the AvailabilitySets resource.
 * x-ms-original-file: 2024-06-01/AvailabilitySets_Update_MaximumSet_Gen.json
 */
async function availabilitySetsUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.update("rgscvmm", "-", {
    tags: { key1460: "vcbwibkvr" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the AvailabilitySets resource.
 *
 * @summary updates the AvailabilitySets resource.
 * x-ms-original-file: 2024-06-01/AvailabilitySets_Update_MinimumSet_Gen.json
 */
async function availabilitySetsUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.update("rgscvmm", "1", {});
  console.log(result);
}

async function main(): Promise<void> {
  await availabilitySetsUpdateMaximumSet();
  await availabilitySetsUpdateMinimumSet();
}

main().catch(console.error);
