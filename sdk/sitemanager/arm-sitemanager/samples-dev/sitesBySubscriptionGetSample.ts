// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeClient } from "@azure/arm-sitemanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a Site
 *
 * @summary get a Site
 * x-ms-original-file: 2024-02-01-preview/SitesBySubscription_Get.json
 */
async function getSiteSubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0154f7fe-df09-4981-bf82-7ad5c1f596eb";
  const client = new EdgeClient(credential, subscriptionId);
  const result = await client.sitesBySubscription.get("string");
  console.log(result);
}

async function main(): Promise<void> {
  await getSiteSubscription();
}

main().catch(console.error);
