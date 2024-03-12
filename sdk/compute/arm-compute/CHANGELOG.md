# Release History
    
## 22.0.0-beta.1 (2024-03-12)
    
**Features**

  - Added operation group DiagnosticOperations
  - Added operation group Diagnostics
  - Added operation group DiskInspection
  - Added operation group DiskInspectionStorageConfiguration
  - Added Interface ComputeDiagnosticBase
  - Added Interface ComputeDiagnosticsList
  - Added Interface DiagnosticOperationsReadOptionalParams
  - Added Interface DiagnosticProperties
  - Added Interface DiagnosticsListNextOptionalParams
  - Added Interface DiagnosticsListOptionalParams
  - Added Interface DiskInspectionGetOptionalParams
  - Added Interface DiskInspectionStorageConfigurationRegisterOptionalParams
  - Added Interface DiskInspectionStorageConfigurationValidateOptionalParams
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface LoadBalancerFrontendIPConfiguration
  - Added Interface LoadBalancerFrontendIPConfigurationProperties
  - Added Interface RunDiskInspectionAsyncOperationResult
  - Added Interface RunDiskInspectionInput
  - Added Interface StorageConfigurationInput
  - Added Interface StorageConfigurationResponse
  - Added Interface VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue
  - Added Type Alias DiagnosticsListNextResponse
  - Added Type Alias DiagnosticsListResponse
  - Added Type Alias DiskInspectionGetResponse
  - Added Type Alias DiskInspectionStorageConfigurationValidateResponse
  - Added Type Alias GalleryApplicationVersionPropertiesProvisioningState
  - Added Type Alias GalleryImagePropertiesProvisioningState
  - Added Type Alias GalleryImageVersionPropertiesProvisioningState
  - Added Type Alias GalleryPropertiesProvisioningState
  - Added Type Alias ResultStatus
  - Interface GalleryArtifactVersionSource has a new optional parameter uri
  - Added Enum KnownGalleryApplicationVersionPropertiesProvisioningState
  - Added Enum KnownGalleryImagePropertiesProvisioningState
  - Added Enum KnownGalleryImageVersionPropertiesProvisioningState
  - Added Enum KnownGalleryPropertiesProvisioningState
  - Added Enum KnownResultStatus
  - Enum KnownSharingProfileGroupTypes has a new value Community
  - Enum KnownStorageAccountType has a new value StandardSSDLRS

