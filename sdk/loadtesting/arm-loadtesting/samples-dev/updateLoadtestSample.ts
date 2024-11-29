// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a LoadTestResource
 *
 * @summary update a LoadTestResource
 * x-ms-original-file: 2023-12-01-preview/LoadTests_Update.json
 */
async function updateALoadTestResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  await client.updateLoadtest("dummyrg", "myLoadTest", {
    tags: { Team: "Dev Exp", Division: "LT" },
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
        identity: { type: "SystemAssigned", resourceId: null },
        keyUrl: "https://dummy.vault.azure.net/keys/dummykey1",
      },
    },
  });
}

async function main() {
  updateALoadTestResource();
}

main().catch(console.error);
