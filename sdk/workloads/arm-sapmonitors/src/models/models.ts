// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Concrete proxy resource types can be created by aliasing this type using a specific property type. */
export interface AlertTemplate extends ProxyResource {
  /** Alert Template properties */
  properties?: AlertTemplateProperties;
}

export function alertTemplateDeserializer(item: any): AlertTemplate {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : alertTemplatePropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of an Alert Template for SAP monitor. */
export interface AlertTemplateProperties {
  /** Defines the SAP monitor Alert Template errors. */
  readonly errors?: ErrorDetail;
  /** State of provisioning of the Alert Template. */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /** Display name of the alert template. */
  templateDisplayName?: string;
  /** The provider type for alert template. For example, the value can be SapHana. */
  providerType?: string;
  /** Description of the template. */
  description?: string;
  /** Severity of the alert. Should be an integer between [0-4]. Value of 0 is most severe and value of 4 is least severe. */
  severity?: number;
  /** Query associated with the alert template. */
  query?: string;
  /** Operator used for threshold comparison. */
  thresholdOperator?: ConditionalOperator;
  /** Default threshold value. */
  defaultThreshold?: number;
  /** Minimum possible Default Threshold Value Associated with the Alert Template. */
  lowerBound?: number;
  /** Maximum possible Default Threshold Value Associated with the Alert Template. */
  upperBound?: number;
  /** Input option for the default threshold. */
  defaultThresholdInputOption?: DefaultThresholdInputOption;
  /** Unit of the alert. */
  alertUnit?: string;
  /** Describes the properties for metric measurement in alerts template. */
  metricMeasurement?: AlertTemplateMetricMeasurement;
  /** Describes the Query Input Parameter properties in alerts template. */
  queryInputParameters?: AlertTemplateQueryInputParameter[];
}

export function alertTemplatePropertiesDeserializer(
  item: any,
): AlertTemplateProperties {
  return {
    errors: !item["errors"]
      ? item["errors"]
      : errorDetailDeserializer(item["errors"]),
    provisioningState: item["provisioningState"],
    templateDisplayName: item["templateDisplayName"],
    providerType: item["providerType"],
    description: item["description"],
    severity: item["severity"],
    query: item["query"],
    thresholdOperator: item["thresholdOperator"],
    defaultThreshold: item["defaultThreshold"],
    lowerBound: item["lowerBound"],
    upperBound: item["upperBound"],
    defaultThresholdInputOption: item["defaultThresholdInputOption"],
    alertUnit: item["alertUnit"],
    metricMeasurement: !item["metricMeasurement"]
      ? item["metricMeasurement"]
      : alertTemplateMetricMeasurementDeserializer(item["metricMeasurement"]),
    queryInputParameters: !item["queryInputParameters"]
      ? item["queryInputParameters"]
      : alertTemplateQueryInputParameterArrayDeserializer(
          item["queryInputParameters"],
        ),
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
    details: !item["details"]
      ? item["details"]
      : errorDetailArrayDeserializer(item["details"]),
    additionalInfo: !item["additionalInfo"]
      ? item["additionalInfo"]
      : errorAdditionalInfoArrayDeserializer(item["additionalInfo"]),
  };
}

export function errorDetailArrayDeserializer(
  result: Array<ErrorDetail>,
): any[] {
  return result.map((item) => {
    return errorDetailDeserializer(item);
  });
}

export function errorAdditionalInfoArrayDeserializer(
  result: Array<ErrorAdditionalInfo>,
): any[] {
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

export function errorAdditionalInfoDeserializer(
  item: any,
): ErrorAdditionalInfo {
  return {
    type: item["type"],
    info: !item["info"]
      ? item["info"]
      : _errorAdditionalInfoInfoDeserializer(item["info"]),
  };
}

/** model interface _ErrorAdditionalInfoInfo */
export interface _ErrorAdditionalInfoInfo {}

export function _errorAdditionalInfoInfoDeserializer(
  item: any,
): _ErrorAdditionalInfoInfo {
  return item;
}

/** State of provisioning of the SAP monitor. */
export enum KnownWorkloadMonitorProvisioningState {
  /** The resource request has been accepted. */
  Accepted = "Accepted",
  /** The resource is being created. */
  Creating = "Creating",
  /** The resource is being updated. */
  Updating = "Updating",
  /** The resource creation failed. */
  Failed = "Failed",
  /** The resource creation has succeeded. */
  Succeeded = "Succeeded",
  /** The resource is being deleted. */
  Deleting = "Deleting",
  /** The resource is being migrated. */
  Migrating = "Migrating",
  /** The resource operation was canceled. */
  Canceled = "Canceled",
}

/**
 * State of provisioning of the SAP monitor. \
 * {@link KnownWorkloadMonitorProvisioningState} can be used interchangeably with WorkloadMonitorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted**: The resource request has been accepted. \
 * **Creating**: The resource is being created. \
 * **Updating**: The resource is being updated. \
 * **Failed**: The resource creation failed. \
 * **Succeeded**: The resource creation has succeeded. \
 * **Deleting**: The resource is being deleted. \
 * **Migrating**: The resource is being migrated. \
 * **Canceled**: The resource operation was canceled.
 */
export type WorkloadMonitorProvisioningState = string;

/** Result Condition Evaluation Criteria */
export enum KnownConditionalOperator {
  /** The value is less than the specified value. */
  LessThan = "LessThan",
  /** The value is greater than the specified value. */
  GreaterThan = "GreaterThan",
  /** The value is equal to the specified value. */
  Equal = "Equal",
  /** The value is greater than or equal to the specified value. */
  GreaterThanOrEqual = "GreaterThanOrEqual",
  /** The value is less than or equal to the specified value. */
  LessThanOrEqual = "LessThanOrEqual",
}

/**
 * Result Condition Evaluation Criteria \
 * {@link KnownConditionalOperator} can be used interchangeably with ConditionalOperator,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LessThan**: The value is less than the specified value. \
 * **GreaterThan**: The value is greater than the specified value. \
 * **Equal**: The value is equal to the specified value. \
 * **GreaterThanOrEqual**: The value is greater than or equal to the specified value. \
 * **LessThanOrEqual**: The value is less than or equal to the specified value.
 */
export type ConditionalOperator = string;

/** Is input required for Default Threshold Value Associated with the Alert Template */
export enum KnownDefaultThresholdInputOption {
  /** The default threshold value is required. */
  Required = "Required",
  /** The default threshold value is not required. */
  NotRequired = "NotRequired",
  /** The default threshold value is optional. */
  Optional = "Optional",
}

/**
 * Is input required for Default Threshold Value Associated with the Alert Template \
 * {@link KnownDefaultThresholdInputOption} can be used interchangeably with DefaultThresholdInputOption,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Required**: The default threshold value is required. \
 * **NotRequired**: The default threshold value is not required. \
 * **Optional**: The default threshold value is optional.
 */
export type DefaultThresholdInputOption = string;

/** Defines the Alert Template MetricMeasurement Properties. */
export interface AlertTemplateMetricMeasurement {
  /** Operator used for threshold comparison. */
  thresholdOperator?: ConditionalOperator;
  /** The Threshold Value Associated with the Alert Template for Metric Measurement. */
  threshold?: number;
  /** Metric Trigger Type Associated with the Alert Template for Metric Measurement. */
  metricTriggerType?: AlertTemplateMetricTriggerType;
  /** Metric Column Associated with the Alert Template for Metric Measurement. */
  metricColumn?: string;
  /** Frequency (mins) value Associated with the Alert Template for Metric Measurement. */
  frequencyInMinutes?: number;
  /** Time Window (mins) Value Associated with the Alert Template for Metric Measurement. */
  timeWindowInMinutes?: number;
}

export function alertTemplateMetricMeasurementDeserializer(
  item: any,
): AlertTemplateMetricMeasurement {
  return {
    thresholdOperator: item["thresholdOperator"],
    threshold: item["threshold"],
    metricTriggerType: item["metricTriggerType"],
    metricColumn: item["metricColumn"],
    frequencyInMinutes: item["frequencyInMinutes"],
    timeWindowInMinutes: item["timeWindowInMinutes"],
  };
}

/** Metric Trigger Type Associated with the Alert Template for Metric Measurement */
export enum KnownAlertTemplateMetricTriggerType {
  /** The metric trigger type is consecutive. */
  Consecutive = "Consecutive",
  /** The metric trigger type is total. */
  Total = "Total",
}

/**
 * Metric Trigger Type Associated with the Alert Template for Metric Measurement \
 * {@link KnownAlertTemplateMetricTriggerType} can be used interchangeably with AlertTemplateMetricTriggerType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Consecutive**: The metric trigger type is consecutive. \
 * **Total**: The metric trigger type is total.
 */
export type AlertTemplateMetricTriggerType = string;

export function alertTemplateQueryInputParameterArrayDeserializer(
  result: Array<AlertTemplateQueryInputParameter>,
): any[] {
  return result.map((item) => {
    return alertTemplateQueryInputParameterDeserializer(item);
  });
}

/** Describes the Query Input Parameter properties in alerts template. */
export interface AlertTemplateQueryInputParameter {
  /** Name of the Query Input Parameter */
  name?: string;
  /** Type of the Query Input Parameter */
  type?: AlertTemplateParameterType;
  /** Description of the Query Input Parameter */
  description?: string;
  /** Default Value of the Query Input Parameter */
  defaultValue?: string;
  /** Log Analytics query associated with the parameter. */
  laQuery?: string;
  /** Selection mode for the parameter. */
  selectionMode?: AlertTemplateSelectionMode;
  /** Display Name of the Query Input Parameter. */
  displayName?: string;
}

export function alertTemplateQueryInputParameterDeserializer(
  item: any,
): AlertTemplateQueryInputParameter {
  return {
    name: item["name"],
    type: item["type"],
    description: item["description"],
    defaultValue: item["defaultValue"],
    laQuery: item["laQuery"],
    selectionMode: item["selectionMode"],
    displayName: item["displayName"],
  };
}

/** Type of the Query Input Parameter */
export enum KnownAlertTemplateParameterType {
  /** Log Analytics query parameter */
  LogAnalyticsQuery = "LogAnalyticsQuery",
  /** Provider property parameter */
  ProviderProperty = "ProviderProperty",
  /** Custom input parameter */
  CustomInput = "CustomInput",
}

/**
 * Type of the Query Input Parameter \
 * {@link KnownAlertTemplateParameterType} can be used interchangeably with AlertTemplateParameterType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **LogAnalyticsQuery**: Log Analytics query parameter \
 * **ProviderProperty**: Provider property parameter \
 * **CustomInput**: Custom input parameter
 */
export type AlertTemplateParameterType = string;

/** Selection Mode of the Query Input Parameter */
export enum KnownAlertTemplateSelectionMode {
  /** The selection mode is single. */
  Single = "Single",
  /** The selection mode is Multiple. */
  Multiple = "Multiple",
}

/**
 * Selection Mode of the Query Input Parameter \
 * {@link KnownAlertTemplateSelectionMode} can be used interchangeably with AlertTemplateSelectionMode,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Single**: The selection mode is single. \
 * **Multiple**: The selection mode is Multiple.
 */
export type AlertTemplateSelectionMode = string;

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
    createdAt: !item["createdAt"]
      ? item["createdAt"]
      : new Date(item["createdAt"]),
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
    error: !item["error"]
      ? item["error"]
      : errorDetailDeserializer(item["error"]),
  };
}

