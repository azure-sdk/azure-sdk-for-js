import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { PollerLike, PollOperationState } from "@azure/core-lro";
import {
  DeviceClass,
  DeviceManagementListDeviceClassesOptionalParams,
  UpdateInfo,
  DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams,
  Device,
  DeviceManagementListDevicesOptionalParams,
  Group,
  DeviceManagementListGroupsOptionalParams,
  DeviceClassSubgroupUpdatableDevices,
  DeviceManagementListBestUpdatesForGroupOptionalParams,
  Deployment,
  DeviceManagementListDeploymentsForGroupOptionalParams,
  DeviceClassSubgroup,
  DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams,
  DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams,
  DeploymentDeviceState,
  DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams,
  DeviceOperation,
  DeviceManagementListOperationsOptionalParams,
  LogCollection,
  DeviceManagementListLogCollectionsOptionalParams,
  DeviceHealth,
  DeviceManagementListDeviceHealthOptionalParams,
  DeviceManagementGetDeviceClassOptionalParams,
  DeviceManagementGetDeviceClassResponse,
  PatchBody,
  DeviceManagementUpdateDeviceClassOptionalParams,
  DeviceManagementUpdateDeviceClassResponse,
  DeviceManagementDeleteDeviceClassOptionalParams,
  ImportType,
  DeviceManagementImportDevicesOptionalParams,
  DeviceManagementImportDevicesResponse,
  DeviceManagementGetDeviceOptionalParams,
  DeviceManagementGetDeviceResponse,
  DeviceManagementGetDeviceModuleOptionalParams,
  DeviceManagementGetDeviceModuleResponse,
  DeviceManagementGetUpdateComplianceOptionalParams,
  DeviceManagementGetUpdateComplianceResponse,
  DeviceManagementGetGroupOptionalParams,
  DeviceManagementGetGroupResponse,
  DeviceManagementDeleteGroupOptionalParams,
  DeviceManagementGetUpdateComplianceForGroupOptionalParams,
  DeviceManagementGetUpdateComplianceForGroupResponse,
  DeviceManagementGetDeploymentOptionalParams,
  DeviceManagementGetDeploymentResponse,
  DeviceManagementCreateOrUpdateDeploymentOptionalParams,
  DeviceManagementCreateOrUpdateDeploymentResponse,
  DeviceManagementDeleteDeploymentOptionalParams,
  DeviceManagementGetDeploymentStatusOptionalParams,
  DeviceManagementGetDeploymentStatusResponse,
  DeviceManagementGetDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeviceClassSubgroupResponse,
  DeviceManagementDeleteDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeviceClassSubgroupUpdateComplianceOptionalParams,
  DeviceManagementGetDeviceClassSubgroupUpdateComplianceResponse,
  DeviceManagementGetBestUpdatesForDeviceClassSubgroupOptionalParams,
  DeviceManagementGetBestUpdatesForDeviceClassSubgroupResponse,
  DeviceManagementGetDeploymentForDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeploymentForDeviceClassSubgroupResponse,
  DeviceManagementDeleteDeploymentForDeviceClassSubgroupOptionalParams,
  DeviceManagementStopDeploymentOptionalParams,
  DeviceManagementStopDeploymentResponse,
  DeviceManagementRetryDeploymentOptionalParams,
  DeviceManagementRetryDeploymentResponse,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusOptionalParams,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusResponse,
  DeviceManagementGetOperationOptionalParams,
  DeviceManagementGetOperationResponse,
  DeviceManagementStartLogCollectionOptionalParams,
  DeviceManagementStartLogCollectionResponse,
  DeviceManagementGetLogCollectionOptionalParams,
  DeviceManagementGetLogCollectionResponse,
  DeviceManagementGetLogCollectionDetailedStatusOptionalParams,
  DeviceManagementGetLogCollectionDetailedStatusResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a DeviceManagement. */
export interface DeviceManagement {
  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): PagedAsyncIterableIterator<DeviceClass>;
  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): PagedAsyncIterableIterator<UpdateInfo>;
  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): PagedAsyncIterableIterator<Device>;
  /**
   * Gets a list of all device groups.  The $default group will always be returned first.
   * @param options The options parameters.
   */
  listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): PagedAsyncIterableIterator<Group>;
  /**
   * Get the best available updates for a device group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): PagedAsyncIterableIterator<DeviceClassSubgroupUpdatableDevices>;
  /**
   * Gets a list of deployments for a device group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment>;
  /**
   * Get the device class subgroups for the group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  listDeviceClassSubgroupsForGroup(
    groupId: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams
  ): PagedAsyncIterableIterator<DeviceClassSubgroup>;
  /**
   * Gets a list of deployments for a device class subgroup.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  listDeploymentsForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment>;
  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  listDeviceStatesForDeviceClassSubgroupDeployment(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams
  ): PagedAsyncIterableIterator<DeploymentDeviceState>;
  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): PagedAsyncIterableIterator<DeviceOperation>;
  /**
   * Get all device diagnostics log collections
   * @param options The options parameters.
   */
  listLogCollections(
    options?: DeviceManagementListLogCollectionsOptionalParams
  ): PagedAsyncIterableIterator<LogCollection>;
  /**
   * Get list of device health
   * @param filter Filter list by specified properties.
   * @param options The options parameters.
   */
  listDeviceHealth(
    filter: string,
    options?: DeviceManagementListDeviceHealthOptionalParams
  ): PagedAsyncIterableIterator<DeviceHealth>;
  /**
   * Gets the properties of a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassOptionalParams
  ): Promise<DeviceManagementGetDeviceClassResponse>;
  /**
   * Update device class details.
   * @param deviceClassId Device class identifier.
   * @param deviceClassPatch The device class json merge patch body. Currently only supports patching
   *                         friendlyName
   * @param options The options parameters.
   */
  updateDeviceClass(
    deviceClassId: string,
    deviceClassPatch: PatchBody,
    options?: DeviceManagementUpdateDeviceClassOptionalParams
  ): Promise<DeviceManagementUpdateDeviceClassResponse>;
  /**
   * Deletes a device class. Device classes are created automatically when Device Update-enabled devices
   * are connected to the hub but are not automatically cleaned up since they are referenced by
   * DeviceClassSubgroups. If the user has deleted all DeviceClassSubgroups for a device class they can
   * also delete the device class to remove the records from the system and to stop checking the
   * compatibility of this device class with new updates. If a device is ever reconnected for this device
   * class it will be re-created.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  deleteDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementDeleteDeviceClassOptionalParams
  ): Promise<void>;
  /**
   * Import existing devices from IoT Hub. This is a long-running-operation; use Operation-Location
   * response header value to check for operation status.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  beginImportDevices(
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeviceManagementImportDevicesResponse>,
      DeviceManagementImportDevicesResponse
    >
  >;
  /**
   * Import existing devices from IoT Hub. This is a long-running-operation; use Operation-Location
   * response header value to check for operation status.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  beginImportDevicesAndWait(
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<DeviceManagementImportDevicesResponse>;
  /**
   * Gets the device properties and latest deployment status for a device connected to Device Update for
   * IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDevice(
    deviceId: string,
    options?: DeviceManagementGetDeviceOptionalParams
  ): Promise<DeviceManagementGetDeviceResponse>;
  /**
   * Gets the device module properties and latest deployment status for a device module connected to
   * Device Update for IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param moduleId Device module identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDeviceModule(
    deviceId: string,
    moduleId: string,
    options?: DeviceManagementGetDeviceModuleOptionalParams
  ): Promise<DeviceManagementGetDeviceModuleResponse>;
  /**
   * Gets the breakdown of how many devices are on their latest update, have new updates available, or
   * are in progress receiving new updates.
   * @param options The options parameters.
   */
  getUpdateCompliance(
    options?: DeviceManagementGetUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceResponse>;
  /**
   * Gets the device group properties.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroup(
    groupId: string,
    options?: DeviceManagementGetGroupOptionalParams
  ): Promise<DeviceManagementGetGroupResponse>;
  /**
   * Deletes a device group. This group is automatically created when a Device Update-enabled device is
   * connected to the hub and reports its properties. Groups, subgroups, and deployments are not
   * automatically cleaned up but are retained for history purposes. Users can call this method to delete
   * a group if they do not need to retain any of the history of the group and no longer need it. If a
   * device is ever connected again for this group after the group was deleted it will be automatically
   * re-created but there will be no history.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  deleteGroup(
    groupId: string,
    options?: DeviceManagementDeleteGroupOptionalParams
  ): Promise<void>;
  /**
   * Get device group update compliance information such as how many devices are on their latest update,
   * how many need new updates, and how many are in progress on receiving a new update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getUpdateComplianceForGroup(
    groupId: string,
    options?: DeviceManagementGetUpdateComplianceForGroupOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceForGroupResponse>;
  /**
   * Gets the deployment properties.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeployment(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeploymentOptionalParams
  ): Promise<DeviceManagementGetDeploymentResponse>;
  /**
   * Creates or updates a deployment.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param deployment The deployment properties.
   * @param options The options parameters.
   */
  createOrUpdateDeployment(
    groupId: string,
    deploymentId: string,
    deployment: Deployment,
    options?: DeviceManagementCreateOrUpdateDeploymentOptionalParams
  ): Promise<DeviceManagementCreateOrUpdateDeploymentResponse>;
  /**
   * Deletes a deployment.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  deleteDeployment(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementDeleteDeploymentOptionalParams
  ): Promise<void>;
  /**
   * Gets the status of a deployment including a breakdown of how many devices in the deployment are in
   * progress, completed, or failed.
   * @param groupId Group identity.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeploymentStatus(
    groupId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeploymentStatusOptionalParams
  ): Promise<DeviceManagementGetDeploymentStatusResponse>;
  /**
   * Gets device class subgroup details.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassSubgroupOptionalParams
  ): Promise<DeviceManagementGetDeviceClassSubgroupResponse>;
  /**
   * Deletes a device class subgroup.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  deleteDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementDeleteDeviceClassSubgroupOptionalParams
  ): Promise<void>;
  /**
   * Get device class subgroup update compliance information such as how many devices are on their latest
   * update, how many need new updates, and how many are in progress on receiving a new update.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClassSubgroupUpdateCompliance(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassSubgroupUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetDeviceClassSubgroupUpdateComplianceResponse>;
  /**
   * Get the best available update for a device class subgroup and a count of how many devices need this
   * update.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getBestUpdatesForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementGetBestUpdatesForDeviceClassSubgroupOptionalParams
  ): Promise<DeviceManagementGetBestUpdatesForDeviceClassSubgroupResponse>;
  /**
   * Gets the deployment properties.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeploymentForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeploymentForDeviceClassSubgroupOptionalParams
  ): Promise<DeviceManagementGetDeploymentForDeviceClassSubgroupResponse>;
  /**
   * Deletes a device class subgroup deployment.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  deleteDeploymentForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementDeleteDeploymentForDeviceClassSubgroupOptionalParams
  ): Promise<void>;
  /**
   * Stops a deployment.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  stopDeployment(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementStopDeploymentOptionalParams
  ): Promise<DeviceManagementStopDeploymentResponse>;
  /**
   * Retries a deployment with failed devices.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  retryDeployment(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementRetryDeploymentOptionalParams
  ): Promise<DeviceManagementRetryDeploymentResponse>;
  /**
   * Gets the status of a deployment including a breakdown of how many devices in the deployment are in
   * progress, completed, or failed.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  getDeviceClassSubgroupDeploymentStatus(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementGetDeviceClassSubgroupDeploymentStatusOptionalParams
  ): Promise<DeviceManagementGetDeviceClassSubgroupDeploymentStatusResponse>;
  /**
   * Retrieve operation status.
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getOperation(
    operationId: string,
    options?: DeviceManagementGetOperationOptionalParams
  ): Promise<DeviceManagementGetOperationResponse>;
  /**
   * Start the device diagnostics log collection on specified devices.
   * @param logCollectionId Log collection identifier.
   * @param logCollection The log collection properties.
   * @param options The options parameters.
   */
  startLogCollection(
    logCollectionId: string,
    logCollection: LogCollection,
    options?: DeviceManagementStartLogCollectionOptionalParams
  ): Promise<DeviceManagementStartLogCollectionResponse>;
  /**
   * Get the device diagnostics log collection
   * @param logCollectionId Log collection identifier.
   * @param options The options parameters.
   */
  getLogCollection(
    logCollectionId: string,
    options?: DeviceManagementGetLogCollectionOptionalParams
  ): Promise<DeviceManagementGetLogCollectionResponse>;
  /**
   * Get log collection with detailed status
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionDetailedStatus(
    operationId: string,
    options?: DeviceManagementGetLogCollectionDetailedStatusOptionalParams
  ): Promise<DeviceManagementGetLogCollectionDetailedStatusResponse>;
}
