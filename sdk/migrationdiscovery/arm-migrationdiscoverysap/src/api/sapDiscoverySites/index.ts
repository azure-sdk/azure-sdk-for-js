// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  WorkloadsContext as Client,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesGetOptionalParams,
  SAPDiscoverySitesImportEntitiesOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  SAPDiscoverySite,
  sapDiscoverySiteSerializer,
  sapDiscoverySiteDeserializer,
  SAPDiscoverySiteTagsUpdate,
  sapDiscoverySiteTagsUpdateSerializer,
  _SAPDiscoverySiteListResult,
  _sapDiscoverySiteListResultDeserializer,
  OperationStatusResult,
  operationStatusResultDeserializer,
} from "../../models/models.js";
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

export function _sAPDiscoverySitesImportEntitiesSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesImportEntitiesOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}/importEntities{?api-version}",
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
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _sAPDiscoverySitesImportEntitiesDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Import your SAP systems' inventory using the [Discovery template](https://go.microsoft.com/fwlink/?linkid=2249111) into your SAP Migration discovery site resource and it's child resources, the SAP instances and Server instances. */
export function sAPDiscoverySitesImportEntities(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesImportEntitiesOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sAPDiscoverySitesImportEntitiesDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sAPDiscoverySitesImportEntitiesSend(
          context,
          resourceGroupName,
          sapDiscoverySiteName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sAPDiscoverySitesListBySubscriptionSend(
  context: Client,
  options: SAPDiscoverySitesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.Workloads/sapDiscoverySites{?api-version}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _sAPDiscoverySitesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDiscoverySiteListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapDiscoverySiteListResultDeserializer(result.body);
}

/** Gets all SAP Migration discovery site resources in a Subscription. */
export function sAPDiscoverySitesListBySubscription(
  context: Client,
  options: SAPDiscoverySitesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () => _sAPDiscoverySitesListBySubscriptionSend(context, options),
    _sAPDiscoverySitesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPDiscoverySitesListByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: SAPDiscoverySitesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _sAPDiscoverySitesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_SAPDiscoverySiteListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _sapDiscoverySiteListResultDeserializer(result.body);
}

/** Gets all SAP Migration discovery site resources in a Resource Group. */
export function sAPDiscoverySitesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SAPDiscoverySitesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () => _sAPDiscoverySitesListByResourceGroupSend(context, resourceGroupName, options),
    _sAPDiscoverySitesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sAPDiscoverySitesDeleteSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}{?api-version}",
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
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _sAPDiscoverySitesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes a SAP Migration discovery site resource and its child resources, that is the associated SAP Instances and Server Instances. */
export function sAPDiscoverySitesDelete(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _sAPDiscoverySitesDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sAPDiscoverySitesDeleteSend(context, resourceGroupName, sapDiscoverySiteName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _sAPDiscoverySitesUpdateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  properties: SAPDiscoverySiteTagsUpdate,
  options: SAPDiscoverySitesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}{?api-version}",
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
  return context.path(path).patch({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: sapDiscoverySiteTagsUpdateSerializer(properties),
  });
}

export async function _sAPDiscoverySitesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDiscoverySiteDeserializer(result.body);
}

/** Updates a SAP Migration discovery site resource. */
export async function sAPDiscoverySitesUpdate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  properties: SAPDiscoverySiteTagsUpdate,
  options: SAPDiscoverySitesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sAPDiscoverySitesUpdateSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    properties,
    options,
  );
  return _sAPDiscoverySitesUpdateDeserialize(result);
}

export function _sAPDiscoverySitesCreateSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  resource: SAPDiscoverySite,
  options: SAPDiscoverySitesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}{?api-version}",
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
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: sapDiscoverySiteSerializer(resource),
  });
}

export async function _sAPDiscoverySitesCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDiscoverySiteDeserializer(result.body);
}

/** Creates a discovery site resource for SAP Migration. This resource will be used to run system discovery and assessment with Azure Migrate. */
export function sAPDiscoverySitesCreate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  resource: SAPDiscoverySite,
  options: SAPDiscoverySitesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite> {
  return getLongRunningPoller(context, _sAPDiscoverySitesCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sAPDiscoverySitesCreateSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite>;
}

export function _sAPDiscoverySitesGetSend(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Workloads/sapDiscoverySites/{sapDiscoverySiteName}{?api-version}",
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

export async function _sAPDiscoverySitesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SAPDiscoverySite> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return sapDiscoverySiteDeserializer(result.body);
}

/** Gets a SAP Migration discovery site resource. */
export async function sAPDiscoverySitesGet(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesGetOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sAPDiscoverySitesGetSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    options,
  );
  return _sAPDiscoverySitesGetDeserialize(result);
}
