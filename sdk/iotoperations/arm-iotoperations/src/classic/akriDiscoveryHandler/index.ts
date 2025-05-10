// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { AkriDiscoveryHandlerResource } from "../../models/models.js";
import {
  AkriDiscoveryHandlerListByInstanceResourceOptionalParams,
  AkriDiscoveryHandlerDeleteOptionalParams,
  AkriDiscoveryHandlerCreateOrUpdateOptionalParams,
  AkriDiscoveryHandlerGetOptionalParams,
} from "../../api/akriDiscoveryHandler/options.js";
import {
  listByInstanceResource,
  $delete,
  createOrUpdate,
  get,
} from "../../api/akriDiscoveryHandler/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AkriDiscoveryHandler operations. */
export interface AkriDiscoveryHandlerOperations {
  /** List AkriDiscoveryHandlerResource resources by InstanceResource */
  listByInstanceResource: (
    resourceGroupName: string,
    instanceName: string,
    options?: AkriDiscoveryHandlerListByInstanceResourceOptionalParams,
  ) => PagedAsyncIterableIterator<AkriDiscoveryHandlerResource>;
  /** Delete a AkriDiscoveryHandlerResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    akriDiscoveryHandlerName: string,
    options?: AkriDiscoveryHandlerDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a AkriDiscoveryHandlerResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    akriDiscoveryHandlerName: string,
    resource: AkriDiscoveryHandlerResource,
    options?: AkriDiscoveryHandlerCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AkriDiscoveryHandlerResource>, AkriDiscoveryHandlerResource>;
  /** Get a AkriDiscoveryHandlerResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    akriDiscoveryHandlerName: string,
    options?: AkriDiscoveryHandlerGetOptionalParams,
  ) => Promise<AkriDiscoveryHandlerResource>;
}

function _getAkriDiscoveryHandler(context: IoTOperationsContext) {
  return {
    listByInstanceResource: (
      resourceGroupName: string,
      instanceName: string,
      options?: AkriDiscoveryHandlerListByInstanceResourceOptionalParams,
    ) => listByInstanceResource(context, resourceGroupName, instanceName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      akriDiscoveryHandlerName: string,
      options?: AkriDiscoveryHandlerDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, instanceName, akriDiscoveryHandlerName, options),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      akriDiscoveryHandlerName: string,
      resource: AkriDiscoveryHandlerResource,
      options?: AkriDiscoveryHandlerCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        akriDiscoveryHandlerName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      akriDiscoveryHandlerName: string,
      options?: AkriDiscoveryHandlerGetOptionalParams,
    ) => get(context, resourceGroupName, instanceName, akriDiscoveryHandlerName, options),
  };
}

export function _getAkriDiscoveryHandlerOperations(
  context: IoTOperationsContext,
): AkriDiscoveryHandlerOperations {
  return {
    ..._getAkriDiscoveryHandler(context),
  };
}
