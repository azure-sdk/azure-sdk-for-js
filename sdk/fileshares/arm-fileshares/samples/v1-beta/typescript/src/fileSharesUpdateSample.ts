// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a FileShare
 *
 * @summary update a FileShare
 * x-ms-original-file: 2024-01-01-preview/FileShares_Update_MaximumSet_Gen.json
 */
async function fileSharesUpdateMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.update("rgfileshares", "testfileshare", {
    tags: { key9986: "aq" },
    properties: {
      provisionedStorageGiB: 20,
      provisionedIOPerSec: 19,
      provisionedThroughputMiBPerSec: 27,
      nfsProtocolProperties: { rootSquash: "NoRootSquash" },
      publicAccessProperties: { allowedSubnets: ["pvjhqlnqfiubvbfcggthlpy"] },
      publicNetworkAccess: "Enabled",
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await fileSharesUpdateMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
