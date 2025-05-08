// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { FileSharesClient } = require("@azure/arm-fileshares");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a FileShare
 *
 * @summary get a FileShare
 * x-ms-original-file: 2024-01-01-preview/FileShares_Get_MaximumSet_Gen.json
 */
async function fileSharesGetMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.get("rgfileshares", "testfileshare");
  console.log(result);
}

async function main() {
  await fileSharesGetMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
