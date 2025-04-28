// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { SecretsStoreExtensionManagementClient } = require("@azure/arm-secretsstoreextension");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates new or updates a SecretSync instance.
 *
 * @summary creates new or updates a SecretSync instance.
 * x-ms-original-file: 2024-08-21-preview/SecretSyncs_CreateOrUpdate_MaximumSet_Gen.json
 */
async function secretSyncsCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new SecretsStoreExtensionManagementClient(credential, subscriptionId);
  const result = await client.secretSyncs.createOrUpdate(
    "rg-ssc-example",
    "secretsync-ssc-example",
    {
      properties: {
        secretProviderClassName: "akvspc-ssc-example",
        serviceAccountName: "example-k8s-sa-name",
        kubernetesSecretType: "Opaque",
        objectSecretMapping: [{ sourcePath: "kv-secret-name/0", targetKey: "kv-secret-name/0" }],
      },
      extendedLocation: {
        name: "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg-ssc-example/providers/Microsoft.ExtendedLocation/customLocations/example-custom-location",
        type: "CustomLocation",
      },
      tags: { "example-tag": "example-tag-value" },
      location: "eastus",
    },
  );
  console.log(result);
}

async function main() {
  await secretSyncsCreateOrUpdate();
}

main().catch(console.error);
