// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HybridConnectivityManagementAPIClient } from "@azure/arm-hybridconnectivity";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the service details to the target resource.
 *
 * @summary deletes the service details to the target resource.
 * x-ms-original-file: 2023-03-15/ServiceConfigurationsDeleteSSH.json
 */
async function serviceConfigurationsDeleteSSH() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new HybridConnectivityManagementAPIClient(
    credential,
    subscriptionId,
  );
  await client.serviceConfigurations.delete(
    "subscriptions/f5bcc1d9-23af-4ae9-aca1-041d0f593a63/resourceGroups/hybridRG/providers/Microsoft.HybridCompute/machines/testMachine/providers/Microsoft.HybridConnectivity/endpoints/default",
    "default",
    "SSH",
  );
}

async function main() {
  serviceConfigurationsDeleteSSH();
}

main().catch(console.error);
