// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a LoadTestResource
 *
 * @summary create a LoadTestResource
 * x-ms-original-file: 2024-12-01-preview/LoadTests_CreateOrUpdate.json
 */
async function createALoadTestResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const result = await client.createOrUpdateLoadtest("dummyrg", "myLoadTest", {
    location: "westus",
    tags: { Team: "Dev Exp" },
    identity: {
      type: "SystemAssigned,UserAssigned",
      userAssignedIdentities: {
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/dummyrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1":
          {},
      },
    },
    properties: {
      description: "This is new load test resource",
      encryption: {
        identity: {
          type: "UserAssigned",
          resourceId:
            "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/dummyrg/providers/Microsoft.ManagedIdentity/userAssignedIdentities/id1",
        },
        keyUrl: "https://dummy.vault.azure.net/keys/dummykey1",
      },
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createALoadTestResource();
}

main().catch(console.error);
