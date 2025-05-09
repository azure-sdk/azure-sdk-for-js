// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SqlVirtualMachineClient } from "@azure/arm-sqlvirtualmachine";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineAutomatedBackupWeekly.json
 */
async function createsOrUpdatesASQLVirtualMachineForAutomatedBackUpSettingsWithWeeklyAndDaysOfTheWeekToRunTheBackUp(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineMAX.json
 */
async function createsOrUpdatesASQLVirtualMachineWithMaxParameters(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineMIN.json
 */
async function createsOrUpdatesASQLVirtualMachineWithMinParameters(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineStorageConfigurationEXTEND.json
 */
async function createsOrUpdatesASQLVirtualMachineForStorageConfigurationSettingsToExtendDataLogOrTempDBStoragePool(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineStorageConfigurationNEW.json
 */
async function createsOrUpdatesASQLVirtualMachineForStorageConfigurationSettingsToNEWDataLogAndTempDBStoragePool(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateSqlVirtualMachineVmIdentitySettings.json
 */
async function createsOrUpdatesASQLVirtualMachineToEnableTheUsageOfVirtualMachineManagedIdentity(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

/**
 * This sample demonstrates how to creates or updates a SQL virtual machine.
 *
 * @summary creates or updates a SQL virtual machine.
 * x-ms-original-file: 2023-10-01/CreateOrUpdateVirtualMachineWithVMGroup.json
 */
async function createsOrUpdatesASQLVirtualMachineAndJoinsItToASQLVirtualMachineGroup(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-1111-2222-3333-444444444444";
  const client = new SqlVirtualMachineClient(credential, subscriptionId);
  const result = await client.sqlVirtualMachines.createOrUpdate("testrg", "testvm");
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesASQLVirtualMachineForAutomatedBackUpSettingsWithWeeklyAndDaysOfTheWeekToRunTheBackUp();
  await createsOrUpdatesASQLVirtualMachineWithMaxParameters();
  await createsOrUpdatesASQLVirtualMachineWithMinParameters();
  await createsOrUpdatesASQLVirtualMachineForStorageConfigurationSettingsToExtendDataLogOrTempDBStoragePool();
  await createsOrUpdatesASQLVirtualMachineForStorageConfigurationSettingsToNEWDataLogAndTempDBStoragePool();
  await createsOrUpdatesASQLVirtualMachineToEnableTheUsageOfVirtualMachineManagedIdentity();
  await createsOrUpdatesASQLVirtualMachineAndJoinsItToASQLVirtualMachineGroup();
}

main().catch(console.error);
