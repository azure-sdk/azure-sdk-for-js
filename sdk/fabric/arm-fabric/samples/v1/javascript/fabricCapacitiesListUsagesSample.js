// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { FabricClient } = require("@azure/arm-fabric");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list the current consumption and limit in this location for the provided subscription
 *
 * @summary list the current consumption and limit in this location for the provided subscription
 * x-ms-original-file: 2025-01-15-preview/FabricCapacities_ListUsagesBySubscription.json
 */
async function listQuotaUsagesForASubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "548B7FB7-3B2A-4F46-BB02-66473F1FC22C";
  const client = new FabricClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fabricCapacities.listUsages("centraluseuap")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listQuotaUsagesForASubscription();
}

main().catch(console.error);
