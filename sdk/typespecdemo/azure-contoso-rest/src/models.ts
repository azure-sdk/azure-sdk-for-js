// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** A car. */
export interface Car {
  /** The kind of vehicle, which is a Car. */
  vehicleKind: "Car";
  /** The number of doors in the vehicle. */
  numberOfDoors: number;
}

/** A motorcycle. */
export interface Motorcycle {
  /** The kind of vehicle, which is a Motorcycle. */
  vehicleKind: "Motorcycle";
  /** If the motorcycle has a engine bars installed. */
  hasEngineBars: boolean;
}
