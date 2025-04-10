// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to create a FleetUpdateStrategy
 *
 * @summary create a FleetUpdateStrategy
 * x-ms-original-file: 2025-03-01/FleetUpdateStrategies_CreateOrUpdate_MaximumSet_Gen.json
 */
async function createAFleetUpdateStrategyGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetUpdateStrategies.createOrUpdate(
    "rgfleets",
    "fleet1",
    "fleet1",
    {
      properties: {
        strategy: {
          stages: [
            {
              name: "stage1",
              groups: [{ name: "group-a" }],
              afterStageWaitInSeconds: 3600,
            },
          ],
        },
      },
    },
    { ifMatch: "bttptpmhheves", ifNoneMatch: "tlx" },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create a FleetUpdateStrategy
 *
 * @summary create a FleetUpdateStrategy
 * x-ms-original-file: 2025-03-01/UpdateStrategies_CreateOrUpdate.json
 */
async function createAFleetUpdateStrategy(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const result = await client.fleetUpdateStrategies.createOrUpdate(
    "rg1",
    "fleet1",
    "strartegy1",
    {
      properties: {
        strategy: {
          stages: [
            {
              name: "stage1",
              groups: [{ name: "group-a" }],
              afterStageWaitInSeconds: 3600,
            },
          ],
        },
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAFleetUpdateStrategyGeneratedByMaximumSetRule();
  await createAFleetUpdateStrategy();
}

main().catch(console.error);
