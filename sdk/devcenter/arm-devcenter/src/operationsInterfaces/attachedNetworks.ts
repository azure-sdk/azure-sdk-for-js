/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import { SimplePollerLike, OperationState } from "@azure/core-lro";
import {
  AttachedNetworkConnection,
  AttachedNetworksListByProjectOptionalParams,
  AttachedNetworksListByDevCenterOptionalParams,
  AttachedNetworksGetByProjectOptionalParams,
  AttachedNetworksGetByProjectResponse,
  AttachedNetworksGetByDevCenterOptionalParams,
  AttachedNetworksGetByDevCenterResponse,
  AttachedNetworksCreateOrUpdateOptionalParams,
  AttachedNetworksCreateOrUpdateResponse,
  AttachedNetworksDeleteOptionalParams,
  AttachedNetworksDeleteResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AttachedNetworks. */
export interface AttachedNetworks {
  /**
   * Lists the attached NetworkConnections for a Project.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param options The options parameters.
   */
  listByProject(
    resourceGroupName: string,
    projectName: string,
    options?: AttachedNetworksListByProjectOptionalParams,
  ): PagedAsyncIterableIterator<AttachedNetworkConnection>;
  /**
   * Lists the attached NetworkConnections for a DevCenter.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param options The options parameters.
   */
  listByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    options?: AttachedNetworksListByDevCenterOptionalParams,
  ): PagedAsyncIterableIterator<AttachedNetworkConnection>;
  /**
   * Gets an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  getByProject(
    resourceGroupName: string,
    projectName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksGetByProjectOptionalParams,
  ): Promise<AttachedNetworksGetByProjectResponse>;
  /**
   * Gets an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  getByDevCenter(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksGetByDevCenterOptionalParams,
  ): Promise<AttachedNetworksGetByDevCenterResponse>;
  /**
   * Creates or updates an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param body Represents an attached NetworkConnection.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    body: AttachedNetworkConnection,
    options?: AttachedNetworksCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AttachedNetworksCreateOrUpdateResponse>,
      AttachedNetworksCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates an attached NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param body Represents an attached NetworkConnection.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    body: AttachedNetworkConnection,
    options?: AttachedNetworksCreateOrUpdateOptionalParams,
  ): Promise<AttachedNetworksCreateOrUpdateResponse>;
  /**
   * Un-attach a NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<AttachedNetworksDeleteResponse>,
      AttachedNetworksDeleteResponse
    >
  >;
  /**
   * Un-attach a NetworkConnection.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param devCenterName The name of the devcenter.
   * @param attachedNetworkConnectionName The name of the attached NetworkConnection.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    devCenterName: string,
    attachedNetworkConnectionName: string,
    options?: AttachedNetworksDeleteOptionalParams,
  ): Promise<AttachedNetworksDeleteResponse>;
}
