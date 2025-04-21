// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to onboards the ScVmm virtual network as an Azure virtual network resource.
 *
 * @summary onboards the ScVmm virtual network as an Azure virtual network resource.
 * x-ms-original-file: 2025-03-13/VirtualNetworks_CreateOrUpdate_MaximumSet_Gen.json
 */
async function virtualNetworksCreateOrUpdateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.createOrUpdate("rgscvmm", "_", {
    properties: {
      inventoryItemId: "bxn",
      uuid: "12345678-1234-1234-1234-12345678abcd",
      vmmServerId:
        "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
    tags: { key705: "apgplvjdyocx" },
    location: "fky",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to onboards the ScVmm virtual network as an Azure virtual network resource.
 *
 * @summary onboards the ScVmm virtual network as an Azure virtual network resource.
 * x-ms-original-file: 2025-03-13/VirtualNetworks_CreateOrUpdate_MinimumSet_Gen.json
 */
async function virtualNetworksCreateOrUpdateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualNetworks.createOrUpdate("rgscvmm", "-", {
    extendedLocation: {},
    location: "fky",
  });
  console.log(result);
}

async function main() {
  await virtualNetworksCreateOrUpdateMaximumSet();
  await virtualNetworksCreateOrUpdateMinimumSet();
}

main().catch(console.error);
