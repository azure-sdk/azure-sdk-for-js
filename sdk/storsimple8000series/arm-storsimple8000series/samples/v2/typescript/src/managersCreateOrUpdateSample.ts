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
  Manager,
  StorSimple8000SeriesManagementClient
} from "@azure/arm-storsimple8000series";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to Creates or updates the manager.
 *
 * @summary Creates or updates the manager.
 * x-ms-original-file: specification/storsimple8000series/resource-manager/Microsoft.StorSimple/stable/2017-06-01/examples/ManagersCreateOrUpdate.json
 */
async function managersCreateOrUpdate(): Promise<void> {
  const subscriptionId = "4385cf00-2d3a-425a-832f-f4285b1c9dce";
  const resourceGroupName = "ResourceGroupForSDKTest";
  const managerName = "ManagerForSDKTest2";
  const parameters: Manager = {
    cisIntrinsicSettings: { type: "GardaV1" },
    location: "westus",
    sku: { name: "Standard" }
  };
  const credential = new DefaultAzureCredential();
  const client = new StorSimple8000SeriesManagementClient(
    credential,
    subscriptionId
  );
  const result = await client.managers.createOrUpdate(
    resourceGroupName,
    managerName,
    parameters
  );
  console.log(result);
}

managersCreateOrUpdate().catch(console.error);
