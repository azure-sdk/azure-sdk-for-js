// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DataManagementClient } = require("@azure/arm-informaticadatamanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to get a InformaticaOrganizationResource
 *
 * @summary get a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Get_MaximumSet_Gen.json
 */
async function organizationsGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.get("rgopenapi", "Sg");
  console.log(result);
}

/**
 * This sample demonstrates how to get a InformaticaOrganizationResource
 *
 * @summary get a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Get_MinimumSet_Gen.json
 */
async function organizationsGetMin() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.get("rgopenapi", "q");
  console.log(result);
}

async function main() {
  await organizationsGet();
  await organizationsGetMin();
}

main().catch(console.error);
