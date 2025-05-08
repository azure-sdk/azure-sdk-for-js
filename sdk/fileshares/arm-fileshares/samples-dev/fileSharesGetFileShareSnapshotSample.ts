// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a FileShareSnapshot
 *
 * @summary get a FileShareSnapshot
 * x-ms-original-file: 2024-01-01-preview/FileShares_GetFileShareSnapshot_MaximumSet_Gen.json
 */
async function fileSharesGetFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.getFileShareSnapshot(
    "rgfileshares",
    "testfileshare",
    "testfilesharesnapshot",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await fileSharesGetFileShareSnapshotMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
