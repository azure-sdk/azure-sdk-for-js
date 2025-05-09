// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a backup of the Cloud HSM Cluster in the specified subscription
 *
 * @summary create a backup of the Cloud HSM Cluster in the specified subscription
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_Create_Backup_MaximumSet_Gen.json
 */
async function cloudHsmClusterCreateBackupMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.cloudHsmClusters.backup("rgcloudhsm", "chsm1", {
    backupRequestProperties: {
      azureStorageBlobContainerUri:
        "https://myaccount.blob.core.windows.net/sascontainer/sasContainer",
      token: "se=2018-02-01T00%3A00Z&spr=https&sv=2017-04-17&sr=b&sig=REDACTED",
    },
  });
}

async function main(): Promise<void> {
  await cloudHsmClusterCreateBackupMaximumSetGen();
}

main().catch(console.error);
