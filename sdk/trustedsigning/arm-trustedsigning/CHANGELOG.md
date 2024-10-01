# Release History
    
## 1.0.0-beta.2 (2024-10-01)
Compared with version 1.0.0-beta.1
    
### Features Added

  - Added operation CertificateProfiles.beginCreate
  - Added operation CertificateProfiles.beginCreateAndWait
  - Added operation CertificateProfiles.beginDelete
  - Added operation CertificateProfiles.beginDeleteAndWait
  - Added operation CodeSigningAccounts.beginCreate
  - Added operation CodeSigningAccounts.beginCreateAndWait
  - Added operation CodeSigningAccounts.beginDelete
  - Added operation CodeSigningAccounts.beginDeleteAndWait
  - Added operation CodeSigningAccounts.beginUpdate
  - Added operation CodeSigningAccounts.beginUpdateAndWait
  - Added Interface AccountSkuPatch
  - Added Interface CertificateProfileListResult
  - Added Interface CertificateProfilesCreateHeaders
  - Added Interface CertificateProfilesDeleteHeaders
  - Added Interface CertificateProfilesListByCodeSigningAccountNextOptionalParams
  - Added Interface CodeSigningAccountListResult
  - Added Interface CodeSigningAccountsCreateHeaders
  - Added Interface CodeSigningAccountsDeleteHeaders
  - Added Interface CodeSigningAccountsListByResourceGroupNextOptionalParams
  - Added Interface CodeSigningAccountsListBySubscriptionNextOptionalParams
  - Added Interface CodeSigningAccountsUpdateHeaders
  - Added Interface CodeSigningManagementClientOptionalParams
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface OperationListResult
  - Added Interface OperationsListNextOptionalParams
  - Added Class CodeSigningManagementClient
  - Added Type Alias CertificateProfilesCreateResponse
  - Added Type Alias CertificateProfilesDeleteResponse
  - Added Type Alias CertificateProfilesGetResponse
  - Added Type Alias CertificateProfilesListByCodeSigningAccountNextResponse
  - Added Type Alias CertificateProfilesListByCodeSigningAccountResponse
  - Added Type Alias CodeSigningAccountsCheckNameAvailabilityResponse
  - Added Type Alias CodeSigningAccountsCreateResponse
  - Added Type Alias CodeSigningAccountsDeleteResponse
  - Added Type Alias CodeSigningAccountsGetResponse
  - Added Type Alias CodeSigningAccountsListByResourceGroupNextResponse
  - Added Type Alias CodeSigningAccountsListByResourceGroupResponse
  - Added Type Alias CodeSigningAccountsListBySubscriptionNextResponse
  - Added Type Alias CodeSigningAccountsListBySubscriptionResponse
  - Added Type Alias CodeSigningAccountsUpdateResponse
  - Added Type Alias OperationsListNextResponse
  - Added Type Alias OperationsListResponse
  - Interface Certificate has a new optional parameter effectiveAt
  - Interface Certificate has a new optional parameter enhancedKeyUsage
  - Interface Certificate has a new optional parameter failureReason
  - Interface Certificate has a new optional parameter reason
  - Interface Certificate has a new optional parameter remarks
  - Interface Certificate has a new optional parameter requestedAt
  - Interface Certificate has a new optional parameter statusRevocationStatus
  - Interface CertificateProfile has a new optional parameter certificates
  - Interface CertificateProfile has a new optional parameter identityValidationId
  - Interface CertificateProfile has a new optional parameter includeCity
  - Interface CertificateProfile has a new optional parameter includeCountry
  - Interface CertificateProfile has a new optional parameter includePostalCode
  - Interface CertificateProfile has a new optional parameter includeState
  - Interface CertificateProfile has a new optional parameter includeStreetAddress
  - Interface CertificateProfile has a new optional parameter profileType
  - Interface CertificateProfile has a new optional parameter provisioningState
  - Interface CertificateProfile has a new optional parameter status
  - Interface CertificateProfilesCreateOptionalParams has a new optional parameter resumeFrom
  - Interface CertificateProfilesDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface CodeSigningAccount has a new optional parameter accountUri
  - Interface CodeSigningAccount has a new optional parameter provisioningState
  - Interface CodeSigningAccount has a new optional parameter sku
  - Interface CodeSigningAccountPatch has a new optional parameter sku
  - Interface CodeSigningAccountsCreateOptionalParams has a new optional parameter resumeFrom
  - Interface CodeSigningAccountsDeleteOptionalParams has a new optional parameter resumeFrom
  - Interface CodeSigningAccountsUpdateOptionalParams has a new optional parameter resumeFrom
  - Added function getContinuationToken

### Breaking Changes

  - Removed operation CertificateProfilesOperations.create
  - Removed operation CertificateProfilesOperations.delete
  - Removed operation CodeSigningAccountsOperations.create
  - Removed operation CodeSigningAccountsOperations.delete
  - Removed operation CodeSigningAccountsOperations.update
  - Deleted Class CodeSigningClient
  - Interface Certificate no longer has parameter revocation
  - Interface CertificateProfile no longer has parameter properties
  - Interface CodeSigningAccount no longer has parameter properties
  - Interface CodeSigningAccountPatch no longer has parameter properties
  - Type of parameter tags of interface CodeSigningAccountPatch is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Type of parameter tags of interface TrackedResource is changed from Record<string, string> to {
        [propertyName: string]: string;
    }
  - Removed function restorePoller
    
    
## 1.0.0-beta.1 (2024-09-29)

### Features Added

Initial release of the Azure TrustedSigning package
