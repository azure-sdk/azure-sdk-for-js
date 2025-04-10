// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to create a AutoUpgradeProfile
 *
 * @summary create a AutoUpgradeProfile
 * x-ms-original-file: 2025-03-01/AutoUpgradeProfiles_CreateOrUpdate.json
 */
async function createAnAutoUpgradeProfile(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.autoUpgradeProfiles.createOrUpdate(
    "rg1",
    "fleet1",
    "autoupgradeprofile1",
    { properties: { channel: "Stable" } },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create a AutoUpgradeProfile
 *
 * @summary create a AutoUpgradeProfile
 * x-ms-original-file: 2025-03-01/AutoUpgradeProfiles_CreateOrUpdate_MaximumSet_Gen.json
 */
async function createAnAutoUpgradeProfileGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.autoUpgradeProfiles.createOrUpdate(
    "rgfleets",
    "fleet1",
    "autoupgradeprofile1",
    {
      properties: {
        channel: "Stable",
        updateStrategyId:
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rgfleets/providers/Microsoft.ContainerService/fleets/fleet1/updateStrategies/strategy1",
        nodeImageSelection: { type: "Latest" },
        disabled: true,
        autoUpgradeProfileStatus: { lastTriggerError: {} },
      },
    },
    { ifMatch: "teikqmg", ifNoneMatch: "ghfmmyrekxincsxklbldnvhqd" },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAnAutoUpgradeProfile();
  await createAnAutoUpgradeProfileGeneratedByMaximumSetRule();
}

main().catch(console.error);
