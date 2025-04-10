// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to get a UpdateRun
 *
 * @summary get a UpdateRun
 * x-ms-original-file: 2025-03-01/UpdateRuns_Get.json
 */
async function getsAnUpdateRunResource(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.updateRuns.get("rg1", "fleet1", "run1");
  console.log(result);
}

/**
 * This sample demonstrates how to get a UpdateRun
 *
 * @summary get a UpdateRun
 * x-ms-original-file: 2025-03-01/UpdateRuns_Get_MaximumSet_Gen.json
 */
async function getsAnUpdateRunResourceGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.updateRuns.get("rgfleets", "fleet1", "fleet1");
  console.log(result);
}

async function main(): Promise<void> {
  await getsAnUpdateRunResource();
  await getsAnUpdateRunResourceGeneratedByMaximumSetRule();
}

main().catch(console.error);
