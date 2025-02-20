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
  Schedule,
  SchedulesListByPoolOptionalParams,
  SchedulesGetOptionalParams,
  SchedulesGetResponse,
  SchedulesCreateOrUpdateOptionalParams,
  SchedulesCreateOrUpdateResponse,
  ScheduleUpdate,
  SchedulesUpdateOptionalParams,
  SchedulesUpdateResponse,
  SchedulesDeleteOptionalParams,
  SchedulesDeleteResponse,
} from "../models/index.js";

/// <reference lib="esnext.asynciterable" />
/** Interface representing a Schedules. */
export interface Schedules {
  /**
   * Lists schedules for a pool
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param options The options parameters.
   */
  listByPool(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    options?: SchedulesListByPoolOptionalParams,
  ): PagedAsyncIterableIterator<Schedule>;
  /**
   * Gets a schedule resource.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param options The options parameters.
   */
  get(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    options?: SchedulesGetOptionalParams,
  ): Promise<SchedulesGetResponse>;
  /**
   * Creates or updates a Schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param body Represents a scheduled task
   * @param options The options parameters.
   */
  beginCreateOrUpdate(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SchedulesCreateOrUpdateResponse>,
      SchedulesCreateOrUpdateResponse
    >
  >;
  /**
   * Creates or updates a Schedule.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param body Represents a scheduled task
   * @param options The options parameters.
   */
  beginCreateOrUpdateAndWait(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    body: Schedule,
    options?: SchedulesCreateOrUpdateOptionalParams,
  ): Promise<SchedulesCreateOrUpdateResponse>;
  /**
   * Partially updates a Scheduled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param body Represents a scheduled task.
   * @param options The options parameters.
   */
  beginUpdate(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    body: ScheduleUpdate,
    options?: SchedulesUpdateOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SchedulesUpdateResponse>,
      SchedulesUpdateResponse
    >
  >;
  /**
   * Partially updates a Scheduled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param body Represents a scheduled task.
   * @param options The options parameters.
   */
  beginUpdateAndWait(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    body: ScheduleUpdate,
    options?: SchedulesUpdateOptionalParams,
  ): Promise<SchedulesUpdateResponse>;
  /**
   * Deletes a Scheduled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param options The options parameters.
   */
  beginDelete(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams,
  ): Promise<
    SimplePollerLike<
      OperationState<SchedulesDeleteResponse>,
      SchedulesDeleteResponse
    >
  >;
  /**
   * Deletes a Scheduled.
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param projectName The name of the project.
   * @param poolName Name of the pool.
   * @param scheduleName The name of the schedule that uniquely identifies it.
   * @param options The options parameters.
   */
  beginDeleteAndWait(
    resourceGroupName: string,
    projectName: string,
    poolName: string,
    scheduleName: string,
    options?: SchedulesDeleteOptionalParams,
  ): Promise<SchedulesDeleteResponse>;
}
