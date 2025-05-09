// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext } from "../../api/datadogContext.js";
import { DatadogAgreementResource } from "../../models/models.js";
import {
  MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams,
  MarketplaceAgreementsOperationGroupListOptionalParams,
} from "../../api/marketplaceAgreementsOperationGroup/options.js";
import { createOrUpdate, list } from "../../api/marketplaceAgreementsOperationGroup/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a MarketplaceAgreementsOperationGroup operations. */
export interface MarketplaceAgreementsOperationGroupOperations {
  /** Create Datadog marketplace agreement in the subscription. */
  createOrUpdate: (
    body: DatadogAgreementResource,
    options?: MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams,
  ) => Promise<DatadogAgreementResource>;
  /** List Datadog marketplace agreements in the subscription. */
  list: (
    options?: MarketplaceAgreementsOperationGroupListOptionalParams,
  ) => PagedAsyncIterableIterator<DatadogAgreementResource>;
}

function _getMarketplaceAgreementsOperationGroup(context: DatadogContext) {
  return {
    createOrUpdate: (
      body: DatadogAgreementResource,
      options?: MarketplaceAgreementsOperationGroupCreateOrUpdateOptionalParams,
    ) => createOrUpdate(context, body, options),
    list: (options?: MarketplaceAgreementsOperationGroupListOptionalParams) =>
      list(context, options),
  };
}

export function _getMarketplaceAgreementsOperationGroupOperations(
  context: DatadogContext,
): MarketplaceAgreementsOperationGroupOperations {
  return {
    ..._getMarketplaceAgreementsOperationGroup(context),
  };
}
