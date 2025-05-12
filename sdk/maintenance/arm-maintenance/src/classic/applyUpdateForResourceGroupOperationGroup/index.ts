// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ApplyUpdate } from "../../models/models.js";
import { ApplyUpdateForResourceGroupOperationGroupListOptionalParams } from "../../api/applyUpdateForResourceGroupOperationGroup/options.js";
import { list } from "../../api/applyUpdateForResourceGroupOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ApplyUpdateForResourceGroupOperationGroup operations. */
export interface ApplyUpdateForResourceGroupOperationGroupOperations {
  /** Get Configuration records within a subscription and resource group */
  list: (
    resourceGroupName: string,
    options?: ApplyUpdateForResourceGroupOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<ApplyUpdate>;
}

function _getApplyUpdateForResourceGroupOperationGroup(context: MaintenanceContext) {
  return {
    list: (
      resourceGroupName: string,
      options?: ApplyUpdateForResourceGroupOperationGroupListOptionalParams,
    ) => list(context, resourceGroupName, options),
  };
}

export function _getApplyUpdateForResourceGroupOperationGroupOperations(
  context: MaintenanceContext,
): ApplyUpdateForResourceGroupOperationGroupOperations {
  return {
    ..._getApplyUpdateForResourceGroupOperationGroup(context),
  };
}
