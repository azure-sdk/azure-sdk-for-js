// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { LoadTestMgmtClient } = require("@azure/arm-loadtesting");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a LoadTestResource
 *
 * @summary delete a LoadTestResource
 * x-ms-original-file: 2024-12-01-preview/LoadTests_Delete.json
 */
async function deleteALoadTestResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  await client.deleteLoadtest("dummyrg", "myLoadTest");
}

async function main() {
  await deleteALoadTestResource();
}

main().catch(console.error);
