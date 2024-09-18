// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** The configuration for a telephone number provisioned in Azure Communications Gateway. */
export interface NumberResourceOutput {
  /**
   * The status of the provisioning action associated with this resource.
   *
   * Possible values: "pending", "synced", "failed"
   */
  readonly serviceProvisioningStatus?: ServiceProvisioningStatusOutput;
  /** Any errors pertaining to the provisioning of this resource. */
  readonly serviceProvisioningErrors?: Array<ErrorModel>;
  /** Telephone number in E.164 format. */
  telephoneNumber: string;
  /** Name of the account. Can only contain letters, numbers, underscores and dashes, and is case-sensitive. Can be up to 100 characters in length. */
  accountName: string;
  /** Configuration of the individual backend services for this number. */
  serviceDetails: NumberServiceDetailsOutput;
  /** Configuration for this number. */
  configuration?: NumberConfigurationOutput;
}

/** Configuration of backend services for a telephone number. */
export interface NumberServiceDetailsOutput {
  /** Details for the Teams Operator Connect service on this Number. */
  teamsOperatorConnect?: TeamsOperatorConnectNumberDetailsOutput;
  /** Details for the Teams Direct Routing service on this Number. */
  teamsDirectRouting?: TeamsDirectRoutingNumberDetailsOutput;
  /** Details for the Teams Phone Mobile service on this Number. */
  teamsPhoneMobile?: TeamsPhoneMobileNumberDetailsOutput;
  /** Details for the Zoom Phone Cloud Peering service on this Number. */
  zoomPhoneCloudPeering?: ZoomPhoneCloudPeeringNumberDetailsOutput;
  /** Details for the Azure Operator Call Protection service on this Number. */
  azureOperatorCallProtection?: AzureOperatorCallProtectionNumberDetailsOutput;
}

/** Details for the Teams Operator Connect service on this Number. */
export interface TeamsOperatorConnectNumberDetailsOutput {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
  /**
   * The assignment status of this Number.
   *
   * Possible values: "assigned", "unassigned"
   */
  assignmentStatus?: TelephoneNumberAssignmentStatusOutput;
  /** The configuration for Teams Operator Connect on this number. */
  configuration?: TeamsOperatorConnectNumberConfigOutput;
}

/** Telephone number configuration for Teams Operator Connect telephone numbers. */
export interface TeamsOperatorConnectNumberConfigOutput {
  /** The usage for this telephone number. */
  usage: string;
  /** The choosable capabilities for this telephone number. */
  choosableCapabilities: string[];
  /** The acquired capabilities for this telephone number. */
  readonly acquiredCapabilities?: string[];
  /** The available capabilities for this telephone number. */
  readonly availableCapabilities?: string[];
  /** The additional usages for this telephone number. */
  additionalUsages?: string[];
  /** The ID of the civic address to be used as the emergency address for this telephone number. */
  civicAddressId?: string;
  /** The ID of the location to be used as the emergency address for this telephone number. */
  locationId?: string;
  /** If the enterprise is allowed to update the address for this telephone number. */
  allowTenantAddressUpdate?: boolean;
  /** The country code to be displayed with this telephone number */
  displayedCountryCode?: string;
}