/** The response of a AlertTemplate list operation. */
export interface _AlertTemplateListResult {
  /** The AlertTemplate items on this page */
  value: AlertTemplate[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _alertTemplateListResultDeserializer(
  item: any,
): _AlertTemplateListResult {
  return {
    value: alertTemplateArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function alertTemplateArrayDeserializer(
  result: Array<AlertTemplate>,
): any[] {
  return result.map((item) => {
    return alertTemplateDeserializer(item);
  });
}

/** A alert associated with SAP monitor. */
export interface Alert extends ProxyResource {
  /** Alert Instance properties */
  properties?: AlertProperties;
}

export function alertSerializer(item: Alert): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : alertPropertiesSerializer(item["properties"]),
  };
}

export function alertDeserializer(item: any): Alert {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : alertPropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of an Alert for SAP monitor. */
export interface AlertProperties {
  /** Defines the alert instance errors. */
  readonly errors?: ErrorDetail;
  /** ID of the alert rule resource created. */
  readonly alertRuleResourceId?: string;
  /** Name of the alert template from which it was created. */
  templateName?: string;
  /** The provider type for alert. For example, the value can be SapHana. */
  providerType?: string;
  /** Name of provider instances associated with the alert. */
  providerNames?: string[];
  /** Describes the properties of an alert. */
  alertRuleProperties?: AlertRuleProperties;
  /** State of provisioning of the alert instance */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
}

export function alertPropertiesSerializer(item: AlertProperties): any {
  return {
    templateName: item["templateName"],
    providerType: item["providerType"],
    providerNames: !item["providerNames"]
      ? item["providerNames"]
      : item["providerNames"].map((p: any) => {
          return p;
        }),
    alertRuleProperties: !item["alertRuleProperties"]
      ? item["alertRuleProperties"]
      : alertRulePropertiesSerializer(item["alertRuleProperties"]),
  };
}

export function alertPropertiesDeserializer(item: any): AlertProperties {
  return {
    errors: !item["errors"]
      ? item["errors"]
      : errorDetailDeserializer(item["errors"]),
    alertRuleResourceId: item["alertRuleResourceId"],
    templateName: item["templateName"],
    providerType: item["providerType"],
    providerNames: !item["providerNames"]
      ? item["providerNames"]
      : item["providerNames"].map((p: any) => {
          return p;
        }),
    alertRuleProperties: !item["alertRuleProperties"]
      ? item["alertRuleProperties"]
      : alertRulePropertiesDeserializer(item["alertRuleProperties"]),
    provisioningState: item["provisioningState"],
  };
}

/** Describes the properties of an alert. */
export interface AlertRuleProperties {
  /** Indicates whether the alert is in an enabled state. */
  status?: AlertRuleStatus;
  /** Severity of the alert. Should be an integer between [0-4]. Value of 0 is severest. */
  severity?: number;
  /** Action Group resource Ids to invoke when the alert fires */
  actionGroups?: string[];
  /** The threshold of the alert. */
  threshold?: number;
  /** The threshold operator of the alert. */
  thresholdOperator?: ConditionalOperator;
  /** The period of time on which the Alert query will be executed. */
  windowSize?: number;
  /** How often the scheduled query rule is evaluated. */
  evaluationFrequency?: number;
  /** The number of failing periods to trigger an alert. */
  failingPeriodsToAlert?: number;
  /** The operator for failing periods. */
  failingPeriodsOperator?: ConditionalOperator;
  /** Mute actions for the chosen period of time after the alert is fired. */
  muteActionsDuration?: number;
  /** The value that indicates whether the alert should be automatically resolved or not. The default is Disable. */
  autoMitigate?: AlertAutoMitigate;
  /** Evaluation of metric on a particular column. */
  dimension?: string;
  /** The alert query parameters. */
  alertQueryParameters?: AlertQueryParameter[];
}

export function alertRulePropertiesSerializer(item: AlertRuleProperties): any {
  return {
    status: item["status"],
    severity: item["severity"],
    actionGroups: !item["actionGroups"]
      ? item["actionGroups"]
      : item["actionGroups"].map((p: any) => {
          return p;
        }),
    threshold: item["threshold"],
    thresholdOperator: item["thresholdOperator"],
    windowSize: item["windowSize"],
    evaluationFrequency: item["evaluationFrequency"],
    failingPeriodsToAlert: item["failingPeriodsToAlert"],
    failingPeriodsOperator: item["failingPeriodsOperator"],
    muteActionsDuration: item["muteActionsDuration"],
    autoMitigate: item["autoMitigate"],
    dimension: item["dimension"],
    alertQueryParameters: !item["alertQueryParameters"]
      ? item["alertQueryParameters"]
      : alertQueryParameterArraySerializer(item["alertQueryParameters"]),
  };
}

export function alertRulePropertiesDeserializer(
  item: any,
): AlertRuleProperties {
  return {
    status: item["status"],
    severity: item["severity"],
    actionGroups: !item["actionGroups"]
      ? item["actionGroups"]
      : item["actionGroups"].map((p: any) => {
          return p;
        }),
    threshold: item["threshold"],
    thresholdOperator: item["thresholdOperator"],
    windowSize: item["windowSize"],
    evaluationFrequency: item["evaluationFrequency"],
    failingPeriodsToAlert: item["failingPeriodsToAlert"],
    failingPeriodsOperator: item["failingPeriodsOperator"],
    muteActionsDuration: item["muteActionsDuration"],
    autoMitigate: item["autoMitigate"],
    dimension: item["dimension"],
    alertQueryParameters: !item["alertQueryParameters"]
      ? item["alertQueryParameters"]
      : alertQueryParameterArrayDeserializer(item["alertQueryParameters"]),
  };
}

/** The value which indicates whether this scheduled query rule is enabled. Value should be enabled or disabled */
export enum KnownAlertRuleStatus {
  /** The scheduled query rule is enabled */
  Enabled = "Enabled",
  /** The scheduled query rule is disabled */
  Disabled = "Disabled",
}

/**
 * The value which indicates whether this scheduled query rule is enabled. Value should be enabled or disabled \
 * {@link KnownAlertRuleStatus} can be used interchangeably with AlertRuleStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enabled**: The scheduled query rule is enabled \
 * **Disabled**: The scheduled query rule is disabled
 */
export type AlertRuleStatus = string;

/** The value that indicates whether the alert should be automatically resolved or not. The default is Disable. */
export enum KnownAlertAutoMitigate {
  /** The alert should be automatically resolved. */
  Enable = "Enable",
  /** The alert should not be automatically resolved. */
  Disable = "Disable",
}

/**
 * The value that indicates whether the alert should be automatically resolved or not. The default is Disable. \
 * {@link KnownAlertAutoMitigate} can be used interchangeably with AlertAutoMitigate,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Enable**: The alert should be automatically resolved. \
 * **Disable**: The alert should not be automatically resolved.
 */
export type AlertAutoMitigate = string;

export function alertQueryParameterArraySerializer(
  result: Array<AlertQueryParameter>,
): any[] {
  return result.map((item) => {
    return alertQueryParameterSerializer(item);
  });
}

export function alertQueryParameterArrayDeserializer(
  result: Array<AlertQueryParameter>,
): any[] {
  return result.map((item) => {
    return alertQueryParameterDeserializer(item);
  });
}

/** Defines the Alert Query Parameter. */
export interface AlertQueryParameter {
  /** The name of the alert query parameter. */
  name?: string;
  /** The value of the alert query parameter. */
  value?: string;
}

export function alertQueryParameterSerializer(item: AlertQueryParameter): any {
  return { name: item["name"], value: item["value"] };
}

export function alertQueryParameterDeserializer(
  item: any,
): AlertQueryParameter {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** The response of a Alert list operation. */
export interface _AlertListResult {
  /** The Alert items on this page */
  value: Alert[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _alertListResultDeserializer(item: any): _AlertListResult {
  return {
    value: alertArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function alertArraySerializer(result: Array<Alert>): any[] {
  return result.map((item) => {
    return alertSerializer(item);
  });
}

export function alertArrayDeserializer(result: Array<Alert>): any[] {
  return result.map((item) => {
    return alertDeserializer(item);
  });
}

/** configuration associated with SAP Landscape Monitor Dashboard. */
export interface SapLandscapeMonitorResource extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: SapLandscapeMonitorProperties;
}

export function sapLandscapeMonitorResourceSerializer(
  item: SapLandscapeMonitorResource,
): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : sapLandscapeMonitorPropertiesSerializer(item["properties"]),
  };
}

export function sapLandscapeMonitorResourceDeserializer(
  item: any,
): SapLandscapeMonitorResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : sapLandscapeMonitorPropertiesDeserializer(item["properties"]),
  };
}

/** Gets or sets the properties for Sap Landscape Monitor Dashboard. */
export interface SapLandscapeMonitorProperties {
  /** State of provisioning of the SAP monitor. */
  readonly provisioningState?: SapLandscapeMonitorProvisioningState;
  /** Gets or sets the SID groupings by landscape and Environment. */
  grouping?: SapLandscapeMonitorPropertiesGrouping;
  /** Gets or sets the list Top Metric Thresholds for SAP Landscape Monitor Dashboard */
  topMetricsThresholds?: SapLandscapeMonitorMetricThresholds[];
}

export function sapLandscapeMonitorPropertiesSerializer(
  item: SapLandscapeMonitorProperties,
): any {
  return {
    grouping: !item["grouping"]
      ? item["grouping"]
      : sapLandscapeMonitorPropertiesGroupingSerializer(item["grouping"]),
    topMetricsThresholds: !item["topMetricsThresholds"]
      ? item["topMetricsThresholds"]
      : sapLandscapeMonitorMetricThresholdsArraySerializer(
          item["topMetricsThresholds"],
        ),
  };
}

export function sapLandscapeMonitorPropertiesDeserializer(
  item: any,
): SapLandscapeMonitorProperties {
  return {
    provisioningState: item["provisioningState"],
    grouping: !item["grouping"]
      ? item["grouping"]
      : sapLandscapeMonitorPropertiesGroupingDeserializer(item["grouping"]),
    topMetricsThresholds: !item["topMetricsThresholds"]
      ? item["topMetricsThresholds"]
      : sapLandscapeMonitorMetricThresholdsArrayDeserializer(
          item["topMetricsThresholds"],
        ),
  };
}

/** State of provisioning of the SAP monitor. */
export enum KnownSapLandscapeMonitorProvisioningState {
  /** The resource request has been accepted. */
  Accepted = "Accepted",
  /** The resource has been created. */
  Created = "Created",
  /** The resource operation has failed. */
  Failed = "Failed",
  /** The resource operation has succeeded. */
  Succeeded = "Succeeded",
  /** The resource operation was canceled. */
  Canceled = "Canceled",
}

/**
 * State of provisioning of the SAP monitor. \
 * {@link KnownSapLandscapeMonitorProvisioningState} can be used interchangeably with SapLandscapeMonitorProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Accepted**: The resource request has been accepted. \
 * **Created**: The resource has been created. \
 * **Failed**: The resource operation has failed. \
 * **Succeeded**: The resource operation has succeeded. \
 * **Canceled**: The resource operation was canceled.
 */
export type SapLandscapeMonitorProvisioningState = string;

/** Gets or sets the SID groupings by landscape and Environment. */
export interface SapLandscapeMonitorPropertiesGrouping {
  /** Gets or sets the list of landscape to SID mappings. */
  landscape?: SapLandscapeMonitorSidMapping[];
  /** Gets or sets the list of Sap Applications to SID mappings. */
  sapApplication?: SapLandscapeMonitorSidMapping[];
}

export function sapLandscapeMonitorPropertiesGroupingSerializer(
  item: SapLandscapeMonitorPropertiesGrouping,
): any {
  return {
    landscape: !item["landscape"]
      ? item["landscape"]
      : sapLandscapeMonitorSidMappingArraySerializer(item["landscape"]),
    sapApplication: !item["sapApplication"]
      ? item["sapApplication"]
      : sapLandscapeMonitorSidMappingArraySerializer(item["sapApplication"]),
  };
}

export function sapLandscapeMonitorPropertiesGroupingDeserializer(
  item: any,
): SapLandscapeMonitorPropertiesGrouping {
  return {
    landscape: !item["landscape"]
      ? item["landscape"]
      : sapLandscapeMonitorSidMappingArrayDeserializer(item["landscape"]),
    sapApplication: !item["sapApplication"]
      ? item["sapApplication"]
      : sapLandscapeMonitorSidMappingArrayDeserializer(item["sapApplication"]),
  };
}

export function sapLandscapeMonitorSidMappingArraySerializer(
  result: Array<SapLandscapeMonitorSidMapping>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorSidMappingSerializer(item);
  });
}

export function sapLandscapeMonitorSidMappingArrayDeserializer(
  result: Array<SapLandscapeMonitorSidMapping>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorSidMappingDeserializer(item);
  });
}

