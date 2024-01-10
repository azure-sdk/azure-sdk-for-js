// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { NotificationContent } from "./models";

export interface GetStreamHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetStreamHeaderParam {
  headers?: RawHttpHeadersInput & GetStreamHeaders;
}

export type GetStreamParameters = GetStreamHeaderParam & RequestParameters;

export interface SendMessageHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SendMessageBodyParam {
  body?: NotificationContent;
}

export interface SendMessageHeaderParam {
  headers?: RawHttpHeadersInput & SendMessageHeaders;
}

export type SendMessageParameters = SendMessageHeaderParam &
  SendMessageBodyParam &
  RequestParameters;

export interface GetTemplatesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetTemplatesHeaderParam {
  headers?: RawHttpHeadersInput & GetTemplatesHeaders;
}

export type GetTemplatesParameters = GetTemplatesHeaderParam &
  RequestParameters;
