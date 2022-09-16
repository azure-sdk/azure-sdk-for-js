# Release History
    
## 20.0.0 (2022-09-16)
    
**Features**

  - Added operation group ContainerServices
  - Added Interface ContainerService
  - Added Interface ContainerServiceAgentPoolProfile
  - Added Interface ContainerServiceCustomProfile
  - Added Interface ContainerServiceDiagnosticsProfile
  - Added Interface ContainerServiceLinuxProfile
  - Added Interface ContainerServiceListResult
  - Added Interface ContainerServiceMasterProfile
  - Added Interface ContainerServiceOrchestratorProfile
  - Added Interface ContainerServicePrincipalProfile
  - Added Interface ContainerServicesCreateOrUpdateOptionalParams
  - Added Interface ContainerServicesDeleteOptionalParams
  - Added Interface ContainerServicesGetOptionalParams
  - Added Interface ContainerServicesListByResourceGroupNextOptionalParams
  - Added Interface ContainerServicesListByResourceGroupOptionalParams
  - Added Interface ContainerServicesListNextOptionalParams
  - Added Interface ContainerServicesListOptionalParams
  - Added Interface ContainerServiceSshConfiguration
  - Added Interface ContainerServiceSshPublicKey
  - Added Interface ContainerServiceVMDiagnostics
  - Added Interface ContainerServiceWindowsProfile
  - Added Type Alias ContainerServiceMasterProfileCount
  - Added Type Alias ContainerServiceOrchestratorTypes
  - Added Type Alias ContainerServicesCreateOrUpdateResponse
  - Added Type Alias ContainerServicesGetResponse
  - Added Type Alias ContainerServicesListByResourceGroupNextResponse
  - Added Type Alias ContainerServicesListByResourceGroupResponse
  - Added Type Alias ContainerServicesListNextResponse
  - Added Type Alias ContainerServicesListResponse
  - Added Type Alias ContainerServiceVMSizeTypes
  - Interface ComputeManagementClientOptionalParams has a new optional parameter apiVersion
  - Class ComputeManagementClient has a new parameter apiVersion
  - Class ComputeManagementClient has a new parameter containerServices
  - Added Enum KnownContainerServiceMasterProfileCount
  - Added Enum KnownContainerServiceVMSizeTypes