/** Gets or sets the mapping for SID to Environment/Applications. */
export interface SapLandscapeMonitorSidMapping {
  /** Gets or sets the name of the grouping. */
  name?: string;
  /** Gets or sets the list of SID's. */
  topSid?: string[];
}

export function sapLandscapeMonitorSidMappingSerializer(
  item: SapLandscapeMonitorSidMapping,
): any {
  return {
    name: item["name"],
    topSid: !item["topSid"]
      ? item["topSid"]
      : item["topSid"].map((p: any) => {
          return p;
        }),
  };
}

export function sapLandscapeMonitorSidMappingDeserializer(
  item: any,
): SapLandscapeMonitorSidMapping {
  return {
    name: item["name"],
    topSid: !item["topSid"]
      ? item["topSid"]
      : item["topSid"].map((p: any) => {
          return p;
        }),
  };
}

export function sapLandscapeMonitorMetricThresholdsArraySerializer(
  result: Array<SapLandscapeMonitorMetricThresholds>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorMetricThresholdsSerializer(item);
  });
}

export function sapLandscapeMonitorMetricThresholdsArrayDeserializer(
  result: Array<SapLandscapeMonitorMetricThresholds>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorMetricThresholdsDeserializer(item);
  });
}

/** Gets or sets the Threshold Values for Top Metrics Health. */
export interface SapLandscapeMonitorMetricThresholds {
  /** Gets or sets the name of the threshold. */
  name?: string;
  /** Gets or sets the threshold value for Green. */
  green?: number;
  /** Gets or sets the threshold value for Yellow. */
  yellow?: number;
  /** Gets or sets the threshold value for Red. */
  red?: number;
}

