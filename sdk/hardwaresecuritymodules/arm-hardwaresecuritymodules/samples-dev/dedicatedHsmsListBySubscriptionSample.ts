// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the List operation gets information about the dedicated HSMs associated with the subscription.
 *
 * @summary the List operation gets information about the dedicated HSMs associated with the subscription.
 * x-ms-original-file: 2024-06-30-preview/DedicatedHsm_ListBySubscription.json
 */
async function listDedicatedHSMDevicesInASubscription(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.dedicatedHsms.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to the List operation gets information about the dedicated HSMs associated with the subscription.
 *
 * @summary the List operation gets information about the dedicated HSMs associated with the subscription.
 * x-ms-original-file: 2024-06-30-preview/PaymentHsm_ListBySubscription.json
 */
async function listDedicatedHSMDevicesInASubscriptionIncludingPaymentHSM(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.dedicatedHsms.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listDedicatedHSMDevicesInASubscription();
  await listDedicatedHSMDevicesInASubscriptionIncludingPaymentHSM();
}

main().catch(console.error);
