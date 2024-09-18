// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ListNumbersParameters,
  AccountsListParameters,
  AccountsGetParameters,
  AccountsCreateOrReplaceParameters,
  AccountsDeleteParameters,
  AccountsCreateOrUpdateNumbersParameters,
  AccountsDeleteNumbersParameters,
  AccountsListNumbersParameters,
  AccountsGetNumberParameters,
  AccountsCreateOrReplaceNumberParameters,
  AccountsDeleteNumberParameters,
  AccountsGetTeamsCapabilityPlansParameters,
  AccountsGetTeamsAvailableCapabilitiesParameters,
  AccountsListTeamsCivicAddressesParameters,
  AccountsGetTeamsCivicAddressParameters,
  TeamsRequestsForInformationListParameters,
  TeamsRequestsForInformationGetRequestForInformationParameters,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformationParameters,
} from "./parameters.js";
import {
  ListNumbers200Response,
  ListNumbersDefaultResponse,
  AccountsList200Response,
  AccountsListDefaultResponse,
  AccountsGet200Response,
  AccountsGetDefaultResponse,
  AccountsCreateOrReplace200Response,
  AccountsCreateOrReplace201Response,
  AccountsCreateOrReplaceDefaultResponse,
  AccountsDelete204Response,
  AccountsDeleteDefaultResponse,
  AccountsCreateOrUpdateNumbers200Response,
  AccountsCreateOrUpdateNumbersDefaultResponse,
  AccountsDeleteNumbers204Response,
  AccountsDeleteNumbersDefaultResponse,
  AccountsListNumbers200Response,
  AccountsListNumbersDefaultResponse,
  AccountsGetNumber200Response,
  AccountsGetNumberDefaultResponse,
  AccountsCreateOrReplaceNumber200Response,
  AccountsCreateOrReplaceNumber201Response,
  AccountsCreateOrReplaceNumberDefaultResponse,
  AccountsDeleteNumber204Response,
  AccountsDeleteNumberDefaultResponse,
  AccountsGetTeamsCapabilityPlans200Response,
  AccountsGetTeamsCapabilityPlansDefaultResponse,
  AccountsGetTeamsAvailableCapabilities200Response,
  AccountsGetTeamsAvailableCapabilitiesDefaultResponse,
  AccountsListTeamsCivicAddresses200Response,
  AccountsListTeamsCivicAddressesDefaultResponse,
  AccountsGetTeamsCivicAddress200Response,
  AccountsGetTeamsCivicAddressDefaultResponse,
  TeamsRequestsForInformationList200Response,
  TeamsRequestsForInformationListDefaultResponse,
  TeamsRequestsForInformationGetRequestForInformation200Response,
  TeamsRequestsForInformationGetRequestForInformationDefaultResponse,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response,
  TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse,
} from "./responses.js";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListNumbers {
  /** List all the Numbers associated with this Communications Gateway. */
  get(
    options?: ListNumbersParameters,
  ): StreamableMethod<ListNumbers200Response | ListNumbersDefaultResponse>;
}

export interface AccountsList {
  /** Get list of Accounts with details. An Account represents an Enterprise or collection of users. */
  get(
    options?: AccountsListParameters,
  ): StreamableMethod<AccountsList200Response | AccountsListDefaultResponse>;
}

export interface AccountsGet {
  /** Get details of a specific Account using its Name. An Account represents an Enterprise or collection of users. */
  get(
    options?: AccountsGetParameters,
  ): StreamableMethod<AccountsGet200Response | AccountsGetDefaultResponse>;
  /** Create or replace the details of an Account. */
  put(
    options: AccountsCreateOrReplaceParameters,
  ): StreamableMethod<
    | AccountsCreateOrReplace200Response
    | AccountsCreateOrReplace201Response
    | AccountsCreateOrReplaceDefaultResponse
  >;
  /** Delete a specific Account using its Name. This will fail if any Numbers are provisioned on the Account. */
  delete(
    options?: AccountsDeleteParameters,
  ): StreamableMethod<
    AccountsDelete204Response | AccountsDeleteDefaultResponse
  >;
}

export interface AccountsCreateOrUpdateNumbers {
  /** Create or update up to 100 Numbers on the specified account. */
  post(
    options: AccountsCreateOrUpdateNumbersParameters,
  ): StreamableMethod<
    | AccountsCreateOrUpdateNumbers200Response
    | AccountsCreateOrUpdateNumbersDefaultResponse
  >;
}

export interface AccountsDeleteNumbers {
  /** Delete up to 100 Numbers on the specified account. */
  post(
    options: AccountsDeleteNumbersParameters,
  ): StreamableMethod<
    AccountsDeleteNumbers204Response | AccountsDeleteNumbersDefaultResponse
  >;
}

export interface AccountsListNumbers {
  /** Get a list of Numbers on the specified account. */
  get(
    options?: AccountsListNumbersParameters,
  ): StreamableMethod<
    AccountsListNumbers200Response | AccountsListNumbersDefaultResponse
  >;
}

export interface AccountsGetNumber {
  /** Get details of a specific Number using its telephone number. */
  get(
    options?: AccountsGetNumberParameters,
  ): StreamableMethod<
    AccountsGetNumber200Response | AccountsGetNumberDefaultResponse
  >;
  /** Create or replace the details of a Number. */
  put(
    options: AccountsCreateOrReplaceNumberParameters,
  ): StreamableMethod<
    | AccountsCreateOrReplaceNumber200Response
    | AccountsCreateOrReplaceNumber201Response
    | AccountsCreateOrReplaceNumberDefaultResponse
  >;
  /** Delete a specific Number using its telephone number. */
  delete(
    options?: AccountsDeleteNumberParameters,
  ): StreamableMethod<
    AccountsDeleteNumber204Response | AccountsDeleteNumberDefaultResponse
  >;
}

