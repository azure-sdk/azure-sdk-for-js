// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DataManagementClient } = require("@azure/arm-informaticadatamanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to delete a InformaticaOrganizationResource
 *
 * @summary delete a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Delete_MaximumSet_Gen.json
 */
async function organizationsDelete() {
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
async function organizationsDeleteMin() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  await client.organizations.delete("rgopenapi", "_-");
}

async function main() {
  await organizationsDelete();
  await organizationsDeleteMin();
}

main().catch(console.error);
