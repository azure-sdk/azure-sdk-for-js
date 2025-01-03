/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  LocationsCheckQuotaAvailabilityOptionalParams,
  LocationsCheckQuotaAvailabilityResponse,
  LocationsCheckTrialAvailabilityOptionalParams,
  LocationsCheckTrialAvailabilityResponse,
} from "../models/index.js";

/** Interface representing a Locations. */
export interface Locations {
  /**
   * Return quota for subscription by region
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  checkQuotaAvailability(
    location: string,
    options?: LocationsCheckQuotaAvailabilityOptionalParams,
  ): Promise<LocationsCheckQuotaAvailabilityResponse>;
  /**
   * Return trial status for subscription by region
   * @param location The name of the Azure region.
   * @param options The options parameters.
   */
  checkTrialAvailability(
    location: string,
    options?: LocationsCheckTrialAvailabilityOptionalParams,
  ): Promise<LocationsCheckTrialAvailabilityResponse>;
}
