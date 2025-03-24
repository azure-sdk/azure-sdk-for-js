// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to creates or updates a firewall rule.
 *
 * @summary creates or updates a firewall rule.
 * x-ms-original-file: 2025-02-01-preview/FirewallRules_CreateOrUpdate_MaximumSet_Gen.json
 */
async function createOrUpdateFirewallRuleGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "a2b3c4d5-6789-0123-4567-89abcdef1234";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const result = await client.firewallRules.createOrUpdate(
    "rg-networking-operations",
    "data-fleet-01",
    "prod-environment",
    "allow-10-0-0-0-24-to-10-1-0-0-24",
    { properties: { startIpAddress: "10.0.0.0", endIpAddress: "10.0.0.255" } },
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateFirewallRuleGeneratedByPolicy();
}

main().catch(console.error);
