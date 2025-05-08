// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or update a file share.
 *
 * @summary create or update a file share.
 * x-ms-original-file: 2024-01-01-preview/FileShares_CreateOrUpdate_MaximumSet_Gen.json
 */
async function fileSharesCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.createOrUpdate("rgfileshares", "testfileshare", {
    properties: {
      mountName: "kyujsrfk",
      mediaTier: "SSD",
      redundancy: "Local",
      protocol: "NFS",
      provisionedStorageGiB: 15,
      provisionedIOPerSec: 29,
      provisionedThroughputMiBPerSec: 25,
      nfsProtocolProperties: { rootSquash: "NoRootSquash" },
      publicAccessProperties: { allowedSubnets: ["pvjhqlnqfiubvbfcggthlpy"] },
      publicNetworkAccess: "Enabled",
    },
    tags: { key1961: "p" },
    location: "xrrekltkvmzdinob",
  });
  console.log(result);
}

async function main(): Promise<void> {
  await fileSharesCreateOrUpdateMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
