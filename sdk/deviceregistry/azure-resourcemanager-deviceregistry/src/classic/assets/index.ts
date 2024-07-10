// Licensed under the MIT license.

import { DeviceRegistryContext } from "../../api/deviceRegistryContext.js";
import { Asset, AssetUpdate, _AssetListResult } from "../../models/models.js";
import {
  get,
  createOrReplace,
  update,
  $delete,
  listByResourceGroup,
  listBySubscription,
} from "../../api/assets/index.js";
import {
  AssetsGetOptionalParams,
  AssetsCreateOrReplaceOptionalParams,
  AssetsUpdateOptionalParams,
  AssetsDeleteOptionalParams,
  AssetsListByResourceGroupOptionalParams,
  AssetsListBySubscriptionOptionalParams,
} from "../../models/options.js";

/** Interface representing a Assets operations. */
export interface AssetsOperations {
  /** Get a Asset */
  get: (
    resourceGroupName: string,
    assetName: string,
    options?: AssetsGetOptionalParams,
  ) => Promise<Asset>;
  /** Create a Asset */
  createOrReplace: (
    resourceGroupName: string,
    assetName: string,
    resource: Asset,
    options?: AssetsCreateOrReplaceOptionalParams,
  ) => Promise<Asset>;
  /** Update a Asset */
  update: (
    resourceGroupName: string,
    assetName: string,
    properties: AssetUpdate,
    options?: AssetsUpdateOptionalParams,
  ) => Promise<Asset>;
  /** Delete a Asset */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    assetName: string,
    options?: AssetsDeleteOptionalParams,
  ) => Promise<void>;
  /** List Asset resources by resource group */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: AssetsListByResourceGroupOptionalParams,
  ) => Promise<_AssetListResult>;
  /** List Asset resources by subscription ID */
  listBySubscription: (
    options?: AssetsListBySubscriptionOptionalParams,
  ) => Promise<_AssetListResult>;
}

export function getAssets(
  context: DeviceRegistryContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      assetName: string,
      options?: AssetsGetOptionalParams,
    ) => get(context, subscriptionId, resourceGroupName, assetName, options),
    createOrReplace: (
      resourceGroupName: string,
      assetName: string,
      resource: Asset,
      options?: AssetsCreateOrReplaceOptionalParams,
    ) =>
      createOrReplace(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        resource,
        options,
      ),
    update: (
      resourceGroupName: string,
      assetName: string,
      properties: AssetUpdate,
      options?: AssetsUpdateOptionalParams,
    ) =>
      update(
        context,
        subscriptionId,
        resourceGroupName,
        assetName,
        properties,
        options,
      ),
    delete: (
      resourceGroupName: string,
      assetName: string,
      options?: AssetsDeleteOptionalParams,
    ) =>
      $delete(context, subscriptionId, resourceGroupName, assetName, options),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: AssetsListByResourceGroupOptionalParams,
    ) =>
      listByResourceGroup(context, subscriptionId, resourceGroupName, options),
    listBySubscription: (options?: AssetsListBySubscriptionOptionalParams) =>
      listBySubscription(context, subscriptionId, options),
  };
}

export function getAssetsOperations(
  context: DeviceRegistryContext,
  subscriptionId: string,
): AssetsOperations {
  return {
    ...getAssets(context, subscriptionId),
  };
}
