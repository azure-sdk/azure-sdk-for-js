// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceClient } from "@azure/arm-maintenance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create or Update configuration record
 *
 * @summary create or Update configuration record
 * x-ms-original-file: 2023-10-01-preview/MaintenanceConfigurations_CreateOrUpdateForResource.json
 */
async function maintenanceConfigurationsCreateOrUpdateForResource(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const client = new MaintenanceClient(credential, subscriptionId);
  const result = await client.maintenanceConfigurationOperationGroup.createOrUpdate(
    "examplerg",
    "configuration1",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await maintenanceConfigurationsCreateOrUpdateForResource();
}

main().catch(console.error);
