// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to informs if the current subscription is being already monitored for selected Datadog organization.
 *
 * @summary informs if the current subscription is being already monitored for selected Datadog organization.
 * x-ms-original-file: 2023-10-20/CreationSupported_List.json
 */
async function creationSupportedList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.creationSupportedOperationGroup.list("00000000-0000-0000-0000")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await creationSupportedList();
}

main().catch(console.error);
