# Release History
    
## 1.0.0-beta.3 (2025-04-21)
Compared with version 1.0.0-beta.2
    
### Features Added

  - Added Interface AccountSkuPatch
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Interface Certificate has a new optional parameter enhancedKeyUsage
  - Added Enum KnownVersions

### Breaking Changes

  - Interface CertificateProfileProperties no longer has parameter city
  - Interface CertificateProfileProperties no longer has parameter commonName
  - Interface CertificateProfileProperties no longer has parameter country
  - Interface CertificateProfileProperties no longer has parameter enhancedKeyUsage
  - Interface CertificateProfileProperties no longer has parameter organization
  - Interface CertificateProfileProperties no longer has parameter organizationUnit
  - Interface CertificateProfileProperties no longer has parameter postalCode
  - Interface CertificateProfileProperties no longer has parameter state
  - Interface CertificateProfileProperties no longer has parameter streetAddress
  - Parameter identityValidationId of interface CertificateProfileProperties is now required
  - Type of parameter sku of interface CodeSigningAccountPatchProperties is changed from AccountSku to AccountSkuPatch
    
    
## 1.0.0-beta.2 (2024-11-04)

### Bugs Fixed

- Fix missing package information issue in user agent

## 1.0.0-beta.1 (2024-09-29)

### Features Added

Initial release of the Azure TrustedSigning package
