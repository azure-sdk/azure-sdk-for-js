// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a SolutionConfiguration
 *
 * @summary delete a SolutionConfiguration
 * x-ms-original-file: 2024-12-01/SolutionConfigurations_Delete.json
 */
async function solutionConfigurationsDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new HybridConnectivityManagementAPIClient(credential, subscriptionId);
  await client.solutionConfigurations.SolutionConfigurations_delete("ymuj", "stu");
}

async function main(): Promise<void> {
  solutionConfigurationsDelete();
}

main().catch(console.error);
