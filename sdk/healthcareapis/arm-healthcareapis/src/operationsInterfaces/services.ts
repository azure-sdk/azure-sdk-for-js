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
  ServicesDescription,
  ServicesListOptionalParams,
  ServicesListByResourceGroupOptionalParams,
  ServicesGetOptionalParams,
  ServicesGetResponse,
  ServicesCreateOrUpdateOptionalParams,
  ServicesCreateOrUpdateResponse,
  ServicesPatchDescription,
  ServicesUpdateOptionalParams,
  ServicesUpdateResponse,
  ServicesDeleteOptionalParams,
  CheckNameAvailabilityParameters,
  ServicesCheckNameAvailabilityOptionalParams,
  ServicesCheckNameAvailabilityResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Services. */
export interface Services {
  /**
   * Get all the service instances in a subscription.
   * @param options The options parameters.
   */
  list(
    options?: ServicesListOptionalParams,
  ): PagedAsyncIterableIterator<ServicesDescription>;
  /**
   * Get all the service instances in a resource group.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: ServicesListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<ServicesDescription>;
  /**
   * Get the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    resourceName: string,
    options?: ServicesGetOptionalParams,
  ): Promise<ServicesGetResponse>;
  /**
   * Create or update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param serviceDescription The service instance metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    resourceName: string,
    serviceDescription: ServicesDescription,
    options?: ServicesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServicesCreateOrUpdateResponse>,
      ServicesCreateOrUpdateResponse
    >
  >;
  /**
   * Create or update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param serviceDescription The service instance metadata.
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    serviceDescription: ServicesDescription,
    options?: ServicesCreateOrUpdateOptionalParams,
  ): Promise<ServicesCreateOrUpdateResponse>;
  /**
   * Update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    resourceName: string,
    servicePatchDescription: ServicesPatchDescription,
    options?: ServicesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<ServicesUpdateResponse>,
      ServicesUpdateResponse
    >
  >;
  /**
   * Update the metadata of a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param servicePatchDescription The service instance metadata and security metadata.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    resourceName: string,
    servicePatchDescription: ServicesPatchDescription,
    options?: ServicesUpdateOptionalParams,
  ): Promise<ServicesUpdateResponse>;
  /**
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    resourceName: string,
    options?: ServicesDeleteOptionalParams,
  ): Promise<SimplePollerLike<OperationState<void>, void>>;
  /**
   * Delete a service instance.
   * @param resourceGroupName The name of the resource group that contains the service instance.
   * @param resourceName The name of the service instance.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    resourceName: string,
    options?: ServicesDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Check if a service instance name is available.
   * @param checkNameAvailabilityInputs Set the name parameter in the CheckNameAvailabilityParameters
   *                                    structure to the name of the service instance to check.
   * @param options The options parameters.
   */
  checkNameAvailability(
    checkNameAvailabilityInputs: CheckNameAvailabilityParameters,
    options?: ServicesCheckNameAvailabilityOptionalParams,
  ): Promise<ServicesCheckNameAvailabilityResponse>;
}
