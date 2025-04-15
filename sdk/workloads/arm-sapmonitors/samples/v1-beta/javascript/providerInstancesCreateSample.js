// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Db2_Provider.json
 */
async function createADb2Provider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbName: "dbName",
          dbPassword: "password",
          dbPasswordUri: "",
          dbPort: "dbPort",
          dbUsername: "username",
          hostname: "hostname",
          providerType: "Db2",
          sapSid: "SID",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Db2_Provider_With_Root_Certificate.json
 */
async function createADb2ProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbName: "dbName",
          dbPassword: "password",
          dbPasswordUri: "",
          dbPort: "dbPort",
          dbUsername: "username",
          hostname: "hostname",
          providerType: "Db2",
          sapSid: "SID",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Ms_Sql_Server_Provider.json
 */
async function createAMsSqlServerProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbPassword: "****",
          dbPasswordUri: "",
          dbPort: "5912",
          dbUsername: "user",
          hostname: "hostname",
          providerType: "MsSqlServer",
          sapSid: "sid",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Ms_Sql_Server_Provider_With_Root_Certificate.json
 */
async function createAMsSqlServerProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbPassword: "****",
          dbPasswordUri: "",
          dbPort: "5912",
          dbUsername: "user",
          hostname: "hostname",
          providerType: "MsSqlServer",
          sapSid: "sid",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Os_Provider.json
 */
async function createAOSProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          prometheusUrl: "http://192.168.0.0:9090/metrics",
          providerType: "PrometheusOS",
          sapSid: "SID",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Os_Provider_With_Root_Certificate.json
 */
async function createAOSProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          prometheusUrl: "http://192.168.0.0:9090/metrics",
          providerType: "PrometheusOS",
          sapSid: "SID",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Prometheus_Ha_Cluster_Provider.json
 */
async function createAPrometheusHaClusterProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          clusterName: "clusterName",
          hostname: "hostname",
          prometheusUrl: "http://192.168.0.0:9090/metrics",
          providerType: "PrometheusHaCluster",
          sid: "sid",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Prometheus_Ha_Cluster_Provider_With_Root_Certificate.json
 */
async function createAPrometheusHaClusterProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          clusterName: "clusterName",
          hostname: "hostname",
          prometheusUrl: "http://192.168.0.0:9090/metrics",
          providerType: "PrometheusHaCluster",
          sid: "sid",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Hana_Provider.json
 */
async function createASAPMonitorHanaProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbName: "db",
          dbPassword: "****",
          dbPasswordUri: "",
          dbUsername: "user",
          hostname: "name",
          instanceNumber: "00",
          providerType: "SapHana",
          sapSid: "SID",
          sqlPort: "0000",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslHostNameInCertificate: "xyz.domain.com",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Hana_Provider_With_Root_Certificate.json
 */
async function createASAPMonitorHanaProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          dbName: "db",
          dbPassword: "****",
          dbPasswordUri: "",
          dbUsername: "user",
          hostname: "name",
          instanceNumber: "00",
          providerType: "SapHana",
          sapSid: "SID",
          sqlPort: "0000",
          sslHostNameInCertificate: "xyz.domain.com",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Net_Weaver_Provider.json
 */
async function createASAPMonitorNetWeaverProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          providerType: "SapNetWeaver",
          sapClientId: "111",
          sapHostFileEntries: ["127.0.0.1 name fqdn"],
          sapHostname: "name",
          sapInstanceNr: "00",
          sapPassword: "****",
          sapPasswordUri: "",
          sapPortNumber: "1234",
          sapSid: "SID",
          sapUsername: "username",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Net_Weaver_Provider_With_Root_Certificate.json
 */
async function createASAPMonitorNetWeaverProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          providerType: "SapNetWeaver",
          sapClientId: "111",
          sapHostFileEntries: ["127.0.0.1 name fqdn"],
          sapHostname: "name",
          sapInstanceNr: "00",
          sapPassword: "****",
          sapPasswordUri: "",
          sapPortNumber: "1234",
          sapSid: "SID",
          sapUsername: "username",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Oracle_Provider_With_Root_Certificate.json
 */
async function createASAPMonitorOracleProviderWithRootCertificate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          providerType: "Oracle",
          sapSid: "SID",
          hostname: "hostname",
          dbUsername: "username",
          dbName: "dbName",
          dbPassword: "password",
          dbPasswordUri: "",
          dbPort: "dbPort",
          sslPreference: "RootCertificate",
        },
      },
    },
  );
  console.log(result);
}

/**
 * This sample demonstrates how to creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates a provider instance for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/ProviderInstances_Create_Create_A_Sap_Monitor_Oracle_provider.json
 */
async function createAOracleProvider() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.providerInstances.create(
    "myResourceGroup",
    "mySapMonitor",
    "myProviderInstance",
    {
      properties: {
        providerSettings: {
          providerType: "Oracle",
          sapSid: "SID",
          hostname: "hostname",
          dbUsername: "username",
          dbName: "dbName",
          dbPassword: "password",
          dbPasswordUri: "",
          dbPort: "dbPort",
          sslCertificateUri: "https://storageaccount.blob.core.windows.net/containername/filename",
          sslPreference: "ServerCertificate",
        },
      },
    },
  );
  console.log(result);
}

async function main() {
  await createADb2Provider();
  await createADb2ProviderWithRootCertificate();
  await createAMsSqlServerProvider();
  await createAMsSqlServerProviderWithRootCertificate();
  await createAOSProvider();
  await createAOSProviderWithRootCertificate();
  await createAPrometheusHaClusterProvider();
  await createAPrometheusHaClusterProviderWithRootCertificate();
  await createASAPMonitorHanaProvider();
  await createASAPMonitorHanaProviderWithRootCertificate();
  await createASAPMonitorNetWeaverProvider();
  await createASAPMonitorNetWeaverProviderWithRootCertificate();
  await createASAPMonitorOracleProviderWithRootCertificate();
  await createAOracleProvider();
}

main().catch(console.error);
