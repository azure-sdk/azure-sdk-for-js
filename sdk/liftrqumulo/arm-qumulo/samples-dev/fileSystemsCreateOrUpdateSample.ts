// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageClient } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a FileSystemResource
 *
 * @summary create a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fileSystemsCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "382E8C7A-AC80-4D70-8580-EFE99537B9B7";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.createOrUpdate(
    "rgQumulo",
    "hfcmtgaes",
    {
      properties: {
        marketplaceDetails: {
          marketplaceSubscriptionId: "xaqtkloiyovmexqhn",
          planId: "fwtpz",
          offerId: "s",
          publisherId: "czxcfrwodazyaft",
          termUnit: "cfwwczmygsimcyvoclcw",
          marketplaceSubscriptionStatus: "PendingFulfillmentStart",
        },
        storageSku: "yhyzby",
        userDetails: { email: "aqsnzyroo" },
        delegatedSubnetId: "jykmxrf",
        clusterLoginUrl: "ykaynsjvhihdthkkvvodjrgc",
        privateIPs: ["gzken"],
        adminPassword: "fakeTestSecretPlaceholder",
        availabilityZone: "eqdvbdiuwmhhzqzmksmwllpddqquwt",
      },
      identity: { type: "None", userAssignedIdentities: { key7679: {} } },
      tags: { key7090: "rurrdiaqp" },
      location: "pnb",
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to create a FileSystemResource
 *
 * @summary create a FileSystemResource
 * x-ms-original-file: 2024-06-19/FileSystems_CreateOrUpdate_MinimumSet_Gen.json
 */
async function fileSystemsCreateOrUpdateMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "aaaaaaaaaaaaaaaaaaaaaaaa";
  const client = new StorageClient(credential, subscriptionId);
  const result = await client.fileSystems.createOrUpdate(
    "rgopenapi",
    "aaaaaaaa",
    {
      location: "aaaaaaaaaaaaaaaaaaaaaaaaa",
      properties: {
        adminPassword: "fakeTestSecretPlaceholder",
        delegatedSubnetId: "aaaaaaaaaa",
        marketplaceDetails: {
          marketplaceSubscriptionId: "aaaaaaaaaaaaa",
          marketplaceSubscriptionStatus: "PendingFulfillmentStart",
          offerId: "aaaaaaaaaaaaaaaaaaaaaaaaa",
          planId: "aaaaaa",
        },
        storageSku: "Standard",
        userDetails: { email: "viptslwulnpaupfljvnjeq" },
      },
    },
  );
  console.log(result);
}

async function main() {
  fileSystemsCreateOrUpdate();
  fileSystemsCreateOrUpdateMinimumSetGen();
}

main().catch(console.error);
