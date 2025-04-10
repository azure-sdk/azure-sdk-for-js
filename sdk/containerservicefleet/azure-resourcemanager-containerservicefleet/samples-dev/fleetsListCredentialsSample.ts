// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to lists the user credentials of a Fleet.
 *
 * @summary lists the user credentials of a Fleet.
 * x-ms-original-file: 2025-03-01/Fleets_ListCredentialsResult.json
 */
async function listsTheUserCredentialsOfAFleet(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.listCredentials("rg1", "fleet");
  console.log(result);
}

/**
 * This sample demonstrates how to lists the user credentials of a Fleet.
 *
 * @summary lists the user credentials of a Fleet.
 * x-ms-original-file: 2025-03-01/Fleets_ListCredentials_MaximumSet_Gen.json
 */
async function listsTheUserCredentialsOfAFleetGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.listCredentials("rgfleets", "fleet1");
  console.log(result);
}

async function main(): Promise<void> {
  await listsTheUserCredentialsOfAFleet();
  await listsTheUserCredentialsOfAFleetGeneratedByMaximumSetRule();
}

main().catch(console.error);
