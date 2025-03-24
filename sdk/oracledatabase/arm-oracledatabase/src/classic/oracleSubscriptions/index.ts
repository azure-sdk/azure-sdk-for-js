// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsListBySubscriptionOptionalParams,
} from "../../api/options.js";
import {
  oracleSubscriptionsAddAzureSubscriptions,
  oracleSubscriptionsListActivationLinks,
  oracleSubscriptionsListSaasSubscriptionDetails,
  oracleSubscriptionsListCloudAccountDetails,
  oracleSubscriptionsCreateOrUpdate,
  oracleSubscriptionsDelete,
  oracleSubscriptionsUpdate,
  oracleSubscriptionsGet,
  oracleSubscriptionsListBySubscription,
} from "../../api/oracleSubscriptions/index.js";
import {
  OracleSubscription,
  OracleSubscriptionUpdate,
  AzureSubscriptions,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a OracleSubscriptions operations. */
export interface OracleSubscriptionsOperations {
  /** Add Azure Subscriptions */
  addAzureSubscriptions: (
    body: AzureSubscriptions,
    options?: OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Activation Links */
  listActivationLinks: (
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Saas Subscription Details */
  listSaasSubscriptionDetails: (
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Cloud Account Details */
  listCloudAccountDetails: (
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a OracleSubscription */
  createOrUpdate: (
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  /** Delete a OracleSubscription */
  delete: (
    options?: OracleSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a OracleSubscription */
  update: (
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  /** Get a OracleSubscription */
  get: (options?: OracleSubscriptionsGetOptionalParams) => Promise<OracleSubscription>;
  /** List OracleSubscription resources by subscription ID */
  listBySubscription: (
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OracleSubscription>;
}

function _getOracleSubscriptions(context: DatabaseContext) {
  return {
    addAzureSubscriptions: (
      body: AzureSubscriptions,
      options?: OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
    ) => oracleSubscriptionsAddAzureSubscriptions(context, body, options),
    listActivationLinks: (options?: OracleSubscriptionsListActivationLinksOptionalParams) =>
      oracleSubscriptionsListActivationLinks(context, options),
    listSaasSubscriptionDetails: (
      options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
    ) => oracleSubscriptionsListSaasSubscriptionDetails(context, options),
    listCloudAccountDetails: (options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams) =>
      oracleSubscriptionsListCloudAccountDetails(context, options),
    createOrUpdate: (
      resource: OracleSubscription,
      options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
    ) => oracleSubscriptionsCreateOrUpdate(context, resource, options),
    delete: (options?: OracleSubscriptionsDeleteOptionalParams) =>
      oracleSubscriptionsDelete(context, options),
    update: (
      properties: OracleSubscriptionUpdate,
      options?: OracleSubscriptionsUpdateOptionalParams,
    ) => oracleSubscriptionsUpdate(context, properties, options),
    get: (options?: OracleSubscriptionsGetOptionalParams) =>
      oracleSubscriptionsGet(context, options),
    listBySubscription: (options?: OracleSubscriptionsListBySubscriptionOptionalParams) =>
      oracleSubscriptionsListBySubscription(context, options),
  };
}

export function _getOracleSubscriptionsOperations(
  context: DatabaseContext,
): OracleSubscriptionsOperations {
  return {
    ..._getOracleSubscriptions(context),
  };
}
