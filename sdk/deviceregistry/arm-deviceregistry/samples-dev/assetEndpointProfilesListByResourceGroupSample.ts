// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryClient } from "@azure/arm-deviceregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list AssetEndpointProfile resources by resource group
 *
 * @summary list AssetEndpointProfile resources by resource group
 * x-ms-original-file: 2024-11-01/List_AssetEndpointProfiles_ResourceGroup.json
 */
async function listAssetEndpointProfilesResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.assetEndpointProfiles.listByResourceGroup(
    "myResourceGroup",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listAssetEndpointProfilesResourceGroup();
}

main().catch(console.error);
