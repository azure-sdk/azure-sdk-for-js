// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResource extends ProxyResource {
  /** Report property. */
  properties: ReportProperties;
}

/** Create Report's properties. */
export interface ReportProperties {
  /** Report collection trigger time. */
  triggerTime: Date | string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone: string;
  /** List of resource data. */
  resources: Array<ResourceMetadata>;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
}

/** Single resource Id's metadata. */
export interface ResourceMetadata {
  /** Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  resourceId: string;
  /** Resource type. e.g. "Microsoft.Compute/virtualMachines" */
  resourceType?: string;
  /** Resource kind. */
  resourceKind?: string;
  /**
   * Resource Origin.
   *
   * Possible values: "Azure", "AWS", "GCP"
   */
  resourceOrigin?: ResourceOrigin;
  /** Account Id. For example - the AWS account id. */
  accountId?: string;
}

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatus {}

/** The overview of the compliance result for one report. */
export interface OverviewStatus {}

/** The information of 'bring your own storage' account binding to the report */
export interface StorageInfo {
  /** The subscription id which 'bring your own storage' account belongs to */
  subscriptionId?: string;
  /** The resourceGroup which 'bring your own storage' account belongs to */
  resourceGroup?: string;
  /** 'bring your own storage' account name */
  accountName?: string;
  /** The region of 'bring your own storage' account */
  location?: string;
}

/** A class represent the certification record synchronized from app compliance. */
export interface CertSyncRecord {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** Indicates the status of certification process. */
  certificationStatus?: string;
  /** Indicates the status of compliance process. */
  ingestionStatus?: string;
  /** The control records list to be synchronized. */
  controls?: Array<ControlSyncRecord>;
}

/** A class represent the control record synchronized from app compliance. */
export interface ControlSyncRecord {
  /** The Id of the control. e.g. "Operational_Security_10" */
  controlId?: string;
  /** Control status synchronized from app compliance. */
  controlStatus?: string;
}

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /**
   * The type of identity that created the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date | string;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /**
   * The type of identity that last modified the resource.
   *
   * Possible values: "User", "Application", "ManagedIdentity", "Key"
   */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date | string;
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

/** The resource model definition containing the full set of allowed properties for a resource. Except properties bag, there cannot be a top level property outside of this set. */
export interface ResourceModelWithAllowedPropertySet extends TrackedResource {
  /**
   * The fully qualified resource ID of the resource that manages this resource. Indicates if this resource is managed by another Azure resource.
   * If this is present, complete mode deployment will not delete the resource if it is removed from the template since it is managed by another resource.
   */
  managedBy?: string;
  /**
   * Metadata used by portal/tooling/etc to render different UX experiences for resources of the same type; e.g. ApiApps are a kind of Microsoft.Web/sites type.
   * If supported, the resource provider must validate and persist this value.
   */
  kind?: string;
  /**
   * The etag field is *not* required. If it is provided in the response body, it must also be provided as a header per the normal etag convention.
   * Entity tags are used for comparing two or more entities from the same requested resource. HTTP/1.1 uses entity tags in the etag (section 14.19),
   * If-Match (section 14.24), If-None-Match (section 14.26), and If-Range (section 14.27) header fields.
   */
  eTag?: string;
  identity?: Identity;
  sku?: Sku;
  plan?: Plan;
}

/** Identity for the resource. */
export interface Identity {
  /** The identity type. */
  type?: ResourceIdentityType;
}

/** The resource model definition representing SKU */
export interface Sku {
  /** The name of the SKU. Ex - P3. It is typically a letter+number code */
  name: string;
  /** This field is required to be implemented by the Resource Provider if the service has more than one tier, but is not required on a PUT. */
  tier?: SkuTier;
  /** The SKU size. When the name field is the combination of tier and some other value, this would be the standalone code. */
  size?: string;
  /** If the service has different generations of hardware, for the same SKU, then that can be captured here. */
  family?: string;
  /** If the SKU supports scale out/in then the capacity integer should be included. If scale out/in is not possible for the resource this may be omitted. */
  capacity?: number;
}

/** Plan for the resource. */
export interface Plan {
  /** A user defined name of the 3rd Party Artifact that is being procured. */
  name: string;
  /** The publisher of the 3rd Party Artifact that is being bought. E.g. NewRelic */
  publisher: string;
  /** The 3rd Party artifact that is being procured. E.g. NewRelic. Product maps to the OfferID specified for the artifact at the time of Data Market onboarding. */
  product: string;
  /** A publisher provided promotion code as provisioned in Data Market for the said product/artifact. */
  promotionCode?: string;
  /** The version of the desired product/artifact. */
  version?: string;
}

