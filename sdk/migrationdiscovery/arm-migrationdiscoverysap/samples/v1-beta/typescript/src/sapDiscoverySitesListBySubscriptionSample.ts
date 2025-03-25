// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-migrationdiscoverysap";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets all SAP Migration discovery site resources in a Subscription.
 *
 * @summary gets all SAP Migration discovery site resources in a Subscription.
 * x-ms-original-file: 2023-10-01-preview/SAPDiscoverySites_ListBySubscription.json
 */
async function listSAPMigrationDiscoverySiteResourcesInASubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sapDiscoverySites.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listSAPMigrationDiscoverySiteResourcesInASubscription();
}

main().catch(console.error);
