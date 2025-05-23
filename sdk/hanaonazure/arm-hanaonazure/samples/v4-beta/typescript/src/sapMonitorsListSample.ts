/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { HanaManagementClient } from "@azure/arm-hanaonazure";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor.
 *
 * @summary Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor.
 * x-ms-original-file: specification/hanaonazure/resource-manager/Microsoft.HanaOnAzure/preview/2020-02-07-preview/examples/SapMonitors_List.json
 */
async function listAllSapMonitorsInASubscription(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const credential = new DefaultAzureCredential();
  const client = new HanaManagementClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.sapMonitors.list()) {
    resArray.push(item);
  }
  console.log(resArray);
}

listAllSapMonitorsInASubscription().catch(console.error);