/** The base extension resource. */
export interface ExtensionResource extends Resource {}

/** The resource model definition for an Azure Resource Manager resource with an etag. */
export interface AzureEntityResource extends Resource {}

/** A private link resource. */
export interface PrivateLinkResource extends Resource {
  /** Resource properties. */
  properties?: PrivateLinkResourceProperties;
}

/** Properties of a private link resource. */
export interface PrivateLinkResourceProperties {
  /** The private link resource private link DNS zone name. */
  requiredZoneNames?: string[];
}

/** The private endpoint connection resource */
export interface PrivateEndpointConnection extends Resource {
  /** The private endpoint connection properties */
  properties?: PrivateEndpointConnectionProperties;
}

/** Properties of the private endpoint connection. */
export interface PrivateEndpointConnectionProperties {
  /** The private endpoint resource. */
  privateEndpoint?: PrivateEndpoint;
  /** A collection of information about the state of the connection between service consumer and provider. */
  privateLinkServiceConnectionState: PrivateLinkServiceConnectionState;
}

/** The Private Endpoint resource. */
export interface PrivateEndpoint {}

/** A collection of information about the state of the connection between service consumer and provider. */
export interface PrivateLinkServiceConnectionState {
  /**
   * Indicates whether the connection has been Approved/Rejected/Removed by the owner of the service.
   *
   * Possible values: "Pending", "Approved", "Rejected"
   */
  status?: PrivateEndpointServiceConnectionStatus;
  /** The reason for approval/rejection of the connection. */
  description?: string;
  /** A message indicating if changes on the service provider require any updates on the consumer. */
  actionsRequired?: string;
}

/** A class represent an AppComplianceAutomation webhook resource. */
export interface WebhookResource extends ProxyResource {
  /** Webhook property. */
  properties: WebhookProperties;
}

