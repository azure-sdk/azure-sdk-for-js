// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { StorageClient } = require("@azure/arm-qumulo");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update a FileSystemResource
 *
 * @summary update a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Update_MaximumSet_Gen.json
 */
async function fileSystemsUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.update("rgQumulo", "ahpixnvykleksjlr", {
    identity: { type: "None", userAssignedIdentities: { key7679: {} } },
    tags: { key357: "ztkkvhfia" },
    properties: {
      marketplaceDetails: {
        marketplaceSubscriptionId: "xaqtkloiyovmexqhn",
        planId: "fwtpz",
        offerId: "s",
        publisherId: "czxcfrwodazyaft",
        termUnit: "cfwwczmygsimcyvoclcw",
        marketplaceSubscriptionStatus: "PendingFulfillmentStart",
      },
      userDetails: { email: "aqsnzyroo" },
      delegatedSubnetId: "bqaryqsjlackxphpmzffgoqsvm",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to update a FileSystemResource
 *
 * @summary update a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_Update_MinimumSet_Gen.json
 */
async function fileSystemsUpdateMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "aaaaaaa";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.update("rgQumulo", "aaaaaaaaaaaaaaaaa", {});
  console.log(result);
}

async function main() {
  await fileSystemsUpdate();
  await fileSystemsUpdateMinimumSetGen();
}

main().catch(console.error);
