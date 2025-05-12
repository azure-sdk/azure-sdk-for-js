// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ConfigurationAssignment } from "../../models/models.js";
import {
  ConfigurationAssignmentOperationGroupDeleteOptionalParams,
  ConfigurationAssignmentOperationGroupCreateOrUpdateOptionalParams,
  ConfigurationAssignmentOperationGroupGetOptionalParams,
} from "../../api/configurationAssignmentOperationGroup/options.js";
import {
  $delete,
  createOrUpdate,
  get,
} from "../../api/configurationAssignmentOperationGroup/operations.js";

/** Interface representing a ConfigurationAssignmentOperationGroup operations. */
export interface ConfigurationAssignmentOperationGroupOperations {
  /** Unregister configuration for resource. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentOperationGroupDeleteOptionalParams,
  ) => Promise<ConfigurationAssignment | null>;
  /** Register configuration for resource. */
  createOrUpdate: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    configurationAssignment: ConfigurationAssignment,
    options?: ConfigurationAssignmentOperationGroupCreateOrUpdateOptionalParams,
  ) => Promise<ConfigurationAssignment>;
  /** Get configuration assignment for resource.. */
  get: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    configurationAssignmentName: string,
    options?: ConfigurationAssignmentOperationGroupGetOptionalParams,
  ) => Promise<ConfigurationAssignment>;
}

function _getConfigurationAssignmentOperationGroup(context: MaintenanceContext) {
  return {
    delete: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentOperationGroupDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      configurationAssignment: ConfigurationAssignment,
      options?: ConfigurationAssignmentOperationGroupCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        configurationAssignment,
        options,
      ),
    get: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      configurationAssignmentName: string,
      options?: ConfigurationAssignmentOperationGroupGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        providerName,
        resourceType,
        resourceName,
        configurationAssignmentName,
        options,
      ),
  };
}

export function _getConfigurationAssignmentOperationGroupOperations(
  context: MaintenanceContext,
): ConfigurationAssignmentOperationGroupOperations {
  return {
    ..._getConfigurationAssignmentOperationGroup(context),
  };
}
