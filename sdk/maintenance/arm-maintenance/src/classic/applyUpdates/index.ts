// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ApplyUpdate } from "../../models/models.js";
import { ApplyUpdatesGetParentOptionalParams } from "../../api/applyUpdates/options.js";
import { getParent } from "../../api/applyUpdates/operations.js";

/** Interface representing a ApplyUpdates operations. */
export interface ApplyUpdatesOperations {
  /** Track maintenance updates to resource with parent */
  getParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    applyUpdateName: string,
    options?: ApplyUpdatesGetParentOptionalParams,
  ) => Promise<ApplyUpdate>;
}

function _getApplyUpdates(context: MaintenanceContext) {
  return {
    getParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      applyUpdateName: string,
      options?: ApplyUpdatesGetParentOptionalParams,
    ) =>
      getParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        applyUpdateName,
        options,
      ),
  };
}

export function _getApplyUpdatesOperations(context: MaintenanceContext): ApplyUpdatesOperations {
  return {
    ..._getApplyUpdates(context),
  };
}