/** Details for the Teams Direct Routing service on this Number. */
export interface TeamsDirectRoutingNumberDetailsOutput {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Details for the Teams Phone Mobile service on this Number. */
export interface TeamsPhoneMobileNumberDetailsOutput {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
  /**
   * The assignment status of this Number.
   *
   * Possible values: "assigned", "unassigned"
   */
  assignmentStatus?: TelephoneNumberAssignmentStatusOutput;
  /** The configuration for Teams Phone Mobile on this number. */
  configuration?: TeamsPhoneMobileNumberConfigOutput;
}

/** Telephone number configuration for Teams Phone Mobile telephone numbers. */
export interface TeamsPhoneMobileNumberConfigOutput {
  /** The usage for this telephone number. */
  usage: string;
  /** The choosable capabilities for this telephone number. */
  choosableCapabilities: string[];
  /** The acquired capabilities for this telephone number. */
  readonly acquiredCapabilities?: string[];
  /** The available capabilities for this telephone number. */
  readonly availableCapabilities?: string[];
  /** The additional usages for this telephone number. */
  additionalUsages?: string[];
  /** The ID of the civic address to be used as the emergency address for this telephone number. */
  civicAddressId?: string;
  /** The ID of the location to be used as the emergency address for this telephone number. */
  locationId?: string;
  /** If the enterprise is allowed to update the address for this telephone number. */
  allowTenantAddressUpdate?: boolean;
  /** The country code to be displayed with this telephone number */
  displayedCountryCode?: string;
}

/** Details for the Zoom Phone Cloud Peering service on this Number. */
export interface ZoomPhoneCloudPeeringNumberDetailsOutput {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Details for the Azure Operator Call Protection service on this Number. */
export interface AzureOperatorCallProtectionNumberDetailsOutput {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Configuration for this number. */
export interface NumberConfigurationOutput {
  /** Contents of the custom SIP header to use with this number. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. The name of the custom header is set as part of the provisioning platform configuration on Azure Communications Gateway. */
  customSipHeader?: string;
}

/** An account represents a group of numbers, typically associated with an enterprise. */
export interface AccountResourceOutput {
  /**
   * The status of the provisioning action associated with this resource.
   *
   * Possible values: "pending", "synced", "failed"
   */
  readonly serviceProvisioningStatus?: ServiceProvisioningStatusOutput;
  /** Any errors pertaining to the provisioning of this resource. */
  readonly serviceProvisioningErrors?: Array<ErrorModel>;
  /** Name of the account. */
  name: string;
  /** A user defined identifier used for correlating with external systems. */
  correlationId?: string;
  /** The details of the account. */
  serviceDetails?: AccountServiceDetailsOutput;
}

/** Details of the backend services associated with this Account. */
export interface AccountServiceDetailsOutput {
  /** The Microsoft Teams Tenant ID of the Account. This can only be updated if no Operator Connect or Teams Phone Mobile numbers are configured in this account. */
  teamsTenantId?: string;
  /** Details for the Teams Operator Connect service on this Account. */
  teamsOperatorConnect?: TeamsOperatorConnectAccountDetailsOutput;
  /** Details for the Teams Direct Routing service on this Account. */
  teamsDirectRouting?: TeamsDirectRoutingAccountDetailsOutput;
  /** Details for the Teams Phone Mobile service on this Account. */
  teamsPhoneMobile?: TeamsPhoneMobileAccountDetailsOutput;
  /** Details for the Zoom Phone Cloud Peering service on this Account. */
  zoomPhoneCloudPeering?: ZoomPhoneCloudPeeringAccountDetailsOutput;
  /** Details for the Azure Operator Call Protection service on this Account. */
  azureOperatorCallProtection?: AzureOperatorCallProtectionAccountDetailsOutput;
}

/** Account details specific to Teams Operator Connect on this Account. */
export interface TeamsOperatorConnectAccountDetailsOutput {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The count of telephone numbers associated with this account that have this backend service enabled. */
  readonly numberCount?: number;
}

/** Account details specific to Teams Direct Routing on this Account. */
export interface TeamsDirectRoutingAccountDetailsOutput {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The count of telephone numbers associated with this account that have this backend service enabled. */
  readonly numberCount?: number;
  /** The configuration for Teams Direct Routing on this account. */
  configuration?: TeamsDirectRoutingAccountConfigOutput;
  /**
   * The provisioning status of the domains.
   *
   * Possible values: "provisioned", "notProvisioned", "inconsistent"
   */
  readonly subdomainStatus: TeamsDirectRoutingSubdomainProvisioningStatusOutput;
}

/** Configuration specific to Teams Direct Routing. */
export interface TeamsDirectRoutingAccountConfigOutput {
  /** Enables/disables caller ID screening for the account. Caller ID screening is enabled by default. */
  callScreening: boolean;
  /** Enterprise-specific domain name label. Can only contain letters, numbers, underscores and dashes. Can be up to 10 characters in length. */
  subdomain: string;
  /** DNS TXT value for the Direct Routing regions, as provided by the customer from their Microsoft 365 Admin Center. */
  subdomainTokens: TeamsDirectRoutingSubdomainTokensOutput;
}

/** DNS TXT value for the region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
export interface TeamsDirectRoutingSubdomainTokensOutput {
  /** DNS TXT value for the first region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
  region1Token: string;
  /** DNS TXT value for the second region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
  region2Token: string;
}

/** Account details specific to Teams Phone Mobile. */
export interface TeamsPhoneMobileAccountDetailsOutput {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The count of telephone numbers associated with this account that have this backend service enabled. */
  readonly numberCount?: number;
}

/** Account details specific to Zoom Phone Cloud Peering. */
export interface ZoomPhoneCloudPeeringAccountDetailsOutput {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The count of telephone numbers associated with this account that have this backend service enabled. */
  readonly numberCount?: number;
}

/** Account details specific to Azure Operator Call Protection. */
export interface AzureOperatorCallProtectionAccountDetailsOutput {
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The count of telephone numbers associated with this account that have this backend service enabled. */
  readonly numberCount?: number;
}

/** List of telephone numbers to be uploaded to an account via a PUT request. */
export interface BatchNumbersOutput {
  /** The list of numbers to upload. At most 100 can be uploaded in one request. */
  numbers: Array<NumberResourceOutput>;
}

/** The Teams telephone number upload usages for this account. */
export interface TeamsCapabilityPlansOutput {
  /** A list of telephone number upload usages. */
  readonly capabilityPlans: Array<TeamsCapabilityPlanOutput>;
}

/** A teams capability plan for a given usage. */
export interface TeamsCapabilityPlanOutput {
  /** The capability plan name. */
  readonly name: string;
  /** The offer types available. */
  readonly offerTypes?: string[];
  /** The telephone number usage. */
  readonly usage: string;
  /** Mandatory capabilities for telephone numbers. */
  readonly mandatoryCapabilities?: string[];
  /** Choosable capabilities for telephone numbers. */
  readonly choosableCapabilities?: string[];
  /** Boolean indicating if Toll free is supported. */
  readonly supportsTollFree: boolean;
}

/** The Teams capabilities available for numbers with Operator Connect or Teams Phone Mobile services enabled. */
export interface TeamsAvailableCapabilitiesOutput {
  /** The available capabilities for the numbers specified with Operator Connect or Teams Phone Mobile services enabled. */
  readonly availableCapabilities: string[];
}

/** A civic address available for Teams Operator Connect or Teams Phone Mobile users. */
export interface TeamsCivicAddressResourceOutput {
  /** The ID of the civic address. */
  readonly id: string;
  /** The country of the civic address. */
  readonly country?: string;
  /** The house number of the civic address. */
  readonly houseNumber?: string;
  /** The house number suffix of the civic address. */
  readonly houseNumberSuffix?: string;
  /** The pre directional of the civic address. */
  readonly preDirectional?: string;
  /** The street name of the civic address. */
  readonly streetName?: string;
  /** The street suffix of the civic address. */
  readonly streetSuffix?: string;
  /** The post directional of the civic address. */
  readonly postDirectional?: string;
  /** The state or province of the civic address. */
  readonly stateOrProvince?: string;
  /** The county or district of the civic address. */
  readonly countyOrDistrict?: string;
  /** The city or town of the civic address. */
  readonly cityOrTown?: string;
  /** The city or town alias of the civic address. */
  readonly cityOrTownAlias?: string;
  /** The postal or zip code of the civic address. */
  readonly postalOrZipCode?: string;
  /** The description of the civic address. */
  readonly description?: string;
  /** The company name of the civic address. */
  readonly companyName?: string;
  /** The company ID of the civic address. */
  readonly companyId?: string;
  /** The default location ID of the civic address. */
  readonly defaultLocationId: string;
  /**
   * The validation status of the civic address.
   *
   * Possible values: "notValidated", "validated"
   */
  readonly validationStatus?: ValidationStatusOutput;
  /** The customer tenant ID of the civic address. */
  readonly tenantId?: string;
  /** The partner ID of the civic address. */
  readonly partnerId?: string;
  /** The list of locations associated with the civic address. */
  readonly locations?: Array<LocationOutput>;
  /** The latitude of the civic address. */
  readonly latitude?: string;
  /** The longitude of the civic address. */
  readonly longitude?: string;
}

/** A location used by Team Operator Connect or Teams Phone Mobile telephone numbers. */
export interface LocationOutput {
  /** The ID of the location. */
  readonly id: string;
  /** The civic address ID of the location. */
  readonly civicAddressId: string;
  /** The description of the location. */
  readonly description?: string;
  /** The additional information of the location. */
  readonly additionalInfo?: string;
  /** Flag indicating whether the location is default or not. */
  readonly isDefault?: boolean;
  /** The elin (Emergency Location Identification Number) of the location. */
  readonly elin?: string;
}

/** The configuration for a telephone number provisioned in ACG. */
export interface RequestForInformationResourceOutput {
  /**
   * The status of the provisioning action associated with this resource.
   *
   * Possible values: "pending", "synced", "failed"
   */
  readonly serviceProvisioningStatus?: ServiceProvisioningStatusOutput;
  /** Any errors pertaining to the provisioning of this resource. */
  readonly serviceProvisioningErrors?: Array<ErrorModel>;
  /** The ID of the Request for Information. */
  readonly id?: string;
  /** The Teams tenant ID which generated this Request for Information. */
  readonly tenantId: string;
  /** The name of the account associated with this Request for Information. */
  readonly accountName?: string;
  /** Will always be 'teams'. */
  readonly productContext?: string;
  /** The operator ID of the operator consent. */
  readonly operatorId?: string;
  /**
   * The status of the operator consent.
   *
   * Possible values: "active", "suspended", "removed"
   */
  readonly status?: TeamsConsentStatusOutput;
  /** The time (ISO8601 format) when the operator consent is created. */
  readonly consentedOn?: string;
  /** The time (ISO8601 format) when the operator consent is last modified. */
  readonly lastModifiedOn?: string;
  /** The list of consented countries. */
  readonly consentedCountries?: string[];
  /** The list of tenant contacts. */
  readonly contacts?: Array<ContactDetailsOutput>;
  /** The customer relationship of the operator consent. */
  customerRelationship?: CustomerRelationshipOutput;
}

/** Contact details for an individual. */
export interface ContactDetailsOutput {
  /** The full name of the contact detail. */
  readonly fullName: string;
  /** The email of the contact detail. */
  readonly email: string;
  /** The telephone number of the contact detail. */
  readonly telephoneNumber?: string;
  /** The company name of the contact detail. */
  readonly companyName?: string;
  /** The company size of the contact detail. */
  readonly companySize?: string;
}

/** Details of a customer relationship. */
export interface CustomerRelationshipOutput {
  /** The status of the customer relationship. */
  status?: string;
  /** The time (ISO8601 format) when the customer relationship is last modified. */
  readonly lastModifiedOn?: string;
  /** The comment of the customer relationship. */
  comment?: string;
}

/** Paged collection of NumberResource items */
export type PagedNumberListOutput = Paged<NumberResourceOutput>;
/** Alias for ServiceProvisioningStatusOutput */
export type ServiceProvisioningStatusOutput = string;
/** Alias for TelephoneNumberAssignmentStatusOutput */
export type TelephoneNumberAssignmentStatusOutput = string;
/** Paged collection of AccountResource items */
export type PagedAccountResourceOutput = Paged<AccountResourceOutput>;
/** Alias for TeamsDirectRoutingSubdomainProvisioningStatusOutput */
export type TeamsDirectRoutingSubdomainProvisioningStatusOutput = string;
/** Alias for RepeatabilityResultOutput */
export type RepeatabilityResultOutput = "accepted" | "rejected";
/** Paged collection of NumberResource items */
export type PagedNumberResourceOutput = Paged<NumberResourceOutput>;
/** Paged collection of TeamsCivicAddressResource items */
export type PagedTeamsCivicAddressResourceOutput =
  Paged<TeamsCivicAddressResourceOutput>;
/** Alias for ValidationStatusOutput */
export type ValidationStatusOutput = string;
/** Paged collection of RequestForInformationResource items */
export type PagedRequestForInformationResourceOutput =
  Paged<RequestForInformationResourceOutput>;
/** Alias for TeamsConsentStatusOutput */
export type TeamsConsentStatusOutput = string;