export function sapLandscapeMonitorMetricThresholdsSerializer(
  item: SapLandscapeMonitorMetricThresholds,
): any {
  return {
    name: item["name"],
    green: item["green"],
    yellow: item["yellow"],
    red: item["red"],
  };
}

export function sapLandscapeMonitorMetricThresholdsDeserializer(
  item: any,
): SapLandscapeMonitorMetricThresholds {
  return {
    name: item["name"],
    green: item["green"],
    yellow: item["yellow"],
    red: item["red"],
  };
}

/** The response of a SapLandscapeMonitorResource list operation. */
export interface _SapLandscapeMonitorResourceListResult {
  /** The SapLandscapeMonitorResource items on this page */
  value: SapLandscapeMonitorResource[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _sapLandscapeMonitorResourceListResultDeserializer(
  item: any,
): _SapLandscapeMonitorResourceListResult {
  return {
    value: sapLandscapeMonitorResourceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function sapLandscapeMonitorResourceArraySerializer(
  result: Array<SapLandscapeMonitorResource>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorResourceSerializer(item);
  });
}

export function sapLandscapeMonitorResourceArrayDeserializer(
  result: Array<SapLandscapeMonitorResource>,
): any[] {
  return result.map((item) => {
    return sapLandscapeMonitorResourceDeserializer(item);
  });
}

/** A provider instance associated with SAP monitor. */
export interface ProviderInstance extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: ProviderInstanceProperties;
}

export function providerInstanceSerializer(item: ProviderInstance): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : providerInstancePropertiesSerializer(item["properties"]),
  };
}

