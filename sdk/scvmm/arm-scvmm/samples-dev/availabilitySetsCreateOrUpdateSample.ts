// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmClient } from "@azure/arm-scvmm";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to onboards the ScVmm availability set as an Azure resource.
 *
 * @summary onboards the ScVmm availability set as an Azure resource.
 * x-ms-original-file: 2025-03-13/AvailabilitySets_CreateOrUpdate_MaximumSet_Gen.json
 */
async function availabilitySetsCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.createOrUpdate("rgscvmm", "-", {
    properties: {
      availabilitySetName: "njrpftunzo",
      vmmServerId:
        "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ScVmm/vmmServers/vmmServerName",
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
    tags: { key5701: "cldtxloqh" },
    location: "jelevilan",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to onboards the ScVmm availability set as an Azure resource.
 *
 * @summary onboards the ScVmm availability set as an Azure resource.
 * x-ms-original-file: 2025-03-13/AvailabilitySets_CreateOrUpdate_MinimumSet_Gen.json
 */
async function availabilitySetsCreateOrUpdateMinimumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.availabilitySets.createOrUpdate("rgscvmm", "_", {
    extendedLocation: {},
    location: "jelevilan",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await availabilitySetsCreateOrUpdateMaximumSet();
  await availabilitySetsCreateOrUpdateMinimumSet();
}

main().catch(console.error);
