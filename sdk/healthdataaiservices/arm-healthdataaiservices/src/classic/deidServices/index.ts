// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthDataAIServicesContext } from "../../api/healthDataAIServicesContext.js";
import {
  deidServicesDelete,
  deidServicesUpdate,
  deidServicesCreate,
  deidServicesListBySubscription,
  deidServicesListByResourceGroup,
  deidServicesGet,
} from "../../api/deidServices/index.js";
import { DeidService, DeidUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  DeidServicesDeleteOptionalParams,
  DeidServicesUpdateOptionalParams,
  DeidServicesCreateOptionalParams,
  DeidServicesListBySubscriptionOptionalParams,
  DeidServicesListByResourceGroupOptionalParams,
  DeidServicesGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a DeidServices operations. */
export interface DeidServicesOperations {
  /** Delete a DeidService */
  delete: (
    resourceGroupName: string,
    deidServiceName: string,
    options?: DeidServicesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a DeidService */
  update: (
    resourceGroupName: string,
    deidServiceName: string,
    properties: DeidUpdate,
    options?: DeidServicesUpdateOptionalParams,
  ) => PollerLike<OperationState<DeidService>, DeidService>;
  /** Create a DeidService */
  create: (
    resourceGroupName: string,
    deidServiceName: string,
    resource: DeidService,
    options?: DeidServicesCreateOptionalParams,
  ) => PollerLike<OperationState<DeidService>, DeidService>;
  /** List DeidService resources by subscription ID */
  listBySubscription: (
    options?: DeidServicesListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DeidService>;
  /** List DeidService resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DeidServicesListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DeidService>;
  /** Get a DeidService */
  get: (
    resourceGroupName: string,
    deidServiceName: string,
    options?: DeidServicesGetOptionalParams,
  ) => Promise<DeidService>;
}

function _getDeidServices(context: HealthDataAIServicesContext) {
  return {
    delete: (
      resourceGroupName: string,
      deidServiceName: string,
      options?: DeidServicesDeleteOptionalParams,
    ) => deidServicesDelete(context, resourceGroupName, deidServiceName, options),
    update: (
      resourceGroupName: string,
      deidServiceName: string,
      properties: DeidUpdate,
      options?: DeidServicesUpdateOptionalParams,
    ) => deidServicesUpdate(context, resourceGroupName, deidServiceName, properties, options),
    create: (
      resourceGroupName: string,
      deidServiceName: string,
      resource: DeidService,
      options?: DeidServicesCreateOptionalParams,
    ) => deidServicesCreate(context, resourceGroupName, deidServiceName, resource, options),
    listBySubscription: (options?: DeidServicesListBySubscriptionOptionalParams) =>
      deidServicesListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DeidServicesListByResourceGroupOptionalParams,
    ) => deidServicesListByResourceGroup(context, resourceGroupName, options),
    get: (
      resourceGroupName: string,
      deidServiceName: string,
      options?: DeidServicesGetOptionalParams,
    ) => deidServicesGet(context, resourceGroupName, deidServiceName, options),
  };
}

export function _getDeidServicesOperations(
  context: HealthDataAIServicesContext,
): DeidServicesOperations {
  return {
    ..._getDeidServices(context),
  };
}
