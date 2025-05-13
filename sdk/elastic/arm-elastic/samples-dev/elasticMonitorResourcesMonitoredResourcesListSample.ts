// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the resources currently being monitored by the Elastic monitor resource.
 *
 * @summary list the resources currently being monitored by the Elastic monitor resource.
 * x-ms-original-file: 2025-01-15-preview/MonitoredResources_List.json
 */
async function monitoredResourcesList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.elasticMonitorResources.monitoredResourcesList(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await monitoredResourcesList();
}

main().catch(console.error);
