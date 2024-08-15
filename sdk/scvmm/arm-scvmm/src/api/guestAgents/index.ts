// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { getLongRunningPoller } from "../pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  guestAgentPropertiesSerializer,
  GuestAgent,
  _GuestAgentListResult,
} from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  GuestAgentsCreate200Response,
  GuestAgentsCreate201Response,
  GuestAgentsCreateDefaultResponse,
  GuestAgentsCreateLogicalResponse,
  GuestAgentsDelete200Response,
  GuestAgentsDelete204Response,
  GuestAgentsDeleteDefaultResponse,
  GuestAgentsGet200Response,
  GuestAgentsGetDefaultResponse,
  GuestAgentsListByVirtualMachineInstance200Response,
  GuestAgentsListByVirtualMachineInstanceDefaultResponse,
  isUnexpected,
  ScVmmContext as Client,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
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
): StreamableMethod<GuestAgentsGet200Response | GuestAgentsGetDefaultResponse> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsGetDeserialize(
  result: GuestAgentsGet200Response | GuestAgentsGetDefaultResponse,
): Promise<GuestAgent> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | GuestAgentsCreate200Response
  | GuestAgentsCreate201Response
  | GuestAgentsCreateDefaultResponse
  | GuestAgentsCreateLogicalResponse
> {
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
  result:
    | GuestAgentsCreate200Response
    | GuestAgentsCreate201Response
    | GuestAgentsCreateDefaultResponse
    | GuestAgentsCreateLogicalResponse,
): Promise<GuestAgent> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  const res = result as unknown as GuestAgentsCreateLogicalResponse;
  return {
    id: res.body["id"],
    name: res.body["name"],
    type: res.body["type"],
    systemData: !res.body.systemData
      ? undefined
      : {
          createdBy: res.body.systemData?.["createdBy"],
          createdByType: res.body.systemData?.["createdByType"],
          createdAt:
            res.body.systemData?.["createdAt"] !== undefined
              ? new Date(res.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: res.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: res.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            res.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(res.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !res.body.properties
      ? undefined
      : {
          uuid: res.body.properties?.["uuid"],
          credentials: !res.body.properties?.credentials
            ? undefined
            : {
                username: res.body.properties?.credentials?.["username"],
                password: res.body.properties?.credentials?.["password"],
              },
          httpProxyConfig: !res.body.properties?.httpProxyConfig
            ? undefined
            : {
                httpsProxy:
                  res.body.properties?.httpProxyConfig?.["httpsProxy"],
              },
          provisioningAction: res.body.properties?.["provisioningAction"],
          status: res.body.properties?.["status"],
          customResourceName: res.body.properties?.["customResourceName"],
          provisioningState: res.body.properties?.["provisioningState"],
          privateLinkScopeResourceId:
            res.body.properties?.["privateLinkScopeResourceId"],
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
  return getLongRunningPoller(context, _guestAgentsCreateDeserialize, {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _guestAgentsCreateSend(context, resourceUri, resource, options),
  }) as PollerLike<OperationState<GuestAgent>, GuestAgent>;
}

export function _guestAgentsDeleteSend(
  context: Client,
  resourceUri: string,
  options: GuestAgentsDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod<
  | GuestAgentsDelete200Response
  | GuestAgentsDelete204Response
  | GuestAgentsDeleteDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents/default",
      resourceUri,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsDeleteDeserialize(
  result:
    | GuestAgentsDelete200Response
    | GuestAgentsDelete204Response
    | GuestAgentsDeleteDefaultResponse,
): Promise<void> {
  if (isUnexpected(result)) {
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
): StreamableMethod<
  | GuestAgentsListByVirtualMachineInstance200Response
  | GuestAgentsListByVirtualMachineInstanceDefaultResponse
> {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/guestAgents",
      resourceUri,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _guestAgentsListByVirtualMachineInstanceDeserialize(
  result:
    | GuestAgentsListByVirtualMachineInstance200Response
    | GuestAgentsListByVirtualMachineInstanceDefaultResponse,
): Promise<_GuestAgentListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
