// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { AzurePlaywrightServiceClient } = require("@azure/arm-playwrighttesting");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get subscription quota by name.
 *
 * @summary get subscription quota by name.
 * x-ms-original-file: 2024-12-01/Quotas_Get.json
 */
async function quotasGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzurePlaywrightServiceClient(credential, subscriptionId);
  const result = await client.quotas.get("eastus", "ScalableExecution");
  console.log(result);
}

async function main() {
  quotasGet();
}

main().catch(console.error);
