// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to list FleetMember resources by Fleet
 *
 * @summary list FleetMember resources by Fleet
 * x-ms-original-file: 2025-03-01/FleetMembers_ListByFleet.json
 */
async function listsTheMembersOfAFleet(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleetMembers.listByFleet("rg1", "fleet1")) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to list FleetMember resources by Fleet
 *
 * @summary list FleetMember resources by Fleet
 * x-ms-original-file: 2025-03-01/FleetMembers_ListByFleet_MaximumSet_Gen.json
 */
async function listsTheMembersOfAFleetGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleetMembers.listByFleet(
    "rgfleets",
    "fleet1",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listsTheMembersOfAFleet();
  await listsTheMembersOfAFleetGeneratedByMaximumSetRule();
}

main().catch(console.error);
