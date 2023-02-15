# Release History
    
## 2.0.0 (2023-02-15)
    
**Features**

  - Added Interface AssignmentReportProperties
  - Added Interface ServicePrincipalProperties
  - Added Type Alias AssignmentMode
  - Interface BestPractice has a new optional parameter properties
  - Interface ConfigurationProfileAssignmentProperties has a new optional parameter mode
  - Interface Report has a new optional parameter properties
  - Interface ServicePrincipal has a new optional parameter properties
  - Added function getContinuationToken

**Breaking Changes**

  - Interface BestPractice no longer has parameter configuration
  - Interface Report no longer has parameter configurationProfile
  - Interface Report no longer has parameter duration
  - Interface Report no longer has parameter endTime
  - Interface Report no longer has parameter error
  - Interface Report no longer has parameter lastModifiedTime
  - Interface Report no longer has parameter reportFormatVersion
  - Interface Report no longer has parameter resources
  - Interface Report no longer has parameter startTime
  - Interface Report no longer has parameter status
  - Interface Report no longer has parameter typePropertiesType
  - Interface ServicePrincipal no longer has parameter authorizationSet
  - Interface ServicePrincipal no longer has parameter servicePrincipalId
    
## 1.0.2 (2022-10-08)

**Bugs Fixed**

  -  revert credential scopes

## 1.0.1 (2022-09-30)

**Bugs Fixed**

  -  fix better user experience of credential scopes in government cloud

## 1.0.0 (2022-08-03)

The package of @azure/arm-automanage is using our next generation design principles. To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
