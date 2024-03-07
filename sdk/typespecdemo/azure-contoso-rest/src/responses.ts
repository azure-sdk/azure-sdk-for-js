// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  PagedVehicleOutput,
  CarOutput,
  PagedCarOutput,
  MotorcycleOutput,
  PagedMotorcycleOutput,
} from "./outputModels";

/** The request has succeeded. */
export interface VehiclesListVehicles200Response extends HttpResponse {
  status: "200";
  body: PagedVehicleOutput;
}

export interface VehiclesListVehiclesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface VehiclesListVehiclesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & VehiclesListVehiclesDefaultHeaders;
}

/** The request has succeeded. */
export interface CarsGet200Response extends HttpResponse {
  status: "200";
  body: CarOutput;
}

export interface CarsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CarsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CarsGetDefaultHeaders;
}

/** The request has succeeded. */
export interface CarsCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: CarOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CarsCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: CarOutput;
}

export interface CarsCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CarsCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CarsCreateOrUpdateDefaultHeaders;
}

/** The request has succeeded. */
export interface CarsList200Response extends HttpResponse {
  status: "200";
  body: PagedCarOutput;
}

export interface CarsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface CarsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & CarsListDefaultHeaders;
}

/** The request has succeeded. */
export interface MotorcyclesGet200Response extends HttpResponse {
  status: "200";
  body: MotorcycleOutput;
}

export interface MotorcyclesGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MotorcyclesGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MotorcyclesGetDefaultHeaders;
}

/** The request has succeeded. */
export interface MotorcyclesCreateOrUpdate200Response extends HttpResponse {
  status: "200";
  body: MotorcycleOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface MotorcyclesCreateOrUpdate201Response extends HttpResponse {
  status: "201";
  body: MotorcycleOutput;
}

export interface MotorcyclesCreateOrUpdateDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MotorcyclesCreateOrUpdateDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MotorcyclesCreateOrUpdateDefaultHeaders;
}

/** The request has succeeded. */
export interface MotorcyclesList200Response extends HttpResponse {
  status: "200";
  body: PagedMotorcycleOutput;
}

export interface MotorcyclesListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface MotorcyclesListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & MotorcyclesListDefaultHeaders;
}
