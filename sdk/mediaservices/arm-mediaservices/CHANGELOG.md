# Release History
    
## 11.1.0 (2022-06-08)
    
**Features**

  - Added Type Alias AV1Complexity
  - Added Type Alias AV1Layer
  - Added Type Alias AV1Video
  - Added Type Alias AV1VideoLayer
  - Added Type Alias AV1VideoProfile
  - Added Type Alias DDAudio
  - Added Enum KnownAV1Complexity
  - Added Enum KnownAV1VideoProfile
  - Enum KnownEncoderNamedPreset has a new value AV1AdaptiveStreaming
  - Enum KnownEncoderNamedPreset has a new value AV1ContentAwareEncoding
  - Enum KnownEncoderNamedPreset has a new value AV1SingleBitrate1080P
  - Enum KnownEncoderNamedPreset has a new value AV1SingleBitrate4K
  - Enum KnownEncoderNamedPreset has a new value AV1SingleBitrate720P
  - Enum KnownEncoderNamedPreset has a new value DDGoodQualityAudio
  - Enum KnownJobErrorCategory has a new value Account
  - Enum KnownJobErrorCode has a new value IdentityUnsupported
    
    
## 11.0.0 (2022-04-14)
    
**Features**

  - Added operation group OperationResults
  - Added operation group OperationStatuses
  - Added operation group Tracks
  - Added operation StreamingEndpoints.skus
  - Added Interface ArmStreamingEndpointCapacity
  - Added Interface ArmStreamingEndpointCurrentSku
  - Added Interface ArmStreamingEndpointSku
  - Added Interface ArmStreamingEndpointSkuInfo
  - Added Interface AssetTrackCollection
  - Added Interface AssetTrackOperationStatus
  - Added Interface HlsSettings
  - Added Interface OperationResultsGetHeaders
  - Added Interface OperationResultsGetOptionalParams
  - Added Interface OperationStatusesGetOptionalParams
  - Added Interface StreamingEndpointSkuInfoListResult
  - Added Interface StreamingEndpointsSkusOptionalParams
  - Added Interface TrackBase
  - Added Interface TracksCreateOrUpdateHeaders
  - Added Interface TracksCreateOrUpdateOptionalParams
  - Added Interface TracksDeleteHeaders
  - Added Interface TracksDeleteOptionalParams
  - Added Interface TracksGetOptionalParams
  - Added Interface TracksListOptionalParams
  - Added Interface TracksUpdateHeaders
  - Added Interface TracksUpdateOptionalParams
  - Added Interface TracksUpdateTrackDataHeaders
  - Added Interface TracksUpdateTrackDataOptionalParams
  - Added Type Alias AssetTrack
  - Added Type Alias AudioTrack
  - Added Type Alias H264RateControlMode
  - Added Type Alias OperationResultsGetResponse
  - Added Type Alias OperationStatusesGetResponse
  - Added Type Alias ProvisioningState
  - Added Type Alias StreamingEndpointsSkusResponse
  - Added Type Alias TextTrack_2
  - Added Type Alias TrackBaseUnion
  - Added Type Alias TracksCreateOrUpdateResponse
  - Added Type Alias TracksDeleteResponse
  - Added Type Alias TracksGetResponse
  - Added Type Alias TracksListResponse
  - Added Type Alias TracksUpdateResponse
  - Added Type Alias TracksUpdateTrackDataResponse
  - Added Type Alias VideoTrack
  - Added Type Alias Visibility
  - Class AzureMediaServices has a new parameter operationResults
  - Class AzureMediaServices has a new parameter operationStatuses
  - Class AzureMediaServices has a new parameter tracks
  - Type Alias H264Layer has a new parameter crf
  - Type Alias H264Video has a new parameter rateControlMode
  - Type Alias H265Layer has a new parameter crf
  - Type Alias StreamingEndpoint has a new parameter sku
  - Added Enum KnownH264RateControlMode
  - Added Enum KnownProvisioningState
  - Added Enum KnownVisibility
  - Enum KnownH265VideoProfile has a new value Main10
  - Enum KnownStreamOptionsFlag has a new value LowLatencyV2

**Breaking Changes**

  - Interface AzureMediaServicesOptionalParams no longer has parameter apiVersion
  - Interface Layer no longer has parameter odataType
  - Class AzureMediaServices no longer has parameter apiVersion
  - Type Alias H264Layer no longer has parameter odataType
  - Type Alias H265Layer no longer has parameter odataType
  - Type Alias H265VideoLayer no longer has parameter odataType
  - Type Alias JpgLayer no longer has parameter odataType
  - Type Alias PngLayer no longer has parameter odataType
  - Type Alias VideoLayer no longer has parameter odataType
    
    
## 10.0.0 (2021-12-13)

The package of @azure/arm-mediaservices is using our next generation design principles since version 10.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
