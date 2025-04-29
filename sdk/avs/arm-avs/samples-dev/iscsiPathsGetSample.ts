// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a IscsiPath
 *
 * @summary get a IscsiPath
 * x-ms-original-file: 2024-09-01/IscsiPaths_Get.json
 */
async function iscsiPathsGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.iscsiPaths.get("group1", "cloud1");
  console.log(result);
}

async function main(): Promise<void> {
  await iscsiPathsGet();
}

main().catch(console.error);
