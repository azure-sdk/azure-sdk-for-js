// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a DiagnosticResource
 *
 * @summary get a DiagnosticResource
 * x-ms-original-file: 2025-07-01-preview/Diagnostic_Get_MaximumSet_Gen.json
 */
async function diagnosticGetMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.diagnostic.get("rgiotoperations", "resource-123", "resource-123");
  console.log(result);
}

async function main(): Promise<void> {
  await diagnosticGetMaximumSet();
}

main().catch(console.error);
