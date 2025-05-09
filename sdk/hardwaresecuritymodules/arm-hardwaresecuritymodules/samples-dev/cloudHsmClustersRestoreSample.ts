// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to restores all key materials of a specified Cloud HSM Cluster
 *
 * @summary restores all key materials of a specified Cloud HSM Cluster
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_RequestOrValidate_Restore_MaximumSet_Gen.json
 */
async function cloudHsmClusterRestoreMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.cloudHsmClusters.restore("rgcloudhsm", "chsm1");
}

async function main(): Promise<void> {
  await cloudHsmClusterRestoreMaximumSetGen();
}

main().catch(console.error);
