// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { EdgeClient } = require("@azure/arm-sitemanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to create a Site
 *
 * @summary create a Site
 * x-ms-original-file: 2024-02-01-preview/Sites_CreateOrUpdate.json
 */
async function createOrUpdateSite() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0154f7fe-df09-4981-bf82-7ad5c1f596eb";
  const client = new EdgeClient(credential, subscriptionId);
  const result = await client.sites.createOrUpdate("string", "string", {
    properties: {
      displayName: "string",
      description: "string",
      addressResourceId:
        "/subscriptions/680d0dad-59aa-4464-3df3-b34b2b42738c/resourceGroups/us-site-rg/providers/Microsoft.EdgeOrder/addresses/12343213",
    },
  });
  console.log(result);
}

async function main() {
  await createOrUpdateSite();
}

main().catch(console.error);