**Breaking Changes**

  - Removed operation group AvailabilitySets
  - Removed operation group CapacityReservationGroups
  - Removed operation group CapacityReservations
  - Removed operation group CloudServiceOperatingSystems
  - Removed operation group CloudServiceRoleInstances
  - Removed operation group CloudServiceRoles
  - Removed operation group CloudServices
  - Removed operation group CloudServicesUpdateDomain
  - Removed operation group CommunityGalleries
  - Removed operation group CommunityGalleryImages
  - Removed operation group CommunityGalleryImageVersions
  - Removed operation group DedicatedHostGroups
  - Removed operation group DedicatedHosts
  - Removed operation group DiskAccesses
  - Removed operation group DiskEncryptionSets
  - Removed operation group DiskRestorePointOperations
  - Removed operation group Disks
  - Removed operation group Galleries
  - Removed operation group GalleryApplications
  - Removed operation group GalleryApplicationVersions
  - Removed operation group GalleryImages
  - Removed operation group GalleryImageVersions
  - Removed operation group GallerySharingProfile
  - Removed operation group Images
  - Removed operation group LogAnalytics
  - Removed operation group Operations
  - Removed operation group ProximityPlacementGroups
  - Removed operation group ResourceSkus
  - Removed operation group RestorePointCollections
  - Removed operation group RestorePoints
  - Removed operation group SharedGalleries
  - Removed operation group SharedGalleryImages
  - Removed operation group SharedGalleryImageVersions
  - Removed operation group Snapshots
  - Removed operation group SshPublicKeys
  - Removed operation group UsageOperations
  - Removed operation group VirtualMachineExtensionImages
  - Removed operation group VirtualMachineExtensions
  - Removed operation group VirtualMachineImages
  - Removed operation group VirtualMachineImagesEdgeZone
  - Removed operation group VirtualMachineRunCommands
  - Removed operation group VirtualMachines
  - Removed operation group VirtualMachineScaleSetExtensions
  - Removed operation group VirtualMachineScaleSetRollingUpgrades
  - Removed operation group VirtualMachineScaleSets
  - Removed operation group VirtualMachineScaleSetVMExtensions
  - Removed operation group VirtualMachineScaleSetVMRunCommands
  - Removed operation group VirtualMachineScaleSetVMs
  - Removed operation group VirtualMachineSizes
  - Class ComputeManagementClient no longer has parameter availabilitySets
  - Class ComputeManagementClient no longer has parameter capacityReservationGroups
  - Class ComputeManagementClient no longer has parameter capacityReservations
  - Class ComputeManagementClient no longer has parameter cloudServiceOperatingSystems
  - Class ComputeManagementClient no longer has parameter cloudServiceRoleInstances
  - Class ComputeManagementClient no longer has parameter cloudServiceRoles
  - Class ComputeManagementClient no longer has parameter cloudServices
  - Class ComputeManagementClient no longer has parameter cloudServicesUpdateDomain
  - Class ComputeManagementClient no longer has parameter communityGalleries
  - Class ComputeManagementClient no longer has parameter communityGalleryImages
  - Class ComputeManagementClient no longer has parameter communityGalleryImageVersions
  - Class ComputeManagementClient no longer has parameter dedicatedHostGroups
  - Class ComputeManagementClient no longer has parameter dedicatedHosts
  - Class ComputeManagementClient no longer has parameter diskAccesses
  - Class ComputeManagementClient no longer has parameter diskEncryptionSets
  - Class ComputeManagementClient no longer has parameter diskRestorePointOperations
  - Class ComputeManagementClient no longer has parameter disks
  - Class ComputeManagementClient no longer has parameter galleries
  - Class ComputeManagementClient no longer has parameter galleryApplications
  - Class ComputeManagementClient no longer has parameter galleryApplicationVersions
  - Class ComputeManagementClient no longer has parameter galleryImages
  - Class ComputeManagementClient no longer has parameter galleryImageVersions
  - Class ComputeManagementClient no longer has parameter gallerySharingProfile
  - Class ComputeManagementClient no longer has parameter images
  - Class ComputeManagementClient no longer has parameter logAnalytics
  - Class ComputeManagementClient no longer has parameter operations
  - Class ComputeManagementClient no longer has parameter proximityPlacementGroups
  - Class ComputeManagementClient no longer has parameter resourceSkus
  - Class ComputeManagementClient no longer has parameter restorePointCollections
  - Class ComputeManagementClient no longer has parameter restorePoints
  - Class ComputeManagementClient no longer has parameter sharedGalleries
  - Class ComputeManagementClient no longer has parameter sharedGalleryImages
  - Class ComputeManagementClient no longer has parameter sharedGalleryImageVersions
  - Class ComputeManagementClient no longer has parameter snapshots
  - Class ComputeManagementClient no longer has parameter sshPublicKeys
  - Class ComputeManagementClient no longer has parameter usageOperations
  - Class ComputeManagementClient no longer has parameter virtualMachineExtensionImages
  - Class ComputeManagementClient no longer has parameter virtualMachineExtensions
  - Class ComputeManagementClient no longer has parameter virtualMachineImages
  - Class ComputeManagementClient no longer has parameter virtualMachineImagesEdgeZone
  - Class ComputeManagementClient no longer has parameter virtualMachineRunCommands
  - Class ComputeManagementClient no longer has parameter virtualMachines
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSetExtensions
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSetRollingUpgrades
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSets
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSetVMExtensions
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSetVMRunCommands
  - Class ComputeManagementClient no longer has parameter virtualMachineScaleSetVMs
  - Class ComputeManagementClient no longer has parameter virtualMachineSizes
  - Removed Enum KnownAccessLevel
  - Removed Enum KnownAggregatedReplicationState
  - Removed Enum KnownArchitecture
  - Removed Enum KnownArchitectureTypes
  - Removed Enum KnownAvailabilitySetSkuTypes
  - Removed Enum KnownCapacityReservationGroupInstanceViewTypes
  - Removed Enum KnownCapacityReservationInstanceViewTypes
  - Removed Enum KnownCloudServiceSlotType
  - Removed Enum KnownCloudServiceUpgradeMode
  - Removed Enum KnownConfidentialVMEncryptionType
  - Removed Enum KnownConsistencyModeTypes
  - Removed Enum KnownCopyCompletionErrorReason
  - Removed Enum KnownDataAccessAuthMode
  - Removed Enum KnownDeleteOptions
  - Removed Enum KnownDiffDiskOptions
  - Removed Enum KnownDiffDiskPlacement
  - Removed Enum KnownDiskCreateOption
  - Removed Enum KnownDiskCreateOptionTypes
  - Removed Enum KnownDiskDeleteOptionTypes
  - Removed Enum KnownDiskDetachOptionTypes
  - Removed Enum KnownDiskEncryptionSetIdentityType
  - Removed Enum KnownDiskEncryptionSetType
  - Removed Enum KnownDiskSecurityTypes
  - Removed Enum KnownDiskState
  - Removed Enum KnownDiskStorageAccountTypes
  - Removed Enum KnownEncryptionType
  - Removed Enum KnownExecutionState
  - Removed Enum KnownExpandTypesForGetCapacityReservationGroups
  - Removed Enum KnownExpandTypesForGetVMScaleSets
  - Removed Enum KnownExtendedLocationType
  - Removed Enum KnownExtendedLocationTypes
  - Removed Enum KnownGalleryExpandParams
  - Removed Enum KnownGalleryExtendedLocationType
  - Removed Enum KnownGalleryProvisioningState
  - Removed Enum KnownGallerySharingPermissionTypes
  - Removed Enum KnownHyperVGeneration
  - Removed Enum KnownHyperVGenerationType
  - Removed Enum KnownHyperVGenerationTypes
  - Removed Enum KnownIPVersion
  - Removed Enum KnownIPVersions
  - Removed Enum KnownLinuxPatchAssessmentMode
  - Removed Enum KnownLinuxVMGuestPatchAutomaticByPlatformRebootSetting
  - Removed Enum KnownLinuxVMGuestPatchMode
  - Removed Enum KnownNetworkAccessPolicy
  - Removed Enum KnownNetworkApiVersion
  - Removed Enum KnownOperatingSystemType
  - Removed Enum KnownOrchestrationMode
  - Removed Enum KnownOrchestrationServiceNames
  - Removed Enum KnownOrchestrationServiceState
  - Removed Enum KnownOrchestrationServiceStateAction
  - Removed Enum KnownPatchAssessmentState
  - Removed Enum KnownPatchInstallationState
  - Removed Enum KnownPatchOperationStatus
  - Removed Enum KnownPrivateEndpointConnectionProvisioningState
  - Removed Enum KnownPrivateEndpointServiceConnectionStatus
  - Removed Enum KnownProximityPlacementGroupType
  - Removed Enum KnownPublicIPAddressSkuName
  - Removed Enum KnownPublicIPAddressSkuTier
  - Removed Enum KnownPublicIPAllocationMethod
  - Removed Enum KnownPublicNetworkAccess
  - Removed Enum KnownRepairAction
  - Removed Enum KnownReplicationMode
  - Removed Enum KnownReplicationState
  - Removed Enum KnownReplicationStatusTypes
  - Removed Enum KnownRestorePointCollectionExpandOptions
  - Removed Enum KnownRestorePointExpandOptions
  - Removed Enum KnownSecurityEncryptionTypes
  - Removed Enum KnownSecurityTypes
  - Removed Enum KnownSelectPermissions
  - Removed Enum KnownSharedGalleryHostCaching
  - Removed Enum KnownSharedToValues
  - Removed Enum KnownSharingProfileGroupTypes
  - Removed Enum KnownSharingState
  - Removed Enum KnownSharingUpdateOperationTypes
  - Removed Enum KnownSnapshotStorageAccountTypes
  - Removed Enum KnownStorageAccountType
  - Removed Enum KnownStorageAccountTypes
  - Removed Enum KnownVirtualMachineEvictionPolicyTypes
  - Removed Enum KnownVirtualMachinePriorityTypes
  - Removed Enum KnownVirtualMachineScaleSetScaleInRules
  - Removed Enum KnownVirtualMachineSizeTypes
  - Removed Enum KnownVmDiskTypes
  - Removed Enum KnownVMGuestPatchClassificationLinux
  - Removed Enum KnownVMGuestPatchClassificationWindows
  - Removed Enum KnownVMGuestPatchRebootBehavior
  - Removed Enum KnownVMGuestPatchRebootSetting
  - Removed Enum KnownVMGuestPatchRebootStatus
  - Removed Enum KnownWindowsPatchAssessmentMode
  - Removed Enum KnownWindowsVMGuestPatchAutomaticByPlatformRebootSetting
  - Removed Enum KnownWindowsVMGuestPatchMode
    
    
