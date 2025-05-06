// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { FileSharesClient } = require("@azure/arm-fileshares");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list FileShare resources by subscription ID
 *
 * @summary list FileShare resources by subscription ID
 * x-ms-original-file: 2024-01-01-preview/FileShares_ListBySubscription_MaximumSet_Gen.json
 */
async function fileSharesListBySubscriptionMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.fileShares.listBySubscription()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await fileSharesListBySubscriptionMaximumSetGenGeneratedByMaximumSetRule();
}

main().catch(console.error);
