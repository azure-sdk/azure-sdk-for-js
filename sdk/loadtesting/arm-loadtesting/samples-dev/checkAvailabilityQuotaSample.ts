// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to check Quota Availability on quota bucket per region per subscription.
 *
 * @summary check Quota Availability on quota bucket per region per subscription.
 * x-ms-original-file: 2023-12-01-preview/Quotas_CheckAvailability.json
 */
async function checkQuotaAvailabilityOnQuotaBucketPerRegionPerSubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const result = await client.checkAvailabilityQuota(
    "westus",
    "testQuotaBucket",
    {
      properties: {
        currentUsage: 20,
        currentQuota: 40,
        newQuota: 50,
        dimensions: {
          subscriptionId: "testsubscriptionId",
          location: "westus",
        },
      },
    },
  );
  console.log(result);
}

async function main() {
  checkQuotaAvailabilityOnQuotaBucketPerRegionPerSubscription();
}

main().catch(console.error);
