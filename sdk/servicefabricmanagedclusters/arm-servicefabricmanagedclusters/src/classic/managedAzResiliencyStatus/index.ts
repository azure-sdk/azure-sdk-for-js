// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext } from "../../api/serviceFabricContext.js";
import { managedAzResiliencyStatusGet } from "../../api/managedAzResiliencyStatus/index.js";
import { ManagedAzResiliencyStatus } from "../../models/models.js";
import { ManagedAzResiliencyStatusGetOptionalParams } from "../../api/options.js";

/** Interface representing a ManagedAzResiliencyStatus operations. */
export interface ManagedAzResiliencyStatusOperations {
  /** Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters. */
  get: (
    resourceGroupName: string,
    clusterName: string,
    options?: ManagedAzResiliencyStatusGetOptionalParams,
  ) => Promise<ManagedAzResiliencyStatus>;
}

function _getManagedAzResiliencyStatus(context: ServiceFabricContext) {
  return {
    get: (
      resourceGroupName: string,
      clusterName: string,
      options?: ManagedAzResiliencyStatusGetOptionalParams,
    ) => managedAzResiliencyStatusGet(context, resourceGroupName, clusterName, options),
  };
}

export function _getManagedAzResiliencyStatusOperations(
  context: ServiceFabricContext,
): ManagedAzResiliencyStatusOperations {
  return {
    ..._getManagedAzResiliencyStatus(context),
  };
}