## 19.1.0 (2022-06-27)
    
**Features**

  - Added Interface AvailabilitySet
  - Added Interface AvailabilitySetUpdate
  - Added Interface CapacityReservation
  - Added Interface CapacityReservationGroup
  - Added Interface CapacityReservationGroupUpdate
  - Added Interface CapacityReservationInstanceViewWithName
  - Added Interface CapacityReservationUpdate
  - Added Interface CommunityGallery
  - Added Interface CommunityGalleryImage
  - Added Interface CommunityGalleryImageVersion
  - Added Interface DataDiskImageEncryption
  - Added Interface DedicatedHost
  - Added Interface DedicatedHostGroup
  - Added Interface DedicatedHostGroupUpdate
  - Added Interface DedicatedHostInstanceViewWithName
  - Added Interface DedicatedHostUpdate
  - Added Interface Disk
  - Added Interface DiskAccess
  - Added Interface DiskEncryptionSet
  - Added Interface DiskEncryptionSetParameters
  - Added Interface DiskRestorePoint
  - Added Interface Gallery
  - Added Interface GalleryApplication
  - Added Interface GalleryApplicationUpdate
  - Added Interface GalleryApplicationVersion
  - Added Interface GalleryApplicationVersionPublishingProfile
  - Added Interface GalleryApplicationVersionUpdate
  - Added Interface GalleryDataDiskImage
  - Added Interface GalleryImage
  - Added Interface GalleryImageUpdate
  - Added Interface GalleryImageVersion
  - Added Interface GalleryImageVersionPublishingProfile
  - Added Interface GalleryImageVersionUpdate
  - Added Interface GalleryOSDiskImage
  - Added Interface GalleryUpdate
  - Added Interface Image_2
  - Added Interface ImageDataDisk
  - Added Interface ImageOSDisk
  - Added Interface ImageReference
  - Added Interface ImageUpdate
  - Added Interface ManagedDiskParameters
  - Added Interface NetworkInterfaceReference
  - Added Interface OSDiskImageEncryption
  - Added Interface PirSharedGalleryResource
  - Added Interface ProximityPlacementGroup
  - Added Interface ProximityPlacementGroupUpdate
  - Added Interface RequestRateByIntervalInput
  - Added Interface RestorePoint
  - Added Interface RestorePointCollection
  - Added Interface RestorePointCollectionUpdate
  - Added Interface RollingUpgradeStatusInfo
  - Added Interface RunCommandDocument
  - Added Interface SharedGallery
  - Added Interface SharedGalleryDataDiskImage
  - Added Interface SharedGalleryImage
  - Added Interface SharedGalleryImageVersion
  - Added Interface SharedGalleryOSDiskImage
  - Added Interface Snapshot
  - Added Interface SshPublicKeyResource
  - Added Interface SshPublicKeyUpdateResource
  - Added Interface SubResourceWithColocationStatus
  - Added Interface SystemData
  - Added Interface ThrottledRequestsInput
  - Added Interface VirtualMachine
  - Added Interface VirtualMachineCaptureResult
  - Added Interface VirtualMachineExtension
  - Added Interface VirtualMachineExtensionImage
  - Added Interface VirtualMachineExtensionUpdate
  - Added Interface VirtualMachineImage
  - Added Interface VirtualMachineImageResource
  - Added Interface VirtualMachineRunCommand
  - Added Interface VirtualMachineRunCommandUpdate
  - Added Interface VirtualMachineScaleSet
  - Added Interface VirtualMachineScaleSetExtension
  - Added Interface VirtualMachineScaleSetExtensionUpdate
  - Added Interface VirtualMachineScaleSetIPConfiguration
  - Added Interface VirtualMachineScaleSetNetworkConfiguration
  - Added Interface VirtualMachineScaleSetReimageParameters
  - Added Interface VirtualMachineScaleSetUpdate
  - Added Interface VirtualMachineScaleSetUpdateIPConfiguration
  - Added Interface VirtualMachineScaleSetUpdateNetworkConfiguration
  - Added Interface VirtualMachineScaleSetVM
  - Added Interface VirtualMachineScaleSetVMExtension
  - Added Interface VirtualMachineScaleSetVMExtensionUpdate
  - Added Interface VirtualMachineScaleSetVMReimageParameters
  - Added Interface VirtualMachineUpdate
  - Added Type Alias CloudServiceSlotType
  - Interface CloudService has a new optional parameter systemData
  - Interface CloudServiceNetworkProfile has a new optional parameter slotType
  - Added Enum KnownCloudServiceSlotType
    
    
