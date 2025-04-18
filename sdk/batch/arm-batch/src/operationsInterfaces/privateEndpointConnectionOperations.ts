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
  PrivateEndpointConnection,
  PrivateEndpointConnectionListByBatchAccountOptionalParams,
  PrivateEndpointConnectionGetOptionalParams,
  PrivateEndpointConnectionGetResponse,
  PrivateEndpointConnectionUpdateOptionalParams,
  PrivateEndpointConnectionUpdateResponse,
  PrivateEndpointConnectionDeleteOptionalParams,
  PrivateEndpointConnectionDeleteResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a PrivateEndpointConnectionOperations. */
export interface PrivateEndpointConnectionOperations {
  /**
   * Lists all of the private endpoint connections in the specified account.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param options The options parameters.
   */
  listByBatchAccount(
    resourceGroupName: string,
    accountName: string,
    options?: PrivateEndpointConnectionListByBatchAccountOptionalParams,
  ): PagedAsyncIterableIterator<PrivateEndpointConnection>;
  /**
   * Gets information about the specified private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   *                                      within the account.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionGetOptionalParams,
  ): Promise<PrivateEndpointConnectionGetResponse>;
  /**
   * Updates the properties of an existing private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   *                                      within the account.
   * @param parameters PrivateEndpointConnection properties that should be updated. Properties that are
   *                   supplied will be updated, any property not supplied will be unchanged.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionUpdateResponse>,
      PrivateEndpointConnectionUpdateResponse
    >
  >;
  /**
   * Updates the properties of an existing private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   *                                      within the account.
   * @param parameters PrivateEndpointConnection properties that should be updated. Properties that are
   *                   supplied will be updated, any property not supplied will be unchanged.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    parameters: PrivateEndpointConnection,
    options?: PrivateEndpointConnectionUpdateOptionalParams,
  ): Promise<PrivateEndpointConnectionUpdateResponse>;
  /**
   * Deletes the specified private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   *                                      within the account.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<PrivateEndpointConnectionDeleteResponse>,
      PrivateEndpointConnectionDeleteResponse
    >
  >;
  /**
   * Deletes the specified private endpoint connection.
   * @param resourceGroupName The name of the resource group that contains the Batch account.
   * @param accountName The name of the Batch account.
   * @param privateEndpointConnectionName The private endpoint connection name. This must be unique
   *                                      within the account.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    accountName: string,
    privateEndpointConnectionName: string,
    options?: PrivateEndpointConnectionDeleteOptionalParams,
  ): Promise<PrivateEndpointConnectionDeleteResponse>;
}
