// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { HardwareSecurityModulesContext } from "../../api/hardwareSecurityModulesContext.js";
import {
  DedicatedHsm,
  DedicatedHsmPatchParameters,
  OutboundEnvironmentEndpoint,
} from "../../models/models.js";
import {
  DedicatedHsmsListOutboundNetworkDependenciesEndpointsOptionalParams,
  DedicatedHsmsListBySubscriptionOptionalParams,
  DedicatedHsmsListByResourceGroupOptionalParams,
  DedicatedHsmsDeleteOptionalParams,
  DedicatedHsmsUpdateOptionalParams,
  DedicatedHsmsCreateOrUpdateOptionalParams,
  DedicatedHsmsGetOptionalParams,
} from "../../api/dedicatedHsms/options.js";
import {
  listOutboundNetworkDependenciesEndpoints,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/dedicatedHsms/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DedicatedHsms operations. */
export interface DedicatedHsmsOperations {
  /** Gets a list of egress endpoints (network endpoints of all outbound dependencies) in the specified dedicated hsm resource. The operation returns properties of each egress endpoint. */
  listOutboundNetworkDependenciesEndpoints: (
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmsListOutboundNetworkDependenciesEndpointsOptionalParams,
  ) => PagedAsyncIterableIterator<OutboundEnvironmentEndpoint>;
  /** The List operation gets information about the dedicated HSMs associated with the subscription. */
  listBySubscription: (
    options?: DedicatedHsmsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DedicatedHsm>;
  /** The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DedicatedHsmsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DedicatedHsm>;
  /** Deletes the specified Azure Dedicated HSM. */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a dedicated HSM in the specified subscription. */
  update: (
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsmPatchParameters,
    options?: DedicatedHsmsUpdateOptionalParams,
  ) => PollerLike<OperationState<DedicatedHsm>, DedicatedHsm>;
  /** Create or Update a dedicated HSM in the specified subscription. */
  createOrUpdate: (
    resourceGroupName: string,
    name: string,
    parameters: DedicatedHsm,
    options?: DedicatedHsmsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Gets the specified Azure dedicated HSM. */
  get: (
    resourceGroupName: string,
    name: string,
    options?: DedicatedHsmsGetOptionalParams,
  ) => Promise<DedicatedHsm>;
}

function _getDedicatedHsms(context: HardwareSecurityModulesContext) {
  return {
    listOutboundNetworkDependenciesEndpoints: (
      resourceGroupName: string,
      name: string,
      options?: DedicatedHsmsListOutboundNetworkDependenciesEndpointsOptionalParams,
    ) => listOutboundNetworkDependenciesEndpoints(context, resourceGroupName, name, options),
    listBySubscription: (options?: DedicatedHsmsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DedicatedHsmsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      name: string,
      options?: DedicatedHsmsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, name, options),
    update: (
      resourceGroupName: string,
      name: string,
      parameters: DedicatedHsmPatchParameters,
      options?: DedicatedHsmsUpdateOptionalParams,
    ) => update(context, resourceGroupName, name, parameters, options),
    createOrUpdate: (
      resourceGroupName: string,
      name: string,
      parameters: DedicatedHsm,
      options?: DedicatedHsmsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, name, parameters, options),
    get: (resourceGroupName: string, name: string, options?: DedicatedHsmsGetOptionalParams) =>
      get(context, resourceGroupName, name, options),
  };
}

export function _getDedicatedHsmsOperations(
  context: HardwareSecurityModulesContext,
): DedicatedHsmsOperations {
  return {
    ..._getDedicatedHsms(context),
  };
}
