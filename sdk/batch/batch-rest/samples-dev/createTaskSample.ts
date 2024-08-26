// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation CreateTask
 *
 * @summary call operation CreateTask
 */
async function createTaskSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobId = "{Your jobId}";
  const result = await client
    .path("/jobs/{jobId}/tasks", jobId)
    .post({
      body: {
        id: "{Your id}",
        displayName: "{Your displayName}",
        exitConditions: {
          exitCodes: [
            {
              code: 123,
              exitOptions: { jobAction: "none", dependencyAction: "satisfy" },
            },
          ],
          exitCodeRanges: [
            {
              start: 123,
              end: 123,
              exitOptions: { jobAction: "none", dependencyAction: "satisfy" },
            },
          ],
          preProcessingError: {
            jobAction: "none",
            dependencyAction: "satisfy",
          },
          fileUploadError: { jobAction: "none", dependencyAction: "satisfy" },
          default: { jobAction: "none", dependencyAction: "satisfy" },
        },
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
        outputFiles: [
          {
            filePattern: "{Your filePattern}",
            destination: {
              container: {
                path: "{Your path}",
                containerUrl: "{Your containerUrl}",
                identityReference: { resourceId: "{Your resourceId}" },
                uploadHeaders: [{ name: "{Your name}", value: "{Your value}" }],
              },
            },
            uploadOptions: { uploadCondition: "tasksuccess" },
          },
        ],
        environmentSettings: [{ name: "{Your name}", value: "{Your value}" }],
        affinityInfo: { affinityId: "{Your affinityId}" },
        constraints: {
          maxWallClockTime: "{Your maxWallClockTime}",
          retentionTime: "{Your retentionTime}",
          maxTaskRetryCount: 123,
        },
        requiredSlots: 123,
        userIdentity: {
          username: "{Your username}",
          autoUser: { scope: "task", elevationLevel: "nonadmin" },
        },
        multiInstanceSettings: {
          numberOfInstances: 123,
          coordinationCommandLine: "{Your coordinationCommandLine}",
          commonResourceFiles: [
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
        },
        dependsOn: {
          taskIds: ["{Your taskIds}"],
          taskIdRanges: [{ start: 123, end: 123 }],
        },
        applicationPackageReferences: [
          { applicationId: "{Your applicationId}", version: "{Your version}" },
        ],
        authenticationTokenSettings: { access: ["job"] },
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
  createTaskSample();
}

main().catch(console.error);
