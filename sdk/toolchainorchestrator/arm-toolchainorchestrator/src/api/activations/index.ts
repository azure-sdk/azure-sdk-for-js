// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  extendedLocationSerializer,
  activationPropertiesSerializer,
  Activation,
  ActivationTagsUpdate,
  _ActivationListResult,
} from "../../models/models.js";
import { ToolchainOrchestratorContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ActivationsGetOptionalParams,
  ActivationsCreateOrUpdateOptionalParams,
  ActivationsUpdateOptionalParams,
  ActivationsDeleteOptionalParams,
  ActivationsListByResourceGroupOptionalParams,
  ActivationsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _activationsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  options: ActivationsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}",
      subscriptionId,
      resourceGroupName,
      activationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _activationsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Activation> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          inputs: result.body.properties?.["inputs"],
          stage: result.body.properties?.["stage"],
          campaign: result.body.properties?.["campaign"],
          status: !result.body.properties?.status
            ? undefined
            : {
                stageHistory:
                  result.body.properties?.status?.["stageHistory"] === undefined
                    ? result.body.properties?.status?.["stageHistory"]
                    : result.body.properties?.status?.["stageHistory"].map(
                        (p: any) => {
                          return {
                            inputs: p["inputs"],
                            outputs: p["outputs"],
                            stage: p["stage"],
                            isActive: p["isActive"],
                            nextStage: p["nextStage"],
                            errorMessage: p["errorMessage"],
                            status: p["status"],
                            statusMessage: p["statusMessage"],
                          };
                        },
                      ),
                activationGeneration:
                  result.body.properties?.status?.["activationGeneration"],
                updateTime: result.body.properties?.status?.["updateTime"],
                status: result.body.properties?.status?.["status"],
                statusMessage:
                  result.body.properties?.status?.["statusMessage"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Returns the details of the activation. */
export async function activationsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  options: ActivationsGetOptionalParams = { requestOptions: {} },
): Promise<Activation> {
  const result = await _activationsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    activationName,
    options,
  );
  return _activationsGetDeserialize(result);
}

export function _activationsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  resource: Activation,
  options: ActivationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}",
      subscriptionId,
      resourceGroupName,
      activationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !resource.tags
          ? resource.tags
          : (serializeRecord(resource.tags as any) as any),
        location: resource["location"],
        properties: !resource.properties
          ? resource.properties
          : activationPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _activationsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Activation> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          inputs: result.body.properties?.["inputs"],
          stage: result.body.properties?.["stage"],
          campaign: result.body.properties?.["campaign"],
          status: !result.body.properties?.status
            ? undefined
            : {
                stageHistory:
                  result.body.properties?.status?.["stageHistory"] === undefined
                    ? result.body.properties?.status?.["stageHistory"]
                    : result.body.properties?.status?.["stageHistory"].map(
                        (p: any) => {
                          return {
                            inputs: p["inputs"],
                            outputs: p["outputs"],
                            stage: p["stage"],
                            isActive: p["isActive"],
                            nextStage: p["nextStage"],
                            errorMessage: p["errorMessage"],
                            status: p["status"],
                            statusMessage: p["statusMessage"],
                          };
                        },
                      ),
                activationGeneration:
                  result.body.properties?.status?.["activationGeneration"],
                updateTime: result.body.properties?.status?.["updateTime"],
                status: result.body.properties?.status?.["status"],
                statusMessage:
                  result.body.properties?.status?.["statusMessage"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Creates a new or updates an existing activation. */
export function activationsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  resource: Activation,
  options: ActivationsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Activation>, Activation> {
  return getLongRunningPoller(
    context,
    _activationsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _activationsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          activationName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Activation>, Activation>;
}

export function _activationsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  properties: ActivationTagsUpdate,
  options: ActivationsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}",
      subscriptionId,
      resourceGroupName,
      activationName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
      },
    });
}

