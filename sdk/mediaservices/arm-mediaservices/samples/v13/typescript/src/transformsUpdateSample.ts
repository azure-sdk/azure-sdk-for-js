/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { Transform, AzureMediaServices } from "@azure/arm-mediaservices";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates a Transform.
 *
 * @summary Updates a Transform.
 * x-ms-original-file: specification/mediaservices/resource-manager/Microsoft.Media/Encoding/stable/2022-07-01/examples/transforms-update.json
 */
async function updateATransform(): Promise<void> {
  const subscriptionId =
    process.env["MEDIASERVICES_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["MEDIASERVICES_RESOURCE_GROUP"] || "contosoresources";
  const accountName = "contosomedia";
  const transformName = "transformToUpdate";
  const parameters: Transform = {
    description: "Example transform to illustrate update.",
    outputs: [
      {
        preset: {
          odataType: "#Microsoft.Media.BuiltInStandardEncoderPreset",
          presetName: "H264MultipleBitrate720p"
        },
        relativePriority: "High"
      }
    ]
  };
  const credential = new DefaultAzureCredential();
  const client = new AzureMediaServices(credential, subscriptionId);
  const result = await client.transforms.update(
    resourceGroupName,
    accountName,
    transformName,
    parameters
  );
  console.log(result);
}

async function main(): Promise<void> {
  updateATransform();
}

main().catch(console.error);
