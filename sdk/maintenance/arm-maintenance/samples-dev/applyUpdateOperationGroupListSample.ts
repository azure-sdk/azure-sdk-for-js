// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceClient } from "@azure/arm-maintenance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get Configuration records within a subscription
 *
 * @summary get Configuration records within a subscription
 * x-ms-original-file: 2023-10-01-preview/ApplyUpdates_List.json
 */
async function applyUpdatesList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const client = new MaintenanceClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.applyUpdateOperationGroup.list()) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await applyUpdatesList();
}

main().catch(console.error);
