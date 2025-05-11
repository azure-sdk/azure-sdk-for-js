// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { BotServiceContext as Client } from "../index.js";
import {
  errorDeserializer,
  ServiceProviderResponseList,
  serviceProviderResponseListDeserializer,
} from "../../models/models.js";
import { BotConnectionOperationGroupListServiceProvidersOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listServiceProvidersSend(
  context: Client,
  options: BotConnectionOperationGroupListServiceProvidersOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.BotService/listAuthServiceProviders{?api%2Dversion}",
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
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listServiceProvidersDeserialize(
  result: PathUncheckedResponse,
): Promise<ServiceProviderResponseList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorDeserializer(result.body);
    throw error;
  }

  return serviceProviderResponseListDeserializer(result.body);
}

/** Lists the available Service Providers for creating Connection Settings */
export async function listServiceProviders(
  context: Client,
  options: BotConnectionOperationGroupListServiceProvidersOptionalParams = {
    requestOptions: {},
  },
): Promise<ServiceProviderResponseList> {
  const result = await _listServiceProvidersSend(context, options);
  return _listServiceProvidersDeserialize(result);
}
