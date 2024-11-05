// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CheckNameAvailabilityRequest,
  CheckNameAvailabilityResponse,
  GetCollectionCountRequest,
  GetCollectionCountResponse,
  GetOverviewStatusRequest,
  GetOverviewStatusResponse,
  OnboardRequest,
  TriggerEvaluationRequest,
  ListInUseStorageAccountsRequest,
  ListInUseStorageAccountsResponse,
} from "../../models/models.js";
import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ProviderActionsCheckNameAvailabilityOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsListInUseStorageAccountsOptionalParams,
} from "../../models/options.js";

export function _providerActionsCheckNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/checkNameAvailability")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { name: body["name"], type: body["type"] },
    });
}

export async function _providerActionsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    nameAvailable: result.body["nameAvailable"],
    reason: result.body["reason"],
    message: result.body["message"],
  };
}

/** Check if the given name is available for a report. */
export async function providerActionsCheckNameAvailability(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _providerActionsCheckNameAvailabilitySend(
    context,
    body,
    options,
  );
  return _providerActionsCheckNameAvailabilityDeserialize(result);
}

export function _providerActionsGetCollectionCountSend(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/getCollectionCount")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { type: body["type"] },
    });
}

export async function _providerActionsGetCollectionCountDeserialize(
  result: PathUncheckedResponse,
): Promise<GetCollectionCountResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    count: result.body["count"],
  };
}

/** Get the count of reports. */
export async function providerActionsGetCollectionCount(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): Promise<GetCollectionCountResponse> {
  const result = await _providerActionsGetCollectionCountSend(
    context,
    body,
    options,
  );
  return _providerActionsGetCollectionCountDeserialize(result);
}

export function _providerActionsGetOverviewStatusSend(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/getOverviewStatus")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { type: body["type"] },
    });
}

export async function _providerActionsGetOverviewStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<GetOverviewStatusResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    statusList:
      result.body["statusList"] === undefined
        ? result.body["statusList"]
        : result.body["statusList"].map((p: any) => {
            return {
              statusName: p["statusName"],
              statusValue: p["statusValue"],
            };
          }),
  };
}

/** Get the resource overview status. */
export async function providerActionsGetOverviewStatus(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): Promise<GetOverviewStatusResponse> {
  const result = await _providerActionsGetOverviewStatusSend(
    context,
    body,
    options,
  );
  return _providerActionsGetOverviewStatusDeserialize(result);
}

export function _providerActionsOnboardSend(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/onboard")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subscriptionIds: body["subscriptionIds"] },
    });
}

export async function _providerActionsOnboardDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
export function providerActionsOnboard(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _providerActionsOnboardDeserialize,
    ["200", "202", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerActionsOnboardSend(context, body, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _providerActionsTriggerEvaluationSend(
  context: Client,
  body: TriggerEvaluationRequest,
  options: ProviderActionsTriggerEvaluationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path("/providers/Microsoft.AppComplianceAutomation/triggerEvaluation")
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { resourceIds: body["resourceIds"] },
    });
}

export async function _providerActionsTriggerEvaluationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Trigger quick evaluation for the given subscriptions. */
export function providerActionsTriggerEvaluation(
  context: Client,
  body: TriggerEvaluationRequest,
  options: ProviderActionsTriggerEvaluationOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _providerActionsTriggerEvaluationDeserialize,
    ["200", "202", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _providerActionsTriggerEvaluationSend(context, body, options),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _providerActionsListInUseStorageAccountsSend(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts",
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: { subscriptionIds: body["subscriptionIds"] },
    });
}

export async function _providerActionsListInUseStorageAccountsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListInUseStorageAccountsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    storageAccountList:
      result.body["storageAccountList"] === undefined
        ? result.body["storageAccountList"]
        : result.body["storageAccountList"].map((p: any) => {
            return {
              subscriptionId: p["subscriptionId"],
              resourceGroup: p["resourceGroup"],
              accountName: p["accountName"],
              location: p["location"],
            };
          }),
  };
}

/** List the storage accounts which are in use by related reports */
export async function providerActionsListInUseStorageAccounts(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListInUseStorageAccountsResponse> {
  const result = await _providerActionsListInUseStorageAccountsSend(
    context,
    body,
    options,
  );
  return _providerActionsListInUseStorageAccountsDeserialize(result);
}
