// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthBotClient } from "@azure/arm-healthbot";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns all the resources of a particular type belonging to a resource group
 *
 * @summary returns all the resources of a particular type belonging to a resource group
 * x-ms-original-file: 2024-02-01/ListBotsByResourceGroup.json
 */
async function listBotsByResourceGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscription-id";
  const client = new HealthBotClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.healthBots.listByResourceGroup("OneResourceGroupName")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listBotsByResourceGroup();
}

main().catch(console.error);
