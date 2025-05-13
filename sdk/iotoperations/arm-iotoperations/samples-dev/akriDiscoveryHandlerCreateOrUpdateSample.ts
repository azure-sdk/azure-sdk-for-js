// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a AkriDiscoveryHandlerResource
 *
 * @summary create a AkriDiscoveryHandlerResource
 * x-ms-original-file: 2025-07-01-preview/AkriDiscoveryHandler_CreateOrUpdate_MaximumSet_Gen.json
 */
async function akriDiscoveryHandlerCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.akriDiscoveryHandler.createOrUpdate(
    "rgiotoperations",
    "resource-name123",
    "resource-name123",
    {
      properties: {
        aioMetadata: {
          aioMinVersion: "nxusafsppaikld",
          aioMaxVersion: "yrmlixhxsnrgialgwruyk",
        },
        additionalConfiguration: { key2206: "ysosuqsgtnwlyq" },
        diagnostics: { logs: { level: "inypis" } },
        mode: "Enabled",
        discoverableDeviceEndpointTypes: [{ endpointType: "chkkpymxhp", version: "chkkpymxhp" }],
        mqttConnectionConfiguration: {
          host: "mfxhevl",
          protocol: "Mqtt",
          keepAliveSeconds: 0,
          maxInflightMessages: 0,
          sessionExpirySeconds: 0,
          tls: {
            mode: "Enabled",
            trustedCaCertificateConfigMapRef: "tectjjvukvelsreihwadh",
          },
        },
        imageConfiguration: {
          imageName: "vrglpcosiuiulgwqkjbrdxnyjphp",
          imagePullPolicy: "Always",
          replicas: 4,
        },
        secrets: [
          {
            secretKey: "qblyfotyqcojcchpji",
            secretAlias: "daizzyhqznrvmmrg",
            secretRef: "vqxrhffxxfwqagwjcjimkmzjoxu",
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
  await akriDiscoveryHandlerCreateOrUpdateMaximumSet();
}

main().catch(console.error);
