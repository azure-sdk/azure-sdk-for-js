// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to delete a UpdateRun
 *
 * @summary delete a UpdateRun
 * x-ms-original-file: 2025-03-01/UpdateRuns_Delete.json
 */
async function deleteAnUpdateRunResource(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.updateRuns.delete("rg1", "fleet1", "run1");
}

/**
 * This sample demonstrates how to delete a UpdateRun
 *
 * @summary delete a UpdateRun
 * x-ms-original-file: 2025-03-01/UpdateRuns_Delete_MaximumSet_Gen.json
 */
async function deleteAnUpdateRunResourceGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  await client.updateRuns.delete("rgfleets", "fleet1", "fleet1", {
    ifMatch: "xnbwucfeufeagpa",
  });
}

async function main(): Promise<void> {
  await deleteAnUpdateRunResource();
  await deleteAnUpdateRunResourceGeneratedByMaximumSetRule();
}

main().catch(console.error);
