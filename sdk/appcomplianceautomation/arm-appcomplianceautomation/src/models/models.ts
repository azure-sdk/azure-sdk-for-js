// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  CheckNameAvailabilityRequest as CheckNameAvailabilityRequestRest,
  GetCollectionCountRequest as GetCollectionCountRequestRest,
  GetOverviewStatusRequest as GetOverviewStatusRequestRest,
  OnboardRequest as OnboardRequestRest,
  TriggerEvaluationRequest as TriggerEvaluationRequestRest,
  ListInUseStorageAccountsRequest as ListInUseStorageAccountsRequestRest,
  StorageInfo as StorageInfoRest,
  EvidenceResource as EvidenceResourceRest,
  EvidenceProperties as EvidencePropertiesRest,
  EvidenceFileDownloadRequest as EvidenceFileDownloadRequestRest,
  ScopingConfigurationResource as ScopingConfigurationResourceRest,
  ScopingConfigurationProperties as ScopingConfigurationPropertiesRest,
  ScopingAnswer as ScopingAnswerRest,
  ReportProperties as ReportPropertiesRest,
  ResourceMetadata as ResourceMetadataRest,
  CertSyncRecord as CertSyncRecordRest,
  ControlSyncRecord as ControlSyncRecordRest,
  SnapshotDownloadRequest as SnapshotDownloadRequestRest,
  WebhookResource as WebhookResourceRest,
  WebhookProperties as WebhookPropertiesRest,
  WebhookResourcePatch as WebhookResourcePatchRest,
  ReportResource as ReportResourceRest,
  ReportResourcePatch as ReportResourcePatchRest,
  ReportPatchProperties as ReportPatchPropertiesRest,
  SyncCertRecordRequest as SyncCertRecordRequestRest,
} from "../rest/index.js";

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

export function checkNameAvailabilityRequestSerializer(
  item: CheckNameAvailabilityRequest,
): CheckNameAvailabilityRequestRest {
  return {
    name: item["name"],
    type: item["type"],
  };
}

/** The check availability result. */
export interface CheckNameAvailabilityResponse {
  /** Indicates if the resource name is available. */
  nameAvailable?: boolean;
  /** The reason why the given name is not available. */
  reason?: CheckNameAvailabilityReason;
  /** Detailed reason why the given name is not available. */
  message?: string;
}

/** Known values of {@link CheckNameAvailabilityReason} that the service accepts. */
export enum KnownCheckNameAvailabilityReason {
  /** Invalid */
  Invalid = "Invalid",
  /** AlreadyExists */
  AlreadyExists = "AlreadyExists",
}

/**
 * Possible reasons for a name not being available. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid** \
 * **AlreadyExists**
 */
export type CheckNameAvailabilityReason = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

