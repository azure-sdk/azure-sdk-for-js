# Release History
    
## 10.0.0 (2022-05-02)
    
**Features**

  - Added operation group Forecasts
  - Added Interface ForecastPropertiesConfidenceLevelsItem
  - Added Interface ForecastsListOptionalParams
  - Added Interface ForecastsListResult
  - Added Type Alias Bound
  - Added Type Alias ChargeType
  - Added Type Alias Forecast
  - Added Type Alias ForecastsListResponse
  - Added Type Alias Grain
  - Class ConsumptionManagementClient has a new parameter forecasts
  - Add parameters of Resource to TypeAlias ChargeSummary
  - Add parameters of Resource to TypeAlias EventSummary
  - Add parameters of Resource to TypeAlias LotSummary
  - Type Alias EventSummary has a new parameter eTag
  - Type Alias LotSummary has a new parameter eTag
  - Added Enum KnownBound
  - Added Enum KnownChargeType
  - Added Enum KnownGrain

**Breaking Changes**

  - Operation ReservationRecommendationDetails.get has a new signature
  - Interface Notification_2 no longer has parameter locale
  - Delete parameters of ProxyResource in TypeAlias ChargeSummary
  - Delete parameters of ProxyResource in TypeAlias EventSummary
  - Delete parameters of ProxyResource in TypeAlias LotSummary
  - Type Alias EventSummary no longer has parameter eTagPropertiesETag
  - Type Alias LegacyUsageDetail no longer has parameter payGPrice
  - Type Alias LegacyUsageDetail no longer has parameter pricingModel
  - Type Alias LotSummary no longer has parameter eTagPropertiesETag
  - Type Alias ModernUsageDetail no longer has parameter effectivePrice
  - Type Alias ModernUsageDetail no longer has parameter pricingModel
  - Type Alias ModernUsageDetail no longer has parameter benefitId
  - Type Alias ModernUsageDetail no longer has parameter benefitName
  - Type Alias ModernUsageDetail no longer has parameter provider
  - Type Alias ModernUsageDetail no longer has parameter costAllocationRuleName
  - Type Alias ReservationTransaction no longer has parameter billingMonth
  - Type Alias ReservationTransaction no longer has parameter monetaryCommitment
  - Type Alias ReservationTransaction no longer has parameter overage
  - Removed Enum KnownCultureCode
  - Removed Enum KnownPricingModelType
  - Enum KnownThresholdType no longer has value Forecasted
    
## 9.0.1 (2022-04-11)

**features**

  - bug fix

## 9.0.0 (2021-12-16)

The package of @azure/arm-consumption is using our next generation design principles since version 9.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
