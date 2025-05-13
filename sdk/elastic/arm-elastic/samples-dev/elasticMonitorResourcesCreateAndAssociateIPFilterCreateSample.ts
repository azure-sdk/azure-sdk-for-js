// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create and Associate IP traffic filter for the given deployment.
 *
 * @summary create and Associate IP traffic filter for the given deployment.
 * x-ms-original-file: 2025-01-15-preview/IPTrafficFilter_Create.json
 */
async function createAndAssociateIPFilterCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.createAndAssociateIPFilterCreate(
    "myResourceGroup",
    "myMonitor",
    { ips: "192.168.131.0, 192.168.132.6/22" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAndAssociateIPFilterCreate();
}

main().catch(console.error);
