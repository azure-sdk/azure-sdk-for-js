// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ServiceFabricContext as Client, OperationStatusGetOptionalParams } from "../index.js";
import {
  LongRunningOperationResult,
  longRunningOperationResultDeserializer,
  errorResponseDeserializer,
} from "../../models/models.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _operationStatusGetSend(
  context: Client,
  location: string,
  operationId: string,
  options: OperationStatusGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.ServiceFabric/locations/{location}/managedClusterOperations/{operationId}{?api-version}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
      operationId: operationId,
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

export async function _operationStatusGetDeserialize(
  result: PathUncheckedResponse,
): Promise<LongRunningOperationResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return longRunningOperationResultDeserializer(result.body);
}

/** Get long running operation status. */
export async function operationStatusGet(
  context: Client,
  location: string,
  operationId: string,
  options: OperationStatusGetOptionalParams = { requestOptions: {} },
): Promise<LongRunningOperationResult> {
  const result = await _operationStatusGetSend(context, location, operationId, options);
  return _operationStatusGetDeserialize(result);
}
