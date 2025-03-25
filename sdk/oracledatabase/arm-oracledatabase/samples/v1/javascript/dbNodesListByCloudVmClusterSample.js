// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list DbNode resources by CloudVmCluster
 *
 * @summary list DbNode resources by CloudVmCluster
 * x-ms-original-file: 2024-10-01-preview/dbNodes_listByParent.json
 */
async function dbNodesListByCloudVmCluster() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.dbNodes.listByCloudVmCluster("rg000", "cluster1")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await dbNodesListByCloudVmCluster();
}

main().catch(console.error);
