// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  DeviceLocationVerifyParameters,
  DeviceNetworkRetrieveParameters,
  NumberVerificationVerifyWithoutCodeParameters,
  NumberVerificationVerifyWithCodeParameters,
  SimSwapRetrieveParameters,
  SimSwapVerifyParameters,
} from "./parameters.js";
import type {
  DeviceLocationVerify200Response,
  DeviceLocationVerifyDefaultResponse,
  DeviceNetworkRetrieve200Response,
  DeviceNetworkRetrieveDefaultResponse,
  NumberVerificationVerifyWithoutCode302Response,
  NumberVerificationVerifyWithoutCodeDefaultResponse,
  NumberVerificationVerifyWithCode200Response,
  NumberVerificationVerifyWithCodeDefaultResponse,
  SimSwapRetrieve200Response,
  SimSwapRetrieveDefaultResponse,
  SimSwapVerify200Response,
  SimSwapVerifyDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface DeviceLocationVerify {
  /** Verifies whether a device is within a specified location area, defined as an accuracy (radius) around a point, specified by longitude and latitude. */
  post(
    options: DeviceLocationVerifyParameters,
  ): StreamableMethod<DeviceLocationVerify200Response | DeviceLocationVerifyDefaultResponse>;
}

export interface DeviceNetworkRetrieve {
  /** Retrieves the network a given device is on. Returns network in a networkCode format that can be used for other APIs. */
  post(
    options: DeviceNetworkRetrieveParameters,
  ): StreamableMethod<DeviceNetworkRetrieve200Response | DeviceNetworkRetrieveDefaultResponse>;
}

export interface NumberVerificationVerifyWithoutCode {
  /** Verifies the phone number (MSISDN) associated with a device. As part of the frontend authorization flow, the device is redirected to the operator network to authenticate directly. */
  post(
    options: NumberVerificationVerifyWithoutCodeParameters,
  ): StreamableMethod<
    | NumberVerificationVerifyWithoutCode302Response
    | NumberVerificationVerifyWithoutCodeDefaultResponse
  >;
  /** Verifies the phone number (MSISDN) associated with a device. */
  post(
    options: NumberVerificationVerifyWithCodeParameters,
  ): StreamableMethod<
    NumberVerificationVerifyWithCode200Response | NumberVerificationVerifyWithCodeDefaultResponse
  >;
}

export interface SimSwapRetrieve {
  /** Provides timestamp of latest SIM swap */
  post(
    options: SimSwapRetrieveParameters,
  ): StreamableMethod<SimSwapRetrieve200Response | SimSwapRetrieveDefaultResponse>;
}

export interface SimSwapVerify {
  /** Verifies if a SIM swap has been performed during a past period (defined in the request with 'maxAgeHours' attribute). Returns 'True' if a SIM swap has occured. */
  post(
    options: SimSwapVerifyParameters,
  ): StreamableMethod<SimSwapVerify200Response | SimSwapVerifyDefaultResponse>;
}

export interface Routes {
  /** Resource for '/device-location/location:verify' has methods for the following verbs: post */
  (path: "/device-location/location:verify"): DeviceLocationVerify;
  /** Resource for '/device-network/network:retrieve' has methods for the following verbs: post */
  (path: "/device-network/network:retrieve"): DeviceNetworkRetrieve;
  /** Resource for '/number-verification/number:verify' has methods for the following verbs: post */
  (path: "/number-verification/number:verify"): NumberVerificationVerifyWithoutCode;
  /** Resource for '/sim-swap/sim-swap:retrieve' has methods for the following verbs: post */
  (path: "/sim-swap/sim-swap:retrieve"): SimSwapRetrieve;
  /** Resource for '/sim-swap/sim-swap:verify' has methods for the following verbs: post */
  (path: "/sim-swap/sim-swap:verify"): SimSwapVerify;
}

export type ProgrammableConnectivityClient = Client & {
  path: Routes;
};