**Breaking Changes**

  - Removed operation CommunityGalleryImages.list
  - Removed operation CommunityGalleryImageVersions.list
  - Removed operation DedicatedHosts.beginRedeploy
  - Removed operation DedicatedHosts.beginRedeployAndWait
  - Removed operation DedicatedHosts.listAvailableSizes
  - Removed operation VirtualMachineImages.listByEdgeZone
  - Removed operation VirtualMachines.beginAttachDetachDataDisks
  - Removed operation VirtualMachines.beginAttachDetachDataDisksAndWait
  - Removed operation VirtualMachineScaleSets.beginApproveRollingUpgrade
  - Removed operation VirtualMachineScaleSets.beginApproveRollingUpgradeAndWait
  - Removed operation VirtualMachineScaleSets.beginReapply
  - Removed operation VirtualMachineScaleSets.beginReapplyAndWait
  - Removed operation VirtualMachineScaleSetVMs.beginApproveRollingUpgrade
  - Removed operation VirtualMachineScaleSetVMs.beginApproveRollingUpgradeAndWait
  - Removed operation VirtualMachineScaleSetVMs.beginAttachDetachDataDisks
  - Removed operation VirtualMachineScaleSetVMs.beginAttachDetachDataDisksAndWait
  - Interface AutomaticOSUpgradePolicy no longer has parameter osRollingUpgradeDeferral
  - Interface AutomaticOSUpgradePolicy no longer has parameter useRollingUpgradePolicy
  - Interface CapacityReservation no longer has parameter platformFaultDomainCount
  - Interface CapacityReservationGroup no longer has parameter sharingProfile
  - Interface CapacityReservationGroupInstanceView no longer has parameter sharedSubscriptionIds
  - Interface CapacityReservationGroupUpdate no longer has parameter sharingProfile
  - Interface CapacityReservationUpdate no longer has parameter platformFaultDomainCount
  - Interface CapacityReservationUtilization no longer has parameter currentCapacity
  - Interface CloudService no longer has parameter systemData
  - Interface CloudService no longer has parameter zones
  - Interface CloudServiceNetworkProfile no longer has parameter slotType
  - Interface CommunityGallery no longer has parameter artifactTags
  - Interface CommunityGallery no longer has parameter communityMetadata
  - Interface CommunityGallery no longer has parameter disclaimer
  - Interface CommunityGalleryImage no longer has parameter architecture
  - Interface CommunityGalleryImage no longer has parameter artifactTags
  - Interface CommunityGalleryImage no longer has parameter disclaimer
  - Interface CommunityGalleryImage no longer has parameter eula
  - Interface CommunityGalleryImage no longer has parameter privacyStatementUri
  - Interface CommunityGalleryImageVersion no longer has parameter artifactTags
  - Interface CommunityGalleryImageVersion no longer has parameter disclaimer
  - Interface CommunityGalleryImageVersion no longer has parameter excludeFromLatest
  - Interface CommunityGalleryImageVersion no longer has parameter storageProfile
  - Interface CreationData no longer has parameter elasticSanResourceId
  - Interface CreationData no longer has parameter performancePlus
  - Interface CreationData no longer has parameter provisionedBandwidthCopySpeed
  - Interface DedicatedHostGroup no longer has parameter additionalCapabilities
  - Interface DedicatedHostGroupUpdate no longer has parameter additionalCapabilities
  - Interface DedicatedHostUpdate no longer has parameter sku
  - Interface Disk no longer has parameter burstingEnabledTime
  - Interface Disk no longer has parameter lastOwnershipUpdateTime
  - Interface Disk no longer has parameter optimizedForFrequentAttach
  - Interface DiskEncryptionSet no longer has parameter federatedClientId
  - Interface DiskEncryptionSetUpdate no longer has parameter federatedClientId
  - Interface DiskRestorePoint no longer has parameter securityProfile
  - Interface DiskRestorePointReplicationStatus no longer has parameter completionPercent
  - Interface DiskUpdate no longer has parameter optimizedForFrequentAttach
  - Interface EncryptionSetIdentity no longer has parameter userAssignedIdentities
  - Interface GalleryApplication no longer has parameter customActions
  - Interface GalleryApplicationUpdate no longer has parameter customActions
  - Interface GalleryApplicationVersion no longer has parameter safetyProfile
  - Interface GalleryApplicationVersionPublishingProfile no longer has parameter advancedSettings
  - Interface GalleryApplicationVersionPublishingProfile no longer has parameter customActions
  - Interface GalleryApplicationVersionPublishingProfile no longer has parameter settings
  - Interface GalleryApplicationVersionUpdate no longer has parameter safetyProfile
  - Interface GalleryImageVersion no longer has parameter safetyProfile
  - Interface GalleryImageVersion no longer has parameter securityProfile
  - Interface GalleryImageVersionUpdate no longer has parameter safetyProfile
  - Interface GalleryImageVersionUpdate no longer has parameter securityProfile
  - Interface GrantAccessData no longer has parameter fileFormat
  - Interface ImageDiskReference no longer has parameter communityGalleryImageId
  - Interface ImageDiskReference no longer has parameter sharedGalleryImageId
  - Interface LinuxConfiguration no longer has parameter enableVMAgentPlatformUpdates
  - Interface LinuxPatchSettings no longer has parameter automaticByPlatformSettings
  - Interface LoadBalancerConfigurationProperties no longer has parameter frontendIpConfigurations
  - Interface PatchSettings no longer has parameter automaticByPlatformSettings
  - Interface ProximityPlacementGroup no longer has parameter intent
  - Interface ProximityPlacementGroup no longer has parameter zones
  - Interface RestorePointSourceMetadata no longer has parameter hyperVGeneration
  - Interface RestorePointSourceMetadata no longer has parameter userData
  - Interface RestorePointSourceVMDataDisk no longer has parameter writeAcceleratorEnabled
  - Interface RestorePointSourceVmosDisk no longer has parameter writeAcceleratorEnabled
  - Interface RestorePointSourceVMStorageProfile no longer has parameter diskControllerType
  - Interface RollingUpgradePolicy no longer has parameter maxSurge
  - Interface RollingUpgradePolicy no longer has parameter rollbackFailedInstancesOnPolicyBreach
  - Interface ScheduledEventsProfile no longer has parameter osImageNotificationProfile
  - Interface SecurityProfile no longer has parameter encryptionIdentity
  - Interface SecurityProfile no longer has parameter proxyAgentSettings
  - Interface SharedGallery no longer has parameter artifactTags
  - Interface SharedGalleryImage no longer has parameter architecture
  - Interface SharedGalleryImage no longer has parameter artifactTags
  - Interface SharedGalleryImage no longer has parameter eula
  - Interface SharedGalleryImage no longer has parameter privacyStatementUri
  - Interface SharedGalleryImageVersion no longer has parameter artifactTags
  - Interface SharedGalleryImageVersion no longer has parameter excludeFromLatest
  - Interface SharedGalleryImageVersion no longer has parameter storageProfile
  - Interface Snapshot no longer has parameter copyCompletionError
  - Interface Snapshot no longer has parameter incrementalSnapshotFamilyId
  - Interface SshPublicKeysGenerateKeyPairOptionalParams no longer has parameter parameters
  - Interface StorageProfile no longer has parameter diskControllerType
  - Interface SupportedCapabilities no longer has parameter diskControllerTypes
  - Interface TargetRegion no longer has parameter excludeFromLatest
  - Interface VirtualMachine no longer has parameter etag
  - Interface VirtualMachine no longer has parameter managedBy
  - Interface VirtualMachineExtension no longer has parameter provisionAfterExtensions
  - Interface VirtualMachineImage no longer has parameter imageDeprecationStatus
  - Interface VirtualMachineInstanceView no longer has parameter isVMInStandbyPool
  - Interface VirtualMachineNetworkInterfaceConfiguration no longer has parameter auxiliaryMode
  - Interface VirtualMachineNetworkInterfaceConfiguration no longer has parameter auxiliarySku
  - Interface VirtualMachineNetworkInterfaceConfiguration no longer has parameter disableTcpStateTracking
  - Interface VirtualMachinePublicIPAddressDnsSettingsConfiguration no longer has parameter domainNameLabelScope
  - Interface VirtualMachineReimageParameters no longer has parameter exactVersion
  - Interface VirtualMachineReimageParameters no longer has parameter osProfile
  - Interface VirtualMachineRunCommand no longer has parameter errorBlobManagedIdentity
  - Interface VirtualMachineRunCommand no longer has parameter outputBlobManagedIdentity
  - Interface VirtualMachineRunCommand no longer has parameter treatFailureAsDeploymentFailure
  - Interface VirtualMachineRunCommandScriptSource no longer has parameter scriptUriManagedIdentity
  - Interface VirtualMachineRunCommandUpdate no longer has parameter errorBlobManagedIdentity
  - Interface VirtualMachineRunCommandUpdate no longer has parameter outputBlobManagedIdentity
  - Interface VirtualMachineRunCommandUpdate no longer has parameter treatFailureAsDeploymentFailure
  - Interface VirtualMachineScaleSet no longer has parameter constrainedMaximumCapacity
  - Interface VirtualMachineScaleSet no longer has parameter etag
  - Interface VirtualMachineScaleSet no longer has parameter priorityMixPolicy
  - Interface VirtualMachineScaleSet no longer has parameter resiliencyPolicy
  - Interface VirtualMachineScaleSetDataDisk no longer has parameter deleteOption
  - Interface VirtualMachineScaleSetNetworkConfiguration no longer has parameter auxiliaryMode
  - Interface VirtualMachineScaleSetNetworkConfiguration no longer has parameter auxiliarySku
  - Interface VirtualMachineScaleSetNetworkConfiguration no longer has parameter disableTcpStateTracking
  - Interface VirtualMachineScaleSetOSDisk no longer has parameter deleteOption
  - Interface VirtualMachineScaleSetOSProfile no longer has parameter requireGuestProvisionSignal
  - Interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings no longer has parameter domainNameLabelScope
  - Interface VirtualMachineScaleSetsCreateOrUpdateOptionalParams no longer has parameter ifMatch
  - Interface VirtualMachineScaleSetsCreateOrUpdateOptionalParams no longer has parameter ifNoneMatch
  - Interface VirtualMachineScaleSetsDeallocateOptionalParams no longer has parameter hibernate
  - Interface VirtualMachineScaleSetStorageProfile no longer has parameter diskControllerType
  - Interface VirtualMachineScaleSetsUpdateOptionalParams no longer has parameter ifMatch
  - Interface VirtualMachineScaleSetsUpdateOptionalParams no longer has parameter ifNoneMatch
  - Interface VirtualMachineScaleSetUpdate no longer has parameter priorityMixPolicy
  - Interface VirtualMachineScaleSetUpdate no longer has parameter resiliencyPolicy
  - Interface VirtualMachineScaleSetUpdate no longer has parameter spotRestorePolicy
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration no longer has parameter auxiliaryMode
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration no longer has parameter auxiliarySku
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration no longer has parameter disableTcpStateTracking
  - Interface VirtualMachineScaleSetUpdateOSDisk no longer has parameter deleteOption
  - Interface VirtualMachineScaleSetUpdateStorageProfile no longer has parameter diskControllerType
  - Interface VirtualMachineScaleSetUpdateVMProfile no longer has parameter hardwareProfile
  - Interface VirtualMachineScaleSetVM no longer has parameter etag
  - Interface VirtualMachineScaleSetVM no longer has parameter identity
  - Interface VirtualMachineScaleSetVM no longer has parameter timeCreated
  - Interface VirtualMachineScaleSetVMExtension no longer has parameter location
  - Interface VirtualMachineScaleSetVMExtension no longer has parameter provisionAfterExtensions
  - Interface VirtualMachineScaleSetVMInstanceView no longer has parameter computerName
  - Interface VirtualMachineScaleSetVMInstanceView no longer has parameter hyperVGeneration
  - Interface VirtualMachineScaleSetVMInstanceView no longer has parameter osName
  - Interface VirtualMachineScaleSetVMInstanceView no longer has parameter osVersion
  - Interface VirtualMachineScaleSetVMProfile no longer has parameter securityPostureReference
  - Interface VirtualMachineScaleSetVMProfile no longer has parameter serviceArtifactReference
  - Interface VirtualMachineScaleSetVMProfile no longer has parameter timeCreated
  - Interface VirtualMachineScaleSetVMsUpdateOptionalParams no longer has parameter ifMatch
  - Interface VirtualMachineScaleSetVMsUpdateOptionalParams no longer has parameter ifNoneMatch
  - Interface VirtualMachinesCreateOrUpdateOptionalParams no longer has parameter ifMatch
  - Interface VirtualMachinesCreateOrUpdateOptionalParams no longer has parameter ifNoneMatch
  - Interface VirtualMachinesListAllOptionalParams no longer has parameter expand
  - Interface VirtualMachinesListOptionalParams no longer has parameter expand
  - Interface VirtualMachinesUpdateOptionalParams no longer has parameter ifMatch
  - Interface VirtualMachinesUpdateOptionalParams no longer has parameter ifNoneMatch
  - Interface VMGalleryApplication no longer has parameter enableAutomaticUpgrade
  - Interface VMGalleryApplication no longer has parameter treatFailureAsDeploymentFailure
  - Interface WindowsConfiguration no longer has parameter enableVMAgentPlatformUpdates
  - Interface LoadBalancerConfigurationProperties has a new required parameter frontendIPConfigurations
  - Parameter id of interface ImageDiskReference is now required
  - Type of parameter protectedSettings of interface CloudServiceExtensionProperties is changed from any to string
  - Type of parameter settings of interface CloudServiceExtensionProperties is changed from any to string
  - Type of parameter identifier of interface CommunityGalleryImage is changed from CommunityGalleryImageIdentifier to GalleryImageIdentifier
  - Type of parameter replicationStatus of interface DiskRestorePointInstanceView is changed from DiskRestorePointReplicationStatus to any
  - Type of parameter status of interface DiskRestorePointReplicationStatus is changed from InstanceViewStatus to any
  - Type of parameter provisioningState of interface Gallery is changed from GalleryProvisioningState to GalleryPropertiesProvisioningState
  - Type of parameter provisioningState of interface GalleryApplicationVersion is changed from GalleryProvisioningState to GalleryApplicationVersionPropertiesProvisioningState
  - Type of parameter provisioningState of interface GalleryApplicationVersionUpdate is changed from GalleryProvisioningState to GalleryApplicationVersionPropertiesProvisioningState
  - Type of parameter source of interface GalleryDiskImage is changed from GalleryDiskImageSource to GalleryArtifactVersionSource
  - Type of parameter provisioningState of interface GalleryImage is changed from GalleryProvisioningState to GalleryImagePropertiesProvisioningState
  - Type of parameter provisioningState of interface GalleryImageUpdate is changed from GalleryProvisioningState to GalleryImagePropertiesProvisioningState
  - Type of parameter provisioningState of interface GalleryImageVersion is changed from GalleryProvisioningState to GalleryImageVersionPropertiesProvisioningState
  - Type of parameter source of interface GalleryImageVersionStorageProfile is changed from GalleryArtifactVersionFullSource to GalleryArtifactVersionSource
  - Type of parameter provisioningState of interface GalleryImageVersionUpdate is changed from GalleryProvisioningState to GalleryImageVersionPropertiesProvisioningState
  - Type of parameter storageAccountType of interface GalleryTargetExtendedLocation is changed from EdgeZoneStorageAccountType to StorageAccountType
  - Type of parameter provisioningState of interface GalleryUpdate is changed from GalleryProvisioningState to GalleryPropertiesProvisioningState
  - Type of parameter diskRestorePoint of interface RestorePointSourceVMDataDisk is changed from DiskRestorePointAttributes to ApiEntityReference
  - Type of parameter diskRestorePoint of interface RestorePointSourceVmosDisk is changed from DiskRestorePointAttributes to ApiEntityReference
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineExtension is changed from KeyVaultSecretReference to any
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineExtensionUpdate is changed from KeyVaultSecretReference to any
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineScaleSetExtension is changed from KeyVaultSecretReference to any
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineScaleSetExtensionUpdate is changed from KeyVaultSecretReference to any
  - Type of parameter userAssignedIdentities of interface VirtualMachineScaleSetIdentity is changed from {
        [propertyName: string]: UserAssignedIdentitiesValue;
    } to {
        [propertyName: string]: VirtualMachineScaleSetIdentityUserAssignedIdentitiesValue;
    }
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineScaleSetVMExtension is changed from KeyVaultSecretReference to any
  - Type of parameter protectedSettingsFromKeyVault of interface VirtualMachineScaleSetVMExtensionUpdate is changed from KeyVaultSecretReference to any
  - Removed Enum KnownAlternativeType
  - Removed Enum KnownCloudServiceSlotType
  - Removed Enum KnownCopyCompletionErrorReason
  - Removed Enum KnownDiskControllerTypes
  - Removed Enum KnownDomainNameLabelScopeTypes
  - Removed Enum KnownEdgeZoneStorageAccountType
  - Removed Enum KnownExpandTypeForListVMs
  - Removed Enum KnownExpandTypesForListVMs
  - Removed Enum KnownFileFormat
  - Removed Enum KnownGalleryProvisioningState
  - Removed Enum KnownImageState
  - Removed Enum KnownLinuxVMGuestPatchAutomaticByPlatformRebootSetting
  - Removed Enum KnownMode
  - Removed Enum KnownNetworkInterfaceAuxiliaryMode
  - Removed Enum KnownNetworkInterfaceAuxiliarySku
  - Removed Enum KnownPolicyViolationCategory
  - Removed Enum KnownProvisionedBandwidthCopyOption
  - Removed Enum KnownRestorePointEncryptionType
  - Removed Enum KnownSharedGalleryHostCaching
  - Removed Enum KnownSshEncryptionTypes
  - Removed Enum KnownUefiKeyType
  - Removed Enum KnownUefiSignatureTemplateName
  - Removed Enum KnownWindowsVMGuestPatchAutomaticByPlatformRebootSetting
  - Enum KnownConfidentialVMEncryptionType no longer has value NonPersistedTPM
  - Enum KnownDiskCreateOption no longer has value CopyFromSanSnapshot
  - Enum KnownDiskEncryptionSetIdentityType no longer has value SystemAssignedUserAssigned
  - Enum KnownDiskEncryptionSetIdentityType no longer has value UserAssigned
  - Enum KnownDiskSecurityTypes no longer has value ConfidentialVMNonPersistedTPM
  - Enum KnownDiskStorageAccountTypes no longer has value PremiumV2LRS
  - Enum KnownGallerySharingPermissionTypes no longer has value Community
  - Enum KnownOrchestrationServiceNames no longer has value DummyOrchestrationServiceName
  - Enum KnownReplicationStatusTypes no longer has value UefiSettings
  - Enum KnownSecurityEncryptionTypes no longer has value NonPersistedTPM
  - Enum KnownStorageAccountTypes no longer has value PremiumV2LRS
    
    
