// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create User inside elastic deployment which are used by customers to perform operations on the elastic deployment
 *
 * @summary create User inside elastic deployment which are used by customers to perform operations on the elastic deployment
 * x-ms-original-file: 2025-01-15-preview/ExternalUserInfo.json
 */
async function externalUserCreateOrUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.createOrUpdate(
    "myResourceGroup",
    "myMonitor",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await externalUserCreateOrUpdate();
}

main().catch(console.error);
