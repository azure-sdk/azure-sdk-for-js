// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list LoadTestResource resources by subscription ID
 *
 * @summary list LoadTestResource resources by subscription ID
 * x-ms-original-file: 2023-12-01-preview/LoadTests_ListBySubscription.json
 */
async function listLoadTestResourceResourcesBySubscriptionId() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listLoadTestResourceResourcesBySubscriptionId();
}

main().catch(console.error);
