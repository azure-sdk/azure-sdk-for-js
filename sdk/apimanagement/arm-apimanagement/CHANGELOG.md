# Release History
    
## 9.0.0 (2022-10-31)
    
**Features**

  - Added operation group Authorization
  - Added operation group AuthorizationAccessPolicy
  - Added operation group AuthorizationLoginLinks
  - Added operation group AuthorizationProvider
  - Added operation group GlobalSchema
  - Added operation group GraphQLApiResolver
  - Added operation group GraphQLApiResolverPolicy
  - Added operation group PolicyFragment
  - Added operation group PortalConfig
  - Added operation ApiManagementService.beginMigrateToStv2
  - Added operation ApiManagementService.beginMigrateToStv2AndWait
  - Added Interface ApiManagementServiceMigrateToStv2OptionalParams
  - Added Interface AuthorizationAccessPolicyCollection
  - Added Interface AuthorizationAccessPolicyContract
  - Added Interface AuthorizationAccessPolicyCreateOrUpdateHeaders
  - Added Interface AuthorizationAccessPolicyCreateOrUpdateOptionalParams
  - Added Interface AuthorizationAccessPolicyDeleteOptionalParams
  - Added Interface AuthorizationAccessPolicyGetHeaders
  - Added Interface AuthorizationAccessPolicyGetOptionalParams
  - Added Interface AuthorizationAccessPolicyListByAuthorizationNextOptionalParams
  - Added Interface AuthorizationAccessPolicyListByAuthorizationOptionalParams
  - Added Interface AuthorizationCollection
  - Added Interface AuthorizationContract
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
  - Added Interface AuthorizationProviderContract
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
  - Added Interface GlobalSchemaContract
  - Added Interface GlobalSchemaCreateOrUpdateHeaders
  - Added Interface GlobalSchemaCreateOrUpdateOptionalParams
  - Added Interface GlobalSchemaDeleteOptionalParams
  - Added Interface GlobalSchemaGetEntityTagHeaders
  - Added Interface GlobalSchemaGetEntityTagOptionalParams
  - Added Interface GlobalSchemaGetHeaders
  - Added Interface GlobalSchemaGetOptionalParams
  - Added Interface GlobalSchemaListByServiceNextOptionalParams
  - Added Interface GlobalSchemaListByServiceOptionalParams
  - Added Interface GraphQLApiResolverCreateOrUpdateHeaders
  - Added Interface GraphQLApiResolverCreateOrUpdateOptionalParams
  - Added Interface GraphQLApiResolverDeleteOptionalParams
  - Added Interface GraphQLApiResolverGetEntityTagHeaders
  - Added Interface GraphQLApiResolverGetEntityTagOptionalParams
  - Added Interface GraphQLApiResolverGetHeaders
  - Added Interface GraphQLApiResolverGetOptionalParams
  - Added Interface GraphQLApiResolverListByApiNextOptionalParams
  - Added Interface GraphQLApiResolverListByApiOptionalParams
  - Added Interface GraphQLApiResolverPolicyCreateOrUpdateHeaders
  - Added Interface GraphQLApiResolverPolicyCreateOrUpdateOptionalParams
  - Added Interface GraphQLApiResolverPolicyDeleteOptionalParams
  - Added Interface GraphQLApiResolverPolicyGetEntityTagHeaders
  - Added Interface GraphQLApiResolverPolicyGetEntityTagOptionalParams
  - Added Interface GraphQLApiResolverPolicyGetHeaders
  - Added Interface GraphQLApiResolverPolicyGetOptionalParams
  - Added Interface GraphQLApiResolverPolicyListByResolverNextOptionalParams
  - Added Interface GraphQLApiResolverPolicyListByResolverOptionalParams
  - Added Interface GraphQLApiResolverUpdateHeaders
  - Added Interface GraphQLApiResolverUpdateOptionalParams
  - Added Interface PolicyFragmentCollection
  - Added Interface PolicyFragmentContract
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
  - Added Interface PortalConfigContract
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
  - Added Interface ProxyResource
  - Added Interface ResolverCollection
  - Added Interface ResolverContract
  - Added Interface ResolverResultContract
  - Added Interface ResolverResultLogItemContract
  - Added Interface ResolverUpdateContract
  - Added Interface ResourceCollection
  - Added Interface ResourceCollectionValueItem
  - Added Type Alias ApiManagementServiceMigrateToStv2Response
  - Added Type Alias AsyncResolverStatus
  - Added Type Alias AuthorizationAccessPolicyCreateOrUpdateResponse
  - Added Type Alias AuthorizationAccessPolicyGetResponse
  - Added Type Alias AuthorizationAccessPolicyListByAuthorizationNextResponse
  - Added Type Alias AuthorizationAccessPolicyListByAuthorizationResponse
  - Added Type Alias AuthorizationCreateOrUpdateResponse
  - Added Type Alias AuthorizationGetResponse
  - Added Type Alias AuthorizationListByAuthorizationProviderNextResponse
  - Added Type Alias AuthorizationListByAuthorizationProviderResponse
  - Added Type Alias AuthorizationLoginLinksPostResponse
  - Added Type Alias AuthorizationProviderCreateOrUpdateResponse
  - Added Type Alias AuthorizationProviderGetResponse
  - Added Type Alias AuthorizationProviderListByServiceNextResponse
  - Added Type Alias AuthorizationProviderListByServiceResponse
  - Added Type Alias AuthorizationType
  - Added Type Alias GlobalSchemaCreateOrUpdateResponse
  - Added Type Alias GlobalSchemaGetEntityTagResponse
  - Added Type Alias GlobalSchemaGetResponse
  - Added Type Alias GlobalSchemaListByServiceNextResponse
  - Added Type Alias GlobalSchemaListByServiceResponse
  - Added Type Alias GraphQLApiResolverCreateOrUpdateResponse
  - Added Type Alias GraphQLApiResolverGetEntityTagResponse
  - Added Type Alias GraphQLApiResolverGetResponse
  - Added Type Alias GraphQLApiResolverListByApiNextResponse
  - Added Type Alias GraphQLApiResolverListByApiResponse
  - Added Type Alias GraphQLApiResolverPolicyCreateOrUpdateResponse
  - Added Type Alias GraphQLApiResolverPolicyGetEntityTagResponse
  - Added Type Alias GraphQLApiResolverPolicyGetResponse
  - Added Type Alias GraphQLApiResolverPolicyListByResolverNextResponse
  - Added Type Alias GraphQLApiResolverPolicyListByResolverResponse
  - Added Type Alias GraphQLApiResolverUpdateResponse
  - Added Type Alias NatGatewayState
  - Added Type Alias OAuth2GrantType
  - Added Type Alias PolicyFragmentContentFormat
  - Added Type Alias PolicyFragmentCreateOrUpdateResponse
  - Added Type Alias PolicyFragmentGetEntityTagResponse
  - Added Type Alias PolicyFragmentGetResponse
  - Added Type Alias PolicyFragmentListByServiceResponse
  - Added Type Alias PolicyFragmentListReferencesResponse
  - Added Type Alias PortalConfigCreateOrUpdateResponse
  - Added Type Alias PortalConfigGetEntityTagResponse
  - Added Type Alias PortalConfigGetResponse
  - Added Type Alias PortalConfigListByServiceResponse
  - Added Type Alias PortalConfigUpdateResponse
  - Added Type Alias PortalSettingsCspMode
  - Added Type Alias SchemaType
  - Added Type Alias TranslateRequiredQueryParametersConduct
  - Interface AdditionalLocation has a new optional parameter natGatewayState
  - Interface AdditionalLocation has a new optional parameter outboundPublicIPAddresses
  - Interface ApiCreateOrUpdateParameter has a new optional parameter translateRequiredQueryParametersConduct
  - Interface ApiCreateOrUpdateProperties has a new optional parameter translateRequiredQueryParametersConduct
  - Interface ApiManagementServiceBaseProperties has a new optional parameter natGatewayState
  - Interface ApiManagementServiceBaseProperties has a new optional parameter outboundPublicIPAddresses
  - Interface ApiManagementServiceResource has a new optional parameter natGatewayState
  - Interface ApiManagementServiceResource has a new optional parameter outboundPublicIPAddresses
  - Interface ApiManagementServiceUpdateParameters has a new optional parameter natGatewayState
  - Interface ApiManagementServiceUpdateParameters has a new optional parameter outboundPublicIPAddresses
  - Interface AuthenticationSettingsContract has a new optional parameter oAuth2AuthenticationSettings
  - Interface AuthenticationSettingsContract has a new optional parameter openidAuthenticationSettings
  - Interface AuthorizationServerContract has a new optional parameter useInApiDocumentation
  - Interface AuthorizationServerContract has a new optional parameter useInTestConsole
  - Interface AuthorizationServerContractProperties has a new optional parameter useInApiDocumentation
  - Interface AuthorizationServerContractProperties has a new optional parameter useInTestConsole
  - Interface AuthorizationServerUpdateContract has a new optional parameter useInApiDocumentation
  - Interface AuthorizationServerUpdateContract has a new optional parameter useInTestConsole
  - Interface AuthorizationServerUpdateContractProperties has a new optional parameter useInApiDocumentation
  - Interface AuthorizationServerUpdateContractProperties has a new optional parameter useInTestConsole
  - Interface ContentTypeCreateOrUpdateOptionalParams has a new optional parameter parameters
  - Interface DiagnosticContract has a new optional parameter metrics
  - Interface IdentityProviderBaseParameters has a new optional parameter clientLibrary
  - Interface IdentityProviderContract has a new optional parameter clientLibrary
  - Interface IdentityProviderCreateContract has a new optional parameter clientLibrary
  - Interface IdentityProviderUpdateParameters has a new optional parameter clientLibrary
  - Interface OpenidConnectProviderContract has a new optional parameter useInApiDocumentation
  - Interface OpenidConnectProviderContract has a new optional parameter useInTestConsole
  - Interface OpenidConnectProviderUpdateContract has a new optional parameter useInApiDocumentation
  - Interface OpenidConnectProviderUpdateContract has a new optional parameter useInTestConsole
  - Class ApiManagementClient has a new parameter authorization
  - Class ApiManagementClient has a new parameter authorizationAccessPolicy
  - Class ApiManagementClient has a new parameter authorizationLoginLinks
  - Class ApiManagementClient has a new parameter authorizationProvider
  - Class ApiManagementClient has a new parameter globalSchema
  - Class ApiManagementClient has a new parameter graphQLApiResolver
  - Class ApiManagementClient has a new parameter graphQLApiResolverPolicy
  - Class ApiManagementClient has a new parameter policyFragment
  - Class ApiManagementClient has a new parameter portalConfig
  - Added Enum KnownAuthorizationType
  - Added Enum KnownNatGatewayState
  - Added Enum KnownOAuth2GrantType
  - Added Enum KnownPolicyFragmentContentFormat
  - Added Enum KnownPortalSettingsCspMode
  - Added Enum KnownSchemaType
  - Added Enum KnownTranslateRequiredQueryParametersConduct

