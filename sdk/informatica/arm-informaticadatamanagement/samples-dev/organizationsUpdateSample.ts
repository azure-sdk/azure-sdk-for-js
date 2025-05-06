// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DataManagementClient } from "@azure/arm-informaticadatamanagement";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to update a InformaticaOrganizationResource
 *
 * @summary update a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Update_MaximumSet_Gen.json
 */
async function organizationsUpdate(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.update("rgopenapi", "_-", {
    tags: { key1918: "fbjvtuvzsghpl" },
    properties: {
      marketplaceDetails: {
        marketplaceSubscriptionId: "szhyxzgjtssjmlguivepc",
        offerDetails: {
          publisherId:
            "ktzfghsyjqbsswhltoaemgotmnorhdogvkaxplutbjjqzuepxizliynyakersobagvpwvpzwjtjjxigsqgcyqaahaxdijghnexliofhfjlqzjmmbvrhcvjxdodnexxizbgfhjopbwzjojxsluasnwwsgcajefglbcvzpaeblanhmurcculndtfwnfjyxol",
          offerId: "idaxbflabvjsippplyenvrpgeydsjxcmyubgukffkcdvlvrtwpdhnvdblxjsldiuswrchsibk",
          planId: "giihvvnwdwzkfqrhkpqzbgfotzyixnsvmxzauseebillhslauglzfxzvzvts",
          planName:
            "tfqjenotaewzdeerliteqxdawuqxhwdzbtiiimsaedrlsnbdoonnloakjtvnwhhrcyxxsgoachguthqvlahpjyofpoqpfacfmiaauawazkmxkjgvktbptojknzojtjrfzvbbjjkvstabqyaczxinijhoxrjukftsagpwgsvpmczopztmplipyufhuaumfx",
          termUnit: "nykqoplazujcwmfldntifjqrnx",
          termId: "eolmwogtgpdncqoigqcdomupwummaicwvdxgbskpdsmjizdfbdgbxbuekcpwmenqzbhqxpdnjtup",
        },
      },
      userDetails: {
        firstName: "qguqrmanyupoi",
        lastName: "ugzg",
        emailAddress: "7_-46@13D--3.m-4x-.11.c-9-.DHLYFc",
        upn: "viwjrkn",
        phoneNumber: "uxa",
      },
      companyDetails: {
        companyName: "xkrvbozrjcvappqeeyt",
        officeAddress: "sfcx",
        country: "rvlzppgvopcw",
        domain: "dponvwnrdrnzahcurqssesukbsokdd",
        business: "mwqblnruflwpolgbxpqbqneve",
        numberOfEmployees: 22,
      },
      existingResourceId:
        "/subscriptions/subid/resourceGroups/rg1/providers/Informatica.DataManagement/organizations/org1/serverlessRuntimes/serverlessRuntimeName",
    },
  });
  console.log(result);
}

/**
 * This sample demonstrates how to update a InformaticaOrganizationResource
 *
 * @summary update a InformaticaOrganizationResource
 * x-ms-original-file: 2024-05-08/Organizations_Update_MinimumSet_Gen.json
 */
async function organizationsUpdateMin(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "3599DA28-E346-4D9F-811E-189C0445F0FE";
  const client = new DataManagementClient(credential, subscriptionId);
  const result = await client.organizations.update("rgopenapi", "-", {});
  console.log(result);
}

async function main(): Promise<void> {
  await organizationsUpdate();
  await organizationsUpdateMin();
}

main().catch(console.error);
