// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A class represent an AppComplianceAutomation report resource. */
export interface ReportResource extends ProxyResource {
  /** Report property. */
  properties: ReportProperties;
}

export function reportResourceSerializer(item: ReportResource): any {
  return { properties: reportPropertiesSerializer(item["properties"]) };
}

export function reportResourceDeserializer(item: any): ReportResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: reportPropertiesDeserializer(item["properties"]),
  };
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

export function reportPropertiesSerializer(item: ReportProperties): any {
  return {
    triggerTime: item["triggerTime"].toISOString(),
    timeZone: item["timeZone"],
    resources: resourceMetadataArraySerializer(item["resources"]),
    offerGuid: item["offerGuid"],
    storageInfo: !item["storageInfo"]
      ? item["storageInfo"]
      : storageInfoSerializer(item["storageInfo"]),
  };
}

export function reportPropertiesDeserializer(item: any): ReportProperties {
  return {
    triggerTime: new Date(item["triggerTime"]),
    timeZone: item["timeZone"],
    resources: resourceMetadataArrayDeserializer(item["resources"]),
    status: item["status"],
    errors: !item["errors"]
      ? item["errors"]
      : item["errors"].map((p: any) => {
          return p;
        }),
    tenantId: item["tenantId"],
    offerGuid: item["offerGuid"],
    nextTriggerTime: !item["nextTriggerTime"]
      ? item["nextTriggerTime"]
      : new Date(item["nextTriggerTime"]),
    lastTriggerTime: !item["lastTriggerTime"]
      ? item["lastTriggerTime"]
      : new Date(item["lastTriggerTime"]),
    subscriptions: !item["subscriptions"]
      ? item["subscriptions"]
      : item["subscriptions"].map((p: any) => {
          return p;
        }),
    complianceStatus: !item["complianceStatus"]
      ? item["complianceStatus"]
      : reportComplianceStatusDeserializer(item["complianceStatus"]),
    storageInfo: !item["storageInfo"]
      ? item["storageInfo"]
      : storageInfoDeserializer(item["storageInfo"]),
    certRecords: !item["certRecords"]
      ? item["certRecords"]
      : certSyncRecordArrayDeserializer(item["certRecords"]),
    provisioningState: item["provisioningState"],
  };
}

export function resourceMetadataArraySerializer(result: Array<ResourceMetadata>): any[] {
  return result.map((item) => {
    return resourceMetadataSerializer(item);
  });
}

