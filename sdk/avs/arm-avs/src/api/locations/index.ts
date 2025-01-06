// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AvsContext as Client,
  LocationsCheckQuotaAvailabilityOptionalParams,
  LocationsCheckTrialAvailabilityOptionalParams,
} from "../index.js";
import {
  skuSerializer,
  Trial,
  trialDeserializer,
  Quota,
  quotaDeserializer,
} from "../../models/models.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _locationsCheckTrialAvailabilitySend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkTrialAvailability",
      subscriptionId,
      location,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: !options["sku"] ? options["sku"] : skuSerializer(options["sku"]),
    });
}

export async function _locationsCheckTrialAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<Trial> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return trialDeserializer(result.body);
}

/** Return trial status for subscription by region */
export async function locationsCheckTrialAvailability(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Trial> {
  const result = await _locationsCheckTrialAvailabilitySend(
    context,
    subscriptionId,
    location,
    options,
  );
  return _locationsCheckTrialAvailabilityDeserialize(result);
}

export function _locationsCheckQuotaAvailabilitySend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AVS/locations/{location}/checkQuotaAvailability",
      subscriptionId,
      location,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _locationsCheckQuotaAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<Quota> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return quotaDeserializer(result.body);
}

/** Return quota for subscription by region */
export async function locationsCheckQuotaAvailability(
  context: Client,
  subscriptionId: string,
  location: string,
  options: LocationsCheckQuotaAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Quota> {
  const result = await _locationsCheckQuotaAvailabilitySend(
    context,
    subscriptionId,
    location,
    options,
  );
  return _locationsCheckQuotaAvailabilityDeserialize(result);
}
