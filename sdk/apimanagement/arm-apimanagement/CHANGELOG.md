# Release History
    
## 8.1.0-beta.1 (2022-05-24)
    
**Features**

  - Added operation group Authorization
  - Added operation group AuthorizationAccessPolicy
  - Added operation group AuthorizationLoginLinks
  - Added operation group AuthorizationProvider
  - Added operation group GlobalSchema
  - Added operation group PolicyFragment
  - Added operation group PortalConfig
  - Added Interface AuthorizationAccessPolicyCollection
  - Added Interface AuthorizationAccessPolicyCreateOrUpdateHeaders
  - Added Interface AuthorizationAccessPolicyCreateOrUpdateOptionalParams
  - Added Interface AuthorizationAccessPolicyDeleteOptionalParams
  - Added Interface AuthorizationAccessPolicyGetHeaders
  - Added Interface AuthorizationAccessPolicyGetOptionalParams
  - Added Interface AuthorizationAccessPolicyListByAuthorizationNextOptionalParams
  - Added Interface AuthorizationAccessPolicyListByAuthorizationOptionalParams
  - Added Interface AuthorizationCollection
  - Added Interface AuthorizationCreateOrUpdateHeaders
  - Added Interface AuthorizationCreateOrUpdateOptionalParams
  - Added Interface AuthorizationDeleteOptionalParams
  - Added Interface AuthorizationError
  - Added Interface AuthorizationGetHeaders
  - Added Interface AuthorizationGetOptionalParams
  - Added Interface AuthorizationListByAuthorizationProviderNextOptionalParams
  - Added Interface AuthorizationListByAuthorizationProviderOptionalParams
  - Added Interface AuthorizationLoginLinksPostHeaders
  - Added Interface AuthorizationLoginLinksPostOptionalParams
  - Added Interface AuthorizationLoginRequestContract
  - Added Interface AuthorizationLoginResponseContract
  - Added Interface AuthorizationProviderCollection
  - Added Interface AuthorizationProviderCreateOrUpdateHeaders
  - Added Interface AuthorizationProviderCreateOrUpdateOptionalParams
  - Added Interface AuthorizationProviderDeleteOptionalParams
  - Added Interface AuthorizationProviderGetHeaders
  - Added Interface AuthorizationProviderGetOptionalParams
  - Added Interface AuthorizationProviderListByServiceNextOptionalParams
  - Added Interface AuthorizationProviderListByServiceOptionalParams
  - Added Interface AuthorizationProviderOAuth2GrantTypes
  - Added Interface AuthorizationProviderOAuth2Settings
  - Added Interface GlobalSchemaCollection
  - Added Interface GlobalSchemaCreateOrUpdateHeaders
  - Added Interface GlobalSchemaCreateOrUpdateOptionalParams
  - Added Interface GlobalSchemaDeleteOptionalParams
  - Added Interface GlobalSchemaGetEntityTagHeaders
  - Added Interface GlobalSchemaGetEntityTagOptionalParams
  - Added Interface GlobalSchemaGetHeaders
  - Added Interface GlobalSchemaGetOptionalParams
  - Added Interface GlobalSchemaListByServiceNextOptionalParams
  - Added Interface GlobalSchemaListByServiceOptionalParams
  - Added Interface PolicyFragmentCollection
  - Added Interface PolicyFragmentCreateOrUpdateHeaders
  - Added Interface PolicyFragmentCreateOrUpdateOptionalParams
  - Added Interface PolicyFragmentDeleteOptionalParams
  - Added Interface PolicyFragmentGetEntityTagHeaders
  - Added Interface PolicyFragmentGetEntityTagOptionalParams
  - Added Interface PolicyFragmentGetHeaders
  - Added Interface PolicyFragmentGetOptionalParams
  - Added Interface PolicyFragmentListByServiceOptionalParams
  - Added Interface PolicyFragmentListReferencesOptionalParams
  - Added Interface PortalConfigCollection
  - Added Interface PortalConfigCorsProperties
  - Added Interface PortalConfigCreateOrUpdateOptionalParams
  - Added Interface PortalConfigCspProperties
  - Added Interface PortalConfigDelegationProperties
  - Added Interface PortalConfigGetEntityTagHeaders
  - Added Interface PortalConfigGetEntityTagOptionalParams
  - Added Interface PortalConfigGetHeaders
  - Added Interface PortalConfigGetOptionalParams
  - Added Interface PortalConfigListByServiceOptionalParams
  - Added Interface PortalConfigPropertiesSignin
  - Added Interface PortalConfigPropertiesSignup
  - Added Interface PortalConfigTermsOfServiceProperties
  - Added Interface PortalConfigUpdateOptionalParams
  - Added Interface ResourceCollection
  - Added Type Alias AuthorizationAccessPolicyContract
  - Added Type Alias AuthorizationAccessPolicyCreateOrUpdateResponse
  - Added Type Alias AuthorizationAccessPolicyGetResponse
  - Added Type Alias AuthorizationAccessPolicyListByAuthorizationNextResponse
  - Added Type Alias AuthorizationAccessPolicyListByAuthorizationResponse
  - Added Type Alias AuthorizationContract
  - Added Type Alias AuthorizationCreateOrUpdateResponse
  - Added Type Alias AuthorizationGetResponse
  - Added Type Alias AuthorizationListByAuthorizationProviderNextResponse
  - Added Type Alias AuthorizationListByAuthorizationProviderResponse
  - Added Type Alias AuthorizationLoginLinksPostResponse
  - Added Type Alias AuthorizationProviderContract
  - Added Type Alias AuthorizationProviderCreateOrUpdateResponse
  - Added Type Alias AuthorizationProviderGetResponse
  - Added Type Alias AuthorizationProviderListByServiceNextResponse
  - Added Type Alias AuthorizationProviderListByServiceResponse
  - Added Type Alias AuthorizationType
  - Added Type Alias GlobalSchemaContract
  - Added Type Alias GlobalSchemaCreateOrUpdateResponse
  - Added Type Alias GlobalSchemaGetEntityTagResponse
  - Added Type Alias GlobalSchemaGetResponse
  - Added Type Alias GlobalSchemaListByServiceNextResponse
  - Added Type Alias GlobalSchemaListByServiceResponse
  - Added Type Alias OAuth2GrantType
  - Added Type Alias PolicyFragmentContentFormat
  - Added Type Alias PolicyFragmentContract
  - Added Type Alias PolicyFragmentCreateOrUpdateResponse
  - Added Type Alias PolicyFragmentGetEntityTagResponse
  - Added Type Alias PolicyFragmentGetResponse
  - Added Type Alias PolicyFragmentListByServiceResponse
  - Added Type Alias PolicyFragmentListReferencesResponse
  - Added Type Alias PortalConfigContract
  - Added Type Alias PortalConfigCreateOrUpdateResponse
  - Added Type Alias PortalConfigGetEntityTagResponse
  - Added Type Alias PortalConfigGetResponse
  - Added Type Alias PortalConfigListByServiceResponse
  - Added Type Alias PortalConfigUpdateResponse
  - Added Type Alias PortalSettingsCspMode
  - Added Type Alias ResourceCollectionValueItem
  - Added Type Alias SchemaType
  - Interface ContentTypeCreateOrUpdateOptionalParams has a new optional parameter parameters
  - Interface IdentityProviderBaseParameters has a new optional parameter clientLibrary
  - Interface IdentityProviderUpdateParameters has a new optional parameter clientLibrary
  - Class ApiManagementClient has a new parameter authorization
  - Class ApiManagementClient has a new parameter authorizationAccessPolicy
  - Class ApiManagementClient has a new parameter authorizationLoginLinks
  - Class ApiManagementClient has a new parameter authorizationProvider
  - Class ApiManagementClient has a new parameter globalSchema
  - Class ApiManagementClient has a new parameter policyFragment
  - Class ApiManagementClient has a new parameter portalConfig
  - Type Alias IdentityProviderContract has a new parameter clientLibrary
  - Type Alias IdentityProviderCreateContract has a new parameter clientLibrary
  - Added Enum KnownAuthorizationType
  - Added Enum KnownOAuth2GrantType
  - Added Enum KnownPolicyFragmentContentFormat
  - Added Enum KnownPortalSettingsCspMode
  - Added Enum KnownSchemaType
    
## 8.0.1 (2022-04-06)

**features**

  - Bug fix

## 8.0.0 (2021-12-13)

The package of @azure/arm-apimanagement is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
