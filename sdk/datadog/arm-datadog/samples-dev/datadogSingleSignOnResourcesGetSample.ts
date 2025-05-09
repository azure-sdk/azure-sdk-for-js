// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the datadog single sign-on resource for the given Monitor.
 *
 * @summary gets the datadog single sign-on resource for the given Monitor.
 * x-ms-original-file: 2023-10-20/SingleSignOnConfigurations_Get.json
 */
async function singleSignOnConfigurationsGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const result = await client.datadogSingleSignOnResources.get(
    "myResourceGroup",
    "myMonitor",
    "default",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await singleSignOnConfigurationsGet();
}

main().catch(console.error);
