// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { EdgeClient } = require("@azure/arm-sitemanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to list Site resources by resource group
 *
 * @summary list Site resources by resource group
 * x-ms-original-file: 2024-02-01-preview/Sites_ListByResourceGroup.json
 */
async function listBySiteSubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "0154f7fe-df09-4981-bf82-7ad5c1f596eb";
  const client = new EdgeClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.sites.listByResourceGroup("string")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listBySiteSubscription();
}

main().catch(console.error);
