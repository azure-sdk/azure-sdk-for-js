// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import { Registration } from "./models.js";

export interface GetRegistrationHeaders {
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetRegistrationHeaderParam {
  headers?: RawHttpHeadersInput & GetRegistrationHeaders;
}

export type GetRegistrationParameters = GetRegistrationHeaderParam &
  RequestParameters;

export interface CreateOrUpdateRegistrationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The resource instance. */
export type RegistrationResourceMergeAndPatch = Partial<Registration>;

export interface CreateOrUpdateRegistrationBodyParam {
  /** The resource instance. */
  body: RegistrationResourceMergeAndPatch;
}

export interface CreateOrUpdateRegistrationHeaderParam {
  headers?: RawHttpHeadersInput & CreateOrUpdateRegistrationHeaders;
}

export interface CreateOrUpdateRegistrationMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateOrUpdateRegistrationParameters =
  CreateOrUpdateRegistrationHeaderParam &
    CreateOrUpdateRegistrationMediaTypesParam &
    CreateOrUpdateRegistrationBodyParam &
    RequestParameters;

export interface DeleteRegistrationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface DeleteRegistrationHeaderParam {
  headers?: RawHttpHeadersInput & DeleteRegistrationHeaders;
}

export type DeleteRegistrationParameters = DeleteRegistrationHeaderParam &
  RequestParameters;

export interface ListRegistrationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListRegistrationHeaderParam {
  headers?: RawHttpHeadersInput & ListRegistrationHeaders;
}

export type ListRegistrationParameters = ListRegistrationHeaderParam &
  RequestParameters;
