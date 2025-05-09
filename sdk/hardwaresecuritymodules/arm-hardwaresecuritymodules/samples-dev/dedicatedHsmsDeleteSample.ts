// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the specified Azure Dedicated HSM.
 *
 * @summary deletes the specified Azure Dedicated HSM.
 * x-ms-original-file: 2024-06-30-preview/DedicatedHsm_Delete.json
 */
async function deleteADedicatedHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.dedicatedHsms.delete("hsm-group", "hsm1");
}

async function main(): Promise<void> {
  await deleteADedicatedHSM();
}

main().catch(console.error);
