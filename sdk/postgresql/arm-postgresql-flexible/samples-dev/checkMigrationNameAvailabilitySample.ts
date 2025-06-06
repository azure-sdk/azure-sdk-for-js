/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  MigrationNameAvailabilityResource,
  PostgreSQLManagementFlexibleServerClient,
} from "@azure/arm-postgresql-flexible";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to This method checks whether a proposed migration name is valid and available.
 *
 * @summary This method checks whether a proposed migration name is valid and available.
 * x-ms-original-file: specification/postgresql/resource-manager/Microsoft.DBforPostgreSQL/preview/2025-01-01-preview/examples/CheckMigrationNameAvailability.json
 */
async function checkMigrationNameAvailability(): Promise<void> {
  const subscriptionId = "ffffffff-ffff-ffff-ffff-ffffffffffff";
  const resourceGroupName = process.env["POSTGRESQL_RESOURCE_GROUP"] || "testrg";
  const targetDbServerName = "testtarget";
  const parameters: MigrationNameAvailabilityResource = {
    name: "name1",
    type: "Microsoft.DBforPostgreSQL/flexibleServers/migrations",
  };
  const credential = new DefaultAzureCredential();
  const client = new PostgreSQLManagementFlexibleServerClient(credential);
  const result = await client.checkMigrationNameAvailability(
    subscriptionId,
    resourceGroupName,
    targetDbServerName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await checkMigrationNameAvailability();
}

main().catch(console.error);
