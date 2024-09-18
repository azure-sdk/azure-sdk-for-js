// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The configuration for a telephone number provisioned in Azure Communications Gateway. */
export interface NumberResource {
  /** Telephone number in E.164 format. */
  telephoneNumber: string;
  /** Name of the account. Can only contain letters, numbers, underscores and dashes, and is case-sensitive. Can be up to 100 characters in length. */
  accountName: string;
  /** Configuration of the individual backend services for this number. */
  serviceDetails: NumberServiceDetails;
  /** Configuration for this number. */
  configuration?: NumberConfiguration;
}

/** Configuration of backend services for a telephone number. */
export interface NumberServiceDetails {
  /** Details for the Teams Operator Connect service on this Number. */
  teamsOperatorConnect?: TeamsOperatorConnectNumberDetails;
  /** Details for the Teams Direct Routing service on this Number. */
  teamsDirectRouting?: TeamsDirectRoutingNumberDetails;
  /** Details for the Teams Phone Mobile service on this Number. */
  teamsPhoneMobile?: TeamsPhoneMobileNumberDetails;
  /** Details for the Zoom Phone Cloud Peering service on this Number. */
  zoomPhoneCloudPeering?: ZoomPhoneCloudPeeringNumberDetails;
  /** Details for the Azure Operator Call Protection service on this Number. */
  azureOperatorCallProtection?: AzureOperatorCallProtectionNumberDetails;
}

/** Details for the Teams Operator Connect service on this Number. */
export interface TeamsOperatorConnectNumberDetails {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
  /**
   * The assignment status of this Number.
   *
   * Possible values: "assigned", "unassigned"
   */
  assignmentStatus?: TelephoneNumberAssignmentStatus;
  /** The configuration for Teams Operator Connect on this number. */
  configuration?: TeamsOperatorConnectNumberConfig;
}

