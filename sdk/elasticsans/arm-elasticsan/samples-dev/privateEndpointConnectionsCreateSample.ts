// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanClient } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update the state of specified private endpoint connection associated with the Elastic San
 *
 * @summary update the state of specified private endpoint connection associated with the Elastic San
 * x-ms-original-file: 2024-07-01-preview/PrivateEndpointConnections_Create_MaximumSet_Gen.json
 */
async function privateEndpointConnectionsCreateMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  await client.privateEndpointConnections.create(
    "resourcegroupname",
    "elasticsanname",
    "privateendpointconnectionname",
  );
}

/**
 * This sample demonstrates how to update the state of specified private endpoint connection associated with the Elastic San
 *
 * @summary update the state of specified private endpoint connection associated with the Elastic San
 * x-ms-original-file: 2024-07-01-preview/PrivateEndpointConnections_Create_MinimumSet_Gen.json
 */
async function privateEndpointConnectionsCreateMinimumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  await client.privateEndpointConnections.create(
    "resourcegroupname",
    "elasticsanname",
    "privateendpointconnectionname",
  );
}

async function main(): Promise<void> {
  await privateEndpointConnectionsCreateMaximumSetGen();
  await privateEndpointConnectionsCreateMinimumSetGen();
}

main().catch(console.error);
