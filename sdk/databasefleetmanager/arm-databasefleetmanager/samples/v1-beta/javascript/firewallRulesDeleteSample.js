// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DatabaseFleetManagerClient } = require("@azure/arm-databasefleetmanager");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to deletes a firewall rule.
 *
 * @summary deletes a firewall rule.
 * x-ms-original-file: 2025-02-01-preview/FirewallRules_Delete_MaximumSet_Gen.json
 */
async function deleteFirewallRuleGeneratedByPolicy() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "a2b3c4d5-6789-0123-4567-89abcdef1234";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  await client.firewallRules.delete(
    "rg-networking-operations",
    "data-fleet-01",
    "prod-environment",
    "allow-10-0-0-0-24-to-10-1-0-0-24",
  );
}

async function main() {
  await deleteFirewallRuleGeneratedByPolicy();
}

main().catch(console.error);
