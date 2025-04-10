// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to update a Fleet
 *
 * @summary update a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_PatchTags.json
 */
async function updateAFleet(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.updateAsync(
    "rg1",
    "fleet1",
    { tags: { tier: "secure", env: "prod" } },
    { ifMatch: "dfjkwelr7384" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to update a Fleet
 *
 * @summary update a Fleet
 * x-ms-original-file: 2025-03-01/Fleets_Update_MaximumSet_Gen.json
 */
async function updateAFleetGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleets.updateAsync(
    "rgfleets",
    "fleet1",
    {
      tags: {},
      identity: { type: "None", userAssignedIdentities: { key126: {} } },
    },
    { ifMatch: "lgoeir" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await updateAFleet();
  await updateAFleetGeneratedByMaximumSetRule();
}

main().catch(console.error);
