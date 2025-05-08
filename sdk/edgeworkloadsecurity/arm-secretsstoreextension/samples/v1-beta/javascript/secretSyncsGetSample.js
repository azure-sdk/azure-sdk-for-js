// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { SecretsStoreExtensionManagementClient } = require("@azure/arm-secretsstoreextension");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to gets the properties of a SecretSync instance.
 *
 * @summary gets the properties of a SecretSync instance.
 * x-ms-original-file: 2024-08-21-preview/SecretSyncs_Get_MaximumSet_Gen.json
 */
async function secretSyncsGet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new SecretsStoreExtensionManagementClient(credential, subscriptionId);
  const result = await client.secretSyncs.get("rg-ssc-example", "secretsync-ssc-example");
  console.log(result);
}

async function main() {
  await secretSyncsGet();
}

main().catch(console.error);
