/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { MonitorClient } = require("@azure/arm-monitor");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv").config();

/**
 * This sample demonstrates how to **Lists the metric data for a subscription**.
 *
 * @summary **Lists the metric data for a subscription**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2024-02-01/examples/GetMultiResourceMetric.json
 */
async function getSubscriptionLevelMetricData() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "92d2a2d8-b514-432d-8cc9-a5f9272630d5";
  const region = "westus2";
  const timespan = "2021-06-08T19:00:00Z/2021-06-12T01:00:00Z";
  const interval = "PT6H";
  const metricnames = "Data Disk Max Burst IOPS";
  const aggregation = "count";
  const top = 10;
  const orderby = "count desc";
  const filter = "LUN eq '0' and Microsoft.ResourceId eq '*'";
  const metricnamespace = "microsoft.compute/virtualmachines";
  const autoAdjustTimegrain = true;
  const validateDimensions = false;
  const options = {
    timespan,
    interval,
    metricnames,
    aggregation,
    top,
    orderby,
    filter,
    metricnamespace,
    autoAdjustTimegrain,
    validateDimensions,
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricsOperations.listAtSubscriptionScope(region, options);
  console.log(result);
}

/**
 * This sample demonstrates how to **Lists the metric data for a subscription**.
 *
 * @summary **Lists the metric data for a subscription**.
 * x-ms-original-file: specification/monitor/resource-manager/Microsoft.Insights/stable/2024-02-01/examples/GetMultiResourceMetricMetadata.json
 */
async function getSubscriptionLevelMetricMetadata() {
  const subscriptionId =
    process.env["MONITOR_SUBSCRIPTION_ID"] || "92d2a2d8-b514-432d-8cc9-a5f9272630d5";
  const region = "westus2";
  const timespan = "2021-06-10T02:23:16.129Z/2021-06-12T02:23:16.129Z";
  const metricnames = "Data Disk Max Burst IOPS";
  const filter = "LUN eq '0'";
  const metricnamespace = "microsoft.compute/virtualmachines";
  const options = {
    timespan,
    metricnames,
    filter,
    metricnamespace,
  };
  const credential = new DefaultAzureCredential();
  const client = new MonitorClient(credential, subscriptionId);
  const result = await client.metricsOperations.listAtSubscriptionScope(region, options);
  console.log(result);
}

async function main() {
  getSubscriptionLevelMetricData();
  getSubscriptionLevelMetricMetadata();
}

main().catch(console.error);