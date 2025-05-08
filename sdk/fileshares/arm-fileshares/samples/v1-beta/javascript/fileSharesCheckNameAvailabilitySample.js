// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { FileSharesClient } = require("@azure/arm-fileshares");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to implements local CheckNameAvailability operations
 *
 * @summary implements local CheckNameAvailability operations
 * x-ms-original-file: 2024-01-01-preview/FileShares_CheckNameAvailability_MaximumSet_Gen.json
 */
async function fileSharesCheckNameAvailabilityMaximumSetGenGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.checkNameAvailability("westus", {
    name: "vmwdhkiwetidjwivkh",
    type: "akrkqjmn",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to implements local CheckNameAvailability operations
 *
 * @summary implements local CheckNameAvailability operations
 * x-ms-original-file: 2024-01-01-preview/FileShares_CheckNameAvailability_MinimumSet_Gen.json
 */
async function fileSharesCheckNameAvailabilityMaximumSetGenGeneratedByMinimumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "AD98EFD8-D1E9-4F38-A862-E066114E49EE";
  const client = new FileSharesClient(credential, subscriptionId);
  const result = await client.fileShares.checkNameAvailability("westus", {});
  console.log(result);
}

async function main() {
  await fileSharesCheckNameAvailabilityMaximumSetGenGeneratedByMaximumSetRule();
  await fileSharesCheckNameAvailabilityMaximumSetGenGeneratedByMinimumSetRule();
}

main().catch(console.error);
