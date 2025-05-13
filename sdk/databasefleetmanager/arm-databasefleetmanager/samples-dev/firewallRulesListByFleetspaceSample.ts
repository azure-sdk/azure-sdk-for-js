// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseFleetManagerClient } from "@azure/arm-databasefleetmanager";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to gets all firewall rules in a fleetspace.
 *
 * @summary gets all firewall rules in a fleetspace.
 * x-ms-original-file: 2025-02-01-preview/FirewallRules_ListByFleetspace_MaximumSet_Gen.json
 */
async function listFirewallRulesByFleetspaceGeneratedByPolicy(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "a2b3c4d5-6789-0123-4567-89abcdef1234";
  const client = new DatabaseFleetManagerClient(credential, subscriptionId);
  const resArray = new Array();
  for await (const item of client.firewallRules.listByFleetspace(
    "rg-networking-operations",
    "data-fleet-01",
    "prod-environment",
    { skip: 8, top: 18, skiptoken: "thjchalxuwykrawwdgaie" },
  )) {
    resArray.push(item);
  }

  console.log(resArray);
}

async function main(): Promise<void> {
  await listFirewallRulesByFleetspaceGeneratedByPolicy();
}

main().catch(console.error);
