import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { DeviceManagement } from "../operationsInterfaces";
import * as coreClient from "@azure/core-client";
import * as Mappers from "../models/mappers";
import * as Parameters from "../models/parameters";
import { DeviceUpdateClient } from "../deviceUpdateClient";
import { PollerLike, PollOperationState, LroEngine } from "@azure/core-lro";
import { LroImpl } from "../lroImpl";
import {
  DeviceClass,
  DeviceManagementListDeviceClassesNextOptionalParams,
  DeviceManagementListDeviceClassesOptionalParams,
  UpdateInfo,
  DeviceManagementListInstallableUpdatesForDeviceClassNextOptionalParams,
  DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams,
  Device,
  DeviceManagementListDevicesNextOptionalParams,
  DeviceManagementListDevicesOptionalParams,
  Group,
  DeviceManagementListGroupsNextOptionalParams,
  DeviceManagementListGroupsOptionalParams,
  DeviceClassSubgroupUpdatableDevices,
  DeviceManagementListBestUpdatesForGroupNextOptionalParams,
  DeviceManagementListBestUpdatesForGroupOptionalParams,
  Deployment,
  DeviceManagementListDeploymentsForGroupNextOptionalParams,
  DeviceManagementListDeploymentsForGroupOptionalParams,
  DeviceClassSubgroup,
  DeviceManagementListDeviceClassSubgroupsForGroupNextOptionalParams,
  DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams,
  DeviceManagementListDeploymentsForDeviceClassSubgroupNextOptionalParams,
  DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams,
  DeploymentDeviceState,
  DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentNextOptionalParams,
  DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams,
  DeviceOperation,
  DeviceManagementListOperationsNextOptionalParams,
  DeviceManagementListOperationsOptionalParams,
  LogCollection,
  DeviceManagementListLogCollectionsNextOptionalParams,
  DeviceManagementListLogCollectionsOptionalParams,
  DeviceHealth,
  DeviceManagementListDeviceHealthNextOptionalParams,
  DeviceManagementListDeviceHealthOptionalParams,
  DeviceManagementListDeviceClassesResponse,
  DeviceManagementGetDeviceClassOptionalParams,
  DeviceManagementGetDeviceClassResponse,
  PatchBody,
  DeviceManagementUpdateDeviceClassOptionalParams,
  DeviceManagementUpdateDeviceClassResponse,
  DeviceManagementDeleteDeviceClassOptionalParams,
  DeviceManagementListInstallableUpdatesForDeviceClassResponse,
  DeviceManagementListDevicesResponse,
  ImportType,
  DeviceManagementImportDevicesOptionalParams,
  DeviceManagementImportDevicesResponse,
  DeviceManagementGetDeviceOptionalParams,
  DeviceManagementGetDeviceResponse,
  DeviceManagementGetDeviceModuleOptionalParams,
  DeviceManagementGetDeviceModuleResponse,
  DeviceManagementGetUpdateComplianceOptionalParams,
  DeviceManagementGetUpdateComplianceResponse,
  DeviceManagementListGroupsResponse,
  DeviceManagementGetGroupOptionalParams,
  DeviceManagementGetGroupResponse,
  DeviceManagementDeleteGroupOptionalParams,
  DeviceManagementGetUpdateComplianceForGroupOptionalParams,
  DeviceManagementGetUpdateComplianceForGroupResponse,
  DeviceManagementListBestUpdatesForGroupResponse,
  DeviceManagementListDeploymentsForGroupResponse,
  DeviceManagementGetDeploymentOptionalParams,
  DeviceManagementGetDeploymentResponse,
  DeviceManagementCreateOrUpdateDeploymentOptionalParams,
  DeviceManagementCreateOrUpdateDeploymentResponse,
  DeviceManagementDeleteDeploymentOptionalParams,
  DeviceManagementGetDeploymentStatusOptionalParams,
  DeviceManagementGetDeploymentStatusResponse,
  DeviceManagementListDeviceClassSubgroupsForGroupResponse,
  DeviceManagementGetDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeviceClassSubgroupResponse,
  DeviceManagementDeleteDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeviceClassSubgroupUpdateComplianceOptionalParams,
  DeviceManagementGetDeviceClassSubgroupUpdateComplianceResponse,
  DeviceManagementGetBestUpdatesForDeviceClassSubgroupOptionalParams,
  DeviceManagementGetBestUpdatesForDeviceClassSubgroupResponse,
  DeviceManagementListDeploymentsForDeviceClassSubgroupResponse,
  DeviceManagementGetDeploymentForDeviceClassSubgroupOptionalParams,
  DeviceManagementGetDeploymentForDeviceClassSubgroupResponse,
  DeviceManagementDeleteDeploymentForDeviceClassSubgroupOptionalParams,
  DeviceManagementStopDeploymentOptionalParams,
  DeviceManagementStopDeploymentResponse,
  DeviceManagementRetryDeploymentOptionalParams,
  DeviceManagementRetryDeploymentResponse,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusOptionalParams,
  DeviceManagementGetDeviceClassSubgroupDeploymentStatusResponse,
  DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentResponse,
  DeviceManagementGetOperationOptionalParams,
  DeviceManagementGetOperationResponse,
  DeviceManagementListOperationsResponse,
  DeviceManagementStartLogCollectionOptionalParams,
  DeviceManagementStartLogCollectionResponse,
  DeviceManagementGetLogCollectionOptionalParams,
  DeviceManagementGetLogCollectionResponse,
  DeviceManagementListLogCollectionsResponse,
  DeviceManagementGetLogCollectionDetailedStatusOptionalParams,
  DeviceManagementGetLogCollectionDetailedStatusResponse,
  DeviceManagementListDeviceHealthResponse,
  DeviceManagementListDeviceClassesNextResponse,
  DeviceManagementListInstallableUpdatesForDeviceClassNextResponse,
  DeviceManagementListDevicesNextResponse,
  DeviceManagementListGroupsNextResponse,
  DeviceManagementListBestUpdatesForGroupNextResponse,
  DeviceManagementListDeploymentsForGroupNextResponse,
  DeviceManagementListDeviceClassSubgroupsForGroupNextResponse,
  DeviceManagementListDeploymentsForDeviceClassSubgroupNextResponse,
  DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentNextResponse,
  DeviceManagementListOperationsNextResponse,
  DeviceManagementListLogCollectionsNextResponse,
  DeviceManagementListDeviceHealthNextResponse
} from "../models";

