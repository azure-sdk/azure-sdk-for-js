// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import { DbServer } from "../../models/models.js";
import {
  dbServersGet,
  dbServersListByCloudExadataInfrastructure,
} from "../../api/dbServers/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import {
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../../models/options.js";

/** Interface representing a DbServers operations. */
export interface DbServersOperations {
  /** Get a DbServer */
  get: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    dbserverocid: string,
    options?: DbServersGetOptionalParams,
  ) => Promise<DbServer>;
  /** List DbServer resources by CloudExadataInfrastructure */
  listByCloudExadataInfrastructure: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: DbServersListByCloudExadataInfrastructureOptionalParams,
  ) => PagedAsyncIterableIterator<DbServer>;
}

export function getDbServers(context: DatabaseContext, subscriptionId: string) {
  return {
    get: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      dbserverocid: string,
      options?: DbServersGetOptionalParams,
    ) =>
      dbServersGet(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        dbserverocid,
        options,
      ),
    listByCloudExadataInfrastructure: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: DbServersListByCloudExadataInfrastructureOptionalParams,
    ) =>
      dbServersListByCloudExadataInfrastructure(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
  };
}

export function getDbServersOperations(
  context: DatabaseContext,
  subscriptionId: string,
): DbServersOperations {
  return {
    ...getDbServers(context, subscriptionId),
  };
}
