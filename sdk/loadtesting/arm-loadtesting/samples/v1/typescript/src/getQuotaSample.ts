// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get the available quota for a quota bucket per region per subscription.
 *
 * @summary get the available quota for a quota bucket per region per subscription.
 * x-ms-original-file: 2024-12-01-preview/Quotas_Get.json
 */
async function getTheAvailableQuotaForAQuotaBucketPerRegionPerSubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const result = await client.getQuota("westus", "testQuotaBucket");
  console.log(result);
}

async function main(): Promise<void> {
  await getTheAvailableQuotaForAQuotaBucketPerRegionPerSubscription();
}

main().catch(console.error);
