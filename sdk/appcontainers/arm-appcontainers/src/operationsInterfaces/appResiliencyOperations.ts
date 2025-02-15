/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  AppResiliency,
  AppResiliencyListOptionalParams,
  AppResiliencyCreateOrUpdateOptionalParams,
  AppResiliencyCreateOrUpdateResponse,
  AppResiliencyUpdateOptionalParams,
  AppResiliencyUpdateResponse,
  AppResiliencyDeleteOptionalParams,
  AppResiliencyGetOptionalParams,
  AppResiliencyGetResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a AppResiliencyOperations. */
export interface AppResiliencyOperations {
  /**
   * List container app resiliency policies.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Container App.
   * @param options The options parameters.
   */
  list(
    resourceGroupName: string,
    appName: string,
    options?: AppResiliencyListOptionalParams,
  ): PagedAsyncIterableIterator<AppResiliency>;
  /**
   * Create or update container app resiliency policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Container App.
   * @param name Name of the resiliency policy.
   * @param resiliencyEnvelope The resiliency policy to create or update.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    appName: string,
    name: string,
    resiliencyEnvelope: AppResiliency,
    options?: AppResiliencyCreateOrUpdateOptionalParams,
  ): Promise<AppResiliencyCreateOrUpdateResponse>;
  /**
   * Update container app resiliency policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Container App.
   * @param name Name of the resiliency policy.
   * @param resiliencyEnvelope The resiliency policy to update.
   * @param options The options parameters.
   */
  update(
    resourceGroupName: string,
    appName: string,
    name: string,
    resiliencyEnvelope: AppResiliency,
    options?: AppResiliencyUpdateOptionalParams,
  ): Promise<AppResiliencyUpdateResponse>;
  /**
   * Delete container app resiliency policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Container App.
   * @param name Name of the resiliency policy.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    appName: string,
    name: string,
    options?: AppResiliencyDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Get container app resiliency policy.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param appName Name of the Container App.
   * @param name Name of the resiliency policy.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    appName: string,
    name: string,
    options?: AppResiliencyGetOptionalParams,
  ): Promise<AppResiliencyGetResponse>;
}
