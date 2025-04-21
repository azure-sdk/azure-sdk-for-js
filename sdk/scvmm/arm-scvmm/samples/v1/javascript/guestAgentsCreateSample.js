// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { ScVmmClient } = require("@azure/arm-scvmm");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to create Or Update GuestAgent.
 *
 * @summary create Or Update GuestAgent.
 * x-ms-original-file: 2025-03-13/GuestAgents_Create_MaximumSet_Gen.json
 */
async function guestAgentsCreateMaximumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.guestAgents.create("gtgclehcbsyave", {
    properties: {
      credentials: {
        username: "jqxuwirrcpfv",
        password: "gkvbnmuahumuoibvscoxzfdqwvfuf",
      },
      httpProxyConfig: { httpsProxy: "uoyzyticmohohomlkwct" },
      provisioningAction: "install",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to create Or Update GuestAgent.
 *
 * @summary create Or Update GuestAgent.
 * x-ms-original-file: 2025-03-13/GuestAgents_Create_MinimumSet_Gen.json
 */
async function guestAgentsCreateMinimumSet() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "00000000-0000-0000-0000-00000000000";
  const client = new ScVmmClient(credential, subscriptionId);
  const result = await client.guestAgents.create("gtgclehcbsyave", {});
  console.log(result);
}

async function main() {
  await guestAgentsCreateMaximumSet();
  await guestAgentsCreateMinimumSet();
}

main().catch(console.error);