export interface AccountsGetTeamsCapabilityPlans {
  /** Get a list of Teams capability plans on the specified account. */
  post(
    options?: AccountsGetTeamsCapabilityPlansParameters,
  ): StreamableMethod<
    | AccountsGetTeamsCapabilityPlans200Response
    | AccountsGetTeamsCapabilityPlansDefaultResponse
  >;
}

export interface AccountsGetTeamsAvailableCapabilities {
  /** Get a list of Teams Available Capabilities on the specified account. */
  post(
    options: AccountsGetTeamsAvailableCapabilitiesParameters,
  ): StreamableMethod<
    | AccountsGetTeamsAvailableCapabilities200Response
    | AccountsGetTeamsAvailableCapabilitiesDefaultResponse
  >;
}

export interface AccountsListTeamsCivicAddresses {
  /** Get a list of Teams Civic Addresses on the specified account. */
  get(
    options?: AccountsListTeamsCivicAddressesParameters,
  ): StreamableMethod<
    | AccountsListTeamsCivicAddresses200Response
    | AccountsListTeamsCivicAddressesDefaultResponse
  >;
}

export interface AccountsGetTeamsCivicAddress {
  /** Get details of a specific Teams Civic Address using its ID. */
  get(
    options?: AccountsGetTeamsCivicAddressParameters,
  ): StreamableMethod<
    | AccountsGetTeamsCivicAddress200Response
    | AccountsGetTeamsCivicAddressDefaultResponse
  >;
}

export interface TeamsRequestsForInformationList {
  /** Get list of Requests for Information with details. */
  get(
    options?: TeamsRequestsForInformationListParameters,
  ): StreamableMethod<
    | TeamsRequestsForInformationList200Response
    | TeamsRequestsForInformationListDefaultResponse
  >;
}

export interface TeamsRequestsForInformationGetRequestForInformation {
  /** Get details of a specific Request for Information using its ID. */
  get(
    options?: TeamsRequestsForInformationGetRequestForInformationParameters,
  ): StreamableMethod<
    | TeamsRequestsForInformationGetRequestForInformation200Response
    | TeamsRequestsForInformationGetRequestForInformationDefaultResponse
  >;
  /** Create of update the details of a Request for Information. */
  patch(
    options: TeamsRequestsForInformationCreateOrUpdateRequestForInformationParameters,
  ): StreamableMethod<
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation200Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformation201Response
    | TeamsRequestsForInformationCreateOrUpdateRequestForInformationDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/numbers' has methods for the following verbs: get */
  (path: "/numbers"): ListNumbers;
  /** Resource for '/accounts' has methods for the following verbs: get */
  (path: "/accounts"): AccountsList;
  /** Resource for '/accounts/\{accountName\}' has methods for the following verbs: get, put, delete */
  (path: "/accounts/{accountName}", accountName: string): AccountsGet;
  /** Resource for '/accounts/\{accountName\}:createOrUpdateNumbers' has methods for the following verbs: post */
  (
    path: "/accounts/{accountName}:createOrUpdateNumbers",
    accountName: string,
  ): AccountsCreateOrUpdateNumbers;
  /** Resource for '/accounts/\{accountName\}:deleteNumbers' has methods for the following verbs: post */
  (
    path: "/accounts/{accountName}:deleteNumbers",
    accountName: string,
  ): AccountsDeleteNumbers;
  /** Resource for '/accounts/\{accountName\}/numbers' has methods for the following verbs: get */
  (
    path: "/accounts/{accountName}/numbers",
    accountName: string,
  ): AccountsListNumbers;
  /** Resource for '/accounts/\{accountName\}/numbers/\{telephoneNumber\}' has methods for the following verbs: get, put, delete */
  (
    path: "/accounts/{accountName}/numbers/{telephoneNumber}",
    accountName: string,
    telephoneNumber: string,
  ): AccountsGetNumber;
  /** Resource for '/accounts/\{accountName\}:getTeamsCapabilityPlans' has methods for the following verbs: post */
  (
    path: "/accounts/{accountName}:getTeamsCapabilityPlans",
    accountName: string,
  ): AccountsGetTeamsCapabilityPlans;
  /** Resource for '/accounts/\{accountName\}:getTeamsAvailableCapabilities' has methods for the following verbs: post */
  (
    path: "/accounts/{accountName}:getTeamsAvailableCapabilities",
    accountName: string,
  ): AccountsGetTeamsAvailableCapabilities;
  /** Resource for '/accounts/\{accountName\}/teamsCivicAddresses' has methods for the following verbs: get */
  (
    path: "/accounts/{accountName}/teamsCivicAddresses",
    accountName: string,
  ): AccountsListTeamsCivicAddresses;
  /** Resource for '/accounts/\{accountName\}/teamsCivicAddresses/\{civicAddressId\}' has methods for the following verbs: get */
  (
    path: "/accounts/{accountName}/teamsCivicAddresses/{civicAddressId}",
    accountName: string,
    civicAddressId: string,
  ): AccountsGetTeamsCivicAddress;
  /** Resource for '/teamsRequestsForInformation' has methods for the following verbs: get */
  (path: "/teamsRequestsForInformation"): TeamsRequestsForInformationList;
  /** Resource for '/teamsRequestsForInformation/\{tenantId\}' has methods for the following verbs: get, patch */
  (
    path: "/teamsRequestsForInformation/{tenantId}",
    tenantId: string,
  ): TeamsRequestsForInformationGetRequestForInformation;
}

export type VoiceServicesClient = Client & {
  path: Routes;
};
