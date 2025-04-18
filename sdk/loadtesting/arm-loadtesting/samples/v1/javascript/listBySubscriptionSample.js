// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { LoadTestMgmtClient } = require("@azure/arm-loadtesting");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list LoadTestResource resources by subscription ID
 *
 * @summary list LoadTestResource resources by subscription ID
 * x-ms-original-file: 2024-12-01-preview/LoadTests_ListBySubscription.json
 */
async function listLoadTestResourceResourcesBySubscriptionID() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listLoadTestResourceResourcesBySubscriptionID();
}

main().catch(console.error);
