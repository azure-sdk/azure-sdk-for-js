// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  loadTestPropertiesSerializer,
  managedServiceIdentitySerializer,
  loadTestResourceUpdatePropertiesSerializer,
  quotaBucketRequestPropertiesSerializer,
  LoadTestResource,
  LoadTestResourceUpdate,
  OutboundEnvironmentEndpoint,
  QuotaResource,
  QuotaBucketRequest,
  CheckQuotaAvailabilityResponse,
  _LoadTestResourceListResult,
  _PagedOutboundEnvironmentEndpoint,
  _QuotaResourceListResult,
} from "../models/models.js";
import { LoadTestServiceContext as Client } from "./index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { serializeRecord } from "../helpers/serializerHelpers.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  ListBySubscriptionOptionalParams,
  ListByResourceGroupOptionalParams,
  GetLoadtestOptionalParams,
  CreateOrUpdateLoadtestOptionalParams,
  UpdateLoadtestOptionalParams,
  DeleteLoadtestOptionalParams,
  OutboundNetworkDependenciesEndpointsOptionalParams,
  GetQuotaOptionalParams,
  ListQuotaOptionalParams,
  CheckAvailabilityQuotaOptionalParams,
} from "../models/options.js";

export function _listBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/loadTests",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
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
              description: p.properties?.["description"],
              provisioningState: p.properties?.["provisioningState"],
              dataPlaneURI: p.properties?.["dataPlaneURI"],
              encryption: !p.properties?.encryption
                ? undefined
                : {
                    identity: !p.properties?.encryption?.identity
                      ? undefined
                      : {
                          type: p.properties?.encryption?.identity?.["type"],
                          resourceId:
                            p.properties?.encryption?.identity?.["resourceId"],
                        },
                    keyUrl: p.properties?.encryption?.["keyUrl"],
                  },
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List LoadTestResource resources by subscription ID */
export function listBySubscription(
  context: Client,
  subscriptionId: string,
  options: ListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listBySubscriptionSend(context, subscriptionId, options),
    _listBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _listByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_LoadTestResourceListResult> {
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
              description: p.properties?.["description"],
              provisioningState: p.properties?.["provisioningState"],
              dataPlaneURI: p.properties?.["dataPlaneURI"],
              encryption: !p.properties?.encryption
                ? undefined
                : {
                    identity: !p.properties?.encryption?.identity
                      ? undefined
                      : {
                          type: p.properties?.encryption?.identity?.["type"],
                          resourceId:
                            p.properties?.encryption?.identity?.["resourceId"],
                        },
                    keyUrl: p.properties?.encryption?.["keyUrl"],
                  },
            },
        identity: !p.identity
          ? undefined
          : {
              principalId: p.identity?.["principalId"],
              tenantId: p.identity?.["tenantId"],
              type: p.identity?.["type"],
              userAssignedIdentities: p.identity?.["userAssignedIdentities"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List LoadTestResource resources by resource group */
export function listByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: ListByResourceGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<LoadTestResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _listByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
          dataPlaneURI: result.body.properties?.["dataPlaneURI"],
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                identity: !result.body.properties?.encryption?.identity
                  ? undefined
                  : {
                      type: result.body.properties?.encryption?.identity?.[
                        "type"
                      ],
                      resourceId:
                        result.body.properties?.encryption?.identity?.[
                          "resourceId"
                        ],
                    },
                keyUrl: result.body.properties?.encryption?.["keyUrl"],
              },
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Get a LoadTestResource */
export async function getLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: GetLoadtestOptionalParams = { requestOptions: {} },
): Promise<LoadTestResource> {
  const result = await _getLoadtestSend(
    context,
    subscriptionId,
    resourceGroupName,
    loadTestName,
    options,
  );
  return _getLoadtestDeserialize(result);
}

export function _createOrUpdateLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        tags: !loadTestResource.tags
          ? loadTestResource.tags
          : (serializeRecord(loadTestResource.tags as any) as any),
        location: loadTestResource["location"],
        properties: !loadTestResource.properties
          ? loadTestResource.properties
          : loadTestPropertiesSerializer(loadTestResource.properties),
        identity: !loadTestResource.identity
          ? loadTestResource.identity
          : managedServiceIdentitySerializer(loadTestResource.identity),
      },
    });
}

export async function _createOrUpdateLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<LoadTestResource> {
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
          description: result.body.properties?.["description"],
          provisioningState: result.body.properties?.["provisioningState"],
          dataPlaneURI: result.body.properties?.["dataPlaneURI"],
          encryption: !result.body.properties?.encryption
            ? undefined
            : {
                identity: !result.body.properties?.encryption?.identity
                  ? undefined
                  : {
                      type: result.body.properties?.encryption?.identity?.[
                        "type"
                      ],
                      resourceId:
                        result.body.properties?.encryption?.identity?.[
                          "resourceId"
                        ],
                    },
                keyUrl: result.body.properties?.encryption?.["keyUrl"],
              },
        },
    identity: !result.body.identity
      ? undefined
      : {
          principalId: result.body.identity?.["principalId"],
          tenantId: result.body.identity?.["tenantId"],
          type: result.body.identity?.["type"],
          userAssignedIdentities:
            result.body.identity?.["userAssignedIdentities"],
        },
  };
}

