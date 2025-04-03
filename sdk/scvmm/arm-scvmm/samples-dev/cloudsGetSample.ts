// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to implements Cloud GET method.
 *
 * @summary implements Cloud GET method.
 * x-ms-original-file: 2024-06-01/Clouds_Get_MaximumSet_Gen.json
 */
async function cloudsGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.get("rgscvmm", "_");
  console.log(result);
}

/**
 * This sample demonstrates how to implements Cloud GET method.
 *
 * @summary implements Cloud GET method.
 * x-ms-original-file: 2024-06-01/Clouds_Get_MinimumSet_Gen.json
 */
async function cloudsGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.get("rgscvmm", "i");
  console.log(result);
}

async function main(): Promise<void> {
  await cloudsGetMaximumSet();
  await cloudsGetMinimumSet();
}

main().catch(console.error);
