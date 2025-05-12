// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { Update } from "../../models/models.js";
import {
  UpdatesOperationGroupListOptionalParams,
  UpdatesOperationGroupListParentOptionalParams,
} from "../../api/updatesOperationGroup/options.js";
import { list, listParent } from "../../api/updatesOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a UpdatesOperationGroup operations. */
export interface UpdatesOperationGroupOperations {
  /** Get updates to resources. */
  list: (
    resourceGroupName: string,
    providerName: string,
    resourceType: string,
    resourceName: string,
    options?: UpdatesOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<Update>;
  /** Get updates to resources. */
  listParent: (
    resourceGroupName: string,
    providerName: string,
    resourceParentType: string,
    resourceParentName: string,
    resourceType: string,
    resourceName: string,
    options?: UpdatesOperationGroupListParentOptionalParams,
  ) => PagedAsyncIterableIterator<Update>;
}

function _getUpdatesOperationGroup(context: MaintenanceContext) {
  return {
    list: (
      resourceGroupName: string,
      providerName: string,
      resourceType: string,
      resourceName: string,
      options?: UpdatesOperationGroupListOptionalParams,
    ) => list(context, resourceGroupName, providerName, resourceType, resourceName, options),
    listParent: (
      resourceGroupName: string,
      providerName: string,
      resourceParentType: string,
      resourceParentName: string,
      resourceType: string,
      resourceName: string,
      options?: UpdatesOperationGroupListParentOptionalParams,
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
  };
}

export function _getUpdatesOperationGroupOperations(
  context: MaintenanceContext,
): UpdatesOperationGroupOperations {
  return {
    ..._getUpdatesOperationGroup(context),
  };
}
