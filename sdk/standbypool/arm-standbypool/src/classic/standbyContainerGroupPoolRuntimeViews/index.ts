// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StandbyPoolManagementContext } from "../../api/standbyPoolManagementContext.js";
import {
  standbyContainerGroupPoolRuntimeViewsGet,
  standbyContainerGroupPoolRuntimeViewsListByStandbyPool,
} from "../../api/standbyContainerGroupPoolRuntimeViews/index.js";
import { StandbyContainerGroupPoolRuntimeViewResource } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
  StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
} from "../../api/options.js";

/** Interface representing a StandbyContainerGroupPoolRuntimeViews operations. */
export interface StandbyContainerGroupPoolRuntimeViewsOperations {
  /** Get a StandbyContainerGroupPoolRuntimeViewResource */
  get: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    runtimeView: string,
    options?: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
  ) => Promise<StandbyContainerGroupPoolRuntimeViewResource>;
  /** List StandbyContainerGroupPoolRuntimeViewResource resources by StandbyContainerGroupPoolResource */
  listByStandbyPool: (
    resourceGroupName: string,
    standbyContainerGroupPoolName: string,
    options?: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
  ) => PagedAsyncIterableIterator<StandbyContainerGroupPoolRuntimeViewResource>;
}

export function getStandbyContainerGroupPoolRuntimeViews(
  context: StandbyPoolManagementContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      runtimeView: string,
      options?: StandbyContainerGroupPoolRuntimeViewsGetOptionalParams,
    ) =>
      standbyContainerGroupPoolRuntimeViewsGet(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        runtimeView,
        options,
      ),
    listByStandbyPool: (
      resourceGroupName: string,
      standbyContainerGroupPoolName: string,
      options?: StandbyContainerGroupPoolRuntimeViewsListByStandbyPoolOptionalParams,
    ) =>
      standbyContainerGroupPoolRuntimeViewsListByStandbyPool(
        context,
        subscriptionId,
        resourceGroupName,
        standbyContainerGroupPoolName,
        options,
      ),
  };
}

export function getStandbyContainerGroupPoolRuntimeViewsOperations(
  context: StandbyPoolManagementContext,
  subscriptionId: string,
): StandbyContainerGroupPoolRuntimeViewsOperations {
  return {
    ...getStandbyContainerGroupPoolRuntimeViews(context, subscriptionId),
  };
}
