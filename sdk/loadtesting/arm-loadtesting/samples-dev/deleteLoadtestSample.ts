// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a LoadTestResource
 *
 * @summary delete a LoadTestResource
 * x-ms-original-file: 2024-12-01-preview/LoadTests_Delete.json
 */
async function deleteALoadTestResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  await client.deleteLoadtest("dummyrg", "myLoadTest");
}

async function main(): Promise<void> {
  await deleteALoadTestResource();
}

main().catch(console.error);
