// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to onboards the ScVmm VM Template as an Azure VM Template resource.
 *
 * @summary onboards the ScVmm VM Template as an Azure VM Template resource.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_CreateOrUpdate_MaximumSet_Gen.json
 */
async function virtualMachineTemplatesCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.createOrUpdate("rgscvmm", "6", {
    properties: {
      inventoryItemId: "qjrykoogccwlgkd",
      uuid: "12345678-1234-1234-1234-12345678abcd",
      vmmServerId:
        "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
      osType: "Windows",
      limitCpuForMigration: "true",
      dynamicMemoryEnabled: "true",
      isCustomizable: "true",
      isHighlyAvailable: "true",
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
    tags: { key9494: "kkbmfpwhmvlobm" },
    location: "ayxsyduviotylbojh",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to onboards the ScVmm VM Template as an Azure VM Template resource.
 *
 * @summary onboards the ScVmm VM Template as an Azure VM Template resource.
 * x-ms-original-file: 2025-03-13/VirtualMachineTemplates_CreateOrUpdate_MinimumSet_Gen.json
 */
async function virtualMachineTemplatesCreateOrUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineTemplates.createOrUpdate("rgscvmm", "P", {
    extendedLocation: {},
    location: "ayxsyduviotylbojh",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineTemplatesCreateOrUpdateMaximumSet();
  await virtualMachineTemplatesCreateOrUpdateMinimumSet();
}

main().catch(console.error);
