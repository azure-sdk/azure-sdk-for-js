// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the backup operation status of the specified Cloud HSM Cluster
 *
 * @summary gets the backup operation status of the specified Cloud HSM Cluster
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_Backup_Pending_MaximumSet_Gen.json
 */
async function cloudHsmClusterGetBackupStatusMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.cloudHsmClusters.cloudHsmClusterBackupStatusGet(
    "rgcloudhsm",
    "chsm1",
    "572a45927fc240e1ac075de27371680b",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await cloudHsmClusterGetBackupStatusMaximumSetGen();
}

main().catch(console.error);
