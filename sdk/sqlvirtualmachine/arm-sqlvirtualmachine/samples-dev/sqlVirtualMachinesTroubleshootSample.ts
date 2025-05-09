// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlVirtualMachineClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to starts SQL virtual machine troubleshooting.
 *
 * @summary starts SQL virtual machine troubleshooting.
 * x-ms-original-file: 2023-10-01/TroubleshootSqlVirtualMachine.json
 */
async function startSQLVirtualMachineTroubleshootingOperation(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.troubleshoot("testrg", "testvm");
  console.log(result);
}

async function main(): Promise<void> {
  await startSQLVirtualMachineTroubleshootingOperation();
}

main().catch(console.error);
