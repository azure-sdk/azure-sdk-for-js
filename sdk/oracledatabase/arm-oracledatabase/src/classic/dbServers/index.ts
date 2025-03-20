// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  dbServersListByCloudExadataInfrastructure,
  dbServersGet,
} from "../../api/dbServers/index.js";
import {
  DbServersListByCloudExadataInfrastructureOptionalParams,
  DbServersGetOptionalParams,
} from "../../api/options.js";
import { DbServer } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DbServers operations. */
export interface DbServersOperations {
  /** List DbServer resources by CloudExadataInfrastructure */
  listByCloudExadataInfrastructure: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    options?: DbServersListByCloudExadataInfrastructureOptionalParams,
  ) => PagedAsyncIterableIterator<DbServer>;
  /** Get a DbServer */
  get: (
    resourceGroupName: string,
    cloudexadatainfrastructurename: string,
    dbserverocid: string,
    options?: DbServersGetOptionalParams,
  ) => Promise<DbServer>;
}

function _getDbServers(context: DatabaseContext) {
  return {
    listByCloudExadataInfrastructure: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      options?: DbServersListByCloudExadataInfrastructureOptionalParams,
    ) =>
      dbServersListByCloudExadataInfrastructure(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    get: (
      resourceGroupName: string,
      cloudexadatainfrastructurename: string,
      dbserverocid: string,
      options?: DbServersGetOptionalParams,
    ) =>
      dbServersGet(
        context,
        resourceGroupName,
        cloudexadatainfrastructurename,
        dbserverocid,
        options,
      ),
  };
}

export function _getDbServersOperations(context: DatabaseContext): DbServersOperations {
  return {
    ..._getDbServers(context),
  };
}
