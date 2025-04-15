// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { WorkloadsClient } = require("@azure/arm-sapmonitors");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to creates a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary creates a SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Create_Create_A_Sap_Monitor.json
 */
async function createASAPMonitor() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.create("myResourceGroup", "mySapMonitor", {
    location: "westus",
    properties: {
      appLocation: "westus",
      appServicePlanConfiguration: { capacity: 1, tier: "ElasticPremium" },
      logAnalyticsWorkspaceArmId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace",
      managedResourceGroupConfiguration: { name: "myManagedRg" },
      monitorSubnet:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet",
      routingPreference: "RouteAll",
    },
    tags: { key: "value" },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to creates a SAP monitor for the specified subscription, resource group, and resource name.
 *
 * @summary creates a SAP monitor for the specified subscription, resource group, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Monitors_Create_Create_A_Sap_Monitor_With_System_Assigned_Identity.json
 */
async function createASAPMonitorWithSystemAssignedIdentity() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.monitors.create("myResourceGroup", "mySapMonitor", {
    identity: { type: "SystemAssigned" },
    location: "westus",
    properties: {
      appLocation: "westus",
      appServicePlanConfiguration: { capacity: 1, tier: "ElasticPremium" },
      logAnalyticsWorkspaceArmId:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourcegroups/myResourceGroup/providers/microsoft.operationalinsights/workspaces/myWorkspace",
      managedResourceGroupConfiguration: { name: "myManagedRg" },
      monitorSubnet:
        "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.Network/virtualNetworks/myVnet/subnets/mySubnet",
      routingPreference: "RouteAll",
    },
    tags: { key: "value" },
  });
  console.log(result);
}

async function main() {
  await createASAPMonitor();
  await createASAPMonitorWithSystemAssignedIdentity();
}

main().catch(console.error);
