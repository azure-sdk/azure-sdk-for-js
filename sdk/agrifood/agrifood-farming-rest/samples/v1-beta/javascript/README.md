---
page_type: sample
languages:
  - javascript
products:
  - azure
  - azure-farmbeats
urlFragment: agrifood-farming-javascript-beta
---

# Azure FarmBeats rest client library samples for JavaScript (Beta)

These sample programs show how to use the JavaScript client libraries for Azure FarmBeats rest in some common scenarios.

| **File Name**                 | **Description**        |
| ----------------------------- | ---------------------- |
| [deleteParty.js][deleteparty] | deletes a party        |
| [listParties.js][listparties] | gets a list of parties |
| [createParty.js][createparty] | creates a party        |

## Prerequisites

The sample programs are compatible with [LTS versions of Node.js](https://github.com/nodejs/release#release-schedule).

You need [an Azure subscription][freesub] and the following Azure resources to run these sample programs:

- [Azure FarmBeats Service instance][createinstance_azurefarmbeatsserviceinstance]

Samples retrieve credentials to access the service endpoint from environment variables. Alternatively, edit the source code to include the appropriate credentials. See each individual sample for details on which environment variables/credentials it requires to function.

Adapting the samples to run in the browser may require some additional consideration. For details, please see the [package README][package].

## Setup

To run the samples using the published version of the package:

1. Install the dependencies using `npm`:

```bash
npm install
```

2. Edit the file `sample.env`, adding the correct credentials to access the Azure service and run the samples. Then rename the file from `sample.env` to just `.env`. The sample programs will read this file automatically.

3. Run whichever samples you like (note that some samples may require additional setup, see the table above):

```bash
node deleteParty.js
```

Alternatively, run a single sample with the correct environment variables set (setting up the `.env` file is not required if you do this), for example (cross-platform):

```bash
npx dev-tool run vendored cross-env FARMBEATS_ENDPOINT="<farmbeats endpoint>" node deleteParty.js
```

## Next Steps

Take a look at our [API Documentation][apiref] for more information about the APIs that are available in the clients.

[deleteparty]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/agrifood/agrifood-farming-rest/samples/v1-beta/javascript/deleteParty.js
[listparties]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/agrifood/agrifood-farming-rest/samples/v1-beta/javascript/listParties.js
[createparty]: https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/agrifood/agrifood-farming-rest/samples/v1-beta/javascript/createParty.js
[freesub]: https://azure.microsoft.com/free/
[createinstance_azurefarmbeatsserviceinstance]: https://learn.microsoft.com/azure/industry/agriculture/install-azure-farmbeats
[package]: https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/agrifood/agrifood-farming-rest/README.md
