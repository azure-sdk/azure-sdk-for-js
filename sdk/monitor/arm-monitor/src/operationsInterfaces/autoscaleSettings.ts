/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AutoscaleSettingResource,
  AutoscaleSettingsListByResourceGroupOptionalParams,
  AutoscaleSettingsListBySubscriptionOptionalParams,
  AutoscaleSettingsCreateOrUpdateOptionalParams,
  AutoscaleSettingsCreateOrUpdateResponse,
  AutoscaleSettingsDeleteOptionalParams,
  AutoscaleSettingsGetOptionalParams,
  AutoscaleSettingsGetResponse,
  AutoscaleSettingResourcePatch,
  AutoscaleSettingsUpdateOptionalParams,
  AutoscaleSettingsUpdateResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AutoscaleSettings. */
export interface AutoscaleSettings {
  /**
   * Lists the autoscale settings for a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The options parameters.
   */
  listByResourceGroup(
    resourceGroupName: string,
    options?: AutoscaleSettingsListByResourceGroupOptionalParams,
  ): PagedAsyncIterableIterator<AutoscaleSettingResource>;
  /**
   * Lists the autoscale settings for a subscription
   * @param options The options parameters.
   */
  listBySubscription(
    options?: AutoscaleSettingsListBySubscriptionOptionalParams,
  ): PagedAsyncIterableIterator<AutoscaleSettingResource>;
  /**
   * Creates or updates an autoscale setting.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param parameters Parameters supplied to the operation.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    autoscaleSettingName: string,
    parameters: AutoscaleSettingResource,
    options?: AutoscaleSettingsCreateOrUpdateOptionalParams,
  ): Promise<AutoscaleSettingsCreateOrUpdateResponse>;
  /**
   * Deletes and autoscale setting
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    autoscaleSettingName: string,
    options?: AutoscaleSettingsDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Gets an autoscale setting
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    autoscaleSettingName: string,
    options?: AutoscaleSettingsGetOptionalParams,
  ): Promise<AutoscaleSettingsGetResponse>;
  /**
   * Updates an existing AutoscaleSettingsResource. To update other fields use the CreateOrUpdate method.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param autoscaleSettingName The autoscale setting name.
   * @param autoscaleSettingResource Parameters supplied to the operation.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    autoscaleSettingName: string,
    autoscaleSettingResource: AutoscaleSettingResourcePatch,
    options?: AutoscaleSettingsUpdateOptionalParams,
  ): Promise<AutoscaleSettingsUpdateResponse>;
}