/** The error detail. */
export interface ErrorDetail {
  /** The error code. */
  readonly code?: string;
  /** The error message. */
  readonly message?: string;
  /** The error target. */
  readonly target?: string;
  /** The error details. */
  readonly details?: ErrorDetail[];
  /** The error additional info. */
  readonly additionalInfo?: ErrorAdditionalInfo[];
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

/** Get collection count's request object. */
export interface GetCollectionCountRequest {
  /** The resource type. */
  type?: string;
}

export function getCollectionCountRequestSerializer(
  item: GetCollectionCountRequest,
): GetCollectionCountRequestRest {
  return {
    type: item["type"],
  };
}

/** The get collection count response. */
export interface GetCollectionCountResponse {
  /** The count of the specified resource. */
  count?: number;
}

/** Get overview status request object. */
export interface GetOverviewStatusRequest {
  /** The resource type. */
  type?: string;
}

export function getOverviewStatusRequestSerializer(
  item: GetOverviewStatusRequest,
): GetOverviewStatusRequestRest {
  return {
    type: item["type"],
  };
}

/** The get overview status response. */
export interface GetOverviewStatusResponse {
  /** List of different status items. */
  statusList?: StatusItem[];
}

/** Single status. */
export interface StatusItem {
  /** Status name - e.g. "Active", "Failed". */
  statusName?: string;
  /** Status value. e.g. "100", or "100%". */
  statusValue?: string;
}

/** Parameters for onboard operation */
export interface OnboardRequest {
  /** List of subscription ids to be onboarded */
  subscriptionIds: string[];
}

export function onboardRequestSerializer(
  item: OnboardRequest,
): OnboardRequestRest {
  return {
    subscriptionIds: item["subscriptionIds"],
  };
}

/** Success. The response indicates given subscriptions has been onboarded. */
export interface OnboardResponse {
  /** List of subscription ids that are onboarded */
  subscriptionIds?: string[];
}

/** Trigger evaluation request. */
export interface TriggerEvaluationRequest {
  /** List of resource ids to be evaluated */
  resourceIds: string[];
}

export function triggerEvaluationRequestSerializer(
  item: TriggerEvaluationRequest,
): TriggerEvaluationRequestRest {
  return {
    resourceIds: item["resourceIds"],
  };
}

/** Trigger evaluation response. */
export interface TriggerEvaluationResponse {
  /** trigger evaluation property. */
  properties?: TriggerEvaluationProperty;
}

/** Trigger evaluation response. */
export interface TriggerEvaluationProperty {
  /** The time when the evaluation is triggered. */
  readonly triggerTime?: Date;
  /** The time when the evaluation is end. */
  readonly evaluationEndTime?: Date;
  /** List of resource ids to be evaluated */
  resourceIds?: string[];
  /** List of quick assessments */
  quickAssessments?: QuickAssessment[];
}

/** A class represent the quick assessment. */
export interface QuickAssessment {
  /** Resource id. */
  readonly resourceId?: string;
  /** Responsibility id. */
  readonly responsibilityId?: string;
  /** The timestamp of resource creation (UTC). */
  readonly timestamp?: Date;
  /** Quick assessment status. */
  readonly resourceStatus?: ResourceStatus;
  /** Quick assessment display name. */
  readonly displayName?: string;
  /** Quick assessment display name. */
  readonly description?: string;
  /** Link to remediation steps for this quick assessment. */
  readonly remediationLink?: string;
}

/** Known values of {@link ResourceStatus} that the service accepts. */
export enum KnownResourceStatus {
  /** Healthy */
  Healthy = "Healthy",
  /** Unhealthy */
  Unhealthy = "Unhealthy",
}

/**
 * Indicates the resource status. \
 * {@link KnownResourceStatus} can be used interchangeably with ResourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy** \
 * **Unhealthy**
 */
export type ResourceStatus = string;

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsRequest {
  /** List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user. */
  subscriptionIds?: string[];
}

export function listInUseStorageAccountsRequestSerializer(
  item: ListInUseStorageAccountsRequest,
): ListInUseStorageAccountsRequestRest {
  return {
    subscriptionIds: item["subscriptionIds"],
  };
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsResponse {
  /** The storage account list which in use in related reports. */
  storageAccountList?: StorageInfo[];
}

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

export function storageInfoSerializer(item: StorageInfo): StorageInfoRest {
  return {
    subscriptionId: item["subscriptionId"],
    resourceGroup: item["resourceGroup"],
    accountName: item["accountName"],
    location: item["location"],
  };
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Details of a REST API operation, returned from the Resource Provider Operations API */
export interface Operation {
  /** The name of the operation, as per Resource-Based Access Control (RBAC). Examples: "Microsoft.Compute/virtualMachines/write", "Microsoft.Compute/virtualMachines/capture/action" */
  readonly name?: string;
  /** Whether the operation applies to data-plane. This is "true" for data-plane operations and "false" for Azure Resource Manager/control-plane operations. */
  readonly isDataAction?: boolean;
  /** Localized display information for this particular operation. */
  display?: OperationDisplay;
  /** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
  readonly origin?: Origin;
  /** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
  actionType?: ActionType;
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  description?: string;
}

/** Known values of {@link Origin} that the service accepts. */
export enum KnownOrigin {
  /** user */
  user = "user",
  /** system */
  system = "system",
  /** user,system */
  "user,system" = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user** \
 * **system** \
 * **user,system**
 */
export type Origin = string;

/** Known values of {@link ActionType} that the service accepts. */
export enum KnownActionType {
  /** Internal */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**
 */
export type ActionType = string;

/** Common fields that are returned in the response for all Azure Resource Manager resources */
export interface Resource {
  /** Fully qualified resource ID for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/{resourceProviderNamespace}/{resourceType}/{resourceName} */
  readonly id?: string;
  /** The name of the resource */
  readonly name?: string;
  /** The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts" */
  readonly type?: string;
  /** Azure Resource Manager metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemData;
}

export function resourceSerializer(item: Resource) {
  return item as any;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {
  /** The identity that created the resource. */
  createdBy?: string;
  /** The type of identity that created the resource. */
  createdByType?: CreatedByType;
  /** The timestamp of resource creation (UTC). */
  createdAt?: Date;
  /** The identity that last modified the resource. */
  lastModifiedBy?: string;
  /** The type of identity that last modified the resource. */
  lastModifiedByType?: CreatedByType;
  /** The timestamp of resource last modification (UTC) */
  lastModifiedAt?: Date;
}

/** Known values of {@link CreatedByType} that the service accepts. */
export enum KnownCreatedByType {
  /** User */
  User = "User",
  /** Application */
  Application = "Application",
  /** ManagedIdentity */
  ManagedIdentity = "ManagedIdentity",
  /** Key */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnownCreatedByType} can be used interchangeably with CreatedByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User** \
 * **Application** \
 * **ManagedIdentity** \
 * **Key**
 */
export type CreatedByType = string;

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource) {
  return item as any;
}

/** A class represent an AppComplianceAutomation evidence resource. */
export interface EvidenceResource extends ProxyResource {
  /** Evidence property. */
  properties: EvidenceProperties;
}

export function evidenceResourceSerializer(
  item: EvidenceResource,
): EvidenceResourceRest {
  return {
    properties: evidencePropertiesSerializer(item.properties),
  };
}

/** Evidence's properties. */
export interface EvidenceProperties {
  /** Evidence type. */
  evidenceType?: EvidenceType;
  /** The path of the file in storage. */
  filePath: string;
  /** Extra data considered as evidence. */
  extraData?: string;
  /** Control id. */
  controlId?: string;
  /** Responsibility id. */
  responsibilityId?: string;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningState;
}

export function evidencePropertiesSerializer(
  item: EvidenceProperties,
): EvidencePropertiesRest {
  return {
    evidenceType: item["evidenceType"],
    filePath: item["filePath"],
    extraData: item["extraData"],
    controlId: item["controlId"],
    responsibilityId: item["responsibilityId"],
  };
}

/** Known values of {@link EvidenceType} that the service accepts. */
export enum KnownEvidenceType {
  /** File */
  File = "File",
  /** AutoCollectedEvidence */
  AutoCollectedEvidence = "AutoCollectedEvidence",
  /** Data */
  Data = "Data",
}

/**
 * Evidence type \
 * {@link KnownEvidenceType} can be used interchangeably with EvidenceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **File** \
 * **AutoCollectedEvidence** \
 * **Data**
 */
export type EvidenceType = string;

/** Known values of {@link ProvisioningState} that the service accepts. */
export enum KnownProvisioningState {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** Canceled */
  Canceled = "Canceled",
  /** Creating */
  Creating = "Creating",
  /** Deleting */
  Deleting = "Deleting",
  /** Fixing */
  Fixing = "Fixing",
  /** Verifying */
  Verifying = "Verifying",
  /** Updating */
  Updating = "Updating",
}

/**
 * Resource provisioning states. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **Canceled** \
 * **Creating** \
 * **Deleting** \
 * **Fixing** \
 * **Verifying** \
 * **Updating**
 */
export type ProvisioningState = string;

/** The response of a EvidenceResource list operation. */
export interface _EvidenceResourceListResult {
  /** The EvidenceResource items on this page */
  value: EvidenceResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Evidence file's download request. */
export interface EvidenceFileDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

export function evidenceFileDownloadRequestSerializer(
  item: EvidenceFileDownloadRequest,
): EvidenceFileDownloadRequestRest {
  return {
    reportCreatorTenantId: item["reportCreatorTenantId"],
    offerGuid: item["offerGuid"],
  };
}

/** Object that includes all the possible response for the evidence file download operation. */
export interface EvidenceFileDownloadResponse {
  /** The uri of evidence file */
  readonly evidenceFile?: EvidenceFileDownloadResponseEvidenceFile;
}

/** The uri of evidence file */
export interface EvidenceFileDownloadResponseEvidenceFile {
  /** The url of evidence file */
  readonly url?: string;
}

/** A class represent an AppComplianceAutomation scoping configuration resource. */
export interface ScopingConfigurationResource extends ProxyResource {
  /** ScopingConfiguration property. */
  properties: ScopingConfigurationProperties;
}

export function scopingConfigurationResourceSerializer(
  item: ScopingConfigurationResource,
): ScopingConfigurationResourceRest {
  return {
    properties: scopingConfigurationPropertiesSerializer(item.properties),
  };
}

/** ScopingConfiguration's properties. */
export interface ScopingConfigurationProperties {
  /** List of scoping question answers. */
  answers?: ScopingAnswer[];
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningState;
}

export function scopingConfigurationPropertiesSerializer(
  item: ScopingConfigurationProperties,
): ScopingConfigurationPropertiesRest {
  return {
    answers:
      item["answers"] === undefined
        ? item["answers"]
        : item["answers"].map(scopingAnswerSerializer),
  };
}

/** Scoping answer. */
export interface ScopingAnswer {
  /** Question id. */
  questionId: string;
  /** Question answer value list. */
  answers: string[];
}

export function scopingAnswerSerializer(
  item: ScopingAnswer,
): ScopingAnswerRest {
  return {
    questionId: item["questionId"],
    answers: item["answers"],
  };
}

/** The response of a ScopingConfigurationResource list operation. */
export interface _ScopingConfigurationResourceListResult {
  /** The ScopingConfigurationResource items on this page */
  value: ScopingConfigurationResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResource extends ProxyResource {
  /** Snapshot's property. */
  properties?: SnapshotProperties;
}

/** Snapshot's properties. */
export interface SnapshotProperties {
  /** Snapshot name. */
  readonly snapshotName?: string;
  /** The timestamp of resource creation (UTC). */
  readonly createdAt?: Date;
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningState;
  /** The report essential info. */
  readonly reportProperties?: ReportProperties;
  /** Metadata pertaining to creation and last modification of the resource. */
  readonly reportSystemData?: SystemData;
  /** List of compliance results. */
  readonly complianceResults?: ComplianceResult[];
}

/** Create Report's properties. */
export interface ReportProperties {
  /** Report collection trigger time. */
  triggerTime: Date;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone: string;
  /** List of resource data. */
  resources: ResourceMetadata[];
  /** Report status. */
  readonly status?: ReportStatus;
  /** List of report error codes. */
  readonly errors?: string[];
  /** Report's tenant id. */
  readonly tenantId?: string;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** Report next collection trigger time. */
  readonly nextTriggerTime?: Date;
  /** Report last collection trigger time. */
  readonly lastTriggerTime?: Date;
  /** List of subscription Ids. */
  readonly subscriptions?: string[];
  /** Report compliance status. */
  readonly complianceStatus?: ReportComplianceStatus;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
  /** List of synchronized certification records. */
  readonly certRecords?: CertSyncRecord[];
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningState;
}

export function reportPropertiesSerializer(
  item: ReportProperties,
): ReportPropertiesRest {
  return {
    triggerTime: item["triggerTime"].toISOString(),
    timeZone: item["timeZone"],
    resources: item["resources"].map(resourceMetadataSerializer),
    offerGuid: item["offerGuid"],
    storageInfo: !item.storageInfo
      ? item.storageInfo
      : storageInfoSerializer(item.storageInfo),
  };
}

/** Single resource Id's metadata. */
export interface ResourceMetadata {
  /** Resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  resourceId: string;
  /** Resource type. e.g. "Microsoft.Compute/virtualMachines" */
  resourceType?: string;
  /** Resource kind. */
  resourceKind?: string;
  /** Resource Origin. */
  resourceOrigin?: ResourceOrigin;
  /** Account Id. For example - the AWS account id. */
  accountId?: string;
}

export function resourceMetadataSerializer(
  item: ResourceMetadata,
): ResourceMetadataRest {
  return {
    resourceId: item["resourceId"],
    resourceType: item["resourceType"],
    resourceKind: item["resourceKind"],
    resourceOrigin: item["resourceOrigin"],
    accountId: item["accountId"],
  };
}

/** Known values of {@link ResourceOrigin} that the service accepts. */
export enum KnownResourceOrigin {
  /** Azure */
  Azure = "Azure",
  /** AWS */
  AWS = "AWS",
  /** GCP */
  GCP = "GCP",
}

/**
 * Resource Origin. \
 * {@link KnownResourceOrigin} can be used interchangeably with ResourceOrigin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Azure** \
 * **AWS** \
 * **GCP**
 */
export type ResourceOrigin = string;

/** Known values of {@link ReportStatus} that the service accepts. */
export enum KnownReportStatus {
  /** Active */
  Active = "Active",
  /** Failed */
  Failed = "Failed",
  /** Reviewing */
  Reviewing = "Reviewing",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Report status. \
 * {@link KnownReportStatus} can be used interchangeably with ReportStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active** \
 * **Failed** \
 * **Reviewing** \
 * **Disabled**
 */
export type ReportStatus = string;

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatus {
  /** The Microsoft 365 certification name. */
  readonly m365?: OverviewStatus;
}

/** The overview of the compliance result for one report. */
export interface OverviewStatus {
  /** The count of all passed control. */
  readonly passedCount?: number;
  /** The count of all failed control. */
  readonly failedCount?: number;
  /** The count of all manual control. */
  readonly manualCount?: number;
  /** The count of all not applicable control. */
  readonly notApplicableCount?: number;
  /** The count of all pending for approval control. */
  readonly pendingCount?: number;
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
  controls?: ControlSyncRecord[];
}

export function certSyncRecordSerializer(
  item: CertSyncRecord,
): CertSyncRecordRest {
  return {
    offerGuid: item["offerGuid"],
    certificationStatus: item["certificationStatus"],
    ingestionStatus: item["ingestionStatus"],
    controls:
      item["controls"] === undefined
        ? item["controls"]
        : item["controls"].map(controlSyncRecordSerializer),
  };
}

/** A class represent the control record synchronized from app compliance. */
export interface ControlSyncRecord {
  /** The Id of the control. e.g. "Operational_Security_10" */
  controlId?: string;
  /** Control status synchronized from app compliance. */
  controlStatus?: string;
}

export function controlSyncRecordSerializer(
  item: ControlSyncRecord,
): ControlSyncRecordRest {
  return {
    controlId: item["controlId"],
    controlStatus: item["controlStatus"],
  };
}

/** A class represent the compliance result. */
export interface ComplianceResult {
  /** The name of the compliance. e.g. "M365" */
  readonly complianceName?: string;
  /** List of categories. */
  readonly categories?: Category[];
}

/** A class represent the compliance category. */
export interface Category {
  /** The name of the compliance category. e.g. "Operational Security" */
  readonly categoryName?: string;
  /** Category status. */
  readonly categoryStatus?: CategoryStatus;
  /** List of control families. */
  readonly controlFamilies?: ControlFamily[];
}

/** Known values of {@link CategoryStatus} that the service accepts. */
export enum KnownCategoryStatus {
  /** Passed */
  Passed = "Passed",
  /** Failed */
  Failed = "Failed",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
  /** PendingApproval */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the category status. \
 * {@link KnownCategoryStatus} can be used interchangeably with CategoryStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **NotApplicable** \
 * **PendingApproval**
 */
export type CategoryStatus = string;

/** A class represent the control family. */
export interface ControlFamily {
  /** The name of the control family. e.g. "Malware Protection - Anti-Virus" */
  readonly controlFamilyName?: string;
  /** The control family status */
  readonly controlFamilyStatus?: ControlFamilyStatus;
  /** List of controls. */
  readonly controls?: Control[];
}

/** Known values of {@link ControlFamilyStatus} that the service accepts. */
export enum KnownControlFamilyStatus {
  /** Passed */
  Passed = "Passed",
  /** Failed */
  Failed = "Failed",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
  /** PendingApproval */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the control family status. \
 * {@link KnownControlFamilyStatus} can be used interchangeably with ControlFamilyStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **NotApplicable** \
 * **PendingApproval**
 */
export type ControlFamilyStatus = string;

/** A class represent the control. */
export interface Control {
  /** The Id of the control. e.g. "Operational_Security_10" */
  readonly controlId?: string;
  /** The name of the control. e.g. "Unsupported OS and Software." */
  readonly controlName?: string;
  /** The full name of the control. e.g. "Validate that unsupported operating systems and software components are not in use." */
  readonly controlFullName?: string;
  /** The control's description */
  readonly controlDescription?: string;
  /** The hyper link to the control's description'. */
  readonly controlDescriptionHyperLink?: string;
  /** Control status. */
  readonly controlStatus?: ControlStatus;
  /** List of customer responsibility. */
  readonly responsibilities?: Responsibility[];
}

/** Known values of {@link ControlStatus} that the service accepts. */
export enum KnownControlStatus {
  /** Passed */
  Passed = "Passed",
  /** Failed */
  Failed = "Failed",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
  /** PendingApproval */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the control status. \
 * {@link KnownControlStatus} can be used interchangeably with ControlStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **NotApplicable** \
 * **PendingApproval**
 */
export type ControlStatus = string;

/** A class represent the customer responsibility. */
export interface Responsibility {
  /** The id of the customer responsibility. */
  readonly responsibilityId?: string;
  /** The title of the customer responsibility. */
  readonly responsibilityTitle?: string;
  /** The description of the customer responsibility. */
  readonly responsibilityDescription?: string;
  /** The type of customer responsibility. */
  readonly responsibilityType?: ResponsibilityType;
  /** The severity level of this customer responsibility. */
  readonly responsibilitySeverity?: ResponsibilitySeverity;
  /** The status of this customer responsibility. */
  readonly responsibilityStatus?: ResponsibilityStatus;
  /** The supported cloud environment of this customer responsibility. */
  readonly responsibilityEnvironment?: ResponsibilityEnvironment;
  /** The count of all failed resources. */
  failedResourceCount?: number;
  /** The count of all resources. */
  totalResourceCount?: number;
  /** List of resource. */
  readonly resourceList?: ResponsibilityResource[];
  /** List of recommendation. */
  readonly recommendationList?: Recommendation[];
  /** The evidence upload guidance description. */
  readonly guidance?: string;
  /** The justification given by the user to clarify the reason. */
  readonly justification?: string;
  /** List of evidence file url. */
  evidenceFiles?: string[];
}

/** Known values of {@link ResponsibilityType} that the service accepts. */
export enum KnownResponsibilityType {
  /** Automated */
  Automated = "Automated",
  /** ScopedManual */
  ScopedManual = "ScopedManual",
  /** Manual */
  Manual = "Manual",
}

/**
 * Indicates the customer responsibility type. \
 * {@link KnownResponsibilityType} can be used interchangeably with ResponsibilityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Automated** \
 * **ScopedManual** \
 * **Manual**
 */
export type ResponsibilityType = string;

/** Known values of {@link ResponsibilitySeverity} that the service accepts. */
export enum KnownResponsibilitySeverity {
  /** High */
  High = "High",
  /** Medium */
  Medium = "Medium",
  /** Low */
  Low = "Low",
}

/**
 * Indicates the customer responsibility severity. \
 * {@link KnownResponsibilitySeverity} can be used interchangeably with ResponsibilitySeverity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High** \
 * **Medium** \
 * **Low**
 */
export type ResponsibilitySeverity = string;

/** Known values of {@link ResponsibilityStatus} that the service accepts. */
export enum KnownResponsibilityStatus {
  /** Passed */
  Passed = "Passed",
  /** Failed */
  Failed = "Failed",
  /** NotApplicable */
  NotApplicable = "NotApplicable",
  /** PendingApproval */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the customer responsibility status. \
 * {@link KnownResponsibilityStatus} can be used interchangeably with ResponsibilityStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed** \
 * **Failed** \
 * **NotApplicable** \
 * **PendingApproval**
 */
export type ResponsibilityStatus = string;

/** Known values of {@link ResponsibilityEnvironment} that the service accepts. */
export enum KnownResponsibilityEnvironment {
  /** Azure */
  Azure = "Azure",
  /** AWS */
  AWS = "AWS",
  /** GCP */
  GCP = "GCP",
  /** General */
  General = "General",
}

/**
 * Indicates the customer responsibility supported cloud environment. \
 * {@link KnownResponsibilityEnvironment} can be used interchangeably with ResponsibilityEnvironment,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Azure** \
 * **AWS** \
 * **GCP** \
 * **General**
 */
export type ResponsibilityEnvironment = string;

/** A class represent the resource. */
export interface ResponsibilityResource {
  /** The Id of the resource. */
  readonly resourceId?: string;
  /** Account Id. For example - AWS account Id. */
  readonly accountId?: string;
  /** The type of the resource. e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** Resource origin. */
  readonly resourceOrigin?: ResourceOrigin;
  /** Resource status. */
  readonly resourceStatus?: ResourceStatus;
  /** The status change date for the resource. */
  readonly resourceStatusChangeDate?: Date;
  /** List of recommendation id. */
  recommendationIds?: string[];
}

/** A class represent the recommendation. */
export interface Recommendation {
  /** The Id of the recommendation. */
  readonly recommendationId?: string;
  /** The short name of the recommendation. e.g. "Invalid TLS config" */
  readonly recommendationShortName?: string;
  /** List of recommendation solutions. */
  readonly recommendationSolutions?: RecommendationSolution[];
}

/** A class represent the recommendation solution. */
export interface RecommendationSolution {
  /** The index of the recommendation solution. */
  readonly recommendationSolutionIndex?: string;
  /** The detail steps of the recommendation solution. */
  readonly recommendationSolutionContent?: string;
  /** Indicates whether this solution is the recommended. */
  readonly isRecommendSolution?: IsRecommendSolution;
}

/** Known values of {@link IsRecommendSolution} that the service accepts. */
export enum KnownIsRecommendSolution {
  /** true */
  "true" = "true",
  /** false */
  "false" = "false",
}

/**
 * Indicates whether this solution is the recommended. \
 * {@link KnownIsRecommendSolution} can be used interchangeably with IsRecommendSolution,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true** \
 * **false**
 */
export type IsRecommendSolution = string;

/** The response of a SnapshotResource list operation. */
export interface _SnapshotResourceListResult {
  /** The SnapshotResource items on this page */
  value: SnapshotResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Snapshot's download request. */
export interface SnapshotDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** Indicates the download type. */
  downloadType: DownloadType;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

export function snapshotDownloadRequestSerializer(
  item: SnapshotDownloadRequest,
): SnapshotDownloadRequestRest {
  return {
    reportCreatorTenantId: item["reportCreatorTenantId"],
    downloadType: item["downloadType"],
    offerGuid: item["offerGuid"],
  };
}

/** Known values of {@link DownloadType} that the service accepts. */
export enum KnownDownloadType {
  /** ComplianceReport */
  ComplianceReport = "ComplianceReport",
  /** CompliancePdfReport */
  CompliancePdfReport = "CompliancePdfReport",
  /** ComplianceDetailedPdfReport */
  ComplianceDetailedPdfReport = "ComplianceDetailedPdfReport",
  /** ResourceList */
  ResourceList = "ResourceList",
}

/**
 * Indicates the download type. \
 * {@link KnownDownloadType} can be used interchangeably with DownloadType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ComplianceReport** \
 * **CompliancePdfReport** \
 * **ComplianceDetailedPdfReport** \
 * **ResourceList**
 */
export type DownloadType = string;

/** Object that includes all the possible response for the download operation. */
export interface DownloadResponse {
  /** Resource list of the report */
  readonly resourceList?: ResourceItem[];
  /** List of the compliance result */
  readonly complianceReport?: ComplianceReportItem[];
  /** Compliance pdf report */
  readonly compliancePdfReport?: DownloadResponseCompliancePdfReport;
  /** The detailed compliance pdf report */
  readonly complianceDetailedPdfReport?: DownloadResponseComplianceDetailedPdfReport;
}

/** Resource Id. */
export interface ResourceItem {
  /** The subscription Id of this resource. */
  readonly subscriptionId?: string;
  /** The resource group name of this resource. */
  readonly resourceGroup?: string;
  /** The resource type of this resource. e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** The resource Id - e.g. "/subscriptions/00000000-0000-0000-0000-000000000000/resourceGroups/rg1/providers/Microsoft.Compute/virtualMachines/vm1". */
  readonly resourceId?: string;
}

/** Object that includes all the content for single compliance result. */
export interface ComplianceReportItem {
  /** The category name. */
  readonly categoryName?: string;
  /** The control family name. */
  readonly controlFamilyName?: string;
  /** The control Id - e.g. "1". */
  readonly controlId?: string;
  /** The control name. */
  readonly controlName?: string;
  /** Control status. */
  readonly controlStatus?: ControlStatus;
  /** The title of the customer responsibility. */
  readonly responsibilityTitle?: string;
  /** The description of the customer responsibility. */
  readonly responsibilityDescription?: string;
  /** The Id of the resource. */
  readonly resourceId?: string;
  /** The type of the resource.  e.g. "Microsoft.SignalRService/SignalR" */
  readonly resourceType?: string;
  /** Resource origin. */
  readonly resourceOrigin?: ResourceOrigin;
  /** Resource status. */
  readonly resourceStatus?: ResourceStatus;
  /** The status change date for the resource. */
  readonly resourceStatusChangeDate?: Date;
}

/** Compliance pdf report */
export interface DownloadResponseCompliancePdfReport {
  /** The uri of compliance pdf report */
  readonly sasUri?: string;
}

/** The detailed compliance pdf report */
export interface DownloadResponseComplianceDetailedPdfReport {
  /** The uri of detailed compliance pdf report */
  readonly sasUri?: string;
}

/** A class represent an AppComplianceAutomation webhook resource. */
export interface WebhookResource extends ProxyResource {
  /** Webhook property. */
  properties: WebhookProperties;
}

export function webhookResourceSerializer(
  item: WebhookResource,
): WebhookResourceRest {
  return {
    properties: webhookPropertiesSerializer(item.properties),
  };
}

/** Webhook properties. */
export interface WebhookProperties {
  /** Webhook id in database. */
  readonly webhookId?: string;
  /** Webhook status. */
  status?: WebhookStatus;
  /** Tenant id. */
  readonly tenantId?: string;
  /** whether to send notification under any event. */
  sendAllEvents?: SendAllEvents;
  /** under which event notification should be sent. */
  events?: NotificationEvent[];
  /** webhook payload url */
  payloadUrl?: string;
  /** content type */
  contentType?: ContentType;
  /** webhook secret token. If not set, this field value is null; otherwise, please set a string value. */
  webhookKey?: string;
  /** whether to update webhookKey. */
  updateWebhookKey?: UpdateWebhookKey;
  /** whether webhookKey is enabled. */
  readonly webhookKeyEnabled?: WebhookKeyEnabled;
  /** whether to enable ssl verification */
  enableSslVerification?: EnableSslVerification;
  /** webhook deliveryStatus */
  readonly deliveryStatus?: DeliveryStatus;
  /** Azure Resource Provisioning State */
  readonly provisioningState?: ProvisioningState;
}

export function webhookPropertiesSerializer(
  item: WebhookProperties,
): WebhookPropertiesRest {
  return {
    status: item["status"],
    sendAllEvents: item["sendAllEvents"],
    events: item["events"],
    payloadUrl: item["payloadUrl"],
    contentType: item["contentType"],
    webhookKey: item["webhookKey"],
    updateWebhookKey: item["updateWebhookKey"],
    enableSslVerification: item["enableSslVerification"],
  };
}

/** Known values of {@link WebhookStatus} that the service accepts. */
export enum KnownWebhookStatus {
  /** Enabled */
  Enabled = "Enabled",
  /** Disabled */
  Disabled = "Disabled",
}

/**
 * Webhook status. \
 * {@link KnownWebhookStatus} can be used interchangeably with WebhookStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled** \
 * **Disabled**
 */
export type WebhookStatus = string;

/** Known values of {@link SendAllEvents} that the service accepts. */
export enum KnownSendAllEvents {
  /** true */
  "true" = "true",
  /** false */
  "false" = "false",
}

/**
 * whether to send notification under any event. \
 * {@link KnownSendAllEvents} can be used interchangeably with SendAllEvents,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true** \
 * **false**
 */
export type SendAllEvents = string;

/** Known values of {@link NotificationEvent} that the service accepts. */
export enum KnownNotificationEvent {
  /** generate_snapshot_success */
  generate_snapshot_success = "generate_snapshot_success",
  /** generate_snapshot_failed */
  generate_snapshot_failed = "generate_snapshot_failed",
  /** assessment_failure */
  assessment_failure = "assessment_failure",
  /** report_configuration_changes */
  report_configuration_changes = "report_configuration_changes",
  /** report_deletion */
  report_deletion = "report_deletion",
}

/**
 * notification event. \
 * {@link KnownNotificationEvent} can be used interchangeably with NotificationEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **generate_snapshot_success** \
 * **generate_snapshot_failed** \
 * **assessment_failure** \
 * **report_configuration_changes** \
 * **report_deletion**
 */
export type NotificationEvent = string;

/** Known values of {@link ContentType} that the service accepts. */
export enum KnownContentType {
  /** application/json */
  "application/json" = "application/json",
}

/**
 * content type \
 * {@link KnownContentType} can be used interchangeably with ContentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **application\/json**
 */
export type ContentType = string;

/** Known values of {@link UpdateWebhookKey} that the service accepts. */
export enum KnownUpdateWebhookKey {
  /** true */
  "true" = "true",
  /** false */
  "false" = "false",
}

/**
 * whether to update webhookKey. \
 * {@link KnownUpdateWebhookKey} can be used interchangeably with UpdateWebhookKey,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true** \
 * **false**
 */
export type UpdateWebhookKey = string;

/** Known values of {@link WebhookKeyEnabled} that the service accepts. */
export enum KnownWebhookKeyEnabled {
  /** true */
  "true" = "true",
  /** false */
  "false" = "false",
}

/**
 * whether webhookKey is enabled. \
 * {@link KnownWebhookKeyEnabled} can be used interchangeably with WebhookKeyEnabled,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true** \
 * **false**
 */
export type WebhookKeyEnabled = string;

/** Known values of {@link EnableSslVerification} that the service accepts. */
export enum KnownEnableSslVerification {
  /** true */
  "true" = "true",
  /** false */
  "false" = "false",
}

/**
 * whether to enable ssl verification \
 * {@link KnownEnableSslVerification} can be used interchangeably with EnableSslVerification,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true** \
 * **false**
 */
export type EnableSslVerification = string;

/** Known values of {@link DeliveryStatus} that the service accepts. */
export enum KnownDeliveryStatus {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
  /** NotStarted */
  NotStarted = "NotStarted",
}

/**
 * webhook deliveryStatus \
 * {@link KnownDeliveryStatus} can be used interchangeably with DeliveryStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed** \
 * **NotStarted**
 */
export type DeliveryStatus = string;

/** A class represent a AppComplianceAutomation webhook resource update properties. */
export interface WebhookResourcePatch {
  /** Webhook property. */
  properties?: WebhookProperties;
}

export function webhookResourcePatchSerializer(
  item: WebhookResourcePatch,
): WebhookResourcePatchRest {
  return {
    properties: !item.properties
      ? item.properties
      : webhookPropertiesSerializer(item.properties),
  };
}

/** The response of a WebhookResource list operation. */
export interface _WebhookResourceListResult {
  /** The WebhookResource items on this page */
  value: WebhookResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResource extends ProxyResource {
  /** Report property. */
  properties: ReportProperties;
}

export function reportResourceSerializer(
  item: ReportResource,
): ReportResourceRest {
  return {
    properties: reportPropertiesSerializer(item.properties),
  };
}

/** A class represent a AppComplianceAutomation report resource update properties. */
export interface ReportResourcePatch {
  /** Report property. */
  properties?: ReportPatchProperties;
}

export function reportResourcePatchSerializer(
  item: ReportResourcePatch,
): ReportResourcePatchRest {
  return {
    properties: !item.properties
      ? item.properties
      : reportPatchPropertiesSerializer(item.properties),
  };
}

/** Patch Report's properties. */
export interface ReportPatchProperties {
  /** Report collection trigger time. */
  triggerTime?: Date;
  /**
   * Report collection trigger time's time zone, the available list can be obtained by executing "Get-TimeZone -ListAvailable" in PowerShell.
   * An example of valid timezone id is "Pacific Standard Time".
   */
  timeZone?: string;
  /** List of resource data. */
  resources?: ResourceMetadata[];
  /** Report status. */
  readonly status?: ReportStatus;
  /** List of report error codes. */
  readonly errors?: string[];
  /** Report's tenant id. */
  readonly tenantId?: string;
  /** A list of comma-separated offerGuids indicates a series of offerGuids that map to the report. For example, "00000000-0000-0000-0000-000000000001,00000000-0000-0000-0000-000000000002" and "00000000-0000-0000-0000-000000000003". */
  offerGuid?: string;
  /** Report next collection trigger time. */
  readonly nextTriggerTime?: Date;
  /** Report last collection trigger time. */
  readonly lastTriggerTime?: Date;
  /** List of subscription Ids. */
  readonly subscriptions?: string[];
  /** Report compliance status. */
  readonly complianceStatus?: ReportComplianceStatus;
  /** The information of 'bring your own storage' binding to the report */
  storageInfo?: StorageInfo;
  /** List of synchronized certification records. */
  readonly certRecords?: CertSyncRecord[];
  /** Azure lifecycle management */
  readonly provisioningState?: ProvisioningState;
}

export function reportPatchPropertiesSerializer(
  item: ReportPatchProperties,
): ReportPatchPropertiesRest {
  return {
    triggerTime: item["triggerTime"]?.toISOString(),
    timeZone: item["timeZone"],
    resources:
      item["resources"] === undefined
        ? item["resources"]
        : item["resources"].map(resourceMetadataSerializer),
    offerGuid: item["offerGuid"],
    storageInfo: !item.storageInfo
      ? item.storageInfo
      : storageInfoSerializer(item.storageInfo),
  };
}

/** The response of a ReportResource list operation. */
export interface _ReportResourceListResult {
  /** The ReportResource items on this page */
  value: ReportResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

/** Synchronize certification record request. */
export interface SyncCertRecordRequest {
  /** certification record to be synchronized. */
  certRecord: CertSyncRecord;
}

export function syncCertRecordRequestSerializer(
  item: SyncCertRecordRequest,
): SyncCertRecordRequestRest {
  return {
    certRecord: certSyncRecordSerializer(item.certRecord),
  };
}

/** Synchronize certification record response. */
export interface SyncCertRecordResponse {
  /** certification record synchronized. */
  certRecord?: CertSyncRecord;
}

/** Report fix result. */
export interface ReportFixResult {
  /** Indicates whether the fix action is Succeeded or Failed. */
  readonly result?: Result;
  /** If the report fix action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

/** Known values of {@link Result} that the service accepts. */
export enum KnownResult {
  /** Succeeded */
  Succeeded = "Succeeded",
  /** Failed */
  Failed = "Failed",
}

/**
 * Indicates whether the fix action is Succeeded or Failed. \
 * {@link KnownResult} can be used interchangeably with Result,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded** \
 * **Failed**
 */
export type Result = string;

/** Scoping question list. */
export interface ScopingQuestions {
  /** List of scoping questions. */
  questions?: ScopingQuestion[];
}

/** The definition of a scoping question. */
export interface ScopingQuestion {
  /** Question id. */
  readonly questionId: string;
  /** Superior question id. */
  readonly superiorQuestionId?: string;
  /** Input type of the question answer. */
  readonly inputType: InputType;
  /** Option id list. */
  readonly optionIds: string[];
  /** The rule of the question. */
  readonly rules: Rule[];
  /** The answer value to show the sub questions. */
  readonly showSubQuestionsValue?: string;
}

/** Known values of {@link InputType} that the service accepts. */
export enum KnownInputType {
  /** None */
  None = "None",
  /** Text */
  Text = "Text",
  /** Email */
  Email = "Email",
  /** MultilineText */
  MultilineText = "MultilineText",
  /** Url */
  Url = "Url",
  /** Number */
  Number = "Number",
  /** Boolean */
  Boolean = "Boolean",
  /** Telephone */
  Telephone = "Telephone",
  /** YesNoNa */
  YesNoNa = "YesNoNa",
  /** Date */
  Date = "Date",
  /** YearPicker */
  YearPicker = "YearPicker",
  /** SingleSelection */
  SingleSelection = "SingleSelection",
  /** SingleSelectDropdown */
  SingleSelectDropdown = "SingleSelectDropdown",
  /** MultiSelectCheckbox */
  MultiSelectCheckbox = "MultiSelectCheckbox",
  /** MultiSelectDropdown */
  MultiSelectDropdown = "MultiSelectDropdown",
  /** MultiSelectDropdownCustom */
  MultiSelectDropdownCustom = "MultiSelectDropdownCustom",
  /** Group */
  Group = "Group",
  /** Upload */
  Upload = "Upload",
}

/**
 * Question input type. \
 * {@link KnownInputType} can be used interchangeably with InputType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None** \
 * **Text** \
 * **Email** \
 * **MultilineText** \
 * **Url** \
 * **Number** \
 * **Boolean** \
 * **Telephone** \
 * **YesNoNa** \
 * **Date** \
 * **YearPicker** \
 * **SingleSelection** \
 * **SingleSelectDropdown** \
 * **MultiSelectCheckbox** \
 * **MultiSelectDropdown** \
 * **MultiSelectDropdownCustom** \
 * **Group** \
 * **Upload**
 */
export type InputType = string;

/** Known values of {@link Rule} that the service accepts. */
export enum KnownRule {
  /** Required */
  Required = "Required",
  /** CharLength */
  CharLength = "CharLength",
  /** Url */
  Url = "Url",
  /** Urls */
  Urls = "Urls",
  /** Domains */
  Domains = "Domains",
  /** USPrivacyShield */
  USPrivacyShield = "USPrivacyShield",
  /** PublicSOX */
  PublicSOX = "PublicSOX",
  /** CreditCardPCI */
  CreditCardPCI = "CreditCardPCI",
  /** AzureApplication */
  AzureApplication = "AzureApplication",
  /** ValidGuid */
  ValidGuid = "ValidGuid",
  /** PublisherVerification */
  PublisherVerification = "PublisherVerification",
  /** DynamicDropdown */
  DynamicDropdown = "DynamicDropdown",
  /** PreventNonEnglishChar */
  PreventNonEnglishChar = "PreventNonEnglishChar",
  /** ValidEmail */
  ValidEmail = "ValidEmail",
}

/**
 * Scoping question rule. \
 * {@link KnownRule} can be used interchangeably with Rule,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Required** \
 * **CharLength** \
 * **Url** \
 * **Urls** \
 * **Domains** \
 * **USPrivacyShield** \
 * **PublicSOX** \
 * **CreditCardPCI** \
 * **AzureApplication** \
 * **ValidGuid** \
 * **PublisherVerification** \
 * **DynamicDropdown** \
 * **PreventNonEnglishChar** \
 * **ValidEmail**
 */
export type Rule = string;

/** Report health status verification result. */
export interface ReportVerificationResult {
  /** Indicates whether the report verification action is Succeeded or Failed. */
  readonly result?: Result;
  /** If the report verification action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

/** The available API versions. */
export type Versions = "2024-06-27";
