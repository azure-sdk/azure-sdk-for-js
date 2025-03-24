// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  BgpPeersCreateOrUpdateOptionalParams,
  BgpPeersDeleteOptionalParams,
  BgpPeersGetOptionalParams,
  BgpPeersListOptionalParams,
  KubernetesRuntimeContext as Client,
} from "../index.js";
import {
  errorResponseDeserializer,
  BgpPeer,
  bgpPeerSerializer,
  bgpPeerDeserializer,
  _BgpPeerListResult,
  _bgpPeerListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _bgpPeersListSend(
  context: Client,
  resourceUri: string,
  options: BgpPeersListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers{?api-version}",
    {
      resourceUri: resourceUri,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _bgpPeersListDeserialize(
  result: PathUncheckedResponse,
): Promise<_BgpPeerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _bgpPeerListResultDeserializer(result.body);
}

/** List BgpPeer resources by parent */
export function bgpPeersList(
  context: Client,
  resourceUri: string,
  options: BgpPeersListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<BgpPeer> {
  return buildPagedAsyncIterator(
    context,
    () => _bgpPeersListSend(context, resourceUri, options),
    _bgpPeersListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _bgpPeersDeleteSend(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  options: BgpPeersDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}{?api-version}",
    {
      resourceUri: resourceUri,
      bgpPeerName: bgpPeerName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _bgpPeersDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete a BgpPeer */
export async function bgpPeersDelete(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  options: BgpPeersDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _bgpPeersDeleteSend(
    context,
    resourceUri,
    bgpPeerName,
    options,
  );
  return _bgpPeersDeleteDeserialize(result);
}

export function _bgpPeersCreateOrUpdateSend(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  resource: BgpPeer,
  options: BgpPeersCreateOrUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}{?api-version}",
    {
      resourceUri: resourceUri,
      bgpPeerName: bgpPeerName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: bgpPeerSerializer(resource),
    });
}

export async function _bgpPeersCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<BgpPeer> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return bgpPeerDeserializer(result.body);
}

/** Create a BgpPeer */
export function bgpPeersCreateOrUpdate(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  resource: BgpPeer,
  options: BgpPeersCreateOrUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<BgpPeer>, BgpPeer> {
  return getLongRunningPoller(
    context,
    _bgpPeersCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _bgpPeersCreateOrUpdateSend(
          context,
          resourceUri,
          bgpPeerName,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<OperationState<BgpPeer>, BgpPeer>;
}

export function _bgpPeersGetSend(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  options: BgpPeersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/{+resourceUri}/providers/Microsoft.KubernetesRuntime/bgpPeers/{bgpPeerName}{?api-version}",
    {
      resourceUri: resourceUri,
      bgpPeerName: bgpPeerName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _bgpPeersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<BgpPeer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return bgpPeerDeserializer(result.body);
}

/** Get a BgpPeer */
export async function bgpPeersGet(
  context: Client,
  resourceUri: string,
  bgpPeerName: string,
  options: BgpPeersGetOptionalParams = { requestOptions: {} },
): Promise<BgpPeer> {
  const result = await _bgpPeersGetSend(
    context,
    resourceUri,
    bgpPeerName,
    options,
  );
  return _bgpPeersGetDeserialize(result);
}
