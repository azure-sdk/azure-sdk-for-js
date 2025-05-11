# Release History
    
## 5.0.0-beta.1 (2025-05-11)
Compared with version 4.0.0
    
### Features Added

  - Added operation group BotChannelsOperations
  - Added operation group BotConnectionOperationGroupOperations
  - Added operation group BotsOperationGroupOperations
  - Added operation group ConnectionSettingsOperations
  - Added operation group HostSettingsOperationGroupOperations
  - Added operation group NetworkSecurityPerimeterConfigurationsOperations
  - Added operation group OperationResultsOperationGroupOperations
  - Added operation group QnAMakerEndpointKeysOperationGroupOperations
  - Added operation BotsOperations.createSignInUrl
  - Added operation BotsOperations.listByBotResource
  - Added Interface BotChannelsCreateOptionalParams
  - Added Interface BotChannelsDeleteOptionalParams
  - Added Interface BotChannelsGetOptionalParams
  - Added Interface BotChannelsListByResourceGroupOptionalParams
  - Added Interface BotChannelsListWithKeysOptionalParams
  - Added Interface BotChannelsRegenerateKeysOptionalParams
  - Added Interface BotChannelsUpdateOptionalParams
  - Added Interface BotConnectionOperationGroupListServiceProvidersOptionalParams
  - Added Interface BotsCreateSignInUrlOptionalParams
  - Added Interface BotServiceClientOptionalParams
  - Added Interface BotsListByBotResourceOptionalParams
  - Added Interface BotsOperationGroupGetCheckNameAvailabilityOptionalParams
  - Added Interface ConnectionSettingsCreateOptionalParams
  - Added Interface ConnectionSettingsDeleteOptionalParams
  - Added Interface ConnectionSettingsGetOptionalParams
  - Added Interface ConnectionSettingsListByBotServiceOptionalParams
  - Added Interface ConnectionSettingsListWithSecretsOptionalParams
  - Added Interface ConnectionSettingsUpdateOptionalParams
  - Added Interface HostSettingsOperationGroupGetOptionalParams
  - Added Interface NetworkSecurityPerimeter
  - Added Interface NetworkSecurityPerimeterConfiguration
  - Added Interface NetworkSecurityPerimeterConfigurationProperties
  - Added Interface NetworkSecurityPerimeterConfigurationsGetOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsListOptionalParams
  - Added Interface NetworkSecurityPerimeterConfigurationsReconcileOptionalParams
  - Added Interface NspAccessRule
  - Added Interface NspAccessRuleProperties
  - Added Interface NspAccessRulePropertiesSubscriptionsItem
  - Added Interface OperationResultsOperationGroupGetOptionalParams
  - Added Interface PagedAsyncIterableIterator
  - Added Interface PageSettings
  - Added Interface PrivateEndpointConnectionProperties
  - Added Interface PrivateLinkResourceProperties
  - Added Interface Profile
  - Added Interface ProvisioningIssue
  - Added Interface ProvisioningIssueProperties
  - Added Interface ProxyResource
  - Added Interface QnAMakerEndpointKeysOperationGroupGetOptionalParams
  - Added Interface ResourceAssociation
  - Added Interface RestorePollerOptions
  - Added Interface SystemData
  - Added Interface TrackedResource
  - Added Class BotServiceClient
  - Added Type Alias AccessMode
  - Added Type Alias ContinuablePage
  - Added Type Alias CreatedByType
  - Added Type Alias NspAccessRuleDirection
  - Added Type Alias ProvisioningState
  - Added Type Alias Severity
  - Interface Bot has a new optional parameter etag
  - Interface Bot has a new optional parameter kind
  - Interface Bot has a new optional parameter sku
  - Interface Bot has a new optional parameter zones
  - Interface BotChannel has a new optional parameter etag
  - Interface BotChannel has a new optional parameter kind
  - Interface BotChannel has a new optional parameter sku
  - Interface BotChannel has a new optional parameter zones
  - Interface BotProperties has a new optional parameter networkSecurityPerimeterConfigurations
  - Interface ConnectionSetting has a new optional parameter etag
  - Interface ConnectionSetting has a new optional parameter kind
  - Interface ConnectionSetting has a new optional parameter sku
  - Interface ConnectionSetting has a new optional parameter zones
  - Interface ConnectionSettingProperties has a new optional parameter id
  - Interface ConnectionSettingProperties has a new optional parameter name
  - Interface PrivateEndpointConnection has a new optional parameter properties
  - Interface PrivateLinkResource has a new optional parameter properties
  - Interface Resource has a new optional parameter systemData
  - Type of parameter schemaTransformationVersion of interface BotProperties is changed from string to string | null
  - Type of parameter etag of interface Channel is changed from string to string | null
  - Type of parameter value of interface ConnectionSettingParameter is changed from string to string | null
  - Type of parameter cognitiveServiceRegion of interface DirectLineSpeechChannelProperties is changed from string to string | null
  - Type of parameter cognitiveServiceSubscriptionKey of interface DirectLineSpeechChannelProperties is changed from string to string | null
  - Type of parameter acceptedTerms of interface MsTeamsChannelProperties is changed from boolean to boolean | null
  - Type of parameter isBlockUserUploadEnabled of interface Site is changed from boolean to boolean | null
  - Type of parameter cognitiveServiceRegion of interface TelephonyChannelProperties is changed from string to string | null
  - Type of parameter cognitiveServiceSubscriptionKey of interface TelephonyChannelProperties is changed from string to string | null
  - Type of parameter defaultLocale of interface TelephonyChannelProperties is changed from string to string | null
  - Type of parameter premiumSKU of interface TelephonyChannelProperties is changed from string to string | null
  - Type of parameter cognitiveServiceRegion of interface TelephonyChannelResourceApiConfiguration is changed from string to string | null
  - Type of parameter cognitiveServiceResourceId of interface TelephonyChannelResourceApiConfiguration is changed from string to string | null
  - Type of parameter cognitiveServiceSubscriptionKey of interface TelephonyChannelResourceApiConfiguration is changed from string to string | null
  - Type of parameter defaultLocale of interface TelephonyChannelResourceApiConfiguration is changed from string to string | null
  - Type of parameter providerName of interface TelephonyChannelResourceApiConfiguration is changed from string to string | null
  - Type of parameter acsEndpoint of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter acsResourceId of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter acsSecret of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter cognitiveServiceRegion of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter cognitiveServiceResourceId of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter cognitiveServiceSubscriptionKey of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter defaultLocale of interface TelephonyPhoneNumbers is changed from string to string | null
  - Type of parameter offerType of interface TelephonyPhoneNumbers is changed from string to string | null
  - Added Enum KnownAccessMode
  - Added Enum KnownCreatedByType
  - Added Enum KnownNspAccessRuleDirection
  - Added Enum KnownProvisioningState
  - Added Enum KnownSeverity
  - Added Enum KnownVersions
  - Enum KnownPublicNetworkAccess has a new value SecuredByPerimeter
  - Added function restorePoller

