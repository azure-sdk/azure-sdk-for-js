// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseClient } from "@azure/arm-oracledatabase";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to perform add storage capacity on exadata infra
 *
 * @summary perform add storage capacity on exadata infra
 * x-ms-original-file: 2024-06-01/exaInfra_addStorageCapacity.json
 */
async function cloudExadataInfrastructuresAddStorageCapacity() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new DatabaseClient(credential, subscriptionId);
  const result = await client.cloudExadataInfrastructures.addStorageCapacity(
    "rg000",
    "infra1",
  );
  console.log(result);
}

async function main() {
  cloudExadataInfrastructuresAddStorageCapacity();
}

main().catch(console.error);
