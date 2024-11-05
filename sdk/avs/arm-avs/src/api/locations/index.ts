// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Sku, Trial, Quota } from "../../models/models.js";
import { AVSContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  LocationsCheckTrialAvailabilityOptionalParams,
  LocationsCheckQuotaAvailabilityOptionalParams,
} from "../../models/options.js";

export function _locationsCheckTrialAvailabilitySend(
  context: Client,
  subscriptionId: string,
  location: string,
  sku?: Sku,
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
      body:
        sku === undefined
          ? sku
          : {
              name: sku["name"],
              tier: sku["tier"],
              size: sku["size"],
              family: sku["family"],
              capacity: sku["capacity"],
            },
    });
}

export async function _locationsCheckTrialAvailabilityDeserialize(
  result: PathUncheckedResponse,
): Promise<Trial> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    status: result.body["status"],
    availableHosts: result.body["availableHosts"],
  };
}

/** Return trial status for subscription by region */
export async function locationsCheckTrialAvailability(
  context: Client,
  subscriptionId: string,
  location: string,
  sku?: Sku,
  options: LocationsCheckTrialAvailabilityOptionalParams = {
    requestOptions: {},
  },
): Promise<Trial> {
  const result = await _locationsCheckTrialAvailabilitySend(
    context,
    subscriptionId,
    location,
    sku,
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

  return {
    hostsRemaining: result.body["hostsRemaining"],
    quotaEnabled: result.body["quotaEnabled"],
  };
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
