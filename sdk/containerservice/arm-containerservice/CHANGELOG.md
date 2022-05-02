# Release History
    
## 16.0.0 (2022-05-02)
    
**Features**

  - Type Alias Snapshot has a new parameter systemData

**Breaking Changes**

  - Interface ContainerServiceNetworkProfile no longer has parameter ipFamilies
  - Interface ContainerServiceNetworkProfile no longer has parameter podCidrs
  - Interface ContainerServiceNetworkProfile no longer has parameter serviceCidrs
  - Interface ManagedClusterLoadBalancerProfileManagedOutboundIPs no longer has parameter countIPv6
  - Interface ManagedClustersListClusterUserCredentialsOptionalParams no longer has parameter format
  - Interface ManagedClusterWindowsProfile no longer has parameter gmsaProfile
  - Interface Resource no longer has parameter systemData
  - Type Alias Snapshot no longer has parameter kubernetesVersion
  - Type Alias Snapshot no longer has parameter nodeImageVersion
  - Type Alias Snapshot no longer has parameter osType
  - Type Alias Snapshot no longer has parameter osSku
  - Type Alias Snapshot no longer has parameter vmSize
  - Type Alias Snapshot no longer has parameter enableFips
  - Removed Enum KnownFormat
  - Removed Enum KnownIpFamily
    
    
## 15.2.0 (2022-03-23)
    
**Features**

  - Interface Resource has a new optional parameter systemData
    
    
## 15.1.0 (2022-02-24)
    
**Features**

  - Added Type Alias Format
  - Interface ManagedClustersListClusterUserCredentialsOptionalParams has a new optional parameter format
  - Added Enum KnownFormat
    
    
## 15.0.0 (2021-12-09)

The package of @azure/arm-containerservice is using our next generation design principles since version 15.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
