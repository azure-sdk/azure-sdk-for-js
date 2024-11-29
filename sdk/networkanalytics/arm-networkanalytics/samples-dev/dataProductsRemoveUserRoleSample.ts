// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsClient } from "@azure/arm-networkanalytics";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to remove role from the data product.
 *
 * @summary remove role from the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_RemoveUserRole_MaximumSet_Gen.json
 */
async function dataProductsRemoveUserRoleMaximumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  await client.dataProducts.removeUserRole(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      roleId: "00000000-0000-0000-0000-00000000000",
      principalId: "00000000-0000-0000-0000-00000000000",
      userName: "UserName",
      dataTypeScope: ["scope"],
      principalType: "User",
      role: "Reader",
      roleAssignmentId: "00000000-0000-0000-0000-00000000000",
    },
  );
}

/**
 * This sample demonstrates how to remove role from the data product.
 *
 * @summary remove role from the data product.
 * x-ms-original-file: 2023-11-15/DataProducts_RemoveUserRole_MinimumSet_Gen.json
 */
async function dataProductsRemoveUserRoleMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new NetworkAnalyticsClient(credential, subscriptionId);
  await client.dataProducts.removeUserRole(
    "aoiresourceGroupName",
    "dataproduct01",
    {
      roleId: "00000000-0000-0000-0000-00000000000",
      principalId: "00000000-0000-0000-0000-00000000000",
      userName: "UserName",
      dataTypeScope: ["scope"],
      principalType: "User",
      role: "Reader",
      roleAssignmentId: "00000000-0000-0000-0000-00000000000",
    },
  );
}

async function main() {
  dataProductsRemoveUserRoleMaximumSetGen();
  dataProductsRemoveUserRoleMaximumSetGenGeneratedByMinimumSetRuleMinimumSetGen();
}

main().catch(console.error);
