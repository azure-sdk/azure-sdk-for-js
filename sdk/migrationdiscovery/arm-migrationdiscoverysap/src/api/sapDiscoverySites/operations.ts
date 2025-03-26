// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { WorkloadsContext as Client } from "../index.js";
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
  SAPDiscoverySitesImportEntitiesOptionalParams,
  SAPDiscoverySitesListBySubscriptionOptionalParams,
  SAPDiscoverySitesListByResourceGroupOptionalParams,
  SAPDiscoverySitesDeleteOptionalParams,
  SAPDiscoverySitesUpdateOptionalParams,
  SAPDiscoverySitesCreateOptionalParams,
  SAPDiscoverySitesGetOptionalParams,
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

export function _sapDiscoverySitesImportEntitiesSend(
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

export async function _sapDiscoverySitesImportEntitiesDeserialize(
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
export function sapDiscoverySitesImportEntities(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesImportEntitiesOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<OperationStatusResult>, OperationStatusResult> {
  return getLongRunningPoller(
    context,
    _sapDiscoverySitesImportEntitiesDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _sapDiscoverySitesImportEntitiesSend(
          context,
          resourceGroupName,
          sapDiscoverySiteName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<OperationStatusResult>, OperationStatusResult>;
}

export function _sapDiscoverySitesListBySubscriptionSend(
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

export async function _sapDiscoverySitesListBySubscriptionDeserialize(
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
export function sapDiscoverySitesListBySubscription(
  context: Client,
  options: SAPDiscoverySitesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () => _sapDiscoverySitesListBySubscriptionSend(context, options),
    _sapDiscoverySitesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapDiscoverySitesListByResourceGroupSend(
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

export async function _sapDiscoverySitesListByResourceGroupDeserialize(
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
export function sapDiscoverySitesListByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: SAPDiscoverySitesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<SAPDiscoverySite> {
  return buildPagedAsyncIterator(
    context,
    () => _sapDiscoverySitesListByResourceGroupSend(context, resourceGroupName, options),
    _sapDiscoverySitesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _sapDiscoverySitesDeleteSend(
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

export async function _sapDiscoverySitesDeleteDeserialize(
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
export function sapDiscoverySitesDelete(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _sapDiscoverySitesDeleteDeserialize, ["200", "202", "204"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sapDiscoverySitesDeleteSend(context, resourceGroupName, sapDiscoverySiteName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _sapDiscoverySitesUpdateSend(
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

export async function _sapDiscoverySitesUpdateDeserialize(
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
export async function sapDiscoverySitesUpdate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  properties: SAPDiscoverySiteTagsUpdate,
  options: SAPDiscoverySitesUpdateOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sapDiscoverySitesUpdateSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    properties,
    options,
  );
  return _sapDiscoverySitesUpdateDeserialize(result);
}

export function _sapDiscoverySitesCreateSend(
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

export async function _sapDiscoverySitesCreateDeserialize(
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
export function sapDiscoverySitesCreate(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  resource: SAPDiscoverySite,
  options: SAPDiscoverySitesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite> {
  return getLongRunningPoller(context, _sapDiscoverySitesCreateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _sapDiscoverySitesCreateSend(
        context,
        resourceGroupName,
        sapDiscoverySiteName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<SAPDiscoverySite>, SAPDiscoverySite>;
}

export function _sapDiscoverySitesGetSend(
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

export async function _sapDiscoverySitesGetDeserialize(
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
export async function sapDiscoverySitesGet(
  context: Client,
  resourceGroupName: string,
  sapDiscoverySiteName: string,
  options: SAPDiscoverySitesGetOptionalParams = { requestOptions: {} },
): Promise<SAPDiscoverySite> {
  const result = await _sapDiscoverySitesGetSend(
    context,
    resourceGroupName,
    sapDiscoverySiteName,
    options,
  );
  return _sapDiscoverySitesGetDeserialize(result);
}
