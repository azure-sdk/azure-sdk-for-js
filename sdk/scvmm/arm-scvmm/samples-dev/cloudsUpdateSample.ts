// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to updates the Clouds resource.
 *
 * @summary updates the Clouds resource.
 * x-ms-original-file: 2024-06-01/Clouds_Update_MaximumSet_Gen.json
 */
async function cloudsUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.update("rgscvmm", "P", {
    tags: { key5266: "hjpcnwmpnixsolrxnbl" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the Clouds resource.
 *
 * @summary updates the Clouds resource.
 * x-ms-original-file: 2024-06-01/Clouds_Update_MinimumSet_Gen.json
 */
async function cloudsUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.update("rgscvmm", "_", {});
  console.log(result);
}

async function main(): Promise<void> {
  await cloudsUpdateMaximumSet();
  await cloudsUpdateMinimumSet();
}

main().catch(console.error);