## 19.0.0 (2022-06-06)
    
**Features**

  - Added operation CommunityGalleryImages.list
  - Added operation CommunityGalleryImageVersions.list
  - Added operation VirtualMachineImages.listByEdgeZone
  - Added Interface CommunityGalleryImageList
  - Added Interface CommunityGalleryImagesListNextOptionalParams
  - Added Interface CommunityGalleryImagesListOptionalParams
  - Added Interface CommunityGalleryImageVersionList
  - Added Interface CommunityGalleryImageVersionsListNextOptionalParams
  - Added Interface CommunityGalleryImageVersionsListOptionalParams
  - Added Interface CopyCompletionError
  - Added Interface SharedGalleryDiskImage
  - Added Interface SharedGalleryImageVersionStorageProfile
  - Added Interface UserArtifactSettings
  - Added Interface VirtualMachineImagesListByEdgeZoneOptionalParams
  - Added Interface VmImagesInEdgeZoneListResult
  - Added Type Alias CommunityGalleryImagesListNextResponse
  - Added Type Alias CommunityGalleryImagesListResponse
  - Added Type Alias CommunityGalleryImageVersionsListNextResponse
  - Added Type Alias CommunityGalleryImageVersionsListResponse
  - Added Type Alias CopyCompletionErrorReason
  - Added Type Alias GalleryProvisioningState
  - Added Type Alias SharedGalleryDataDiskImage
  - Added Type Alias SharedGalleryHostCaching
  - Added Type Alias SharedGalleryOSDiskImage
  - Added Type Alias VirtualMachineImagesListByEdgeZoneResponse
  - Interface DiskEncryptionSetUpdate has a new optional parameter federatedClientId
  - Interface EncryptionSetIdentity has a new optional parameter userAssignedIdentities
  - Interface ImageDiskReference has a new optional parameter communityGalleryImageId
  - Interface ImageDiskReference has a new optional parameter sharedGalleryImageId
  - Type Alias CommunityGalleryImage has a new parameter architecture
  - Type Alias CommunityGalleryImage has a new parameter privacyStatementUri
  - Type Alias CommunityGalleryImage has a new parameter eula
  - Type Alias CommunityGalleryImageVersion has a new parameter excludeFromLatest
  - Type Alias CommunityGalleryImageVersion has a new parameter storageProfile
  - Type Alias DiskEncryptionSet has a new parameter federatedClientId
  - Type Alias DiskRestorePoint has a new parameter securityProfile
  - Type Alias GalleryApplicationVersionPublishingProfile has a new parameter settings
  - Type Alias SharedGalleryImage has a new parameter architecture
  - Type Alias SharedGalleryImageVersion has a new parameter excludeFromLatest
  - Type Alias SharedGalleryImageVersion has a new parameter storageProfile
  - Type Alias Snapshot has a new parameter copyCompletionError
  - Added Enum KnownCopyCompletionErrorReason
  - Added Enum KnownGalleryProvisioningState
  - Added Enum KnownSharedGalleryHostCaching
  - Enum KnownDiskEncryptionSetIdentityType has a new value SystemAssignedUserAssigned
  - Enum KnownDiskEncryptionSetIdentityType has a new value UserAssigned
  - Enum KnownDiskStorageAccountTypes has a new value PremiumV2LRS
  - Enum KnownGallerySharingPermissionTypes has a new value Community

