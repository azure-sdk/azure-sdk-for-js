// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ConnectedCacheContext } from "../../api/connectedCacheContext.js";
import { ConnectedCachePatchResource, EnterpriseMccCustomerResource } from "../../models/models.js";
import {
  EnterpriseMccCustomersListBySubscriptionOptionalParams,
  EnterpriseMccCustomersListByResourceGroupOptionalParams,
  EnterpriseMccCustomersDeleteOptionalParams,
  EnterpriseMccCustomersUpdateOptionalParams,
  EnterpriseMccCustomersCreateOrUpdateOptionalParams,
  EnterpriseMccCustomersGetOptionalParams,
} from "../../api/enterpriseMccCustomers/options.js";
import {
  enterpriseMccCustomersListBySubscription,
  enterpriseMccCustomersListByResourceGroup,
  enterpriseMccCustomersDelete,
  enterpriseMccCustomersUpdate,
  enterpriseMccCustomersCreateOrUpdate,
  enterpriseMccCustomersGet,
} from "../../api/enterpriseMccCustomers/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a EnterpriseMccCustomers operations. */
export interface EnterpriseMccCustomersOperations {
  /** This api gets information about all enterpriseMccCustomer resources under the given subscription */
  listBySubscription: (
    options?: EnterpriseMccCustomersListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<EnterpriseMccCustomerResource>;
  /** This api gets the information about all enterprise mcc customer resources under the given subscription and resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: EnterpriseMccCustomersListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<EnterpriseMccCustomerResource>;
  /** This api deletes an existing enterprise mcc customer resource */
  delete: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: EnterpriseMccCustomersDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** This api updates an existing enterprise mcc customer resource */
  update: (
    resourceGroupName: string,
    customerResourceName: string,
    properties: ConnectedCachePatchResource,
    options?: EnterpriseMccCustomersUpdateOptionalParams,
  ) => Promise<EnterpriseMccCustomerResource>;
  /** This api creates an enterprise mcc customer with the specified create parameters */
  createOrUpdate: (
    resourceGroupName: string,
    customerResourceName: string,
    resource: EnterpriseMccCustomerResource,
    options?: EnterpriseMccCustomersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<EnterpriseMccCustomerResource>, EnterpriseMccCustomerResource>;
  /** Gets the enterprise mcc customer resource information using this get call */
  get: (
    resourceGroupName: string,
    customerResourceName: string,
    options?: EnterpriseMccCustomersGetOptionalParams,
  ) => Promise<EnterpriseMccCustomerResource>;
}

function _getEnterpriseMccCustomers(context: ConnectedCacheContext) {
  return {
    listBySubscription: (options?: EnterpriseMccCustomersListBySubscriptionOptionalParams) =>
      enterpriseMccCustomersListBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: EnterpriseMccCustomersListByResourceGroupOptionalParams,
    ) => enterpriseMccCustomersListByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: EnterpriseMccCustomersDeleteOptionalParams,
    ) => enterpriseMccCustomersDelete(context, resourceGroupName, customerResourceName, options),
    update: (
      resourceGroupName: string,
      customerResourceName: string,
      properties: ConnectedCachePatchResource,
      options?: EnterpriseMccCustomersUpdateOptionalParams,
    ) =>
      enterpriseMccCustomersUpdate(
        context,
        resourceGroupName,
        customerResourceName,
        properties,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      customerResourceName: string,
      resource: EnterpriseMccCustomerResource,
      options?: EnterpriseMccCustomersCreateOrUpdateOptionalParams,
    ) =>
      enterpriseMccCustomersCreateOrUpdate(
        context,
        resourceGroupName,
        customerResourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      customerResourceName: string,
      options?: EnterpriseMccCustomersGetOptionalParams,
    ) => enterpriseMccCustomersGet(context, resourceGroupName, customerResourceName, options),
  };
}

export function _getEnterpriseMccCustomersOperations(
  context: ConnectedCacheContext,
): EnterpriseMccCustomersOperations {
  return {
    ..._getEnterpriseMccCustomers(context),
  };
}
