# Release History
    
## 3.3.0 (2024-11-12)
    
### Features Added

  - Added operation group AdvisorScores
  - Added Interface AdvisorScoreEntity
  - Added Interface AdvisorScoreEntityProperties
  - Added Interface AdvisorScoreResponse
  - Added Interface AdvisorScoresGetOptionalParams
  - Added Interface AdvisorScoresListOptionalParams
  - Added Interface PredictionRequest
  - Added Interface PredictionResponse
  - Added Interface PredictOptionalParams
  - Added Interface ProxyResource
  - Added Interface ScoreEntity
  - Added Interface SystemData
  - Added Interface TimeSeriesEntityItem
  - Added Type Alias AdvisorScoresGetResponse
  - Added Type Alias AdvisorScoresListResponse
  - Added Type Alias Aggregated
  - Added Type Alias CreatedByType
  - Added Type Alias Duration
  - Added Type Alias PredictionType
  - Added Type Alias PredictResponse
  - Interface ConfigData has a new optional parameter duration
  - Interface Resource has a new optional parameter systemData
  - Added Enum KnownAggregated
  - Added Enum KnownCreatedByType
  - Added Enum KnownDuration
  - Added Enum KnownPredictionType
    
## 3.2.0 (2023-08-03)

### Features Added

- Class AdvisorManagementClient has a new signature
- Interface RecommendationsListNextOptionalParams no longer has parameter filter
- Interface RecommendationsListNextOptionalParams no longer has parameter skipToken
- Interface RecommendationsListNextOptionalParams no longer has parameter top
- Interface SuppressionsListNextOptionalParams no longer has parameter skipToken
- Interface SuppressionsListNextOptionalParams no longer has parameter top

## 3.1.0 (2022-11-14)

### Features Added

- Added Interface ConfigData
- Added Interface ResourceRecommendationBase
- Added Interface SuppressionContract

## 3.0.3 (2022-10-08)

### Bugs Fixed

- revert credential scopes

## 3.0.2 (2022-09-30)

### Bugs Fixed

- fix better user experience of credential scopes in government cloud

## 3.0.1 (2022-03-22)

**features**

- bug fix

## 3.0.0 (2021-12-29)

The package of @azure/arm-advisor is using our next generation design principles since version 3.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