## 21.4.0 (2023-12-28)
    
**Features**

  - Added Type Alias ProvisionedBandwidthCopyOption
  - Interface CreationData has a new optional parameter provisionedBandwidthCopySpeed
  - Added Enum KnownProvisionedBandwidthCopyOption
  - Enum KnownDiskSecurityTypes has a new value ConfidentialVMNonPersistedTPM
    
    
## 21.3.0 (2023-12-08)
    
**Features**

  - Added operation DedicatedHosts.beginRedeploy
  - Added operation DedicatedHosts.beginRedeployAndWait
  - Added operation VirtualMachines.beginAttachDetachDataDisks
  - Added operation VirtualMachines.beginAttachDetachDataDisksAndWait
  - Added operation VirtualMachineScaleSets.beginApproveRollingUpgrade
  - Added operation VirtualMachineScaleSets.beginApproveRollingUpgradeAndWait
  - Added operation VirtualMachineScaleSetVMs.beginApproveRollingUpgrade
  - Added operation VirtualMachineScaleSetVMs.beginApproveRollingUpgradeAndWait
  - Added operation VirtualMachineScaleSetVMs.beginAttachDetachDataDisks
  - Added operation VirtualMachineScaleSetVMs.beginAttachDetachDataDisksAndWait
  - Added Interface AttachDetachDataDisksRequest
  - Added Interface CommunityGalleryMetadata
  - Added Interface DataDisksToAttach
  - Added Interface DataDisksToDetach
  - Added Interface DedicatedHostsRedeployHeaders
  - Added Interface DedicatedHostsRedeployOptionalParams
  - Added Interface EncryptionIdentity
  - Added Interface GalleryImageVersionUefiSettings
  - Added Interface ImageVersionSecurityProfile
  - Added Interface ProxyAgentSettings
  - Added Interface ResiliencyPolicy
  - Added Interface ResilientVMCreationPolicy
  - Added Interface ResilientVMDeletionPolicy
  - Added Interface ResourceSharingProfile
  - Added Interface SshGenerateKeyPairInputParameters
  - Added Interface UefiKey
  - Added Interface UefiKeySignatures
  - Added Interface VirtualMachinesAttachDetachDataDisksHeaders
  - Added Interface VirtualMachinesAttachDetachDataDisksOptionalParams
  - Added Interface VirtualMachineScaleSetsApproveRollingUpgradeHeaders
  - Added Interface VirtualMachineScaleSetsApproveRollingUpgradeOptionalParams
  - Added Interface VirtualMachineScaleSetVMsApproveRollingUpgradeHeaders
  - Added Interface VirtualMachineScaleSetVMsApproveRollingUpgradeOptionalParams
  - Added Interface VirtualMachineScaleSetVMsAttachDetachDataDisksHeaders
  - Added Interface VirtualMachineScaleSetVMsAttachDetachDataDisksOptionalParams
  - Added Type Alias DedicatedHostsRedeployResponse
  - Added Type Alias Mode
  - Added Type Alias SshEncryptionTypes
  - Added Type Alias UefiKeyType
  - Added Type Alias UefiSignatureTemplateName
  - Added Type Alias VirtualMachinesAttachDetachDataDisksResponse
  - Added Type Alias VirtualMachineScaleSetsApproveRollingUpgradeResponse
  - Added Type Alias VirtualMachineScaleSetVMsApproveRollingUpgradeResponse
  - Added Type Alias VirtualMachineScaleSetVMsAttachDetachDataDisksResponse
  - Interface AutomaticOSUpgradePolicy has a new optional parameter osRollingUpgradeDeferral
  - Interface CapacityReservationGroup has a new optional parameter sharingProfile
  - Interface CapacityReservationGroupInstanceView has a new optional parameter sharedSubscriptionIds
  - Interface CapacityReservationGroupUpdate has a new optional parameter sharingProfile
  - Interface CommunityGallery has a new optional parameter artifactTags
  - Interface CommunityGallery has a new optional parameter communityMetadata
  - Interface CommunityGallery has a new optional parameter disclaimer
  - Interface CommunityGalleryImage has a new optional parameter artifactTags
  - Interface CommunityGalleryImage has a new optional parameter disclaimer
  - Interface CommunityGalleryImageVersion has a new optional parameter artifactTags
  - Interface CommunityGalleryImageVersion has a new optional parameter disclaimer
  - Interface GalleryImageVersion has a new optional parameter securityProfile
  - Interface GalleryImageVersionUpdate has a new optional parameter securityProfile
  - Interface RestorePointSourceVMStorageProfile has a new optional parameter diskControllerType
  - Interface SecurityProfile has a new optional parameter encryptionIdentity
  - Interface SecurityProfile has a new optional parameter proxyAgentSettings
  - Interface SharedGallery has a new optional parameter artifactTags
  - Interface SharedGalleryImage has a new optional parameter artifactTags
  - Interface SharedGalleryImageVersion has a new optional parameter artifactTags
  - Interface SshPublicKeysGenerateKeyPairOptionalParams has a new optional parameter parameters
  - Interface VirtualMachine has a new optional parameter etag
  - Interface VirtualMachine has a new optional parameter managedBy
  - Interface VirtualMachineInstanceView has a new optional parameter isVMInStandbyPool
  - Interface VirtualMachineScaleSet has a new optional parameter etag
  - Interface VirtualMachineScaleSet has a new optional parameter resiliencyPolicy
  - Interface VirtualMachineScaleSetsCreateOrUpdateOptionalParams has a new optional parameter ifMatch
  - Interface VirtualMachineScaleSetsCreateOrUpdateOptionalParams has a new optional parameter ifNoneMatch
  - Interface VirtualMachineScaleSetsUpdateOptionalParams has a new optional parameter ifMatch
  - Interface VirtualMachineScaleSetsUpdateOptionalParams has a new optional parameter ifNoneMatch
  - Interface VirtualMachineScaleSetUpdate has a new optional parameter resiliencyPolicy
  - Interface VirtualMachineScaleSetVM has a new optional parameter etag
  - Interface VirtualMachineScaleSetVMProfile has a new optional parameter timeCreated
  - Interface VirtualMachineScaleSetVMsUpdateOptionalParams has a new optional parameter ifMatch
  - Interface VirtualMachineScaleSetVMsUpdateOptionalParams has a new optional parameter ifNoneMatch
  - Interface VirtualMachinesCreateOrUpdateOptionalParams has a new optional parameter ifMatch
  - Interface VirtualMachinesCreateOrUpdateOptionalParams has a new optional parameter ifNoneMatch
  - Interface VirtualMachinesUpdateOptionalParams has a new optional parameter ifMatch
  - Interface VirtualMachinesUpdateOptionalParams has a new optional parameter ifNoneMatch
  - Added Enum KnownMode
  - Added Enum KnownSshEncryptionTypes
  - Added Enum KnownUefiKeyType
  - Added Enum KnownUefiSignatureTemplateName
  - Enum KnownConfidentialVMEncryptionType has a new value NonPersistedTPM
  - Enum KnownReplicationStatusTypes has a new value UefiSettings
  - Enum KnownSecurityEncryptionTypes has a new value NonPersistedTPM
    
    
