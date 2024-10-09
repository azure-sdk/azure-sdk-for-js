// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  fileSystemResourcePropertiesSerializer,
  managedServiceIdentitySerializer,
  fileSystemResourceUpdatePropertiesSerializer,
  FileSystemResource,
  FileSystemResourceUpdate,
  _FileSystemResourceListResult,
} from "../../models/models.js";
import { StorageContext as Client } from "../index.js";
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
  FileSystemsGetOptionalParams,
  FileSystemsCreateOrUpdateOptionalParams,
  FileSystemsUpdateOptionalParams,
  FileSystemsDeleteOptionalParams,
  FileSystemsListByResourceGroupOptionalParams,
  FileSystemsListBySubscriptionOptionalParams,
} from "../../models/options.js";

export function _fileSystemsGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
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
          marketplaceDetails: {
            marketplaceSubscriptionId:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionId"
              ],
            planId: result.body.properties?.marketplaceDetails["planId"],
            offerId: result.body.properties?.marketplaceDetails["offerId"],
            publisherId:
              result.body.properties?.marketplaceDetails["publisherId"],
            termUnit: result.body.properties?.marketplaceDetails["termUnit"],
            marketplaceSubscriptionStatus:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionStatus"
              ],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          storageSku: result.body.properties?.["storageSku"],
          userDetails: { email: result.body.properties?.userDetails["email"] },
          delegatedSubnetId: result.body.properties?.["delegatedSubnetId"],
          clusterLoginUrl: result.body.properties?.["clusterLoginUrl"],
          privateIPs: result.body.properties?.["privateIPs"],
          adminPassword: result.body.properties?.["adminPassword"],
          availabilityZone: result.body.properties?.["availabilityZone"],
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

/** Get a FileSystemResource */
export async function fileSystemsGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsGetOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    fileSystemName,
    options,
  );
  return _fileSystemsGetDeserialize(result);
}

export function _fileSystemsCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
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
          : fileSystemResourcePropertiesSerializer(resource.properties),
        identity: !resource.identity
          ? resource.identity
          : managedServiceIdentitySerializer(resource.identity),
      },
    });
}

export async function _fileSystemsCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
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
          marketplaceDetails: {
            marketplaceSubscriptionId:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionId"
              ],
            planId: result.body.properties?.marketplaceDetails["planId"],
            offerId: result.body.properties?.marketplaceDetails["offerId"],
            publisherId:
              result.body.properties?.marketplaceDetails["publisherId"],
            termUnit: result.body.properties?.marketplaceDetails["termUnit"],
            marketplaceSubscriptionStatus:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionStatus"
              ],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          storageSku: result.body.properties?.["storageSku"],
          userDetails: { email: result.body.properties?.userDetails["email"] },
          delegatedSubnetId: result.body.properties?.["delegatedSubnetId"],
          clusterLoginUrl: result.body.properties?.["clusterLoginUrl"],
          privateIPs: result.body.properties?.["privateIPs"],
          adminPassword: result.body.properties?.["adminPassword"],
          availabilityZone: result.body.properties?.["availabilityZone"],
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

/** Create a FileSystemResource */
export function fileSystemsCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  resource: FileSystemResource,
  options: FileSystemsCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<FileSystemResource>, FileSystemResource> {
  return getLongRunningPoller(
    context,
    _fileSystemsCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _fileSystemsCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          fileSystemName,
          resource,
          options,
        ),
    },
  ) as PollerLike<OperationState<FileSystemResource>, FileSystemResource>;
}

export function _fileSystemsUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: {
        identity: !properties.identity
          ? properties.identity
          : managedServiceIdentitySerializer(properties.identity),
        tags: !properties.tags
          ? properties.tags
          : (serializeRecord(properties.tags as any) as any),
        properties: !properties.properties
          ? properties.properties
          : fileSystemResourceUpdatePropertiesSerializer(properties.properties),
      },
    });
}

