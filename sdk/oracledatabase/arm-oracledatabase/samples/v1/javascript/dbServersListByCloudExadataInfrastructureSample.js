// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseClient } = require("@azure/arm-oracledatabase");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list DbServer resources by CloudExadataInfrastructure
 *
 * @summary list DbServer resources by CloudExadataInfrastructure
 * x-ms-original-file: 2024-10-01-preview/dbServers_listByParent.json
 */
async function dbServersListByCloudExadataInfrastructure() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.dbServers.listByCloudExadataInfrastructure("rg000", "infra1")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await dbServersListByCloudExadataInfrastructure();
}

main().catch(console.error);
