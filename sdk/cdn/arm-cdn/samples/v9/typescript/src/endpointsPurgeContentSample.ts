/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { PurgeParameters, CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Removes a content from CDN.
 *
 * @summary Removes a content from CDN.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/Endpoints_PurgeContent.json
 */
async function endpointsPurgeContent() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const contentFilePaths: PurgeParameters = { contentPaths: ["/folder1"] };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.endpoints.beginPurgeContentAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    contentFilePaths,
  );
  console.log(result);
}

async function main() {
  endpointsPurgeContent();
}

main().catch(console.error);
