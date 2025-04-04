/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  CustomEntityStoreAssignment,
  CustomEntityStoreAssignmentsListByResourceGroupOptionalParams,
  CustomEntityStoreAssignmentsListBySubscriptionOptionalParams,
  CustomEntityStoreAssignmentsGetOptionalParams,
  CustomEntityStoreAssignmentsGetResponse,
  CustomEntityStoreAssignmentRequest,
  CustomEntityStoreAssignmentsCreateOptionalParams,
  CustomEntityStoreAssignmentsCreateResponse,
  CustomEntityStoreAssignmentsDeleteOptionalParams,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a CustomEntityStoreAssignments. */
export interface CustomEntityStoreAssignments {
  /**
   * List custom entity store assignments by a provided subscription and resource group
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: CustomEntityStoreAssignmentsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<CustomEntityStoreAssignment>;
  /**
   * List custom entity store assignments by provided subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: CustomEntityStoreAssignmentsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<CustomEntityStoreAssignment>;
  /**
   * Gets a single custom entity store assignment by name for the provided subscription and resource
   * group.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param customEntityStoreAssignmentName Name of the custom entity store assignment. Generated name is
   *                                        GUID.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    customEntityStoreAssignmentName: string,
    options?: CustomEntityStoreAssignmentsGetOptionalParams,
  ): Promise<CustomEntityStoreAssignmentsGetResponse>;
  /**
   * Creates a custom entity store assignment for the provided subscription, if not already exists.
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param customEntityStoreAssignmentName Name of the custom entity store assignment. Generated name is
   *                                        GUID.
   * @param customEntityStoreAssignmentRequestBody Custom entity store assignment body
   * @param options The options parameters.
   */
  create(
    resourceGroupName: string,
    customEntityStoreAssignmentName: string,
    customEntityStoreAssignmentRequestBody: CustomEntityStoreAssignmentRequest,
    options?: CustomEntityStoreAssignmentsCreateOptionalParams,
  ): Promise<CustomEntityStoreAssignmentsCreateResponse>;
  /**
   * Delete a custom entity store assignment by name for a provided subscription
   * @param resourceGroupName The name of the resource group within the user's subscription. The name is
   *                          case insensitive.
   * @param customEntityStoreAssignmentName Name of the custom entity store assignment. Generated name is
   *                                        GUID.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    customEntityStoreAssignmentName: string,
    options?: CustomEntityStoreAssignmentsDeleteOptionalParams,
  ): Promise<void>;
}
