// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import { RequestParameters } from "@azure-rest/core-client";
import {
  AccountResource,
  BatchNumbers,
  BatchNumbersDelete,
  NumberResource,
  NumberIdentifiers,
  RequestForInformationResource,
} from "./models.js";

export interface ListNumbersQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression */
  filter?: string;
  /** Whether to return a count of the total number of records available for this request. */
  countRecords?: boolean;
}

export interface ListNumbersQueryParam {
  queryParameters?: ListNumbersQueryParamProperties;
}

export type ListNumbersParameters = ListNumbersQueryParam & RequestParameters;

export interface AccountsListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression */
  filter?: string;
  /** Whether to return a count of the total number of records available for this request. */
  countRecords?: boolean;
}

export interface AccountsListQueryParam {
  queryParameters?: AccountsListQueryParamProperties;
}

export interface AccountsListHeaderParam {
  headers?: RawHttpHeadersInput & AccountsListHeaders;
}

export type AccountsListParameters = AccountsListQueryParam &
  AccountsListHeaderParam &
  RequestParameters;

export interface AccountsGetHeaders {
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

export interface AccountsGetHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetHeaders;
}

export type AccountsGetParameters = AccountsGetHeaderParam & RequestParameters;

export interface AccountsCreateOrReplaceHeaders {
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

export interface AccountsCreateOrReplaceBodyParam {
  /** The resource instance. */
  body: AccountResource;
}

export interface AccountsCreateOrReplaceHeaderParam {
  headers?: RawHttpHeadersInput & AccountsCreateOrReplaceHeaders;
}

export type AccountsCreateOrReplaceParameters =
  AccountsCreateOrReplaceHeaderParam &
    AccountsCreateOrReplaceBodyParam &
    RequestParameters;

export interface AccountsDeleteHeaders {
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

export interface AccountsDeleteQueryParamProperties {
  /** Whether to delete the child Number resources of the Account, defaults to false. */
  deleteNumbers?: boolean;
}

export interface AccountsDeleteQueryParam {
  queryParameters?: AccountsDeleteQueryParamProperties;
}

export interface AccountsDeleteHeaderParam {
  headers?: RawHttpHeadersInput & AccountsDeleteHeaders;
}

export type AccountsDeleteParameters = AccountsDeleteQueryParam &
  AccountsDeleteHeaderParam &
  RequestParameters;

export interface AccountsCreateOrUpdateNumbersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsCreateOrUpdateNumbersBodyParam {
  /** Batch of numbers to create or replace. */
  body: BatchNumbers;
}

export interface AccountsCreateOrUpdateNumbersHeaderParam {
  headers?: RawHttpHeadersInput & AccountsCreateOrUpdateNumbersHeaders;
}

export type AccountsCreateOrUpdateNumbersParameters =
  AccountsCreateOrUpdateNumbersHeaderParam &
    AccountsCreateOrUpdateNumbersBodyParam &
    RequestParameters;

export interface AccountsDeleteNumbersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsDeleteNumbersBodyParam {
  /** Batch numbers to delete. */
  body: BatchNumbersDelete;
}

export interface AccountsDeleteNumbersHeaderParam {
  headers?: RawHttpHeadersInput & AccountsDeleteNumbersHeaders;
}

export type AccountsDeleteNumbersParameters = AccountsDeleteNumbersHeaderParam &
  AccountsDeleteNumbersBodyParam &
  RequestParameters;

export interface AccountsListNumbersHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsListNumbersQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression */
  filter?: string;
  /** Whether to return a count of the total number of records available for this request. */
  countRecords?: boolean;
}

export interface AccountsListNumbersQueryParam {
  queryParameters?: AccountsListNumbersQueryParamProperties;
}

export interface AccountsListNumbersHeaderParam {
  headers?: RawHttpHeadersInput & AccountsListNumbersHeaders;
}

export type AccountsListNumbersParameters = AccountsListNumbersQueryParam &
  AccountsListNumbersHeaderParam &
  RequestParameters;

export interface AccountsGetNumberHeaders {
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

export interface AccountsGetNumberHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetNumberHeaders;
}

export type AccountsGetNumberParameters = AccountsGetNumberHeaderParam &
  RequestParameters;

export interface AccountsCreateOrReplaceNumberHeaders {
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

export interface AccountsCreateOrReplaceNumberBodyParam {
  /** The resource instance. */
  body: NumberResource;
}

export interface AccountsCreateOrReplaceNumberHeaderParam {
  headers?: RawHttpHeadersInput & AccountsCreateOrReplaceNumberHeaders;
}

export type AccountsCreateOrReplaceNumberParameters =
  AccountsCreateOrReplaceNumberHeaderParam &
    AccountsCreateOrReplaceNumberBodyParam &
    RequestParameters;

export interface AccountsDeleteNumberHeaders {
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

export interface AccountsDeleteNumberHeaderParam {
  headers?: RawHttpHeadersInput & AccountsDeleteNumberHeaders;
}

export type AccountsDeleteNumberParameters = AccountsDeleteNumberHeaderParam &
  RequestParameters;

export interface AccountsGetTeamsCapabilityPlansHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsGetTeamsCapabilityPlansHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetTeamsCapabilityPlansHeaders;
}

export type AccountsGetTeamsCapabilityPlansParameters =
  AccountsGetTeamsCapabilityPlansHeaderParam & RequestParameters;

export interface AccountsGetTeamsAvailableCapabilitiesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "Repeatability-Request-ID"?: string;
  /** Specifies the date and time at which the request was first created. */
  "Repeatability-First-Sent"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsGetTeamsAvailableCapabilitiesBodyParam {
  /** List identifiers for a Number resource */
  body: NumberIdentifiers;
}

export interface AccountsGetTeamsAvailableCapabilitiesHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetTeamsAvailableCapabilitiesHeaders;
}

export type AccountsGetTeamsAvailableCapabilitiesParameters =
  AccountsGetTeamsAvailableCapabilitiesHeaderParam &
    AccountsGetTeamsAvailableCapabilitiesBodyParam &
    RequestParameters;

export interface AccountsListTeamsCivicAddressesHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface AccountsListTeamsCivicAddressesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression */
  filter?: string;
  /** Whether to return a count of the total number of records available for this request. */
  countRecords?: boolean;
}

