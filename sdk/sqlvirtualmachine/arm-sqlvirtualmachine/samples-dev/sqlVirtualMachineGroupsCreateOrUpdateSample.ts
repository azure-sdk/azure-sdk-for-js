// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlVirtualMachineClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine group.
 *
 * @summary creates or updates a SQL virtual machine group.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineGroup.json
 */
async function createsOrUpdatesASQLVirtualMachineGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachineGroups.createOrUpdate("testrg", "testvmgroup");
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesASQLVirtualMachineGroup();
}

main().catch(console.error);
