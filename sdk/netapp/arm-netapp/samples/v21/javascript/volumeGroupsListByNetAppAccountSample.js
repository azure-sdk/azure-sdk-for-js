/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

const { NetAppManagementClient } = require("@azure/arm-netapp");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to List all volume groups for given account
 *
 * @summary List all volume groups for given account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2025-03-01/examples/VolumeGroups_List_Oracle.json
 */
async function volumeGroupsListOracle() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.volumeGroups.listByNetAppAccount(
    resourceGroupName,
    accountName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

/**
 * This sample demonstrates how to List all volume groups for given account
 *
 * @summary List all volume groups for given account
 * x-ms-original-file: specification/netapp/resource-manager/Microsoft.NetApp/stable/2025-03-01/examples/VolumeGroups_List_SapHana.json
 */
async function volumeGroupsListSapHana() {
  const subscriptionId =
    process.env["NETAPP_SUBSCRIPTION_ID"] || "00000000-0000-0000-0000-000000000000";
  const resourceGroupName = process.env["NETAPP_RESOURCE_GROUP"] || "myRG";
  const accountName = "account1";
  const credential = new DefaultAzureCredential();
  const client = new NetAppManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.volumeGroups.listByNetAppAccount(
    resourceGroupName,
    accountName,
  )) {
    resArray.push(item);
  }
  console.log(resArray);
}

async function main() {
  await volumeGroupsListOracle();
  await volumeGroupsListSapHana();
}

main().catch(console.error);
