/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/**
 * This sample demonstrates how to Check if an IoT Central application subdomain is available.
 *
 * @summary Check if an IoT Central application subdomain is available.
 * x-ms-original-file: specification/iotcentral/resource-manager/Microsoft.IoTCentral/stable/2021-06-01/examples/Apps_CheckSubdomainAvailability.json
 */
import { OperationInputs, IotCentralClient } from "@azure/arm-iotcentral";
import { DefaultAzureCredential } from "@azure/identity";

async function appsSubdomainAvailability(): Promise<void> {
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const operationInputs: OperationInputs = {
    name: "myiotcentralapp",
    type: "IoTApps"
  };
  const credential = new DefaultAzureCredential();
  const client = new IotCentralClient(credential, subscriptionId);
  const result = await client.apps.checkSubdomainAvailability(operationInputs);
  console.log(result);
}

appsSubdomainAvailability().catch(console.error);
