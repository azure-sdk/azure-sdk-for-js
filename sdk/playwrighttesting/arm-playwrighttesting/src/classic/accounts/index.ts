// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceContext } from "../../api/azurePlaywrightServiceContext.js";
import {
  Account,
  AccountUpdate,
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
} from "../../models/models.js";
import {
  AccountsCheckNameAvailabilityOptionalParams,
  AccountsListBySubscriptionOptionalParams,
  AccountsListByResourceGroupOptionalParams,
  AccountsDeleteOptionalParams,
  AccountsUpdateOptionalParams,
  AccountsCreateOrUpdateOptionalParams,
  AccountsGetOptionalParams,
} from "../../api/accounts/options.js";
import {
  checkNameAvailability,
  listBySubscription,
  listByResourceGroup,
  $delete,
  update,
  createOrUpdate,
  get,
} from "../../api/accounts/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a Accounts operations. */
export interface AccountsOperations {
  /** Adds check global name availability operation, normally used if a resource name must be globally unique. */
  checkNameAvailability: (
    body: CheckNameAvailabilityRequest,
    options?: AccountsCheckNameAvailabilityOptionalParams,
  ) => Promise<CheckNameAvailabilityResponse>;
  /** List Account resources by subscription ID */
  listBySubscription: (
    options?: AccountsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Account>;
  /** List Account resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AccountsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<Account>;
  /** Delete a Account */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    accountName: string,
    options?: AccountsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a Account */
  update: (
    resourceGroupName: string,
    accountName: string,
    properties: AccountUpdate,
    options?: AccountsUpdateOptionalParams,
  ) => Promise<Account>;
  /** Create a Account */
  createOrUpdate: (
    resourceGroupName: string,
    accountName: string,
    resource: Account,
    options?: AccountsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Account>, Account>;
  /** Get a Account */
  get: (
    resourceGroupName: string,
    accountName: string,
    options?: AccountsGetOptionalParams,
  ) => Promise<Account>;
}

function _getAccounts(context: AzurePlaywrightServiceContext) {
  return {
    checkNameAvailability: (
      body: CheckNameAvailabilityRequest,
      options?: AccountsCheckNameAvailabilityOptionalParams,
    ) => checkNameAvailability(context, body, options),
    listBySubscription: (options?: AccountsListBySubscriptionOptionalParams) =>
      listBySubscription(context, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AccountsListByResourceGroupOptionalParams,
    ) => listByResourceGroup(context, resourceGroupName, options),
    delete: (
      resourceGroupName: string,
      accountName: string,
      options?: AccountsDeleteOptionalParams,
    ) => $delete(context, resourceGroupName, accountName, options),
    update: (
      resourceGroupName: string,
      accountName: string,
      properties: AccountUpdate,
      options?: AccountsUpdateOptionalParams,
    ) => update(context, resourceGroupName, accountName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      accountName: string,
      resource: Account,
      options?: AccountsCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, resourceGroupName, accountName, resource, options),
    get: (resourceGroupName: string, accountName: string, options?: AccountsGetOptionalParams) =>
      get(context, resourceGroupName, accountName, options),
  };
}

export function _getAccountsOperations(context: AzurePlaywrightServiceContext): AccountsOperations {
  return {
    ..._getAccounts(context),
  };
}
