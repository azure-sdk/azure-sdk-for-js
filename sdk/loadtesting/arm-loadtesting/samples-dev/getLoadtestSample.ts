// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a LoadTestResource
 *
 * @summary get a LoadTestResource
 * x-ms-original-file: 2023-12-01-preview/LoadTests_Get.json
 */
async function getALoadTestResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const result = await client.getLoadtest("dummyrg", "myLoadTest");
  console.log(result);
}

async function main() {
  getALoadTestResource();
}

main().catch(console.error);
