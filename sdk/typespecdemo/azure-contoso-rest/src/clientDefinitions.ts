// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  VehiclesListVehiclesParameters,
  CarsGetParameters,
  CarsCreateOrUpdateParameters,
  CarsListParameters,
  MotorcyclesGetParameters,
  MotorcyclesCreateOrUpdateParameters,
  MotorcyclesListParameters,
} from "./parameters";
import {
  VehiclesListVehicles200Response,
  VehiclesListVehiclesDefaultResponse,
  CarsGet200Response,
  CarsGetDefaultResponse,
  CarsCreateOrUpdate200Response,
  CarsCreateOrUpdate201Response,
  CarsCreateOrUpdateDefaultResponse,
  CarsList200Response,
  CarsListDefaultResponse,
  MotorcyclesGet200Response,
  MotorcyclesGetDefaultResponse,
  MotorcyclesCreateOrUpdate200Response,
  MotorcyclesCreateOrUpdate201Response,
  MotorcyclesCreateOrUpdateDefaultResponse,
  MotorcyclesList200Response,
  MotorcyclesListDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface VehiclesListVehicles {
  /** List all Vehicles. */
  get(
    options?: VehiclesListVehiclesParameters,
  ): StreamableMethod<
    VehiclesListVehicles200Response | VehiclesListVehiclesDefaultResponse
  >;
}

export interface CarsGet {
  /** Fetch a Car by its id. */
  get(
    options?: CarsGetParameters,
  ): StreamableMethod<CarsGet200Response | CarsGetDefaultResponse>;
  /** Create or Update a Car. */
  patch(
    options: CarsCreateOrUpdateParameters,
  ): StreamableMethod<
    | CarsCreateOrUpdate200Response
    | CarsCreateOrUpdate201Response
    | CarsCreateOrUpdateDefaultResponse
  >;
}

export interface CarsList {
  /** List all Cars. */
  get(
    options?: CarsListParameters,
  ): StreamableMethod<CarsList200Response | CarsListDefaultResponse>;
}

export interface MotorcyclesGet {
  /** Fetch a Motorcycle by its id. */
  get(
    options?: MotorcyclesGetParameters,
  ): StreamableMethod<
    MotorcyclesGet200Response | MotorcyclesGetDefaultResponse
  >;
  /** Create or Update a Motorcycle. */
  patch(
    options: MotorcyclesCreateOrUpdateParameters,
  ): StreamableMethod<
    | MotorcyclesCreateOrUpdate200Response
    | MotorcyclesCreateOrUpdate201Response
    | MotorcyclesCreateOrUpdateDefaultResponse
  >;
}

export interface MotorcyclesList {
  /** List all Motorcycle. */
  get(
    options?: MotorcyclesListParameters,
  ): StreamableMethod<
    MotorcyclesList200Response | MotorcyclesListDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/workspaces/\{workspaceName\}/vehicles' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/vehicles",
    workspaceName: string,
  ): VehiclesListVehicles;
  /** Resource for '/workspaces/\{workspaceName\}/cars/\{carId\}' has methods for the following verbs: get, patch */
  (
    path: "/workspaces/{workspaceName}/cars/{carId}",
    workspaceName: string,
    carId: string,
  ): CarsGet;
  /** Resource for '/workspaces/\{workspaceName\}/cars' has methods for the following verbs: get */
  (path: "/workspaces/{workspaceName}/cars", workspaceName: string): CarsList;
  /** Resource for '/workspaces/\{workspaceName\}/motorcycles/\{motorcycleId\}' has methods for the following verbs: get, patch */
  (
    path: "/workspaces/{workspaceName}/motorcycles/{motorcycleId}",
    workspaceName: string,
    motorcycleId: string,
  ): MotorcyclesGet;
  /** Resource for '/workspaces/\{workspaceName\}/motorcycles' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/motorcycles",
    workspaceName: string,
  ): MotorcyclesList;
}

export type ServiceClient = Client & {
  path: Routes;
};
