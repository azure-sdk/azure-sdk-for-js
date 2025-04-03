// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to onboards the ScVmm fabric cloud as an Azure cloud resource.
 *
 * @summary onboards the ScVmm fabric cloud as an Azure cloud resource.
 * x-ms-original-file: 2024-06-01/Clouds_CreateOrUpdate_MaximumSet_Gen.json
 */
async function cloudsCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.createOrUpdate("rgscvmm", "2", {
    properties: {
      inventoryItemId: "qjd",
      uuid: "12345678-1234-1234-1234-12345678abcd",
      vmmServerId:
        "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
      cloudCapacity: {},
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
    tags: { key4295: "wngosgcbdifaxdobufuuqxtho" },
    location: "khwsdmaxfhmbu",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to onboards the ScVmm fabric cloud as an Azure cloud resource.
 *
 * @summary onboards the ScVmm fabric cloud as an Azure cloud resource.
 * x-ms-original-file: 2024-06-01/Clouds_CreateOrUpdate_MinimumSet_Gen.json
 */
async function cloudsCreateOrUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.createOrUpdate("rgscvmm", "-", {
    extendedLocation: {},
    location: "khwsdmaxfhmbu",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await cloudsCreateOrUpdateMaximumSet();
  await cloudsCreateOrUpdateMinimumSet();
}

main().catch(console.error);
