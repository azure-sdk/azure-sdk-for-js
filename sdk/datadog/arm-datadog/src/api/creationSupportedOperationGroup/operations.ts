// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatadogContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  _CreateResourceSupportedResponseList,
  _createResourceSupportedResponseListDeserializer,
  CreateResourceSupportedResponse,
  createResourceSupportedResponseDeserializer,
} from "../../models/models.js";
import {
  CreationSupportedOperationGroupGetOptionalParams,
  CreationSupportedOperationGroupListOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getSend(
  context: Client,
  datadogOrganizationId: string,
  options: CreationSupportedOperationGroupGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/subscriptionStatuses/default{?api%2Dversion,datadogOrganizationId}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
      datadogOrganizationId: datadogOrganizationId,
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
): Promise<CreateResourceSupportedResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return createResourceSupportedResponseDeserializer(result.body);
}

/** Informs if the current subscription is being already monitored for selected Datadog organization. */
export async function get(
  context: Client,
  datadogOrganizationId: string,
  options: CreationSupportedOperationGroupGetOptionalParams = {
    requestOptions: {},
  },
): Promise<CreateResourceSupportedResponse> {
  const result = await _getSend(context, datadogOrganizationId, options);
  return _getDeserialize(result);
}

export function _listSend(
  context: Client,
  datadogOrganizationId: string,
  options: CreationSupportedOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Datadog/subscriptionStatuses{?api%2Dversion,datadogOrganizationId}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
      datadogOrganizationId: datadogOrganizationId,
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
): Promise<_CreateResourceSupportedResponseList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _createResourceSupportedResponseListDeserializer(result.body);
}

/** Informs if the current subscription is being already monitored for selected Datadog organization. */
export function list(
  context: Client,
  datadogOrganizationId: string,
  options: CreationSupportedOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CreateResourceSupportedResponse> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, datadogOrganizationId, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
