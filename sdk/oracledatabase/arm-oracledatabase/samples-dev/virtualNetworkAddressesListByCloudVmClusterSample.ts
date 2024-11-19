// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list VirtualNetworkAddress resources by CloudVmCluster
 *
 * @summary list VirtualNetworkAddress resources by CloudVmCluster
 * x-ms-original-file: 2024-06-01/virtualNetworkAddresses_listByParent.json
 */
async function virtualNetworkAddressesListByCloudVmCluster() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.virtualNetworkAddresses.listByCloudVmCluster(
    "rg000",
    "cluster1",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  virtualNetworkAddressesListByCloudVmCluster();
}

main().catch(console.error);
