# Release History
    
## 1.0.0-beta.6 (2023-10-06)
    
**Features**

  - Added operation group GroupQuotaLimits
  - Added operation group GroupQuotaLimitsRequests
  - Added operation group GroupQuotas
  - Added operation group GroupQuotaSubscriptionQuotaAllocation
  - Added operation group GroupQuotaSubscriptionQuotaAllocationRequests
  - Added operation group GroupQuotaSubscriptions
  - Added operation group SubscriptionRequests
  - Added Interface AdditionalAttributes
  - Added Interface AssignedToSubscription
  - Added Interface BillingAccountId
  - Added Interface ErrorAdditionalInfo
  - Added Interface ErrorDetail
  - Added Interface ErrorResponse
  - Added Interface GroupingId
  - Added Interface GroupQuotaDetails
  - Added Interface GroupQuotaDetailsName
  - Added Interface GroupQuotaLimit
  - Added Interface GroupQuotaLimitList
  - Added Interface GroupQuotaLimitsCreateOrUpdateHeaders
  - Added Interface GroupQuotaLimitsCreateOrUpdateOptionalParams
  - Added Interface GroupQuotaLimitsGetOptionalParams
  - Added Interface GroupQuotaLimitsListNextOptionalParams
  - Added Interface GroupQuotaLimitsListOptionalParams
  - Added Interface GroupQuotaLimitsRequestsGetOptionalParams
  - Added Interface GroupQuotaLimitsRequestsListNextOptionalParams
  - Added Interface GroupQuotaLimitsRequestsListOptionalParams
  - Added Interface GroupQuotaLimitsUpdateHeaders
  - Added Interface GroupQuotaLimitsUpdateOptionalParams
  - Added Interface GroupQuotaList
  - Added Interface GroupQuotasCreateOrUpdateHeaders
  - Added Interface GroupQuotasCreateOrUpdateOptionalParams
  - Added Interface GroupQuotasDeleteOptionalParams
  - Added Interface GroupQuotasEntity
  - Added Interface GroupQuotasEntityBase
  - Added Interface GroupQuotasGetOptionalParams
  - Added Interface GroupQuotasListNextOptionalParams
  - Added Interface GroupQuotasListOptionalParams
  - Added Interface GroupQuotaSubscriptionId
  - Added Interface GroupQuotaSubscriptionIdList
  - Added Interface GroupQuotaSubscriptionIdProperties
  - Added Interface GroupQuotaSubscriptionQuotaAllocationCreateOrUpdateHeaders
  - Added Interface GroupQuotaSubscriptionQuotaAllocationCreateOrUpdateOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationGetOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationListNextOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationListOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationRequestsGetOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationRequestsListNextOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationRequestsListOptionalParams
  - Added Interface GroupQuotaSubscriptionQuotaAllocationUpdateHeaders
  - Added Interface GroupQuotaSubscriptionQuotaAllocationUpdateOptionalParams
  - Added Interface GroupQuotaSubscriptionsCreateOrUpdateHeaders
  - Added Interface GroupQuotaSubscriptionsCreateOrUpdateOptionalParams
  - Added Interface GroupQuotaSubscriptionsDeleteOptionalParams
  - Added Interface GroupQuotaSubscriptionsGetOptionalParams
  - Added Interface GroupQuotaSubscriptionsListNextOptionalParams
  - Added Interface GroupQuotaSubscriptionsListOptionalParams
  - Added Interface GroupQuotaSubscriptionsUpdateHeaders
  - Added Interface GroupQuotaSubscriptionsUpdateOptionalParams
  - Added Interface GroupQuotasUpdateHeaders
  - Added Interface GroupQuotasUpdateOptionalParams
  - Added Interface ProxyResource
  - Added Interface Resource
  - Added Interface ResourceBaseRequest
  - Added Interface SubmittedResourceRequestStatus
  - Added Interface SubmittedResourceRequestStatusList
  - Added Interface SubscriptionGroupQuotaAssignment
  - Added Interface SubscriptionQuotaAllocationRequest
  - Added Interface SubscriptionQuotaAllocationRequestList
  - Added Interface SubscriptionQuotaAllocationRequestProperties
  - Added Interface SubscriptionQuotaAllocations
  - Added Interface SubscriptionQuotaAllocationsList
  - Added Interface SubscriptionQuotaDetails
  - Added Interface SubscriptionRequestsGetOptionalParams
  - Added Interface SubscriptionRequestsListNextOptionalParams
  - Added Interface SubscriptionRequestsListOptionalParams
  - Added Interface SystemData
  - Added Type Alias CreatedByType
  - Added Type Alias EnvironmentType
  - Added Type Alias GroupingIdType
  - Added Type Alias GroupQuotaLimitsCreateOrUpdateResponse
  - Added Type Alias GroupQuotaLimitsGetResponse
  - Added Type Alias GroupQuotaLimitsListNextResponse
  - Added Type Alias GroupQuotaLimitsListResponse
  - Added Type Alias GroupQuotaLimitsRequestsGetResponse
  - Added Type Alias GroupQuotaLimitsRequestsListNextResponse
  - Added Type Alias GroupQuotaLimitsRequestsListResponse
  - Added Type Alias GroupQuotaLimitsUpdateResponse
  - Added Type Alias GroupQuotasCreateOrUpdateResponse
  - Added Type Alias GroupQuotasGetResponse
  - Added Type Alias GroupQuotasListNextResponse
  - Added Type Alias GroupQuotasListResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationCreateOrUpdateResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationGetResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationListNextResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationListResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationRequestsGetResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationRequestsListNextResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationRequestsListResponse
  - Added Type Alias GroupQuotaSubscriptionQuotaAllocationUpdateResponse
  - Added Type Alias GroupQuotaSubscriptionsCreateOrUpdateResponse
  - Added Type Alias GroupQuotaSubscriptionsGetResponse
  - Added Type Alias GroupQuotaSubscriptionsListNextResponse
  - Added Type Alias GroupQuotaSubscriptionsListResponse
  - Added Type Alias GroupQuotaSubscriptionsUpdateResponse
  - Added Type Alias GroupQuotasUpdateResponse
  - Added Type Alias RequestState
  - Added Type Alias SubscriptionRequestsGetResponse
  - Added Type Alias SubscriptionRequestsListNextResponse
  - Added Type Alias SubscriptionRequestsListResponse
  - Added Enum KnownCreatedByType
  - Added Enum KnownEnvironmentType
  - Added Enum KnownGroupingIdType
  - Added Enum KnownRequestState

