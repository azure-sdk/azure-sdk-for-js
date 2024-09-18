// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RawHttpHeaders } from "@azure/core-rest-pipeline";
import { HttpResponse, ErrorResponse } from "@azure-rest/core-client";
import {
  PagedNumberListOutput,
  PagedAccountResourceOutput,
  AccountResourceOutput,
  RepeatabilityResultOutput,
  BatchNumbersOutput,
  PagedNumberResourceOutput,
  NumberResourceOutput,
  TeamsCapabilityPlansOutput,
  TeamsAvailableCapabilitiesOutput,
  PagedTeamsCivicAddressResourceOutput,
  TeamsCivicAddressResourceOutput,
  PagedRequestForInformationResourceOutput,
  RequestForInformationResourceOutput,
} from "./outputModels.js";

export interface ListNumbers200Headers {
  /** The total number of records available for this request. */
  "x-ms-record-count"?: number;
}

/** The request has succeeded. */
export interface ListNumbers200Response extends HttpResponse {
  status: "200";
  body: PagedNumberListOutput;
  headers: RawHttpHeaders & ListNumbers200Headers;
}

export interface ListNumbersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface ListNumbersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & ListNumbersDefaultHeaders;
}

export interface AccountsList200Headers {
  /** The total number of records available for this request. */
  "x-ms-record-count"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsList200Response extends HttpResponse {
  status: "200";
  body: PagedAccountResourceOutput;
  headers: RawHttpHeaders & AccountsList200Headers;
}

export interface AccountsListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsListDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsListDefaultHeaders;
}

export interface AccountsGet200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGet200Response extends HttpResponse {
  status: "200";
  body: AccountResourceOutput;
  headers: RawHttpHeaders & AccountsGet200Headers;
}

export interface AccountsGetDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetDefaultHeaders;
}

export interface AccountsCreateOrReplace200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsCreateOrReplace200Response extends HttpResponse {
  status: "200";
  body: AccountResourceOutput;
  headers: RawHttpHeaders & AccountsCreateOrReplace200Headers;
}

export interface AccountsCreateOrReplace201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AccountsCreateOrReplace201Response extends HttpResponse {
  status: "201";
  body: AccountResourceOutput;
  headers: RawHttpHeaders & AccountsCreateOrReplace201Headers;
}

export interface AccountsCreateOrReplaceDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsCreateOrReplaceDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsCreateOrReplaceDefaultHeaders;
}

export interface AccountsDelete204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AccountsDelete204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & AccountsDelete204Headers;
}

export interface AccountsDeleteDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsDeleteDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsDeleteDefaultHeaders;
}

export interface AccountsCreateOrUpdateNumbers200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsCreateOrUpdateNumbers200Response extends HttpResponse {
  status: "200";
  body: BatchNumbersOutput;
  headers: RawHttpHeaders & AccountsCreateOrUpdateNumbers200Headers;
}

export interface AccountsCreateOrUpdateNumbersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsCreateOrUpdateNumbersDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsCreateOrUpdateNumbersDefaultHeaders;
}

export interface AccountsDeleteNumbers204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AccountsDeleteNumbers204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & AccountsDeleteNumbers204Headers;
}

export interface AccountsDeleteNumbersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsDeleteNumbersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsDeleteNumbersDefaultHeaders;
}

export interface AccountsListNumbers200Headers {
  /** The total number of records available for this request. */
  "x-ms-record-count"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsListNumbers200Response extends HttpResponse {
  status: "200";
  body: PagedNumberResourceOutput;
  headers: RawHttpHeaders & AccountsListNumbers200Headers;
}

export interface AccountsListNumbersDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsListNumbersDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsListNumbersDefaultHeaders;
}

export interface AccountsGetNumber200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGetNumber200Response extends HttpResponse {
  status: "200";
  body: NumberResourceOutput;
  headers: RawHttpHeaders & AccountsGetNumber200Headers;
}

export interface AccountsGetNumberDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetNumberDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetNumberDefaultHeaders;
}

export interface AccountsCreateOrReplaceNumber200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsCreateOrReplaceNumber200Response extends HttpResponse {
  status: "200";
  body: NumberResourceOutput;
  headers: RawHttpHeaders & AccountsCreateOrReplaceNumber200Headers;
}

