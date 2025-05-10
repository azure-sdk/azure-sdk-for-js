// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a DiagnosticResource
 *
 * @summary create a DiagnosticResource
 * x-ms-original-file: 2025-07-01-preview/Diagnostic_CreateOrUpdate_MaximumSet_Gen.json
 */
async function diagnosticCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.diagnostic.createOrUpdate(
    "rgiotoperations",
    "resource-123",
    "resource-123",
    {
      properties: {
        remoteSupport: {
          state: "Enabled",
          accessLevel: "Diagnose",
          expirationTimestamp: "tkaq",
        },
      },
      extendedLocation: {
        name: "qmbrfwcpwwhggszhrdjv",
        type: "CustomLocation",
      },
    },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await diagnosticCreateOrUpdateMaximumSet();
}

main().catch(console.error);
