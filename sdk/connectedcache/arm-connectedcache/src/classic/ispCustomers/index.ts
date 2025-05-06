// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext } from "../../api/connectedCacheContext.js";
import { IspCustomerResource, ConnectedCachePatchResource } from "../../models/models.js";
import {
  IspCustomersListBySubscriptionOptionalParams,
  IspCustomersListByResourceGroupOptionalParams,
  IspCustomersDeleteOptionalParams,
  IspCustomersUpdateOptionalParams,
  IspCustomersCreateOrUpdateOptionalParams,
  IspCustomersGetOptionalParams,
} from "../../api/ispCustomers/options.js";
import {
  ispCustomersListBySubscription,
  ispCustomersListByResourceGroup,
  ispCustomersDelete,
  ispCustomersUpdate,
  ispCustomersCreateOrUpdate,
  ispCustomersGet,
} from "../../api/ispCustomers/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a IspCustomers operations. */
export interface IspCustomersOperations {
  /** This api gets information about all ispCustomer resources under the given subscription */
  listBySubscription: (
    options?: IspCustomersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<IspCustomerResource>;
  /** This api gets the information about all ispCustomer resources under the given subscription and resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: IspCustomersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<IspCustomerResource>;
  /** This api deletes an existing ispCustomer resource */
  delete: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: IspCustomersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** This api updates an existing ispCustomer resource */
  update: (
    resourceGroupName: string,
    customerResourceName: string,
    properties: ConnectedCachePatchResource,
    options?: IspCustomersUpdateOptionalParams,
  ) => Promise<IspCustomerResource>;
  /** This api creates an ispCustomer with the specified create parameters */
  createOrUpdate: (
    resourceGroupName: string,
    customerResourceName: string,
    resource: IspCustomerResource,
    options?: IspCustomersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<IspCustomerResource>, IspCustomerResource>;
  /** Gets the ispCustomer resource information using this get call */
  get: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: IspCustomersGetOptionalParams,
  ) => Promise<IspCustomerResource>;
}

function _getIspCustomers(context: ConnectedCacheContext) {
  return {
    listBySubscription: (options?: IspCustomersListBySubscriptionOptionalParams) =>
      ispCustomersListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: IspCustomersListByResourceGroupOptionalParams,
    ) => ispCustomersListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: IspCustomersDeleteOptionalParams,
    ) => ispCustomersDelete(context, resourceGroupName, customerResourceName, options),
    update: (
      resourceGroupName: string,
      customerResourceName: string,
      properties: ConnectedCachePatchResource,
      options?: IspCustomersUpdateOptionalParams,
    ) => ispCustomersUpdate(context, resourceGroupName, customerResourceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      customerResourceName: string,
      resource: IspCustomerResource,
      options?: IspCustomersCreateOrUpdateOptionalParams,
    ) =>
      ispCustomersCreateOrUpdate(
        context,
        resourceGroupName,
        customerResourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: IspCustomersGetOptionalParams,
    ) => ispCustomersGet(context, resourceGroupName, customerResourceName, options),
  };
}

export function _getIspCustomersOperations(context: ConnectedCacheContext): IspCustomersOperations {
  return {
    ..._getIspCustomers(context),
  };
}
