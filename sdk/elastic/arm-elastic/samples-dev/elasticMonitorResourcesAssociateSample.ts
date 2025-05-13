// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to associate traffic filter for the given deployment.
 *
 * @summary associate traffic filter for the given deployment.
 * x-ms-original-file: 2025-01-15-preview/AssociateTrafficFilter_Update.json
 */
async function associateTrafficFilterAssociate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  await client.elasticMonitorResources.associate("myResourceGroup", "myMonitor", {
    rulesetId: "31d91b5afb6f4c2eaaf104c97b1991dd",
  });
}

async function main(): Promise<void> {
  await associateTrafficFilterAssociate();
}

main().catch(console.error);
