// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  SAPInstance,
  sapInstanceSerializer,
  sapInstanceDeserializer,
  SAPInstanceTagsUpdate,
  sapInstanceTagsUpdateSerializer,
  _SAPInstanceListResult,
  _sapInstanceListResultDeserializer,
} from "../../models/models.js";
import {
  SAPInstancesListBySapDiscoverySiteOptionalParams,
  SAPInstancesDeleteOptionalParams,
  SAPInstancesUpdateOptionalParams,
  SAPInstancesCreateOptionalParams,
  SAPInstancesGetOptionalParams,
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

export function _sapInstancesListBySapDiscoverySiteSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPInstancesListBySapDiscoverySiteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      "api-version": context.apiVersion,
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

export async function _sapInstancesListBySapDiscoverySiteDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPInstanceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapInstanceListResultDeserializer(result.body);
}

/** Lists the SAP Instance resources for the given SAP Migration discovery site resource. */
export function sapInstancesListBySapDiscoverySite(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPInstancesListBySapDiscoverySiteOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPInstance> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _sapInstancesListBySapDiscoverySiteSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        options,
      ),
    _sapInstancesListBySapDiscoverySiteDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapInstancesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _sapInstancesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes the SAP Instance resource. <br><br>This will be used by service only. Delete operation on this resource by end user will return a Bad Request error. You can delete the parent resource, which is the SAP Migration discovery site resource, using the delete operation on it. */
export function sapInstancesDelete(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _sapInstancesDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sapInstancesDeleteSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _sapInstancesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  properties: SAPInstanceTagsUpdate,
  options: SAPInstancesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: sapInstanceTagsUpdateSerializer(properties),
  });
}

export async function _sapInstancesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapInstanceDeserializer(result.body);
}

/** Updates the SAP Instance resource. */
export async function sapInstancesUpdate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  properties: SAPInstanceTagsUpdate,
  options: SAPInstancesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPInstance> {
  const result = await _sapInstancesUpdateSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    properties,
    options,
  );
  return _sapInstancesUpdateDeserialize(result);
}

export function _sapInstancesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  resource: SAPInstance,
  options: SAPInstancesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      "api-version": context.apiVersion,
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
    body: sapInstanceSerializer(resource),
  });
}

export async function _sapInstancesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapInstanceDeserializer(result.body);
}

/** Creates the SAP Instance resource. <br><br>This will be used by service only. PUT operation on this resource by end user will return a Bad Request error. */
export function sapInstancesCreate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  resource: SAPInstance,
  options: SAPInstancesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPInstance>, SAPInstance> {
  return getLongRunningPoller(context, _sapInstancesCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sapInstancesCreateSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        sapInstanceName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<SAPInstance>, SAPInstance>;
}

export function _sapInstancesGetSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/sapInstances/{sapInstanceName}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      sapDiscoverySiteName: sapDiscoverySiteName,
      sapInstanceName: sapInstanceName,
      "api-version": context.apiVersion,
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

export async function _sapInstancesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPInstance> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapInstanceDeserializer(result.body);
}

/** Gets the SAP Instance resource. */
export async function sapInstancesGet(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  sapInstanceName: string,
  options: SAPInstancesGetOptionalParams = { requestOptions: {} },
): Promise<SAPInstance> {
  const result = await _sapInstancesGetSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    sapInstanceName,
    options,
  );
  return _sapInstancesGetDeserialize(result);
}