export async function _fileSystemsUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<FileSystemResource> {
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
          marketplaceDetails: {
            marketplaceSubscriptionId:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionId"
              ],
            planId: result.body.properties?.marketplaceDetails["planId"],
            offerId: result.body.properties?.marketplaceDetails["offerId"],
            publisherId:
              result.body.properties?.marketplaceDetails["publisherId"],
            termUnit: result.body.properties?.marketplaceDetails["termUnit"],
            marketplaceSubscriptionStatus:
              result.body.properties?.marketplaceDetails[
                "marketplaceSubscriptionStatus"
              ],
          },
          provisioningState: result.body.properties?.["provisioningState"],
          storageSku: result.body.properties?.["storageSku"],
          userDetails: { email: result.body.properties?.userDetails["email"] },
          delegatedSubnetId: result.body.properties?.["delegatedSubnetId"],
          clusterLoginUrl: result.body.properties?.["clusterLoginUrl"],
          privateIPs: result.body.properties?.["privateIPs"],
          adminPassword: result.body.properties?.["adminPassword"],
          availabilityZone: result.body.properties?.["availabilityZone"],
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

/** Update a FileSystemResource */
export async function fileSystemsUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  properties: FileSystemResourceUpdate,
  options: FileSystemsUpdateOptionalParams = { requestOptions: {} },
): Promise<FileSystemResource> {
  const result = await _fileSystemsUpdateSend(
    context,
    subscriptionId,
    resourceGroupName,
    fileSystemName,
    properties,
    options,
  );
  return _fileSystemsUpdateDeserialize(result);
}

export function _fileSystemsDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems/{fileSystemName}",
      subscriptionId,
      resourceGroupName,
      fileSystemName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a FileSystemResource */
export function fileSystemsDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  fileSystemName: string,
  options: FileSystemsDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _fileSystemsDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _fileSystemsDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          fileSystemName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _fileSystemsListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Qumulo.Storage/fileSystems",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
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
              marketplaceDetails: {
                marketplaceSubscriptionId:
                  p.properties?.marketplaceDetails["marketplaceSubscriptionId"],
                planId: p.properties?.marketplaceDetails["planId"],
                offerId: p.properties?.marketplaceDetails["offerId"],
                publisherId: p.properties?.marketplaceDetails["publisherId"],
                termUnit: p.properties?.marketplaceDetails["termUnit"],
                marketplaceSubscriptionStatus:
                  p.properties?.marketplaceDetails[
                    "marketplaceSubscriptionStatus"
                  ],
              },
              provisioningState: p.properties?.["provisioningState"],
              storageSku: p.properties?.["storageSku"],
              userDetails: { email: p.properties?.userDetails["email"] },
              delegatedSubnetId: p.properties?.["delegatedSubnetId"],
              clusterLoginUrl: p.properties?.["clusterLoginUrl"],
              privateIPs: p.properties?.["privateIPs"],
              adminPassword: p.properties?.["adminPassword"],
              availabilityZone: p.properties?.["availabilityZone"],
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

/** List FileSystemResource resources by resource group */
export function fileSystemsListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: FileSystemsListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _fileSystemsListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _fileSystemsListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _fileSystemsListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Qumulo.Storage/fileSystems",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _fileSystemsListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_FileSystemResourceListResult> {
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
              marketplaceDetails: {
                marketplaceSubscriptionId:
                  p.properties?.marketplaceDetails["marketplaceSubscriptionId"],
                planId: p.properties?.marketplaceDetails["planId"],
                offerId: p.properties?.marketplaceDetails["offerId"],
                publisherId: p.properties?.marketplaceDetails["publisherId"],
                termUnit: p.properties?.marketplaceDetails["termUnit"],
                marketplaceSubscriptionStatus:
                  p.properties?.marketplaceDetails[
                    "marketplaceSubscriptionStatus"
                  ],
              },
              provisioningState: p.properties?.["provisioningState"],
              storageSku: p.properties?.["storageSku"],
              userDetails: { email: p.properties?.userDetails["email"] },
              delegatedSubnetId: p.properties?.["delegatedSubnetId"],
              clusterLoginUrl: p.properties?.["clusterLoginUrl"],
              privateIPs: p.properties?.["privateIPs"],
              adminPassword: p.properties?.["adminPassword"],
              availabilityZone: p.properties?.["availabilityZone"],
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

/** List FileSystemResource resources by subscription ID */
export function fileSystemsListBySubscription(
  context: Client,
  subscriptionId: string,
  options: FileSystemsListBySubscriptionOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<FileSystemResource> {
  return buildPagedAsyncIterator(
    context,
    () => _fileSystemsListBySubscriptionSend(context, subscriptionId, options),
    _fileSystemsListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
