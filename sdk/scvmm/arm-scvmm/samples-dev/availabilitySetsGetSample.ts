// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to implements AvailabilitySet GET method.
 *
 * @summary implements AvailabilitySet GET method.
 * x-ms-original-file: 2024-06-01/AvailabilitySets_Get_MaximumSet_Gen.json
 */
async function availabilitySetsGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.get("rgscvmm", "-");
  console.log(result);
}

/**
 * This sample demonstrates how to implements AvailabilitySet GET method.
 *
 * @summary implements AvailabilitySet GET method.
 * x-ms-original-file: 2024-06-01/AvailabilitySets_Get_MinimumSet_Gen.json
 */
async function availabilitySetsGetMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.get("rgscvmm", "V");
  console.log(result);
}

async function main(): Promise<void> {
  await availabilitySetsGetMaximumSet();
  await availabilitySetsGetMinimumSet();
}

main().catch(console.error);
