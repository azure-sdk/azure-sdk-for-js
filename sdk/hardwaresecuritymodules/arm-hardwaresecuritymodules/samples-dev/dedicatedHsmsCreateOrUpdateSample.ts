// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or Update a dedicated HSM in the specified subscription.
 *
 * @summary create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/DedicatedHsm_CreateOrUpdate.json
 */
async function createANewOrUpdateAnExistingDedicatedHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.dedicatedHsms.createOrUpdate("hsm-group", "hsm1");
}

/**
 * This sample demonstrates how to create or Update a dedicated HSM in the specified subscription.
 *
 * @summary create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/PaymentHsm_CreateOrUpdate.json
 */
async function createANewOrUpdateAnExistingPaymentHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.dedicatedHsms.createOrUpdate("hsm-group", "hsm1");
}

/**
 * This sample demonstrates how to create or Update a dedicated HSM in the specified subscription.
 *
 * @summary create or Update a dedicated HSM in the specified subscription.
 * x-ms-original-file: 2024-06-30-preview/PaymentHsm_CreateOrUpdate_WithManagementProfile.json
 */
async function createANewOrUpdateAnExistingPaymentHSMWithManagementProfile(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.dedicatedHsms.createOrUpdate("hsm-group", "hsm1");
}

async function main(): Promise<void> {
  await createANewOrUpdateAnExistingDedicatedHSM();
  await createANewOrUpdateAnExistingPaymentHSM();
  await createANewOrUpdateAnExistingPaymentHSMWithManagementProfile();
}

main().catch(console.error);
