// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to delete a Fleet
 *
 * @summary delete a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_Delete.json
 */
async function deletesAFleetResourceAsynchronouslyWithALongRunningOperation(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleets.delete("rg1", "fleet1");
}

/**
 * This sample demonstrates how to delete a Fleet
 *
 * @summary delete a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_Delete_MaximumSet_Gen.json
 */
async function deletesAFleetResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleets.delete("rgfleets", "fleet1", {
    ifMatch: "crsgokrdxddjsvqxpplerummnmzav",
  });
}

async function main(): Promise<void> {
  await deletesAFleetResourceAsynchronouslyWithALongRunningOperation();
  await deletesAFleetResourceAsynchronouslyWithALongRunningOperationGeneratedByMaximumSetRule();
}

main().catch(console.error);