export async function _activationsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Activation> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    tags: result.body["tags"],
    location: result.body["location"],
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          provisioningState: result.body.properties?.["provisioningState"],
          inputs: result.body.properties?.["inputs"],
          stage: result.body.properties?.["stage"],
          campaign: result.body.properties?.["campaign"],
          status: !result.body.properties?.status
            ? undefined
            : {
                stageHistory:
                  result.body.properties?.status?.["stageHistory"] === undefined
                    ? result.body.properties?.status?.["stageHistory"]
                    : result.body.properties?.status?.["stageHistory"].map(
                        (p: any) => {
                          return {
                            inputs: p["inputs"],
                            outputs: p["outputs"],
                            stage: p["stage"],
                            isActive: p["isActive"],
                            nextStage: p["nextStage"],
                            errorMessage: p["errorMessage"],
                            status: p["status"],
                            statusMessage: p["statusMessage"],
                          };
                        },
                      ),
                activationGeneration:
                  result.body.properties?.status?.["activationGeneration"],
                updateTime: result.body.properties?.status?.["updateTime"],
                status: result.body.properties?.status?.["status"],
                statusMessage:
                  result.body.properties?.status?.["statusMessage"],
              },
        },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Updates an existing activation. */
export function activationsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  properties: ActivationTagsUpdate,
  options: ActivationsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Activation>, Activation> {
  return getLongRunningPoller(
    context,
    _activationsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _activationsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          activationName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Activation>, Activation>;
}

export function _activationsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  options: ActivationsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations/{activationName}",
      subscriptionId,
      resourceGroupName,
      activationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _activationsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes a specified activation. */
export function activationsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  activationName: string,
  options: ActivationsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _activationsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _activationsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          activationName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _activationsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ActivationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/activations",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _activationsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_ActivationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              inputs: p.properties?.["inputs"],
              stage: p.properties?.["stage"],
              campaign: p.properties?.["campaign"],
              status: !p.properties?.status
                ? undefined
                : {
                    stageHistory:
                      p.properties?.status?.["stageHistory"] === undefined
                        ? p.properties?.status?.["stageHistory"]
                        : p.properties?.status?.["stageHistory"].map(
                            (p: any) => {
                              return {
                                inputs: p["inputs"],
                                outputs: p["outputs"],
                                stage: p["stage"],
                                isActive: p["isActive"],
                                nextStage: p["nextStage"],
                                errorMessage: p["errorMessage"],
                                status: p["status"],
                                statusMessage: p["statusMessage"],
                              };
                            },
                          ),
                    activationGeneration:
                      p.properties?.status?.["activationGeneration"],
                    updateTime: p.properties?.status?.["updateTime"],
                    status: p.properties?.status?.["status"],
                    statusMessage: p.properties?.status?.["statusMessage"],
                  },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a collection of activations within the resource group. */
export function activationsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ActivationsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Activation> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _activationsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _activationsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _activationsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: ActivationsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/activations",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _activationsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_ActivationListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        tags: p["tags"],
        location: p["location"],
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              provisioningState: p.properties?.["provisioningState"],
              inputs: p.properties?.["inputs"],
              stage: p.properties?.["stage"],
              campaign: p.properties?.["campaign"],
              status: !p.properties?.status
                ? undefined
                : {
                    stageHistory:
                      p.properties?.status?.["stageHistory"] === undefined
                        ? p.properties?.status?.["stageHistory"]
                        : p.properties?.status?.["stageHistory"].map(
                            (p: any) => {
                              return {
                                inputs: p["inputs"],
                                outputs: p["outputs"],
                                stage: p["stage"],
                                isActive: p["isActive"],
                                nextStage: p["nextStage"],
                                errorMessage: p["errorMessage"],
                                status: p["status"],
                                statusMessage: p["statusMessage"],
                              };
                            },
                          ),
                    activationGeneration:
                      p.properties?.status?.["activationGeneration"],
                    updateTime: p.properties?.status?.["updateTime"],
                    status: p.properties?.status?.["status"],
                    statusMessage: p.properties?.status?.["statusMessage"],
                  },
            },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists activations within an Azure subscription. */
export function activationsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: ActivationsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Activation> {
  return buildPagedAsyncIterator(
    context,
    () => _activationsListBySubscriptionSend(context, subscriptionId, options),
    _activationsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
