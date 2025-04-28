// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsClient } from "@azure/arm-sapmonitors";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 *
 * @summary creates an alert for the specified subscription, resource group, SAP monitor name, and resource name.
 * x-ms-original-file: 2024-02-01-preview/Alerts_Create.json
 */
async function createsAnAlert(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-000000000000";
  const client = new WorkloadsClient(credential, subscriptionId);
  const result = await client.alerts.create("myResourceGroup", "mySapMonitor", "myAlert", {
    properties: {
      templateName: "saphana-cpu-memory-health",
      providerType: "SapHana",
      providerNames: ["hana-provider-1", "hana-provider-2"],
      alertRuleProperties: {
        status: "Enabled",
        severity: 3,
        actionGroups: [
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.insights/actiongroups/actiongroup1",
          "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/myResourceGroup/providers/Microsoft.insights/actiongroups/actiongroup2",
        ],
        threshold: 80,
        thresholdOperator: "GreaterThan",
        windowSize: 15,
        evaluationFrequency: 5,
        failingPeriodsToAlert: 3,
        failingPeriodsOperator: "GreaterThan",
        muteActionsDuration: 0,
        autoMitigate: "Disable",
        dimension: "cpu",
        alertQueryParameters: [
          { name: "providerInstance", value: "" },
          { name: "workType", value: "" },
        ],
      },
    },
  });
  console.log(result);
}

async function main(): Promise<void> {
  await createsAnAlert();
}

main().catch(console.error);
