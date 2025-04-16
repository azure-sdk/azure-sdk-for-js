// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements AvailabilitySet GET method.
 *
 * @summary implements AvailabilitySet GET method.
 * x-ms-original-file: 2025-03-13/AvailabilitySets_Get_MaximumSet_Gen.json
 */
async function availabilitySetsGetMaximumSet() {
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
 * x-ms-original-file: 2025-03-13/AvailabilitySets_Get_MinimumSet_Gen.json
 */
async function availabilitySetsGetMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.get("rgscvmm", "V");
  console.log(result);
}

async function main() {
  await availabilitySetsGetMaximumSet();
  await availabilitySetsGetMinimumSet();
}

main().catch(console.error);
