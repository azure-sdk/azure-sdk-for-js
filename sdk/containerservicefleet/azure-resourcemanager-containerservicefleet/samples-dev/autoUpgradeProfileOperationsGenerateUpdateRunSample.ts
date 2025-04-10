// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to generates an update run for a given auto upgrade profile.
 *
 * @summary generates an update run for a given auto upgrade profile.
 * x-ms-original-file: 2025-03-01/AutoUpgradeProfileOperations_GenerateUpdateRun_MaximumSet_Gen.json
 */
async function autoUpgradeProfileOperationsGenerateUpdateRunMaximumSet(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.autoUpgradeProfileOperations.generateUpdateRun(
    "rgfleets",
    "fleet1",
    "aup1",
  );
}

async function main(): Promise<void> {
  await autoUpgradeProfileOperationsGenerateUpdateRunMaximumSet();
}

main().catch(console.error);
