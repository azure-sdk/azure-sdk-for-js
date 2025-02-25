// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { EdgeContext } from "../../api/edgeContext.js";
import {
  SitesBySubscriptionDeleteOptionalParams,
  SitesBySubscriptionUpdateOptionalParams,
  SitesBySubscriptionCreateOrUpdateOptionalParams,
  SitesBySubscriptionGetOptionalParams,
  SitesBySubscriptionListOptionalParams,
} from "../../api/options.js";
import {
  sitesBySubscriptionDelete,
  sitesBySubscriptionUpdate,
  sitesBySubscriptionCreateOrUpdate,
  sitesBySubscriptionGet,
  sitesBySubscriptionList,
} from "../../api/sitesBySubscription/index.js";
import { Site, SiteUpdate } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a SitesBySubscription operations. */
export interface SitesBySubscriptionOperations {
  /** Delete a Site */
  delete: (siteName: string, options?: SitesBySubscriptionDeleteOptionalParams) => Promise<void>;
  /** Update a Site */
  update: (
    siteName: string,
    properties: SiteUpdate,
    options?: SitesBySubscriptionUpdateOptionalParams,
  ) => Promise<Site>;
  /** Create a Site */
  createOrUpdate: (
    siteName: string,
    resource: Site,
    options?: SitesBySubscriptionCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<Site>, Site>;
  /** Get a Site */
  get: (siteName: string, options?: SitesBySubscriptionGetOptionalParams) => Promise<Site>;
  /** List Site resources by subscription ID */
  list: (options?: SitesBySubscriptionListOptionalParams) => PagedAsyncIterableIterator<Site>;
}

function _getSitesBySubscription(context: EdgeContext) {
  return {
    delete: (siteName: string, options?: SitesBySubscriptionDeleteOptionalParams) =>
      sitesBySubscriptionDelete(context, siteName, options),
    update: (
      siteName: string,
      properties: SiteUpdate,
      options?: SitesBySubscriptionUpdateOptionalParams,
    ) => sitesBySubscriptionUpdate(context, siteName, properties, options),
    createOrUpdate: (
      siteName: string,
      resource: Site,
      options?: SitesBySubscriptionCreateOrUpdateOptionalParams,
    ) => sitesBySubscriptionCreateOrUpdate(context, siteName, resource, options),
    get: (siteName: string, options?: SitesBySubscriptionGetOptionalParams) =>
      sitesBySubscriptionGet(context, siteName, options),
    list: (options?: SitesBySubscriptionListOptionalParams) =>
      sitesBySubscriptionList(context, options),
  };
}

export function _getSitesBySubscriptionOperations(
  context: EdgeContext,
): SitesBySubscriptionOperations {
  return {
    ..._getSitesBySubscription(context),
  };
}