export function providerInstanceDeserializer(item: any): ProviderInstance {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : providerInstancePropertiesDeserializer(item["properties"]),
  };
}

/** Describes the properties of a provider instance. */
export interface ProviderInstanceProperties {
  /** State of provisioning of the provider instance */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /** Resource health details */
  readonly health?: Health;
  /** Defines the provider instance errors. */
  readonly errors?: ErrorDetail;
  /** Defines the provider specific properties. */
  providerSettings?: ProviderSpecificPropertiesUnion;
}

export function providerInstancePropertiesSerializer(
  item: ProviderInstanceProperties,
): any {
  return {
    providerSettings: !item["providerSettings"]
      ? item["providerSettings"]
      : providerSpecificPropertiesUnionSerializer(item["providerSettings"]),
  };
}

export function providerInstancePropertiesDeserializer(
  item: any,
): ProviderInstanceProperties {
  return {
    provisioningState: item["provisioningState"],
    health: !item["health"]
      ? item["health"]
      : healthDeserializer(item["health"]),
    errors: !item["errors"]
      ? item["errors"]
      : errorDetailDeserializer(item["errors"]),
    providerSettings: !item["providerSettings"]
      ? item["providerSettings"]
      : providerSpecificPropertiesUnionDeserializer(item["providerSettings"]),
  };
}

/** Resource health details */
export interface Health {
  /** Health state of the resource */
  readonly healthState?: WorkloadProviderInstanceHealthState;
  /** Reasons impacting health state */
  readonly impactingReasons?: string;
}

export function healthDeserializer(item: any): Health {
  return {
    healthState: item["healthState"],
    impactingReasons: item["impactingReasons"],
  };
}

/** State of health of the provider instance */
export enum KnownWorkloadProviderInstanceHealthState {
  /** The resource health status is Healthy */
  Healthy = "Healthy",
  /** The resource health status is Degraded */
  Degraded = "Degraded",
  /** The resource health status is Unavailable */
  Unavailable = "Unavailable",
  /** The resource health status is Unknown */
  Unknown = "Unknown",
}

/**
 * State of health of the provider instance \
 * {@link KnownWorkloadProviderInstanceHealthState} can be used interchangeably with WorkloadProviderInstanceHealthState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Healthy**: The resource health status is Healthy \
 * **Degraded**: The resource health status is Degraded \
 * **Unavailable**: The resource health status is Unavailable \
 * **Unknown**: The resource health status is Unknown
 */
export type WorkloadProviderInstanceHealthState = string;

/** Gets or sets the provider specific properties. */
export interface ProviderSpecificProperties {
  /** The provider type. For example, the value can be SapHana. */
  /** The discriminator possible values: SapHana, SapNetWeaver, PrometheusOS, Db2, PrometheusHaCluster, MsSqlServer, Oracle */
  providerType: string;
}

export function providerSpecificPropertiesSerializer(
  item: ProviderSpecificProperties,
): any {
  return { providerType: item["providerType"] };
}

export function providerSpecificPropertiesDeserializer(
  item: any,
): ProviderSpecificProperties {
  return {
    providerType: item["providerType"],
  };
}

/** Alias for ProviderSpecificPropertiesUnion */
export type ProviderSpecificPropertiesUnion =
  | HanaDbProviderInstanceProperties
  | SapNetWeaverProviderInstanceProperties
  | PrometheusOsProviderInstanceProperties
  | Db2ProviderInstanceProperties
  | PrometheusHaClusterProviderInstanceProperties
  | MsSqlServerProviderInstanceProperties
  | OracleProviderInstanceProperties
  | ProviderSpecificProperties;

export function providerSpecificPropertiesUnionSerializer(
  item: ProviderSpecificPropertiesUnion,
): any {
  switch (item.providerType) {
    case "SapHana":
      return hanaDbProviderInstancePropertiesSerializer(
        item as HanaDbProviderInstanceProperties,
      );

    case "SapNetWeaver":
      return sapNetWeaverProviderInstancePropertiesSerializer(
        item as SapNetWeaverProviderInstanceProperties,
      );

    case "PrometheusOS":
      return prometheusOsProviderInstancePropertiesSerializer(
        item as PrometheusOsProviderInstanceProperties,
      );

    case "Db2":
      return db2ProviderInstancePropertiesSerializer(
        item as Db2ProviderInstanceProperties,
      );

    case "PrometheusHaCluster":
      return prometheusHaClusterProviderInstancePropertiesSerializer(
        item as PrometheusHaClusterProviderInstanceProperties,
      );

    case "MsSqlServer":
      return msSqlServerProviderInstancePropertiesSerializer(
        item as MsSqlServerProviderInstanceProperties,
      );

    case "Oracle":
      return oracleProviderInstancePropertiesSerializer(
        item as OracleProviderInstanceProperties,
      );

    default:
      return providerSpecificPropertiesSerializer(item);
  }
}

export function providerSpecificPropertiesUnionDeserializer(
  item: any,
): ProviderSpecificPropertiesUnion {
  switch (item.providerType) {
    case "SapHana":
      return hanaDbProviderInstancePropertiesDeserializer(
        item as HanaDbProviderInstanceProperties,
      );

    case "SapNetWeaver":
      return sapNetWeaverProviderInstancePropertiesDeserializer(
        item as SapNetWeaverProviderInstanceProperties,
      );

    case "PrometheusOS":
      return prometheusOsProviderInstancePropertiesDeserializer(
        item as PrometheusOsProviderInstanceProperties,
      );

    case "Db2":
      return db2ProviderInstancePropertiesDeserializer(
        item as Db2ProviderInstanceProperties,
      );

    case "PrometheusHaCluster":
      return prometheusHaClusterProviderInstancePropertiesDeserializer(
        item as PrometheusHaClusterProviderInstanceProperties,
      );

    case "MsSqlServer":
      return msSqlServerProviderInstancePropertiesDeserializer(
        item as MsSqlServerProviderInstanceProperties,
      );

    case "Oracle":
      return oracleProviderInstancePropertiesDeserializer(
        item as OracleProviderInstanceProperties,
      );

    default:
      return providerSpecificPropertiesDeserializer(item);
  }
}

