// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReplacePoolProperties
 *
 * @summary call operation ReplacePoolProperties
 */
async function replacePoolPropertiesSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const poolId = "{Your poolId}";
  const result = await client
    .path("/pools/{poolId}/updateproperties", poolId)
    .post({
      body: {
        startTask: {
          commandLine: "{Your commandLine}",
          containerSettings: {
            containerRunOptions: "{Your containerRunOptions}",
            imageName: "{Your imageName}",
            registry: {
              username: "{Your username}",
              password: "{Your password}",
              registryServer: "{Your registryServer}",
              identityReference: { resourceId: "{Your resourceId}" },
            },
            workingDirectory: "taskWorkingDirectory",
          },
          resourceFiles: [
            {
              autoStorageContainerName: "{Your autoStorageContainerName}",
              storageContainerUrl: "{Your storageContainerUrl}",
              httpUrl: "{Your httpUrl}",
              blobPrefix: "{Your blobPrefix}",
              filePath: "{Your filePath}",
              fileMode: "{Your fileMode}",
              identityReference: { resourceId: "{Your resourceId}" },
            },
          ],
          environmentSettings: [{ name: "{Your name}", value: "{Your value}" }],
          userIdentity: {
            username: "{Your username}",
            autoUser: { scope: "task", elevationLevel: "nonadmin" },
          },
          maxTaskRetryCount: 123,
          waitForSuccess: true,
        },
        applicationPackageReferences: [
          { applicationId: "{Your applicationId}", version: "{Your version}" },
        ],
        metadata: [{ name: "{Your name}", value: "{Your value}" }],
        targetNodeCommunicationMode: "default",
      },
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
      },
      contentType: "application/json; odata=minimalmetadata",
    });
  console.log(result);
}

async function main() {
  replacePoolPropertiesSample();
}

main().catch(console.error);
