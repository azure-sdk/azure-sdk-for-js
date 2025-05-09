// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a Cloud HSM Cluster in the specified subscription.
 *
 * @summary update a Cloud HSM Cluster in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_Update_MaximumSet_Gen.json
 */
async function cloudHsmClusterUpdateMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.cloudHsmClusters.update("rgcloudhsm", "chsm1");
  console.log(result);
}

async function main(): Promise<void> {
  await cloudHsmClusterUpdateMaximumSetGen();
}

main().catch(console.error);
