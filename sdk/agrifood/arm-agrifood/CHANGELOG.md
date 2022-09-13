# Release History
    
## 1.0.0-beta.2 (2022-09-13)
    
**Features**

  - Added operation FarmBeatsModels.update
  - Added Interface AzureAgriFoodRPServiceOptionalParams
  - Added Class AzureAgriFoodRPService
  - Interface Extension has a new optional parameter systemData
  - Interface FarmBeats has a new optional parameter systemData
  - Interface FarmBeatsExtension has a new optional parameter systemData

**Breaking Changes**

  - Removed operation group PrivateEndpointConnections
  - Removed operation group PrivateLinkResources
  - Removed operation FarmBeatsModels.beginUpdate
  - Removed operation FarmBeatsModels.beginUpdateAndWait
  - Removed operation FarmBeatsModels.getOperationResult
  - Deleted Class AgriFoodMgmtClient
  - Interface FarmBeats no longer has parameter identity
  - Interface FarmBeats no longer has parameter privateEndpointConnections
  - Interface FarmBeats no longer has parameter publicNetworkAccess
  - Interface FarmBeats no longer has parameter sensorIntegration
  - Interface FarmBeatsModelsUpdateOptionalParams no longer has parameter resumeFrom
  - Interface FarmBeatsModelsUpdateOptionalParams no longer has parameter updateIntervalInMs
  - Interface FarmBeatsUpdateRequestModel no longer has parameter identity
  - Interface FarmBeatsUpdateRequestModel no longer has parameter properties
  - Interface Resource no longer has parameter systemData
  - Removed Enum KnownPrivateEndpointConnectionProvisioningState
  - Removed Enum KnownPrivateEndpointServiceConnectionStatus
  - Removed Enum KnownPublicNetworkAccess
  - Enum KnownProvisioningState no longer has value Creating
  - Enum KnownProvisioningState no longer has value Deleting
  - Enum KnownProvisioningState no longer has value Updating
    
    
## 1.0.0-beta.1 (2022-08-31)

The package of @azure/arm-agrifood is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
