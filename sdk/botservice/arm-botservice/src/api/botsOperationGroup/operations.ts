// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext as Client } from "../index.js";
import {
  errorDeserializer,
  CheckNameAvailabilityRequestBody,
  checkNameAvailabilityRequestBodySerializer,
  CheckNameAvailabilityResponseBody,
  checkNameAvailabilityResponseBodyDeserializer,
} from "../../models/models.js";
import { BotsOperationGroupGetCheckNameAvailabilityOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _getCheckNameAvailabilitySend(
  context: Client,
  parameters: CheckNameAvailabilityRequestBody,
  options: BotsOperationGroupGetCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.BotService/checkNameAvailability{?api%2Dversion}",
    {
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
    body: checkNameAvailabilityRequestBodySerializer(parameters),
  });
}

export async function _getCheckNameAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<CheckNameAvailabilityResponseBody> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return checkNameAvailabilityResponseBodyDeserializer(result.body);
}

/** Check whether a bot name is available. */
export async function getCheckNameAvailability(
  context: Client,
  parameters: CheckNameAvailabilityRequestBody,
  options: BotsOperationGroupGetCheckNameAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<CheckNameAvailabilityResponseBody> {
  const result = await _getCheckNameAvailabilitySend(context, parameters, options);
  return _getCheckNameAvailabilityDeserialize(result);
}
