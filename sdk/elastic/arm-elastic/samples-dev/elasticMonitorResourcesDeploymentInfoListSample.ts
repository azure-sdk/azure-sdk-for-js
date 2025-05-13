// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticClient } from "@azure/arm-elastic";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to fetch information regarding Elastic cloud deployment corresponding to the Elastic monitor resource.
 *
 * @summary fetch information regarding Elastic cloud deployment corresponding to the Elastic monitor resource.
 * x-ms-original-file: 2025-01-15-preview/DeploymentInfo_List.json
 */
async function deploymentInfoList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new ElasticClient(credential, subscriptionId);
  const result = await client.elasticMonitorResources.deploymentInfoList(
    "myResourceGroup",
    "myMonitor",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await deploymentInfoList();
}

main().catch(console.error);
