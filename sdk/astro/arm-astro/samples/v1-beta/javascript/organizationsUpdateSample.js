// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { AstroClient } = require("@azure/arm-astro");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to update a OrganizationResource
 *
 * @summary update a OrganizationResource
 * x-ms-original-file: 2024-08-27/Organizations_Update_MaximumSet_Gen.json
 */
async function organizationsUpdateGeneratedByMaximumSetRule() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "ECBF1ABA-FCBB-46A5-BFC3-3334D65EC8F7";
  const client = new AstroClient(credential, subscriptionId);
  const result = await client.organizations.update("rgastronomer", "U.1-:7", {
    identity: { type: "None", userAssignedIdentities: {} },
    tags: {},
    properties: {
      marketplace: {
        subscriptionId: "ujl",
        subscriptionStatus: "PendingFulfillmentStart",
        offerDetails: {
          publisherId: "bywzycdrucjkx",
          offerId: "aljpaprqzpnivwol",
          planId: "fcpnstrwetlrajanh",
          planName: "wjgnlhqqkdi",
          termUnit: "pvpk",
          termId: "xg",
          renewalMode: "Auto",
        },
      },
      user: {
        firstName: "wyoaxocyjfpgicvketuiayfxrxq",
        lastName: "vlwybhfayupjpwfhy",
        emailAddress: ".K_@e7N-g1.xjqnbPs",
        upn: "ezefcwbsbgcxrdiixmzphibt",
        phoneNumber: "eibhsslqzufgshuzrjjyymsb",
      },
      partnerOrganizationProperties: {
        organizationId: "linzwcqhrpqrxpnghxjnxzetfdps",
        workspaceId: "tmmxzlagmdrc",
        organizationName: "U.1-:7",
        workspaceName: "9.:06",
        singleSignOnProperties: {
          singleSignOnState: "Initial",
          enterpriseAppId: "jspfkoxolosmvyixpktbwyoqrx",
          singleSignOnUrl: "aatouxlmqqizijszlu",
          aadDomains: ["gwzhrfmnhbeitagjdlzw"],
          provisioningState: "Succeeded",
        },
      },
    },
  });
  console.log(result);
}

async function main() {
  await organizationsUpdateGeneratedByMaximumSetRule();
}

main().catch(console.error);