## 21.2.0 (2023-08-14)
    
**Features**

  - Added Type Alias DomainNameLabelScopeTypes
  - Added Type Alias NetworkInterfaceAuxiliaryMode
  - Added Type Alias NetworkInterfaceAuxiliarySku
  - Interface CreationData has a new optional parameter elasticSanResourceId
  - Interface Disk has a new optional parameter lastOwnershipUpdateTime
  - Interface VirtualMachineNetworkInterfaceConfiguration has a new optional parameter auxiliaryMode
  - Interface VirtualMachineNetworkInterfaceConfiguration has a new optional parameter auxiliarySku
  - Interface VirtualMachinePublicIPAddressDnsSettingsConfiguration has a new optional parameter domainNameLabelScope
  - Interface VirtualMachineScaleSetNetworkConfiguration has a new optional parameter auxiliaryMode
  - Interface VirtualMachineScaleSetNetworkConfiguration has a new optional parameter auxiliarySku
  - Interface VirtualMachineScaleSetPublicIPAddressConfigurationDnsSettings has a new optional parameter domainNameLabelScope
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration has a new optional parameter auxiliaryMode
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration has a new optional parameter auxiliarySku
  - Interface VirtualMachineScaleSetVM has a new optional parameter timeCreated
  - Added Enum KnownDomainNameLabelScopeTypes
  - Added Enum KnownNetworkInterfaceAuxiliaryMode
  - Added Enum KnownNetworkInterfaceAuxiliarySku
  - Enum KnownDiskCreateOption has a new value CopyFromSanSnapshot
    
    
