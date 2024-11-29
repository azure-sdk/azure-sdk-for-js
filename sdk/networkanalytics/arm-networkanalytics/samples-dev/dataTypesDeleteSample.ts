// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to delete data type resource.
 *
 * @summary delete data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Delete_MaximumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  await client.dataTypes.delete(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
  );
}

/**
 * This sample demonstrates how to delete data type resource.
 *
 * @summary delete data type resource.
 * x-ms-original-file: 2023-11-15/DataTypes_Delete_MinimumSet_Gen.json
 */
async function dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  await client.dataTypes.delete(
    "aoiresourceGroupName",
    "dataproduct01",
    "datatypename",
  );
}

async function main() {
  dataTypesDeleteMaximumSetGen();
  dataTypesDeleteMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
