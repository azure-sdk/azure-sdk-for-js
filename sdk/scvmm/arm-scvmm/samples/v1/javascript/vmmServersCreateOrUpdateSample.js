// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to onboards the SCVmm fabric as an Azure VmmServer resource.
 *
 * @summary onboards the SCVmm fabric as an Azure VmmServer resource.
 * x-ms-original-file: 2025-03-13/VmmServers_CreateOrUpdate_MaximumSet_Gen.json
 */
async function vmmServersCreateOrUpdateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.createOrUpdate("rgscvmm", "-", {
    properties: {
      credentials: { username: "jbuoltypmrgqfi", password: "gaecsnkjr" },
      fqdn: "pvzcjaqrswbvptgx",
      port: 4,
    },
    extendedLocation: {
      type: "customLocation",
      name: "/subscriptions/12345678-1234-1234-1234-12345678abc/resourceGroups/exampleResourceGroup/providers/Microsoft.ExtendedLocation/customLocations/customLocationName",
    },
    tags: { key4834: "vycgfkzjcyyuotwwq" },
    location: "hslxkyzktvwpqbypvs",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to onboards the SCVmm fabric as an Azure VmmServer resource.
 *
 * @summary onboards the SCVmm fabric as an Azure VmmServer resource.
 * x-ms-original-file: 2025-03-13/VmmServers_CreateOrUpdate_MinimumSet_Gen.json
 */
async function vmmServersCreateOrUpdateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "79332E5A-630B-480F-A266-A941C015AB19";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.vmmServers.createOrUpdate("rgscvmm", "w", {
    extendedLocation: {},
    location: "hslxkyzktvwpqbypvs",
  });
  console.log(result);
}

async function main() {
  await vmmServersCreateOrUpdateMaximumSet();
  await vmmServersCreateOrUpdateMinimumSet();
}

main().catch(console.error);
