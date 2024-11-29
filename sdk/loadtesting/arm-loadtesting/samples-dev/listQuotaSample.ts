// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list quotas for a given subscription Id.
 *
 * @summary list quotas for a given subscription Id.
 * x-ms-original-file: 2023-12-01-preview/Quotas_List.json
 */
async function listQuotasForAGivenSubscriptionId() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.listQuota("westus")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listQuotasForAGivenSubscriptionId();
}

main().catch(console.error);
