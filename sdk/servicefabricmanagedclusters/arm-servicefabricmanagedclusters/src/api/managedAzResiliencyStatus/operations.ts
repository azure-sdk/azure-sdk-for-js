// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ManagedAzResiliencyStatus,
  managedAzResiliencyStatusDeserializer,
} from "../../models/models.js";
import { ManagedAzResiliencyStatusGetOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _managedAzResiliencyStatusGetSend(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedAzResiliencyStatusGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ServiceFabric/managedClusters/{clusterName}/getazresiliencystatus{?api-version}",
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

export async function _managedAzResiliencyStatusGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ManagedAzResiliencyStatus> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return managedAzResiliencyStatusDeserializer(result.body);
}

/** Action to get Az Resiliency Status of all the Base resources constituting Service Fabric Managed Clusters. */
export async function managedAzResiliencyStatusGet(
  context: Client,
  resourceGroupName: string,
  clusterName: string,
  options: ManagedAzResiliencyStatusGetOptionalParams = { requestOptions: {} },
): Promise<ManagedAzResiliencyStatus> {
  const result = await _managedAzResiliencyStatusGetSend(
    context,
    resourceGroupName,
    clusterName,
    options,
  );
  return _managedAzResiliencyStatusGetDeserialize(result);
}
