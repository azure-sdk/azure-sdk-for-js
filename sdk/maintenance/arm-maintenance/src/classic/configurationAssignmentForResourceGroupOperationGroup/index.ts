// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ConfigurationAssignment } from "../../models/models.js";
import { ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams } from "../../api/configurationAssignmentForResourceGroupOperationGroup/options.js";
import { list } from "../../api/configurationAssignmentForResourceGroupOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ConfigurationAssignmentForResourceGroupOperationGroup operations. */
export interface ConfigurationAssignmentForResourceGroupOperationGroupOperations {
  /** Get Configuration records within a subscription and resource group */
  list: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    options?: ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationAssignment>;
}

function _getConfigurationAssignmentForResourceGroupOperationGroup(context: MaintenanceContext) {
  return {
    list: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      options?: ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams,
    ) => list(context, resourceGroupName, providerName, resourceType, resourceName, options),
  };
}

export function _getConfigurationAssignmentForResourceGroupOperationGroupOperations(
  context: MaintenanceContext,
): ConfigurationAssignmentForResourceGroupOperationGroupOperations {
  return {
    ..._getConfigurationAssignmentForResourceGroupOperationGroup(context),
  };
}
