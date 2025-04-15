// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template.
 *
 * @summary gets a list of alert templates in the specified SAP monitor. The operations returns various properties of each alert template.
 * x-ms-original-file: 2024-02-01-preview/AlertTemplates_List.json
 */
async function listAllAlertTemplatesInASubscription() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.alertTemplates.list("myResourceGroup", "mySapMonitor", {
    providerType: "SapHana",
  })) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  await listAllAlertTemplatesInASubscription();
}

main().catch(console.error);
