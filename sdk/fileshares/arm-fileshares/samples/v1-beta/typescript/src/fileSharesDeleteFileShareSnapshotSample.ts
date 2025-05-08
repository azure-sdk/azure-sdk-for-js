// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a FileShareSnapshot.
 *
 * @summary delete a FileShareSnapshot.
 * x-ms-original-file: 2024-01-01-preview/FileShares_DeleteFileShareSnapshot_MaximumSet_Gen.json
 */
async function fileSharesDeleteFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  await client.fileShares.deleteFileShareSnapshot(
    "rgfileshares",
    "testfileshare",
    "testfilesharesnapshot",
  );
}

async function main(): Promise<void> {
  await fileSharesDeleteFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
