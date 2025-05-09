// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesClient } from "@azure/arm-hardwaresecuritymodules";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to deletes the private endpoint connection for the Cloud Hsm Cluster.
 *
 * @summary deletes the private endpoint connection for the Cloud Hsm Cluster.
 * x-ms-original-file: 2024-06-30-preview/CloudHsmClusterPrivateEndpointConnection_Delete_MaximumSet_Gen.json
 */
async function cloudHsmClusterPrivateEndpointConnectionDeleteMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new HardwareSecurityModulesClient(credential, subscriptionId);
  await client.privateEndpointConnections.delete("rgcloudhsm", "chsm1", "sample-pec");
}

async function main(): Promise<void> {
  await cloudHsmClusterPrivateEndpointConnectionDeleteMaximumSetGen();
}

main().catch(console.error);
