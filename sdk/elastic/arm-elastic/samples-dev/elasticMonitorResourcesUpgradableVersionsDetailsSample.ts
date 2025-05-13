// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of upgradable versions for a given monitor resource.
 *
 * @summary list of upgradable versions for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/UpgradableVersions_Details.json
 */
async function upgradableVersionsDetails(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.upgradableVersionsDetails(
    "myResourceGroup",
    "myMonitor",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await upgradableVersionsDetails();
}

main().catch(console.error);
