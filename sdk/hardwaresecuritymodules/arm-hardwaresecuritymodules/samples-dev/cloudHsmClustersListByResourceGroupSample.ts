// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the List operation gets information about the Cloud HSM Clusters associated with the subscription and within the specified resource group.
 *
 * @summary the List operation gets information about the Cloud HSM Clusters associated with the subscription and within the specified resource group.
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_ListByResourceGroup_MaximumSet_Gen.json
 */
async function cloudHsmClusterListByResourceGroupMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.cloudHsmClusters.listByResourceGroup("rgcloudhsm")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await cloudHsmClusterListByResourceGroupMaximumSetGen();
}

main().catch(console.error);