## 21.1.0 (2023-07-07)
    
**Features**

  - Added Type Alias FileFormat
  - Interface GrantAccessData has a new optional parameter fileFormat
  - Added Enum KnownFileFormat
    
    
## 21.0.0 (2023-05-17)
    
**Features**

  - Added operation DedicatedHosts.listAvailableSizes
  - Added operation VirtualMachineScaleSets.beginReapply
  - Added operation VirtualMachineScaleSets.beginReapplyAndWait
  - Added Interface CommunityGalleryImageIdentifier
  - Added Interface DedicatedHostSizeListResult
  - Added Interface DedicatedHostsListAvailableSizesOptionalParams
  - Added Interface DiskRestorePointAttributes
  - Added Interface RestorePointEncryption
  - Added Interface RunCommandManagedIdentity
  - Added Interface SecurityPostureReference
  - Added Interface VirtualMachineScaleSetsReapplyHeaders
  - Added Interface VirtualMachineScaleSetsReapplyOptionalParams
  - Added Type Alias DedicatedHostsListAvailableSizesResponse
  - Added Type Alias EdgeZoneStorageAccountType
  - Added Type Alias ExpandTypeForListVMs
  - Added Type Alias ExpandTypesForListVMs
  - Added Type Alias RestorePointEncryptionType
  - Interface DedicatedHostUpdate has a new optional parameter sku
  - Interface LinuxVMGuestPatchAutomaticByPlatformSettings has a new optional parameter bypassPlatformSafetyChecksOnUserSchedule
  - Interface RestorePointSourceMetadata has a new optional parameter hyperVGeneration
  - Interface RestorePointSourceVMDataDisk has a new optional parameter writeAcceleratorEnabled
  - Interface RestorePointSourceVmosDisk has a new optional parameter writeAcceleratorEnabled
  - Interface VirtualMachineExtension has a new optional parameter provisionAfterExtensions
  - Interface VirtualMachineRunCommand has a new optional parameter errorBlobManagedIdentity
  - Interface VirtualMachineRunCommand has a new optional parameter outputBlobManagedIdentity
  - Interface VirtualMachineRunCommand has a new optional parameter treatFailureAsDeploymentFailure
  - Interface VirtualMachineRunCommandScriptSource has a new optional parameter scriptUriManagedIdentity
  - Interface VirtualMachineRunCommandUpdate has a new optional parameter errorBlobManagedIdentity
  - Interface VirtualMachineRunCommandUpdate has a new optional parameter outputBlobManagedIdentity
  - Interface VirtualMachineRunCommandUpdate has a new optional parameter treatFailureAsDeploymentFailure
  - Interface VirtualMachineScaleSetsDeallocateOptionalParams has a new optional parameter hibernate
  - Interface VirtualMachineScaleSetUpdate has a new optional parameter priorityMixPolicy
  - Interface VirtualMachineScaleSetUpdate has a new optional parameter spotRestorePolicy
  - Interface VirtualMachineScaleSetVMExtension has a new optional parameter location
  - Interface VirtualMachineScaleSetVMExtension has a new optional parameter provisionAfterExtensions
  - Interface VirtualMachineScaleSetVMInstanceView has a new optional parameter computerName
  - Interface VirtualMachineScaleSetVMInstanceView has a new optional parameter hyperVGeneration
  - Interface VirtualMachineScaleSetVMInstanceView has a new optional parameter osName
  - Interface VirtualMachineScaleSetVMInstanceView has a new optional parameter osVersion
  - Interface VirtualMachineScaleSetVMProfile has a new optional parameter securityPostureReference
  - Interface VirtualMachinesListAllOptionalParams has a new optional parameter expand
  - Interface VirtualMachinesListOptionalParams has a new optional parameter expand
  - Interface WindowsVMGuestPatchAutomaticByPlatformSettings has a new optional parameter bypassPlatformSafetyChecksOnUserSchedule
  - Added Enum KnownEdgeZoneStorageAccountType
  - Added Enum KnownExpandTypeForListVMs
  - Added Enum KnownExpandTypesForListVMs
  - Added Enum KnownRestorePointEncryptionType