**Breaking Changes**

  - Removed Enum KnownGalleryApplicationVersionPropertiesProvisioningState
  - Removed Enum KnownGalleryImagePropertiesProvisioningState
  - Removed Enum KnownGalleryImageVersionPropertiesProvisioningState
  - Removed Enum KnownGalleryPropertiesProvisioningState
  - Enum KnownSharingProfileGroupTypes no longer has value Community
    
    
## 18.0.0 (2022-05-23)
    
**Features**

  - Added Interface DedicatedHostGroupPropertiesAdditionalCapabilities
  - Added Interface LinuxVMGuestPatchAutomaticByPlatformSettings
  - Added Interface ProximityPlacementGroupPropertiesIntent
  - Added Interface ResourceWithOptionalLocation
  - Added Interface WindowsVMGuestPatchAutomaticByPlatformSettings
  - Added Type Alias LinuxVMGuestPatchAutomaticByPlatformRebootSetting
  - Added Type Alias WindowsVMGuestPatchAutomaticByPlatformRebootSetting
  - Interface AutomaticOSUpgradePolicy has a new optional parameter useRollingUpgradePolicy
  - Interface DiskRestorePointReplicationStatus has a new optional parameter completionPercent
  - Interface LinuxPatchSettings has a new optional parameter automaticByPlatformSettings
  - Interface PatchSettings has a new optional parameter automaticByPlatformSettings
  - Interface VirtualMachineScaleSetDataDisk has a new optional parameter deleteOption
  - Interface VirtualMachineScaleSetOSDisk has a new optional parameter deleteOption
  - Interface VirtualMachineScaleSetUpdateOSDisk has a new optional parameter deleteOption
  - Interface VMGalleryApplication has a new optional parameter enableAutomaticUpgrade
  - Interface VMGalleryApplication has a new optional parameter treatFailureAsDeploymentFailure
  - Add parameters of ResourceWithOptionalLocation to TypeAlias VirtualMachineExtension
  - Type Alias DedicatedHostGroup has a new parameter additionalCapabilities
  - Type Alias DedicatedHostGroupUpdate has a new parameter additionalCapabilities
  - Type Alias ProximityPlacementGroup has a new parameter zones
  - Type Alias ProximityPlacementGroup has a new parameter intent
  - Type Alias VirtualMachineScaleSetVM has a new parameter identity
  - Added Enum KnownLinuxVMGuestPatchAutomaticByPlatformRebootSetting
  - Added Enum KnownWindowsVMGuestPatchAutomaticByPlatformRebootSetting
  - Enum KnownStorageAccountTypes has a new value PremiumV2LRS

