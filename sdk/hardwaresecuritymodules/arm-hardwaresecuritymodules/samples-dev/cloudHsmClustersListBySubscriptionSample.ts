// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the List operation gets information about the Cloud HSM Clusters associated with the subscription.
 *
 * @summary the List operation gets information about the Cloud HSM Clusters associated with the subscription.
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_ListBySubscription_MaximumSet_Gen.json
 */
async function cloudHsmClusterListBySubscriptionMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cloudHsmClusters.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await cloudHsmClusterListBySubscriptionMaximumSetGen();
}

main().catch(console.error);
