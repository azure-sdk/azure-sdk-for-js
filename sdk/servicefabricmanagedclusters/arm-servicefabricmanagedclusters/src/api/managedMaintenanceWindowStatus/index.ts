// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ServiceFabricContext as Client,
  ManagedMaintenanceWindowStatusGetOptionalParams,
} from "../index.js";
import {
  errorResponseDeserializer,
  ManagedMaintenanceWindowStatus,
  managedMaintenanceWindowStatusDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _managedMaintenanceWindowStatusGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedMaintenanceWindowStatusGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getMaintenanceWindowStatus{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      clusterName: clusterName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _managedMaintenanceWindowStatusGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedMaintenanceWindowStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedMaintenanceWindowStatusDeserializer(result.body);
}

/** Action to get Maintenance Window Status of the Service Fabric Managed Clusters. */
export async function managedMaintenanceWindowStatusGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedMaintenanceWindowStatusGetOptionalParams = {
    requestOptions: {},
  },
): Promise<ManagedMaintenanceWindowStatus> {
  const result = await _managedMaintenanceWindowStatusGetSend(
    context,
    resourceGroupName,
    clusterName,
    options,
  );
  return _managedMaintenanceWindowStatusGetDeserialize(result);
}
