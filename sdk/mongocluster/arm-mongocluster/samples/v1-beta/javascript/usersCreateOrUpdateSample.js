// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { MongoClusterManagementClient } = require("@azure/arm-mongocluster");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates a new user or updates an existing user on a mongo cluster.
 *
 * @summary creates a new user or updates an existing user on a mongo cluster.
 * x-ms-original-file: 2025-04-01-preview/MongoClusters_UserCreateOrUpdate.json
 */
async function createsAUserOnAMongoClusterResource() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const client = new MongoClusterManagementClient(credential, subscriptionId);
  const result = await client.users.createOrUpdate(
    "TestGroup",
    "myMongoCluster",
    "uuuuuuuu-uuuu-uuuu-uuuu-uuuuuuuuuuuu",
    {
      properties: {
        roles: [{ role: "dbOwner", db: "admin" }],
        identityProvider: {
          type: "MicrosoftEntraID",
          properties: { principalType: "user" },
        },
      },
    },
  );
  console.log(result);
}

async function main() {
  await createsAUserOnAMongoClusterResource();
}

main().catch(console.error);
