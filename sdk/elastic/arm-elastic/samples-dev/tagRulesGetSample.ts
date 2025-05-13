// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a tag rule set for a given monitor resource.
 *
 * @summary get a tag rule set for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/TagRules_Get.json
 */
async function tagRulesGet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.tagRules.get("myResourceGroup", "myMonitor", "default");
  console.log(result);
}

async function main(): Promise<void> {
  await tagRulesGet();
}

main().catch(console.error);
