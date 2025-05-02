// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ProgrammableConnectivityClient } = require("@azure/arm-programmableconnectivity");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a Gateway.
 *
 * @summary delete a Gateway.
 * x-ms-original-file: 2025-03-30-preview/Gateways_Delete_MaximumSet_Gen.json
 */
async function gatewaysDeleteMaximumSetGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "93519EA0-206F-42A3-8126-A234F19328E0";
  const client = new ProgrammableConnectivityClient(credential, subscriptionId);
  await client.gateways.delete("rgopenapi", "GatewayName");
}

async function main() {
  await gatewaysDeleteMaximumSetGeneratedByMaximumSetRule();
}

main().catch(console.error);
