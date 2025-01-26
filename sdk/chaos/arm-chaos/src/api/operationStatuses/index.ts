// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ChaosManagementContext as Client, OperationStatusesGetOptionalParams } from "../index.js";
import {
  OperationStatusResult,
  operationStatusResultDeserializer,
  errorResponseDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _operationStatusesGetSend(
  context: Client,
  location: string,
  operationId: string,
  options: OperationStatusesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/operationStatuses/{operationId}",
      context.subscriptionId,
      location,
      operationId,
    )
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
    });
}

export async function _operationStatusesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return operationStatusResultDeserializer(result.body);
}

/** Returns the current status of an async operation. */
export async function operationStatusesGet(
  context: Client,
  location: string,
  operationId: string,
  options: OperationStatusesGetOptionalParams = { requestOptions: {} },
): Promise<OperationStatusResult> {
  const result = await _operationStatusesGetSend(context, location, operationId, options);
  return _operationStatusesGetDeserialize(result);
}
