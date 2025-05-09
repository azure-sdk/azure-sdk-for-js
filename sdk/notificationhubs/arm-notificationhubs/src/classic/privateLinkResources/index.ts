// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import { PrivateLinkResource } from "../../models/models.js";
import {
  PrivateLinkResourcesListGroupIdsOptionalParams,
  PrivateLinkResourcesGetGroupIdOptionalParams,
} from "../../api/privateLinkResources/options.js";
import { listGroupIds, getGroupId } from "../../api/privateLinkResources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a PrivateLinkResources operations. */
export interface PrivateLinkResourcesOperations {
  /**
   * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
   * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
   */
  listGroupIds: (
    resourceGroupName: string,
    namespaceName: string,
    options?: PrivateLinkResourcesListGroupIdsOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
  /**
   * Even though this namespace requires subscription id, resource group and namespace name, it returns a constant payload (for a given namespacE) every time it's called.
   * That's why we don't send it to the sibling RP, but process it directly in the scale unit that received the request.
   */
  getGroupId: (
    resourceGroupName: string,
    namespaceName: string,
    subResourceName: string,
    options?: PrivateLinkResourcesGetGroupIdOptionalParams,
  ) => Promise<PrivateLinkResource>;
}

function _getPrivateLinkResources(context: NotificationHubsContext) {
  return {
    listGroupIds: (
      resourceGroupName: string,
      namespaceName: string,
      options?: PrivateLinkResourcesListGroupIdsOptionalParams,
    ) => listGroupIds(context, resourceGroupName, namespaceName, options),
    getGroupId: (
      resourceGroupName: string,
      namespaceName: string,
      subResourceName: string,
      options?: PrivateLinkResourcesGetGroupIdOptionalParams,
    ) => getGroupId(context, resourceGroupName, namespaceName, subResourceName, options),
  };
}

export function _getPrivateLinkResourcesOperations(
  context: NotificationHubsContext,
): PrivateLinkResourcesOperations {
  return {
    ..._getPrivateLinkResources(context),
  };
}
