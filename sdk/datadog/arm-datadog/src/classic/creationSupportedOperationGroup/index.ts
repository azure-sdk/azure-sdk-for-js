// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import { CreateResourceSupportedResponse } from "../../models/models.js";
import {
  CreationSupportedOperationGroupGetOptionalParams,
  CreationSupportedOperationGroupListOptionalParams,
} from "../../api/creationSupportedOperationGroup/options.js";
import { get, list } from "../../api/creationSupportedOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a CreationSupportedOperationGroup operations. */
export interface CreationSupportedOperationGroupOperations {
  /** Informs if the current subscription is being already monitored for selected Datadog organization. */
  get: (
    datadogOrganizationId: string,
    options?: CreationSupportedOperationGroupGetOptionalParams,
  ) => Promise<CreateResourceSupportedResponse>;
  /** Informs if the current subscription is being already monitored for selected Datadog organization. */
  list: (
    datadogOrganizationId: string,
    options?: CreationSupportedOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<CreateResourceSupportedResponse>;
}

function _getCreationSupportedOperationGroup(context: DatadogContext) {
  return {
    get: (
      datadogOrganizationId: string,
      options?: CreationSupportedOperationGroupGetOptionalParams,
    ) => get(context, datadogOrganizationId, options),
    list: (
      datadogOrganizationId: string,
      options?: CreationSupportedOperationGroupListOptionalParams,
    ) => list(context, datadogOrganizationId, options),
  };
}

export function _getCreationSupportedOperationGroupOperations(
  context: DatadogContext,
): CreationSupportedOperationGroupOperations {
  return {
    ..._getCreationSupportedOperationGroup(context),
  };
}
