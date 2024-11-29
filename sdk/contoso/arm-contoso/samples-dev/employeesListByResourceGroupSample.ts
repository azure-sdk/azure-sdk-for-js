// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ContosoClient } from "@azure/arm-contoso";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to list Employee resources by resource group
 *
 * @summary list Employee resources by resource group
 * x-ms-original-file: 2021-10-01-preview/Employees_ListByResourceGroup.json
 */
async function employeesListByResourceGroup() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "11809CA1-E126-4017-945E-AA795CD5C5A9";
  const client = new ContosoClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.employees.listByResourceGroup("rgopenapi")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  employeesListByResourceGroup();
}

main().catch(console.error);
