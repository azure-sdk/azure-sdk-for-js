/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { ServiceFabricMeshManagementClient } from "@azure/arm-servicefabricmesh";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Get the information about the specified named secret value resources. The information does not include the actual value of the secret.
 *
 * @summary Get the information about the specified named secret value resources. The information does not include the actual value of the secret.
 * x-ms-original-file: specification/servicefabricmesh/resource-manager/Microsoft.ServiceFabricMesh/preview/2018-09-01-preview/examples/secrets/values/get.json
 */
async function getSecretValue(): Promise<void> {
  const subscriptionId =
    process.env["SERVICEFABRICMESH_SUBSCRIPTION_ID"] ||
    "00000000-0000-0000-0000-000000000000";
  const resourceGroupName =
    process.env["SERVICEFABRICMESH_RESOURCE_GROUP"] || "sbz_demo";
  const secretResourceName = "dbConnectionString";
  const secretValueResourceName = "v1";
  const credential = new DefaultAzureCredential();
  const client = new ServiceFabricMeshManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.secretValueOperations.get(
    resourceGroupName,
    secretResourceName,
    secretValueResourceName
  );
  console.log(result);
}

async function main(): Promise<void> {
  getSecretValue();
}

main().catch(console.error);
