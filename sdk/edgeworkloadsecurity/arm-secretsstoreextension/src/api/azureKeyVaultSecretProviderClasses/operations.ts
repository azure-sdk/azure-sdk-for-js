// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { SecretsStoreExtensionManagementContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  AzureKeyVaultSecretProviderClass,
  azureKeyVaultSecretProviderClassSerializer,
  azureKeyVaultSecretProviderClassDeserializer,
  AzureKeyVaultSecretProviderClassUpdate,
  azureKeyVaultSecretProviderClassUpdateSerializer,
  _AzureKeyVaultSecretProviderClassListResult,
  _azureKeyVaultSecretProviderClassListResultDeserializer,
} from "../../models/models.js";
import {
  AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams,
  AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams,
  AzureKeyVaultSecretProviderClassesDeleteOptionalParams,
  AzureKeyVaultSecretProviderClassesUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams,
  AzureKeyVaultSecretProviderClassesGetOptionalParams,
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

export function _listBySubscriptionSend(
  context: Client,
  options: AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
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

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureKeyVaultSecretProviderClassListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _azureKeyVaultSecretProviderClassListResultDeserializer(result.body);
}

/** Lists the AzureKeyVaultSecretProviderClass instances within an Azure subscription. */
export function listBySubscription(
  context: Client,
  options: AzureKeyVaultSecretProviderClassesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureKeyVaultSecretProviderClass> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  resourceGroupName: string,
  options: AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
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

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_AzureKeyVaultSecretProviderClassListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _azureKeyVaultSecretProviderClassListResultDeserializer(result.body);
}

/** Lists the AzureKeyVaultSecretProviderClass instances within a resource group. */
export function listByResourceGroup(
  context: Client,
  resourceGroupName: string,
  options: AzureKeyVaultSecretProviderClassesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AzureKeyVaultSecretProviderClass> {
  return buildPagedAsyncIterator(
    context,
    () => _listByResourceGroupSend(context, resourceGroupName, options),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  options: AzureKeyVaultSecretProviderClassesDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses/{azureKeyVaultSecretProviderClassName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureKeyVaultSecretProviderClassName: azureKeyVaultSecretProviderClassName,
      "api%2Dversion": context.apiVersion,
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

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Deletes an AzureKeyVaultSecretProviderClass instance. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  options: AzureKeyVaultSecretProviderClassesDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _$deleteDeserialize, ["202", "204", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _$deleteSend(context, resourceGroupName, azureKeyVaultSecretProviderClassName, options),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  properties: AzureKeyVaultSecretProviderClassUpdate,
  options: AzureKeyVaultSecretProviderClassesUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses/{azureKeyVaultSecretProviderClassName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureKeyVaultSecretProviderClassName: azureKeyVaultSecretProviderClassName,
      "api%2Dversion": context.apiVersion,
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
    body: azureKeyVaultSecretProviderClassUpdateSerializer(properties),
  });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureKeyVaultSecretProviderClass> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureKeyVaultSecretProviderClassDeserializer(result.body);
}

/** Updates an AzureKeyVaultSecretProviderClass instance. */
export function update(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  properties: AzureKeyVaultSecretProviderClassUpdate,
  options: AzureKeyVaultSecretProviderClassesUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AzureKeyVaultSecretProviderClass>, AzureKeyVaultSecretProviderClass> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        azureKeyVaultSecretProviderClassName,
        properties,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<
    OperationState<AzureKeyVaultSecretProviderClass>,
    AzureKeyVaultSecretProviderClass
  >;
}

export function _createOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  resource: AzureKeyVaultSecretProviderClass,
  options: AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses/{azureKeyVaultSecretProviderClassName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureKeyVaultSecretProviderClassName: azureKeyVaultSecretProviderClassName,
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
    body: azureKeyVaultSecretProviderClassSerializer(resource),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<AzureKeyVaultSecretProviderClass> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureKeyVaultSecretProviderClassDeserializer(result.body);
}

/** Creates, or updates, an AzureKeyVaultSecretProviderClass instance. */
export function createOrUpdate(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  resource: AzureKeyVaultSecretProviderClass,
  options: AzureKeyVaultSecretProviderClassesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<AzureKeyVaultSecretProviderClass>, AzureKeyVaultSecretProviderClass> {
  return getLongRunningPoller(context, _createOrUpdateDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createOrUpdateSend(
        context,
        resourceGroupName,
        azureKeyVaultSecretProviderClassName,
        resource,
        options,
      ),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<
    OperationState<AzureKeyVaultSecretProviderClass>,
    AzureKeyVaultSecretProviderClass
  >;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  options: AzureKeyVaultSecretProviderClassesGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.SecretSyncController/azureKeyVaultSecretProviderClasses/{azureKeyVaultSecretProviderClassName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      azureKeyVaultSecretProviderClassName: azureKeyVaultSecretProviderClassName,
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
): Promise<AzureKeyVaultSecretProviderClass> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return azureKeyVaultSecretProviderClassDeserializer(result.body);
}

/** Gets the properties of an AzureKeyVaultSecretProviderClass instance. */
export async function get(
  context: Client,
  resourceGroupName: string,
  azureKeyVaultSecretProviderClassName: string,
  options: AzureKeyVaultSecretProviderClassesGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AzureKeyVaultSecretProviderClass> {
  const result = await _getSend(
    context,
    resourceGroupName,
    azureKeyVaultSecretProviderClassName,
    options,
  );
  return _getDeserialize(result);
}
