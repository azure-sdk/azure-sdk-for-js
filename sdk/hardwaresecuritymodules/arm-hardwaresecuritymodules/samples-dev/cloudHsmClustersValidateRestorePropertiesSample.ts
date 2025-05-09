// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to queued validating pre restore operation
 *
 * @summary queued validating pre restore operation
 * x-ms-original-file: 2024-06-30-preview/CloudHsmCluster_RequestOrValidate_Restore_Properties_MaximumSet_Gen.json
 */
async function cloudHsmClusterValidateRestoreMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.cloudHsmClusters.validateRestoreProperties("rgcloudhsm", "chsm1", {
    restoreRequestProperties: {
      azureStorageBlobContainerUri:
        "https://myaccount.blob.core.windows.net/sascontainer/sasContainer",
      backupId: "backupId",
    },
  });
}

async function main(): Promise<void> {
  await cloudHsmClusterValidateRestoreMaximumSetGen();
}

main().catch(console.error);
