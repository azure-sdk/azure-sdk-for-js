/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  IoTSecuritySolutionModel,
  IotSecuritySolutionListBySubscriptionOptionalParams,
  IotSecuritySolutionListByResourceGroupOptionalParams,
  IotSecuritySolutionGetOptionalParams,
  IotSecuritySolutionGetResponse,
  IotSecuritySolutionCreateOrUpdateOptionalParams,
  IotSecuritySolutionCreateOrUpdateResponse,
  UpdateIotSecuritySolutionData,
  IotSecuritySolutionUpdateOptionalParams,
  IotSecuritySolutionUpdateResponse,
  IotSecuritySolutionDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a IotSecuritySolution. */
export interface IotSecuritySolution {
  /**
   * Use this method to get the list of IoT Security solutions by subscription.
   * @param options The options parameters.
   */
  listBySubscription(
    options?: IotSecuritySolutionListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<IoTSecuritySolutionModel>;
  /**
   * Use this method to get the list IoT Security solutions organized by resource group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: IotSecuritySolutionListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<IoTSecuritySolutionModel>;
  /**
   * User this method to get details of a specific IoT Security solution based on solution name
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionGetOptionalParams,
  ): Promise<IotSecuritySolutionGetResponse>;
  /**
   * Use this method to create or update yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param iotSecuritySolutionData The security solution data
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    solutionName: string,
    iotSecuritySolutionData: IoTSecuritySolutionModel,
    options?: IotSecuritySolutionCreateOrUpdateOptionalParams,
  ): Promise<IotSecuritySolutionCreateOrUpdateResponse>;
  /**
   * Use this method to update existing IoT Security solution tags or user defined resources. To update
   * other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param updateIotSecuritySolutionData The security solution data
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    solutionName: string,
    updateIotSecuritySolutionData: UpdateIotSecuritySolutionData,
    options?: IotSecuritySolutionUpdateOptionalParams,
  ): Promise<IotSecuritySolutionUpdateResponse>;
  /**
   * Use this method to delete yours IoT Security solution
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param solutionName The name of the IoT Security solution.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    solutionName: string,
    options?: IotSecuritySolutionDeleteOptionalParams,
  ): Promise<void>;
}