### Breaking Changes

  - Removed operation group BotConnection
  - Removed operation group Channels
  - Removed operation group DirectLine
  - Removed operation group Email
  - Removed operation group HostSettings
  - Removed operation group OperationResults
  - Removed operation group PrivateLinkResources
  - Removed operation group QnAMakerEndpointKeys
  - Removed operation Bots.getCheckNameAvailability
  - Deleted Class AzureBotService
  - Interface BotsUpdateOptionalParams no longer has parameter etag
  - Interface BotsUpdateOptionalParams no longer has parameter kind
  - Interface BotsUpdateOptionalParams no longer has parameter location
  - Interface BotsUpdateOptionalParams no longer has parameter properties
  - Interface BotsUpdateOptionalParams no longer has parameter sku
  - Interface BotsUpdateOptionalParams no longer has parameter tags
  - Interface PrivateEndpointConnection no longer has parameter groupIds
  - Interface PrivateEndpointConnection no longer has parameter privateEndpoint
  - Interface PrivateEndpointConnection no longer has parameter privateLinkServiceConnectionState
  - Interface PrivateEndpointConnection no longer has parameter provisioningState
  - Interface PrivateLinkResource no longer has parameter groupId
  - Interface PrivateLinkResource no longer has parameter requiredMembers
  - Interface PrivateLinkResource no longer has parameter requiredZoneNames
  - Interface Resource no longer has parameter etag
  - Interface Resource no longer has parameter kind
  - Interface Resource no longer has parameter location
  - Interface Resource no longer has parameter sku
  - Interface Resource no longer has parameter tags
  - Interface Resource no longer has parameter zones
  - Type of parameter allSettings of interface BotProperties is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter parameters of interface BotProperties is changed from {
        [propertyName: string]: string;
    } to Record<string, string>
  - Type of parameter channelName of interface Channel is changed from "AlexaChannel" | "FacebookChannel" | "EmailChannel" | "OutlookChannel" | "MsTeamsChannel" | "SkypeChannel" | "KikChannel" | "WebChatChannel" | "DirectLineChannel" | "TelegramChannel" | "SmsChannel" | "SlackChannel" | "LineChannel" | "DirectLineSpeechChannel" | "Omnichannel" | "TelephonyChannel" | "AcsChatChannel" | "SearchAssistant" | "M365Extensions" to string
  - Type of parameter properties of interface OperationEntity is changed from Record<string, unknown> to any
  - Removed function getContinuationToken
    
    
## 4.0.0 (2023-01-16)

The package of @azure/arm-botservice is using our next generation design principles since version 4.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
