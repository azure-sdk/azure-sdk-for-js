// Licensed under the MIT License.

import { ContainerServiceClient } from "azure-resourcemanager-containerservicefleet";

/**
 * This sample demonstrates how to lists fleets in the specified subscription.
 *
 * @summary lists fleets in the specified subscription.
 * x-ms-original-file: 2025-03-01/Fleets_ListBySub.json
 */
async function listsTheFleetResourcesInASubscription(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleets.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to lists fleets in the specified subscription.
 *
 * @summary lists fleets in the specified subscription.
 * x-ms-original-file: 2025-03-01/Fleets_ListBySubscription_MaximumSet_Gen.json
 */
async function listsTheFleetResourcesInASubscriptionGeneratedByMaximumSetRule(): Promise<void> {
  const credential = {
    getToken: async () => {
      return { token: "INPUT_YOUR_TOKEN_HERE", expiresOnTimestamp: now() };
    },
  };
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ContainerServiceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fleets.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listsTheFleetResourcesInASubscription();
  await listsTheFleetResourcesInASubscriptionGeneratedByMaximumSetRule();
}

main().catch(console.error);
