// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to delete a AutoUpgradeProfile
 *
 * @summary delete a AutoUpgradeProfile
 * x-ms-original-file: 2025-03-01/AutoUpgradeProfiles_Delete.json
 */
async function deleteAnAutoUpgradeProfileResource(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.autoUpgradeProfiles.delete(
    "rg1",
    "fleet1",
    "autoupgradeprofile1",
  );
}

/**
 * This sample demonstrates how to delete a AutoUpgradeProfile
 *
 * @summary delete a AutoUpgradeProfile
 * x-ms-original-file: 2025-03-01/AutoUpgradeProfiles_Delete_MaximumSet_Gen.json
 */
async function deleteAnAutoUpgradeProfileResourceGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.autoUpgradeProfiles.delete(
    "rgfleets",
    "fleet1",
    "autoupgradeprofile1",
    { ifMatch: "qmdsmmawj" },
  );
}

async function main(): Promise<void> {
  await deleteAnAutoUpgradeProfileResource();
  await deleteAnAutoUpgradeProfileResourceGeneratedByMaximumSetRule();
}

main().catch(console.error);
