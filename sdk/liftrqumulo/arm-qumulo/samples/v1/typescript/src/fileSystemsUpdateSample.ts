/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { FileSystemResourceUpdate, QumuloStorage } from "@azure/arm-qumulo";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Update a FileSystemResource
 *
 * @summary Update a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_Update_MaximumSet_Gen.json
 */
async function fileSystemsUpdateMaximumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "ulseeqylxb";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "nauwwbfoqehgbhdsmkewoboyxeqg";
  const properties: FileSystemResourceUpdate = {
    identity: { type: "None", userAssignedIdentities: { key4522: {} } },
    properties: {
      clusterLoginUrl: "adabmuthwrbjshzfbo",
      delegatedSubnetId: "vjfirtaljehawmflyfianw",
      marketplaceDetails: {
        marketplaceSubscriptionId: "ujrcqvxfnhxxheoth",
        marketplaceSubscriptionStatus: "PendingFulfillmentStart",
        offerId: "eiyhbmpwgezcmzrrfoiskuxlcvwojf",
        planId: "x",
        publisherId: "wfmokfdjbwpjhz"
      },
      privateIPs: ["eugjqbaoucgjsopzfrq"],
      userDetails: { email: "aa" }
    },
    tags: { key7534: "jsgqvqbagquvxowbrkanyhzvo" }
  };
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.update(
    resourceGroupName,
    fileSystemName,
    properties
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Update a FileSystemResource
 *
 * @summary Update a FileSystemResource
 * x-ms-original-file: specification/liftrqumulo/resource-manager/Qumulo.Storage/stable/2022-10-12/examples/FileSystems_Update_MinimumSet_Gen.json
 */
async function fileSystemsUpdateMinimumSetGen(): Promise<void> {
  const subscriptionId =
    process.env["LIFTRQUMULO_SUBSCRIPTION_ID"] || "aaaaaaa";
  const resourceGroupName =
    process.env["LIFTRQUMULO_RESOURCE_GROUP"] || "rgQumulo";
  const fileSystemName = "aaaaaaaaaaaaaaaaa";
  const properties: FileSystemResourceUpdate = {};
  const credential = new DefaultAzureCredential();
  const client = new QumuloStorage(credential, subscriptionId);
  const result = await client.fileSystems.update(
    resourceGroupName,
    fileSystemName,
    properties
  );
  console.log(result);
}

async function main(): Promise<void> {
  fileSystemsUpdateMaximumSetGen();
  fileSystemsUpdateMinimumSetGen();
}

main().catch(console.error);
