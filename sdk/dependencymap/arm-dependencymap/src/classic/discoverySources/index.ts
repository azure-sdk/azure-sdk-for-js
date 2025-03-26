// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DependencyMapContext } from "../../api/dependencyMapContext.js";
import { DiscoverySourceResource, DiscoverySourceResourceTagsUpdate } from "../../models/models.js";
import {
  DiscoverySourcesListByMapsResourceOptionalParams,
  DiscoverySourcesDeleteOptionalParams,
  DiscoverySourcesUpdateOptionalParams,
  DiscoverySourcesCreateOrUpdateOptionalParams,
  DiscoverySourcesGetOptionalParams,
} from "../../api/discoverySources/options.js";
import {
  discoverySourcesListByMapsResource,
  discoverySourcesDelete,
  discoverySourcesUpdate,
  discoverySourcesCreateOrUpdate,
  discoverySourcesGet,
} from "../../api/discoverySources/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a DiscoverySources operations. */
export interface DiscoverySourcesOperations {
  /** List DiscoverySourceResource resources by MapsResource */
  listByMapsResource: (
    resourceGroupName: string,
    mapName: string,
    options?: DiscoverySourcesListByMapsResourceOptionalParams,
  ) => PagedAsyncIterableIterator<DiscoverySourceResource>;
  /** Delete a DiscoverySourceResource */
  delete: (
    resourceGroupName: string,
    mapName: string,
    sourceName: string,
    options?: DiscoverySourcesDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Update a DiscoverySourceResource */
  update: (
    resourceGroupName: string,
    mapName: string,
    sourceName: string,
    properties: DiscoverySourceResourceTagsUpdate,
    options?: DiscoverySourcesUpdateOptionalParams,
  ) => PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource>;
  /** Create a DiscoverySourceResource */
  createOrUpdate: (
    resourceGroupName: string,
    mapName: string,
    sourceName: string,
    resource: DiscoverySourceResource,
    options?: DiscoverySourcesCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<DiscoverySourceResource>, DiscoverySourceResource>;
  /** Get a DiscoverySourceResource */
  get: (
    resourceGroupName: string,
    mapName: string,
    sourceName: string,
    options?: DiscoverySourcesGetOptionalParams,
  ) => Promise<DiscoverySourceResource>;
}

function _getDiscoverySources(context: DependencyMapContext) {
  return {
    listByMapsResource: (
      resourceGroupName: string,
      mapName: string,
      options?: DiscoverySourcesListByMapsResourceOptionalParams,
    ) => discoverySourcesListByMapsResource(context, resourceGroupName, mapName, options),
    delete: (
      resourceGroupName: string,
      mapName: string,
      sourceName: string,
      options?: DiscoverySourcesDeleteOptionalParams,
    ) => discoverySourcesDelete(context, resourceGroupName, mapName, sourceName, options),
    update: (
      resourceGroupName: string,
      mapName: string,
      sourceName: string,
      properties: DiscoverySourceResourceTagsUpdate,
      options?: DiscoverySourcesUpdateOptionalParams,
    ) =>
      discoverySourcesUpdate(context, resourceGroupName, mapName, sourceName, properties, options),
    createOrUpdate: (
      resourceGroupName: string,
      mapName: string,
      sourceName: string,
      resource: DiscoverySourceResource,
      options?: DiscoverySourcesCreateOrUpdateOptionalParams,
    ) =>
      discoverySourcesCreateOrUpdate(
        context,
        resourceGroupName,
        mapName,
        sourceName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      mapName: string,
      sourceName: string,
      options?: DiscoverySourcesGetOptionalParams,
    ) => discoverySourcesGet(context, resourceGroupName, mapName, sourceName, options),
  };
}

export function _getDiscoverySourcesOperations(
  context: DependencyMapContext,
): DiscoverySourcesOperations {
  return {
    ..._getDiscoverySources(context),
  };
}