/** Webhook properties. */
export interface WebhookProperties {
  /**
   * Webhook status.
   *
   * Possible values: "Enabled", "Disabled"
   */
  status?: WebhookStatus;
  /**
   * whether to send notification under any event.
   *
   * Possible values: "true", "false"
   */
  sendAllEvents?: SendAllEvents;
  /** under which event notification should be sent. */
  events?: NotificationEvent[];
  /** webhook payload url */
  payloadUrl?: string;
  /**
   * content type
   *
   * Possible values: "application/json"
   */
  contentType?: ContentType;
  /** webhook secret token. If not set, this field value is null; otherwise, please set a string value. */
  webhookKey?: string;
  /**
   * whether to update webhookKey.
   *
   * Possible values: "true", "false"
   */
  updateWebhookKey?: UpdateWebhookKey;
  /**
   * whether to enable ssl verification
   *
   * Possible values: "true", "false"
   */
  enableSslVerification?: EnableSslVerification;
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResource extends ProxyResource {
  /** Snapshot's property. */
  properties?: SnapshotProperties;
}

/** Snapshot's properties. */
export interface SnapshotProperties {}

/** A class represent the compliance result. */
export interface ComplianceResult {}

/** A class represent the compliance category. */
export interface Category {}

/** A class represent the control family. */
export interface ControlFamily {}

/** A class represent the control. */
export interface Control {}

/** A class represent the customer responsibility. */
export interface Responsibility {
  /** The count of all failed resources. */
  failedResourceCount?: number;
  /** The count of all resources. */
  totalResourceCount?: number;
  /** List of evidence file url. */
  evidenceFiles?: string[];
}

/** A class represent the resource. */
export interface ResponsibilityResource {
  /** List of recommendation id. */
  recommendationIds?: string[];
}

/** A class represent the recommendation. */
export interface Recommendation {}

/** A class represent the recommendation solution. */
export interface RecommendationSolution {}

/** A class represent an AppComplianceAutomation scoping configuration resource. */
export interface ScopingConfigurationResource extends ProxyResource {
  /** ScopingConfiguration property. */
  properties: ScopingConfigurationProperties;
}

/** ScopingConfiguration's properties. */
export interface ScopingConfigurationProperties {
  /** List of scoping question answers. */
  answers?: Array<ScopingAnswer>;
}

/** Scoping answer. */
export interface ScopingAnswer {
  /** Question id. */
  questionId: string;
  /** Question answer value list. */
  answers: string[];
}

/** A class represent an AppComplianceAutomation evidence resource. */
export interface EvidenceResource extends ProxyResource {
  /** Evidence property. */
  properties: EvidenceProperties;
}

/** Evidence's properties. */
export interface EvidenceProperties {
  /**
   * Evidence type.
   *
   * Possible values: "File", "AutoCollectedEvidence", "Data"
   */
  evidenceType?: EvidenceType;
  /** The path of the file in storage. */
  filePath: string;
  /** Extra data considered as evidence. */
  extraData?: string;
  /** Control id. */
  controlId?: string;
  /** Responsibility id. */
  responsibilityId?: string;
}

/** A class represent a AppComplianceAutomation report resource update properties. */
export interface ReportResourcePatch {
  /** Report property. */
  properties?: ReportPatchProperties;
}

/** Patch Report's properties. */
export interface ReportPatchProperties {
  /** Report collection trigger time. */
  triggerTime?: Date | string;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone?: string;
  /** List of resource data. */
  resources?: Array<ResourceMetadata>;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
}

/** Synchronize certification record request. */
export interface SyncCertRecordRequest {
  /** certification record to be synchronized. */
  certRecord: CertSyncRecord;
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

/** A class represent a AppComplianceAutomation webhook resource update properties. */
export interface WebhookResourcePatch {
  /** Webhook property. */
  properties?: WebhookProperties;
}

/** Snapshot's download request. */
export interface SnapshotDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /**
   * Indicates the download type.
   *
   * Possible values: "ComplianceReport", "CompliancePdfReport", "ComplianceDetailedPdfReport", "ResourceList"
   */
  downloadType: DownloadType;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

/** Evidence file's download request. */
export interface EvidenceFileDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

/** Get collection count's request object. */
export interface GetCollectionCountRequest {
  /** The resource type. */
  type?: string;
}

/** Get overview status request object. */
export interface GetOverviewStatusRequest {
  /** The resource type. */
  type?: string;
}

/** Parameters for onboard operation */
export interface OnboardRequest {
  /** List of subscription ids to be onboarded */
  subscriptionIds: string[];
}

/** Trigger evaluation request. */
export interface TriggerEvaluationRequest {
  /** List of resource ids to be evaluated */
  resourceIds: string[];
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsRequest {
  /** List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user. */
  subscriptionIds?: string[];
}

/** Alias for ResourceOrigin */
export type ResourceOrigin = string;
/** Alias for ReportStatus */
export type ReportStatus = string;
/** Alias for ProvisioningState */
export type ProvisioningState = string;
/** Alias for CreatedByType */
export type CreatedByType = string;
/** Alias for ResourceIdentityType */
export type ResourceIdentityType = "SystemAssigned";
/** Alias for SkuTier */
export type SkuTier = "Free" | "Basic" | "Standard" | "Premium";
/** Alias for PrivateEndpointServiceConnectionStatus */
export type PrivateEndpointServiceConnectionStatus = string;
/** Alias for PrivateEndpointConnectionProvisioningState */
export type PrivateEndpointConnectionProvisioningState = string;
/** Alias for WebhookStatus */
export type WebhookStatus = string;
/** Alias for SendAllEvents */
export type SendAllEvents = string;
/** Alias for NotificationEvent */
export type NotificationEvent = string;
/** Alias for ContentType */
export type ContentType = string;
/** Alias for UpdateWebhookKey */
export type UpdateWebhookKey = string;
/** Alias for WebhookKeyEnabled */
export type WebhookKeyEnabled = string;
/** Alias for EnableSslVerification */
export type EnableSslVerification = string;
/** Alias for DeliveryStatus */
export type DeliveryStatus = string;
/** Alias for CategoryStatus */
export type CategoryStatus = string;
/** Alias for ControlFamilyStatus */
export type ControlFamilyStatus = string;
/** Alias for ControlStatus */
export type ControlStatus = string;
/** Alias for ResponsibilityType */
export type ResponsibilityType = string;
/** Alias for ResponsibilitySeverity */
export type ResponsibilitySeverity = string;
/** Alias for ResponsibilityStatus */
export type ResponsibilityStatus = string;
/** Alias for ResponsibilityEnvironment */
export type ResponsibilityEnvironment = string;
/** Alias for ResourceStatus */
export type ResourceStatus = string;
/** Alias for IsRecommendSolution */
export type IsRecommendSolution = string;
/** Alias for EvidenceType */
export type EvidenceType = string;
/** Alias for DownloadType */
export type DownloadType = string;
