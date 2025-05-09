// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlVirtualMachineClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates an availability group listener.
 *
 * @summary creates or updates an availability group listener.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateAvailabilityGroupListener.json
 */
async function createsOrUpdatesAnAvailabilityGroupListenerUsingLoadBalancerThisIsUsedForVMsPresentInSingleSubnet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.availabilityGroupListeners.createOrUpdate(
    "testrg",
    "testvmgroup",
    "agl-test",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates an availability group listener.
 *
 * @summary creates or updates an availability group listener.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateAvailabilityGroupListenerWithMultiSubnet.json
 */
async function createsOrUpdatesAnAvailabilityGroupListenerThisIsUsedForVMsPresentInMultiSubnet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.availabilityGroupListeners.createOrUpdate(
    "testrg",
    "testvmgroup",
    "agl-test",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesAnAvailabilityGroupListenerUsingLoadBalancerThisIsUsedForVMsPresentInSingleSubnet();
  await createsOrUpdatesAnAvailabilityGroupListenerThisIsUsedForVMsPresentInMultiSubnet();
}

main().catch(console.error);
