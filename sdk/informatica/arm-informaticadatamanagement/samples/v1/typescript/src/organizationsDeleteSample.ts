// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete a InformaticaOrganizationResource
 *
 * @summary delete a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Delete_MaximumSet_Gen.json
 */
async function organizationsDelete(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  await client.organizations.delete("rgopenapi", "_");
}

/**
 * This sample demonstrates how to delete a InformaticaOrganizationResource
 *
 * @summary delete a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Delete_MinimumSet_Gen.json
 */
async function organizationsDeleteMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  await client.organizations.delete("rgopenapi", "_-");
}

async function main(): Promise<void> {
  await organizationsDelete();
  await organizationsDeleteMin();
}

main().catch(console.error);
