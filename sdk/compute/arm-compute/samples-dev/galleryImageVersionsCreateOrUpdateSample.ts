/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  GalleryImageVersion,
  ComputeManagementClient,
} from "@azure/arm-compute";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithVmAsSource.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingVMAsSource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        virtualMachineId:
          "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/virtualMachines/{vmName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithCommunityImageVersionAsSource.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingCommunityGalleryImageAsSource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        communityGalleryImageId:
          "/communityGalleries/{communityGalleryName}/images/{communityGalleryImageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingManagedImageAsSource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithShallowReplicationMode.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingShallowReplicationMode(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      replicationMode: "Shallow",
      targetRegions: [
        { name: "West US", excludeFromLatest: false, regionalReplicaCount: 1 },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithImageVersionAsSource.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingSharedImageAsSource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/galleries/{galleryName}/images/{imageDefinitionName}/versions/{versionName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithSnapshotsAsSource.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: "None",
          lun: 1,
          source: {
            id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/disks/{dataDiskName}",
          },
        },
      ],
      osDiskImage: {
        hostCaching: "ReadOnly",
        source: {
          id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/snapshots/{osSnapshotName}",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithVHD_UefiSettings.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingVhdAsASourceWithCustomUefiKeys(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    securityProfile: {
      uefiSettings: {
        additionalSignatures: {
          db: [{ type: "x509", value: ["<x509 value>"] }],
          dbx: [{ type: "x509", value: ["<x509 value>"] }],
          kek: [{ type: "sha256", value: ["<sha256 value>"] }],
        },
        signatureTemplateNames: ["MicrosoftUefiCertificateAuthorityTemplate"],
      },
    },
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: "None",
          lun: 1,
          source: {
            storageAccountId:
              "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
            uri: "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd",
          },
        },
      ],
      osDiskImage: {
        hostCaching: "ReadOnly",
        source: {
          storageAccountId:
            "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
          uri: "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithVHD.json
 */
async function createOrUpdateASimpleGalleryImageVersionUsingVhdAsASource(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      dataDiskImages: [
        {
          hostCaching: "None",
          lun: 1,
          source: {
            storageAccountId:
              "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
            uri: "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd",
          },
        },
      ],
      osDiskImage: {
        hostCaching: "ReadOnly",
        source: {
          storageAccountId:
            "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Storage/storageAccounts/{storageAccount}",
          uri: "https://gallerysourcencus.blob.core.windows.net/myvhds/Windows-Server-2012-R2-20171216-en.us-128GB.vhd",
        },
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithAdditionalReplicaSets.json
 */
async function createOrUpdateASimpleGalleryImageVersionWithDirectDriveReplicas(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          additionalReplicaSets: [
            { regionalReplicaCount: 1, storageAccountType: "PreviumV2_LRS" },
          ],
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: { allowDeletionOfReplicatedLocations: false },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

/**
 * This sample demonstrates how to Create or update a gallery image version.
 *
 * @summary Create or update a gallery image version.
 * x-ms-original-file: specification/compute/resource-manager/Microsoft.Compute/GalleryRP/stable/2024-03-03/examples/galleryExamples/GalleryImageVersion_Create_WithTargetExtendedLocations.json
 */
async function createOrUpdateASimpleGalleryImageVersionWithTargetExtendedLocationsSpecified(): Promise<void> {
  const subscriptionId =
    process.env["COMPUTE_SUBSCRIPTION_ID"] || "{subscription-id}";
  const resourceGroupName =
    process.env["COMPUTE_RESOURCE_GROUP"] || "myResourceGroup";
  const galleryName = "myGalleryName";
  const galleryImageName = "myGalleryImageName";
  const galleryImageVersionName = "1.0.0";
  const galleryImageVersion: GalleryImageVersion = {
    location: "West US",
    publishingProfile: {
      targetRegions: [
        {
          name: "West US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherWestUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myWestUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 1,
        },
        {
          name: "East US",
          encryption: {
            dataDiskImages: [
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myOtherEastUSDiskEncryptionSet",
                lun: 0,
              },
              {
                diskEncryptionSetId:
                  "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
                lun: 1,
              },
            ],
            osDiskImage: {
              diskEncryptionSetId:
                "/subscriptions/{subscriptionId}/resourceGroups/myResourceGroup/providers/Microsoft.Compute/diskEncryptionSet/myEastUSDiskEncryptionSet",
            },
          },
          excludeFromLatest: false,
          regionalReplicaCount: 2,
          storageAccountType: "Standard_ZRS",
        },
      ],
    },
    safetyProfile: {
      allowDeletionOfReplicatedLocations: false,
      blockDeletionBeforeEndOfLife: false,
    },
    storageProfile: {
      source: {
        id: "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroup}/providers/Microsoft.Compute/images/{imageName}",
      },
    },
  };
  const credential = new DefaultAzureCredential();
  const client = new ComputeManagementClient(credential, subscriptionId);
  const result = await client.galleryImageVersions.beginCreateOrUpdateAndWait(
    resourceGroupName,
    galleryName,
    galleryImageName,
    galleryImageVersionName,
    galleryImageVersion,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateASimpleGalleryImageVersionUsingVMAsSource();
  await createOrUpdateASimpleGalleryImageVersionUsingCommunityGalleryImageAsSource();
  await createOrUpdateASimpleGalleryImageVersionUsingManagedImageAsSource();
  await createOrUpdateASimpleGalleryImageVersionUsingShallowReplicationMode();
  await createOrUpdateASimpleGalleryImageVersionUsingSharedImageAsSource();
  await createOrUpdateASimpleGalleryImageVersionUsingSnapshotsAsASource();
  await createOrUpdateASimpleGalleryImageVersionUsingVhdAsASourceWithCustomUefiKeys();
  await createOrUpdateASimpleGalleryImageVersionUsingVhdAsASource();
  await createOrUpdateASimpleGalleryImageVersionWithDirectDriveReplicas();
  await createOrUpdateASimpleGalleryImageVersionWithTargetExtendedLocationsSpecified();
}

main().catch(console.error);