**Breaking Changes**

  - Removed Enum KnownApiVersionSetContractDetailsVersioningScheme
    
## 8.1.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 8.1.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 8.1.0 (2022-08-03)
    
**Features**

  - Added Interface AccessInformationContract
  - Added Interface ApiContract
  - Added Interface ApiContractProperties
  - Added Interface ApiContractUpdateProperties
  - Added Interface ApiCreateOrUpdateProperties
  - Added Interface ApiManagementServiceProperties
  - Added Interface ApiManagementServiceResource
  - Added Interface ApiManagementServiceUpdateParameters
  - Added Interface ApiManagementServiceUpdateProperties
  - Added Interface ApiReleaseContract
  - Added Interface ApiTagResourceContractProperties
  - Added Interface ApiVersionSetContract
  - Added Interface ApiVersionSetContractProperties
  - Added Interface ApiVersionSetUpdateParametersProperties
  - Added Interface AssociationContract
  - Added Interface AuthorizationServerContract
  - Added Interface AuthorizationServerContractProperties
  - Added Interface AuthorizationServerUpdateContract
  - Added Interface AuthorizationServerUpdateContractProperties
  - Added Interface BackendContract
  - Added Interface BackendContractProperties
  - Added Interface BackendReconnectContract
  - Added Interface BackendUpdateParameterProperties
  - Added Interface CacheContract
  - Added Interface CertificateContract
  - Added Interface ContentItemContract
  - Added Interface ContentTypeContract
  - Added Interface DeletedServiceContract
  - Added Interface DiagnosticContract
  - Added Interface EmailTemplateContract
  - Added Interface GatewayCertificateAuthorityContract
  - Added Interface GatewayContract
  - Added Interface GatewayHostnameConfigurationContract
  - Added Interface GroupContract
  - Added Interface IdentityProviderContract
  - Added Interface IdentityProviderContractProperties
  - Added Interface IdentityProviderCreateContract
  - Added Interface IdentityProviderCreateContractProperties
  - Added Interface IdentityProviderUpdateProperties
  - Added Interface IssueAttachmentContract
  - Added Interface IssueCommentContract
  - Added Interface IssueContract
  - Added Interface IssueContractProperties
  - Added Interface IssueUpdateContractProperties
  - Added Interface KeyVaultContractProperties
  - Added Interface LoggerContract
  - Added Interface NamedValueContract
  - Added Interface NamedValueContractProperties
  - Added Interface NamedValueCreateContract
  - Added Interface NamedValueCreateContractProperties
  - Added Interface NamedValueUpdateParameterProperties
  - Added Interface NotificationContract
  - Added Interface OpenidConnectProviderContract
  - Added Interface OperationContract
  - Added Interface OperationContractProperties
  - Added Interface OperationResultContract
  - Added Interface OperationUpdateContractProperties
  - Added Interface PolicyContract
  - Added Interface PolicyDescriptionContract
  - Added Interface PortalDelegationSettings
  - Added Interface PortalRevisionContract
  - Added Interface PortalSettingsContract
  - Added Interface PortalSigninSettings
  - Added Interface PortalSignupSettings
  - Added Interface PrivateEndpointConnection
  - Added Interface PrivateLinkResource
  - Added Interface ProductContract
  - Added Interface ProductContractProperties
  - Added Interface ProductTagResourceContractProperties
  - Added Interface ProductUpdateProperties
  - Added Interface RecipientEmailContract
  - Added Interface RecipientUserContract
  - Added Interface SchemaContract
  - Added Interface SubscriptionContract
  - Added Interface TagContract
  - Added Interface TagDescriptionContract
  - Added Interface TagDescriptionContractProperties
  - Added Interface TenantConfigurationSyncStateContract
  - Added Interface TenantSettingsContract
  - Added Interface UserContract
  - Added Interface UserContractProperties
  - Added Interface UserCreateParameterProperties
  - Added Interface UserUpdateParametersProperties
    
## 8.0.1 (2022-04-06)

**features**

  - Bug fix

## 8.0.0 (2021-12-13)

The package of @azure/arm-apimanagement is using our next generation design principles since version 8.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