**Breaking Changes**

  - Delete parameters of Resource in TypeAlias VirtualMachineExtension
    
## 17.3.1 (2022-04-06)

**features**

  -  Bug fix

## 17.3.0 (2022-03-02)
    
**Features**

  - Added Type Alias Architecture
  - Added Type Alias ArchitectureTypes
  - Added Type Alias DataAccessAuthMode
  - Interface DiskUpdate has a new optional parameter dataAccessAuthMode
  - Interface SnapshotUpdate has a new optional parameter dataAccessAuthMode
  - Interface SupportedCapabilities has a new optional parameter architecture
  - Type Alias Disk has a new parameter dataAccessAuthMode
  - Type Alias GalleryImage has a new parameter architecture
  - Type Alias GalleryImageUpdate has a new parameter architecture
  - Type Alias Snapshot has a new parameter dataAccessAuthMode
  - Type Alias VirtualMachineImage has a new parameter architecture
  - Added Enum KnownArchitecture
  - Added Enum KnownArchitectureTypes
  - Added Enum KnownDataAccessAuthMode
    
    
## 17.2.0 (2022-02-14)
    
**Features**

  - Added operation DedicatedHosts.beginRestart
  - Added operation DedicatedHosts.beginRestartAndWait
  - Added Interface CommunityGalleryInfo
  - Added Interface DedicatedHostsRestartOptionalParams
  - Added Interface DiskRestorePointInstanceView
  - Added Interface DiskRestorePointReplicationStatus
  - Added Interface GalleryExtendedLocation
  - Added Interface GalleryTargetExtendedLocation
  - Added Interface OSDiskImageSecurityProfile
  - Added Interface RegionalSharingStatus
  - Added Interface RestorePointInstanceView
  - Added Interface SharingStatus
  - Added Interface VirtualMachineScaleSetHardwareProfile
  - Added Interface VMDiskSecurityProfile
  - Added Type Alias ConfidentialVMEncryptionType
  - Added Type Alias GalleryExpandParams
  - Added Type Alias GalleryExtendedLocationType
  - Added Type Alias RepairAction
  - Added Type Alias RestorePointExpandOptions
  - Added Type Alias SecurityEncryptionTypes
  - Added Type Alias SharingState
  - Interface AutomaticRepairsPolicy has a new optional parameter repairAction
  - Interface GalleriesGetOptionalParams has a new optional parameter expand
  - Interface GalleryArtifactPublishingProfileBase has a new optional parameter targetExtendedLocations
  - Interface RestorePointsGetOptionalParams has a new optional parameter expand
  - Interface SharingProfile has a new optional parameter communityGalleryInfo
  - Interface VirtualMachineScaleSetManagedDiskParameters has a new optional parameter securityProfile
  - Interface VirtualMachineScaleSetOSProfile has a new optional parameter allowExtensionOperations
  - Interface VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams has a new optional parameter placementGroupId
  - Interface VirtualMachineScaleSetsForceRecoveryServiceFabricPlatformUpdateDomainWalkOptionalParams has a new optional parameter zone
  - Interface VirtualMachineScaleSetUpdatePublicIPAddressConfiguration has a new optional parameter publicIPPrefix
  - Interface VirtualMachineScaleSetVMProfile has a new optional parameter hardwareProfile
  - Interface VirtualMachinesListAllNextOptionalParams has a new optional parameter filter
  - Interface VirtualMachinesListAllOptionalParams has a new optional parameter filter
  - Interface VirtualMachinesListNextOptionalParams has a new optional parameter filter
  - Interface VirtualMachinesListOptionalParams has a new optional parameter filter
  - Type Alias CapacityReservation has a new parameter timeCreated
  - Type Alias CapacityReservationUpdate has a new parameter timeCreated
  - Type Alias DedicatedHost has a new parameter timeCreated
  - Type Alias DedicatedHostUpdate has a new parameter timeCreated
  - Type Alias Gallery has a new parameter sharingStatus
  - Type Alias GalleryUpdate has a new parameter sharingStatus
  - Type Alias ImageReference has a new parameter communityGalleryImageId
  - Type Alias ManagedDiskParameters has a new parameter securityProfile
  - Type Alias OSDiskImageEncryption has a new parameter securityProfile
  - Type Alias RestorePoint has a new parameter sourceRestorePoint
  - Type Alias RestorePoint has a new parameter instanceView
  - Type Alias VirtualMachine has a new parameter timeCreated
  - Type Alias VirtualMachineExtension has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineExtensionUpdate has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineScaleSet has a new parameter timeCreated
  - Type Alias VirtualMachineScaleSetExtension has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineScaleSetExtensionUpdate has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineScaleSetVMExtension has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineScaleSetVMExtensionUpdate has a new parameter protectedSettingsFromKeyVault
  - Type Alias VirtualMachineUpdate has a new parameter timeCreated
  - Added Enum KnownConfidentialVMEncryptionType
  - Added Enum KnownGalleryExpandParams
  - Added Enum KnownGalleryExtendedLocationType
  - Added Enum KnownRepairAction
  - Added Enum KnownRestorePointExpandOptions
  - Added Enum KnownSecurityEncryptionTypes
  - Added Enum KnownSharingState
  - Enum KnownSecurityTypes has a new value ConfidentialVM
  - Enum KnownSharingProfileGroupTypes has a new value Community
  - Enum KnownSharingUpdateOperationTypes has a new value EnableCommunity
    
    
