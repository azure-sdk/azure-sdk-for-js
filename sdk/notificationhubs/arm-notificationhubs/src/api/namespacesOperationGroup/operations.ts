// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { NotificationHubsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  CheckAvailabilityParameters,
  checkAvailabilityParametersSerializer,
  CheckAvailabilityResult,
  checkAvailabilityResultDeserializer,
} from "../../models/models.js";
import { NamespacesOperationGroupCheckAvailabilityOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _checkAvailabilitySend(
  context: Client,
  parameters: CheckAvailabilityParameters,
  options: NamespacesOperationGroupCheckAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.NotificationHubs/checkNamespaceAvailability{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).post({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: checkAvailabilityParametersSerializer(parameters),
  });
}

export async function _checkAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckAvailabilityResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return checkAvailabilityResultDeserializer(result.body);
}

/** Checks the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name. */
export async function checkAvailability(
  context: Client,
  parameters: CheckAvailabilityParameters,
  options: NamespacesOperationGroupCheckAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckAvailabilityResult> {
  const result = await _checkAvailabilitySend(context, parameters, options);
  return _checkAvailabilityDeserialize(result);
}
