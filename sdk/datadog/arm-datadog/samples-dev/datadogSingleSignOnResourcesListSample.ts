// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the single sign-on configurations for a given monitor resource.
 *
 * @summary list the single sign-on configurations for a given monitor resource.
 * x-ms-original-file: 2023-10-20/SingleSignOnConfigurations_List.json
 */
async function singleSignOnConfigurationsList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.datadogSingleSignOnResources.list(
    "myResourceGroup",
    "myMonitor",
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await singleSignOnConfigurationsList();
}

main().catch(console.error);
