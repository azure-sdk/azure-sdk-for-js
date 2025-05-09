// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @summary gets the private endpoint connection for the Cloud Hsm Cluster.
 * x-ms-original-file: 2024-06-30-preview/CloudHsmClusterPrivateEndpointConnection_Get_MaximumSet_Gen.json
 */
async function cloudHsmClusterPrivateEndpointConnectionGetMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  const result = await client.privateEndpointConnections.get("rgcloudhsm", "chsm1", "sample-pec");
  console.log(result);
}

async function main(): Promise<void> {
  await cloudHsmClusterPrivateEndpointConnectionGetMaximumSetGen();
}

main().catch(console.error);
