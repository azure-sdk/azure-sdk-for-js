// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  VirtualMachineTemplatesCreateOrUpdateOptionalParams,
  VirtualMachineTemplatesDeleteOptionalParams,
  VirtualMachineTemplatesGetOptionalParams,
  VirtualMachineTemplatesListByResourceGroupOptionalParams,
  VirtualMachineTemplatesListBySubscriptionOptionalParams,
  VirtualMachineTemplatesUpdateOptionalParams,
} from "../index.js";
import {
  VirtualMachineTemplate,
  virtualMachineTemplateSerializer,
  virtualMachineTemplateDeserializer,
  VirtualMachineTemplateTagsUpdate,
  virtualMachineTemplateTagsUpdateSerializer,
  _VirtualMachineTemplateListResult,
  _virtualMachineTemplateListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _virtualMachineTemplatesGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Implements VirtualMachineTemplate GET method. */
export async function virtualMachineTemplatesGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesGetOptionalParams = { requestOptions: {} },
): Promise<VirtualMachineTemplate> {
  const result = await _virtualMachineTemplatesGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    virtualMachineTemplateName,
    options,
  );
  return _virtualMachineTemplatesGetDeserialize(result);
}

export function _virtualMachineTemplatesCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: virtualMachineTemplateSerializer(resource),
    });
}

export async function _virtualMachineTemplatesCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Onboards the ScVmm VM Template as an Azure VM Template resource. */
export function virtualMachineTemplatesCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  resource: VirtualMachineTemplate,
  options: VirtualMachineTemplatesCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: virtualMachineTemplateTagsUpdateSerializer(properties),
    });
}

export async function _virtualMachineTemplatesUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<VirtualMachineTemplate> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return virtualMachineTemplateDeserializer(result.body);
}

/** Updates the VirtualMachineTemplate resource. */
export function virtualMachineTemplatesUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  properties: VirtualMachineTemplateTagsUpdate,
  options: VirtualMachineTemplatesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<VirtualMachineTemplate>, VirtualMachineTemplate> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<VirtualMachineTemplate>,
    VirtualMachineTemplate
  >;
}

export function _virtualMachineTemplatesDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates/{virtualMachineTemplateName}",
      subscriptionId,
      resourceGroupName,
      virtualMachineTemplateName,
    )
    .delete({
      ...operationOptionsToRequestParameters(options),
      queryParameters: { force: options?.force },
    });
}

export async function _virtualMachineTemplatesDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deregisters the ScVmm VM Template from Azure. */
export function virtualMachineTemplatesDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  virtualMachineTemplateName: string,
  options: VirtualMachineTemplatesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _virtualMachineTemplatesDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _virtualMachineTemplatesDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          virtualMachineTemplateName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _virtualMachineTemplatesListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualMachineTemplateListResultDeserializer(result.body);
}

/** List of VirtualMachineTemplates in a resource group. */
export function virtualMachineTemplatesListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: VirtualMachineTemplatesListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachineTemplatesListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _virtualMachineTemplatesListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _virtualMachineTemplatesListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ScVmm/virtualMachineTemplates",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _virtualMachineTemplatesListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_VirtualMachineTemplateListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _virtualMachineTemplateListResultDeserializer(result.body);
}

/** List of VirtualMachineTemplates in a subscription. */
export function virtualMachineTemplatesListBySubscription(
  context: Client,
  subscriptionId: string,
  options: VirtualMachineTemplatesListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VirtualMachineTemplate> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _virtualMachineTemplatesListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _virtualMachineTemplatesListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
