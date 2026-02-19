// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { ConfluentManagementContext } from "../../api/confluentManagementContext.js";
import { $delete, createOrUpdate } from "../../api/environment/operations.js";
import type {
  EnvironmentDeleteOptionalParams,
  EnvironmentCreateOrUpdateOptionalParams,
} from "../../api/environment/options.js";
import type { SCEnvironmentRecord } from "../../models/models.js";
import type { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Environment operations. */
export interface EnvironmentOperations {
  /** Delete confluent environment by id */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    organizationName: string,
    environmentId: string,
    options?: EnvironmentDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create confluent environment */
  createOrUpdate: (
    resourceGroupName: string,
    organizationName: string,
    environmentId: string,
    options?: EnvironmentCreateOrUpdateOptionalParams,
  ) => Promise<SCEnvironmentRecord>;
}

function _getEnvironment(context: ConfluentManagementContext) {
  return {
    delete: (
      resourceGroupName: string,
      organizationName: string,
      environmentId: string,
      options?: EnvironmentDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, organizationName, environmentId, options),
    createOrUpdate: (
      resourceGroupName: string,
      organizationName: string,
      environmentId: string,
      options?: EnvironmentCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, organizationName, environmentId, options),
  };
}

export function _getEnvironmentOperations(
  context: ConfluentManagementContext,
): EnvironmentOperations {
  return {
    ..._getEnvironment(context),
  };
}
