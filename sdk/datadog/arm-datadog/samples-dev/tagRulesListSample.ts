// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogClient } from "@azure/arm-datadog";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list the tag rules for a given monitor resource.
 *
 * @summary list the tag rules for a given monitor resource.
 * x-ms-original-file: 2023-10-20/TagRules_List.json
 */
async function tagRulesList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatadogClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.tagRules.list("myResourceGroup", "myMonitor")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await tagRulesList();
}

main().catch(console.error);
