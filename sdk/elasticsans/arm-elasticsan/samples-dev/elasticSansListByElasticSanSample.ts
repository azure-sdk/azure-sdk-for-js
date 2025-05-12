// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanClient } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the private link resources that need to be created for a elastic San.
 *
 * @summary gets the private link resources that need to be created for a elastic San.
 * x-ms-original-file: 2024-07-01-preview/PrivateLinkResources_ListByElasticSan_MaximumSet_Gen.json
 */
async function privateLinkResourcesListByElasticSanMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.elasticSans.listByElasticSan(
    "resourcegroupname",
    "elasticsanname",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

/**
 * This sample demonstrates how to gets the private link resources that need to be created for a elastic San.
 *
 * @summary gets the private link resources that need to be created for a elastic San.
 * x-ms-original-file: 2024-07-01-preview/PrivateLinkResources_ListByElasticSan_MinimumSet_Gen.json
 */
async function privateLinkResourcesListByElasticSanMinimumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.elasticSans.listByElasticSan(
    "resourcegroupname",
    "elasticsanname",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await privateLinkResourcesListByElasticSanMaximumSetGen();
  await privateLinkResourcesListByElasticSanMinimumSetGen();
}

main().catch(console.error);
