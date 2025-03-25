// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceContext } from "../../api/azurePlaywrightServiceContext.js";
import { QuotaNames, Quota } from "../../models/models.js";
import {
  QuotasListBySubscriptionOptionalParams,
  QuotasGetOptionalParams,
} from "../../api/quotas/options.js";
import { listBySubscription, get } from "../../api/quotas/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a Quotas operations. */
export interface QuotasOperations {
  /** List quotas for a given subscription Id. */
  listBySubscription: (
    location: string,
    options?: QuotasListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<Quota>;
  /** Get subscription quota by name. */
  get: (
    location: string,
    quotaName: QuotaNames,
    options?: QuotasGetOptionalParams,
  ) => Promise<Quota>;
}

function _getQuotas(context: AzurePlaywrightServiceContext) {
  return {
    listBySubscription: (location: string, options?: QuotasListBySubscriptionOptionalParams) =>
      listBySubscription(context, location, options),
    get: (location: string, quotaName: QuotaNames, options?: QuotasGetOptionalParams) =>
      get(context, location, quotaName, options),
  };
}

export function _getQuotasOperations(context: AzurePlaywrightServiceContext): QuotasOperations {
  return {
    ..._getQuotas(context),
  };
}
