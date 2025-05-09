// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext } from "../../api/notificationHubsContext.js";
import { CheckAvailabilityParameters, CheckAvailabilityResult } from "../../models/models.js";
import { NamespacesOperationGroupCheckAvailabilityOptionalParams } from "../../api/namespacesOperationGroup/options.js";
import { checkAvailability } from "../../api/namespacesOperationGroup/operations.js";

/** Interface representing a NamespacesOperationGroup operations. */
export interface NamespacesOperationGroupOperations {
  /** Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name. */
  checkAvailability: (
    parameters: CheckAvailabilityParameters,
    options?: NamespacesOperationGroupCheckAvailabilityOptionalParams,
  ) => Promise<CheckAvailabilityResult>;
}

function _getNamespacesOperationGroup(context: NotificationHubsContext) {
  return {
    checkAvailability: (
      parameters: CheckAvailabilityParameters,
      options?: NamespacesOperationGroupCheckAvailabilityOptionalParams,
    ) => checkAvailability(context, parameters, options),
  };
}

export function _getNamespacesOperationGroupOperations(
  context: NotificationHubsContext,
): NamespacesOperationGroupOperations {
  return {
    ..._getNamespacesOperationGroup(context),
  };
}
