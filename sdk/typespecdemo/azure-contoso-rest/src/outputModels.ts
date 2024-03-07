// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** A vehicle. */
export interface VehicleOutput {
  /** The id of the vehicle. */
  readonly id: string;
  /**
   * The kind of vehicle.
   *
   * Possible values: "Car", "Motorcycle"
   */
  vehicleKind: string;
  /** The name of the vehicle manufacturer. */
  manufacturerName: string;
  /** The model of the vehicle. */
  modelName: string;
  /** The model of the vehicle. */
  plateNumber: string;
}

/** A car. */
export interface CarOutput {
  /** The id of the vehicle. */
  readonly id: string;
  /** The kind of vehicle, which is a Car. */
  vehicleKind: "Car";
  /** The number of doors in the vehicle. */
  numberOfDoors: number;
}

/** A motorcycle. */
export interface MotorcycleOutput {
  /** The id of the motorcycle. */
  readonly id: string;
  /** The kind of vehicle, which is a Motorcycle. */
  vehicleKind: "Motorcycle";
  /** If the motorcycle has a engine bars installed. */
  hasEngineBars: boolean;
}

/** Paged collection of Vehicle items */
export type PagedVehicleOutput = Paged<VehicleOutput>;
/** Paged collection of Car items */
export type PagedCarOutput = Paged<CarOutput>;
/** Paged collection of Motorcycle items */
export type PagedMotorcycleOutput = Paged<MotorcycleOutput>;