/** Create a LoadTestResource */
export function createOrUpdateLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResource: LoadTestResource,
  options: CreateOrUpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<LoadTestResource>, LoadTestResource> {
  return getLongRunningPoller(
    context,
    _createOrUpdateLoadtestDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _createOrUpdateLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          loadTestResource,
          options,
        ),
    },
  ) as PollerLike<OperationState<LoadTestResource>, LoadTestResource>;
}

export function _updateLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !loadTestResourcePatchRequestBody.identity
          ? loadTestResourcePatchRequestBody.identity
          : managedServiceIdentitySerializer(
              loadTestResourcePatchRequestBody.identity,
            ),
        tags: !loadTestResourcePatchRequestBody.tags
          ? loadTestResourcePatchRequestBody.tags
          : (serializeRecord(
              loadTestResourcePatchRequestBody.tags as any,
            ) as any),
        properties: !loadTestResourcePatchRequestBody.properties
          ? loadTestResourcePatchRequestBody.properties
          : loadTestResourceUpdatePropertiesSerializer(
              loadTestResourcePatchRequestBody.properties,
            ),
      },
    });
}

export async function _updateLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Update a LoadTestResource */
export function updateLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  loadTestResourcePatchRequestBody: LoadTestResourceUpdate,
  options: UpdateLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _updateLoadtestDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _updateLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          loadTestResourcePatchRequestBody,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _deleteLoadtestSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _deleteLoadtestDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a LoadTestResource */
export function deleteLoadtest(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: DeleteLoadtestOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _deleteLoadtestDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _deleteLoadtestSend(
          context,
          subscriptionId,
          resourceGroupName,
          loadTestName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _outboundNetworkDependenciesEndpointsSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LoadTestService/loadTests/{loadTestName}/outboundNetworkDependenciesEndpoints",
      subscriptionId,
      resourceGroupName,
      loadTestName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _outboundNetworkDependenciesEndpointsDeserialize(
  result: PathUncheckedResponse,
): Promise<_PagedOutboundEnvironmentEndpoint> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
        category: p["category"],
        endpoints:
          p["endpoints"] === undefined
            ? p["endpoints"]
            : p["endpoints"].map((p: any) => {
                return {
                  domainName: p["domainName"],
                  description: p["description"],
                  endpointDetails:
                    p["endpointDetails"] === undefined
                      ? p["endpointDetails"]
                      : p["endpointDetails"].map((p: any) => {
                          return { port: p["port"] };
                        }),
                };
              }),
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Lists the endpoints that agents may call as part of load testing. */
export function outboundNetworkDependenciesEndpoints(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  loadTestName: string,
  options: OutboundNetworkDependenciesEndpointsOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<OutboundEnvironmentEndpoint> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _outboundNetworkDependenciesEndpointsSend(
        context,
        subscriptionId,
        resourceGroupName,
        loadTestName,
        options,
      ),
    _outboundNetworkDependenciesEndpointsDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _getQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}",
      subscriptionId,
      location,
      quotaBucketName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<QuotaResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
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
          limit: result.body.properties?.["limit"],
          usage: result.body.properties?.["usage"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get the available quota for a quota bucket per region per subscription. */
export async function getQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  options: GetQuotaOptionalParams = { requestOptions: {} },
): Promise<QuotaResource> {
  const result = await _getQuotaSend(
    context,
    subscriptionId,
    location,
    quotaBucketName,
    options,
  );
  return _getQuotaDeserialize(result);
}

export function _listQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<_QuotaResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p: any) => {
      return {
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
              limit: p.properties?.["limit"],
              usage: p.properties?.["usage"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List quotas for a given subscription Id. */
export function listQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  options: ListQuotaOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<QuotaResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listQuotaSend(context, subscriptionId, location, options),
    _listQuotaDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _checkAvailabilityQuotaSend(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.LoadTestService/locations/{location}/quotas/{quotaBucketName}/checkAvailabilityQuota",
      subscriptionId,
      location,
      quotaBucketName,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !quotaBucketRequest.properties
          ? quotaBucketRequest.properties
          : quotaBucketRequestPropertiesSerializer(
              quotaBucketRequest.properties,
            ),
      },
    });
}

export async function _checkAvailabilityQuotaDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckQuotaAvailabilityResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
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
    name: result.body["name"],
    properties: !result.body.properties
      ? undefined
      : {
          isAvailable: result.body.properties?.["isAvailable"],
          availabilityStatus: result.body.properties?.["availabilityStatus"],
        },
  };
}

/** Check Quota Availability on quota bucket per region per subscription. */
export async function checkAvailabilityQuota(
  context: Client,
  subscriptionId: string,
  location: string,
  quotaBucketName: string,
  quotaBucketRequest: QuotaBucketRequest,
  options: CheckAvailabilityQuotaOptionalParams = { requestOptions: {} },
): Promise<CheckQuotaAvailabilityResponse> {
  const result = await _checkAvailabilityQuotaSend(
    context,
    subscriptionId,
    location,
    quotaBucketName,
    quotaBucketRequest,
    options,
  );
  return _checkAvailabilityQuotaDeserialize(result);
}
