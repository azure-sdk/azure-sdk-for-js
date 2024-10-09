// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  cloudLinkPropertiesSerializer,
  CloudLink,
  _CloudLinkList,
} from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  CloudLinksListOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
} from "../../models/options.js";

export function _cloudLinksListSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksListDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudLinkList> {
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
              provisioningState: p.properties?.["provisioningState"],
              status: p.properties?.["status"],
              linkedCloud: p.properties?.["linkedCloud"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List CloudLink resources by PrivateCloud */
export function cloudLinksList(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  options: CloudLinksListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<CloudLink> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudLinksListSend(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    _cloudLinksListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudLinksGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
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
          provisioningState: result.body.properties?.["provisioningState"],
          status: result.body.properties?.["status"],
          linkedCloud: result.body.properties?.["linkedCloud"],
        },
  };
}

/** Get a CloudLink */
export async function cloudLinksGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksGetOptionalParams = { requestOptions: {} },
): Promise<CloudLink> {
  const result = await _cloudLinksGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    privateCloudName,
    cloudLinkName,
    options,
  );
  return _cloudLinksGetDeserialize(result);
}

export function _cloudLinksCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !cloudLink.properties
          ? cloudLink.properties
          : cloudLinkPropertiesSerializer(cloudLink.properties),
      },
    });
}

export async function _cloudLinksCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudLink> {
  const expectedStatuses = ["200", "201"];
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
          provisioningState: result.body.properties?.["provisioningState"],
          status: result.body.properties?.["status"],
          linkedCloud: result.body.properties?.["linkedCloud"],
        },
  };
}

/** Create a CloudLink */
export function cloudLinksCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  cloudLink: CloudLink,
  options: CloudLinksCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<CloudLink>, CloudLink> {
  return getLongRunningPoller(
    context,
    _cloudLinksCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          cloudLink,
          options,
        ),
    },
  ) as PollerLike<OperationState<CloudLink>, CloudLink>;
}

export function _cloudLinksDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/cloudLinks/{cloudLinkName}",
      subscriptionId,
      resourceGroupName,
      privateCloudName,
      cloudLinkName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudLinksDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudLink */
export function cloudLinksDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  privateCloudName: string,
  cloudLinkName: string,
  options: CloudLinksDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudLinksDeleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudLinksDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          privateCloudName,
          cloudLinkName,
          options,
        ),
    },
  ) as PollerLike<OperationState<void>, void>;
}