/** Gets or sets the provider properties. */
export interface HanaDbProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the target virtual machine size. */
  hostname?: string;
  /** Gets or sets the hana database name. */
  dbName?: string;
  /** Gets or sets the database sql port. */
  sqlPort?: string;
  /** Gets or sets the database instance number. */
  instanceNumber?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the blob URI to SSL certificate for the DB. */
  sslCertificateUri?: string;
  /** Gets or sets the hostname(s) in the SSL certificate. */
  sslHostNameInCertificate?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the SAP System Identifier. */
  sapSid?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "SapHana";
}

export function hanaDbProviderInstancePropertiesSerializer(
  item: HanaDbProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    sqlPort: item["sqlPort"],
    instanceNumber: item["instanceNumber"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sslCertificateUri: item["sslCertificateUri"],
    sslHostNameInCertificate: item["sslHostNameInCertificate"],
    sslPreference: item["sslPreference"],
    sapSid: item["sapSid"],
  };
}

export function hanaDbProviderInstancePropertiesDeserializer(
  item: any,
): HanaDbProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    sqlPort: item["sqlPort"],
    instanceNumber: item["instanceNumber"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sslCertificateUri: item["sslCertificateUri"],
    sslHostNameInCertificate: item["sslHostNameInCertificate"],
    sslPreference: item["sslPreference"],
    sapSid: item["sapSid"],
  };
}

/** Gets or sets certificate preference if secure communication is enabled. */
export enum KnownSslPreference {
  /** Secure communication is disabled. */
  Disabled = "Disabled",
  /** Secure communication is enabled with root certificate. */
  RootCertificate = "RootCertificate",
  /** Secure communication is enabled with server certificate. */
  ServerCertificate = "ServerCertificate",
}

/**
 * Gets or sets certificate preference if secure communication is enabled. \
 * {@link KnownSslPreference} can be used interchangeably with SslPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Disabled**: Secure communication is disabled. \
 * **RootCertificate**: Secure communication is enabled with root certificate. \
 * **ServerCertificate**: Secure communication is enabled with server certificate.
 */
export type SslPreference = string;

/** Gets or sets the provider properties. */
export interface SapNetWeaverProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets the target virtual machine IP Address/FQDN. */
  sapHostname?: string;
  /** Gets or sets the instance number of SAP NetWeaver. */
  sapInstanceNr?: string;
  /** Gets or sets the list of HostFile Entries */
  sapHostFileEntries?: string[];
  /** Gets or sets the SAP user name. */
  sapUsername?: string;
  /** Sets the SAP password. */
  sapPassword?: string;
  /** Gets or sets the key vault URI to secret with the SAP password. */
  sapPasswordUri?: string;
  /** Gets or sets the SAP Client ID. */
  sapClientId?: string;
  /** Gets or sets the SAP HTTP port number. */
  sapPortNumber?: string;
  /** Gets or sets the blob URI to SSL certificate for the SAP system. */
  sslCertificateUri?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "SapNetWeaver";
}

export function sapNetWeaverProviderInstancePropertiesSerializer(
  item: SapNetWeaverProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    sapSid: item["sapSid"],
    sapHostname: item["sapHostname"],
    sapInstanceNr: item["sapInstanceNr"],
    sapHostFileEntries: !item["sapHostFileEntries"]
      ? item["sapHostFileEntries"]
      : item["sapHostFileEntries"].map((p: any) => {
          return p;
        }),
    sapUsername: item["sapUsername"],
    sapPassword: item["sapPassword"],
    sapPasswordUri: item["sapPasswordUri"],
    sapClientId: item["sapClientId"],
    sapPortNumber: item["sapPortNumber"],
    sslCertificateUri: item["sslCertificateUri"],
    sslPreference: item["sslPreference"],
  };
}

export function sapNetWeaverProviderInstancePropertiesDeserializer(
  item: any,
): SapNetWeaverProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    sapSid: item["sapSid"],
    sapHostname: item["sapHostname"],
    sapInstanceNr: item["sapInstanceNr"],
    sapHostFileEntries: !item["sapHostFileEntries"]
      ? item["sapHostFileEntries"]
      : item["sapHostFileEntries"].map((p: any) => {
          return p;
        }),
    sapUsername: item["sapUsername"],
    sapPassword: item["sapPassword"],
    sapPasswordUri: item["sapPasswordUri"],
    sapClientId: item["sapClientId"],
    sapPortNumber: item["sapPortNumber"],
    sslCertificateUri: item["sslCertificateUri"],
    sslPreference: item["sslPreference"],
  };
}

/** Gets or sets the PrometheusOS provider properties. */
export interface PrometheusOsProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** URL of the Node Exporter endpoint */
  prometheusUrl?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the prometheus node exporter. */
  sslCertificateUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "PrometheusOS";
}

export function prometheusOsProviderInstancePropertiesSerializer(
  item: PrometheusOsProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
    sapSid: item["sapSid"],
  };
}

export function prometheusOsProviderInstancePropertiesDeserializer(
  item: any,
): PrometheusOsProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
    sapSid: item["sapSid"],
  };
}

/** Gets or sets the DB2 provider properties. */
export interface Db2ProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the target virtual machine name. */
  hostname?: string;
  /** Gets or sets the db2 database name. */
  dbName?: string;
  /** Gets or sets the db2 database sql port. */
  dbPort?: string;
  /** Gets or sets the db2 database user name. */
  dbUsername?: string;
  /** Gets or sets the db2 database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the DB2 Database. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "Db2";
}

export function db2ProviderInstancePropertiesSerializer(
  item: Db2ProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

export function db2ProviderInstancePropertiesDeserializer(
  item: any,
): Db2ProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbName: item["dbName"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** Gets or sets the PrometheusHaCluster provider properties. */
export interface PrometheusHaClusterProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** URL of the Node Exporter endpoint. */
  prometheusUrl?: string;
  /** Gets or sets the target machine name. */
  hostname?: string;
  /** Gets or sets the cluster sid. */
  sid?: string;
  /** Gets or sets the clusterName. */
  clusterName?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the HA cluster exporter. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "PrometheusHaCluster";
}