**Breaking Changes**

  - Class AzureQuotaExtensionAPI has a new signature
  - Interface AzureQuotaExtensionAPIOptionalParams no longer has parameter $host
  - Interface AzureQuotaExtensionAPIOptionalParams no longer has parameter apiVersion
  - Interface QuotaRequestStatusListNextOptionalParams no longer has parameter filter
  - Interface QuotaRequestStatusListNextOptionalParams no longer has parameter skiptoken
  - Interface QuotaRequestStatusListNextOptionalParams no longer has parameter top
  - Class AzureQuotaExtensionAPI no longer has parameter apiVersion
    
    
## 1.0.0-beta.5 (2022-12-05)
    
**Features**

  - Added Interface LimitObject
    
### 1.0.0-beta.4 (2022-04-28)

**Features**

  - Bug fix

## 1.0.0-beta.3 (2021-12-22)
    
**Features**

  - Class AzureQuotaExtensionAPI has a new parameter $host
  - Class AzureQuotaExtensionAPI has a new parameter apiVersion

**Breaking Changes**

  - Deleted Class AzureQuotaExtensionAPIContext
    
## 1.0.0-beta.2 (2021-11-01)
    
**Features**

  - Added operation group QuotaOperation
  - Added Interface QuotaOperationListNextOptionalParams
  - Added Interface QuotaOperationListOptionalParams
  - Added Type Alias LimitObject
  - Added Type Alias QuotaOperationListNextResponse
  - Added Type Alias QuotaOperationListResponse
  - Class AzureQuotaExtensionAPI has a new parameter quotaOperation

**Breaking Changes**

  - Removed operation group Operation
  - Class AzureQuotaExtensionAPI no longer has parameter operation
    
## 1.0.0-beta.1 (2021-09-28)

  - Initial Release
