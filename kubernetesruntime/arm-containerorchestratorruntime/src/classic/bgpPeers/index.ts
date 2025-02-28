// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesRuntimeContext } from "../../api/kubernetesRuntimeContext.js";
import {
  bgpPeersList,
  bgpPeersDelete,
  bgpPeersCreateOrUpdate,
  bgpPeersGet,
} from "../../api/bgpPeers/index.js";
import { BgpPeer } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  BgpPeersListOptionalParams,
  BgpPeersDeleteOptionalParams,
  BgpPeersCreateOrUpdateOptionalParams,
  BgpPeersGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a BgpPeers operations. */
export interface BgpPeersOperations {
  /** List BgpPeer resources by parent */
  list: (
    resourceUri: string,
    options?: BgpPeersListOptionalParams,
  ) => PagedAsyncIterableIterator<BgpPeer>;
  /** Delete a BgpPeer */
  delete: (
    resourceUri: string,
    bgpPeerName: string,
    options?: BgpPeersDeleteOptionalParams,
  ) => Promise<void>;
  /** Create a BgpPeer */
  createOrUpdate: (
    resourceUri: string,
    bgpPeerName: string,
    resource: BgpPeer,
    options?: BgpPeersCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<BgpPeer>, BgpPeer>;
  /** Get a BgpPeer */
  get: (
    resourceUri: string,
    bgpPeerName: string,
    options?: BgpPeersGetOptionalParams,
  ) => Promise<BgpPeer>;
}

function _getBgpPeers(context: KubernetesRuntimeContext) {
  return {
    list: (resourceUri: string, options?: BgpPeersListOptionalParams) =>
      bgpPeersList(context, resourceUri, options),
    delete: (
      resourceUri: string,
      bgpPeerName: string,
      options?: BgpPeersDeleteOptionalParams,
    ) => bgpPeersDelete(context, resourceUri, bgpPeerName, options),
    createOrUpdate: (
      resourceUri: string,
      bgpPeerName: string,
      resource: BgpPeer,
      options?: BgpPeersCreateOrUpdateOptionalParams,
    ) =>
      bgpPeersCreateOrUpdate(
        context,
        resourceUri,
        bgpPeerName,
        resource,
        options,
      ),
    get: (
      resourceUri: string,
      bgpPeerName: string,
      options?: BgpPeersGetOptionalParams,
    ) => bgpPeersGet(context, resourceUri, bgpPeerName, options),
  };
}

export function _getBgpPeersOperations(
  context: KubernetesRuntimeContext,
): BgpPeersOperations {
  return {
    ..._getBgpPeers(context),
  };
}
