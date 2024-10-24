// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  diagnosticPropertiesSerializer,
  extendedLocationSerializer,
  Diagnostic,
  DiagnosticTagsUpdate,
  _DiagnosticListResult,
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
  DiagnosticsGetOptionalParams,
  DiagnosticsCreateOrUpdateOptionalParams,
  DiagnosticsUpdateOptionalParams,
  DiagnosticsDeleteOptionalParams,
  DiagnosticsListByResourceGroupOptionalParams,
  DiagnosticsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _diagnosticsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  options: DiagnosticsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}",
      subscriptionId,
      resourceGroupName,
      diagnosticName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _diagnosticsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<Diagnostic> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Returns details of specified Diagnostic resource. */
export async function diagnosticsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  options: DiagnosticsGetOptionalParams = { requestOptions: {} },
): Promise<Diagnostic> {
  const result = await _diagnosticsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    diagnosticName,
    options,
  );
  return _diagnosticsGetDeserialize(result);
}

export function _diagnosticsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  resource: Diagnostic,
  options: DiagnosticsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}",
      subscriptionId,
      resourceGroupName,
      diagnosticName,
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
          : diagnosticPropertiesSerializer(resource.properties),
        extendedLocation: extendedLocationSerializer(resource.extendedLocation),
      },
    });
}

export async function _diagnosticsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Diagnostic> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Creates new or updates existing Diagnostic resource. */
export function diagnosticsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  resource: Diagnostic,
  options: DiagnosticsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Diagnostic>, Diagnostic> {
  return getLongRunningPoller(
    context,
    _diagnosticsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _diagnosticsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          diagnosticName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<Diagnostic>, Diagnostic>;
}

export function _diagnosticsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  properties: DiagnosticTagsUpdate,
  options: DiagnosticsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}",
      subscriptionId,
      resourceGroupName,
      diagnosticName,
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

export async function _diagnosticsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<Diagnostic> {
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
      : { provisioningState: result.body.properties?.["provisioningState"] },
    extendedLocation: {
      name: result.body.extendedLocation["name"],
      type: result.body.extendedLocation["type"],
    },
  };
}

/** Updates existing Diagnostic resource. */
export function diagnosticsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  properties: DiagnosticTagsUpdate,
  options: DiagnosticsUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Diagnostic>, Diagnostic> {
  return getLongRunningPoller(
    context,
    _diagnosticsUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _diagnosticsUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          diagnosticName,
          properties,
          options,
        ),
    },
  ) as PollerLike<OperationState<Diagnostic>, Diagnostic>;
}

export function _diagnosticsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  options: DiagnosticsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics/{diagnosticName}",
      subscriptionId,
      resourceGroupName,
      diagnosticName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _diagnosticsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Deletes specified Diagnostic resource. */
export function diagnosticsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  diagnosticName: string,
  options: DiagnosticsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _diagnosticsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _diagnosticsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          diagnosticName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _diagnosticsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiagnosticsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ToolchainOrchestrator/diagnostics",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _diagnosticsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiagnosticListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns a collection of Diagnostic resources within the resource group. */
export function diagnosticsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: DiagnosticsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<Diagnostic> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _diagnosticsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _diagnosticsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _diagnosticsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: DiagnosticsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.ToolchainOrchestrator/diagnostics",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _diagnosticsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_DiagnosticListResult> {
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
          : { provisioningState: p.properties?.["provisioningState"] },
        extendedLocation: {
          name: p.extendedLocation["name"],
          type: p.extendedLocation["type"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists Diagnostics resources within an Azure subscription. */
export function diagnosticsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: DiagnosticsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Diagnostic> {
  return buildPagedAsyncIterator(
    context,
    () => _diagnosticsListBySubscriptionSend(context, subscriptionId, options),
    _diagnosticsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
