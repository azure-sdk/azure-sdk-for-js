# Release History
    
## 3.0.0 (2022-08-11)
    
**Features**

  - Added Interface ProxyResource
  - Added Interface SerialConsoleOperationsForbidden
  - Added Interface SerialConsoleState
  - Added Interface SerialPort
  - Interface DisableSerialConsoleResult has a new optional parameter properties
  - Interface EnableSerialConsoleResult has a new optional parameter properties
  - Interface SerialConsoleStatus has a new optional parameter properties

**Breaking Changes**

  - Interface DisableSerialConsoleResult no longer has parameter disabled
  - Interface EnableSerialConsoleResult no longer has parameter disabled
  - Interface SerialConsoleStatus no longer has parameter disabled
    
## 2.0.1 (2022-05-01)

**Features**

  - Bug fix
    
## 2.0.0 (2022-01-21)

The package of @azure/arm-serialconsole is using our next generation design principles since version 2.0.0, which contains breaking changes.

To understand the detail of the change, please refer to [Changelog](https://aka.ms/js-track2-changelog).

To migrate the existing applications to the latest version, please refer to [Migration Guide](https://aka.ms/js-track2-migration-guide).

To learn more, please refer to our documentation [Quick Start](https://aka.ms/js-track2-quickstart).
