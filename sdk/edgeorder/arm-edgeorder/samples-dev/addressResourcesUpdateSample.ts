// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeOrderClient } from "@azure/arm-edgeorder";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update the properties of an existing address.
 *
 * @summary update the properties of an existing address.
 * x-ms-original-file: 2024-02-01/UpdateAddress.json
 */
async function updateAddress(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "eb5dc900-6186-49d8-b7d7-febd866fdc1d";
  const client = new EdgeOrderClient(credential, subscriptionId);
  const result = await client.addressResources.update("YourResourceGroupName", "TestAddressName2");
  console.log(result);
}

async function main(): Promise<void> {
  await updateAddress();
}

main().catch(console.error);
