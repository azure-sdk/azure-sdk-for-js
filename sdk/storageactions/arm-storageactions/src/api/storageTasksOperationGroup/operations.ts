// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { StorageActionsContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  StorageTaskPreviewAction,
  storageTaskPreviewActionSerializer,
  storageTaskPreviewActionDeserializer,
} from "../../models/models.js";
import { StorageTasksOperationGroupPreviewActionsOptionalParams } from "./options.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _previewActionsSend(
  context: Client,
  location: string,
  parameters: StorageTaskPreviewAction,
  options: StorageTasksOperationGroupPreviewActionsOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/providers/Microsoft.StorageActions/locations/{location}/previewActions{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      location: location,
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
    body: storageTaskPreviewActionSerializer(parameters),
  });
}

export async function _previewActionsDeserialize(
  result: PathUncheckedResponse,
): Promise<StorageTaskPreviewAction> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return storageTaskPreviewActionDeserializer(result.body);
}

/** Runs the input conditions against input object metadata properties and designates matched objects in response. */
export async function previewActions(
  context: Client,
  location: string,
  parameters: StorageTaskPreviewAction,
  options: StorageTasksOperationGroupPreviewActionsOptionalParams = {
    requestOptions: {},
  },
): Promise<StorageTaskPreviewAction> {
  const result = await _previewActionsSend(context, location, parameters, options);
  return _previewActionsDeserialize(result);
}
