// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a DataflowGraphResource
 *
 * @summary create a DataflowGraphResource
 * x-ms-original-file: 2025-07-01-preview/DataflowGraph_CreateOrUpdate_MaximumSet_Gen.json
 */
async function dataflowGraphCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.dataflowGraph.createOrUpdate(
    "rgiotoperations",
    "resource-123",
    "resource-123",
    "resource-123",
    {
      properties: {
        mode: "Enabled",
        requestDiskPersistence: "Enabled",
        nodes: [],
        nodeConnections: [
          {
            from: {
              name: "wsqbccd",
              schema: {
                serializationFormat: "Delta",
                schemaRef: "gkyqreiunkvdgggy",
              },
            },
            to: {
              name: "dqvkpqshglptwrjfeblfzbofmkfktzbjhidsvqctmbzocbtgtkbgrayg",
            },
          },
        ],
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
  await dataflowGraphCreateOrUpdateMaximumSet();
}

main().catch(console.error);
