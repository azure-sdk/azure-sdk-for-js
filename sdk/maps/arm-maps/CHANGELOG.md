# Release History
    
## 4.0.0-beta.1 (2024-09-10)
Compared with version 3.1.0
    
### Features Added

  - Added Interface EncryptionCustomerManagedKeyEncryption
  - Added Interface EncryptionCustomerManagedKeyEncryptionKeyIdentity
  - Added Interface LocationsItem
  - Added Interface Operation
  - Added Interface OperationListResult
  - Added Type Alias ActionType
  - Added Type Alias EncryptionCustomerManagedKeyEncryptionKeyIdentityType
  - Added Type Alias Origin
  - Interface CreatorProperties has a new optional parameter consumedStorageUnitSizeInBytes
  - Interface CreatorProperties has a new optional parameter totalStorageUnitSizeInBytes
  - Interface CreatorUpdateParameters has a new optional parameter consumedStorageUnitSizeInBytes
  - Interface CreatorUpdateParameters has a new optional parameter totalStorageUnitSizeInBytes
  - Interface MapsAccountProperties has a new optional parameter locations
  - Interface MapsAccountUpdateParameters has a new optional parameter locations
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownActionType
  - Added Enum KnownEncryptionCustomerManagedKeyEncryptionKeyIdentityType
  - Added Enum KnownOrigin

### Breaking Changes

  - Removed operation group MapsOperations
  - Removed operation Maps.listSubscriptionOperations
  - Interface Creator no longer has parameter systemData
  - Interface MapsAccount no longer has parameter systemData
  - Type of parameter customerManagedKeyEncryption of interface Encryption is changed from CustomerManagedKeyEncryption to EncryptionCustomerManagedKeyEncryption
  - Type of parameter userAssignedIdentities of interface ManagedServiceIdentity is changed from {
        [propertyName: string]: UserAssignedIdentity;
    } to {
        [propertyName: string]: UserAssignedIdentity | null;
    }
  - Removed Enum KnownIdentityType
  - Enum KnownKind no longer has value Gen1
  - Enum KnownName no longer has value S0
  - Enum KnownName no longer has value S1
    
## 3.1.0 (2023-08-08)

### Features Added

- Added operation Accounts.listSas
- Added Interface AccountSasParameters
- Added Interface AccountsListSasOptionalParams
- Added Interface CorsRule
- Added Interface CorsRules
- Added Interface Creator
- Added Interface CustomerManagedKeyEncryption
- Added Interface CustomerManagedKeyEncryptionKeyIdentity
- Added Interface Encryption
- Added Interface LinkedResource
- Added Interface ManagedServiceIdentity
- Added Interface MapsAccount
- Added Interface MapsAccountSasToken
- Added Interface TrackedResource
- Added Interface UserAssignedIdentity
- Added Type Alias AccountsListSasResponse
- Added Type Alias IdentityType
- Added Type Alias InfrastructureEncryption
- Added Type Alias ManagedServiceIdentityType
- Added Type Alias SigningKey
- Interface MapsAccountProperties has a new optional parameter cors
- Interface MapsAccountProperties has a new optional parameter encryption
- Interface MapsAccountProperties has a new optional parameter linkedResources
- Interface MapsAccountUpdateParameters has a new optional parameter cors
- Interface MapsAccountUpdateParameters has a new optional parameter encryption
- Interface MapsAccountUpdateParameters has a new optional parameter identity
- Interface MapsAccountUpdateParameters has a new optional parameter linkedResources
- Interface MetricSpecification has a new optional parameter internalMetricName
- Interface MetricSpecification has a new optional parameter lockAggregationType
- Interface MetricSpecification has a new optional parameter sourceMdmAccount
- Interface MetricSpecification has a new optional parameter sourceMdmNamespace
- Interface MetricSpecification has a new optional parameter supportedAggregationTypes
- Added Enum KnownIdentityType
- Added Enum KnownInfrastructureEncryption
- Added Enum KnownManagedServiceIdentityType
- Added Enum KnownSigningKey
- Added function getContinuationToken
- Class AzureMapsManagementClient has a new signature

## 3.0.0 (2022-01-19)

The package of @azure/arm-maps is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
