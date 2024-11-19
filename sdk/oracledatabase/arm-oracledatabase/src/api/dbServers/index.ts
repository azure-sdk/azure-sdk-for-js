// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../index.js";
import {
  DbServer,
  dbServerDeserializer,
  _DbServerListResult,
  _dbServerListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _dbServersGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
      dbserverocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbServersGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DbServer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return dbServerDeserializer(result.body);
}

/** Get a DbServer */
export async function dbServersGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): Promise<DbServer> {
  const result = await _dbServersGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    dbserverocid,
    options,
  );
  return _dbServersGetDeserialize(result);
}

export function _dbServersListByCloudExadataInfrastructureSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dbServersListByCloudExadataInfrastructureDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _dbServerListResultDeserializer(result.body);
}

/** List DbServer resources by CloudExadataInfrastructure */
export function dbServersListByCloudExadataInfrastructure(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<DbServer> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dbServersListByCloudExadataInfrastructureSend(
        context,
        subscriptionId,
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    _dbServersListByCloudExadataInfrastructureDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
