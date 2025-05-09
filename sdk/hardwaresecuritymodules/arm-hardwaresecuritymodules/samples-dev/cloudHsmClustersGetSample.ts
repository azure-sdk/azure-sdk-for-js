// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the specified Cloud HSM Cluster
 *
 * @summary gets the specified Cloud HSM Cluster
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_Get_MaximumSet_Gen.json
 */
async function cloudHsmClusterGetMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.cloudHsmClusters.get("rgcloudhsm", "chsm1");
  console.log(result);
}

async function main(): Promise<void> {
  await cloudHsmClusterGetMaximumSetGen();
}

main().catch(console.error);
