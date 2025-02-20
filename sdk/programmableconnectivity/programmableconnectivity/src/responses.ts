// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import type {
  DeviceLocationVerificationResultOutput,
  NetworkRetrievalResultOutput,
  NumberVerificationResultOutput,
  SimSwapRetrievalResultOutput,
  SimSwapVerificationResultOutput,
} from "./outputModels.js";

export interface DeviceLocationVerify200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}

/** The request has succeeded. */
export interface DeviceLocationVerify200Response extends HttpResponse {
  status: "200";
  body: DeviceLocationVerificationResultOutput;
  headers: RawHttpHeaders & DeviceLocationVerify200Headers;
}

export interface DeviceLocationVerifyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeviceLocationVerifyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeviceLocationVerifyDefaultHeaders;
}

export interface DeviceNetworkRetrieve200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}

/** The request has succeeded. */
export interface DeviceNetworkRetrieve200Response extends HttpResponse {
  status: "200";
  body: NetworkRetrievalResultOutput;
  headers: RawHttpHeaders & DeviceNetworkRetrieve200Headers;
}

export interface DeviceNetworkRetrieveDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface DeviceNetworkRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & DeviceNetworkRetrieveDefaultHeaders;
}

export interface NumberVerificationVerifyWithoutCode302Headers {
  /** The URI of the network's authorization endpoint, which should be followed by the front-end application. */
  location: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** Redirection */
export interface NumberVerificationVerifyWithoutCode302Response
  extends HttpResponse {
  status: "302";
  headers: RawHttpHeaders & NumberVerificationVerifyWithoutCode302Headers;
}

export interface NumberVerificationVerifyWithoutCodeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface NumberVerificationVerifyWithoutCodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & NumberVerificationVerifyWithoutCodeDefaultHeaders;
}

export interface NumberVerificationVerifyWithCode200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}

/** The request has succeeded. */
export interface NumberVerificationVerifyWithCode200Response
  extends HttpResponse {
  status: "200";
  body: NumberVerificationResultOutput;
  headers: RawHttpHeaders & NumberVerificationVerifyWithCode200Headers;
}

export interface NumberVerificationVerifyWithCodeDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface NumberVerificationVerifyWithCodeDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & NumberVerificationVerifyWithCodeDefaultHeaders;
}

export interface SimSwapRetrieve200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}

/** The request has succeeded. */
export interface SimSwapRetrieve200Response extends HttpResponse {
  status: "200";
  body: SimSwapRetrievalResultOutput;
  headers: RawHttpHeaders & SimSwapRetrieve200Headers;
}

export interface SimSwapRetrieveDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SimSwapRetrieveDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SimSwapRetrieveDefaultHeaders;
}

export interface SimSwapVerify200Headers {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** An opaque, globally-unique, server-generated string identifier for the request. */
  "x-ms-request-id"?: string;
}

/** The request has succeeded. */
export interface SimSwapVerify200Response extends HttpResponse {
  status: "200";
  body: SimSwapVerificationResultOutput;
  headers: RawHttpHeaders & SimSwapVerify200Headers;
}

export interface SimSwapVerifyDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface SimSwapVerifyDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & SimSwapVerifyDefaultHeaders;
}
