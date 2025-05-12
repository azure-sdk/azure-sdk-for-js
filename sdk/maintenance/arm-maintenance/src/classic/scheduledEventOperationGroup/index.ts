// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext } from "../../api/maintenanceContext.js";
import { ScheduledEventApproveResponse } from "../../models/models.js";
import { ScheduledEventOperationGroupAcknowledgeOptionalParams } from "../../api/scheduledEventOperationGroup/options.js";
import { acknowledge } from "../../api/scheduledEventOperationGroup/operations.js";

/** Interface representing a ScheduledEventOperationGroup operations. */
export interface ScheduledEventOperationGroupOperations {
  /** Post Scheduled Event Acknowledgement */
  acknowledge: (
    resourceGroupName: string,
    resourceType: string,
    resourceName: string,
    scheduledEventId: string,
    options?: ScheduledEventOperationGroupAcknowledgeOptionalParams,
  ) => Promise<ScheduledEventApproveResponse>;
}

function _getScheduledEventOperationGroup(context: MaintenanceContext) {
  return {
    acknowledge: (
      resourceGroupName: string,
      resourceType: string,
      resourceName: string,
      scheduledEventId: string,
      options?: ScheduledEventOperationGroupAcknowledgeOptionalParams,
    ) =>
      acknowledge(
        context,
        resourceGroupName,
        resourceType,
        resourceName,
        scheduledEventId,
        options,
      ),
  };
}

export function _getScheduledEventOperationGroupOperations(
  context: MaintenanceContext,
): ScheduledEventOperationGroupOperations {
  return {
    ..._getScheduledEventOperationGroup(context),
  };
}
