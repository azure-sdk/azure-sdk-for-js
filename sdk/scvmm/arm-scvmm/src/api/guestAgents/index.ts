// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  guestAgentPropertiesSerializer,
  GuestAgent,
  _GuestAgentListResult,
} from "../../models/models.js";
import { ScVmmContext as Client } from "../index.js";
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
  GuestAgentsGetOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

export function _guestAgentsGetSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GuestAgent> {
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
          uuid: result.body.properties?.["uuid"],
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          httpProxyConfig: !result.body.properties?.httpProxyConfig
            ? undefined
            : {
                httpsProxy:
                  result.body.properties?.httpProxyConfig?.["httpsProxy"],
              },
          provisioningAction: result.body.properties?.["provisioningAction"],
          status: result.body.properties?.["status"],
          customResourceName: result.body.properties?.["customResourceName"],
          provisioningState: result.body.properties?.["provisioningState"],
          privateLinkScopeResourceId:
            result.body.properties?.["privateLinkScopeResourceId"],
        },
  };
}

/** Implements GuestAgent GET method. */
export async function guestAgentsGet(
  context: Client,
  resourceUri: string,
  options: GuestAgentsGetOptionalParams = { requestOptions: {} },
): Promise<GuestAgent> {
  const result = await _guestAgentsGetSend(context, resourceUri, options);
  return _guestAgentsGetDeserialize(result);
}

export function _guestAgentsCreateSend(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: {
        properties: !resource.properties
          ? resource.properties
          : guestAgentPropertiesSerializer(resource.properties),
      },
    });
}

export async function _guestAgentsCreateDeserialize(
  result: PathUncheckedResponse,
): Promise<GuestAgent> {
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
          uuid: result.body.properties?.["uuid"],
          credentials: !result.body.properties?.credentials
            ? undefined
            : {
                username: result.body.properties?.credentials?.["username"],
                password: result.body.properties?.credentials?.["password"],
              },
          httpProxyConfig: !result.body.properties?.httpProxyConfig
            ? undefined
            : {
                httpsProxy:
                  result.body.properties?.httpProxyConfig?.["httpsProxy"],
              },
          provisioningAction: result.body.properties?.["provisioningAction"],
          status: result.body.properties?.["status"],
          customResourceName: result.body.properties?.["customResourceName"],
          provisioningState: result.body.properties?.["provisioningState"],
          privateLinkScopeResourceId:
            result.body.properties?.["privateLinkScopeResourceId"],
        },
  };
}

/** Create Or Update GuestAgent. */
export function guestAgentsCreate(
  context: Client,
  resourceUri: string,
  resource: GuestAgent,
  options: GuestAgentsCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<GuestAgent>, GuestAgent> {
  return getLongRunningPoller(
    context,
    _guestAgentsCreateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _guestAgentsCreateSend(context, resourceUri, resource, options),
    },
  ) as PollerLike<OperationState<GuestAgent>, GuestAgent>;
}

export function _guestAgentsDeleteSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Implements GuestAgent DELETE method. */
export async function guestAgentsDelete(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _guestAgentsDeleteSend(context, resourceUri, options);
  return _guestAgentsDeleteDeserialize(result);
}

export function _guestAgentsListByVirtualMachineInstanceSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsListByVirtualMachineInstanceDeserialize(
  result: PathUncheckedResponse,
): Promise<_GuestAgentListResult> {
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
              uuid: p.properties?.["uuid"],
              credentials: !p.properties?.credentials
                ? undefined
                : {
                    username: p.properties?.credentials?.["username"],
                    password: p.properties?.credentials?.["password"],
                  },
              httpProxyConfig: !p.properties?.httpProxyConfig
                ? undefined
                : { httpsProxy: p.properties?.httpProxyConfig?.["httpsProxy"] },
              provisioningAction: p.properties?.["provisioningAction"],
              status: p.properties?.["status"],
              customResourceName: p.properties?.["customResourceName"],
              provisioningState: p.properties?.["provisioningState"],
              privateLinkScopeResourceId:
                p.properties?.["privateLinkScopeResourceId"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** Returns the list of GuestAgent of the given vm. */
export function guestAgentsListByVirtualMachineInstance(
  context: Client,
  resourceUri: string,
  options: GuestAgentsListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<GuestAgent> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _guestAgentsListByVirtualMachineInstanceSend(
        context,
        resourceUri,
        options,
      ),
    _guestAgentsListByVirtualMachineInstanceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
