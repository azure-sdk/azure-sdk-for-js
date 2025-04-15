// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { EdgeClient } = require("@azure/arm-sitemanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update a Site
 *
 * @summary update a Site
 * x-ms-original-file: 2024-02-01-preview/SitesBySubscription_Update.json
 */
async function patchSiteSubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0154f7fe-df09-4981-bf82-7ad5c1f596eb";
  const client = new EdgeClient(credential, subscriptionId);
  const result = await client.sitesBySubscription.update("string", {
    properties: {
      description: "string",
      addressResourceId:
        "/subscriptions/0154f7fe-df09-4981-bf82-7ad5c1f596eb/resourceGroups/us-site-rg/providers/Microsoft.EdgeOrder/addresses/12343213",
      displayName: "string",
    },
  });
  console.log(result);
}

async function main() {
  await patchSiteSubscription();
}

main().catch(console.error);
