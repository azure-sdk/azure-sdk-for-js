// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { LoadTestMgmtClient } = require("@azure/arm-loadtesting");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to lists the endpoints that agents may call as part of load testing.
 *
 * @summary lists the endpoints that agents may call as part of load testing.
 * x-ms-original-file: 2024-12-01-preview/LoadTests_ListOutboundNetworkDependenciesEndpoints.json
 */
async function listsTheEndpointsThatAgentsMayCallAsPartOfLoadTesting() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.outboundNetworkDependenciesEndpoints(
    "default-azureloadtest-japaneast",
    "sampleloadtest",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listsTheEndpointsThatAgentsMayCallAsPartOfLoadTesting();
}

main().catch(console.error);
