// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a FileShareSnapshot.
 *
 * @summary update a FileShareSnapshot.
 * x-ms-original-file: 2024-01-01-preview/FileShares_UpdateFileShareSnapshot_MaximumSet_Gen.json
 */
async function fileSharesUpdateFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.updateFileShareSnapshot(
    "rgfileshares",
    "testfileshare",
    "testfilesharesnapshot",
    { properties: { metadata: { key5497: "xxznaauato" } } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fileSharesUpdateFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
