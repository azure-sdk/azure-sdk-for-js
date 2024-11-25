// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ChaosContext as Client,
  OperationStatusesGetOptionalParams,
} from "../index.js";
import {
  OperationStatusResult,
  operationStatusResultDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _operationStatusesGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  operationId: string,
  options: OperationStatusesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.Chaos/locations/{location}/operationStatuses/{operationId}",
      subscriptionId,
      location,
      operationId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _operationStatusesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<OperationStatusResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return operationStatusResultDeserializer(result.body);
}

/** Returns the current status of an async operation. */
export async function operationStatusesGet(
  context: Client,
  subscriptionId: string,
  location: string,
  operationId: string,
  options: OperationStatusesGetOptionalParams = { requestOptions: {} },
): Promise<OperationStatusResult> {
  const result = await _operationStatusesGetSend(
    context,
    subscriptionId,
    location,
    operationId,
    options,
  );
  return _operationStatusesGetDeserialize(result);
}
