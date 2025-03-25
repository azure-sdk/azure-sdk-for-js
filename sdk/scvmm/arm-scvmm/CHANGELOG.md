# Release History
    
## 2.0.0 (2025-03-25)
    
### Features Added

  - Interface CloudCapacity has a new optional parameter storageGB
  - Interface GuestAgentProperties has a new optional parameter privateLinkScopeResourceId
  - Interface OsProfileForVmInstance has a new optional parameter adminUsername
  - Interface OsProfileForVmInstance has a new optional parameter domainName
  - Interface OsProfileForVmInstance has a new optional parameter domainPassword
  - Interface OsProfileForVmInstance has a new optional parameter domainUsername
  - Interface OsProfileForVmInstance has a new optional parameter productKey
  - Interface OsProfileForVmInstance has a new optional parameter runOnceCommands
  - Interface OsProfileForVmInstance has a new optional parameter timezone
  - Interface OsProfileForVmInstance has a new optional parameter workgroup
  - Interface VirtualMachineInstancesStopOptionalParams has a new optional parameter body
  - Interface VirtualMachineInventoryItem has a new optional parameter generation

### Breaking Changes

  - Operation VirtualMachineInstances.beginStop has a new signature
  - Operation VirtualMachineInstances.beginStopAndWait has a new signature
    
    
## 1.0.0 (2024-06-25)

### Features Added

The package of @azure/arm-scvmm is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/azsdk/js/mgmt/quickstart).
