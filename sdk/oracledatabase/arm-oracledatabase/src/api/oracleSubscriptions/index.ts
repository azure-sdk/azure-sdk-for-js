// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  oracleSubscriptionPropertiesSerializer,
  planSerializer,
  planUpdateSerializer,
  oracleSubscriptionUpdatePropertiesSerializer,
  OracleSubscription,
  OracleSubscriptionUpdate,
  AzureSubscriptions,
  _OracleSubscriptionListResult,
} from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
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
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
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

export function _oracleSubscriptionsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_OracleSubscriptionListResult> {
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
              provisioningState: p.properties?.["provisioningState"],
              saasSubscriptionId: p.properties?.["saasSubscriptionId"],
              cloudAccountId: p.properties?.["cloudAccountId"],
              cloudAccountState: p.properties?.["cloudAccountState"],
              termUnit: p.properties?.["termUnit"],
              productCode: p.properties?.["productCode"],
              intent: p.properties?.["intent"],
              azureSubscriptionIds: p.properties?.["azureSubscriptionIds"],
              addSubscriptionOperationState:
                p.properties?.["addSubscriptionOperationState"],
              lastOperationStatusDetail:
                p.properties?.["lastOperationStatusDetail"],
            },
        plan: !p.plan
          ? undefined
          : {
              name: p.plan?.["name"],
              publisher: p.plan?.["publisher"],
              product: p.plan?.["product"],
              promotionCode: p.plan?.["promotionCode"],
              version: p.plan?.["version"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List OracleSubscription resources by subscription ID */
export function oracleSubscriptionsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OracleSubscription> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _oracleSubscriptionsListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _oracleSubscriptionsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _oracleSubscriptionsGetSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
          azureSubscriptionIds:
            result.body.properties?.["azureSubscriptionIds"],
          addSubscriptionOperationState:
            result.body.properties?.["addSubscriptionOperationState"],
          lastOperationStatusDetail:
            result.body.properties?.["lastOperationStatusDetail"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Get a OracleSubscription */
export async function oracleSubscriptionsGet(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsGetOptionalParams = { requestOptions: {} },
): Promise<OracleSubscription> {
  const result = await _oracleSubscriptionsGetSend(
    context,
    subscriptionId,
    options,
  );
  return _oracleSubscriptionsGetDeserialize(result);
}

export function _oracleSubscriptionsUpdateSend(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        plan: !properties.plan
          ? properties.plan
          : planUpdateSerializer(properties.plan),
        properties: !properties.properties
          ? properties.properties
          : oracleSubscriptionUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _oracleSubscriptionsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "202"];
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
          azureSubscriptionIds:
            result.body.properties?.["azureSubscriptionIds"],
          addSubscriptionOperationState:
            result.body.properties?.["addSubscriptionOperationState"],
          lastOperationStatusDetail:
            result.body.properties?.["lastOperationStatusDetail"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Update a OracleSubscription */
export function oracleSubscriptionsUpdate(
  context: Client,
  subscriptionId: string,
  properties: OracleSubscriptionUpdate,
  options: OracleSubscriptionsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsUpdateSend(
          context,
          subscriptionId,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsDeleteSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a OracleSubscription */
export function oracleSubscriptionsDelete(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsDeleteSend(context, subscriptionId, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default",
      subscriptionId,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : oracleSubscriptionPropertiesSerializer(resource.properties),
        plan: !resource.plan ? resource.plan : planSerializer(resource.plan),
      },
    });
}

export async function _oracleSubscriptionsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<OracleSubscription> {
  const expectedStatuses = ["200", "201"];
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
          provisioningState: result.body.properties?.["provisioningState"],
          saasSubscriptionId: result.body.properties?.["saasSubscriptionId"],
          cloudAccountId: result.body.properties?.["cloudAccountId"],
          cloudAccountState: result.body.properties?.["cloudAccountState"],
          termUnit: result.body.properties?.["termUnit"],
          productCode: result.body.properties?.["productCode"],
          intent: result.body.properties?.["intent"],
          azureSubscriptionIds:
            result.body.properties?.["azureSubscriptionIds"],
          addSubscriptionOperationState:
            result.body.properties?.["addSubscriptionOperationState"],
          lastOperationStatusDetail:
            result.body.properties?.["lastOperationStatusDetail"],
        },
    plan: !result.body.plan
      ? undefined
      : {
          name: result.body.plan?.["name"],
          publisher: result.body.plan?.["publisher"],
          product: result.body.plan?.["product"],
          promotionCode: result.body.plan?.["promotionCode"],
          version: result.body.plan?.["version"],
        },
  };
}

/** Create a OracleSubscription */
export function oracleSubscriptionsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resource: OracleSubscription,
  options: OracleSubscriptionsCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OracleSubscription>, OracleSubscription> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsCreateOrUpdateSend(
          context,
          subscriptionId,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<OracleSubscription>, OracleSubscription>;
}

export function _oracleSubscriptionsListCloudAccountDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listCloudAccountDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListCloudAccountDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Cloud Account Details */
export function oracleSubscriptionsListCloudAccountDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListCloudAccountDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListCloudAccountDetailsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListCloudAccountDetailsSend(
          context,
          subscriptionId,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListSaasSubscriptionDetailsSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listSaasSubscriptionDetails",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListSaasSubscriptionDetailsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Saas Subscription Details */
export function oracleSubscriptionsListSaasSubscriptionDetails(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListSaasSubscriptionDetailsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListSaasSubscriptionDetailsDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListSaasSubscriptionDetailsSend(
          context,
          subscriptionId,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsListActivationLinksSend(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/listActivationLinks",
      subscriptionId,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _oracleSubscriptionsListActivationLinksDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** List Activation Links */
export function oracleSubscriptionsListActivationLinks(
  context: Client,
  subscriptionId: string,
  options: OracleSubscriptionsListActivationLinksOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsListActivationLinksDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsListActivationLinksSend(
          context,
          subscriptionId,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _oracleSubscriptionsAddAzureSubscriptionsSend(
  context: Client,
  subscriptionId: string,
  body: AzureSubscriptions,
  options: OracleSubscriptionsAddAzureSubscriptionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/oracleSubscriptions/default/addAzureSubscriptions",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { azureSubscriptionIds: body["azureSubscriptionIds"] },
    });
}

export async function _oracleSubscriptionsAddAzureSubscriptionsDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Add Azure Subscriptions */
export function oracleSubscriptionsAddAzureSubscriptions(
  context: Client,
  subscriptionId: string,
  body: AzureSubscriptions,
  options: OracleSubscriptionsAddAzureSubscriptionsOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _oracleSubscriptionsAddAzureSubscriptionsDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _oracleSubscriptionsAddAzureSubscriptionsSend(
          context,
          subscriptionId,
          body,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
