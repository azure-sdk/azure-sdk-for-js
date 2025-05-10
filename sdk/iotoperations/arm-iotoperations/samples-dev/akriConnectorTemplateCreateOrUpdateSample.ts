// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsClient } from "@azure/arm-iotoperations";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a AkriConnectorTemplateResource
 *
 * @summary create a AkriConnectorTemplateResource
 * x-ms-original-file: 2025-07-01-preview/AkriConnectorTemplate_CreateOrUpdate_MaximumSet_Gen.json
 */
async function akriConnectorTemplateCreateOrUpdateMaximumSet(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "F8C729F9-DF9C-4743-848F-96EE433D8E53";
  const client = new IoTOperationsClient(credential, subscriptionId);
  const result = await client.akriConnectorTemplate.createOrUpdate(
    "rgiotoperations",
    "resource-name123",
    "resource-name123",
    {
      properties: {
        aioMetadata: {
          aioMinVersion: "tkiz",
          aioMaxVersion: "qoxwkvfxvqedqtju",
        },
        diagnostics: { logs: { level: "pe" } },
        deviceInboundEndpointTypes: [
          {
            endpointType: "chkkpymxhp",
            version: "chkkpymxhp",
            configurationSchemaRefs: {
              defaultDatasetConfigSchemaRef: "nsifbedzo",
              defaultEventsConfigSchemaRef: "tloquokslyfukgwhklpvpybdgykl",
              defaultProcessControlConfigSchemaRef: "mvjycfnxovmiijpwlpbeacryfdo",
              defaultStreamsConfigSchemaRef: "kdaitmohr",
              additionalConfigSchemaRef: "uxvyqeqxbamqwjy",
            },
          },
        ],
        mqttConnectionConfiguration: {
          host: "kj",
          protocol: "Mqtt",
          keepAliveSeconds: 0,
          maxInflightMessages: 0,
          sessionExpirySeconds: 0,
          tls: {
            mode: "Enabled",
            trustedCaCertificateConfigMapRef: "tectjjvukvelsreihwadh",
          },
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
  await akriConnectorTemplateCreateOrUpdateMaximumSet();
}

main().catch(console.error);
