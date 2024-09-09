// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import createBatchClient from "@azure-rest/batch";
import { DefaultAzureCredential } from "@azure/identity";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * This sample demonstrates how to call operation ReplaceJobSchedule
 *
 * @summary call operation ReplaceJobSchedule
 */
async function replaceJobScheduleSample() {
  const endpointParam = "{Your endpointParam}";
  const credential = new DefaultAzureCredential();
  const client = createBatchClient(endpointParam, credential);
  const jobScheduleId = "{Your jobScheduleId}";
  const result = await client
    .path("/jobschedules/{jobScheduleId}", jobScheduleId)
    .put({
      body: {
        schedule: {
          doNotRunUntil: new Date(),
          doNotRunAfter: new Date(),
          startWindow: "{Your startWindow}",
          recurrenceInterval: "{Your recurrenceInterval}",
        },
        jobSpecification: {
          priority: 123,
          allowTaskPreemption: true,
          maxParallelTasks: 123,
          displayName: "{Your displayName}",
          usesTaskDependencies: true,
          onAllTasksComplete: "noaction",
          onTaskFailure: "noaction",
          networkConfiguration: { subnetId: "{Your subnetId}" },
          constraints: {
            maxWallClockTime: "{Your maxWallClockTime}",
            maxTaskRetryCount: 123,
          },
          jobManagerTask: {
            id: "{Your id}",
            displayName: "{Your displayName}",
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
                    uploadHeaders: [
                      { name: "{Your name}", value: "{Your value}" },
                    ],
                  },
                },
                uploadOptions: { uploadCondition: "tasksuccess" },
              },
            ],
            environmentSettings: [
              { name: "{Your name}", value: "{Your value}" },
            ],
            constraints: {
              maxWallClockTime: "{Your maxWallClockTime}",
              retentionTime: "{Your retentionTime}",
              maxTaskRetryCount: 123,
            },
            requiredSlots: 123,
            killJobOnCompletion: true,
            userIdentity: {
              username: "{Your username}",
              autoUser: { scope: "task", elevationLevel: "nonadmin" },
            },
            runExclusive: true,
            applicationPackageReferences: [
              {
                applicationId: "{Your applicationId}",
                version: "{Your version}",
              },
            ],
            authenticationTokenSettings: { access: ["job"] },
            allowLowPriorityNode: true,
          },
          jobPreparationTask: {
            id: "{Your id}",
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
            environmentSettings: [
              { name: "{Your name}", value: "{Your value}" },
            ],
            constraints: {
              maxWallClockTime: "{Your maxWallClockTime}",
              retentionTime: "{Your retentionTime}",
              maxTaskRetryCount: 123,
            },
            waitForSuccess: true,
            userIdentity: {
              username: "{Your username}",
              autoUser: { scope: "task", elevationLevel: "nonadmin" },
            },
            rerunOnNodeRebootAfterSuccess: true,
          },
          jobReleaseTask: {
            id: "{Your id}",
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
            environmentSettings: [
              { name: "{Your name}", value: "{Your value}" },
            ],
            maxWallClockTime: "{Your maxWallClockTime}",
            retentionTime: "{Your retentionTime}",
            userIdentity: {
              username: "{Your username}",
              autoUser: { scope: "task", elevationLevel: "nonadmin" },
            },
          },
          commonEnvironmentSettings: [
            { name: "{Your name}", value: "{Your value}" },
          ],
          poolInfo: {
            poolId: "{Your poolId}",
            autoPoolSpecification: {
              autoPoolIdPrefix: "{Your autoPoolIdPrefix}",
              poolLifetimeOption: "jobschedule",
              keepAlive: true,
              pool: {
                displayName: "{Your displayName}",
                vmSize: "{Your vmSize}",
                virtualMachineConfiguration: {
                  imageReference: {
                    publisher: "{Your publisher}",
                    offer: "{Your offer}",
                    sku: "{Your sku}",
                    version: "{Your version}",
                    virtualMachineImageId: "{Your virtualMachineImageId}",
                  },
                  nodeAgentSKUId: "{Your nodeAgentSKUId}",
                  windowsConfiguration: { enableAutomaticUpdates: true },
                  dataDisks: [
                    {
                      lun: 123,
                      caching: "none",
                      diskSizeGB: 123,
                      storageAccountType: "standard_lrs",
                    },
                  ],
                  licenseType: "{Your licenseType}",
                  containerConfiguration: {
                    type: "dockerCompatible",
                    containerImageNames: ["{Your containerImageNames}"],
                    containerRegistries: [
                      {
                        username: "{Your username}",
                        password: "{Your password}",
                        registryServer: "{Your registryServer}",
                        identityReference: { resourceId: "{Your resourceId}" },
                      },
                    ],
                  },
                  diskEncryptionConfiguration: { targets: ["osdisk"] },
                  nodePlacementConfiguration: { policy: "regional" },
                  extensions: [
                    {
                      name: "{Your name}",
                      publisher: "{Your publisher}",
                      type: "{Your type}",
                      typeHandlerVersion: "{Your typeHandlerVersion}",
                      autoUpgradeMinorVersion: true,
                      enableAutomaticUpgrade: true,
                      settings: { key: "{Your settings}" },
                      protectedSettings: { key: "{Your protectedSettings}" },
                      provisionAfterExtensions: [
                        "{Your provisionAfterExtensions}",
                      ],
                    },
                  ],
                  osDisk: {
                    ephemeralOSDiskSettings: { placement: "cachedisk" },
                    caching: "none",
                    diskSizeGB: 123,
                    managedDisk: { storageAccountType: "standard_lrs" },
                    writeAcceleratorEnabled: true,
                  },
                  securityProfile: {
                    encryptionAtHost: true,
                    securityType: "trustedLaunch",
                    uefiSettings: {
                      secureBootEnabled: true,
                      vTpmEnabled: true,
                    },
                  },
                  serviceArtifactReference: { id: "{Your id}" },
                },
                taskSlotsPerNode: 123,
                taskSchedulingPolicy: { nodeFillType: "spread" },
                resizeTimeout: "{Your resizeTimeout}",
                resourceTags: "{Your resourceTags}",
                targetDedicatedNodes: 123,
                targetLowPriorityNodes: 123,
                enableAutoScale: true,
                autoScaleFormula: "{Your autoScaleFormula}",
                autoScaleEvaluationInterval:
                  "{Your autoScaleEvaluationInterval}",
                enableInterNodeCommunication: true,
                networkConfiguration: {
                  subnetId: "{Your subnetId}",
                  dynamicVNetAssignmentScope: "none",
                  endpointConfiguration: {
                    inboundNATPools: [
                      {
                        name: "{Your name}",
                        protocol: "tcp",
                        backendPort: 123,
                        frontendPortRangeStart: 123,
                        frontendPortRangeEnd: 123,
                        networkSecurityGroupRules: [
                          {
                            priority: 123,
                            access: "allow",
                            sourceAddressPrefix: "{Your sourceAddressPrefix}",
                            sourcePortRanges: ["{Your sourcePortRanges}"],
                          },
                        ],
                      },
                    ],
                  },
                  publicIPAddressConfiguration: {
                    provision: "batchmanaged",
                    ipAddressIds: ["{Your ipAddressIds}"],
                  },
                  enableAcceleratedNetworking: true,
                },
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
                      autoStorageContainerName:
                        "{Your autoStorageContainerName}",
                      storageContainerUrl: "{Your storageContainerUrl}",
                      httpUrl: "{Your httpUrl}",
                      blobPrefix: "{Your blobPrefix}",
                      filePath: "{Your filePath}",
                      fileMode: "{Your fileMode}",
                      identityReference: { resourceId: "{Your resourceId}" },
                    },
                  ],
                  environmentSettings: [
                    { name: "{Your name}", value: "{Your value}" },
                  ],
                  userIdentity: {
                    username: "{Your username}",
                    autoUser: { scope: "task", elevationLevel: "nonadmin" },
                  },
                  maxTaskRetryCount: 123,
                  waitForSuccess: true,
                },
                applicationPackageReferences: [
                  {
                    applicationId: "{Your applicationId}",
                    version: "{Your version}",
                  },
                ],
                userAccounts: [
                  {
                    name: "{Your name}",
                    password: "{Your password}",
                    elevationLevel: "nonadmin",
                    linuxUserConfiguration: {
                      uid: 123,
                      gid: 123,
                      sshPrivateKey: "{Your sshPrivateKey}",
                    },
                    windowsUserConfiguration: { loginMode: "batch" },
                  },
                ],
                metadata: [{ name: "{Your name}", value: "{Your value}" }],
                mountConfiguration: [
                  {
                    azureBlobFileSystemConfiguration: {
                      accountName: "{Your accountName}",
                      containerName: "{Your containerName}",
                      accountKey: "{Your accountKey}",
                      sasKey: "{Your sasKey}",
                      blobfuseOptions: "{Your blobfuseOptions}",
                      relativeMountPath: "{Your relativeMountPath}",
                      identityReference: { resourceId: "{Your resourceId}" },
                    },
                    nfsMountConfiguration: {
                      source: "{Your source}",
                      relativeMountPath: "{Your relativeMountPath}",
                      mountOptions: "{Your mountOptions}",
                    },
                    cifsMountConfiguration: {
                      username: "{Your username}",
                      source: "{Your source}",
                      relativeMountPath: "{Your relativeMountPath}",
                      mountOptions: "{Your mountOptions}",
                      password: "{Your password}",
                    },
                    azureFileShareConfiguration: {
                      accountName: "{Your accountName}",
                      azureFileUrl: "{Your azureFileUrl}",
                      accountKey: "{Your accountKey}",
                      relativeMountPath: "{Your relativeMountPath}",
                      mountOptions: "{Your mountOptions}",
                    },
                  },
                ],
                targetNodeCommunicationMode: "default",
                upgradePolicy: {
                  mode: "automatic",
                  automaticOSUpgradePolicy: {
                    disableAutomaticRollback: true,
                    enableAutomaticOSUpgrade: true,
                    useRollingUpgradePolicy: true,
                    osRollingUpgradeDeferral: true,
                  },
                  rollingUpgradePolicy: {
                    enableCrossZoneUpgrade: true,
                    maxBatchInstancePercent: 123,
                    maxUnhealthyInstancePercent: 123,
                    maxUnhealthyUpgradedInstancePercent: 123,
                    pauseTimeBetweenBatches: "{Your pauseTimeBetweenBatches}",
                    prioritizeUnhealthyInstances: true,
                    rollbackFailedInstancesOnPolicyBreach: true,
                  },
                },
              },
            },
          },
          metadata: [{ name: "{Your name}", value: "{Your value}" }],
        },
        metadata: [{ name: "{Your name}", value: "{Your value}" }],
      },
      queryParameters: { timeOut: 123 },
      headers: {
        "client-request-id": "{Your client-request-id}",
        "return-client-request-id": true,
        "ocp-date": "{Your ocp-date}",
        "If-Modified-Since": "{Your If-Modified-Since}",
        "If-Unmodified-Since": "{Your If-Unmodified-Since}",
        "If-Match": "{Your If-Match}",
        "If-None-Match": "{Your If-None-Match}",
      },
      contentType: "application/json; odata=minimalmetadata",
    });
  console.log(result);
}

async function main() {
  replaceJobScheduleSample();
}

main().catch(console.error);
