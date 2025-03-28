/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type {
  GuestUsagesResource,
  GuestUsagesCreateOptionalParams,
} from "@azure/arm-azureadexternalidentities";
import { ExternalIdentitiesConfigurationClient } from "@azure/arm-azureadexternalidentities";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates a Guest Usages resource, which is used to linking a subscription to an instance of Azure AD External Identities. [Learn more](https://aka.ms/extidbilling).
 *
 * @summary Creates a Guest Usages resource, which is used to linking a subscription to an instance of Azure AD External Identities. [Learn more](https://aka.ms/extidbilling).
 * x-ms-original-file: specification/cpim/resource-manager/Microsoft.AzureActiveDirectory/stable/2021-04-01/examples/GuestUsagesCreate.json
 */
async function guestUsagesCreate(): Promise<void> {
  const subscriptionId = "c80fb759-c965-4c6a-9110-9b2b2d038882";
  const resourceGroupName = "contosoResourceGroup";
  const resourceName = "contoso.onmicrosoft.com";
  const resource: GuestUsagesResource = {
    name: "contoso.onmicrosoft.com",
    location: "United States",
    tenantId: "c963dd1a-9174-4c23-8bae-733d7f955492",
  };
  const options: GuestUsagesCreateOptionalParams = { resource };
  const credential = new DefaultAzureCredential();
  const client = new ExternalIdentitiesConfigurationClient(credential, subscriptionId);
  const result = await client.guestUsages.create(resourceGroupName, resourceName, options);
  console.log(result);
}

guestUsagesCreate().catch(console.error);
