// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  ConfigurationAssignment,
  _ListConfigurationAssignmentsResult,
  _listConfigurationAssignmentsResultDeserializer,
} from "../../models/models.js";
import { ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams } from "./options.js";
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

export function _listSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  options: ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/{providerName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/configurationAssignments{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceType: resourceType,
      resourceName: resourceName,
      "api%2Dversion": context.apiVersion,
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

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ListConfigurationAssignmentsResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return _listConfigurationAssignmentsResultDeserializer(result.body);
}

/** Get Configuration records within a subscription and resource group */
export function list(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceType: string,
  resourceName: string,
  options: ConfigurationAssignmentForResourceGroupOperationGroupListOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<ConfigurationAssignment> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, resourceGroupName, providerName, resourceType, resourceName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
