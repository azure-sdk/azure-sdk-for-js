// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { LoadTestMgmtClient } from "@azure/arm-loadtesting";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists the endpoints that agents may call as part of load testing.
 *
 * @summary lists the endpoints that agents may call as part of load testing.
 * x-ms-original-file: 2023-12-01-preview/LoadTests_ListOutboundNetworkDependenciesEndpoints.json
 */
async function listsTheEndpointsThatAgentsMayCallAsPartOfLoadTesting() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new LoadTestMgmtClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.outboundNetworkDependenciesEndpoints(
    "default-azureloadtest-japaneast",
    "sampleloadtest",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  listsTheEndpointsThatAgentsMayCallAsPartOfLoadTesting();
}

main().catch(console.error);
