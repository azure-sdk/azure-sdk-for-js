// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified Cloud HSM Cluster
 *
 * @summary deletes the specified Cloud HSM Cluster
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_Delete_MaximumSet_Gen.json
 */
async function cloudHsmClusterDeleteMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.cloudHsmClusters.delete("rgcloudhsm", "chsm1");
}

async function main(): Promise<void> {
  await cloudHsmClusterDeleteMaximumSetGen();
}

main().catch(console.error);
