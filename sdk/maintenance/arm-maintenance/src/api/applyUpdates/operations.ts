// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { MaintenanceContext as Client } from "../index.js";
import {
  maintenanceErrorDeserializer,
  ApplyUpdate,
  applyUpdateDeserializer,
} from "../../models/models.js";
import { ApplyUpdatesGetParentOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getParentSend(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  options: ApplyUpdatesGetParentOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{providerName}/{resourceParentType}/{resourceParentName}/{resourceType}/{resourceName}/providers/Microsoft.Maintenance/applyUpdates/{applyUpdateName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      providerName: providerName,
      resourceParentType: resourceParentType,
      resourceParentName: resourceParentName,
      resourceType: resourceType,
      resourceName: resourceName,
      applyUpdateName: applyUpdateName,
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

export async function _getParentDeserialize(result: PathUncheckedResponse): Promise<ApplyUpdate> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = maintenanceErrorDeserializer(result.body);
    throw error;
  }

  return applyUpdateDeserializer(result.body);
}

/** Track maintenance updates to resource with parent */
export async function getParent(
  context: Client,
  resourceGroupName: string,
  providerName: string,
  resourceParentType: string,
  resourceParentName: string,
  resourceType: string,
  resourceName: string,
  applyUpdateName: string,
  options: ApplyUpdatesGetParentOptionalParams = { requestOptions: {} },
): Promise<ApplyUpdate> {
  const result = await _getParentSend(
    context,
    resourceGroupName,
    providerName,
    resourceParentType,
    resourceParentName,
    resourceType,
    resourceName,
    applyUpdateName,
    options,
  );
  return _getParentDeserialize(result);
}
