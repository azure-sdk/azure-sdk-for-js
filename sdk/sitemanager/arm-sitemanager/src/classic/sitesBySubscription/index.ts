// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeContext } from "../../api/edgeContext.js";
import {
  SitesBySubscriptionListOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
  SitesBySubscriptionDeleteOptionalParams,
} from "../../api/options.js";
import {
  sitesBySubscriptionList,
  sitesBySubscriptionGet,
  sitesBySubscriptionCreateOrUpdate,
  sitesBySubscriptionUpdate,
  sitesBySubscriptionDelete,
} from "../../api/sitesBySubscription/index.js";
import { Site, SiteUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SitesBySubscription operations. */
export interface SitesBySubscriptionOperations {
  /** List Site resources by subscription ID */
  list: (
    options?: SitesBySubscriptionListOptionalParams,
  ) => PagedAsyncIterableIterator<Site>;
  /** Get a Site */
  get: (
    siteName: string,
    options?: SitesBySubscriptionGetOptionalParams,
  ) => Promise<Site>;
  /** Create a Site */
  createOrUpdate: (
    siteName: string,
    resource: Site,
    options?: SitesBySubscriptionCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Site>, Site>;
  /** Update a Site */
  update: (
    siteName: string,
    properties: SiteUpdate,
    options?: SitesBySubscriptionUpdateOptionalParams,
  ) => Promise<Site>;
  /** Delete a Site */
  delete: (
    siteName: string,
    options?: SitesBySubscriptionDeleteOptionalParams,
  ) => Promise<void>;
}

export function getSitesBySubscription(
  context: EdgeContext,
  subscriptionId: string,
) {
  return {
    list: (options?: SitesBySubscriptionListOptionalParams) =>
      sitesBySubscriptionList(context, subscriptionId, options),
    get: (siteName: string, options?: SitesBySubscriptionGetOptionalParams) =>
      sitesBySubscriptionGet(context, subscriptionId, siteName, options),
    createOrUpdate: (
      siteName: string,
      resource: Site,
      options?: SitesBySubscriptionCreateOrUpdateOptionalParams,
    ) =>
      sitesBySubscriptionCreateOrUpdate(
        context,
        subscriptionId,
        siteName,
        resource,
        options,
      ),
    update: (
      siteName: string,
      properties: SiteUpdate,
      options?: SitesBySubscriptionUpdateOptionalParams,
    ) =>
      sitesBySubscriptionUpdate(
        context,
        subscriptionId,
        siteName,
        properties,
        options,
      ),
    delete: (
      siteName: string,
      options?: SitesBySubscriptionDeleteOptionalParams,
    ) => sitesBySubscriptionDelete(context, subscriptionId, siteName, options),
  };
}

export function getSitesBySubscriptionOperations(
  context: EdgeContext,
  subscriptionId: string,
): SitesBySubscriptionOperations {
  return {
    ...getSitesBySubscription(context, subscriptionId),
  };
}
