// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a dedicated HSM in the specified subscription.
 *
 * @summary update a dedicated HSM in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/DedicatedHsm_Update.json
 */
async function updateAnExistingDedicatedHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.dedicatedHsms.update("hsm-group", "hsm1");
  console.log(result);
}

/**
 * This sample demonstrates how to update a dedicated HSM in the specified subscription.
 *
 * @summary update a dedicated HSM in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/PaymentHsm_Update.json
 */
async function updateAnExistingPaymentHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.dedicatedHsms.update("hsm-group", "hsm1");
  console.log(result);
}

async function main(): Promise<void> {
  await updateAnExistingDedicatedHSM();
  await updateAnExistingPaymentHSM();
}

main().catch(console.error);
