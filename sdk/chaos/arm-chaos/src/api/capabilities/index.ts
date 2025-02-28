// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CapabilitiesCreateOrUpdateOptionalParams,
  CapabilitiesDeleteOptionalParams,
  CapabilitiesGetOptionalParams,
  CapabilitiesListOptionalParams,
  ChaosManagementContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  Capability,
  capabilitySerializer,
  capabilityDeserializer,
  _CapabilityListResult,
  _capabilityListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _capabilitiesListSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: CapabilitiesListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities",
      context.subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: {
        "api-version": context.apiVersion,
        continuationToken: options?.continuationToken,
      },
    });
}

export async function _capabilitiesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _capabilityListResultDeserializer(result.body);
}

/** Get a list of Capability resources that extend a Target resource. */
export function capabilitiesList(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: CapabilitiesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Capability> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _capabilitiesListSend(
        context,
        resourceGroupName,
        parentProviderNamespace,
        parentResourceType,
        parentResourceName,
        targetName,
        options,
      ),
    _capabilitiesListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _capabilitiesDeleteSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: CapabilitiesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      context.subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _capabilitiesDeleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a Capability that extends a Target resource. */
export async function capabilitiesDelete(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: CapabilitiesDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _capabilitiesDeleteSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    options,
  );
  return _capabilitiesDeleteDeserialize(result);
}

export function _capabilitiesCreateOrUpdateSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: Capability,
  options: CapabilitiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      context.subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: capabilitySerializer(resource),
    });
}

export async function _capabilitiesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Capability> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityDeserializer(result.body);
}

/** Create or update a Capability resource that extends a Target resource. */
export async function capabilitiesCreateOrUpdate(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: Capability,
  options: CapabilitiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<Capability> {
  const result = await _capabilitiesCreateOrUpdateSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    resource,
    options,
  );
  return _capabilitiesCreateOrUpdateDeserialize(result);
}

export function _capabilitiesGetSend(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: CapabilitiesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      context.subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _capabilitiesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Capability> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return capabilityDeserializer(result.body);
}

/** Get a Capability resource that extends a Target resource. */
export async function capabilitiesGet(
  context: Client,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: CapabilitiesGetOptionalParams = { requestOptions: {} },
): Promise<Capability> {
  const result = await _capabilitiesGetSend(
    context,
    resourceGroupName,
    parentProviderNamespace,
    parentResourceType,
    parentResourceName,
    targetName,
    capabilityName,
    options,
  );
  return _capabilitiesGetDeserialize(result);
}
