// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NetworkAnalyticsContext } from "../../api/networkAnalyticsContext.js";
import {
  dataProductsCatalogsGet,
  dataProductsCatalogsListByResourceGroup,
  dataProductsCatalogsListBySubscription,
} from "../../api/dataProductsCatalogs/index.js";
import { DataProductsCatalog } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  DataProductsCatalogsGetOptionalParams,
  DataProductsCatalogsListByResourceGroupOptionalParams,
  DataProductsCatalogsListBySubscriptionOptionalParams,
} from "../../api/options.js";

/** Interface representing a DataProductsCatalogs operations. */
export interface DataProductsCatalogsOperations {
  /** Retrieve data type resource. */
  get: (
    resourceGroupName: string,
    options?: DataProductsCatalogsGetOptionalParams,
  ) => Promise<DataProductsCatalog>;
  /** List data catalog by resource group. */
  listByResourceGroup: (
    resourceGroupName: string,
    options?: DataProductsCatalogsListByResourceGroupOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
  /** List data catalog by subscription. */
  listBySubscription: (
    options?: DataProductsCatalogsListBySubscriptionOptionalParams,
  ) => PagedAsyncIterableIterator<DataProductsCatalog>;
}

export function getDataProductsCatalogs(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
) {
  return {
    get: (
      resourceGroupName: string,
      options?: DataProductsCatalogsGetOptionalParams,
    ) =>
      dataProductsCatalogsGet(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listByResourceGroup: (
      resourceGroupName: string,
      options?: DataProductsCatalogsListByResourceGroupOptionalParams,
    ) =>
      dataProductsCatalogsListByResourceGroup(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    listBySubscription: (
      options?: DataProductsCatalogsListBySubscriptionOptionalParams,
    ) =>
      dataProductsCatalogsListBySubscription(context, subscriptionId, options),
  };
}

export function getDataProductsCatalogsOperations(
  context: NetworkAnalyticsContext,
  subscriptionId: string,
): DataProductsCatalogsOperations {
  return {
    ...getDataProductsCatalogs(context, subscriptionId),
  };
}
