// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DeviceRegistryClient } from "@azure/arm-deviceregistry";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a AssetEndpointProfile
 *
 * @summary delete a AssetEndpointProfile
 * x-ms-original-file: 2024-11-01/Delete_AssetEndpointProfile.json
 */
async function deleteAssetEndpointProfile() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DeviceRegistryClient(credential, subscriptionId);
  await client.assetEndpointProfiles.delete(
    "myResourceGroup",
    "my-assetendpointprofile",
  );
}

async function main() {
  deleteAssetEndpointProfile();
}

main().catch(console.error);
