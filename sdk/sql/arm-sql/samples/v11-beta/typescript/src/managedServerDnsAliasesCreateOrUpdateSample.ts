/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  ManagedServerDnsAliasCreation,
  SqlManagementClient,
} from "@azure/arm-sql";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates a managed server DNS alias.
 *
 * @summary Creates a managed server DNS alias.
 * x-ms-original-file: specification/sql/resource-manager/Microsoft.Sql/preview/2021-11-01-preview/examples/ManagedServerDnsAliasCreateOrUpdate.json
 */
async function createManagedServerDnsAlias(): Promise<void> {
  const subscriptionId =
    process.env["SQL_SUBSCRIPTION_ID"] ||
    "00000000-1111-2222-3333-444444444444";
  const resourceGroupName = process.env["SQL_RESOURCE_GROUP"] || "Default";
  const managedInstanceName = "dns-mi";
  const dnsAliasName = "dns-alias-mi";
  const parameters: ManagedServerDnsAliasCreation = {};
  const credential = new DefaultAzureCredential();
  const client = new SqlManagementClient(credential, subscriptionId);
  const result =
    await client.managedServerDnsAliases.beginCreateOrUpdateAndWait(
      resourceGroupName,
      managedInstanceName,
      dnsAliasName,
      parameters,
    );
  console.log(result);
}

async function main(): Promise<void> {
  createManagedServerDnsAlias();
}

main().catch(console.error);
