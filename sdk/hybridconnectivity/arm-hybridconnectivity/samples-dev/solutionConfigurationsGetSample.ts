// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a SolutionConfiguration
 *
 * @summary get a SolutionConfiguration
 * x-ms-original-file: 2024-12-01/SolutionConfigurations_Get.json
 */
async function solutionConfigurationsGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new HybridConnectivityClient(credential, subscriptionId);
  const result = await client.solutionConfigurations.get("ymuj", "tks");
  console.log(result);
}

async function main() {
  solutionConfigurationsGet();
}

main().catch(console.error);
