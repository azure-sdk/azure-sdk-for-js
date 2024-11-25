// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  CapabilitiesCreateOrUpdateOptionalParams,
  CapabilitiesDeleteOptionalParams,
  CapabilitiesGetOptionalParams,
  CapabilitiesListOptionalParams,
  ChaosContext as Client,
} from "../index.js";
import {
  ChaosCapability,
  chaosCapabilitySerializer,
  chaosCapabilityDeserializer,
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

export function _capabilitiesGetSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _capabilitiesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosCapability> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosCapabilityDeserializer(result.body);
}

/** Get a Capability resource that extends a Target resource. */
export async function capabilitiesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  options: CapabilitiesGetOptionalParams = { requestOptions: {} },
): Promise<ChaosCapability> {
  const result = await _capabilitiesGetSend(
    context,
    subscriptionId,
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

export function _capabilitiesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: ChaosCapability,
  options: CapabilitiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{parentProviderNamespace}/{parentResourceType}/{parentResourceName}/providers/Microsoft.Chaos/targets/{targetName}/capabilities/{capabilityName}",
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: chaosCapabilitySerializer(resource),
    });
}

export async function _capabilitiesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ChaosCapability> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return chaosCapabilityDeserializer(result.body);
}

/** Create or update a Capability resource that extends a Target resource. */
export async function capabilitiesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  capabilityName: string,
  resource: ChaosCapability,
  options: CapabilitiesCreateOrUpdateOptionalParams = { requestOptions: {} },
): Promise<ChaosCapability> {
  const result = await _capabilitiesCreateOrUpdateSend(
    context,
    subscriptionId,
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

export function _capabilitiesDeleteSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
      capabilityName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _capabilitiesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a Capability that extends a Target resource. */
export async function capabilitiesDelete(
  context: Client,
  subscriptionId: string,
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
    subscriptionId,
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

export function _capabilitiesListSend(
  context: Client,
  subscriptionId: string,
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
      subscriptionId,
      resourceGroupName,
      parentProviderNamespace,
      parentResourceType,
      parentResourceName,
      targetName,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { continuationToken: options?.continuationToken },
    });
}

export async function _capabilitiesListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CapabilityListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _capabilityListResultDeserializer(result.body);
}

/** Get a list of Capability resources that extend a Target resource.. */
export function capabilitiesList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  parentProviderNamespace: string,
  parentResourceType: string,
  parentResourceName: string,
  targetName: string,
  options: CapabilitiesListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ChaosCapability> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _capabilitiesListSend(
        context,
        subscriptionId,
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