/// <reference lib="esnext.asynciterable" />
/** Class containing DeviceManagement operations. */
export class DeviceManagementImpl implements DeviceManagement {
  private readonly client: DeviceUpdateClient;

  /**
   * Initialize a new instance of the class DeviceManagement class.
   * @param client Reference to the service client
   */
  constructor(client: DeviceUpdateClient) {
    this.client = client;
  }

  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): PagedAsyncIterableIterator<DeviceClass> {
    const iter = this.listDeviceClassesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceClassesPagingPage(options);
      }
    };
  }

  private async *listDeviceClassesPagingPage(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): AsyncIterableIterator<DeviceClass[]> {
    let result = await this._listDeviceClasses(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceClassesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceClassesPagingAll(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): AsyncIterableIterator<DeviceClass> {
    for await (const page of this.listDeviceClassesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  public listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): PagedAsyncIterableIterator<UpdateInfo> {
    const iter = this.listInstallableUpdatesForDeviceClassPagingAll(
      deviceClassId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listInstallableUpdatesForDeviceClassPagingPage(
          deviceClassId,
          options
        );
      }
    };
  }

  private async *listInstallableUpdatesForDeviceClassPagingPage(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): AsyncIterableIterator<UpdateInfo[]> {
    let result = await this._listInstallableUpdatesForDeviceClass(
      deviceClassId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listInstallableUpdatesForDeviceClassNext(
        deviceClassId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listInstallableUpdatesForDeviceClassPagingAll(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): AsyncIterableIterator<UpdateInfo> {
    for await (const page of this.listInstallableUpdatesForDeviceClassPagingPage(
      deviceClassId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  public listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): PagedAsyncIterableIterator<Device> {
    const iter = this.listDevicesPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDevicesPagingPage(options);
      }
    };
  }

  private async *listDevicesPagingPage(
    options?: DeviceManagementListDevicesOptionalParams
  ): AsyncIterableIterator<Device[]> {
    let result = await this._listDevices(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDevicesNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDevicesPagingAll(
    options?: DeviceManagementListDevicesOptionalParams
  ): AsyncIterableIterator<Device> {
    for await (const page of this.listDevicesPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all device groups.  The $default group will always be returned first.
   * @param options The options parameters.
   */
  public listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): PagedAsyncIterableIterator<Group> {
    const iter = this.listGroupsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listGroupsPagingPage(options);
      }
    };
  }

  private async *listGroupsPagingPage(
    options?: DeviceManagementListGroupsOptionalParams
  ): AsyncIterableIterator<Group[]> {
    let result = await this._listGroups(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listGroupsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listGroupsPagingAll(
    options?: DeviceManagementListGroupsOptionalParams
  ): AsyncIterableIterator<Group> {
    for await (const page of this.listGroupsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get the best available updates for a device group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  public listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): PagedAsyncIterableIterator<DeviceClassSubgroupUpdatableDevices> {
    const iter = this.listBestUpdatesForGroupPagingAll(groupId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listBestUpdatesForGroupPagingPage(groupId, options);
      }
    };
  }

  private async *listBestUpdatesForGroupPagingPage(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): AsyncIterableIterator<DeviceClassSubgroupUpdatableDevices[]> {
    let result = await this._listBestUpdatesForGroup(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listBestUpdatesForGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listBestUpdatesForGroupPagingAll(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): AsyncIterableIterator<DeviceClassSubgroupUpdatableDevices> {
    for await (const page of this.listBestUpdatesForGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of deployments for a device group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  public listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment> {
    const iter = this.listDeploymentsForGroupPagingAll(groupId, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeploymentsForGroupPagingPage(groupId, options);
      }
    };
  }

  private async *listDeploymentsForGroupPagingPage(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): AsyncIterableIterator<Deployment[]> {
    let result = await this._listDeploymentsForGroup(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeploymentsForGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeploymentsForGroupPagingAll(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): AsyncIterableIterator<Deployment> {
    for await (const page of this.listDeploymentsForGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get the device class subgroups for the group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  public listDeviceClassSubgroupsForGroup(
    groupId: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams
  ): PagedAsyncIterableIterator<DeviceClassSubgroup> {
    const iter = this.listDeviceClassSubgroupsForGroupPagingAll(
      groupId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceClassSubgroupsForGroupPagingPage(
          groupId,
          options
        );
      }
    };
  }

  private async *listDeviceClassSubgroupsForGroupPagingPage(
    groupId: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams
  ): AsyncIterableIterator<DeviceClassSubgroup[]> {
    let result = await this._listDeviceClassSubgroupsForGroup(groupId, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceClassSubgroupsForGroupNext(
        groupId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceClassSubgroupsForGroupPagingAll(
    groupId: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams
  ): AsyncIterableIterator<DeviceClassSubgroup> {
    for await (const page of this.listDeviceClassSubgroupsForGroupPagingPage(
      groupId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of deployments for a device class subgroup.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  public listDeploymentsForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams
  ): PagedAsyncIterableIterator<Deployment> {
    const iter = this.listDeploymentsForDeviceClassSubgroupPagingAll(
      groupId,
      deviceClassId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeploymentsForDeviceClassSubgroupPagingPage(
          groupId,
          deviceClassId,
          options
        );
      }
    };
  }

  private async *listDeploymentsForDeviceClassSubgroupPagingPage(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams
  ): AsyncIterableIterator<Deployment[]> {
    let result = await this._listDeploymentsForDeviceClassSubgroup(
      groupId,
      deviceClassId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeploymentsForDeviceClassSubgroupNext(
        groupId,
        deviceClassId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeploymentsForDeviceClassSubgroupPagingAll(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams
  ): AsyncIterableIterator<Deployment> {
    for await (const page of this.listDeploymentsForDeviceClassSubgroupPagingPage(
      groupId,
      deviceClassId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  public listDeviceStatesForDeviceClassSubgroupDeployment(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams
  ): PagedAsyncIterableIterator<DeploymentDeviceState> {
    const iter = this.listDeviceStatesForDeviceClassSubgroupDeploymentPagingAll(
      groupId,
      deviceClassId,
      deploymentId,
      options
    );
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceStatesForDeviceClassSubgroupDeploymentPagingPage(
          groupId,
          deviceClassId,
          deploymentId,
          options
        );
      }
    };
  }

  private async *listDeviceStatesForDeviceClassSubgroupDeploymentPagingPage(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState[]> {
    let result = await this._listDeviceStatesForDeviceClassSubgroupDeployment(
      groupId,
      deviceClassId,
      deploymentId,
      options
    );
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceStatesForDeviceClassSubgroupDeploymentNext(
        groupId,
        deviceClassId,
        deploymentId,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceStatesForDeviceClassSubgroupDeploymentPagingAll(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams
  ): AsyncIterableIterator<DeploymentDeviceState> {
    for await (const page of this.listDeviceStatesForDeviceClassSubgroupDeploymentPagingPage(
      groupId,
      deviceClassId,
      deploymentId,
      options
    )) {
      yield* page;
    }
  }

  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  public listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): PagedAsyncIterableIterator<DeviceOperation> {
    const iter = this.listOperationsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listOperationsPagingPage(options);
      }
    };
  }

  private async *listOperationsPagingPage(
    options?: DeviceManagementListOperationsOptionalParams
  ): AsyncIterableIterator<DeviceOperation[]> {
    let result = await this._listOperations(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listOperationsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listOperationsPagingAll(
    options?: DeviceManagementListOperationsOptionalParams
  ): AsyncIterableIterator<DeviceOperation> {
    for await (const page of this.listOperationsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get all device diagnostics log collections
   * @param options The options parameters.
   */
  public listLogCollections(
    options?: DeviceManagementListLogCollectionsOptionalParams
  ): PagedAsyncIterableIterator<LogCollection> {
    const iter = this.listLogCollectionsPagingAll(options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listLogCollectionsPagingPage(options);
      }
    };
  }

  private async *listLogCollectionsPagingPage(
    options?: DeviceManagementListLogCollectionsOptionalParams
  ): AsyncIterableIterator<LogCollection[]> {
    let result = await this._listLogCollections(options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listLogCollectionsNext(continuationToken, options);
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listLogCollectionsPagingAll(
    options?: DeviceManagementListLogCollectionsOptionalParams
  ): AsyncIterableIterator<LogCollection> {
    for await (const page of this.listLogCollectionsPagingPage(options)) {
      yield* page;
    }
  }

  /**
   * Get list of device health
   * @param filter Filter list by specified properties.
   * @param options The options parameters.
   */
  public listDeviceHealth(
    filter: string,
    options?: DeviceManagementListDeviceHealthOptionalParams
  ): PagedAsyncIterableIterator<DeviceHealth> {
    const iter = this.listDeviceHealthPagingAll(filter, options);
    return {
      next() {
        return iter.next();
      },
      [Symbol.asyncIterator]() {
        return this;
      },
      byPage: () => {
        return this.listDeviceHealthPagingPage(filter, options);
      }
    };
  }

  private async *listDeviceHealthPagingPage(
    filter: string,
    options?: DeviceManagementListDeviceHealthOptionalParams
  ): AsyncIterableIterator<DeviceHealth[]> {
    let result = await this._listDeviceHealth(filter, options);
    yield result.value || [];
    let continuationToken = result.nextLink;
    while (continuationToken) {
      result = await this._listDeviceHealthNext(
        filter,
        continuationToken,
        options
      );
      continuationToken = result.nextLink;
      yield result.value || [];
    }
  }

  private async *listDeviceHealthPagingAll(
    filter: string,
    options?: DeviceManagementListDeviceHealthOptionalParams
  ): AsyncIterableIterator<DeviceHealth> {
    for await (const page of this.listDeviceHealthPagingPage(filter, options)) {
      yield* page;
    }
  }

  /**
   * Gets a list of all device classes (unique combinations of device manufacturer and model) for all
   * devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private _listDeviceClasses(
    options?: DeviceManagementListDeviceClassesOptionalParams
  ): Promise<DeviceManagementListDeviceClassesResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDeviceClassesOperationSpec
    );
  }

  /**
   * Gets the properties of a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  getDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementGetDeviceClassOptionalParams
  ): Promise<DeviceManagementGetDeviceClassResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, options },
      getDeviceClassOperationSpec
    );
  }

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
  ): Promise<DeviceManagementUpdateDeviceClassResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, deviceClassPatch, options },
      updateDeviceClassOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { deviceClassId, options },
      deleteDeviceClassOperationSpec
    );
  }

  /**
   * Gets a list of installable updates for a device class.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  private _listInstallableUpdatesForDeviceClass(
    deviceClassId: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassOptionalParams
  ): Promise<DeviceManagementListInstallableUpdatesForDeviceClassResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, options },
      listInstallableUpdatesForDeviceClassOperationSpec
    );
  }

  /**
   * Gets a list of devices connected to Device Update for IoT Hub.
   * @param options The options parameters.
   */
  private _listDevices(
    options?: DeviceManagementListDevicesOptionalParams
  ): Promise<DeviceManagementListDevicesResponse> {
    return this.client.sendOperationRequest(
      { options },
      listDevicesOperationSpec
    );
  }

  /**
   * Import existing devices from IoT Hub. This is a long-running-operation; use Operation-Location
   * response header value to check for operation status.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  async beginImportDevices(
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<
    PollerLike<
      PollOperationState<DeviceManagementImportDevicesResponse>,
      DeviceManagementImportDevicesResponse
    >
  > {
    const directSendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ): Promise<DeviceManagementImportDevicesResponse> => {
      return this.client.sendOperationRequest(args, spec);
    };
    const sendOperation = async (
      args: coreClient.OperationArguments,
      spec: coreClient.OperationSpec
    ) => {
      let currentRawResponse:
        | coreClient.FullOperationResponse
        | undefined = undefined;
      const providedCallback = args.options?.onResponse;
      const callback: coreClient.RawResponseCallback = (
        rawResponse: coreClient.FullOperationResponse,
        flatResponse: unknown
      ) => {
        currentRawResponse = rawResponse;
        providedCallback?.(rawResponse, flatResponse);
      };
      const updatedArgs = {
        ...args,
        options: {
          ...args.options,
          onResponse: callback
        }
      };
      const flatResponse = await directSendOperation(updatedArgs, spec);
      return {
        flatResponse,
        rawResponse: {
          statusCode: currentRawResponse!.status,
          body: currentRawResponse!.parsedBody,
          headers: currentRawResponse!.headers.toJSON()
        }
      };
    };

    const lro = new LroImpl(
      sendOperation,
      { importType, options },
      importDevicesOperationSpec
    );
    const poller = new LroEngine(lro, {
      resumeFrom: options?.resumeFrom,
      intervalInMs: options?.updateIntervalInMs
    });
    await poller.poll();
    return poller;
  }

  /**
   * Import existing devices from IoT Hub. This is a long-running-operation; use Operation-Location
   * response header value to check for operation status.
   * @param importType The types of devices to import.
   * @param options The options parameters.
   */
  async beginImportDevicesAndWait(
    importType: ImportType,
    options?: DeviceManagementImportDevicesOptionalParams
  ): Promise<DeviceManagementImportDevicesResponse> {
    const poller = await this.beginImportDevices(importType, options);
    return poller.pollUntilDone();
  }

  /**
   * Gets the device properties and latest deployment status for a device connected to Device Update for
   * IoT Hub.
   * @param deviceId Device identifier in Azure IoT Hub.
   * @param options The options parameters.
   */
  getDevice(
    deviceId: string,
    options?: DeviceManagementGetDeviceOptionalParams
  ): Promise<DeviceManagementGetDeviceResponse> {
    return this.client.sendOperationRequest(
      { deviceId, options },
      getDeviceOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeviceModuleResponse> {
    return this.client.sendOperationRequest(
      { deviceId, moduleId, options },
      getDeviceModuleOperationSpec
    );
  }

  /**
   * Gets the breakdown of how many devices are on their latest update, have new updates available, or
   * are in progress receiving new updates.
   * @param options The options parameters.
   */
  getUpdateCompliance(
    options?: DeviceManagementGetUpdateComplianceOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceResponse> {
    return this.client.sendOperationRequest(
      { options },
      getUpdateComplianceOperationSpec
    );
  }

  /**
   * Gets a list of all device groups.  The $default group will always be returned first.
   * @param options The options parameters.
   */
  private _listGroups(
    options?: DeviceManagementListGroupsOptionalParams
  ): Promise<DeviceManagementListGroupsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listGroupsOperationSpec
    );
  }

  /**
   * Gets the device group properties.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getGroup(
    groupId: string,
    options?: DeviceManagementGetGroupOptionalParams
  ): Promise<DeviceManagementGetGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getGroupOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, options },
      deleteGroupOperationSpec
    );
  }

  /**
   * Get device group update compliance information such as how many devices are on their latest update,
   * how many need new updates, and how many are in progress on receiving a new update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  getUpdateComplianceForGroup(
    groupId: string,
    options?: DeviceManagementGetUpdateComplianceForGroupOptionalParams
  ): Promise<DeviceManagementGetUpdateComplianceForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      getUpdateComplianceForGroupOperationSpec
    );
  }

  /**
   * Get the best available updates for a device group and a count of how many devices need each update.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  private _listBestUpdatesForGroup(
    groupId: string,
    options?: DeviceManagementListBestUpdatesForGroupOptionalParams
  ): Promise<DeviceManagementListBestUpdatesForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listBestUpdatesForGroupOperationSpec
    );
  }

  /**
   * Gets a list of deployments for a device group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  private _listDeploymentsForGroup(
    groupId: string,
    options?: DeviceManagementListDeploymentsForGroupOptionalParams
  ): Promise<DeviceManagementListDeploymentsForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listDeploymentsForGroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      getDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementCreateOrUpdateDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, deployment, options },
      createOrUpdateDeploymentOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      deleteDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeploymentStatusResponse> {
    return this.client.sendOperationRequest(
      { groupId, deploymentId, options },
      getDeploymentStatusOperationSpec
    );
  }

  /**
   * Get the device class subgroups for the group.
   * @param groupId Group identity.
   * @param options The options parameters.
   */
  private _listDeviceClassSubgroupsForGroup(
    groupId: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupOptionalParams
  ): Promise<DeviceManagementListDeviceClassSubgroupsForGroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, options },
      listDeviceClassSubgroupsForGroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeviceClassSubgroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, options },
      getDeviceClassSubgroupOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, options },
      deleteDeviceClassSubgroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeviceClassSubgroupUpdateComplianceResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, options },
      getDeviceClassSubgroupUpdateComplianceOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetBestUpdatesForDeviceClassSubgroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, options },
      getBestUpdatesForDeviceClassSubgroupOperationSpec
    );
  }

  /**
   * Gets a list of deployments for a device class subgroup.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param options The options parameters.
   */
  private _listDeploymentsForDeviceClassSubgroup(
    groupId: string,
    deviceClassId: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupOptionalParams
  ): Promise<DeviceManagementListDeploymentsForDeviceClassSubgroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, options },
      listDeploymentsForDeviceClassSubgroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeploymentForDeviceClassSubgroupResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      getDeploymentForDeviceClassSubgroupOperationSpec
    );
  }

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
  ): Promise<void> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      deleteDeploymentForDeviceClassSubgroupOperationSpec
    );
  }

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
  ): Promise<DeviceManagementStopDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      stopDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementRetryDeploymentResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      retryDeploymentOperationSpec
    );
  }

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
  ): Promise<DeviceManagementGetDeviceClassSubgroupDeploymentStatusResponse> {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      getDeviceClassSubgroupDeploymentStatusOperationSpec
    );
  }

  /**
   * Gets a list of devices in a deployment along with their state. Useful for getting a list of failed
   * devices.
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param options The options parameters.
   */
  private _listDeviceStatesForDeviceClassSubgroupDeployment(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentOptionalParams
  ): Promise<
    DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentResponse
  > {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, options },
      listDeviceStatesForDeviceClassSubgroupDeploymentOperationSpec
    );
  }

  /**
   * Retrieve operation status.
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getOperation(
    operationId: string,
    options?: DeviceManagementGetOperationOptionalParams
  ): Promise<DeviceManagementGetOperationResponse> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getOperationOperationSpec
    );
  }

  /**
   * Get a list of all device import operations. Completed operations are kept for 7 days before
   * auto-deleted.
   * @param options The options parameters.
   */
  private _listOperations(
    options?: DeviceManagementListOperationsOptionalParams
  ): Promise<DeviceManagementListOperationsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listOperationsOperationSpec
    );
  }

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
  ): Promise<DeviceManagementStartLogCollectionResponse> {
    return this.client.sendOperationRequest(
      { logCollectionId, logCollection, options },
      startLogCollectionOperationSpec
    );
  }

  /**
   * Get the device diagnostics log collection
   * @param logCollectionId Log collection identifier.
   * @param options The options parameters.
   */
  getLogCollection(
    logCollectionId: string,
    options?: DeviceManagementGetLogCollectionOptionalParams
  ): Promise<DeviceManagementGetLogCollectionResponse> {
    return this.client.sendOperationRequest(
      { logCollectionId, options },
      getLogCollectionOperationSpec
    );
  }

  /**
   * Get all device diagnostics log collections
   * @param options The options parameters.
   */
  private _listLogCollections(
    options?: DeviceManagementListLogCollectionsOptionalParams
  ): Promise<DeviceManagementListLogCollectionsResponse> {
    return this.client.sendOperationRequest(
      { options },
      listLogCollectionsOperationSpec
    );
  }

  /**
   * Get log collection with detailed status
   * @param operationId Operation identifier.
   * @param options The options parameters.
   */
  getLogCollectionDetailedStatus(
    operationId: string,
    options?: DeviceManagementGetLogCollectionDetailedStatusOptionalParams
  ): Promise<DeviceManagementGetLogCollectionDetailedStatusResponse> {
    return this.client.sendOperationRequest(
      { operationId, options },
      getLogCollectionDetailedStatusOperationSpec
    );
  }

  /**
   * Get list of device health
   * @param filter Filter list by specified properties.
   * @param options The options parameters.
   */
  private _listDeviceHealth(
    filter: string,
    options?: DeviceManagementListDeviceHealthOptionalParams
  ): Promise<DeviceManagementListDeviceHealthResponse> {
    return this.client.sendOperationRequest(
      { filter, options },
      listDeviceHealthOperationSpec
    );
  }

  /**
   * ListDeviceClassesNext
   * @param nextLink The nextLink from the previous successful call to the ListDeviceClasses method.
   * @param options The options parameters.
   */
  private _listDeviceClassesNext(
    nextLink: string,
    options?: DeviceManagementListDeviceClassesNextOptionalParams
  ): Promise<DeviceManagementListDeviceClassesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDeviceClassesNextOperationSpec
    );
  }

  /**
   * ListInstallableUpdatesForDeviceClassNext
   * @param deviceClassId Device class identifier.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListInstallableUpdatesForDeviceClass method.
   * @param options The options parameters.
   */
  private _listInstallableUpdatesForDeviceClassNext(
    deviceClassId: string,
    nextLink: string,
    options?: DeviceManagementListInstallableUpdatesForDeviceClassNextOptionalParams
  ): Promise<DeviceManagementListInstallableUpdatesForDeviceClassNextResponse> {
    return this.client.sendOperationRequest(
      { deviceClassId, nextLink, options },
      listInstallableUpdatesForDeviceClassNextOperationSpec
    );
  }

  /**
   * ListDevicesNext
   * @param nextLink The nextLink from the previous successful call to the ListDevices method.
   * @param options The options parameters.
   */
  private _listDevicesNext(
    nextLink: string,
    options?: DeviceManagementListDevicesNextOptionalParams
  ): Promise<DeviceManagementListDevicesNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listDevicesNextOperationSpec
    );
  }

  /**
   * ListGroupsNext
   * @param nextLink The nextLink from the previous successful call to the ListGroups method.
   * @param options The options parameters.
   */
  private _listGroupsNext(
    nextLink: string,
    options?: DeviceManagementListGroupsNextOptionalParams
  ): Promise<DeviceManagementListGroupsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listGroupsNextOperationSpec
    );
  }

  /**
   * ListBestUpdatesForGroupNext
   * @param groupId Group identity.
   * @param nextLink The nextLink from the previous successful call to the ListBestUpdatesForGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listBestUpdatesForGroupNext(
    groupId: string,
    nextLink: string,
    options?: DeviceManagementListBestUpdatesForGroupNextOptionalParams
  ): Promise<DeviceManagementListBestUpdatesForGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listBestUpdatesForGroupNextOperationSpec
    );
  }

  /**
   * ListDeploymentsForGroupNext
   * @param groupId Group identity.
   * @param nextLink The nextLink from the previous successful call to the ListDeploymentsForGroup
   *                 method.
   * @param options The options parameters.
   */
  private _listDeploymentsForGroupNext(
    groupId: string,
    nextLink: string,
    options?: DeviceManagementListDeploymentsForGroupNextOptionalParams
  ): Promise<DeviceManagementListDeploymentsForGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listDeploymentsForGroupNextOperationSpec
    );
  }

  /**
   * ListDeviceClassSubgroupsForGroupNext
   * @param groupId Group identity.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListDeviceClassSubgroupsForGroup method.
   * @param options The options parameters.
   */
  private _listDeviceClassSubgroupsForGroupNext(
    groupId: string,
    nextLink: string,
    options?: DeviceManagementListDeviceClassSubgroupsForGroupNextOptionalParams
  ): Promise<DeviceManagementListDeviceClassSubgroupsForGroupNextResponse> {
    return this.client.sendOperationRequest(
      { groupId, nextLink, options },
      listDeviceClassSubgroupsForGroupNextOperationSpec
    );
  }

  /**
   * ListDeploymentsForDeviceClassSubgroupNext
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListDeploymentsForDeviceClassSubgroup method.
   * @param options The options parameters.
   */
  private _listDeploymentsForDeviceClassSubgroupNext(
    groupId: string,
    deviceClassId: string,
    nextLink: string,
    options?: DeviceManagementListDeploymentsForDeviceClassSubgroupNextOptionalParams
  ): Promise<
    DeviceManagementListDeploymentsForDeviceClassSubgroupNextResponse
  > {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, nextLink, options },
      listDeploymentsForDeviceClassSubgroupNextOperationSpec
    );
  }

  /**
   * ListDeviceStatesForDeviceClassSubgroupDeploymentNext
   * @param groupId Group identity.
   * @param deviceClassId Device class identifier.
   * @param deploymentId Deployment identifier.
   * @param nextLink The nextLink from the previous successful call to the
   *                 ListDeviceStatesForDeviceClassSubgroupDeployment method.
   * @param options The options parameters.
   */
  private _listDeviceStatesForDeviceClassSubgroupDeploymentNext(
    groupId: string,
    deviceClassId: string,
    deploymentId: string,
    nextLink: string,
    options?: DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentNextOptionalParams
  ): Promise<
    DeviceManagementListDeviceStatesForDeviceClassSubgroupDeploymentNextResponse
  > {
    return this.client.sendOperationRequest(
      { groupId, deviceClassId, deploymentId, nextLink, options },
      listDeviceStatesForDeviceClassSubgroupDeploymentNextOperationSpec
    );
  }

  /**
   * ListOperationsNext
   * @param nextLink The nextLink from the previous successful call to the ListOperations method.
   * @param options The options parameters.
   */
  private _listOperationsNext(
    nextLink: string,
    options?: DeviceManagementListOperationsNextOptionalParams
  ): Promise<DeviceManagementListOperationsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listOperationsNextOperationSpec
    );
  }

  /**
   * ListLogCollectionsNext
   * @param nextLink The nextLink from the previous successful call to the ListLogCollections method.
   * @param options The options parameters.
   */
  private _listLogCollectionsNext(
    nextLink: string,
    options?: DeviceManagementListLogCollectionsNextOptionalParams
  ): Promise<DeviceManagementListLogCollectionsNextResponse> {
    return this.client.sendOperationRequest(
      { nextLink, options },
      listLogCollectionsNextOperationSpec
    );
  }

  /**
   * ListDeviceHealthNext
   * @param filter Filter list by specified properties.
   * @param nextLink The nextLink from the previous successful call to the ListDeviceHealth method.
   * @param options The options parameters.
   */
  private _listDeviceHealthNext(
    filter: string,
    nextLink: string,
    options?: DeviceManagementListDeviceHealthNextOptionalParams
  ): Promise<DeviceManagementListDeviceHealthNextResponse> {
    return this.client.sendOperationRequest(
      { filter, nextLink, options },
      listDeviceHealthNextOperationSpec
    );
  }
}
// Operation Specifications
const serializer = coreClient.createSerializer(Mappers, /* isXml */ false);

const listDeviceClassesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/deviceClasses",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceClassOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClass
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const updateDeviceClassOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}",
  httpMethod: "PATCH",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClass
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.deviceClassPatch,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType1],
  mediaType: "json",
  serializer
};
const deleteDeviceClassOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInstallableUpdatesForDeviceClassOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/deviceClasses/{deviceClassId}/installableUpdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateInfoList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDevicesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/devices",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const importDevicesOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/devices:import",
  httpMethod: "POST",
  responses: {
    200: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    201: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    202: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    204: {
      headersMapper: Mappers.DeviceManagementImportDevicesHeaders
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.importType,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getDeviceOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/devices/{deviceId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceModuleOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/devices/{deviceId}/modules/{moduleId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Device
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceId,
    Parameters.moduleId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getUpdateComplianceOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/updateCompliance",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateCompliance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listGroupsOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/groups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/groups/{groupId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Group
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/groups/{groupId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getUpdateComplianceForGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/updateCompliance",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateCompliance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBestUpdatesForGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/bestUpdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupUpdatableDevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForGroupOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const createOrUpdateDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "PUT",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.deployment,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const deleteDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeploymentStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deployments/{deploymentId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceClassSubgroupsForGroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroup
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceClassSubgroupUpdateComplianceOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/updateCompliance",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateCompliance
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getBestUpdatesForDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/bestUpdates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupUpdatableDevices
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeploymentForDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const deleteDeploymentForDeviceClassSubgroupOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}",
  httpMethod: "DELETE",
  responses: {
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const stopDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}:cancel",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const retryDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}:retry",
  httpMethod: "POST",
  responses: {
    200: {
      bodyMapper: Mappers.Deployment
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getDeviceClassSubgroupDeploymentStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}/status",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupDeploymentStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceStatesForDeviceClassSubgroupDeploymentOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/groups/{groupId}/deviceClassSubgroups/{deviceClassId}/deployments/{deploymentId}/devicestates",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDeviceStatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const getOperationOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/operations/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperation,
      headersMapper: Mappers.DeviceManagementGetOperationHeaders
    },
    304: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept, Parameters.ifNoneMatch],
  serializer
};
const listOperationsOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/operations",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperationsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const startLogCollectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}",
  httpMethod: "PUT",
  responses: {
    201: {
      bodyMapper: Mappers.LogCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  requestBody: Parameters.logCollection,
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.logCollectionId
  ],
  headerParameters: [Parameters.accept, Parameters.contentType],
  mediaType: "json",
  serializer
};
const getLogCollectionOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollection
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.logCollectionId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogCollectionsOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const getLogCollectionDetailedStatusOperationSpec: coreClient.OperationSpec = {
  path:
    "/deviceUpdate/{instanceId}/management/deviceDiagnostics/logCollections/{operationId}/detailedStatus",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionOperationDetailedStatus
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.operationId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceHealthOperationSpec: coreClient.OperationSpec = {
  path: "/deviceUpdate/{instanceId}/management/deviceDiagnostics/deviceHealth",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceHealthList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [Parameters.endpoint, Parameters.instanceId],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceClassesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listInstallableUpdatesForDeviceClassNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.UpdateInfoList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.deviceClassId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDevicesNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listGroupsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.GroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listBestUpdatesForGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupUpdatableDevicesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceClassSubgroupsForGroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceClassSubgroupsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeploymentsForDeviceClassSubgroupNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.orderBy],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.deviceClassId,
    Parameters.groupId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceStatesForDeviceClassSubgroupDeploymentNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeploymentDeviceStatesList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink,
    Parameters.deviceClassId,
    Parameters.groupId,
    Parameters.deploymentId
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listOperationsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceOperationsList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter, Parameters.top],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listLogCollectionsNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.LogCollectionList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
const listDeviceHealthNextOperationSpec: coreClient.OperationSpec = {
  path: "{nextLink}",
  httpMethod: "GET",
  responses: {
    200: {
      bodyMapper: Mappers.DeviceHealthList
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  queryParameters: [Parameters.apiVersion, Parameters.filter1],
  urlParameters: [
    Parameters.endpoint,
    Parameters.instanceId,
    Parameters.nextLink
  ],
  headerParameters: [Parameters.accept],
  serializer
};
