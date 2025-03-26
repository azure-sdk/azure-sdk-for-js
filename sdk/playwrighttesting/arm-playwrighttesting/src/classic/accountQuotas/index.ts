// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AzurePlaywrightServiceContext } from "../../api/azurePlaywrightServiceContext.js";
import { AccountQuota, QuotaNames } from "../../models/models.js";
import {
  AccountQuotasListByAccountOptionalParams,
  AccountQuotasGetOptionalParams,
} from "../../api/accountQuotas/options.js";
import {
  accountQuotasListByAccount,
  accountQuotasGet,
} from "../../api/accountQuotas/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a AccountQuotas operations. */
export interface AccountQuotasOperations {
  /** List quotas for a given account. */
  listByAccount: (
    resourceGroupName: string,
    accountName: string,
    options?: AccountQuotasListByAccountOptionalParams,
  ) => PagedAsyncIterableIterator<AccountQuota>;
  /** Get quota by name for an account. */
  get: (
    resourceGroupName: string,
    accountName: string,
    quotaName: QuotaNames,
    options?: AccountQuotasGetOptionalParams,
  ) => Promise<AccountQuota>;
}

function _getAccountQuotas(context: AzurePlaywrightServiceContext) {
  return {
    listByAccount: (
      resourceGroupName: string,
      accountName: string,
      options?: AccountQuotasListByAccountOptionalParams,
    ) => accountQuotasListByAccount(context, resourceGroupName, accountName, options),
    get: (
      resourceGroupName: string,
      accountName: string,
      quotaName: QuotaNames,
      options?: AccountQuotasGetOptionalParams,
    ) => accountQuotasGet(context, resourceGroupName, accountName, quotaName, options),
  };
}

export function _getAccountQuotasOperations(
  context: AzurePlaywrightServiceContext,
): AccountQuotasOperations {
  return {
    ..._getAccountQuotas(context),
  };
}