**Breaking Changes**

  - Type of parameter identifier of interface CommunityGalleryImage is changed from GalleryImageIdentifier to CommunityGalleryImageIdentifier
  - Type of parameter storageAccountType of interface GalleryTargetExtendedLocation is changed from StorageAccountType to EdgeZoneStorageAccountType
  - Type of parameter diskRestorePoint of interface RestorePointSourceVMDataDisk is changed from ApiEntityReference to DiskRestorePointAttributes
  - Type of parameter diskRestorePoint of interface RestorePointSourceVmosDisk is changed from ApiEntityReference to DiskRestorePointAttributes
    
    
## 20.0.0 (2023-01-05)
    
**Features**

  - Added Interface AlternativeOption
  - Added Interface GalleryApplicationCustomAction
  - Added Interface GalleryApplicationCustomActionParameter
  - Added Interface GalleryApplicationVersionSafetyProfile
  - Added Interface GalleryArtifactSafetyProfileBase
  - Added Interface GalleryArtifactVersionFullSource
  - Added Interface GalleryDiskImageSource
  - Added Interface GalleryImageVersionSafetyProfile
  - Added Interface ImageDeprecationStatus
  - Added Interface LatestGalleryImageVersion
  - Added Interface LoadBalancerFrontendIpConfiguration
  - Added Interface LoadBalancerFrontendIpConfigurationProperties
  - Added Interface OSImageNotificationProfile
  - Added Interface OSProfileProvisioningData
  - Added Interface PolicyViolation
  - Added Interface ServiceArtifactReference
  - Added Type Alias AlternativeType
  - Added Type Alias GalleryApplicationCustomActionParameterType
  - Added Type Alias ImageState
  - Added Type Alias PolicyViolationCategory
  - Interface CloudService has a new optional parameter zones
  - Interface GalleryApplication has a new optional parameter customActions
  - Interface GalleryApplicationUpdate has a new optional parameter customActions
  - Interface GalleryApplicationVersion has a new optional parameter safetyProfile
  - Interface GalleryApplicationVersionPublishingProfile has a new optional parameter customActions
  - Interface GalleryApplicationVersionUpdate has a new optional parameter safetyProfile
  - Interface GalleryImageVersion has a new optional parameter safetyProfile
  - Interface GalleryImageVersionUpdate has a new optional parameter safetyProfile
  - Interface RestorePointSourceMetadata has a new optional parameter userData
  - Interface RollingUpgradePolicy has a new optional parameter maxSurge
  - Interface RollingUpgradePolicy has a new optional parameter rollbackFailedInstancesOnPolicyBreach
  - Interface ScheduledEventsProfile has a new optional parameter osImageNotificationProfile
  - Interface SharedGalleryImage has a new optional parameter eula
  - Interface SharedGalleryImage has a new optional parameter privacyStatementUri
  - Interface TargetRegion has a new optional parameter excludeFromLatest
  - Interface VirtualMachineImage has a new optional parameter imageDeprecationStatus
  - Interface VirtualMachineReimageParameters has a new optional parameter exactVersion
  - Interface VirtualMachineReimageParameters has a new optional parameter osProfile
  - Interface VirtualMachineScaleSet has a new optional parameter constrainedMaximumCapacity
  - Interface VirtualMachineScaleSetOSProfile has a new optional parameter requireGuestProvisionSignal
  - Interface VirtualMachineScaleSetVMProfile has a new optional parameter serviceArtifactReference
  - Added Enum KnownAlternativeType
  - Added Enum KnownImageState
  - Added Enum KnownPolicyViolationCategory
  - Added function getContinuationToken

