// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to delete a FleetUpdateStrategy
 *
 * @summary delete a FleetUpdateStrategy
 * x-ms-original-file: 2025-03-01/FleetUpdateStrategies_Delete_MaximumSet_Gen.json
 */
async function deleteAFleetUpdateStrategyResourceGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleetUpdateStrategies.delete("rgfleets", "fleet1", "fleet1", {
    ifMatch: "saqprswlk",
  });
}

/**
 * This sample demonstrates how to delete a FleetUpdateStrategy
 *
 * @summary delete a FleetUpdateStrategy
 * x-ms-original-file: 2025-03-01/UpdateStrategies_Delete.json
 */
async function deleteAFleetUpdateStrategyResource(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.fleetUpdateStrategies.delete("rg1", "fleet1", "strategy1");
}

async function main(): Promise<void> {
  await deleteAFleetUpdateStrategyResourceGeneratedByMaximumSetRule();
  await deleteAFleetUpdateStrategyResource();
}

main().catch(console.error);
