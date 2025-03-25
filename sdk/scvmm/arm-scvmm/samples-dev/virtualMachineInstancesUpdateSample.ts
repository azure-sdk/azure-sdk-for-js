// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to the operation to update a virtual machine instance.
 *
 * @summary the operation to update a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Update_MaximumSet_Gen.json
 */
async function virtualMachineInstancesUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.update("gtgclehcbsyave", {
    properties: {
      availabilitySets: [
        {
          id: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/availabilitySets/availabilitySetResourceName",
          name: "lwbhaseo",
        },
      ],
      hardwareProfile: {
        memoryMB: 5,
        cpuCount: 22,
        limitCpuForMigration: "true",
        dynamicMemoryEnabled: "true",
        dynamicMemoryMaxMB: 2,
        dynamicMemoryMinMB: 30,
      },
      networkProfile: {
        networkInterfaces: [
          {
            name: "kvofzqulbjlbtt",
            macAddress: "oaeqqegt",
            virtualNetworkId:
              "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/virtualNetworks/virtualNetworkName",
            ipv4AddressType: "Dynamic",
            ipv6AddressType: "Dynamic",
            macAddressType: "Dynamic",
            nicId: "roxpsvlo",
          },
        ],
      },
      storageProfile: {
        disks: [
          {
            name: "fgnckfymwdsqnfxkdvexuaobe",
            diskId: "ltdrwcfjklpsimhzqyh",
            diskSizeGB: 30,
            bus: 8,
            lun: 10,
            busType: "zu",
            vhdType: "cnbeeeylrvopigdynvgpkfp",
            storageQosPolicy: { name: "ceiyfrflu", id: "o" },
          },
        ],
      },
      infrastructureProfile: { checkpointType: "jkbpzjxpeegackhsvikrnlnwqz" },
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to the operation to update a virtual machine instance.
 *
 * @summary the operation to update a virtual machine instance.
 * x-ms-original-file: 2024-06-01/VirtualMachineInstances_Update_MinimumSet_Gen.json
 */
async function virtualMachineInstancesUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.update("gtgclehcbsyave", {});
  console.log(result);
}

async function main(): Promise<void> {
  await virtualMachineInstancesUpdateMaximumSet();
  await virtualMachineInstancesUpdateMinimumSet();
}

main().catch(console.error);
