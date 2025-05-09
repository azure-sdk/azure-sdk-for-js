// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceClient } from "@azure/arm-maintenance";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to register configuration for resource.
 *
 * @summary register configuration for resource.
 * x-ms-original-file: 2023-10-01-preview/ConfigurationAssignments_CreateOrUpdateParent.json
 */
async function configurationAssignmentsCreateOrUpdateParent(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const client = new MaintenanceClient(credential, subscriptionId);
  const result = await client.configurationAssignments.createOrUpdateParent(
    "examplerg",
    "Microsoft.Compute",
    "virtualMachineScaleSets",
    "smdtest1",
    "virtualMachines",
    "smdvm1",
    "workervmPolicy",
  );
  console.log(result);
}

async function main(): Promise<void> {
  await configurationAssignmentsCreateOrUpdateParent();
}

main().catch(console.error);
