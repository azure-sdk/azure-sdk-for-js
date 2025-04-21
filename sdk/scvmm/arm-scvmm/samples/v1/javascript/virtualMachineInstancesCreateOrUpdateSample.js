// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to the operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @summary the operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateOrUpdate_MaximumSet_Gen.json
 */
async function virtualMachineInstancesCreateOrUpdateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.createOrUpdate("gtgclehcbsyave", {
    properties: {
      availabilitySets: [
        {
          id: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/availabilitySets/availabilitySetResourceName",
          name: "lwbhaseo",
        },
      ],
      osProfile: {
        adminUsername: "asasas",
        adminPassword: "vavtppmmhlspydtkzxda",
        computerName: "uuxpcxuxcufllc",
        osType: "Windows",
        domainName: "vblzsoqxzlrygdulnefexjdezo",
        domainUsername: "sn",
        domainPassword: "ixbwja",
        workgroup: "bsqftibgcnnjpvmuxligk",
        productKey: "12345-12345-12345-12345-12345",
        timezone: 4,
        runOnceCommands: "byxpnluptiwxycbbybsf;qwerty",
      },
      hardwareProfile: {
        memoryMB: 5,
        cpuCount: 22,
        limitCpuForMigration: "true",
        dynamicMemoryEnabled: "true",
        dynamicMemoryMaxMB: 2,
        dynamicMemoryMinMB: 30,
        isHighlyAvailable: "true",
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
            templateDiskId: "lcdwrokpyvekqccclf",
            storageQosPolicy: { name: "ceiyfrflu", id: "o" },
            createDiffDisk: "true",
          },
        ],
      },
      infrastructureProfile: {
        inventoryItemId: "ihkkqmg",
        vmmServerId:
          "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
        cloudId:
          "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/clouds/cloudResourceName",
        templateId:
          "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/virtualMachineTemplates/virtualMachineTemplateName",
        vmName: "qovpayfydhcvfrhe",
        uuid: "hrpw",
        lastRestoredVmCheckpoint: {
          parentCheckpointId: "hqhhzikoxunuqguouw",
          checkpointId: "wsqmrje",
          name: "keqn",
          description: "qurzfrgyflrh",
        },
        checkpointType: "jkbpzjxpeegackhsvikrnlnwqz",
        generation: 28,
        biosGuid: "xixivxifyql",
      },
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to the operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 *
 * @summary the operation to create or update a virtual machine instance. Please note some properties can be set only during virtual machine instance creation.
 * x-ms-original-file: 2025-03-13/VirtualMachineInstances_CreateOrUpdate_MinimumSet_Gen.json
 */
async function virtualMachineInstancesCreateOrUpdateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.virtualMachineInstances.createOrUpdate("gtgclehcbsyave", {
    extendedLocation: {},
  });
  console.log(result);
}

async function main() {
  await virtualMachineInstancesCreateOrUpdateMaximumSet();
  await virtualMachineInstancesCreateOrUpdateMinimumSet();
}

main().catch(console.error);
