// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";

export interface ListApisHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListApisQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
}

export interface ListApisQueryParam {
  queryParameters?: ListApisQueryParamProperties;
}

export interface ListApisHeaderParam {
  headers?: RawHttpHeadersInput & ListApisHeaders;
}

export type ListApisParameters = ListApisQueryParam &
  ListApisHeaderParam &
  RequestParameters;

export interface GetApiHeaders {
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

export interface GetApiHeaderParam {
  headers?: RawHttpHeadersInput & GetApiHeaders;
}

export type GetApiParameters = GetApiHeaderParam & RequestParameters;

export interface ListDefinitionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListDefinitionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
}

export interface ListDefinitionsQueryParam {
  queryParameters?: ListDefinitionsQueryParamProperties;
}

export interface ListDefinitionsHeaderParam {
  headers?: RawHttpHeadersInput & ListDefinitionsHeaders;
}

export type ListDefinitionsParameters = ListDefinitionsQueryParam &
  ListDefinitionsHeaderParam &
  RequestParameters;

export interface GetDefinitionHeaders {
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

export interface GetDefinitionHeaderParam {
  headers?: RawHttpHeadersInput & GetDefinitionHeaders;
}

export type GetDefinitionParameters = GetDefinitionHeaderParam &
  RequestParameters;

export interface ExportSpecificationHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ExportSpecificationHeaderParam {
  headers?: RawHttpHeadersInput & ExportSpecificationHeaders;
}

export type ExportSpecificationParameters = ExportSpecificationHeaderParam &
  RequestParameters;

export interface ListDeploymentsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListDeploymentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
}

export interface ListDeploymentsQueryParam {
  queryParameters?: ListDeploymentsQueryParamProperties;
}

export interface ListDeploymentsHeaderParam {
  headers?: RawHttpHeadersInput & ListDeploymentsHeaders;
}

export type ListDeploymentsParameters = ListDeploymentsQueryParam &
  ListDeploymentsHeaderParam &
  RequestParameters;

export interface GetDeploymentHeaders {
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

export interface GetDeploymentHeaderParam {
  headers?: RawHttpHeadersInput & GetDeploymentHeaders;
}

export type GetDeploymentParameters = GetDeploymentHeaderParam &
  RequestParameters;

export interface ListEnvironmentsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListEnvironmentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
}

export interface ListEnvironmentsQueryParam {
  queryParameters?: ListEnvironmentsQueryParamProperties;
}

export interface ListEnvironmentsHeaderParam {
  headers?: RawHttpHeadersInput & ListEnvironmentsHeaders;
}

export type ListEnvironmentsParameters = ListEnvironmentsQueryParam &
  ListEnvironmentsHeaderParam &
  RequestParameters;

export interface GetEnvironmentHeaders {
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

export interface GetEnvironmentHeaderParam {
  headers?: RawHttpHeadersInput & GetEnvironmentHeaders;
}

export type GetEnvironmentParameters = GetEnvironmentHeaderParam &
  RequestParameters;

export interface ListVersionsHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ListVersionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Select the specified fields to be included in the response. This parameter needs to be formatted as multi collection, we provide buildMultiCollection from serializeHelper.ts to help, you will probably need to set skipUrlEncoding as true when sending the request */
  select?: string;
}

export interface ListVersionsQueryParam {
  queryParameters?: ListVersionsQueryParamProperties;
}

export interface ListVersionsHeaderParam {
  headers?: RawHttpHeadersInput & ListVersionsHeaders;
}

export type ListVersionsParameters = ListVersionsQueryParam &
  ListVersionsHeaderParam &
  RequestParameters;

export interface GetVersionHeaders {
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

export interface GetVersionHeaderParam {
  headers?: RawHttpHeadersInput & GetVersionHeaders;
}

export type GetVersionParameters = GetVersionHeaderParam & RequestParameters;
