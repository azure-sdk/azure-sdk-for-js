// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  locationsCheckTrialAvailability,
  locationsCheckQuotaAvailability,
} from "../../api/locations/index.js";
import {
  LocationsCheckTrialAvailabilityOptionalParams,
  LocationsCheckQuotaAvailabilityOptionalParams,
} from "../../api/options.js";
import { Trial, Quota } from "../../models/models.js";

/** Interface representing a Locations operations. */
export interface LocationsOperations {
  /** Return trial status for subscription by region */
  checkTrialAvailability: (
    location: string,
    options?: LocationsCheckTrialAvailabilityOptionalParams,
  ) => Promise<Trial>;
  /** Return quota for subscription by region */
  checkQuotaAvailability: (
    location: string,
    options?: LocationsCheckQuotaAvailabilityOptionalParams,
  ) => Promise<Quota>;
}

export function getLocations(context: AvsContext, subscriptionId: string) {
  return {
    checkTrialAvailability: (
      location: string,
      options?: LocationsCheckTrialAvailabilityOptionalParams,
    ) =>
      locationsCheckTrialAvailability(
        context,
        subscriptionId,
        location,
        options,
      ),
    checkQuotaAvailability: (
      location: string,
      options?: LocationsCheckQuotaAvailabilityOptionalParams,
    ) =>
      locationsCheckQuotaAvailability(
        context,
        subscriptionId,
        location,
        options,
      ),
  };
}

export function getLocationsOperations(
  context: AvsContext,
  subscriptionId: string,
): LocationsOperations {
  return {
    ...getLocations(context, subscriptionId),
  };
}
