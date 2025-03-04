// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzureVMwareSolutionAPIClient } from "@azure/arm-avs";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_ArcReg.json
 */
async function addonsGetArcReg(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "arc");
  console.log(result);
}

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_HCX.json
 */
async function addonsGetHcx(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "hcx");
  console.log(result);
}

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_HCX_With_Networks.json
 */
async function addonsGetHcxWithNetworks(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "hcx");
  console.log(result);
}

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_SRM.json
 */
async function addonsGetSrm(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "srm");
  console.log(result);
}

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_VR.json
 */
async function addonsGetVr(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "vr");
  console.log(result);
}

/**
 * This sample demonstrates how to get a Addon
 *
 * @summary get a Addon
 * x-ms-original-file: 2024-09-01/Addons_Get_VR_With_Network.json
 */
async function addonsGetWithNetwork(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new AzureVMwareSolutionAPIClient(credential, subscriptionId);
  const result = await client.addons.get("group1", "cloud1", "vr");
  console.log(result);
}

async function main(): Promise<void> {
  await addonsGetArcReg();
  await addonsGetHcx();
  await addonsGetHcxWithNetworks();
  await addonsGetSrm();
  await addonsGetVr();
  await addonsGetWithNetwork();
}

main().catch(console.error);
