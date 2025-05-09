// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  DatadogSingleSignOnResource,
  datadogSingleSignOnResourceSerializer,
  datadogSingleSignOnResourceDeserializer,
  _DatadogSingleSignOnResourceListResponse,
  _datadogSingleSignOnResourceListResponseDeserializer,
} from "../../models/models.js";
import {
  DatadogSingleSignOnResourcesListOptionalParams,
  DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams,
  DatadogSingleSignOnResourcesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _listSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogSingleSignOnResourcesListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_DatadogSingleSignOnResourceListResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _datadogSingleSignOnResourceListResponseDeserializer(result.body);
}

/** List the single sign-on configurations for a given monitor resource. */
export function list(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  options: DatadogSingleSignOnResourcesListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DatadogSingleSignOnResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, monitorName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  configurationName: string,
  body: DatadogSingleSignOnResource,
  options: DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      configurationName: configurationName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: datadogSingleSignOnResourceSerializer(body),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogSingleSignOnResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogSingleSignOnResourceDeserializer(result.body);
}

/** Configures single-sign-on for this resource. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  configurationName: string,
  body: DatadogSingleSignOnResource,
  options: DatadogSingleSignOnResourcesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<DatadogSingleSignOnResource>, DatadogSingleSignOnResource> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        monitorName,
        configurationName,
        body,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<DatadogSingleSignOnResource>, DatadogSingleSignOnResource>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  configurationName: string,
  options: DatadogSingleSignOnResourcesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Datadog/monitors/{monitorName}/singleSignOnConfigurations/{configurationName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      monitorName: monitorName,
      configurationName: configurationName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<DatadogSingleSignOnResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return datadogSingleSignOnResourceDeserializer(result.body);
}

/** Gets the datadog single sign-on resource for the given Monitor. */
export async function get(
  context: Client,
  resourceGroupName: string,
  monitorName: string,
  configurationName: string,
  options: DatadogSingleSignOnResourcesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<DatadogSingleSignOnResource> {
  const result = await _getSend(
    context,
    resourceGroupName,
    monitorName,
    configurationName,
    options,
  );
  return _getDeserialize(result);
}
