// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DevOpsInfrastructureContext } from "../../api/devOpsInfrastructureContext.js";
import { SubscriptionUsagesUsagesOptionalParams } from "../../api/options.js";
import { subscriptionUsagesUsages } from "../../api/subscriptionUsages/index.js";
import { Quota } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a SubscriptionUsages operations. */
export interface SubscriptionUsagesOperations {
  /** List Quota resources by subscription ID */
  usages: (
    location: string,
    options?: SubscriptionUsagesUsagesOptionalParams,
  ) => PagedAsyncIterableIterator<Quota>;
}

function _getSubscriptionUsages(context: DevOpsInfrastructureContext) {
  return {
    usages: (location: string, options?: SubscriptionUsagesUsagesOptionalParams) =>
      subscriptionUsagesUsages(context, location, options),
  };
}

export function _getSubscriptionUsagesOperations(
  context: DevOpsInfrastructureContext,
): SubscriptionUsagesOperations {
  return {
    ..._getSubscriptionUsages(context),
  };
}
