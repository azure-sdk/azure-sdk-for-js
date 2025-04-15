// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-migrationdiscoverysap";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to lists the Server Instance resources for the given SAP Instance resource.
 *
 * @summary lists the Server Instance resources for the given SAP Instance resource.
 * x-ms-original-file: 2023-10-01-preview/ServerInstances_List.json
 */
async function listsTheServerInstanceResourcesForTheGivenSAPInstanceResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "6d875e77-e412-4d7d-9af4-8895278b4443";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.serverInstances.listBySapInstance(
    "test-rg",
    "SampleSite",
    "MPP_MPP",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listsTheServerInstanceResourcesForTheGivenSAPInstanceResource();
}

main().catch(console.error);
