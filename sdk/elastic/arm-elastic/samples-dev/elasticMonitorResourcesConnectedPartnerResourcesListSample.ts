// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list of all active deployments that are associated with the marketplace subscription linked to the given monitor.
 *
 * @summary list of all active deployments that are associated with the marketplace subscription linked to the given monitor.
 * x-ms-original-file: 2025-01-15-preview/ConnectedPartnerResources_List.json
 */
async function connectedPartnerResourcesList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.elasticMonitorResources.connectedPartnerResourcesList(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await connectedPartnerResourcesList();
}

main().catch(console.error);