export interface AccountsListTeamsCivicAddressesQueryParam {
  queryParameters?: AccountsListTeamsCivicAddressesQueryParamProperties;
}

export interface AccountsListTeamsCivicAddressesHeaderParam {
  headers?: RawHttpHeadersInput & AccountsListTeamsCivicAddressesHeaders;
}

export type AccountsListTeamsCivicAddressesParameters =
  AccountsListTeamsCivicAddressesQueryParam &
    AccountsListTeamsCivicAddressesHeaderParam &
    RequestParameters;

export interface AccountsGetTeamsCivicAddressHeaders {
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

export interface AccountsGetTeamsCivicAddressHeaderParam {
  headers?: RawHttpHeadersInput & AccountsGetTeamsCivicAddressHeaders;
}

export type AccountsGetTeamsCivicAddressParameters =
  AccountsGetTeamsCivicAddressHeaderParam & RequestParameters;

export interface TeamsRequestsForInformationListHeaders {
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface TeamsRequestsForInformationListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Filter the result list using the given expression */
  filter?: string;
  /** Whether to return a count of the total number of records available for this request. */
  countRecords?: boolean;
}

export interface TeamsRequestsForInformationListQueryParam {
  queryParameters?: TeamsRequestsForInformationListQueryParamProperties;
}

export interface TeamsRequestsForInformationListHeaderParam {
  headers?: RawHttpHeadersInput & TeamsRequestsForInformationListHeaders;
}

export type TeamsRequestsForInformationListParameters =
  TeamsRequestsForInformationListQueryParam &
    TeamsRequestsForInformationListHeaderParam &
    RequestParameters;

export interface TeamsRequestsForInformationGetRequestForInformationHeaders {
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

export interface TeamsRequestsForInformationGetRequestForInformationHeaderParam {
  headers?: RawHttpHeadersInput &
    TeamsRequestsForInformationGetRequestForInformationHeaders;
}

export type TeamsRequestsForInformationGetRequestForInformationParameters =
  TeamsRequestsForInformationGetRequestForInformationHeaderParam &
    RequestParameters;

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationHeaders {
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
export type RequestForInformationResourceResourceMergeAndPatch =
  Partial<RequestForInformationResource>;

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationBodyParam {
  /** The resource instance. */
  body: RequestForInformationResourceResourceMergeAndPatch;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationHeaderParam {
  headers?: RawHttpHeadersInput &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformationHeaders;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type TeamsRequestsForInformationCreateOrUpdateRequestForInformationParameters =
  TeamsRequestsForInformationCreateOrUpdateRequestForInformationHeaderParam &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformationMediaTypesParam &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformationBodyParam &
    RequestParameters;
