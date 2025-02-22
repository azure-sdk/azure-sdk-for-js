/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { PagedAsyncIterableIterator } from "@azure/core-paging";
import {
  ChangeDataCaptureResource,
  ChangeDataCaptureListByFactoryOptionalParams,
  ChangeDataCaptureCreateOrUpdateOptionalParams,
  ChangeDataCaptureCreateOrUpdateResponse,
  ChangeDataCaptureGetOptionalParams,
  ChangeDataCaptureGetResponse,
  ChangeDataCaptureDeleteOptionalParams,
  ChangeDataCaptureStartOptionalParams,
  ChangeDataCaptureStopOptionalParams,
  ChangeDataCaptureStatusOptionalParams,
  ChangeDataCaptureStatusResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a ChangeDataCapture. */
export interface ChangeDataCapture {
  /**
   * Lists all resources of type change data capture.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param options The options parameters.
   */
  listByFactory(
    resourceGroupName: string,
    factoryName: string,
    options?: ChangeDataCaptureListByFactoryOptionalParams,
  ): PagedAsyncIterableIterator<ChangeDataCaptureResource>;
  /**
   * Creates or updates a change data capture resource.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param changeDataCapture Change data capture resource definition.
   * @param options The options parameters.
   */
  createOrUpdate(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    changeDataCapture: ChangeDataCaptureResource,
    options?: ChangeDataCaptureCreateOrUpdateOptionalParams,
  ): Promise<ChangeDataCaptureCreateOrUpdateResponse>;
  /**
   * Gets a change data capture.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    options?: ChangeDataCaptureGetOptionalParams,
  ): Promise<ChangeDataCaptureGetResponse>;
  /**
   * Deletes a change data capture.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param options The options parameters.
   */
  delete(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    options?: ChangeDataCaptureDeleteOptionalParams,
  ): Promise<void>;
  /**
   * Starts a change data capture.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param options The options parameters.
   */
  start(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    options?: ChangeDataCaptureStartOptionalParams,
  ): Promise<void>;
  /**
   * Stops a change data capture.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param options The options parameters.
   */
  stop(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    options?: ChangeDataCaptureStopOptionalParams,
  ): Promise<void>;
  /**
   * Gets the current status for the change data capture resource.
   * @param resourceGroupName The resource group name.
   * @param factoryName The factory name.
   * @param changeDataCaptureName The change data capture name.
   * @param options The options parameters.
   */
  status(
    resourceGroupName: string,
    factoryName: string,
    changeDataCaptureName: string,
    options?: ChangeDataCaptureStatusOptionalParams,
  ): Promise<ChangeDataCaptureStatusResponse>;
}
