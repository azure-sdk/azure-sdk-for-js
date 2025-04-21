// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to updates the Clouds resource.
 *
 * @summary updates the Clouds resource.
 * x-ms-original-file: 2025-03-13/Clouds_Update_MaximumSet_Gen.json
 */
async function cloudsUpdateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.update("rgscvmm", "P", {
    tags: { key5266: "hjpcnwmpnixsolrxnbl" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to updates the Clouds resource.
 *
 * @summary updates the Clouds resource.
 * x-ms-original-file: 2025-03-13/Clouds_Update_MinimumSet_Gen.json
 */
async function cloudsUpdateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.clouds.update("rgscvmm", "_", {});
  console.log(result);
}

async function main() {
  await cloudsUpdateMaximumSet();
  await cloudsUpdateMinimumSet();
}

main().catch(console.error);
