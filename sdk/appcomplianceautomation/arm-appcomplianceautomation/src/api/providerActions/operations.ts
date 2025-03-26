// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  CheckNameAvailabilityRequest,
  checkNameAvailabilityRequestSerializer,
  CheckNameAvailabilityResponse,
  checkNameAvailabilityResponseDeserializer,
  errorResponseDeserializer,
  GetCollectionCountRequest,
  getCollectionCountRequestSerializer,
  GetCollectionCountResponse,
  getCollectionCountResponseDeserializer,
  GetOverviewStatusRequest,
  getOverviewStatusRequestSerializer,
  GetOverviewStatusResponse,
  getOverviewStatusResponseDeserializer,
  OnboardRequest,
  onboardRequestSerializer,
  TriggerEvaluationRequest,
  triggerEvaluationRequestSerializer,
  ListInUseStorageAccountsRequest,
  listInUseStorageAccountsRequestSerializer,
  ListInUseStorageAccountsResponse,
  listInUseStorageAccountsResponseDeserializer,
} from "../../models/models.js";
import {
  ProviderActionsListInUseStorageAccountsOptionalParams,
  ProviderActionsTriggerEvaluationOptionalParams,
  ProviderActionsOnboardOptionalParams,
  ProviderActionsGetOverviewStatusOptionalParams,
  ProviderActionsGetCollectionCountOptionalParams,
  ProviderActionsCheckNameAvailabilityOptionalParams,
} from "./options.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _providerActionsListInUseStorageAccountsSend(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/listInUseStorageAccounts{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: listInUseStorageAccountsRequestSerializer(body),
  });
}

export async function _providerActionsListInUseStorageAccountsDeserialize(
  result: PathUncheckedResponse,
): Promise<ListInUseStorageAccountsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return listInUseStorageAccountsResponseDeserializer(result.body);
}

/** List the storage accounts which are in use by related reports */
export async function providerActionsListInUseStorageAccounts(
  context: Client,
  body: ListInUseStorageAccountsRequest,
  options: ProviderActionsListInUseStorageAccountsOptionalParams = {
    requestOptions: {},
  },
): Promise<ListInUseStorageAccountsResponse> {
  const result = await _providerActionsListInUseStorageAccountsSend(context, body, options);
  return _providerActionsListInUseStorageAccountsDeserialize(result);
}

export function _providerActionsTriggerEvaluationSend(
  context: Client,
  body: TriggerEvaluationRequest,
  options: ProviderActionsTriggerEvaluationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/triggerEvaluation{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: triggerEvaluationRequestSerializer(body),
  });
}

export async function _providerActionsTriggerEvaluationDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
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
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () => _providerActionsTriggerEvaluationSend(context, body, options),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _providerActionsOnboardSend(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/onboard{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: onboardRequestSerializer(body),
  });
}

export async function _providerActionsOnboardDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Onboard given subscriptions to Microsoft.AppComplianceAutomation provider. */
export function providerActionsOnboard(
  context: Client,
  body: OnboardRequest,
  options: ProviderActionsOnboardOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _providerActionsOnboardDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _providerActionsOnboardSend(context, body, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _providerActionsGetOverviewStatusSend(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/getOverviewStatus{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: getOverviewStatusRequestSerializer(body),
  });
}

export async function _providerActionsGetOverviewStatusDeserialize(
  result: PathUncheckedResponse,
): Promise<GetOverviewStatusResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return getOverviewStatusResponseDeserializer(result.body);
}

/** Get the resource overview status. */
export async function providerActionsGetOverviewStatus(
  context: Client,
  body: GetOverviewStatusRequest,
  options: ProviderActionsGetOverviewStatusOptionalParams = {
    requestOptions: {},
  },
): Promise<GetOverviewStatusResponse> {
  const result = await _providerActionsGetOverviewStatusSend(context, body, options);
  return _providerActionsGetOverviewStatusDeserialize(result);
}

export function _providerActionsGetCollectionCountSend(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/getCollectionCount{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: getCollectionCountRequestSerializer(body),
  });
}

export async function _providerActionsGetCollectionCountDeserialize(
  result: PathUncheckedResponse,
): Promise<GetCollectionCountResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return getCollectionCountResponseDeserializer(result.body);
}

/** Get the count of reports. */
export async function providerActionsGetCollectionCount(
  context: Client,
  body: GetCollectionCountRequest,
  options: ProviderActionsGetCollectionCountOptionalParams = {
    requestOptions: {},
  },
): Promise<GetCollectionCountResponse> {
  const result = await _providerActionsGetCollectionCountSend(context, body, options);
  return _providerActionsGetCollectionCountDeserialize(result);
}

export function _providerActionsCheckNameAvailabilitySend(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/checkNameAvailability{?api-version}",
    {
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkNameAvailabilityRequestSerializer(body),
  });
}

export async function _providerActionsCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseDeserializer(result.body);
}

/** Check if the given name is available for a report. */
export async function providerActionsCheckNameAvailability(
  context: Client,
  body: CheckNameAvailabilityRequest,
  options: ProviderActionsCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponse> {
  const result = await _providerActionsCheckNameAvailabilitySend(context, body, options);
  return _providerActionsCheckNameAvailabilityDeserialize(result);
}
