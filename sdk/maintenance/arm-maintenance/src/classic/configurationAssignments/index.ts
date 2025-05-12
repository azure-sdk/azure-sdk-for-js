// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ConfigurationAssignment } from "../../models/models.js";
import {
  ConfigurationAssignmentsListParentOptionalParams,
  ConfigurationAssignmentsDeleteParentOptionalParams,
  ConfigurationAssignmentsCreateOrUpdateParentOptionalParams,
  ConfigurationAssignmentsGetParentOptionalParams,
} from "../../api/configurationAssignments/options.js";
import {
  listParent,
  deleteParent,
  createOrUpdateParent,
  getParent,
} from "../../api/configurationAssignments/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a ConfigurationAssignments operations. */
export interface ConfigurationAssignmentsOperations {
  /** List configurationAssignments for resource. */
  listParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    options?: ConfigurationAssignmentsListParentOptionalParams,
  ) => PagedAsyncIterableIterator<ConfigurationAssignment>;
  /** Unregister configuration for resource. */
  deleteParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentsDeleteParentOptionalParams,
  ) => Promise<ConfigurationAssignment | null>;
  /** Register configuration for resource. */
  createOrUpdateParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    configurationAssignment: ConfigurationAssignment,
    options?: ConfigurationAssignmentsCreateOrUpdateParentOptionalParams,
  ) => Promise<ConfigurationAssignment>;
  /** Get configuration assignment for resource.. */
  getParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentsGetParentOptionalParams,
  ) => Promise<ConfigurationAssignment>;
}

function _getConfigurationAssignments(context: MaintenanceContext) {
  return {
    listParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      options?: ConfigurationAssignmentsListParentOptionalParams,
    ) =>
      listParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        options,
      ),
    deleteParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentsDeleteParentOptionalParams,
    ) =>
      deleteParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        options,
      ),
    createOrUpdateParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      configurationAssignment: ConfigurationAssignment,
      options?: ConfigurationAssignmentsCreateOrUpdateParentOptionalParams,
    ) =>
      createOrUpdateParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        configurationAssignment,
        options,
      ),
    getParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentsGetParentOptionalParams,
    ) =>
      getParent(
        context,
        resourceGroupName,
        providerName,
        resourceParentType,
        resourceParentName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        options,
      ),
  };
}

export function _getConfigurationAssignmentsOperations(
  context: MaintenanceContext,
): ConfigurationAssignmentsOperations {
  return {
    ..._getConfigurationAssignments(context),
  };
}
