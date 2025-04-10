// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to delete a FleetMember
 *
 * @summary delete a FleetMember
 * x-ms-original-file: 2025-03-01/FleetMembers_Delete.json
 */
async function deletesAFleetMemberResourceAsynchronouslyWithALongRunningOperation(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleetMembers.delete("rg1", "fleet1", "member-1");
}

/**
 * This sample demonstrates how to delete a FleetMember
 *
 * @summary delete a FleetMember
 * x-ms-original-file: 2025-03-01/FleetMembers_Delete_MaximumSet_Gen.json
 */
async function deletesAFleetMemberResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleetMembers.delete("rgfleets", "fleet1", "fleet1", {
    ifMatch: "klroqfozx",
  });
}

async function main(): Promise<void> {
  await deletesAFleetMemberResourceAsynchronouslyWithALongRunningOperation();
  await deletesAFleetMemberResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule();
}

main().catch(console.error);
