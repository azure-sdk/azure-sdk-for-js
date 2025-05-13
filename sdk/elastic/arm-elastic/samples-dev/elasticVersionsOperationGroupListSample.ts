// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a list of available versions for a region.
 *
 * @summary get a list of available versions for a region.
 * x-ms-original-file: 2025-01-15-preview/ElasticVersions_List.json
 */
async function elasticVersionsList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.elasticVersionsOperationGroup.list("myregion")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await elasticVersionsList();
}

main().catch(console.error);
