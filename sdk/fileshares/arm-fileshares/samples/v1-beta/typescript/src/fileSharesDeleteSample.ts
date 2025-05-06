// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { FileSharesClient } from "@azure/arm-fileshares";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a FileShare
 *
 * @summary delete a FileShare
 * x-ms-original-file: 2024-01-01-preview/FileShares_Delete_MaximumSet_Gen.json
 */
async function fileSharesDeleteMaximumSetGenGeneratedByMaximumSetRule(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  await client.fileShares.delete("rgfileshares", "testfileshare");
}

async function main(): Promise<void> {
  await fileSharesDeleteMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
