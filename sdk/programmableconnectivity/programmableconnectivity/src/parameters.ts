// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  DeviceLocationVerificationContent,
  NetworkIdentifier,
  NumberVerificationWithoutCodeContent,
  NumberVerificationWithCodeContent,
  SimSwapRetrievalContent,
  SimSwapVerificationContent,
} from "./models.js";

export interface DeviceLocationVerifyHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface DeviceLocationVerifyBodyParam {
  /** Body parameter. */
  body: DeviceLocationVerificationContent;
}

export interface DeviceLocationVerifyHeaderParam {
  headers: RawHttpHeadersInput & DeviceLocationVerifyHeaders;
}

export type DeviceLocationVerifyParameters = DeviceLocationVerifyHeaderParam &
  DeviceLocationVerifyBodyParam &
  RequestParameters;

export interface DeviceNetworkRetrieveHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface DeviceNetworkRetrieveBodyParam {
  /** Body parameter. */
  body: NetworkIdentifier;
}

export interface DeviceNetworkRetrieveHeaderParam {
  headers: RawHttpHeadersInput & DeviceNetworkRetrieveHeaders;
}

export type DeviceNetworkRetrieveParameters = DeviceNetworkRetrieveHeaderParam &
  DeviceNetworkRetrieveBodyParam &
  RequestParameters;

export interface NumberVerificationVerifyWithoutCodeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface NumberVerificationVerifyWithoutCodeBodyParam {
  /** Body parameter. */
  body: NumberVerificationWithoutCodeContent;
}

export interface NumberVerificationVerifyWithoutCodeHeaderParam {
  headers: RawHttpHeadersInput & NumberVerificationVerifyWithoutCodeHeaders;
}

export type NumberVerificationVerifyWithoutCodeParameters =
  NumberVerificationVerifyWithoutCodeHeaderParam &
    NumberVerificationVerifyWithoutCodeBodyParam &
    RequestParameters;

export interface NumberVerificationVerifyWithCodeHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface NumberVerificationVerifyWithCodeBodyParam {
  /** Body parameter. */
  body: NumberVerificationWithCodeContent;
}

export interface NumberVerificationVerifyWithCodeHeaderParam {
  headers: RawHttpHeadersInput & NumberVerificationVerifyWithCodeHeaders;
}

export type NumberVerificationVerifyWithCodeParameters =
  NumberVerificationVerifyWithCodeHeaderParam &
    NumberVerificationVerifyWithCodeBodyParam &
    RequestParameters;

export interface SimSwapRetrieveHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface SimSwapRetrieveBodyParam {
  /** Body parameter. */
  body: SimSwapRetrievalContent;
}

export interface SimSwapRetrieveHeaderParam {
  headers: RawHttpHeadersInput & SimSwapRetrieveHeaders;
}

export type SimSwapRetrieveParameters = SimSwapRetrieveHeaderParam &
  SimSwapRetrieveBodyParam &
  RequestParameters;

export interface SimSwapVerifyHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The identifier of the APC Gateway resource which should handle this request. */
  "apc-gateway-id": string;
}

export interface SimSwapVerifyBodyParam {
  /** Body parameter. */
  body: SimSwapVerificationContent;
}

export interface SimSwapVerifyHeaderParam {
  headers: RawHttpHeadersInput & SimSwapVerifyHeaders;
}

export type SimSwapVerifyParameters = SimSwapVerifyHeaderParam &
  SimSwapVerifyBodyParam &
  RequestParameters;
