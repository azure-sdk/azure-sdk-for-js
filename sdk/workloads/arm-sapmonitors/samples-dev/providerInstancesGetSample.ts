// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Db2_Provider.json
 */
async function getPropertiesOfADb2Provider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Ms_Sql_Server_Provider.json
 */
async function getPropertiesOfAMsSqlServerProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Os_Provider.json
 */
async function getPropertiesOfAOSProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Prometheus_Ha_Cluster_Provider.json
 */
async function getPropertiesOfAPrometheusHaClusterProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Sap_Monitor_Hana_Provider.json
 */
async function getPropertiesOfASAPMonitorHanaProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Sap_Monitor_Net_Weaver_Provider.json
 */
async function getPropertiesOfASAPMonitorNetWeaverProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

/**
 * This sample demonstrates how to gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary gets properties of a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Get_Get_Properties_Of_A_Sap_Monitor_Oracle_Provider.json
 */
async function getPropertiesOfASAPMonitorOracleProvider(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.get(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await getPropertiesOfADb2Provider();
  await getPropertiesOfAMsSqlServerProvider();
  await getPropertiesOfAOSProvider();
  await getPropertiesOfAPrometheusHaClusterProvider();
  await getPropertiesOfASAPMonitorHanaProvider();
  await getPropertiesOfASAPMonitorNetWeaverProvider();
  await getPropertiesOfASAPMonitorOracleProvider();
}

main().catch(console.error);