**Breaking Changes**

  - Interface AvailabilitySetsListBySubscriptionNextOptionalParams no longer has parameter expand
  - Interface CapacityReservationGroupsListByResourceGroupNextOptionalParams no longer has parameter expand
  - Interface CapacityReservationGroupsListBySubscriptionNextOptionalParams no longer has parameter expand
  - Interface CloudServiceRoleInstancesListNextOptionalParams no longer has parameter expand
  - Interface GalleryArtifactVersionSource no longer has parameter uri
  - Interface LoadBalancerConfigurationProperties no longer has parameter frontendIPConfigurations
  - Interface ResourceSkusListNextOptionalParams no longer has parameter filter
  - Interface ResourceSkusListNextOptionalParams no longer has parameter includeExtendedLocations
  - Interface SharedGalleriesListNextOptionalParams no longer has parameter sharedTo
  - Interface SharedGalleryImagesListNextOptionalParams no longer has parameter sharedTo
  - Interface SharedGalleryImageVersionsListNextOptionalParams no longer has parameter sharedTo
  - Interface VirtualMachineRunCommandsListByVirtualMachineNextOptionalParams no longer has parameter expand
  - Interface VirtualMachineScaleSetVMRunCommandsListNextOptionalParams no longer has parameter expand
  - Interface VirtualMachineScaleSetVMsListNextOptionalParams no longer has parameter expand
  - Interface VirtualMachineScaleSetVMsListNextOptionalParams no longer has parameter filter
  - Interface VirtualMachineScaleSetVMsListNextOptionalParams no longer has parameter select
  - Interface VirtualMachinesListAllNextOptionalParams no longer has parameter filter
  - Interface VirtualMachinesListAllNextOptionalParams no longer has parameter statusOnly
  - Interface VirtualMachinesListNextOptionalParams no longer has parameter filter
  - Interface LoadBalancerConfigurationProperties has a new required parameter frontendIpConfigurations
  - Type of parameter source of interface GalleryDiskImage is changed from GalleryArtifactVersionSource to GalleryDiskImageSource
  - Type of parameter source of interface GalleryImageVersionStorageProfile is changed from GalleryArtifactVersionSource to GalleryArtifactVersionFullSource
    
    
