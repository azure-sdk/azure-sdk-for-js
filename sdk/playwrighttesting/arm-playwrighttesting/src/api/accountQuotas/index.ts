// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  QuotaNames,
  AccountQuota,
  _AccountQuotaListResult,
} from "../../models/models.js";
import { AzurePlaywrightServiceContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  AccountQuotasGetOptionalParams,
  AccountQuotasListByAccountOptionalParams,
} from "../../models/options.js";

export function _accountQuotasGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  quotaName: QuotaNames,
  options: AccountQuotasGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}/quotas/{quotaName}",
      subscriptionId,
      resourceGroupName,
      accountName,
      quotaName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountQuotasGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AccountQuota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          freeTrial: !result.body.properties?.freeTrial
            ? undefined
            : {
                createdAt: new Date(
                  result.body.properties?.freeTrial?.["createdAt"],
                ),
                expiryAt: new Date(
                  result.body.properties?.freeTrial?.["expiryAt"],
                ),
                allocatedValue:
                  result.body.properties?.freeTrial?.["allocatedValue"],
                usedValue: result.body.properties?.freeTrial?.["usedValue"],
                percentageUsed:
                  result.body.properties?.freeTrial?.["percentageUsed"],
              },
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get quota by name for an account. */
export async function accountQuotasGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  quotaName: QuotaNames,
  options: AccountQuotasGetOptionalParams = { requestOptions: {} },
): Promise<AccountQuota> {
  const result = await _accountQuotasGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    accountName,
    quotaName,
    options,
  );
  return _accountQuotasGetDeserialize(result);
}

export function _accountQuotasListByAccountSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountQuotasListByAccountOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AzurePlaywrightService/accounts/{accountName}/quotas",
      subscriptionId,
      resourceGroupName,
      accountName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _accountQuotasListByAccountDeserialize(
  result: PathUncheckedResponse,
): Promise<_AccountQuotaListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              freeTrial: !p.properties?.freeTrial
                ? undefined
                : {
                    createdAt: new Date(p.properties?.freeTrial?.["createdAt"]),
                    expiryAt: new Date(p.properties?.freeTrial?.["expiryAt"]),
                    allocatedValue: p.properties?.freeTrial?.["allocatedValue"],
                    usedValue: p.properties?.freeTrial?.["usedValue"],
                    percentageUsed: p.properties?.freeTrial?.["percentageUsed"],
                  },
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List quotas for a given account. */
export function accountQuotasListByAccount(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  accountName: string,
  options: AccountQuotasListByAccountOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<AccountQuota> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _accountQuotasListByAccountSend(
        context,
        subscriptionId,
        resourceGroupName,
        accountName,
        options,
      ),
    _accountQuotasListByAccountDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
