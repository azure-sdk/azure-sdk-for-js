// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create and Associate private link traffic filter for the given deployment.
 *
 * @summary create and Associate private link traffic filter for the given deployment.
 * x-ms-original-file: 2025-01-15-preview/PrivateLinkTrafficFilters_Create.json
 */
async function createAndAssociatePLFilterCreate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.createAndAssociatePLFilterCreate(
    "myResourceGroup",
    "myMonitor",
    {
      privateEndpointGuid: "fdb54d3b-e85e-4d08-8958-0d2f7g523df9",
      privateEndpointName: "myPrivateEndpoint",
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createAndAssociatePLFilterCreate();
}

main().catch(console.error);