export interface AccountsCreateOrReplaceNumber201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface AccountsCreateOrReplaceNumber201Response extends HttpResponse {
  status: "201";
  body: NumberResourceOutput;
  headers: RawHttpHeaders & AccountsCreateOrReplaceNumber201Headers;
}

export interface AccountsCreateOrReplaceNumberDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsCreateOrReplaceNumberDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsCreateOrReplaceNumberDefaultHeaders;
}

export interface AccountsDeleteNumber204Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface AccountsDeleteNumber204Response extends HttpResponse {
  status: "204";
  headers: RawHttpHeaders & AccountsDeleteNumber204Headers;
}

export interface AccountsDeleteNumberDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsDeleteNumberDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsDeleteNumberDefaultHeaders;
}

export interface AccountsGetTeamsCapabilityPlans200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGetTeamsCapabilityPlans200Response
  extends HttpResponse {
  status: "200";
  body: TeamsCapabilityPlansOutput;
  headers: RawHttpHeaders & AccountsGetTeamsCapabilityPlans200Headers;
}

export interface AccountsGetTeamsCapabilityPlansDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetTeamsCapabilityPlansDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetTeamsCapabilityPlansDefaultHeaders;
}

export interface AccountsGetTeamsAvailableCapabilities200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGetTeamsAvailableCapabilities200Response
  extends HttpResponse {
  status: "200";
  body: TeamsAvailableCapabilitiesOutput;
  headers: RawHttpHeaders & AccountsGetTeamsAvailableCapabilities200Headers;
}

export interface AccountsGetTeamsAvailableCapabilitiesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetTeamsAvailableCapabilitiesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetTeamsAvailableCapabilitiesDefaultHeaders;
}

export interface AccountsListTeamsCivicAddresses200Headers {
  /** The total number of records available for this request. */
  "x-ms-record-count"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsListTeamsCivicAddresses200Response
  extends HttpResponse {
  status: "200";
  body: PagedTeamsCivicAddressResourceOutput;
  headers: RawHttpHeaders & AccountsListTeamsCivicAddresses200Headers;
}

export interface AccountsListTeamsCivicAddressesDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsListTeamsCivicAddressesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsListTeamsCivicAddressesDefaultHeaders;
}

export interface AccountsGetTeamsCivicAddress200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface AccountsGetTeamsCivicAddress200Response extends HttpResponse {
  status: "200";
  body: TeamsCivicAddressResourceOutput;
  headers: RawHttpHeaders & AccountsGetTeamsCivicAddress200Headers;
}

export interface AccountsGetTeamsCivicAddressDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface AccountsGetTeamsCivicAddressDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & AccountsGetTeamsCivicAddressDefaultHeaders;
}

export interface TeamsRequestsForInformationList200Headers {
  /** The total number of records available for this request. */
  "x-ms-record-count"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TeamsRequestsForInformationList200Response
  extends HttpResponse {
  status: "200";
  body: PagedRequestForInformationResourceOutput;
  headers: RawHttpHeaders & TeamsRequestsForInformationList200Headers;
}

export interface TeamsRequestsForInformationListDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TeamsRequestsForInformationListDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders & TeamsRequestsForInformationListDefaultHeaders;
}

export interface TeamsRequestsForInformationGetRequestForInformation200Headers {
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TeamsRequestsForInformationGetRequestForInformation200Response
  extends HttpResponse {
  status: "200";
  body: RequestForInformationResourceOutput;
  headers: RawHttpHeaders &
    TeamsRequestsForInformationGetRequestForInformation200Headers;
}

export interface TeamsRequestsForInformationGetRequestForInformationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TeamsRequestsForInformationGetRequestForInformationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TeamsRequestsForInformationGetRequestForInformationDefaultHeaders;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded. */
export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response
  extends HttpResponse {
  status: "200";
  body: RequestForInformationResourceOutput;
  headers: RawHttpHeaders &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Headers;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Headers {
  /** Indicates whether the repeatable request was accepted or rejected. */
  "repeatability-result"?: RepeatabilityResultOutput;
  /** The entity tag for the response. */
  etag?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response
  extends HttpResponse {
  status: "201";
  body: RequestForInformationResourceOutput;
  headers: RawHttpHeaders &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Headers;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultHeaders {
  /** String error code indicating what went wrong. */
  "x-ms-error-code"?: string;
}

export interface TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponse;
  headers: RawHttpHeaders &
    TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultHeaders;
}