## 17.1.0 (2022-01-06)
    
**Features**

  - Interface AccessUri has a new optional parameter securityDataAccessSAS
  - Interface CreationData has a new optional parameter securityDataUri
  - Interface DiskSecurityProfile has a new optional parameter secureVMDiskEncryptionSetId
  - Interface GrantAccessData has a new optional parameter getSecureVMGuestStateSAS
  - Interface SnapshotUpdate has a new optional parameter supportedCapabilities
  - Type Alias DiskRestorePoint has a new parameter replicationState
  - Type Alias DiskRestorePoint has a new parameter sourceResourceLocation
  - Type Alias Snapshot has a new parameter securityProfile
  - Enum KnownDiskCreateOption has a new value ImportSecure
  - Enum KnownDiskCreateOption has a new value UploadPreparedSecure
  - Enum KnownDiskEncryptionSetType has a new value ConfidentialVmEncryptedWithCustomerKey
  - Enum KnownDiskSecurityTypes has a new value ConfidentialVMDiskEncryptedWithCustomerKey
  - Enum KnownDiskSecurityTypes has a new value ConfidentialVMDiskEncryptedWithPlatformKey
  - Enum KnownDiskSecurityTypes has a new value ConfidentialVMVmguestStateOnlyEncryptedWithPlatformKey
    
    
## 17.0.0 (2021-12-07)

The package of @azure/arm-compute is using our next generation design principles since version 17.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
