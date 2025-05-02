// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ProgrammableConnectivityClient } = require("@azure/arm-programmableconnectivity");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update Gateway tags.
 *
 * @summary update Gateway tags.
 * x-ms-original-file: 2025-03-30-preview/Gateways_Update_MaximumSet_Gen.json
 */
async function gatewaysUpdateMaximumSetGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "93519EA0-206F-42A3-8126-A234F19328E0";
  const client = new ProgrammableConnectivityClient(credential, subscriptionId);
  const result = await client.gateways.update("rgopenapi", "GatewayName", {
    tags: {},
  });
  console.log(result);
}

async function main() {
  await gatewaysUpdateMaximumSetGeneratedByMaximumSetRule();
}

main().catch(console.error);
