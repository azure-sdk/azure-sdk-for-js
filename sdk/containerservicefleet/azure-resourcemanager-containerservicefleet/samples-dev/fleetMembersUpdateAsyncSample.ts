// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to update a FleetMember
 *
 * @summary update a FleetMember
 * x-ms-original-file: 2025-03-01/FleetMembers_Update.json
 */
async function updatesAFleetMemberResourceSynchronously(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetMembers.updateAsync(
    "rg1",
    "fleet1",
    "member-1",
    { properties: { group: "staging" } },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to update a FleetMember
 *
 * @summary update a FleetMember
 * x-ms-original-file: 2025-03-01/FleetMembers_Update_MaximumSet_Gen.json
 */
async function updatesAFleetMemberResourceSynchronouslyGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetMembers.updateAsync(
    "rgfleets",
    "fleet1",
    "fleet1",
    { properties: { group: "staging" } },
    { ifMatch: "bjyjzzxvbs" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updatesAFleetMemberResourceSynchronously();
  await updatesAFleetMemberResourceSynchronouslyGeneratedByMaximumSetRule();
}

main().catch(console.error);
