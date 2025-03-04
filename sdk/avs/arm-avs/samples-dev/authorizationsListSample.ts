// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list ExpressRouteAuthorization resources by PrivateCloud
 *
 * @summary list ExpressRouteAuthorization resources by PrivateCloud
 * x-ms-original-file: 2024-09-01/Authorizations_List.json
 */
async function authorizationsList(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.authorizations.list("group1", "cloud1")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await authorizationsList();
}

main().catch(console.error);
