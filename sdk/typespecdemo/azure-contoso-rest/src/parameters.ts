// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { Car, Motorcycle } from "./models";

export type VehiclesListVehiclesParameters = RequestParameters;
export type CarsGetParameters = RequestParameters;
/** The resource instance. */
export type CarResourceMergeAndPatch = Partial<Car>;

export interface CarsCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: CarResourceMergeAndPatch;
}

export interface CarsCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CarsCreateOrUpdateParameters = CarsCreateOrUpdateMediaTypesParam &
  CarsCreateOrUpdateBodyParam &
  RequestParameters;
export type CarsListParameters = RequestParameters;
export type MotorcyclesGetParameters = RequestParameters;
/** The resource instance. */
export type MotorcycleResourceMergeAndPatch = Partial<Motorcycle>;

export interface MotorcyclesCreateOrUpdateBodyParam {
  /** The resource instance. */
  body: MotorcycleResourceMergeAndPatch;
}

export interface MotorcyclesCreateOrUpdateMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type MotorcyclesCreateOrUpdateParameters =
  MotorcyclesCreateOrUpdateMediaTypesParam &
    MotorcyclesCreateOrUpdateBodyParam &
    RequestParameters;
export type MotorcyclesListParameters = RequestParameters;
