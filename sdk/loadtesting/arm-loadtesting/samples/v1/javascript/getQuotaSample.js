// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { LoadTestMgmtClient } = require("@azure/arm-loadtesting");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get the available quota for a quota bucket per region per subscription.
 *
 * @summary get the available quota for a quota bucket per region per subscription.
 * x-ms-original-file: 2024-12-01-preview/Quotas_Get.json
 */
async function getTheAvailableQuotaForAQuotaBucketPerRegionPerSubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const result = await client.getQuota("westus", "testQuotaBucket");
  console.log(result);
}

async function main() {
  await getTheAvailableQuotaForAQuotaBucketPerRegionPerSubscription();
}

main().catch(console.error);