export function prometheusHaClusterProviderInstancePropertiesSerializer(
  item: PrometheusHaClusterProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    hostname: item["hostname"],
    sid: item["sid"],
    clusterName: item["clusterName"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

export function prometheusHaClusterProviderInstancePropertiesDeserializer(
  item: any,
): PrometheusHaClusterProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    prometheusUrl: item["prometheusUrl"],
    hostname: item["hostname"],
    sid: item["sid"],
    clusterName: item["clusterName"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** Gets or sets the SQL server provider properties. */
export interface MsSqlServerProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the SQL server host name. */
  hostname?: string;
  /** Gets or sets the database sql port. */
  dbPort?: string;
  /** Gets or sets the database user name. */
  dbUsername?: string;
  /** Gets or sets the database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the SQL Database. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "MsSqlServer";
}

export function msSqlServerProviderInstancePropertiesSerializer(
  item: MsSqlServerProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

export function msSqlServerProviderInstancePropertiesDeserializer(
  item: any,
): MsSqlServerProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbPort: item["dbPort"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** Gets or sets the Oracle provider properties. */
export interface OracleProviderInstanceProperties
  extends ProviderSpecificProperties {
  /** Gets or sets the target virtual machine name. */
  hostname?: string;
  /** Gets or sets the oracle database sql port. */
  dbPort?: string;
  /** Gets or sets the oracle database name. */
  dbName?: string;
  /** Gets or sets the oracle database user name. */
  dbUsername?: string;
  /** Gets or sets the oracle database password. */
  dbPassword?: string;
  /** Gets or sets the key vault URI to secret with the database password. */
  dbPasswordUri?: string;
  /** Gets or sets the SAP System Identifier */
  sapSid?: string;
  /** Gets or sets certificate preference if secure communication is enabled. */
  sslPreference?: SslPreference;
  /** Gets or sets the blob URI to SSL certificate for the Oracle Database. */
  sslCertificateUri?: string;
  /** The provider type. For example, the value can be SapHana. */
  providerType: "Oracle";
}

export function oracleProviderInstancePropertiesSerializer(
  item: OracleProviderInstanceProperties,
): any {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbPort: item["dbPort"],
    dbName: item["dbName"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

export function oracleProviderInstancePropertiesDeserializer(
  item: any,
): OracleProviderInstanceProperties {
  return {
    providerType: item["providerType"],
    hostname: item["hostname"],
    dbPort: item["dbPort"],
    dbName: item["dbName"],
    dbUsername: item["dbUsername"],
    dbPassword: item["dbPassword"],
    dbPasswordUri: item["dbPasswordUri"],
    sapSid: item["sapSid"],
    sslPreference: item["sslPreference"],
    sslCertificateUri: item["sslCertificateUri"],
  };
}

/** The response of a ProviderInstance list operation. */
export interface _ProviderInstanceListResult {
  /** The ProviderInstance items on this page */
  value: ProviderInstance[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _providerInstanceListResultDeserializer(
  item: any,
): _ProviderInstanceListResult {
  return {
    value: providerInstanceArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function providerInstanceArraySerializer(
  result: Array<ProviderInstance>,
): any[] {
  return result.map((item) => {
    return providerInstanceSerializer(item);
  });
}

export function providerInstanceArrayDeserializer(
  result: Array<ProviderInstance>,
): any[] {
  return result.map((item) => {
    return providerInstanceDeserializer(item);
  });
}

/** SAP monitor info on Azure (ARM properties and SAP monitor properties) */
export interface Monitor extends TrackedResource {
  /** The resource-specific properties for this resource. */
  properties?: MonitorProperties;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function monitorSerializer(item: Monitor): any {
  return {
    tags: item["tags"],
    location: item["location"],
    properties: !item["properties"]
      ? item["properties"]
      : monitorPropertiesSerializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

export function monitorDeserializer(item: any): Monitor {
  return {
    tags: item["tags"],
    location: item["location"],
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : monitorPropertiesDeserializer(item["properties"]),
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentityDeserializer(item["identity"]),
  };
}

/** Describes the properties of a SAP monitor. */
export interface MonitorProperties {
  /** State of provisioning of the SAP monitor. */
  readonly provisioningState?: WorkloadMonitorProvisioningState;
  /** Defines the SAP monitor errors. */
  readonly errors?: ErrorDetail;
  /** The SAP monitor resources will be deployed in the SAP monitoring region. The subnet region should be same as the SAP monitoring region. */
  appLocation?: string;
  /** Sets the routing preference of the SAP monitor. By default only RFC1918 traffic is routed to the customer VNET. */
  routingPreference?: RoutingPreference;
  /** Sets the preference for zone redundancy on resources created for the SAP monitor. By default resources will be created which do not support zone redundancy. */
  zoneRedundancyPreference?: string;
  /** Managed resource group configuration */
  managedResourceGroupConfiguration?: ManagedResourceGroupConfiguration;
  /** The ARM ID of the Log Analytics Workspace that is used for SAP monitoring. */
  logAnalyticsWorkspaceArmId?: string;
  /** The subnet which the SAP monitor will be deployed in */
  monitorSubnet?: string;
  /** App service plan configuration */
  appServicePlanConfiguration?: AppServicePlanConfiguration;
  /** The ARM ID of the MSI used for SAP monitoring. */
  readonly msiArmId?: string;
  /** The ARM ID of the Storage account used for SAP monitoring. */
  readonly storageAccountArmId?: string;
}

export function monitorPropertiesSerializer(item: MonitorProperties): any {
  return {
    appLocation: item["appLocation"],
    routingPreference: item["routingPreference"],
    zoneRedundancyPreference: item["zoneRedundancyPreference"],
    managedResourceGroupConfiguration: !item[
      "managedResourceGroupConfiguration"
    ]
      ? item["managedResourceGroupConfiguration"]
      : managedResourceGroupConfigurationSerializer(
          item["managedResourceGroupConfiguration"],
        ),
    logAnalyticsWorkspaceArmId: item["logAnalyticsWorkspaceArmId"],
    monitorSubnet: item["monitorSubnet"],
    appServicePlanConfiguration: !item["appServicePlanConfiguration"]
      ? item["appServicePlanConfiguration"]
      : appServicePlanConfigurationSerializer(
          item["appServicePlanConfiguration"],
        ),
  };
}

export function monitorPropertiesDeserializer(item: any): MonitorProperties {
  return {
    provisioningState: item["provisioningState"],
    errors: !item["errors"]
      ? item["errors"]
      : errorDetailDeserializer(item["errors"]),
    appLocation: item["appLocation"],
    routingPreference: item["routingPreference"],
    zoneRedundancyPreference: item["zoneRedundancyPreference"],
    managedResourceGroupConfiguration: !item[
      "managedResourceGroupConfiguration"
    ]
      ? item["managedResourceGroupConfiguration"]
      : managedResourceGroupConfigurationDeserializer(
          item["managedResourceGroupConfiguration"],
        ),
    logAnalyticsWorkspaceArmId: item["logAnalyticsWorkspaceArmId"],
    monitorSubnet: item["monitorSubnet"],
    appServicePlanConfiguration: !item["appServicePlanConfiguration"]
      ? item["appServicePlanConfiguration"]
      : appServicePlanConfigurationDeserializer(
          item["appServicePlanConfiguration"],
        ),
    msiArmId: item["msiArmId"],
    storageAccountArmId: item["storageAccountArmId"],
  };
}

/** Sets the routing preference of the SAP monitor. */
export enum KnownRoutingPreference {
  /** Default routing preference. Only RFC1918 traffic is routed to the customer VNET. */
  Default = "Default",
  /** Route all traffic to the customer VNET. */
  RouteAll = "RouteAll",
}

/**
 * Sets the routing preference of the SAP monitor. \
 * {@link KnownRoutingPreference} can be used interchangeably with RoutingPreference,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Default**: Default routing preference. Only RFC1918 traffic is routed to the customer VNET. \
 * **RouteAll**: Route all traffic to the customer VNET.
 */
export type RoutingPreference = string;

/** Managed resource group configuration */
export interface ManagedResourceGroupConfiguration {
  /** Managed resource group name */
  name?: string;
}

export function managedResourceGroupConfigurationSerializer(
  item: ManagedResourceGroupConfiguration,
): any {
  return { name: item["name"] };
}

export function managedResourceGroupConfigurationDeserializer(
  item: any,
): ManagedResourceGroupConfiguration {
  return {
    name: item["name"],
  };
}

/** Configuration details of app service plan */
export interface AppServicePlanConfiguration {
  /** The App Service plan tier. */
  tier?: AppServicePlanTier;
  /** The number of workers in app service plan. If this is not set or set to 0, auto scale will be configured for the app service plan, otherwise, instance count is set to this number. */
  capacity?: number;
}

export function appServicePlanConfigurationSerializer(
  item: AppServicePlanConfiguration,
): any {
  return { tier: item["tier"], capacity: item["capacity"] };
}

export function appServicePlanConfigurationDeserializer(
  item: any,
): AppServicePlanConfiguration {
  return {
    tier: item["tier"],
    capacity: item["capacity"],
  };
}

/** The App Service plan tier. */
export enum KnownAppServicePlanTier {
  /** Elastic Premium plan */
  ElasticPremium = "ElasticPremium",
  /** Dedicated Premium V3 plan */
  PremiumV3 = "PremiumV3",
}

/**
 * The App Service plan tier. \
 * {@link KnownAppServicePlanTier} can be used interchangeably with AppServicePlanTier,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ElasticPremium**: Elastic Premium plan \
 * **PremiumV3**: Dedicated Premium V3 plan
 */
export type AppServicePlanTier = string;

/** Managed service identity (system assigned and/or user assigned identities) */
export interface ManagedServiceIdentity {
  /** The service principal ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly principalId?: string;
  /** The tenant ID of the system assigned identity. This property will only be provided for a system assigned identity. */
  readonly tenantId?: string;
  /** The type of managed identity assigned to this resource. */
  type: ManagedServiceIdentityType;
  /** The identities assigned to this resource by the user. */
  userAssignedIdentities?: Record<string, UserAssignedIdentity | null>;
}

export function managedServiceIdentitySerializer(
  item: ManagedServiceIdentity,
): any {
  return {
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

export function managedServiceIdentityDeserializer(
  item: any,
): ManagedServiceIdentity {
  return {
    principalId: item["principalId"],
    tenantId: item["tenantId"],
    type: item["type"],
    userAssignedIdentities: item["userAssignedIdentities"],
  };
}

/** Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). */
export enum KnownManagedServiceIdentityType {
  /** No managed identity. */
  None = "None",
  /** System assigned managed identity. */
  SystemAssigned = "SystemAssigned",
  /** User assigned managed identity. */
  UserAssigned = "UserAssigned",
  /** System and user assigned managed identity. */
  "SystemAssigned,UserAssigned" = "SystemAssigned,UserAssigned",
}

/**
 * Type of managed service identity (where both SystemAssigned and UserAssigned types are allowed). \
 * {@link KnownManagedServiceIdentityType} can be used interchangeably with ManagedServiceIdentityType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No managed identity. \
 * **SystemAssigned**: System assigned managed identity. \
 * **UserAssigned**: User assigned managed identity. \
 * **SystemAssigned,UserAssigned**: System and user assigned managed identity.
 */
export type ManagedServiceIdentityType = string;

/** User assigned identity properties */
export interface UserAssignedIdentity {
  /** The principal ID of the assigned identity. */
  readonly principalId?: string;
  /** The client ID of the assigned identity. */
  readonly clientId?: string;
}

export function userAssignedIdentitySerializer(
  item: UserAssignedIdentity,
): any {
  return item;
}

export function userAssignedIdentityDeserializer(
  item: any,
): UserAssignedIdentity {
  return {
    principalId: item["principalId"],
    clientId: item["clientId"],
  };
}

/** The resource model definition for an Azure Resource Manager tracked top level resource which has 'tags' and a 'location' */
export interface TrackedResource extends Resource {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The geo-location where the resource lives */
  location: string;
}

export function trackedResourceSerializer(item: TrackedResource): any {
  return { tags: item["tags"], location: item["location"] };
}

export function trackedResourceDeserializer(item: any): TrackedResource {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    tags: item["tags"],
    location: item["location"],
  };
}

/** Defines the request body for updating SAP monitor resource. */
export interface UpdateMonitorRequest {
  /** Resource tags. */
  tags?: Record<string, string>;
  /** The managed service identities assigned to this resource. */
  identity?: ManagedServiceIdentity;
}

export function updateMonitorRequestSerializer(
  item: UpdateMonitorRequest,
): any {
  return {
    tags: item["tags"],
    identity: !item["identity"]
      ? item["identity"]
      : managedServiceIdentitySerializer(item["identity"]),
  };
}

/** The response of a Monitor list operation. */
export interface _MonitorListResult {
  /** The Monitor items on this page */
  value: Monitor[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _monitorListResultDeserializer(item: any): _MonitorListResult {
  return {
    value: monitorArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function monitorArraySerializer(result: Array<Monitor>): any[] {
  return result.map((item) => {
    return monitorSerializer(item);
  });
}

export function monitorArrayDeserializer(result: Array<Monitor>): any[] {
  return result.map((item) => {
    return monitorDeserializer(item);
  });
}

/** The available API versions. */
export enum KnownVersions {
  /** The 2023-12-01-preview API version. */
  v2023_12_01_preview = "2023-12-01-preview",
  /** The 2024-02-01-preview API version. */
  v2024_02_01_preview = "2024-02-01-preview",
}
