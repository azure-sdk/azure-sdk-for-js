// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  DbServersGetOptionalParams,
  DbServersListByCloudExadataInfrastructureOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  DbServer,
  dbServerDeserializer,
  _DbServerListResult,
  _dbServerListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _dbServersListByCloudExadataInfrastructureSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: DbServersListByCloudExadataInfrastructureOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _dbServersListByCloudExadataInfrastructureDeserialize(
  result: PathUncheckedResponse,
): Promise<_DbServerListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _dbServerListResultDeserializer(result.body);
}

/** List DbServer resources by CloudExadataInfrastructure */
export function dbServersListByCloudExadataInfrastructure(
  context: Client,
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
        resourceGroupName,
        cloudexadatainfrastructurename,
        options,
      ),
    _dbServersListByCloudExadataInfrastructureDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _dbServersGetSend(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/dbServers/{dbserverocid}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      cloudexadatainfrastructurename: cloudexadatainfrastructurename,
      dbserverocid: dbserverocid,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _dbServersGetDeserialize(result: PathUncheckedResponse): Promise<DbServer> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return dbServerDeserializer(result.body);
}

/** Get a DbServer */
export async function dbServersGet(
  context: Client,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  dbserverocid: string,
  options: DbServersGetOptionalParams = { requestOptions: {} },
): Promise<DbServer> {
  const result = await _dbServersGetSend(
    context,
    resourceGroupName,
    cloudexadatainfrastructurename,
    dbserverocid,
    options,
  );
  return _dbServersGetDeserialize(result);
}
