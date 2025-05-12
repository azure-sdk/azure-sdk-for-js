// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ApplyUpdate } from "../../models/models.js";
import {
  ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams,
  ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams,
} from "../../api/applyUpdatesOperationGroup/options.js";
import {
  createOrUpdate,
  createOrUpdateParent,
} from "../../api/applyUpdatesOperationGroup/operations.js";

/** Interface representing a ApplyUpdatesOperationGroup operations. */
export interface ApplyUpdatesOperationGroupOperations {
  /** Apply maintenance updates to resource */
  createOrUpdate: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    options?: ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams,
  ) => Promise<ApplyUpdate>;
  /** Apply maintenance updates to resource with parent */
  createOrUpdateParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    options?: ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams,
  ) => Promise<ApplyUpdate>;
}

function _getApplyUpdatesOperationGroup(context: MaintenanceContext) {
  return {
    createOrUpdate: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      options?: ApplyUpdatesOperationGroupCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(context, resourceGroupName, providerName, resourceType, resourceName, options),
    createOrUpdateParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      options?: ApplyUpdatesOperationGroupCreateOrUpdateParentOptionalParams,
    ) =>
      createOrUpdateParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        options,
      ),
  };
}

export function _getApplyUpdatesOperationGroupOperations(
  context: MaintenanceContext,
): ApplyUpdatesOperationGroupOperations {
  return {
    ..._getApplyUpdatesOperationGroup(context),
  };
}
