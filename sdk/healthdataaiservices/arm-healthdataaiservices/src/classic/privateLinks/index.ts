// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HealthDataAIServicesContext } from "../../api/healthDataAIServicesContext.js";
import { PrivateLinkResource } from "../../models/models.js";
import { PrivateLinksListByDeidServiceOptionalParams } from "../../api/privateLinks/options.js";
import { listByDeidService } from "../../api/privateLinks/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a PrivateLinks operations. */
export interface PrivateLinksOperations {
  /** List private links on the given resource */
  listByDeidService: (
    resourceGroupName: string,
    deidServiceName: string,
    options?: PrivateLinksListByDeidServiceOptionalParams,
  ) => PagedAsyncIterableIterator<PrivateLinkResource>;
}

function _getPrivateLinks(context: HealthDataAIServicesContext) {
  return {
    listByDeidService: (
      resourceGroupName: string,
      deidServiceName: string,
      options?: PrivateLinksListByDeidServiceOptionalParams,
    ) => listByDeidService(context, resourceGroupName, deidServiceName, options),
  };
}

export function _getPrivateLinksOperations(
  context: HealthDataAIServicesContext,
): PrivateLinksOperations {
  return {
    ..._getPrivateLinks(context),
  };
}
