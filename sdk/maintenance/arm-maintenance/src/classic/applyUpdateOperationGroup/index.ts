// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ApplyUpdate } from "../../models/models.js";
import {
  ApplyUpdateOperationGroupListOptionalParams,
  ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams,
  ApplyUpdateOperationGroupGetOptionalParams,
} from "../../api/applyUpdateOperationGroup/options.js";
import {
  list,
  createOrUpdateOrCancel,
  get,
} from "../../api/applyUpdateOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ApplyUpdateOperationGroup operations. */
export interface ApplyUpdateOperationGroupOperations {
  /** Get Configuration records within a subscription */
  list: (
    options?: ApplyUpdateOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<ApplyUpdate>;
  /** Apply maintenance updates to resource */
  createOrUpdateOrCancel: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    applyUpdate: ApplyUpdate,
    options?: ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams,
  ) => Promise<ApplyUpdate>;
  /** Track maintenance updates to resource */
  get: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    options?: ApplyUpdateOperationGroupGetOptionalParams,
  ) => Promise<ApplyUpdate>;
}

function _getApplyUpdateOperationGroup(context: MaintenanceContext) {
  return {
    list: (options?: ApplyUpdateOperationGroupListOptionalParams) => list(context, options),
    createOrUpdateOrCancel: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      applyUpdateName: string,
      applyUpdate: ApplyUpdate,
      options?: ApplyUpdateOperationGroupCreateOrUpdateOrCancelOptionalParams,
    ) =>
      createOrUpdateOrCancel(
        context,
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        applyUpdateName,
        applyUpdate,
        options,
      ),
    get: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      applyUpdateName: string,
      options?: ApplyUpdateOperationGroupGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        applyUpdateName,
        options,
      ),
  };
}

export function _getApplyUpdateOperationGroupOperations(
  context: MaintenanceContext,
): ApplyUpdateOperationGroupOperations {
  return {
    ..._getApplyUpdateOperationGroup(context),
  };
}