export function resourceMetadataArrayDeserializer(result: Array<ResourceMetadata>): any[] {
  return result.map((item) => {
    return resourceMetadataDeserializer(item);
  });
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

export function resourceMetadataSerializer(item: ResourceMetadata): any {
  return {
    resourceId: item["resourceId"],
    resourceType: item["resourceType"],
    resourceKind: item["resourceKind"],
    resourceOrigin: item["resourceOrigin"],
    accountId: item["accountId"],
  };
}

export function resourceMetadataDeserializer(item: any): ResourceMetadata {
  return {
    resourceId: item["resourceId"],
    resourceType: item["resourceType"],
    resourceKind: item["resourceKind"],
    resourceOrigin: item["resourceOrigin"],
    accountId: item["accountId"],
  };
}

/** Resource Origin. */
export enum KnownResourceOrigin {
  /** The resource is from Azure. */
  Azure = "Azure",
  /** The resource is from AWS. */
  AWS = "AWS",
  /** The resource is from GCP. */
  GCP = "GCP",
}

/**
 * Resource Origin. \
 * {@link KnownResourceOrigin} can be used interchangeably with ResourceOrigin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Azure**: The resource is from Azure. \
 * **AWS**: The resource is from AWS. \
 * **GCP**: The resource is from GCP.
 */
export type ResourceOrigin = string;

/** Report status. */
export enum KnownReportStatus {
  /** The report is active. */
  Active = "Active",
  /** The report is failed. */
  Failed = "Failed",
  /** The report is under reviewing. */
  Reviewing = "Reviewing",
  /** The report is disabled. */
  Disabled = "Disabled",
}

/**
 * Report status. \
 * {@link KnownReportStatus} can be used interchangeably with ReportStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Active**: The report is active. \
 * **Failed**: The report is failed. \
 * **Reviewing**: The report is under reviewing. \
 * **Disabled**: The report is disabled.
 */
export type ReportStatus = string;

/** A list which includes all the compliance result for one report. */
export interface ReportComplianceStatus {
  /** The Microsoft 365 certification name. */
  readonly m365?: OverviewStatus;
}

export function reportComplianceStatusDeserializer(item: any): ReportComplianceStatus {
  return {
    m365: !item["m365"] ? item["m365"] : overviewStatusDeserializer(item["m365"]),
  };
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

export function overviewStatusDeserializer(item: any): OverviewStatus {
  return {
    passedCount: item["passedCount"],
    failedCount: item["failedCount"],
    manualCount: item["manualCount"],
    notApplicableCount: item["notApplicableCount"],
    pendingCount: item["pendingCount"],
  };
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

export function storageInfoSerializer(item: StorageInfo): any {
  return {
    subscriptionId: item["subscriptionId"],
    resourceGroup: item["resourceGroup"],
    accountName: item["accountName"],
    location: item["location"],
  };
}

export function storageInfoDeserializer(item: any): StorageInfo {
  return {
    subscriptionId: item["subscriptionId"],
    resourceGroup: item["resourceGroup"],
    accountName: item["accountName"],
    location: item["location"],
  };
}

export function certSyncRecordArraySerializer(result: Array<CertSyncRecord>): any[] {
  return result.map((item) => {
    return certSyncRecordSerializer(item);
  });
}

export function certSyncRecordArrayDeserializer(result: Array<CertSyncRecord>): any[] {
  return result.map((item) => {
    return certSyncRecordDeserializer(item);
  });
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

export function certSyncRecordSerializer(item: CertSyncRecord): any {
  return {
    offerGuid: item["offerGuid"],
    certificationStatus: item["certificationStatus"],
    ingestionStatus: item["ingestionStatus"],
    controls: !item["controls"]
      ? item["controls"]
      : controlSyncRecordArraySerializer(item["controls"]),
  };
}

export function certSyncRecordDeserializer(item: any): CertSyncRecord {
  return {
    offerGuid: item["offerGuid"],
    certificationStatus: item["certificationStatus"],
    ingestionStatus: item["ingestionStatus"],
    controls: !item["controls"]
      ? item["controls"]
      : controlSyncRecordArrayDeserializer(item["controls"]),
  };
}

export function controlSyncRecordArraySerializer(result: Array<ControlSyncRecord>): any[] {
  return result.map((item) => {
    return controlSyncRecordSerializer(item);
  });
}

export function controlSyncRecordArrayDeserializer(result: Array<ControlSyncRecord>): any[] {
  return result.map((item) => {
    return controlSyncRecordDeserializer(item);
  });
}

/** A class represent the control record synchronized from app compliance. */
export interface ControlSyncRecord {
  /** The Id of the control. e.g. "Operational_Security_10" */
  controlId?: string;
  /** Control status synchronized from app compliance. */
  controlStatus?: string;
}

export function controlSyncRecordSerializer(item: ControlSyncRecord): any {
  return { controlId: item["controlId"], controlStatus: item["controlStatus"] };
}

export function controlSyncRecordDeserializer(item: any): ControlSyncRecord {
  return {
    controlId: item["controlId"],
    controlStatus: item["controlStatus"],
  };
}

/** Resource provisioning states. */
export enum KnownProvisioningState {
  /** The provision is succeeded. */
  Succeeded = "Succeeded",
  /** The provision is failed. */
  Failed = "Failed",
  /** The provision is canceled. */
  Canceled = "Canceled",
  /** The creation is in progress. */
  Creating = "Creating",
  /** The deletion is in progress. */
  Deleting = "Deleting",
  /** The fix of the resource in progress. */
  Fixing = "Fixing",
  /** The verification of the resource in progress. */
  Verifying = "Verifying",
  /** The update of the resource in progress. */
  Updating = "Updating",
}

/**
 * Resource provisioning states. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The provision is succeeded. \
 * **Failed**: The provision is failed. \
 * **Canceled**: The provision is canceled. \
 * **Creating**: The creation is in progress. \
 * **Deleting**: The deletion is in progress. \
 * **Fixing**: The fix of the resource in progress. \
 * **Verifying**: The verification of the resource in progress. \
 * **Updating**: The update of the resource in progress.
 */
export type ProvisioningState = string;

/** The resource model definition for a Azure Resource Manager proxy resource. It will not have tags and a location */
export interface ProxyResource extends Resource {}

export function proxyResourceSerializer(item: ProxyResource): any {
  return item;
}

export function proxyResourceDeserializer(item: any): ProxyResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
}

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

export function resourceSerializer(item: Resource): any {
  return item;
}

export function resourceDeserializer(item: any): Resource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
  };
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

export function systemDataDeserializer(item: any): SystemData {
  return {
    createdBy: item["createdBy"],
    createdByType: item["createdByType"],
    createdAt: !item["createdAt"] ? item["createdAt"] : new Date(item["createdAt"]),
    lastModifiedBy: item["lastModifiedBy"],
    lastModifiedByType: item["lastModifiedByType"],
    lastModifiedAt: !item["lastModifiedAt"]
      ? item["lastModifiedAt"]
      : new Date(item["lastModifiedAt"]),
  };
}

/** The kind of entity that created the resource. */
export enum KnownCreatedByType {
  /** The entity was created by a user. */
  User = "User",
  /** The entity was created by an application. */
  Application = "Application",
  /** The entity was created by a managed identity. */
  ManagedIdentity = "ManagedIdentity",
  /** The entity was created by a key. */
  Key = "Key",
}

/**
 * The kind of entity that created the resource. \
 * {@link KnowncreatedByType} can be used interchangeably with createdByType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **User**: The entity was created by a user. \
 * **Application**: The entity was created by an application. \
 * **ManagedIdentity**: The entity was created by a managed identity. \
 * **Key**: The entity was created by a key.
 */
export type CreatedByType = string;

/** Common error response for all Azure Resource Manager APIs to return error details for failed operations. */
export interface ErrorResponse {
  /** The error object. */
  error?: ErrorDetail;
}

export function errorResponseDeserializer(item: any): ErrorResponse {
  return {
    error: !item["error"] ? item["error"] : errorDetailDeserializer(item["error"]),
  };
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

export function errorDetailDeserializer(item: any): ErrorDetail {
  return {
    code: item["code"],
    message: item["message"],
    target: item["target"],
    details: !item["details"] ? item["details"] : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(result: Array<ErrorDetail>): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(result: Array<ErrorAdditionalInfo>): any[] {
  return result.map((item) => {
    return errorAdditionalInfoDeserializer(item);
  });
}

/** The resource management error additional info. */
export interface ErrorAdditionalInfo {
  /** The additional info type. */
  readonly type?: string;
  /** The additional info. */
  readonly info?: Record<string, any>;
}

export function errorAdditionalInfoDeserializer(item: any): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"] ? item["info"] : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(item: any): _ErrorAdditionalInfoInfo {
  return item;
}

/** A class represent a AppComplianceAutomation report resource update properties. */
export interface ReportResourcePatch {
  /** Report property. */
  properties?: ReportPatchProperties;
}

export function reportResourcePatchSerializer(item: ReportResourcePatch): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : reportPatchPropertiesSerializer(item["properties"]),
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

export function reportPatchPropertiesSerializer(item: ReportPatchProperties): any {
  return {
    triggerTime: !item["triggerTime"] ? item["triggerTime"] : item["triggerTime"].toISOString(),
    timeZone: item["timeZone"],
    resources: !item["resources"]
      ? item["resources"]
      : resourceMetadataArraySerializer(item["resources"]),
    offerGuid: item["offerGuid"],
    storageInfo: !item["storageInfo"]
      ? item["storageInfo"]
      : storageInfoSerializer(item["storageInfo"]),
  };
}

/** The response of a ReportResource list operation. */
export interface _ReportResourceListResult {
  /** The ReportResource items on this page */
  value: ReportResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _reportResourceListResultDeserializer(item: any): _ReportResourceListResult {
  return {
    value: reportResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function reportResourceArraySerializer(result: Array<ReportResource>): any[] {
  return result.map((item) => {
    return reportResourceSerializer(item);
  });
}

export function reportResourceArrayDeserializer(result: Array<ReportResource>): any[] {
  return result.map((item) => {
    return reportResourceDeserializer(item);
  });
}

/** Synchronize certification record request. */
export interface SyncCertRecordRequest {
  /** certification record to be synchronized. */
  certRecord: CertSyncRecord;
}

export function syncCertRecordRequestSerializer(item: SyncCertRecordRequest): any {
  return { certRecord: certSyncRecordSerializer(item["certRecord"]) };
}

/** Synchronize certification record response. */
export interface SyncCertRecordResponse {
  /** certification record synchronized. */
  certRecord?: CertSyncRecord;
}

export function syncCertRecordResponseDeserializer(item: any): SyncCertRecordResponse {
  return {
    certRecord: !item["certRecord"]
      ? item["certRecord"]
      : certSyncRecordDeserializer(item["certRecord"]),
  };
}

/** The check availability request body. */
export interface CheckNameAvailabilityRequest {
  /** The name of the resource for which availability needs to be checked. */
  name?: string;
  /** The resource type. */
  type?: string;
}

export function checkNameAvailabilityRequestSerializer(item: CheckNameAvailabilityRequest): any {
  return { name: item["name"], type: item["type"] };
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

export function checkNameAvailabilityResponseDeserializer(
  item: any,
): CheckNameAvailabilityResponse {
  return {
    nameAvailable: item["nameAvailable"],
    reason: item["reason"],
    message: item["message"],
  };
}

/** Possible reasons for a name not being available. */
export enum KnownCheckNameAvailabilityReason {
  /** Name is invalid. */
  Invalid = "Invalid",
  /** Name already exists. */
  AlreadyExists = "AlreadyExists",
}

/**
 * Possible reasons for a name not being available. \
 * {@link KnownCheckNameAvailabilityReason} can be used interchangeably with CheckNameAvailabilityReason,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Invalid**: Name is invalid. \
 * **AlreadyExists**: Name already exists.
 */
export type CheckNameAvailabilityReason = string;

/** Report fix result. */
export interface ReportFixResult {
  /** Indicates whether the fix action is Succeeded or Failed. */
  readonly result?: Result;
  /** If the report fix action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

export function reportFixResultDeserializer(item: any): ReportFixResult {
  return {
    result: item["result"],
    reason: item["reason"],
  };
}

/** Indicates whether the fix action is Succeeded or Failed. */
export enum KnownResult {
  /** The result is succeeded. */
  Succeeded = "Succeeded",
  /** The result is failed. */
  Failed = "Failed",
}

/**
 * Indicates whether the fix action is Succeeded or Failed. \
 * {@link KnownResult} can be used interchangeably with Result,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The result is succeeded. \
 * **Failed**: The result is failed.
 */
export type Result = string;

/** Scoping question list. */
export interface ScopingQuestions {
  /** List of scoping questions. */
  questions?: ScopingQuestion[];
}

export function scopingQuestionsDeserializer(item: any): ScopingQuestions {
  return {
    questions: !item["questions"]
      ? item["questions"]
      : scopingQuestionArrayDeserializer(item["questions"]),
  };
}

export function scopingQuestionArrayDeserializer(result: Array<ScopingQuestion>): any[] {
  return result.map((item) => {
    return scopingQuestionDeserializer(item);
  });
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

export function scopingQuestionDeserializer(item: any): ScopingQuestion {
  return {
    questionId: item["questionId"],
    superiorQuestionId: item["superiorQuestionId"],
    inputType: item["inputType"],
    optionIds: item["optionIds"].map((p: any) => {
      return p;
    }),
    rules: item["rules"].map((p: any) => {
      return p;
    }),
    showSubQuestionsValue: item["showSubQuestionsValue"],
  };
}

/** Question input type. */
export enum KnownInputType {
  /** The input type is a text box. */
  None = "None",
  /** The input content is text string. */
  Text = "Text",
  /** The input content should be an email address. */
  Email = "Email",
  /** The input content should be multiline text. */
  MultilineText = "MultilineText",
  /** The input content should be a URL. */
  Url = "Url",
  /** The input content should be a number. */
  Number = "Number",
  /** The input content should be a boolean. */
  Boolean = "Boolean",
  /** The input content should be a telephone number. */
  Telephone = "Telephone",
  /** The input content should be Yes, No or Na. */
  YesNoNa = "YesNoNa",
  /** The input content should be a date. */
  Date = "Date",
  /** The input content is a Year, pick from the dropdown list. */
  YearPicker = "YearPicker",
  /** The input content is a single result seleted from the options. */
  SingleSelection = "SingleSelection",
  /** The input content is a single result seleted from the dropdown options. */
  SingleSelectDropdown = "SingleSelectDropdown",
  /** The input content are multiple results seleted from the checkboxes. */
  MultiSelectCheckbox = "MultiSelectCheckbox",
  /** The input content are multiple results seleted from the dropdown options. */
  MultiSelectDropdown = "MultiSelectDropdown",
  /** The input content are result seleted from the custom dropdown options. */
  MultiSelectDropdownCustom = "MultiSelectDropdownCustom",
  /** The input content is a group of answers. */
  Group = "Group",
  /** The input content is a uploaded file. */
  Upload = "Upload",
}

/**
 * Question input type. \
 * {@link KnownInputType} can be used interchangeably with InputType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: The input type is a text box. \
 * **Text**: The input content is text string. \
 * **Email**: The input content should be an email address. \
 * **MultilineText**: The input content should be multiline text. \
 * **Url**: The input content should be a URL. \
 * **Number**: The input content should be a number. \
 * **Boolean**: The input content should be a boolean. \
 * **Telephone**: The input content should be a telephone number. \
 * **YesNoNa**: The input content should be Yes, No or Na. \
 * **Date**: The input content should be a date. \
 * **YearPicker**: The input content is a Year, pick from the dropdown list. \
 * **SingleSelection**: The input content is a single result seleted from the options. \
 * **SingleSelectDropdown**: The input content is a single result seleted from the dropdown options. \
 * **MultiSelectCheckbox**: The input content are multiple results seleted from the checkboxes. \
 * **MultiSelectDropdown**: The input content are multiple results seleted from the dropdown options. \
 * **MultiSelectDropdownCustom**: The input content are result seleted from the custom dropdown options. \
 * **Group**: The input content is a group of answers. \
 * **Upload**: The input content is a uploaded file.
 */
export type InputType = string;

/** Scoping question rule. */
export enum KnownRule {
  /** The question is required to answer. */
  Required = "Required",
  /** The question answer length is limited. */
  CharLength = "CharLength",
  /** The question answer should be an Url. */
  Url = "Url",
  /** The question answer should be Urls. */
  Urls = "Urls",
  /** The question answer should be domains. */
  Domains = "Domains",
  /** The question answer should be a UsPrivacyShield. */
  USPrivacyShield = "USPrivacyShield",
  /** The question answer should be a PublicSOX. */
  PublicSOX = "PublicSOX",
  /** The question answer should be a CreditCardPCI. */
  CreditCardPCI = "CreditCardPCI",
  /** The question answer should be an AzureApplication. */
  AzureApplication = "AzureApplication",
  /** The question answer should be a valid guid. */
  ValidGuid = "ValidGuid",
  /** The question answer should be publisher verification. */
  PublisherVerification = "PublisherVerification",
  /** The question answer should be dynamic dropdown. */
  DynamicDropdown = "DynamicDropdown",
  /** The question answer should prevent non-english char. */
  PreventNonEnglishChar = "PreventNonEnglishChar",
  /** The question answer should be a valid email. */
  ValidEmail = "ValidEmail",
}

/**
 * Scoping question rule. \
 * {@link KnownRule} can be used interchangeably with Rule,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Required**: The question is required to answer. \
 * **CharLength**: The question answer length is limited. \
 * **Url**: The question answer should be an Url. \
 * **Urls**: The question answer should be Urls. \
 * **Domains**: The question answer should be domains. \
 * **USPrivacyShield**: The question answer should be a UsPrivacyShield. \
 * **PublicSOX**: The question answer should be a PublicSOX. \
 * **CreditCardPCI**: The question answer should be a CreditCardPCI. \
 * **AzureApplication**: The question answer should be an AzureApplication. \
 * **ValidGuid**: The question answer should be a valid guid. \
 * **PublisherVerification**: The question answer should be publisher verification. \
 * **DynamicDropdown**: The question answer should be dynamic dropdown. \
 * **PreventNonEnglishChar**: The question answer should prevent non-english char. \
 * **ValidEmail**: The question answer should be a valid email.
 */
export type Rule = string;

/** Report health status verification result. */
export interface ReportVerificationResult {
  /** Indicates whether the report verification action is Succeeded or Failed. */
  readonly result?: Result;
  /** If the report verification action failed, to indicate the detailed failed reason. */
  readonly reason?: string;
}

export function reportVerificationResultDeserializer(item: any): ReportVerificationResult {
  return {
    result: item["result"],
    reason: item["reason"],
  };
}

/** A class represent an AppComplianceAutomation webhook resource. */
export interface WebhookResource extends ProxyResource {
  /** Webhook property. */
  properties: WebhookProperties;
}

export function webhookResourceSerializer(item: WebhookResource): any {
  return { properties: webhookPropertiesSerializer(item["properties"]) };
}

export function webhookResourceDeserializer(item: any): WebhookResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: webhookPropertiesDeserializer(item["properties"]),
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

export function webhookPropertiesSerializer(item: WebhookProperties): any {
  return {
    status: item["status"],
    sendAllEvents: item["sendAllEvents"],
    events: !item["events"]
      ? item["events"]
      : item["events"].map((p: any) => {
          return p;
        }),
    payloadUrl: item["payloadUrl"],
    contentType: item["contentType"],
    webhookKey: item["webhookKey"],
    updateWebhookKey: item["updateWebhookKey"],
    enableSslVerification: item["enableSslVerification"],
  };
}

export function webhookPropertiesDeserializer(item: any): WebhookProperties {
  return {
    webhookId: item["webhookId"],
    status: item["status"],
    tenantId: item["tenantId"],
    sendAllEvents: item["sendAllEvents"],
    events: !item["events"]
      ? item["events"]
      : item["events"].map((p: any) => {
          return p;
        }),
    payloadUrl: item["payloadUrl"],
    contentType: item["contentType"],
    webhookKey: item["webhookKey"],
    updateWebhookKey: item["updateWebhookKey"],
    webhookKeyEnabled: item["webhookKeyEnabled"],
    enableSslVerification: item["enableSslVerification"],
    deliveryStatus: item["deliveryStatus"],
    provisioningState: item["provisioningState"],
  };
}

/** Webhook status. */
export enum KnownWebhookStatus {
  /** The webhook is enabled. */
  Enabled = "Enabled",
  /** The webhook is disabled. */
  Disabled = "Disabled",
}

/**
 * Webhook status. \
 * {@link KnownWebhookStatus} can be used interchangeably with WebhookStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: The webhook is enabled. \
 * **Disabled**: The webhook is disabled.
 */
export type WebhookStatus = string;

/** whether to send notification under any event. */
export enum KnownSendAllEvents {
  /** Need send notification under any event. */
  True = "true",
  /** No need to send notification under any event. */
  False = "false",
}

/**
 * whether to send notification under any event. \
 * {@link KnownSendAllEvents} can be used interchangeably with SendAllEvents,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Need send notification under any event. \
 * **false**: No need to send notification under any event.
 */
export type SendAllEvents = string;

/** notification event. */
export enum KnownNotificationEvent {
  /** The subscribed report's snapshot is successfully generated. */
  GenerateSnapshotSuccess = "generate_snapshot_success",
  /** The subscribed report's snapshot is failed to generate. */
  GenerateSnapshotFailed = "generate_snapshot_failed",
  /** The subscribed report failed while collecting the assessments. */
  AssessmentFailure = "assessment_failure",
  /** The subscribed report's configuration is changed. */
  ReportConfigurationChanges = "report_configuration_changes",
  /** The subscribed report is deleted. */
  ReportDeletion = "report_deletion",
}

/**
 * notification event. \
 * {@link KnownNotificationEvent} can be used interchangeably with NotificationEvent,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **generate_snapshot_success**: The subscribed report's snapshot is successfully generated. \
 * **generate_snapshot_failed**: The subscribed report's snapshot is failed to generate. \
 * **assessment_failure**: The subscribed report failed while collecting the assessments. \
 * **report_configuration_changes**: The subscribed report's configuration is changed. \
 * **report_deletion**: The subscribed report is deleted.
 */
export type NotificationEvent = string;

/** content type */
export enum KnownContentType {
  /** The content type is application/json. */
  ApplicationJson = "application/json",
}

/**
 * content type \
 * {@link KnownContentType} can be used interchangeably with ContentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **application\/json**: The content type is application\/json.
 */
export type ContentType = string;

/** whether to update webhookKey. */
export enum KnownUpdateWebhookKey {
  /** Need update the webhook key. */
  True = "true",
  /** No need to update the webhook key. */
  False = "false",
}

/**
 * whether to update webhookKey. \
 * {@link KnownUpdateWebhookKey} can be used interchangeably with UpdateWebhookKey,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: Need update the webhook key. \
 * **false**: No need to update the webhook key.
 */
export type UpdateWebhookKey = string;

/** whether webhookKey is enabled. */
export enum KnownWebhookKeyEnabled {
  /** The webhookKey is enabled. */
  True = "true",
  /** The webhookKey is not enabled. */
  False = "false",
}

/**
 * whether webhookKey is enabled. \
 * {@link KnownWebhookKeyEnabled} can be used interchangeably with WebhookKeyEnabled,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: The webhookKey is enabled. \
 * **false**: The webhookKey is not enabled.
 */
export type WebhookKeyEnabled = string;

/** whether to enable ssl verification */
export enum KnownEnableSslVerification {
  /** The ssl verification is enabled. */
  True = "true",
  /** The ssl verification is not enabled. */
  False = "false",
}

/**
 * whether to enable ssl verification \
 * {@link KnownEnableSslVerification} can be used interchangeably with EnableSslVerification,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: The ssl verification is enabled. \
 * **false**: The ssl verification is not enabled.
 */
export type EnableSslVerification = string;

/** webhook deliveryStatus */
export enum KnownDeliveryStatus {
  /** The webhook is delivered successfully. */
  Succeeded = "Succeeded",
  /** The webhook is failed to deliver. */
  Failed = "Failed",
  /** The webhook is not delivered. */
  NotStarted = "NotStarted",
}

/**
 * webhook deliveryStatus \
 * {@link KnownDeliveryStatus} can be used interchangeably with DeliveryStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: The webhook is delivered successfully. \
 * **Failed**: The webhook is failed to deliver. \
 * **NotStarted**: The webhook is not delivered.
 */
export type DeliveryStatus = string;

/** A class represent a AppComplianceAutomation webhook resource update properties. */
export interface WebhookResourcePatch {
  /** Webhook property. */
  properties?: WebhookProperties;
}

export function webhookResourcePatchSerializer(item: WebhookResourcePatch): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : webhookPropertiesSerializer(item["properties"]),
  };
}

/** The response of a WebhookResource list operation. */
export interface _WebhookResourceListResult {
  /** The WebhookResource items on this page */
  value: WebhookResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _webhookResourceListResultDeserializer(item: any): _WebhookResourceListResult {
  return {
    value: webhookResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function webhookResourceArraySerializer(result: Array<WebhookResource>): any[] {
  return result.map((item) => {
    return webhookResourceSerializer(item);
  });
}

export function webhookResourceArrayDeserializer(result: Array<WebhookResource>): any[] {
  return result.map((item) => {
    return webhookResourceDeserializer(item);
  });
}

/** A class represent a AppComplianceAutomation snapshot resource. */
export interface SnapshotResource extends ProxyResource {
  /** Snapshot's property. */
  properties?: SnapshotProperties;
}

export function snapshotResourceDeserializer(item: any): SnapshotResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : snapshotPropertiesDeserializer(item["properties"]),
  };
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

export function snapshotPropertiesDeserializer(item: any): SnapshotProperties {
  return {
    snapshotName: item["snapshotName"],
    createdAt: !item["createdAt"] ? item["createdAt"] : new Date(item["createdAt"]),
    provisioningState: item["provisioningState"],
    reportProperties: !item["reportProperties"]
      ? item["reportProperties"]
      : reportPropertiesDeserializer(item["reportProperties"]),
    reportSystemData: !item["reportSystemData"]
      ? item["reportSystemData"]
      : systemDataDeserializer(item["reportSystemData"]),
    complianceResults: !item["complianceResults"]
      ? item["complianceResults"]
      : complianceResultArrayDeserializer(item["complianceResults"]),
  };
}

export function complianceResultArrayDeserializer(result: Array<ComplianceResult>): any[] {
  return result.map((item) => {
    return complianceResultDeserializer(item);
  });
}

/** A class represent the compliance result. */
export interface ComplianceResult {
  /** The name of the compliance. e.g. "M365" */
  readonly complianceName?: string;
  /** List of categories. */
  readonly categories?: Category[];
}

export function complianceResultDeserializer(item: any): ComplianceResult {
  return {
    complianceName: item["complianceName"],
    categories: !item["categories"]
      ? item["categories"]
      : categoryArrayDeserializer(item["categories"]),
  };
}

export function categoryArrayDeserializer(result: Array<Category>): any[] {
  return result.map((item) => {
    return categoryDeserializer(item);
  });
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

export function categoryDeserializer(item: any): Category {
  return {
    categoryName: item["categoryName"],
    categoryStatus: item["categoryStatus"],
    controlFamilies: !item["controlFamilies"]
      ? item["controlFamilies"]
      : controlFamilyArrayDeserializer(item["controlFamilies"]),
  };
}

/** Indicates the category status. */
export enum KnownCategoryStatus {
  /** The category is passed. */
  Passed = "Passed",
  /** The category is failed. */
  Failed = "Failed",
  /** The category is not applicable. */
  NotApplicable = "NotApplicable",
  /** The category is pending for approval. */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the category status. \
 * {@link KnownCategoryStatus} can be used interchangeably with CategoryStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed**: The category is passed. \
 * **Failed**: The category is failed. \
 * **NotApplicable**: The category is not applicable. \
 * **PendingApproval**: The category is pending for approval.
 */
export type CategoryStatus = string;

export function controlFamilyArrayDeserializer(result: Array<ControlFamily>): any[] {
  return result.map((item) => {
    return controlFamilyDeserializer(item);
  });
}

/** A class represent the control family. */
export interface ControlFamily {
  /** The name of the control family. e.g. "Malware Protection - Anti-Virus" */
  readonly controlFamilyName?: string;
  /** The control family status */
  readonly controlFamilyStatus?: ControlFamilyStatus;
  /** List of controls. */
  readonly controls?: Control[];
}

export function controlFamilyDeserializer(item: any): ControlFamily {
  return {
    controlFamilyName: item["controlFamilyName"],
    controlFamilyStatus: item["controlFamilyStatus"],
    controls: !item["controls"] ? item["controls"] : controlArrayDeserializer(item["controls"]),
  };
}

/** Indicates the control family status. */
export enum KnownControlFamilyStatus {
  /** The control family is passed. */
  Passed = "Passed",
  /** The control family is failed. */
  Failed = "Failed",
  /** The control family is not applicable. */
  NotApplicable = "NotApplicable",
  /** The control family is pending for approval. */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the control family status. \
 * {@link KnownControlFamilyStatus} can be used interchangeably with ControlFamilyStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed**: The control family is passed. \
 * **Failed**: The control family is failed. \
 * **NotApplicable**: The control family is not applicable. \
 * **PendingApproval**: The control family is pending for approval.
 */
export type ControlFamilyStatus = string;

export function controlArrayDeserializer(result: Array<Control>): any[] {
  return result.map((item) => {
    return controlDeserializer(item);
  });
}

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

export function controlDeserializer(item: any): Control {
  return {
    controlId: item["controlId"],
    controlName: item["controlName"],
    controlFullName: item["controlFullName"],
    controlDescription: item["controlDescription"],
    controlDescriptionHyperLink: item["controlDescriptionHyperLink"],
    controlStatus: item["controlStatus"],
    responsibilities: !item["responsibilities"]
      ? item["responsibilities"]
      : responsibilityArrayDeserializer(item["responsibilities"]),
  };
}

/** Indicates the control status. */
export enum KnownControlStatus {
  /** The control is passed. */
  Passed = "Passed",
  /** The control is failed. */
  Failed = "Failed",
  /** The control is not applicable. */
  NotApplicable = "NotApplicable",
  /** The control is pending for approval. */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the control status. \
 * {@link KnownControlStatus} can be used interchangeably with ControlStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed**: The control is passed. \
 * **Failed**: The control is failed. \
 * **NotApplicable**: The control is not applicable. \
 * **PendingApproval**: The control is pending for approval.
 */
export type ControlStatus = string;

export function responsibilityArrayDeserializer(result: Array<Responsibility>): any[] {
  return result.map((item) => {
    return responsibilityDeserializer(item);
  });
}

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

export function responsibilityDeserializer(item: any): Responsibility {
  return {
    responsibilityId: item["responsibilityId"],
    responsibilityTitle: item["responsibilityTitle"],
    responsibilityDescription: item["responsibilityDescription"],
    responsibilityType: item["responsibilityType"],
    responsibilitySeverity: item["responsibilitySeverity"],
    responsibilityStatus: item["responsibilityStatus"],
    responsibilityEnvironment: item["responsibilityEnvironment"],
    failedResourceCount: item["failedResourceCount"],
    totalResourceCount: item["totalResourceCount"],
    resourceList: !item["resourceList"]
      ? item["resourceList"]
      : responsibilityResourceArrayDeserializer(item["resourceList"]),
    recommendationList: !item["recommendationList"]
      ? item["recommendationList"]
      : recommendationArrayDeserializer(item["recommendationList"]),
    guidance: item["guidance"],
    justification: item["justification"],
    evidenceFiles: !item["evidenceFiles"]
      ? item["evidenceFiles"]
      : item["evidenceFiles"].map((p: any) => {
          return p;
        }),
  };
}

/** Indicates the customer responsibility type. */
export enum KnownResponsibilityType {
  /** The responsibility is automated. */
  Automated = "Automated",
  /** The responsibility is scoped manual. */
  ScopedManual = "ScopedManual",
  /** The responsibility is manual. */
  Manual = "Manual",
}

/**
 * Indicates the customer responsibility type. \
 * {@link KnownResponsibilityType} can be used interchangeably with ResponsibilityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Automated**: The responsibility is automated. \
 * **ScopedManual**: The responsibility is scoped manual. \
 * **Manual**: The responsibility is manual.
 */
export type ResponsibilityType = string;

/** Indicates the customer responsibility severity. */
export enum KnownResponsibilitySeverity {
  /** The responsibility is high severity. */
  High = "High",
  /** The responsibility is medium severity. */
  Medium = "Medium",
  /** The responsibility is low severity. */
  Low = "Low",
}

/**
 * Indicates the customer responsibility severity. \
 * {@link KnownResponsibilitySeverity} can be used interchangeably with ResponsibilitySeverity,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **High**: The responsibility is high severity. \
 * **Medium**: The responsibility is medium severity. \
 * **Low**: The responsibility is low severity.
 */
export type ResponsibilitySeverity = string;

/** Indicates the customer responsibility status. */
export enum KnownResponsibilityStatus {
  /** The responsibility is passed. */
  Passed = "Passed",
  /** The responsibility is failed. */
  Failed = "Failed",
  /** The responsibility is not applicable. */
  NotApplicable = "NotApplicable",
  /** The responsibility is pending for approval. */
  PendingApproval = "PendingApproval",
}

/**
 * Indicates the customer responsibility status. \
 * {@link KnownResponsibilityStatus} can be used interchangeably with ResponsibilityStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Passed**: The responsibility is passed. \
 * **Failed**: The responsibility is failed. \
 * **NotApplicable**: The responsibility is not applicable. \
 * **PendingApproval**: The responsibility is pending for approval.
 */
export type ResponsibilityStatus = string;

/** Indicates the customer responsibility supported cloud environment. */
export enum KnownResponsibilityEnvironment {
  /** The responsibility is supported in Azure. */
  Azure = "Azure",
  /** The responsibility is supported in AWS. */
  AWS = "AWS",
  /** The responsibility is supported in GCP. */
  GCP = "GCP",
  /** The responsibility is general requirement of all environment. */
  General = "General",
}

/**
 * Indicates the customer responsibility supported cloud environment. \
 * {@link KnownResponsibilityEnvironment} can be used interchangeably with ResponsibilityEnvironment,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Azure**: The responsibility is supported in Azure. \
 * **AWS**: The responsibility is supported in AWS. \
 * **GCP**: The responsibility is supported in GCP. \
 * **General**: The responsibility is general requirement of all environment.
 */
export type ResponsibilityEnvironment = string;

export function responsibilityResourceArrayDeserializer(
  result: Array<ResponsibilityResource>,
): any[] {
  return result.map((item) => {
    return responsibilityResourceDeserializer(item);
  });
}

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

export function responsibilityResourceDeserializer(item: any): ResponsibilityResource {
  return {
    resourceId: item["resourceId"],
    accountId: item["accountId"],
    resourceType: item["resourceType"],
    resourceOrigin: item["resourceOrigin"],
    resourceStatus: item["resourceStatus"],
    resourceStatusChangeDate: !item["resourceStatusChangeDate"]
      ? item["resourceStatusChangeDate"]
      : new Date(item["resourceStatusChangeDate"]),
    recommendationIds: !item["recommendationIds"]
      ? item["recommendationIds"]
      : item["recommendationIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Indicates the resource status. */
export enum KnownResourceStatus {
  /** The resource is healthy. */
  Healthy = "Healthy",
  /** The resource is unhealthy. */
  Unhealthy = "Unhealthy",
}

/**
 * Indicates the resource status. \
 * {@link KnownResourceStatus} can be used interchangeably with ResourceStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy**: The resource is healthy. \
 * **Unhealthy**: The resource is unhealthy.
 */
export type ResourceStatus = string;

export function recommendationArrayDeserializer(result: Array<Recommendation>): any[] {
  return result.map((item) => {
    return recommendationDeserializer(item);
  });
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

export function recommendationDeserializer(item: any): Recommendation {
  return {
    recommendationId: item["recommendationId"],
    recommendationShortName: item["recommendationShortName"],
    recommendationSolutions: !item["recommendationSolutions"]
      ? item["recommendationSolutions"]
      : recommendationSolutionArrayDeserializer(item["recommendationSolutions"]),
  };
}

export function recommendationSolutionArrayDeserializer(
  result: Array<RecommendationSolution>,
): any[] {
  return result.map((item) => {
    return recommendationSolutionDeserializer(item);
  });
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

export function recommendationSolutionDeserializer(item: any): RecommendationSolution {
  return {
    recommendationSolutionIndex: item["recommendationSolutionIndex"],
    recommendationSolutionContent: item["recommendationSolutionContent"],
    isRecommendSolution: item["isRecommendSolution"],
  };
}

/** Indicates whether this solution is the recommended. */
export enum KnownIsRecommendSolution {
  /** This solution is the recommended. */
  True = "true",
  /** This solution is not the recommended. */
  False = "false",
}

/**
 * Indicates whether this solution is the recommended. \
 * {@link KnownIsRecommendSolution} can be used interchangeably with IsRecommendSolution,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **true**: This solution is the recommended. \
 * **false**: This solution is not the recommended.
 */
export type IsRecommendSolution = string;

/** The response of a SnapshotResource list operation. */
export interface _SnapshotResourceListResult {
  /** The SnapshotResource items on this page */
  value: SnapshotResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _snapshotResourceListResultDeserializer(item: any): _SnapshotResourceListResult {
  return {
    value: snapshotResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function snapshotResourceArrayDeserializer(result: Array<SnapshotResource>): any[] {
  return result.map((item) => {
    return snapshotResourceDeserializer(item);
  });
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

export function snapshotDownloadRequestSerializer(item: SnapshotDownloadRequest): any {
  return {
    reportCreatorTenantId: item["reportCreatorTenantId"],
    downloadType: item["downloadType"],
    offerGuid: item["offerGuid"],
  };
}

/** Indicates the download type. */
export enum KnownDownloadType {
  /** Download the compliance report. */
  ComplianceReport = "ComplianceReport",
  /** Download the compliance pdf report. */
  CompliancePdfReport = "CompliancePdfReport",
  /** Download the detailed compliance pdf report. */
  ComplianceDetailedPdfReport = "ComplianceDetailedPdfReport",
  /** Download the resource list of the report. */
  ResourceList = "ResourceList",
}

/**
 * Indicates the download type. \
 * {@link KnownDownloadType} can be used interchangeably with DownloadType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ComplianceReport**: Download the compliance report. \
 * **CompliancePdfReport**: Download the compliance pdf report. \
 * **ComplianceDetailedPdfReport**: Download the detailed compliance pdf report. \
 * **ResourceList**: Download the resource list of the report.
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

export function downloadResponseDeserializer(item: any): DownloadResponse {
  return {
    resourceList: !item["resourceList"]
      ? item["resourceList"]
      : resourceItemArrayDeserializer(item["resourceList"]),
    complianceReport: !item["complianceReport"]
      ? item["complianceReport"]
      : complianceReportItemArrayDeserializer(item["complianceReport"]),
    compliancePdfReport: !item["compliancePdfReport"]
      ? item["compliancePdfReport"]
      : downloadResponseCompliancePdfReportDeserializer(item["compliancePdfReport"]),
    complianceDetailedPdfReport: !item["complianceDetailedPdfReport"]
      ? item["complianceDetailedPdfReport"]
      : downloadResponseComplianceDetailedPdfReportDeserializer(
          item["complianceDetailedPdfReport"],
        ),
  };
}

export function resourceItemArrayDeserializer(result: Array<ResourceItem>): any[] {
  return result.map((item) => {
    return resourceItemDeserializer(item);
  });
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

export function resourceItemDeserializer(item: any): ResourceItem {
  return {
    subscriptionId: item["subscriptionId"],
    resourceGroup: item["resourceGroup"],
    resourceType: item["resourceType"],
    resourceId: item["resourceId"],
  };
}

export function complianceReportItemArrayDeserializer(result: Array<ComplianceReportItem>): any[] {
  return result.map((item) => {
    return complianceReportItemDeserializer(item);
  });
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

export function complianceReportItemDeserializer(item: any): ComplianceReportItem {
  return {
    categoryName: item["categoryName"],
    controlFamilyName: item["controlFamilyName"],
    controlId: item["controlId"],
    controlName: item["controlName"],
    controlStatus: item["controlStatus"],
    responsibilityTitle: item["responsibilityTitle"],
    responsibilityDescription: item["responsibilityDescription"],
    resourceId: item["resourceId"],
    resourceType: item["resourceType"],
    resourceOrigin: item["resourceOrigin"],
    resourceStatus: item["resourceStatus"],
    resourceStatusChangeDate: !item["resourceStatusChangeDate"]
      ? item["resourceStatusChangeDate"]
      : new Date(item["resourceStatusChangeDate"]),
  };
}

/** Compliance pdf report */
export interface DownloadResponseCompliancePdfReport {
  /** The uri of compliance pdf report */
  readonly sasUri?: string;
}

export function downloadResponseCompliancePdfReportDeserializer(
  item: any,
): DownloadResponseCompliancePdfReport {
  return {
    sasUri: item["sasUri"],
  };
}

/** The detailed compliance pdf report */
export interface DownloadResponseComplianceDetailedPdfReport {
  /** The uri of detailed compliance pdf report */
  readonly sasUri?: string;
}

export function downloadResponseComplianceDetailedPdfReportDeserializer(
  item: any,
): DownloadResponseComplianceDetailedPdfReport {
  return {
    sasUri: item["sasUri"],
  };
}

/** A class represent an AppComplianceAutomation scoping configuration resource. */
export interface ScopingConfigurationResource extends ProxyResource {
  /** ScopingConfiguration property. */
  properties: ScopingConfigurationProperties;
}

export function scopingConfigurationResourceSerializer(item: ScopingConfigurationResource): any {
  return {
    properties: scopingConfigurationPropertiesSerializer(item["properties"]),
  };
}

export function scopingConfigurationResourceDeserializer(item: any): ScopingConfigurationResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: scopingConfigurationPropertiesDeserializer(item["properties"]),
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
): any {
  return {
    answers: !item["answers"] ? item["answers"] : scopingAnswerArraySerializer(item["answers"]),
  };
}

export function scopingConfigurationPropertiesDeserializer(
  item: any,
): ScopingConfigurationProperties {
  return {
    answers: !item["answers"] ? item["answers"] : scopingAnswerArrayDeserializer(item["answers"]),
    provisioningState: item["provisioningState"],
  };
}

export function scopingAnswerArraySerializer(result: Array<ScopingAnswer>): any[] {
  return result.map((item) => {
    return scopingAnswerSerializer(item);
  });
}

export function scopingAnswerArrayDeserializer(result: Array<ScopingAnswer>): any[] {
  return result.map((item) => {
    return scopingAnswerDeserializer(item);
  });
}

/** Scoping answer. */
export interface ScopingAnswer {
  /** Question id. */
  questionId: string;
  /** Question answer value list. */
  answers: string[];
}

export function scopingAnswerSerializer(item: ScopingAnswer): any {
  return {
    questionId: item["questionId"],
    answers: item["answers"].map((p: any) => {
      return p;
    }),
  };
}

export function scopingAnswerDeserializer(item: any): ScopingAnswer {
  return {
    questionId: item["questionId"],
    answers: item["answers"].map((p: any) => {
      return p;
    }),
  };
}

/** The response of a ScopingConfigurationResource list operation. */
export interface _ScopingConfigurationResourceListResult {
  /** The ScopingConfigurationResource items on this page */
  value: ScopingConfigurationResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _scopingConfigurationResourceListResultDeserializer(
  item: any,
): _ScopingConfigurationResourceListResult {
  return {
    value: scopingConfigurationResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function scopingConfigurationResourceArraySerializer(
  result: Array<ScopingConfigurationResource>,
): any[] {
  return result.map((item) => {
    return scopingConfigurationResourceSerializer(item);
  });
}

export function scopingConfigurationResourceArrayDeserializer(
  result: Array<ScopingConfigurationResource>,
): any[] {
  return result.map((item) => {
    return scopingConfigurationResourceDeserializer(item);
  });
}

/** A class represent an AppComplianceAutomation evidence resource. */
export interface EvidenceResource extends ProxyResource {
  /** Evidence property. */
  properties: EvidenceProperties;
}

export function evidenceResourceSerializer(item: EvidenceResource): any {
  return { properties: evidencePropertiesSerializer(item["properties"]) };
}

export function evidenceResourceDeserializer(item: any): EvidenceResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: evidencePropertiesDeserializer(item["properties"]),
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

export function evidencePropertiesSerializer(item: EvidenceProperties): any {
  return {
    evidenceType: item["evidenceType"],
    filePath: item["filePath"],
    extraData: item["extraData"],
    controlId: item["controlId"],
    responsibilityId: item["responsibilityId"],
  };
}

export function evidencePropertiesDeserializer(item: any): EvidenceProperties {
  return {
    evidenceType: item["evidenceType"],
    filePath: item["filePath"],
    extraData: item["extraData"],
    controlId: item["controlId"],
    responsibilityId: item["responsibilityId"],
    provisioningState: item["provisioningState"],
  };
}

/** Evidence type */
export enum KnownEvidenceType {
  /** The evidence is a file. */
  File = "File",
  /** The evidence auto collected by App Compliance Automation. */
  AutoCollectedEvidence = "AutoCollectedEvidence",
  /** The evidence is data. */
  Data = "Data",
}

/**
 * Evidence type \
 * {@link KnownEvidenceType} can be used interchangeably with EvidenceType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **File**: The evidence is a file. \
 * **AutoCollectedEvidence**: The evidence auto collected by App Compliance Automation. \
 * **Data**: The evidence is data.
 */
export type EvidenceType = string;

/** The response of a EvidenceResource list operation. */
export interface _EvidenceResourceListResult {
  /** The EvidenceResource items on this page */
  value: EvidenceResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _evidenceResourceListResultDeserializer(item: any): _EvidenceResourceListResult {
  return {
    value: evidenceResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function evidenceResourceArraySerializer(result: Array<EvidenceResource>): any[] {
  return result.map((item) => {
    return evidenceResourceSerializer(item);
  });
}

export function evidenceResourceArrayDeserializer(result: Array<EvidenceResource>): any[] {
  return result.map((item) => {
    return evidenceResourceDeserializer(item);
  });
}

/** Evidence file's download request. */
export interface EvidenceFileDownloadRequest {
  /** Tenant id. */
  reportCreatorTenantId?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
}

export function evidenceFileDownloadRequestSerializer(item: EvidenceFileDownloadRequest): any {
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

export function evidenceFileDownloadResponseDeserializer(item: any): EvidenceFileDownloadResponse {
  return {
    evidenceFile: !item["evidenceFile"]
      ? item["evidenceFile"]
      : evidenceFileDownloadResponseEvidenceFileDeserializer(item["evidenceFile"]),
  };
}

/** The uri of evidence file */
export interface EvidenceFileDownloadResponseEvidenceFile {
  /** The url of evidence file */
  readonly url?: string;
}

export function evidenceFileDownloadResponseEvidenceFileDeserializer(
  item: any,
): EvidenceFileDownloadResponseEvidenceFile {
  return {
    url: item["url"],
  };
}

/** A list of REST API operations supported by an Azure Resource Provider. It contains an URL link to get the next set of results. */
export interface _OperationListResult {
  /** The Operation items on this page */
  value: Operation[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _operationListResultDeserializer(item: any): _OperationListResult {
  return {
    value: operationArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function operationArrayDeserializer(result: Array<Operation>): any[] {
  return result.map((item) => {
    return operationDeserializer(item);
  });
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
  readonly actionType?: ActionType;
}

export function operationDeserializer(item: any): Operation {
  return {
    name: item["name"],
    isDataAction: item["isDataAction"],
    display: !item["display"] ? item["display"] : operationDisplayDeserializer(item["display"]),
    origin: item["origin"],
    actionType: item["actionType"],
  };
}

/** Localized display information for and operation. */
export interface OperationDisplay {
  /** The localized friendly form of the resource provider name, e.g. "Microsoft Monitoring Insights" or "Microsoft Compute". */
  readonly provider?: string;
  /** The localized friendly name of the resource type related to this operation. E.g. "Virtual Machines" or "Job Schedule Collections". */
  readonly resource?: string;
  /** The concise, localized friendly name for the operation; suitable for dropdowns. E.g. "Create or Update Virtual Machine", "Restart Virtual Machine". */
  readonly operation?: string;
  /** The short, localized friendly description of the operation; suitable for tool tips and detailed views. */
  readonly description?: string;
}

export function operationDisplayDeserializer(item: any): OperationDisplay {
  return {
    provider: item["provider"],
    resource: item["resource"],
    operation: item["operation"],
    description: item["description"],
  };
}

/** The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" */
export enum KnownOrigin {
  /** Indicates the operation is initiated by a user. */
  User = "user",
  /** Indicates the operation is initiated by a system. */
  System = "system",
  /** Indicates the operation is initiated by a user or system. */
  UserSystem = "user,system",
}

/**
 * The intended executor of the operation; as in Resource Based Access Control (RBAC) and audit logs UX. Default value is "user,system" \
 * {@link KnownOrigin} can be used interchangeably with Origin,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **user**: Indicates the operation is initiated by a user. \
 * **system**: Indicates the operation is initiated by a system. \
 * **user,system**: Indicates the operation is initiated by a user or system.
 */
export type Origin = string;

/** Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. */
export enum KnownActionType {
  /** Actions are for internal-only APIs. */
  Internal = "Internal",
}

/**
 * Extensible enum. Indicates the action type. "Internal" refers to actions that are for internal only APIs. \
 * {@link KnownActionType} can be used interchangeably with ActionType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Internal**: Actions are for internal-only APIs.
 */
export type ActionType = string;

/** Get collection count's request object. */
export interface GetCollectionCountRequest {
  /** The resource type. */
  type?: string;
}

export function getCollectionCountRequestSerializer(item: GetCollectionCountRequest): any {
  return { type: item["type"] };
}

/** The get collection count response. */
export interface GetCollectionCountResponse {
  /** The count of the specified resource. */
  count?: number;
}

export function getCollectionCountResponseDeserializer(item: any): GetCollectionCountResponse {
  return {
    count: item["count"],
  };
}

/** Get overview status request object. */
export interface GetOverviewStatusRequest {
  /** The resource type. */
  type?: string;
}

export function getOverviewStatusRequestSerializer(item: GetOverviewStatusRequest): any {
  return { type: item["type"] };
}

/** The get overview status response. */
export interface GetOverviewStatusResponse {
  /** List of different status items. */
  statusList?: StatusItem[];
}

export function getOverviewStatusResponseDeserializer(item: any): GetOverviewStatusResponse {
  return {
    statusList: !item["statusList"]
      ? item["statusList"]
      : statusItemArrayDeserializer(item["statusList"]),
  };
}

export function statusItemArrayDeserializer(result: Array<StatusItem>): any[] {
  return result.map((item) => {
    return statusItemDeserializer(item);
  });
}

/** Single status. */
export interface StatusItem {
  /** Status name - e.g. "Active", "Failed". */
  statusName?: string;
  /** Status value. e.g. "100", or "100%". */
  statusValue?: string;
}

export function statusItemDeserializer(item: any): StatusItem {
  return {
    statusName: item["statusName"],
    statusValue: item["statusValue"],
  };
}

/** Parameters for onboard operation */
export interface OnboardRequest {
  /** List of subscription ids to be onboarded */
  subscriptionIds: string[];
}

export function onboardRequestSerializer(item: OnboardRequest): any {
  return {
    subscriptionIds: item["subscriptionIds"].map((p: any) => {
      return p;
    }),
  };
}

/** Trigger evaluation request. */
export interface TriggerEvaluationRequest {
  /** List of resource ids to be evaluated */
  resourceIds: string[];
}

export function triggerEvaluationRequestSerializer(item: TriggerEvaluationRequest): any {
  return {
    resourceIds: item["resourceIds"].map((p: any) => {
      return p;
    }),
  };
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsRequest {
  /** List of subscription ids to be query. If the list is null or empty, the API will query all the subscriptions of the user. */
  subscriptionIds?: string[];
}

export function listInUseStorageAccountsRequestSerializer(
  item: ListInUseStorageAccountsRequest,
): any {
  return {
    subscriptionIds: !item["subscriptionIds"]
      ? item["subscriptionIds"]
      : item["subscriptionIds"].map((p: any) => {
          return p;
        }),
  };
}

/** Parameters for listing in use storage accounts operation. If subscription list is null, it will check the user's all subscriptions. */
export interface ListInUseStorageAccountsResponse {
  /** The storage account list which in use in related reports. */
  storageAccountList?: StorageInfo[];
}

export function listInUseStorageAccountsResponseDeserializer(
  item: any,
): ListInUseStorageAccountsResponse {
  return {
    storageAccountList: !item["storageAccountList"]
      ? item["storageAccountList"]
      : storageInfoArrayDeserializer(item["storageAccountList"]),
  };
}

export function storageInfoArraySerializer(result: Array<StorageInfo>): any[] {
  return result.map((item) => {
    return storageInfoSerializer(item);
  });
}

export function storageInfoArrayDeserializer(result: Array<StorageInfo>): any[] {
  return result.map((item) => {
    return storageInfoDeserializer(item);
  });
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2024-06-27 API version. */
  V20240627 = "2024-06-27",
}
