/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import { OriginUpdateParameters, CdnManagementClient } from "@azure/arm-cdn";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Updates an existing origin within an endpoint.
 *
 * @summary Updates an existing origin within an endpoint.
 * x-ms-original-file: specification/cdn/resource-manager/Microsoft.Cdn/stable/2024-02-01/examples/Origins_Update.json
 */
async function originsUpdate() {
  const subscriptionId = process.env["CDN_SUBSCRIPTION_ID"] || "subid";
  const resourceGroupName = process.env["CDN_RESOURCE_GROUP"] || "RG";
  const profileName = "profile1";
  const endpointName = "endpoint1";
  const originName = "www-someDomain-net";
  const originUpdateProperties: OriginUpdateParameters = {
    enabled: true,
    httpPort: 42,
    httpsPort: 43,
    originHostHeader: "www.someDomain2.net",
    priority: 1,
    privateLinkAlias:
      "APPSERVER.d84e61f0-0870-4d24-9746-7438fa0019d1.westus2.azure.privatelinkservice",
    weight: 50,
  };
  const credential = new DefaultAzureCredential();
  const client = new CdnManagementClient(credential, subscriptionId);
  const result = await client.origins.beginUpdateAndWait(
    resourceGroupName,
    profileName,
    endpointName,
    originName,
    originUpdateProperties,
  );
  console.log(result);
}

async function main() {
  originsUpdate();
}

main().catch(console.error);
