/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */
import {
  SoftwareUpdateConfigurationMachineRunsListOptionalParams,
  AutomationClient
} from "@azure/arm-automation";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Return list of software update configuration machine runs
 *
 * @summary Return list of software update configuration machine runs
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfigurationMachineRun/listSoftwareUpdateConfigurationMachineRuns.json
 */
async function listSoftwareUpdateConfigurationMachineRuns() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurationMachineRuns.list(
    resourceGroupName,
    automationAccountName
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Return list of software update configuration machine runs
 *
 * @summary Return list of software update configuration machine runs
 * x-ms-original-file: specification/automation/resource-manager/Microsoft.Automation/stable/2019-06-01/examples/softwareUpdateConfigurationMachineRun/listSoftwareUpdateConfigurationMachineRunsByRun.json
 */
async function listSoftwareUpdateConfigurationMachineRunsForASpecificSoftwareUpdateConfigurationRun() {
  const subscriptionId =
    process.env["AUTOMATION_SUBSCRIPTION_ID"] ||
    "51766542-3ed7-4a72-a187-0c8ab644ddab";
  const resourceGroupName =
    process.env["AUTOMATION_RESOURCE_GROUP"] || "mygroup";
  const automationAccountName = "myaccount";
  const filter =
    "$filter=properties/correlationId%20eq%200b943e57-44d3-4f05-898c-6e92aa617e59";
  const options: SoftwareUpdateConfigurationMachineRunsListOptionalParams = {
    filter
  };
  const credential = new DefaultAzureCredential();
  const client = new AutomationClient(credential, subscriptionId);
  const result = await client.softwareUpdateConfigurationMachineRuns.list(
    resourceGroupName,
    automationAccountName,
    options
  );
  console.log(result);
}

async function main() {
  listSoftwareUpdateConfigurationMachineRuns();
  listSoftwareUpdateConfigurationMachineRunsForASpecificSoftwareUpdateConfigurationRun();
}

main().catch(console.error);
