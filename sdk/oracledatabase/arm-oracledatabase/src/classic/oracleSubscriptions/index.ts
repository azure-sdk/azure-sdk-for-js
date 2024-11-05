// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  OracleSubscription,
  OracleSubscriptionUpdate,
  AzureSubscriptions,
} from "../../models/models.js";
import {
  oracleSubscriptionsListBySubscription,
  oracleSubscriptionsGet,
  oracleSubscriptionsUpdate,
  oracleSubscriptionsDelete,
  oracleSubscriptionsCreateOrUpdate,
  oracleSubscriptionsListCloudAccountDetails,
  oracleSubscriptionsListSaasSubscriptionDetails,
  oracleSubscriptionsListActivationLinks,
  oracleSubscriptionsAddAzureSubscriptions,
} from "../../api/oracleSubscriptions/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  OracleSubscriptionsListBySubscriptionOptionalParams,
  OracleSubscriptionsGetOptionalParams,
  OracleSubscriptionsUpdateOptionalParams,
  OracleSubscriptionsDeleteOptionalParams,
  OracleSubscriptionsCreateOrUpdateOptionalParams,
  OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  OracleSubscriptionsListActivationLinksOptionalParams,
  OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
} from "../../models/options.js";

/** Interface representing a OracleSubscriptions operations. */
export interface OracleSubscriptionsOperations {
  /** List OracleSubscription resources by subscription ID */
  listBySubscription: (
    options?: OracleSubscriptionsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<OracleSubscription>;
  /** Get a OracleSubscription */
  get: (
    options?: OracleSubscriptionsGetOptionalParams,
  ) => Promise<OracleSubscription>;
  /** Update a OracleSubscription */
  update: (
    properties: OracleSubscriptionUpdate,
    options?: OracleSubscriptionsUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  /** Delete a OracleSubscription */
  delete: (
    options?: OracleSubscriptionsDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a OracleSubscription */
  createOrUpdate: (
    resource: OracleSubscription,
    options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
  /** List Cloud Account Details */
  listCloudAccountDetails: (
    options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Saas Subscription Details */
  listSaasSubscriptionDetails: (
    options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** List Activation Links */
  listActivationLinks: (
    options?: OracleSubscriptionsListActivationLinksOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Add Azure Subscriptions */
  addAzureSubscriptions: (
    body: AzureSubscriptions,
    options?: OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getOracleSubscriptions(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    listBySubscription: (
      options?: OracleSubscriptionsListBySubscriptionOptionalParams,
    ) =>
      oracleSubscriptionsListBySubscription(context, subscriptionId, options),
    get: (options?: OracleSubscriptionsGetOptionalParams) =>
      oracleSubscriptionsGet(context, subscriptionId, options),
    update: (
      properties: OracleSubscriptionUpdate,
      options?: OracleSubscriptionsUpdateOptionalParams,
    ) =>
      oracleSubscriptionsUpdate(context, subscriptionId, properties, options),
    delete: (options?: OracleSubscriptionsDeleteOptionalParams) =>
      oracleSubscriptionsDelete(context, subscriptionId, options),
    createOrUpdate: (
      resource: OracleSubscription,
      options?: OracleSubscriptionsCreateOrUpdateOptionalParams,
    ) =>
      oracleSubscriptionsCreateOrUpdate(
        context,
        subscriptionId,
        resource,
        options,
      ),
    listCloudAccountDetails: (
      options?: OracleSubscriptionsListCloudAccountDetailsOptionalParams,
    ) =>
      oracleSubscriptionsListCloudAccountDetails(
        context,
        subscriptionId,
        options,
      ),
    listSaasSubscriptionDetails: (
      options?: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams,
    ) =>
      oracleSubscriptionsListSaasSubscriptionDetails(
        context,
        subscriptionId,
        options,
      ),
    listActivationLinks: (
      options?: OracleSubscriptionsListActivationLinksOptionalParams,
    ) =>
      oracleSubscriptionsListActivationLinks(context, subscriptionId, options),
    addAzureSubscriptions: (
      body: AzureSubscriptions,
      options?: OracleSubscriptionsAddAzureSubscriptionsOptionalParams,
    ) =>
      oracleSubscriptionsAddAzureSubscriptions(
        context,
        subscriptionId,
        body,
        options,
      ),
  };
}

export function getOracleSubscriptionsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): OracleSubscriptionsOperations {
  return {
    ...getOracleSubscriptions(context, subscriptionId),
  };
}