/** Telephone number configuration for Teams Operator Connect telephone numbers. */
export interface TeamsOperatorConnectNumberConfig {
  /** The usage for this telephone number. */
  usage: string;
  /** The choosable capabilities for this telephone number. */
  choosableCapabilities: string[];
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
export interface TeamsDirectRoutingNumberDetails {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Details for the Teams Phone Mobile service on this Number. */
export interface TeamsPhoneMobileNumberDetails {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
  /**
   * The assignment status of this Number.
   *
   * Possible values: "assigned", "unassigned"
   */
  assignmentStatus?: TelephoneNumberAssignmentStatus;
  /** The configuration for Teams Phone Mobile on this number. */
  configuration?: TeamsPhoneMobileNumberConfig;
}

/** Telephone number configuration for Teams Phone Mobile telephone numbers. */
export interface TeamsPhoneMobileNumberConfig {
  /** The usage for this telephone number. */
  usage: string;
  /** The choosable capabilities for this telephone number. */
  choosableCapabilities: string[];
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
export interface ZoomPhoneCloudPeeringNumberDetails {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Details for the Azure Operator Call Protection service on this Number. */
export interface AzureOperatorCallProtectionNumberDetails {
  /** Boolean indicating if the service is enabled on this Number. */
  enabled: boolean;
}

/** Configuration for this number. */
export interface NumberConfiguration {
  /** Contents of the custom SIP header to use with this number. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. The name of the custom header is set as part of the provisioning platform configuration on Azure Communications Gateway. */
  customSipHeader?: string;
}

/** An account represents a group of numbers, typically associated with an enterprise. */
export interface AccountResource {
  /** Name of the account. */
  name: string;
  /** A user defined identifier used for correlating with external systems. */
  correlationId?: string;
  /** The details of the account. */
  serviceDetails?: AccountServiceDetails;
}

/** Details of the backend services associated with this Account. */
export interface AccountServiceDetails {
  /** The Microsoft Teams Tenant ID of the Account. This can only be updated if no Operator Connect or Teams Phone Mobile numbers are configured in this account. */
  teamsTenantId?: string;
  /** Details for the Teams Operator Connect service on this Account. */
  teamsOperatorConnect?: TeamsOperatorConnectAccountDetails;
  /** Details for the Teams Direct Routing service on this Account. */
  teamsDirectRouting?: TeamsDirectRoutingAccountDetails;
  /** Details for the Teams Phone Mobile service on this Account. */
  teamsPhoneMobile?: TeamsPhoneMobileAccountDetails;
  /** Details for the Zoom Phone Cloud Peering service on this Account. */
  zoomPhoneCloudPeering?: ZoomPhoneCloudPeeringAccountDetails;
  /** Details for the Azure Operator Call Protection service on this Account. */
  azureOperatorCallProtection?: AzureOperatorCallProtectionAccountDetails;
}

/** Account details specific to Teams Operator Connect on this Account. */
export interface TeamsOperatorConnectAccountDetails {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
}

/** Account details specific to Teams Direct Routing on this Account. */
export interface TeamsDirectRoutingAccountDetails {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
  /** The configuration for Teams Direct Routing on this account. */
  configuration?: TeamsDirectRoutingAccountConfig;
}

/** Configuration specific to Teams Direct Routing. */
export interface TeamsDirectRoutingAccountConfig {
  /** Enables/disables caller ID screening for the account. Caller ID screening is enabled by default. */
  callScreening: boolean;
  /** Enterprise-specific domain name label. Can only contain letters, numbers, underscores and dashes. Can be up to 10 characters in length. */
  subdomain: string;
  /** DNS TXT value for the Direct Routing regions, as provided by the customer from their Microsoft 365 Admin Center. */
  subdomainTokens: TeamsDirectRoutingSubdomainTokens;
}

/** DNS TXT value for the region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
export interface TeamsDirectRoutingSubdomainTokens {
  /** DNS TXT value for the first region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
  region1Token: string;
  /** DNS TXT value for the second region, as provided by the enterprise admin from their Microsoft 365 Admin Center. Can only contain letters, numbers, underscores and dashes. Can be up to 100 characters in length. */
  region2Token: string;
}

/** Account details specific to Teams Phone Mobile. */
export interface TeamsPhoneMobileAccountDetails {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
}

/** Account details specific to Zoom Phone Cloud Peering. */
export interface ZoomPhoneCloudPeeringAccountDetails {
  /** Boolean indicating if data is being provisioned through the backend service. */
  syncEnabled: boolean;
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
}

/** Account details specific to Azure Operator Call Protection. */
export interface AzureOperatorCallProtectionAccountDetails {
  /** Boolean indicating if the service is enabled on this Account. */
  enabled: boolean;
}

/** List of telephone numbers to be uploaded to an account via a PUT request. */
export interface BatchNumbers {
  /** The list of numbers to upload. At most 100 can be uploaded in one request. */
  numbers: Array<NumberResource>;
}

/** A list of telephone numbers to delete. */
export interface BatchNumbersDelete {
  /** The list of number to delete. At most 100 can be deleted in one request. */
  numbers: Array<NumberIdentifier>;
}

/** An identifier, used to identify a Number resource. */
export interface NumberIdentifier {
  /** Telephone number in E.164 format. */
  telephoneNumber: string;
}

/** A list identifiers for a Number resource. */
export interface NumberIdentifiers {
  /** Array containing a list of identifiers for Number resources. */
  numbers: Array<NumberIdentifier>;
}

/** The configuration for a telephone number provisioned in ACG. */
export interface RequestForInformationResource {
  /** The customer relationship of the operator consent. */
  customerRelationship?: CustomerRelationship;
}

/** Contact details for an individual. */
export interface ContactDetails {}

/** Details of a customer relationship. */
export interface CustomerRelationship {
  /** The status of the customer relationship. */
  status?: string;
  /** The comment of the customer relationship. */
  comment?: string;
}

/** Alias for ServiceProvisioningStatus */
export type ServiceProvisioningStatus = string;
/** Alias for TelephoneNumberAssignmentStatus */
export type TelephoneNumberAssignmentStatus = string;
/** Alias for TeamsDirectRoutingSubdomainProvisioningStatus */
export type TeamsDirectRoutingSubdomainProvisioningStatus = string;
/** Alias for TeamsConsentStatus */
export type TeamsConsentStatus = string;
