// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list LoadTestResource resources by resource group
 *
 * @summary list LoadTestResource resources by resource group
 * x-ms-original-file: 2024-12-01-preview/LoadTests_ListByResourceGroup.json
 */
async function listLoadTestResourceResourcesByResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.listByResourceGroup("dummyrg")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listLoadTestResourceResourcesByResourceGroup();
}

main().catch(console.error);
