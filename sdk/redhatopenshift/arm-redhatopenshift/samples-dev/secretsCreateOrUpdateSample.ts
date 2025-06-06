/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import type { Secret } from "@azure/arm-redhatopenshift";
import { AzureRedHatOpenShiftClient } from "@azure/arm-redhatopenshift";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to The operation returns properties of a Secret.
 *
 * @summary The operation returns properties of a Secret.
 * x-ms-original-file: specification/redhatopenshift/resource-manager/Microsoft.RedHatOpenShift/openshiftclusters/stable/2023-11-22/examples/Secrets_CreateOrUpdate.json
 */
async function createsOrUpdatesASecretWithTheSpecifiedSubscriptionResourceGroupAndResourceName(): Promise<void> {
  const subscriptionId = process.env["REDHATOPENSHIFT_SUBSCRIPTION_ID"] || "subscriptionId";
  const resourceGroupName = process.env["REDHATOPENSHIFT_RESOURCE_GROUP"] || "resourceGroup";
  const resourceName = "resourceName";
  const childResourceName = "childResourceName";
  const parameters: Secret = {};
  const credential = new DefaultAzureCredential();
  const client = new AzureRedHatOpenShiftClient(credential, subscriptionId);
  const result = await client.secrets.createOrUpdate(
    resourceGroupName,
    resourceName,
    childResourceName,
    parameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createsOrUpdatesASecretWithTheSpecifiedSubscriptionResourceGroupAndResourceName();
}

main().catch(console.error);
