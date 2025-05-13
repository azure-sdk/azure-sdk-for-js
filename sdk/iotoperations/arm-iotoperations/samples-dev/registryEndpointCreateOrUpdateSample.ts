// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a RegistryEndpointResource
 *
 * @summary create a RegistryEndpointResource
 * x-ms-original-file: 2025-07-01-preview/RegistryEndpoint_CreateOrUpdate_MaximumSet_Gen.json
 */
async function registryEndpointCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.registryEndpoint.createOrUpdate(
    "rgiotoperations",
    "resource-123",
    "resource-123",
    {
      properties: { host: "contoso.azurecr.io" },
      extendedLocation: {
        name: "qmbrfwcpwwhggszhrdjv",
        type: "CustomLocation",
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await registryEndpointCreateOrUpdateMaximumSet();
}

main().catch(console.error);
