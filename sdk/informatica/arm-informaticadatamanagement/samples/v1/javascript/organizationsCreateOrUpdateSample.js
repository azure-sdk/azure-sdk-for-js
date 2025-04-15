// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

const { DataManagementClient } = require("@azure/arm-informaticadatamanagement");
const { DefaultAzureCredential } = require("@azure/identity");

/**
 * This sample demonstrates how to create a InformaticaOrganizationResource
 *
 * @summary create a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_CreateOrUpdate_MaximumSet_Gen.json
 */
async function organizationsCreateOrUpdate() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.createOrUpdate("rgopenapi", "C", {
    properties: {
      provisioningState: "Accepted",
      informaticaProperties: {
        organizationId: "wtdmhlwhkvgqdumaehgfgiqcxgnqpx",
        organizationName: "nomzbvwe",
        informaticaRegion: "zfqodqpbeflhedypiijdkc",
        singleSignOnUrl: "https://contoso.com/singlesignon",
      },
      marketplaceDetails: {
        marketplaceSubscriptionId: "ovenlecocg",
        offerDetails: {
          publisherId:
            "zajxpfacudwongxjvnnuhhpygmnydchgowjccyuzsjonegmqxcqqpnzafanggowfqdixnnutyfvmvwrkx",
          offerId:
            "cwswcfwmzhjcoksmueukegwaptvpcmbfyvixfhvgwnjyblqivqdkkwkunkgimiopwwkvgnwclmajhuty",
          planId: "jfnemevyivtlxhectiutdavdgfyidolivuojumdzckp",
          planName:
            "iaoxgaitteuoqgujkgxbdgryaobtkjjecuvchwutntrvmuorikrbqqegmelenbewhakiysprrnovjixyxrikscaptrbapbdspu",
          termUnit: "gjwmgevrblbosuogsvfspsgspetbnxaygkbelvadpgwiywl",
          termId:
            "tcvvsxdjnjlfmjhmvwklptdmxetnzydxyuhfqchoubmtoeqbchnfxoxqzezlgpxdnzyvzgkynjxzzgetkqccxvpzahxattluqdipvbdktqmndfefitzuifqjpschzlbvixnvznkmmgjwvkplfhemnapsewgqxggdzdokryhv",
        },
      },
      userDetails: {
        firstName: "appvdclawzfjntdfdftjevlhvzropnxqtnypid",
        lastName: "nzirbvzmkxtbrlamyatlcszebxgcyncxoascojsmacwvjsjvn",
        emailAddress: "7_-46@13D--3.m-4x-.11.c-9-.DHLYFc",
        upn: "undljch",
        phoneNumber: "fvcjylxlmhdnshsgywnzlyvshu",
      },
      companyDetails: {
        companyName: "xszcggknokhw",
        officeAddress: "sbttzwyajgdbsvipuiclbzvkcvwyil",
        country: "gwkcpnwyaqc",
        domain: "utcxetzzpmbvwmjrvphqngvp",
        business: "pucosrtjv",
        numberOfEmployees: 25,
      },
      linkOrganization: { token: "jjfouhoqpumjvrdsfbimgcy" },
    },
    tags: { key8430: "cagshqtjlxtqqhdwtchokvxszybp" },
    location: "pamjoudtssthlbhrnfjidr",
  });
  console.log(result);
}

/**
 * This sample demonstrates how to create a InformaticaOrganizationResource
 *
 * @summary create a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_CreateOrUpdate_MinimumSet_Gen.json
 */
async function organizationsCreateOrUpdateMin() {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.createOrUpdate("rgopenapi", "n6v", {
    location: "pamjoudtssthlbhrnfjidr",
  });
  console.log(result);
}

async function main() {
  await organizationsCreateOrUpdate();
  await organizationsCreateOrUpdateMin();
}

main().catch(console.error);
