// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a tag rule set for a given monitor resource.
 *
 * @summary delete a tag rule set for a given monitor resource.
 * x-ms-original-file: 2025-01-15-preview/TagRules_Delete.json
 */
async function tagRulesDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.tagRules.delete("myResourceGroup", "myMonitor", "default");
}

async function main(): Promise<void> {
  await tagRulesDelete();
}

main().catch(console.error);
