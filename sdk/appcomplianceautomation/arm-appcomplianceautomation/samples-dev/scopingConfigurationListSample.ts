// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationClient } from "@azure/arm-appcomplianceautomation";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to returns a list format of the singleton scopingConfiguration for a specified report.
 *
 * @summary returns a list format of the singleton scopingConfiguration for a specified report.
 * x-ms-original-file: 2024-06-27/ScopingConfiguration_List.json
 */
async function scopingConfigurationList() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new AppComplianceAutomationClient(credential, subscriptionId);
  const resArray = new Array();
  for await (let item of client.scopingConfiguration.list("testReportName")) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main() {
  scopingConfigurationList();
}

main().catch(console.error);
