# Release History
    
## 1.0.0-beta.3 (2025-02-06)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added operation Workspaces.checkNameAvailability
  - Added operation Workspaces.listKeys
  - Added operation Workspaces.regenerateKeys
  - Added Interface ApiKeys
  - Added Interface AzureQuantumManagementAPIOptionalParams
  - Added Interface CheckNameAvailabilityRequest
  - Added Interface CheckNameAvailabilityResponse
  - Added Interface ManagedServiceIdentity
  - Added Interface OperationListResult
  - Added Interface QuantumWorkspaceListResult
  - Added Interface QuantumWorkspaceTagsUpdate
  - Added Interface UserAssignedIdentity
  - Added Interface WorkspacesCheckNameAvailabilityOptionalParams
  - Added Interface WorkspacesCreateOrUpdateHeaders
  - Added Interface WorkspacesDeleteHeaders
  - Added Interface WorkspacesListKeysOptionalParams
  - Added Interface WorkspacesRegenerateKeysOptionalParams
  - Added Class AzureQuantumManagementAPI
  - Added Type Alias ActionType
  - Added Type Alias CheckNameAvailabilityReason
  - Added Type Alias ManagedServiceIdentityType
  - Added Type Alias Origin
  - Added Type Alias ProviderStatus
  - Added Type Alias WorkspaceProvisioningStatus
  - Added Type Alias WorkspacesCheckNameAvailabilityResponse
  - Added Type Alias WorkspacesDeleteResponse
  - Added Type Alias WorkspacesListKeysResponse
  - Interface Operation has a new optional parameter actionType
  - Interface Operation has a new optional parameter origin
  - Added Enum KnownActionType
  - Added Enum KnownCheckNameAvailabilityReason
  - Added Enum KnownManagedServiceIdentityType
  - Added Enum KnownOrigin
  - Added Enum KnownProviderStatus
  - Added Enum KnownWorkspaceProvisioningStatus

### Breaking Changes

  - Removed operation group Workspace
  - Operation Workspaces.updateTags has a new signature
  - Deleted Class AzureQuantumManagementClient
  - Parameter value of interface OfferingsListResult is now required
  - Type of parameter provisioningState of interface Provider is changed from Status to ProviderStatus
  - Type of parameter identity of interface QuantumWorkspace is changed from QuantumWorkspaceIdentity to ManagedServiceIdentity
  - Type of parameter provisioningState of interface WorkspaceResourceProperties is changed from ProvisioningStatus to WorkspaceProvisioningStatus
  - Removed Enum KnownProvisioningStatus
  - Removed Enum KnownResourceIdentityType
  - Removed Enum KnownStatus
    
    
## 1.0.0-beta.2 (2024-03-12)
    
### Features Added

  - Added operation Workspace.listKeys
  - Added operation Workspace.regenerateKeys
  - Added Interface ApiKey
  - Added Interface APIKeys
  - Added Interface ListKeysResult
  - Added Interface WorkspaceListKeysOptionalParams
  - Added Interface WorkspaceRegenerateKeysOptionalParams
  - Added Interface WorkspaceResourceProperties
  - Added Type Alias KeyType_2
  - Added Type Alias WorkspaceListKeysResponse
  - Interface QuantumWorkspace has a new optional parameter properties
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownKeyType

### Breaking Changes

  - Interface QuantumWorkspace no longer has parameter endpointUri
  - Interface QuantumWorkspace no longer has parameter providers
  - Interface QuantumWorkspace no longer has parameter provisioningState
  - Interface QuantumWorkspace no longer has parameter storageAccount
  - Interface QuantumWorkspace no longer has parameter systemData
  - Interface QuantumWorkspace no longer has parameter usable
    
    
## 1.0.0-beta.1 (2023-07-10)

The package of @azure/arm-quantum is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart ).
