# Release History
    
## 10.0.0 (2022-10-25)
    
**Features**

  - Added operation LotsOperations.listByCustomer
  - Added Interface LotsListByCustomerNextOptionalParams
  - Added Interface LotsListByCustomerOptionalParams
  - Added Type Alias LotsListByCustomerNextResponse
  - Added Type Alias LotsListByCustomerResponse
  - Interface CreditSummary has a new optional parameter eTagPropertiesETag
  - Interface LegacyChargeSummary has a new optional parameter azureMarketplaceCharges
  - Interface LegacyUsageDetail has a new optional parameter benefitId
  - Interface LegacyUsageDetail has a new optional parameter benefitName
  - Interface ModernReservationRecommendation has a new optional parameter resourceType
  - Interface ModernReservationRecommendation has a new optional parameter subscriptionId
  - Enum KnownEventType has a new value CreditExpired

**Breaking Changes**

  - Operation ReservationRecommendationDetails.get has a new signature
  - Interface BudgetFilter no longer has parameter not
  - Interface LegacyChargeSummary no longer has parameter marketplaceCharges
    
    
## 9.1.0 (2022-09-05)
    
**Features**

  - Added Interface AmountWithExchangeRate
  - Added Interface Balance
  - Added Interface Budget
  - Added Interface ChargeSummary
  - Added Interface CreditSummary
  - Added Interface EventSummary
  - Added Interface LegacyChargeSummary
  - Added Interface LegacyReservationRecommendation
  - Added Interface LegacyReservationTransaction
  - Added Interface LegacySharedScopeReservationRecommendationProperties
  - Added Interface LegacySingleScopeReservationRecommendationProperties
  - Added Interface LegacyUsageDetail
  - Added Interface LotSummary
  - Added Interface ManagementGroupAggregatedCostResult
  - Added Interface Marketplace
  - Added Interface ModernChargeSummary
  - Added Interface ModernReservationRecommendation
  - Added Interface ModernReservationTransaction
  - Added Interface ModernUsageDetail
  - Added Interface PriceSheetResult
  - Added Interface ReservationDetail
  - Added Interface ReservationRecommendation
  - Added Interface ReservationRecommendationDetailsModel
  - Added Interface ReservationSummary
  - Added Interface ReservationTransaction
  - Added Interface TagsResult
  - Added Interface UsageDetail
    
## 9.0.1 (2022-04-11)

**features**

  - bug fix

## 9.0.0 (2021-12-16)

The package of @azure/arm-consumption is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
