/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { ConfigurationProfileAssignment } from "@azure/arm-automanage";
import { AutomanageClient } from "@azure/arm-automanage";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Creates an association between a ARC machine and Automanage configuration profile
 *
 * @summary Creates an association between a ARC machine and Automanage configuration profile
 * x-ms-original-file: specification/automanage/resource-manager/Microsoft.Automanage/stable/2022-05-04/examples/createOrUpdateConfigurationProfileHCRPAssignment.json
 */
async function createOrUpdateHcrpConfigurationProfileAssignment(): Promise<void> {
  const subscriptionId = process.env["AUTOMANAGE_SUBSCRIPTION_ID"] || "mySubscriptionId";
  const resourceGroupName = process.env["AUTOMANAGE_RESOURCE_GROUP"] || "myResourceGroupName";
  const machineName = "myMachineName";
  const configurationProfileAssignmentName = "default";
  const parameters: ConfigurationProfileAssignment = {
    properties: {
      configurationProfile:
        "/providers/Microsoft.Automanage/bestPractices/AzureBestPracticesProduction",
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomanageClient(credential, subscriptionId);
  const result = await client.configurationProfileHcrpAssignments.createOrUpdate(
    resourceGroupName,
    machineName,
    configurationProfileAssignmentName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateHcrpConfigurationProfileAssignment();
}

main().catch(console.error);