## 19.2.0 (2022-09-21)
    
**Features**

  - Added Interface PriorityMixPolicy
  - Added Type Alias DiskControllerTypes
  - Interface CapacityReservation has a new optional parameter platformFaultDomainCount
  - Interface CapacityReservationUpdate has a new optional parameter platformFaultDomainCount
  - Interface CapacityReservationUtilization has a new optional parameter currentCapacity
  - Interface CreationData has a new optional parameter performancePlus
  - Interface Disk has a new optional parameter burstingEnabledTime
  - Interface Disk has a new optional parameter optimizedForFrequentAttach
  - Interface DiskUpdate has a new optional parameter optimizedForFrequentAttach
  - Interface LinuxConfiguration has a new optional parameter enableVMAgentPlatformUpdates
  - Interface Snapshot has a new optional parameter incrementalSnapshotFamilyId
  - Interface StorageProfile has a new optional parameter diskControllerType
  - Interface SupportedCapabilities has a new optional parameter diskControllerTypes
  - Interface VirtualMachineNetworkInterfaceConfiguration has a new optional parameter disableTcpStateTracking
  - Interface VirtualMachineScaleSet has a new optional parameter priorityMixPolicy
  - Interface VirtualMachineScaleSetNetworkConfiguration has a new optional parameter disableTcpStateTracking
  - Interface VirtualMachineScaleSetStorageProfile has a new optional parameter diskControllerType
  - Interface VirtualMachineScaleSetUpdateNetworkConfiguration has a new optional parameter disableTcpStateTracking
  - Interface VirtualMachineScaleSetUpdateStorageProfile has a new optional parameter diskControllerType
  - Interface VirtualMachineScaleSetUpdateVMProfile has a new optional parameter hardwareProfile
  - Interface WindowsConfiguration has a new optional parameter enableVMAgentPlatformUpdates
  - Added Enum KnownDiskControllerTypes
    
    
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

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
