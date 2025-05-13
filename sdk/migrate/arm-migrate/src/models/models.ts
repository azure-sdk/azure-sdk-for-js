// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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

/** AVS assessment V2 resource. */
export interface AvsAssessmentV2 extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AvsAssessmentPropertiesV2;
}

export function avsAssessmentV2Serializer(item: AvsAssessmentV2): any {
  return {
    properties: !item["properties"]
      ? item["properties"]
      : avsAssessmentPropertiesV2Serializer(item["properties"]),
  };
}

export function avsAssessmentV2Deserializer(item: any): AvsAssessmentV2 {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : avsAssessmentPropertiesV2Deserializer(item["properties"]),
  };
}

/** Assessment properties class. */
export interface AvsAssessmentPropertiesV2 {
  /** The status of the last operation. */
  readonly provisioningState?: ProvisioningState;
  /** Gets or sets the scope of assessment. */
  scope?: Scope;
  /** Gets or sets the settings for the assessment. */
  settings?: AvsAssessmentSettings;
  /** Gets or sets the details of the assessment. */
  details?: AssessmentDetails;
  /** Gets or sets the machine assessment ARM ID for VM fallback. */
  fallbackMachineAssessmentArmId?: string;
}

export function avsAssessmentPropertiesV2Serializer(item: AvsAssessmentPropertiesV2): any {
  return {
    scope: !item["scope"] ? item["scope"] : scopeSerializer(item["scope"]),
    settings: !item["settings"]
      ? item["settings"]
      : avsAssessmentSettingsSerializer(item["settings"]),
    details: !item["details"] ? item["details"] : assessmentDetailsSerializer(item["details"]),
    fallbackMachineAssessmentArmId: item["fallbackMachineAssessmentArmId"],
  };
}

export function avsAssessmentPropertiesV2Deserializer(item: any): AvsAssessmentPropertiesV2 {
  return {
    provisioningState: item["provisioningState"],
    scope: !item["scope"] ? item["scope"] : scopeDeserializer(item["scope"]),
    settings: !item["settings"]
      ? item["settings"]
      : avsAssessmentSettingsDeserializer(item["settings"]),
    details: !item["details"] ? item["details"] : assessmentDetailsDeserializer(item["details"]),
    fallbackMachineAssessmentArmId: item["fallbackMachineAssessmentArmId"],
  };
}

/** The status of the current operation. */
export enum KnownProvisioningState {
  /** Resource provisioning Successful. */
  Succeeded = "Succeeded",
  /** Resource provisioning Failed. */
  Failed = "Failed",
  /** Resource provisioning Canceled. */
  Canceled = "Canceled",
  /** Resource is being Provisioned. */
  Provisioning = "Provisioning",
  /** Resource is being Updated. */
  Updating = "Updating",
  /** Resource is being Deleted. */
  Deleting = "Deleting",
  /** Resource is being Accepted. */
  Accepted = "Accepted",
}

/**
 * The status of the current operation. \
 * {@link KnownProvisioningState} can be used interchangeably with ProvisioningState,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Succeeded**: Resource provisioning Successful. \
 * **Failed**: Resource provisioning Failed. \
 * **Canceled**: Resource provisioning Canceled. \
 * **Provisioning**: Resource is being Provisioned. \
 * **Updating**: Resource is being Updated. \
 * **Deleting**: Resource is being Deleted. \
 * **Accepted**: Resource is being Accepted.
 */
export type ProvisioningState = string;

/** Scope of the assessment. */
export interface Scope {
  /** The scope type */
  scopeType?: ScopeType;
  /** The server group arm id. */
  serverGroupId?: string;
  /** The ARG query. */
  azureResourceGraphQuery?: string;
}

export function scopeSerializer(item: Scope): any {
  return {
    scopeType: item["scopeType"],
    serverGroupId: item["serverGroupId"],
    azureResourceGraphQuery: item["azureResourceGraphQuery"],
  };
}

export function scopeDeserializer(item: any): Scope {
  return {
    scopeType: item["scopeType"],
    serverGroupId: item["serverGroupId"],
    azureResourceGraphQuery: item["azureResourceGraphQuery"],
  };
}

/** Scope type */
export enum KnownScopeType {
  /** ServerGroupId - Scope type */
  ServerGroupId = "ServerGroupId",
  /** AzureResourceGraphQuery - Scope type */
  AzureResourceGraphQuery = "AzureResourceGraphQuery",
}

/**
 * Scope type \
 * {@link KnownScopeType} can be used interchangeably with ScopeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **ServerGroupId**: ServerGroupId - Scope type \
 * **AzureResourceGraphQuery**: AzureResourceGraphQuery - Scope type
 */
export type ScopeType = string;

/** Properties of the AVS assessment. */
export interface AvsAssessmentSettings {
  /** Azure Location or Azure region where to which the machines will be migrated. */
  azureLocation?: string;
  /** Currency in which prices should be reported. */
  currency?: AzureCurrency;
  /**
   * Percentage of buffer that user wants on performance metrics when recommending
   * Azure sizes.
   */
  scalingFactor?: number;
  /** Custom discount percentage. */
  discountPercentage?: number;
  /** Assessment sizing criterion. */
  sizingCriterion?: AssessmentSizingCriterion;
  /** Gets or sets the performance data. */
  performanceData?: PerformanceData;
  /** Gets or sets the savings settings. */
  savingsSettings?: SavingsSettings;
  /** Gets or sets the billing settings. */
  billingSettings?: BillingSettings;
  /** Gets or sets user configurable setting to display the environment type. */
  environmentType?: EnvironmentType;
  /** List of Failures to tolerate and RAID levels in a common property. */
  failuresToTolerateAndRaidLevelList?: FttAndRaidLevel[];
  /** VCPU over subscription. */
  vcpuOversubscription?: number;
  /** AVS node types. */
  nodeTypes?: AzureAvsNodeType[];
  /** AVS Assessment Scenario. */
  avsAssessmentScenario?: AvsAssessmentScenario;
  /** List of AVS external storage types. */
  externalStorageTypes?: ExternalStorageType[];
  /** Gets or sets the CPU headroom. */
  cpuHeadroom?: number;
  /** Is VCF license applied */
  isVcfByolEnabled?: boolean;
  /** Memory overcommit. */
  memOvercommit?: number;
  /** De-duplication compression. */
  dedupeCompression?: number;
  /** Is Stretch Cluster Enabled. */
  isStretchClusterEnabled?: boolean;
}

export function avsAssessmentSettingsSerializer(item: AvsAssessmentSettings): any {
  return {
    azureLocation: item["azureLocation"],
    currency: item["currency"],
    scalingFactor: item["scalingFactor"],
    discountPercentage: item["discountPercentage"],
    sizingCriterion: item["sizingCriterion"],
    performanceData: !item["performanceData"]
      ? item["performanceData"]
      : performanceDataSerializer(item["performanceData"]),
    savingsSettings: !item["savingsSettings"]
      ? item["savingsSettings"]
      : savingsSettingsSerializer(item["savingsSettings"]),
    billingSettings: !item["billingSettings"]
      ? item["billingSettings"]
      : billingSettingsSerializer(item["billingSettings"]),
    environmentType: item["environmentType"],
    failuresToTolerateAndRaidLevelList: !item["failuresToTolerateAndRaidLevelList"]
      ? item["failuresToTolerateAndRaidLevelList"]
      : item["failuresToTolerateAndRaidLevelList"].map((p: any) => {
          return p;
        }),
    vcpuOversubscription: item["vcpuOversubscription"],
    nodeTypes: !item["nodeTypes"]
      ? item["nodeTypes"]
      : item["nodeTypes"].map((p: any) => {
          return p;
        }),
    avsAssessmentScenario: item["avsAssessmentScenario"],
    externalStorageTypes: !item["externalStorageTypes"]
      ? item["externalStorageTypes"]
      : item["externalStorageTypes"].map((p: any) => {
          return p;
        }),
    cpuHeadroom: item["cpuHeadroom"],
    isVcfByolEnabled: item["isVcfByolEnabled"],
    memOvercommit: item["memOvercommit"],
    dedupeCompression: item["dedupeCompression"],
    isStretchClusterEnabled: item["isStretchClusterEnabled"],
  };
}

export function avsAssessmentSettingsDeserializer(item: any): AvsAssessmentSettings {
  return {
    azureLocation: item["azureLocation"],
    currency: item["currency"],
    scalingFactor: item["scalingFactor"],
    discountPercentage: item["discountPercentage"],
    sizingCriterion: item["sizingCriterion"],
    performanceData: !item["performanceData"]
      ? item["performanceData"]
      : performanceDataDeserializer(item["performanceData"]),
    savingsSettings: !item["savingsSettings"]
      ? item["savingsSettings"]
      : savingsSettingsDeserializer(item["savingsSettings"]),
    billingSettings: !item["billingSettings"]
      ? item["billingSettings"]
      : billingSettingsDeserializer(item["billingSettings"]),
    environmentType: item["environmentType"],
    failuresToTolerateAndRaidLevelList: !item["failuresToTolerateAndRaidLevelList"]
      ? item["failuresToTolerateAndRaidLevelList"]
      : item["failuresToTolerateAndRaidLevelList"].map((p: any) => {
          return p;
        }),
    vcpuOversubscription: item["vcpuOversubscription"],
    nodeTypes: !item["nodeTypes"]
      ? item["nodeTypes"]
      : item["nodeTypes"].map((p: any) => {
          return p;
        }),
    avsAssessmentScenario: item["avsAssessmentScenario"],
    externalStorageTypes: !item["externalStorageTypes"]
      ? item["externalStorageTypes"]
      : item["externalStorageTypes"].map((p: any) => {
          return p;
        }),
    cpuHeadroom: item["cpuHeadroom"],
    isVcfByolEnabled: item["isVcfByolEnabled"],
    memOvercommit: item["memOvercommit"],
    dedupeCompression: item["dedupeCompression"],
    isStretchClusterEnabled: item["isStretchClusterEnabled"],
  };
}

/** Currency for Azure. */
export enum KnownAzureCurrency {
  /** Unknown Currency for Azure */
  Unknown = "Unknown",
  /** USD Currency for Azure */
  USD = "USD",
  /** DKK Currency for Azure */
  DKK = "DKK",
  /** CAD Currency for Azure */
  CAD = "CAD",
  /** IDR Currency for Azure */
  IDR = "IDR",
  /** JPY Currency for Azure */
  JPY = "JPY",
  /** KRW Currency for Azure */
  KRW = "KRW",
  /** NZD Currency for Azure */
  NZD = "NZD",
  /** NOK Currency for Azure */
  NOK = "NOK",
  /** RUB Currency for Azure */
  RUB = "RUB",
  /** SAR Currency for Azure */
  SAR = "SAR",
  /** ZAR Currency for Azure */
  ZAR = "ZAR",
  /** SEK Currency for Azure */
  SEK = "SEK",
  /** TRY Currency for Azure */
  TRY = "TRY",
  /** GBP Currency for Azure */
  GBP = "GBP",
  /** MXN Currency for Azure */
  MXN = "MXN",
  /** MYR Currency for Azure */
  MYR = "MYR",
  /** INR Currency for Azure */
  INR = "INR",
  /** HKD Currency for Azure */
  HKD = "HKD",
  /** BRL Currency for Azure */
  BRL = "BRL",
  /** TWD Currency for Azure */
  TWD = "TWD",
  /** EUR Currency for Azure */
  EUR = "EUR",
  /** CHF Currency for Azure */
  CHF = "CHF",
  /** ARS Currency for Azure */
  ARS = "ARS",
  /** AUD Currency for Azure */
  AUD = "AUD",
  /** CNY Currency for Azure */
  CNY = "CNY",
}

/**
 * Currency for Azure. \
 * {@link KnownAzureCurrency} can be used interchangeably with AzureCurrency,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Currency for Azure \
 * **USD**: USD Currency for Azure \
 * **DKK**: DKK Currency for Azure \
 * **CAD**: CAD Currency for Azure \
 * **IDR**: IDR Currency for Azure \
 * **JPY**: JPY Currency for Azure \
 * **KRW**: KRW Currency for Azure \
 * **NZD**: NZD Currency for Azure \
 * **NOK**: NOK Currency for Azure \
 * **RUB**: RUB Currency for Azure \
 * **SAR**: SAR Currency for Azure \
 * **ZAR**: ZAR Currency for Azure \
 * **SEK**: SEK Currency for Azure \
 * **TRY**: TRY Currency for Azure \
 * **GBP**: GBP Currency for Azure \
 * **MXN**: MXN Currency for Azure \
 * **MYR**: MYR Currency for Azure \
 * **INR**: INR Currency for Azure \
 * **HKD**: HKD Currency for Azure \
 * **BRL**: BRL Currency for Azure \
 * **TWD**: TWD Currency for Azure \
 * **EUR**: EUR Currency for Azure \
 * **CHF**: CHF Currency for Azure \
 * **ARS**: ARS Currency for Azure \
 * **AUD**: AUD Currency for Azure \
 * **CNY**: CNY Currency for Azure
 */
export type AzureCurrency = string;

/** Assessment Sizing Criteria. */
export enum KnownAssessmentSizingCriterion {
  /** Performance Data based Sizing. */
  PerformanceBased = "PerformanceBased",
  /** As On Premises or Static Data based Sizing. */
  AsOnPremises = "AsOnPremises",
}

/**
 * Assessment Sizing Criteria. \
 * {@link KnownAssessmentSizingCriterion} can be used interchangeably with AssessmentSizingCriterion,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PerformanceBased**: Performance Data based Sizing. \
 * **AsOnPremises**: As On Premises or Static Data based Sizing.
 */
export type AssessmentSizingCriterion = string;

/** Performance data class. */
export interface PerformanceData {
  /**
   * Percentile of the utilization data values to be considered while assessing
   * machines.
   */
  percentile?: Percentile;
  /**
   * Time Range for which the historic utilization data should be considered for
   * assessment.
   */
  timeRange?: TimeRange;
  /** Gets or sets the start time to consider performance data for assessment. */
  perfDataStartTime?: Date;
  /** Gets or sets the end time to consider performance data for assessment. */
  perfDataEndTime?: Date;
}

export function performanceDataSerializer(item: PerformanceData): any {
  return {
    percentile: item["percentile"],
    timeRange: item["timeRange"],
    perfDataStartTime: !item["perfDataStartTime"]
      ? item["perfDataStartTime"]
      : item["perfDataStartTime"].toISOString(),
    perfDataEndTime: !item["perfDataEndTime"]
      ? item["perfDataEndTime"]
      : item["perfDataEndTime"].toISOString(),
  };
}

export function performanceDataDeserializer(item: any): PerformanceData {
  return {
    percentile: item["percentile"],
    timeRange: item["timeRange"],
    perfDataStartTime: !item["perfDataStartTime"]
      ? item["perfDataStartTime"]
      : new Date(item["perfDataStartTime"]),
    perfDataEndTime: !item["perfDataEndTime"]
      ? item["perfDataEndTime"]
      : new Date(item["perfDataEndTime"]),
  };
}

/** Percentile for Performance Data. */
export enum KnownPercentile {
  /** Percentile 50. */
  Percentile50 = "Percentile50",
  /** Percentile 90. */
  Percentile90 = "Percentile90",
  /** Percentile 95. */
  Percentile95 = "Percentile95",
  /** Percentile 99. */
  Percentile99 = "Percentile99",
  /** Percentile unknown. */
  PercentileUnknown = "PercentileUnknown",
}

/**
 * Percentile for Performance Data. \
 * {@link KnownPercentile} can be used interchangeably with Percentile,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Percentile50**: Percentile 50. \
 * **Percentile90**: Percentile 90. \
 * **Percentile95**: Percentile 95. \
 * **Percentile99**: Percentile 99. \
 * **PercentileUnknown**: Percentile unknown.
 */
export type Percentile = string;

/** Time Range for Performance Data. */
export enum KnownTimeRange {
  /** Daily. */
  Day = "Day",
  /** Weekly. */
  Week = "Week",
  /** Monthly. */
  Month = "Month",
  /** Custom Time Range. */
  Custom = "Custom",
}

/**
 * Time Range for Performance Data. \
 * {@link KnownTimeRange} can be used interchangeably with TimeRange,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Day**: Daily. \
 * **Week**: Weekly. \
 * **Month**: Monthly. \
 * **Custom**: Custom Time Range.
 */
export type TimeRange = string;

/** Savings settings class. */
export interface SavingsSettings {
  /** Gets or sets the savings options. */
  savingsOptions?: SavingsOptions;
  /** Gets or sets the Azure offer code. */
  azureOfferCode?: AzureOffer;
}

export function savingsSettingsSerializer(item: SavingsSettings): any {
  return {
    savingsOptions: item["savingsOptions"],
    azureOfferCode: item["azureOfferCode"],
  };
}

export function savingsSettingsDeserializer(item: any): SavingsSettings {
  return {
    savingsOptions: item["savingsOptions"],
    azureOfferCode: item["azureOfferCode"],
  };
}

/** The savings options. */
export enum KnownSavingsOptions {
  /** No savings options. */
  None = "None",
  /** Reserved Instance for 1 year. */
  RI1Year = "RI1Year",
  /** Reserved Instance for 3 years. */
  RI3Year = "RI3Year",
  /** The savings plan for 1 year. */
  SavingsPlan1Year = "SavingsPlan1Year",
  /** The savings plan for 3  years. */
  SavingsPlan3Year = "SavingsPlan3Year",
  /** Custom azure offer code. */
  CustomAzureOfferCode = "CustomAzureOfferCode",
}

/**
 * The savings options. \
 * {@link KnownSavingsOptions} can be used interchangeably with SavingsOptions,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: No savings options. \
 * **RI1Year**: Reserved Instance for 1 year. \
 * **RI3Year**: Reserved Instance for 3 years. \
 * **SavingsPlan1Year**: The savings plan for 1 year. \
 * **SavingsPlan3Year**: The savings plan for 3  years. \
 * **CustomAzureOfferCode**: Custom azure offer code.
 */
export type SavingsOptions = string;

/** Azure Offer */
export enum KnownAzureOffer {
  /** Unknown - Azure Offer */
  Unknown = "Unknown",
  /** MSAZR0003P Azure Offer */
  Msazr0003P = "MSAZR0003P",
  /** MSAZR0023P Azure Offer */
  Msazr0023P = "MSAZR0023P",
  /** MSMCAZR0044P Azure Offer */
  Msmcazr0044P = "MSMCAZR0044P",
  /** MSMCAZR0059P Azure Offer */
  Msmcazr0059P = "MSMCAZR0059P",
  /** MSMCAZR0060P Azure Offer */
  Msmcazr0060P = "MSMCAZR0060P",
  /** MSMCAZR0063P Azure Offer */
  Msmcazr0063P = "MSMCAZR0063P",
  /** MSAZRUSGOV0003P Azure Offer */
  Msazrusgov0003P = "MSAZRUSGOV0003P",
  /** EA Azure Offer */
  EA = "EA",
  /** SavingsPlan1Year Azure Offer */
  SavingsPlan1Year = "SavingsPlan1Year",
  /** SavingsPlan3Year Azure Offer */
  SavingsPlan3Year = "SavingsPlan3Year",
}

/**
 * Azure Offer \
 * {@link KnownAzureOffer} can be used interchangeably with AzureOffer,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Azure Offer \
 * **MSAZR0003P**: MSAZR0003P Azure Offer \
 * **MSAZR0023P**: MSAZR0023P Azure Offer \
 * **MSMCAZR0044P**: MSMCAZR0044P Azure Offer \
 * **MSMCAZR0059P**: MSMCAZR0059P Azure Offer \
 * **MSMCAZR0060P**: MSMCAZR0060P Azure Offer \
 * **MSMCAZR0063P**: MSMCAZR0063P Azure Offer \
 * **MSAZRUSGOV0003P**: MSAZRUSGOV0003P Azure Offer \
 * **EA**: EA Azure Offer \
 * **SavingsPlan1Year**: SavingsPlan1Year Azure Offer \
 * **SavingsPlan3Year**: SavingsPlan3Year Azure Offer
 */
export type AzureOffer = string;

/** Billing settings class. */
export interface BillingSettings {
  /** Gets or sets the licensing program. */
  licensingProgram?: LicensingProgram;
  /** Gets or sets the subscription ID for licensing program selected. */
  subscriptionId?: string;
}

export function billingSettingsSerializer(item: BillingSettings): any {
  return {
    licensingProgram: item["licensingProgram"],
    subscriptionId: item["subscriptionId"],
  };
}

export function billingSettingsDeserializer(item: any): BillingSettings {
  return {
    licensingProgram: item["licensingProgram"],
    subscriptionId: item["subscriptionId"],
  };
}

/** The licensing program. */
export enum KnownLicensingProgram {
  /** Retail/Pay as you go. */
  Retail = "Retail",
  /** Not known */
  Unknown = "Unknown",
  /** Enterprise agreement. */
  EA = "EA",
  /** Microsoft customer agreement. */
  MCA = "MCA",
}

/**
 * The licensing program. \
 * {@link KnownLicensingProgram} can be used interchangeably with LicensingProgram,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Retail**: Retail\/Pay as you go. \
 * **Unknown**: Not known \
 * **EA**: Enterprise agreement. \
 * **MCA**: Microsoft customer agreement.
 */
export type LicensingProgram = string;

/** Environment Type */
export enum KnownEnvironmentType {
  /** Production - Environment Type */
  Production = "Production",
  /** Unknown - Environment Type */
  Unknown = "Unknown",
  /** DevTest - Environment Type */
  DevTest = "DevTest",
}

/**
 * Environment Type \
 * {@link KnownEnvironmentType} can be used interchangeably with EnvironmentType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Production**: Production - Environment Type \
 * **Unknown**: Unknown - Environment Type \
 * **DevTest**: DevTest - Environment Type
 */
export type EnvironmentType = string;

/** FTT and RAID Level. */
export enum KnownFttAndRaidLevel {
  /** Unknown FTT and RAID Level. */
  Unknown = "Unknown",
  /** FTT 1 and RAID Level 1. */
  Ftt1Raid1 = "Ftt1Raid1",
  /** FTT 1 and RAID Level 5. */
  Ftt1Raid5 = "Ftt1Raid5",
  /** FTT 2 and RAID Level 1. */
  Ftt2Raid1 = "Ftt2Raid1",
  /** FTT 2 and RAID Level 6. */
  Ftt2Raid6 = "Ftt2Raid6",
  /** FTT 3 and RAID Level 1. */
  Ftt3Raid1 = "Ftt3Raid1",
}

/**
 * FTT and RAID Level. \
 * {@link KnownFttAndRaidLevel} can be used interchangeably with FttAndRaidLevel,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown FTT and RAID Level. \
 * **Ftt1Raid1**: FTT 1 and RAID Level 1. \
 * **Ftt1Raid5**: FTT 1 and RAID Level 5. \
 * **Ftt2Raid1**: FTT 2 and RAID Level 1. \
 * **Ftt2Raid6**: FTT 2 and RAID Level 6. \
 * **Ftt3Raid1**: FTT 3 and RAID Level 1.
 */
export type FttAndRaidLevel = string;

/** Azure AVS Node type */
export enum KnownAzureAvsNodeType {
  /** Unknown Node type */
  Unknown = "Unknown",
  /** AVS36 Node type */
  AV36 = "AV36",
  /** AV36P Node type */
  AV36P = "AV36P",
  /** AV52 Node type */
  AV52 = "AV52",
  /** AV64 Node type */
  AV64 = "AV64",
}

/**
 * Azure AVS Node type \
 * {@link KnownAzureAvsNodeType} can be used interchangeably with AzureAvsNodeType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Node type \
 * **AV36**: AVS36 Node type \
 * **AV36P**: AV36P Node type \
 * **AV52**: AV52 Node type \
 * **AV64**: AV64 Node type
 */
export type AzureAvsNodeType = string;

/** Scenarios with which Avs Assessments can be created. */
export enum KnownAvsAssessmentScenario {
  /** Unknown assessment scenario */
  Unknown = "Unknown",
  /** Create Assessment for new Avs Sddc */
  NewAvsSddc = "NewAvsSddc",
  /** Create Assessment for existing Avs Sddc */
  AvsSddcExpansion = "AvsSddcExpansion",
}

/**
 * Scenarios with which Avs Assessments can be created. \
 * {@link KnownAvsAssessmentScenario} can be used interchangeably with AvsAssessmentScenario,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown assessment scenario \
 * **NewAvsSddc**: Create Assessment for new Avs Sddc \
 * **AvsSddcExpansion**: Create Assessment for existing Avs Sddc
 */
export type AvsAssessmentScenario = string;

/** Different External storage skus. */
export enum KnownExternalStorageType {
  /** Indicates un-supported external storage. */
  Unknown = "Unknown",
  /** Indicates No external storage. */
  None = "None",
  /** ANF external storage with Standard SKU. */
  AnfStandard = "AnfStandard",
  /** ANF external storage with Premium SKU. */
  AnfPremium = "AnfPremium",
  /** ANF external storage with Ultra SKU. */
  AnfUltra = "AnfUltra",
}

/**
 * Different External storage skus. \
 * {@link KnownExternalStorageType} can be used interchangeably with ExternalStorageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Indicates un-supported external storage. \
 * **None**: Indicates No external storage. \
 * **AnfStandard**: ANF external storage with Standard SKU. \
 * **AnfPremium**: ANF external storage with Premium SKU. \
 * **AnfUltra**: ANF external storage with Ultra SKU.
 */
export type ExternalStorageType = string;

/** Assessment details class. */
export interface AssessmentDetails {
  /** Confidence Rating in Percentage. */
  readonly confidenceRatingInPercentage?: number;
  /** Last time when rates were queried. */
  readonly pricesTimestamp?: Date;
  /** Date and Time when assessment was created. */
  readonly createdTimestamp?: Date;
  /** Date and Time when assessment was last updated. */
  readonly updatedTimestamp?: Date;
  /** Whether assessment is in valid state and all machines have been assessed. */
  readonly status?: AssessmentStatus;
}

export function assessmentDetailsSerializer(item: AssessmentDetails): any {
  return item;
}

export function assessmentDetailsDeserializer(item: any): AssessmentDetails {
  return {
    confidenceRatingInPercentage: item["confidenceRatingInPercentage"],
    pricesTimestamp: !item["pricesTimestamp"]
      ? item["pricesTimestamp"]
      : new Date(item["pricesTimestamp"]),
    createdTimestamp: !item["createdTimestamp"]
      ? item["createdTimestamp"]
      : new Date(item["createdTimestamp"]),
    updatedTimestamp: !item["updatedTimestamp"]
      ? item["updatedTimestamp"]
      : new Date(item["updatedTimestamp"]),
    status: item["status"],
  };
}

/** Assessment Status. */
export enum KnownAssessmentStatus {
  /** Assessment is Created. */
  Created = "Created",
  /** Assessment is Updated. */
  Updated = "Updated",
  /** Assessment is currently running. */
  Running = "Running",
  /** Assessment is Completed or Ready. */
  Completed = "Completed",
  /** Assessment is Failed i.e. it is now invalid. */
  Invalid = "Invalid",
  /** Assessment is Out of Sync. */
  OutOfSync = "OutOfSync",
  /** Assessment is Out Dated. */
  OutDated = "OutDated",
  /** Assessment is Deleted. */
  Deleted = "Deleted",
  /** Assessment has Failed. */
  Failed = "Failed",
}

/**
 * Assessment Status. \
 * {@link KnownAssessmentStatus} can be used interchangeably with AssessmentStatus,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Created**: Assessment is Created. \
 * **Updated**: Assessment is Updated. \
 * **Running**: Assessment is currently running. \
 * **Completed**: Assessment is Completed or Ready. \
 * **Invalid**: Assessment is Failed i.e. it is now invalid. \
 * **OutOfSync**: Assessment is Out of Sync. \
 * **OutDated**: Assessment is Out Dated. \
 * **Deleted**: Assessment is Deleted. \
 * **Failed**: Assessment has Failed.
 */
export type AssessmentStatus = string;

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

/** The response of a AvsAssessmentV2 list operation. */
export interface _AvsAssessmentV2ListResult {
  /** The AvsAssessmentV2 items on this page */
  value: AvsAssessmentV2[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _avsAssessmentV2ListResultDeserializer(item: any): _AvsAssessmentV2ListResult {
  return {
    value: avsAssessmentV2ArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function avsAssessmentV2ArraySerializer(result: Array<AvsAssessmentV2>): any[] {
  return result.map((item) => {
    return avsAssessmentV2Serializer(item);
  });
}

export function avsAssessmentV2ArrayDeserializer(result: Array<AvsAssessmentV2>): any[] {
  return result.map((item) => {
    return avsAssessmentV2Deserializer(item);
  });
}

/** model interface _DownloadUrlRequest */
export interface _DownloadUrlRequest {}

export function _downloadUrlRequestSerializer(item: _DownloadUrlRequest): any {
  return item;
}

/** Data model of Download URL for assessment report. */
export interface DownloadUrl {
  /** Hyperlink to download report. */
  readonly assessmentReportUrl: string;
  /** Expiry date of download url. */
  readonly expirationTime: Date;
}

export function downloadUrlDeserializer(item: any): DownloadUrl {
  return {
    assessmentReportUrl: item["assessmentReportUrl"],
    expirationTime: new Date(item["expirationTime"]),
  };
}

/** AVS assessment V2 Assessed Machine resource. */
export interface AvsAssessedMachineV2 extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AvsAssessedMachinePropertiesV2;
}

export function avsAssessedMachineV2Deserializer(item: any): AvsAssessedMachineV2 {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : avsAssessedMachinePropertiesV2Deserializer(item["properties"]),
  };
}

/** AVS assessed machine properties web model. */
export interface AvsAssessedMachinePropertiesV2 {
  /** The workload type */
  readonly workloadType?: MigrateWorkloadType;
  /** The linkages list. */
  readonly linkages?: Linkages[];
  /** The recommendation list. */
  readonly recommendations?: AvsRecommendationsMigrationIssuesMigrationSuitabilitySkus[];
  /** The assessed machine extended details. */
  readonly extendedDetails?: AvsAssessedMachineExtendedDetails;
  /** Assessed machine type. */
  readonly assessedMachineType?: AssessedMachineType;
  /** When was machine first created. */
  readonly createdTimestamp?: Date;
  /** When was machine last updated. */
  readonly updatedTimestamp?: Date;
}

export function avsAssessedMachinePropertiesV2Deserializer(
  item: any,
): AvsAssessedMachinePropertiesV2 {
  return {
    workloadType: item["workloadType"],
    linkages: !item["linkages"] ? item["linkages"] : linkagesArrayDeserializer(item["linkages"]),
    recommendations: !item["recommendations"]
      ? item["recommendations"]
      : avsRecommendationsMigrationIssuesMigrationSuitabilitySkusArrayDeserializer(
          item["recommendations"],
        ),
    extendedDetails: !item["extendedDetails"]
      ? item["extendedDetails"]
      : avsAssessedMachineExtendedDetailsDeserializer(item["extendedDetails"]),
    assessedMachineType: item["assessedMachineType"],
    createdTimestamp: !item["createdTimestamp"]
      ? item["createdTimestamp"]
      : new Date(item["createdTimestamp"]),
    updatedTimestamp: !item["updatedTimestamp"]
      ? item["updatedTimestamp"]
      : new Date(item["updatedTimestamp"]),
  };
}

/** Migration Workload type */
export enum KnownMigrateWorkloadType {
  /** Unknown - Migration Workload type */
  Unknown = "Unknown",
  /** Machine - Migration Workload type */
  Machine = "Machine",
  /** Server - Migration Workload type */
  Server = "Server",
  /** Instance - Migration Workload type */
  Instance = "Instance",
  /** WebServer - Migration Workload type */
  WebServer = "WebServer",
  /** WebApplication - Migration Workload type */
  WebApplication = "WebApplication",
  /** Database - Migration Workload type */
  Database = "Database",
  /** Host - Migration Workload type */
  Host = "Host",
  /** ManagementServer - Migration Workload type */
  ManagementServer = "ManagementServer",
}

/**
 * Migration Workload type \
 * {@link KnownMigrateWorkloadType} can be used interchangeably with MigrateWorkloadType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Migration Workload type \
 * **Machine**: Machine - Migration Workload type \
 * **Server**: Server - Migration Workload type \
 * **Instance**: Instance - Migration Workload type \
 * **WebServer**: WebServer - Migration Workload type \
 * **WebApplication**: WebApplication - Migration Workload type \
 * **Database**: Database - Migration Workload type \
 * **Host**: Host - Migration Workload type \
 * **ManagementServer**: ManagementServer - Migration Workload type
 */
export type MigrateWorkloadType = string;

export function linkagesArrayDeserializer(result: Array<Linkages>): any[] {
  return result.map((item) => {
    return linkagesDeserializer(item);
  });
}

/** Linkages details */
export interface Linkages {
  /** The workload name */
  readonly workloadName?: string;
  /** The linkage type. */
  readonly linkageType?: LinkageType;
  /** The linkage kind. */
  readonly kind?: LinkageKind;
  /** The arm id. */
  readonly armId?: string;
}

export function linkagesDeserializer(item: any): Linkages {
  return {
    workloadName: item["workloadName"],
    linkageType: item["linkageType"],
    kind: item["kind"],
    armId: item["armId"],
  };
}

/** Linkage type */
export enum KnownLinkageType {
  /** Parent - Linkage type */
  Parent = "Parent",
  /** Source - Linkage type */
  Source = "Source",
}

/**
 * Linkage type \
 * {@link KnownLinkageType} can be used interchangeably with LinkageType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Parent**: Parent - Linkage type \
 * **Source**: Source - Linkage type
 */
export type LinkageType = string;

/** Linkage kind */
export enum KnownLinkageKind {
  /** Unknown - Linkage kind */
  Unknown = "Unknown",
  /** Machine - Linkage kind */
  Machine = "Machine",
  /** Server - Linkage kind */
  Server = "Server",
  /** Instance - Linkage kind */
  Instance = "Instance",
  /** WebServer - Linkage kind */
  WebServer = "WebServer",
  /** WebApplication - Linkage kind */
  WebApplication = "WebApplication",
  /** Database - Linkage kind */
  Database = "Database",
}

/**
 * Linkage kind \
 * {@link KnownLinkageKind} can be used interchangeably with LinkageKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Linkage kind \
 * **Machine**: Machine - Linkage kind \
 * **Server**: Server - Linkage kind \
 * **Instance**: Instance - Linkage kind \
 * **WebServer**: WebServer - Linkage kind \
 * **WebApplication**: WebApplication - Linkage kind \
 * **Database**: Database - Linkage kind
 */
export type LinkageKind = string;

export function avsRecommendationsMigrationIssuesMigrationSuitabilitySkusArrayDeserializer(
  result: Array<AvsRecommendationsMigrationIssuesMigrationSuitabilitySkus>,
): any[] {
  return result.map((item) => {
    return avsRecommendationsMigrationIssuesMigrationSuitabilitySkusDeserializer(item);
  });
}

/** AVS-specific recommendations details. */
export interface AvsRecommendationsMigrationIssuesMigrationSuitabilitySkus {
  /** The configuration data. */
  readonly configuration?: Configuration;
  /** The recommended details. */
  readonly recommendedFor?: RecommendedFor;
  /** The migration Platform. */
  readonly migrationPlatform?: MigrationPlatform;
  /** The confidence score. */
  readonly confidenceScore?: number;
  /** The migration suitability. */
  readonly migrationSuitability?: MigrationSuitability;
  /** The security suitability. */
  readonly securitySuitability?: SecuritySuitability;
  /** The total cost details. */
  readonly totalCost?: CostDetailsCommon[];
  /** The total cost details. */
  readonly totalSavings?: SavingsDetailsCommon[];
  /** The migration issues list. */
  readonly migrationIssues?: MigrationIssues[];
  /** The Skus list. */
  readonly skus?: SkusMigrationSuitability[];
  /** Gets or sets the machine assessment ARM ID for VM fallback. */
  fallbackMachineAssessmentArmId?: string;
}

export function avsRecommendationsMigrationIssuesMigrationSuitabilitySkusDeserializer(
  item: any,
): AvsRecommendationsMigrationIssuesMigrationSuitabilitySkus {
  return {
    configuration: !item["configuration"]
      ? item["configuration"]
      : configurationDeserializer(item["configuration"]),
    recommendedFor: !item["recommendedFor"]
      ? item["recommendedFor"]
      : recommendedForDeserializer(item["recommendedFor"]),
    migrationPlatform: item["migrationPlatform"],
    confidenceScore: item["confidenceScore"],
    migrationSuitability: !item["migrationSuitability"]
      ? item["migrationSuitability"]
      : migrationSuitabilityDeserializer(item["migrationSuitability"]),
    securitySuitability: !item["securitySuitability"]
      ? item["securitySuitability"]
      : securitySuitabilityDeserializer(item["securitySuitability"]),
    totalCost: !item["totalCost"]
      ? item["totalCost"]
      : costDetailsCommonArrayDeserializer(item["totalCost"]),
    totalSavings: !item["totalSavings"]
      ? item["totalSavings"]
      : savingsDetailsCommonArrayDeserializer(item["totalSavings"]),
    migrationIssues: !item["migrationIssues"]
      ? item["migrationIssues"]
      : migrationIssuesArrayDeserializer(item["migrationIssues"]),
    skus: !item["skus"] ? item["skus"] : skusMigrationSuitabilityArrayDeserializer(item["skus"]),
    fallbackMachineAssessmentArmId: item["fallbackMachineAssessmentArmId"],
  };
}

/** Configuration details. */
export interface Configuration {
  /** The azure target. */
  readonly azureTarget?: AzureTarget;
  /** The azure target. */
  readonly sizingCriterion?: AssessmentSizingCriterion;
}

export function configurationDeserializer(item: any): Configuration {
  return {
    azureTarget: item["azureTarget"],
    sizingCriterion: item["sizingCriterion"],
  };
}

/** Azure Target */
export enum KnownAzureTarget {
  /** Unknown - Azure Target */
  Unknown = "Unknown",
  /** SqlDatabase - Azure Target */
  SqlDatabase = "SqlDatabase",
  /** SqlMI - Azure Target */
  SqlMI = "SqlMI",
  /** FlexServerPG - Azure Target */
  FlexServerPG = "FlexServerPG",
  /** OracleIaasVM - Azure Target */
  OracleIaasVM = "OracleIaasVM",
  /** AzureSpringApps - Azure Target */
  AzureSpringApps = "AzureSpringApps",
  /** SAPAzureInstance - Azure Target */
  SAPAzureInstance = "SAPAzureInstance",
  /** AKS - Azure Target */
  AKS = "AKS",
  /** MySQLAzureFlexServer - Azure Target */
  MySQLAzureFlexServer = "MySQLAzureFlexServer",
  /** AzureSQLVM - Azure Target */
  AzureSqlvm = "AzureSQLVM",
  /** AzureVM - Azure Target */
  AzureVM = "AzureVM",
  /** AzureAppService - Azure Target */
  AzureAppService = "AzureAppService",
  /** AzureAppServiceContainer - Azure Target */
  AzureAppServiceContainer = "AzureAppServiceContainer",
  /** Avs - Azure Target */
  Avs = "Avs",
}

/**
 * Azure Target \
 * {@link KnownAzureTarget} can be used interchangeably with AzureTarget,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Azure Target \
 * **SqlDatabase**: SqlDatabase - Azure Target \
 * **SqlMI**: SqlMI - Azure Target \
 * **FlexServerPG**: FlexServerPG - Azure Target \
 * **OracleIaasVM**: OracleIaasVM - Azure Target \
 * **AzureSpringApps**: AzureSpringApps - Azure Target \
 * **SAPAzureInstance**: SAPAzureInstance - Azure Target \
 * **AKS**: AKS - Azure Target \
 * **MySQLAzureFlexServer**: MySQLAzureFlexServer - Azure Target \
 * **AzureSQLVM**: AzureSQLVM - Azure Target \
 * **AzureVM**: AzureVM - Azure Target \
 * **AzureAppService**: AzureAppService - Azure Target \
 * **AzureAppServiceContainer**: AzureAppServiceContainer - Azure Target \
 * **Avs**: Avs - Azure Target
 */
export type AzureTarget = string;

/** The recommended details. */
export interface RecommendedFor {
  /** The list of strategy type. */
  readonly strategies?: StrategyType[];
}

export function recommendedForDeserializer(item: any): RecommendedFor {
  return {
    strategies: !item["strategies"]
      ? item["strategies"]
      : item["strategies"].map((p: any) => {
          return p;
        }),
  };
}

/** Strategy type */
export enum KnownStrategyType {
  /** PaaSPreferred - Strategy type */
  PaaSPreferred = "PaaSPreferred",
  /** CostOptimized - Strategy type */
  CostOptimized = "CostOptimized",
  /** EffortOptimized - Strategy type */
  EffortOptimized = "EffortOptimized",
}

/**
 * Strategy type \
 * {@link KnownStrategyType} can be used interchangeably with StrategyType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **PaaSPreferred**: PaaSPreferred - Strategy type \
 * **CostOptimized**: CostOptimized - Strategy type \
 * **EffortOptimized**: EffortOptimized - Strategy type
 */
export type StrategyType = string;

/** Migration Platform */
export enum KnownMigrationPlatform {
  /** Unknown - Migration Platform */
  Unknown = "Unknown",
  /** PaaS - Migration Platform */
  PaaS = "PaaS",
  /** IaaS - Migration Platform */
  IaaS = "IaaS",
  /** SaaS - Migration Platform */
  SaaS = "SaaS",
}

/**
 * Migration Platform \
 * {@link KnownMigrationPlatform} can be used interchangeably with MigrationPlatform,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Migration Platform \
 * **PaaS**: PaaS - Migration Platform \
 * **IaaS**: IaaS - Migration Platform \
 * **SaaS**: SaaS - Migration Platform
 */
export type MigrationPlatform = string;

/** The migration suitability. */
export interface MigrationSuitability {
  /** The migration suitability. */
  readonly readiness?: CloudSuitabilityCommon;
}

export function migrationSuitabilityDeserializer(item: any): MigrationSuitability {
  return {
    readiness: item["readiness"],
  };
}

/** Cloud Suitability Common */
export enum KnownCloudSuitabilityCommon {
  /** Unknown - Cloud Suitability Common */
  Unknown = "Unknown",
  /** NotSuitable - Cloud Suitability Common */
  NotSuitable = "NotSuitable",
  /** Suitable - Cloud Suitability Common */
  Suitable = "Suitable",
  /** ConditionallySuitable - Cloud Suitability Common */
  ConditionallySuitable = "ConditionallySuitable",
  /** ReadinessUnknown - Cloud Suitability Common */
  ReadinessUnknown = "ReadinessUnknown",
  /** SuitableWithWarnings - Cloud Suitability Common */
  SuitableWithWarnings = "SuitableWithWarnings",
}

/**
 * Cloud Suitability Common \
 * {@link KnownCloudSuitabilityCommon} can be used interchangeably with CloudSuitabilityCommon,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Cloud Suitability Common \
 * **NotSuitable**: NotSuitable - Cloud Suitability Common \
 * **Suitable**: Suitable - Cloud Suitability Common \
 * **ConditionallySuitable**: ConditionallySuitable - Cloud Suitability Common \
 * **ReadinessUnknown**: ReadinessUnknown - Cloud Suitability Common \
 * **SuitableWithWarnings**: SuitableWithWarnings - Cloud Suitability Common
 */
export type CloudSuitabilityCommon = string;

/** The security suitability. */
export interface SecuritySuitability {
  /** The security suitability. */
  readonly readiness?: CloudSuitabilityCommon;
}

export function securitySuitabilityDeserializer(item: any): SecuritySuitability {
  return {
    readiness: item["readiness"],
  };
}

export function costDetailsCommonArrayDeserializer(result: Array<CostDetailsCommon>): any[] {
  return result.map((item) => {
    return costDetailsCommonDeserializer(item);
  });
}

/** The cost details. */
export interface CostDetailsCommon {
  /** The savings options. */
  readonly savingOptions?: SavingsOptions;
  /** The sku cost details per azure offer type. */
  readonly costDetail?: NameValuePairCostType[];
}

export function costDetailsCommonDeserializer(item: any): CostDetailsCommon {
  return {
    savingOptions: item["savingOptions"],
    costDetail: !item["costDetail"]
      ? item["costDetail"]
      : nameValuePairCostTypeArrayDeserializer(item["costDetail"]),
  };
}

export function nameValuePairCostTypeArrayDeserializer(
  result: Array<NameValuePairCostType>,
): any[] {
  return result.map((item) => {
    return nameValuePairCostTypeDeserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePairCostType {
  /** The name. */
  readonly name?: CostType;
  /** The value. */
  readonly value?: number;
}

export function nameValuePairCostTypeDeserializer(item: any): NameValuePairCostType {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Cost type */
export enum KnownCostType {
  /** MonthlyStorageCost - Cost type */
  MonthlyStorageCost = "MonthlyStorageCost",
  /** MonthlyComputeCost - Cost type */
  MonthlyComputeCost = "MonthlyComputeCost",
  /** MonthlyLicensingCost - Cost type */
  MonthlyLicensingCost = "MonthlyLicensingCost",
  /** MonthlySecurityCost - Cost type */
  MonthlySecurityCost = "MonthlySecurityCost",
  /** MonthlyManagementCost - Cost type */
  MonthlyManagementCost = "MonthlyManagementCost",
  /** MonitoringService - Cost type */
  MonitoringService = "MonitoringService",
  /** DataProtectionService - Cost type */
  DataProtectionService = "DataProtectionService",
  /** PatchingService - Cost type */
  PatchingService = "PatchingService",
  /** MonthlyAzureHybridCost - Cost type */
  MonthlyAzureHybridCost = "MonthlyAzureHybridCost",
  /** MonthlyPremiumV2StorageCost - Cost type */
  MonthlyPremiumV2StorageCost = "MonthlyPremiumV2StorageCost",
  /** MonthlyLinuxAzureHybridCost - Cost type */
  MonthlyLinuxAzureHybridCost = "MonthlyLinuxAzureHybridCost",
  /** MonthlyUltraStorageCost - Cost type */
  MonthlyUltraStorageCost = "MonthlyUltraStorageCost",
  /** MonthlyStandardSsdStorageCost - Cost type */
  MonthlyStandardSsdStorageCost = "MonthlyStandardSsdStorageCost",
  /** MonthlyBandwidthCost - Cost type */
  MonthlyBandwidthCost = "MonthlyBandwidthCost",
  /** MonthlyPremiumStorageCost - Cost type */
  MonthlyPremiumStorageCost = "MonthlyPremiumStorageCost",
  /** MonthlyUltraDiskCost - Cost type */
  MonthlyUltraDiskCost = "MonthlyUltraDiskCost",
  /** MonthlyStandardHddStorageCost - Cost type */
  MonthlyStandardHddStorageCost = "MonthlyStandardHddStorageCost",
  /** MonthlyAvsExternalStorageCost - Cost type */
  MonthlyAvsExternalStorageCost = "MonthlyAvsExternalStorageCost",
  /** MonthlyAvsNetworkCost - Cost type */
  MonthlyAvsNetworkCost = "MonthlyAvsNetworkCost",
  /** MonthlyAvsNodeCost - Cost type */
  MonthlyAvsNodeCost = "MonthlyAvsNodeCost",
  /** TotalMonthlyCost - Cost type */
  TotalMonthlyCost = "TotalMonthlyCost",
}

/**
 * Cost type \
 * {@link KnownCostType} can be used interchangeably with CostType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MonthlyStorageCost**: MonthlyStorageCost - Cost type \
 * **MonthlyComputeCost**: MonthlyComputeCost - Cost type \
 * **MonthlyLicensingCost**: MonthlyLicensingCost - Cost type \
 * **MonthlySecurityCost**: MonthlySecurityCost - Cost type \
 * **MonthlyManagementCost**: MonthlyManagementCost - Cost type \
 * **MonitoringService**: MonitoringService - Cost type \
 * **DataProtectionService**: DataProtectionService - Cost type \
 * **PatchingService**: PatchingService - Cost type \
 * **MonthlyAzureHybridCost**: MonthlyAzureHybridCost - Cost type \
 * **MonthlyPremiumV2StorageCost**: MonthlyPremiumV2StorageCost - Cost type \
 * **MonthlyLinuxAzureHybridCost**: MonthlyLinuxAzureHybridCost - Cost type \
 * **MonthlyUltraStorageCost**: MonthlyUltraStorageCost - Cost type \
 * **MonthlyStandardSsdStorageCost**: MonthlyStandardSsdStorageCost - Cost type \
 * **MonthlyBandwidthCost**: MonthlyBandwidthCost - Cost type \
 * **MonthlyPremiumStorageCost**: MonthlyPremiumStorageCost - Cost type \
 * **MonthlyUltraDiskCost**: MonthlyUltraDiskCost - Cost type \
 * **MonthlyStandardHddStorageCost**: MonthlyStandardHddStorageCost - Cost type \
 * **MonthlyAvsExternalStorageCost**: MonthlyAvsExternalStorageCost - Cost type \
 * **MonthlyAvsNetworkCost**: MonthlyAvsNetworkCost - Cost type \
 * **MonthlyAvsNodeCost**: MonthlyAvsNodeCost - Cost type \
 * **TotalMonthlyCost**: TotalMonthlyCost - Cost type
 */
export type CostType = string;

export function savingsDetailsCommonArrayDeserializer(result: Array<SavingsDetailsCommon>): any[] {
  return result.map((item) => {
    return savingsDetailsCommonDeserializer(item);
  });
}

/** The savings details. */
export interface SavingsDetailsCommon {
  /** The savings options. */
  readonly savingOptions?: SavingsOptions;
  /** The sku cost details per azure offer type. */
  readonly savingsDetail?: NameValuePairSavingsType[];
}

export function savingsDetailsCommonDeserializer(item: any): SavingsDetailsCommon {
  return {
    savingOptions: item["savingOptions"],
    savingsDetail: !item["savingsDetail"]
      ? item["savingsDetail"]
      : nameValuePairSavingsTypeArrayDeserializer(item["savingsDetail"]),
  };
}

export function nameValuePairSavingsTypeArrayDeserializer(
  result: Array<NameValuePairSavingsType>,
): any[] {
  return result.map((item) => {
    return nameValuePairSavingsTypeDeserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePairSavingsType {
  /** The name. */
  readonly name?: SavingsType;
  /** The value. */
  readonly value?: number;
}

export function nameValuePairSavingsTypeDeserializer(item: any): NameValuePairSavingsType {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Savings type */
export enum KnownSavingsType {
  /** MonthlyAzureHybridCostSavings - Savings type */
  MonthlyAzureHybridCostSavings = "MonthlyAzureHybridCostSavings",
  /** MonthlyLinuxAzureHybridCostSavings - Savings type */
  MonthlyLinuxAzureHybridCostSavings = "MonthlyLinuxAzureHybridCostSavings",
  /** MonthlyAhubSqlCostSavings - Savings type */
  MonthlyAhubSqlCostSavings = "MonthlyAhubSqlCostSavings",
  /** MonthlyVcfByolCostDifference - Savings type */
  MonthlyVcfByolCostDifference = "MonthlyVcfByolCostDifference",
}

/**
 * Savings type \
 * {@link KnownSavingsType} can be used interchangeably with SavingsType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **MonthlyAzureHybridCostSavings**: MonthlyAzureHybridCostSavings - Savings type \
 * **MonthlyLinuxAzureHybridCostSavings**: MonthlyLinuxAzureHybridCostSavings - Savings type \
 * **MonthlyAhubSqlCostSavings**: MonthlyAhubSqlCostSavings - Savings type \
 * **MonthlyVcfByolCostDifference**: MonthlyVcfByolCostDifference - Savings type
 */
export type SavingsType = string;

export function migrationIssuesArrayDeserializer(result: Array<MigrationIssues>): any[] {
  return result.map((item) => {
    return migrationIssuesDeserializer(item);
  });
}

/** Migration issues. */
export interface MigrationIssues {
  /** The issue id. */
  readonly issueCode?: string;
  /** The issue category. */
  readonly issueCategory?: MigrationIssuesCategory;
  /** The issue description. */
  readonly issueDescription?: string;
  /** The possible causes. */
  readonly possibleCause?: string;
  /** The recommended action. */
  readonly recommendedActions?: string[];
  /** The more information list. */
  readonly moreInformation?: MoreInformation[];
}

export function migrationIssuesDeserializer(item: any): MigrationIssues {
  return {
    issueCode: item["issueCode"],
    issueCategory: item["issueCategory"],
    issueDescription: item["issueDescription"],
    possibleCause: item["possibleCause"],
    recommendedActions: !item["recommendedActions"]
      ? item["recommendedActions"]
      : item["recommendedActions"].map((p: any) => {
          return p;
        }),
    moreInformation: !item["moreInformation"]
      ? item["moreInformation"]
      : moreInformationArrayDeserializer(item["moreInformation"]),
  };
}

/** Migration Issues Category */
export enum KnownMigrationIssuesCategory {
  /** Issue - Migration Issues Category */
  Issue = "Issue",
  /** Warning - Migration Issues Category */
  Warning = "Warning",
  /** Internal - Migration Issues Category */
  Internal = "Internal",
}

/**
 * Migration Issues Category \
 * {@link KnownMigrationIssuesCategory} can be used interchangeably with MigrationIssuesCategory,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Issue**: Issue - Migration Issues Category \
 * **Warning**: Warning - Migration Issues Category \
 * **Internal**: Internal - Migration Issues Category
 */
export type MigrationIssuesCategory = string;

export function moreInformationArrayDeserializer(result: Array<MoreInformation>): any[] {
  return result.map((item) => {
    return moreInformationDeserializer(item);
  });
}

/** More information details. */
export interface MoreInformation {
  /** The title of the information. */
  readonly title: string;
  /** The URL of the information. */
  readonly url: string;
}

export function moreInformationDeserializer(item: any): MoreInformation {
  return {
    title: item["title"],
    url: item["url"],
  };
}

export function skusMigrationSuitabilityArrayDeserializer(
  result: Array<SkusMigrationSuitability>,
): any[] {
  return result.map((item) => {
    return skusMigrationSuitabilityDeserializer(item);
  });
}

/** Skus details. */
export interface SkusMigrationSuitability {
  /** The Sku kind. */
  readonly kind?: SkuKind;
  /** The resource uri. */
  readonly resourceUri?: string;
  /** The sku name. */
  readonly displayName?: string;
  /** The sku id. */
  readonly id?: string;
  /** The sku type. */
  readonly type?: SkuType;
  /** The source name. */
  readonly sources?: SourceRecommendationMigrationSuitability[];
  /** The sku details. */
  readonly details?: SkuDetails;
}

export function skusMigrationSuitabilityDeserializer(item: any): SkusMigrationSuitability {
  return {
    kind: item["kind"],
    resourceUri: item["resourceUri"],
    displayName: item["displayName"],
    id: item["id"],
    type: item["type"],
    sources: !item["sources"]
      ? item["sources"]
      : sourceRecommendationMigrationSuitabilityArrayDeserializer(item["sources"]),
    details: !item["details"] ? item["details"] : skuDetailsDeserializer(item["details"]),
  };
}

/** Sku Kind */
export enum KnownSkuKind {
  /** Endpoint - Sku Kind */
  Endpoint = "Endpoint",
  /** Details - Sku Kind */
  Details = "Details",
}

/**
 * Sku Kind \
 * {@link KnownSkuKind} can be used interchangeably with SkuKind,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Endpoint**: Endpoint - Sku Kind \
 * **Details**: Details - Sku Kind
 */
export type SkuKind = string;

/** Sku type */
export enum KnownSkuType {
  /** Unknown - Sku type */
  Unknown = "Unknown",
  /** Compute - Sku type */
  Compute = "Compute",
  /** Storage - Sku type */
  Storage = "Storage",
  /** Network - Sku type */
  Network = "Network",
  /** AppServicePlan - Sku type */
  AppServicePlan = "AppServicePlan",
  /** AzureSpringApps - Sku type */
  AzureSpringApps = "AzureSpringApps",
}

/**
 * Sku type \
 * {@link KnownSkuType} can be used interchangeably with SkuType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Sku type \
 * **Compute**: Compute - Sku type \
 * **Storage**: Storage - Sku type \
 * **Network**: Network - Sku type \
 * **AppServicePlan**: AppServicePlan - Sku type \
 * **AzureSpringApps**: AzureSpringApps - Sku type
 */
export type SkuType = string;

export function sourceRecommendationMigrationSuitabilityArrayDeserializer(
  result: Array<SourceRecommendationMigrationSuitability>,
): any[] {
  return result.map((item) => {
    return sourceRecommendationMigrationSuitabilityDeserializer(item);
  });
}

/** Source recommendation details. */
export interface SourceRecommendationMigrationSuitability {
  /** The sku name. */
  readonly name?: string;
  /** The sku type. */
  readonly migrationSuitability?: MigrationSuitability;
}

export function sourceRecommendationMigrationSuitabilityDeserializer(
  item: any,
): SourceRecommendationMigrationSuitability {
  return {
    name: item["name"],
    migrationSuitability: !item["migrationSuitability"]
      ? item["migrationSuitability"]
      : migrationSuitabilityDeserializer(item["migrationSuitability"]),
  };
}

/** Sku details. */
export interface SkuDetails {
  /** The sku type. */
  readonly skuType?: SkuType;
  /** The sku name. */
  readonly skuName?: string;
  /** The capabilities. */
  readonly capabilities?: NameValuePair[];
  /** The sku cost details. */
  readonly totalCost?: CostDetailsCommon[];
  /** The sku savings details. */
  readonly totalSavings?: SavingsDetailsCommon[];
}

export function skuDetailsDeserializer(item: any): SkuDetails {
  return {
    skuType: item["skuType"],
    skuName: item["skuName"],
    capabilities: !item["capabilities"]
      ? item["capabilities"]
      : nameValuePairArrayDeserializer(item["capabilities"]),
    totalCost: !item["totalCost"]
      ? item["totalCost"]
      : costDetailsCommonArrayDeserializer(item["totalCost"]),
    totalSavings: !item["totalSavings"]
      ? item["totalSavings"]
      : savingsDetailsCommonArrayDeserializer(item["totalSavings"]),
  };
}

export function nameValuePairArrayDeserializer(result: Array<NameValuePair>): any[] {
  return result.map((item) => {
    return nameValuePairDeserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePair {
  /** The name. */
  readonly name?: string;
  /** The value. */
  readonly value?: string;
}

export function nameValuePairDeserializer(item: any): NameValuePair {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** The avs assessed machine extended details. */
export interface AvsAssessedMachineExtendedDetails {
  /** List of errors for this machine. */
  readonly errors?: ErrorModel[];
  /** List of Disks that were assessed as part of this machine's assessment. */
  readonly disks?: AvsAssessedDiskV2[];
  /**
   * List of Network Adapters that were assessed as part of this machine's
   * assessment.
   */
  readonly networkAdapters?: AvsAssessedNetworkAdapter[];
  /** Gets the storage in use. */
  readonly storageInUseGB?: number;
  /** Boot type of machine discovered in private data center. */
  readonly bootType?: MachineBootType;
  /** Operating system as reported by datacenter management solution. */
  readonly operatingSystemType?: string;
  /** Operating system as reported by datacenter management solution. */
  readonly operatingSystemName?: string;
  /** Operating system version as reported by datacenter management solution. */
  readonly operatingSystemVersion?: string;
  /** Operating system architecture as reported by datacenter management solution. */
  readonly operatingSystemArchitecture?: GuestOperatingSystemArchitecture;
  /** Display Name of the Machine. */
  readonly displayName?: string;
  /** Description for the machine. */
  readonly description?: string;
  /** Data center management server name. */
  readonly datacenterManagementServerName?: string;
  /** Megabytes of memory found allocated for the machine in private data center. */
  readonly megabytesOfMemory?: number;
  /** Number of CPU cores found on the machine. */
  readonly numberOfCores?: number;
  /**
   * Percentile of Percentage of Cores Utilized noted during time period T.
   *
   *    Here N and T are settings on Assessment.
   */
  readonly percentageCoresUtilization?: number;
  /**
   * Percentile of Percentage of Memory Utilized noted during time period T.
   *
   *     Here N and T are settings on Assessment.
   */
  readonly percentageMemoryUtilization?: number;
  /** Gets the Avs Target Type for Machine. */
  readonly avsTargetNode?: AzureAvsNodeType;
}

export function avsAssessedMachineExtendedDetailsDeserializer(
  item: any,
): AvsAssessedMachineExtendedDetails {
  return {
    errors: !item["errors"] ? item["errors"] : errorArrayDeserializer(item["errors"]),
    disks: !item["disks"] ? item["disks"] : avsAssessedDiskV2ArrayDeserializer(item["disks"]),
    networkAdapters: !item["networkAdapters"]
      ? item["networkAdapters"]
      : avsAssessedNetworkAdapterArrayDeserializer(item["networkAdapters"]),
    storageInUseGB: item["storageInUseGB"],
    bootType: item["bootType"],
    operatingSystemType: item["operatingSystemType"],
    operatingSystemName: item["operatingSystemName"],
    operatingSystemVersion: item["operatingSystemVersion"],
    operatingSystemArchitecture: item["operatingSystemArchitecture"],
    displayName: item["displayName"],
    description: item["description"],
    datacenterManagementServerName: item["datacenterManagementServerName"],
    megabytesOfMemory: item["megabytesOfMemory"],
    numberOfCores: item["numberOfCores"],
    percentageCoresUtilization: item["percentageCoresUtilization"],
    percentageMemoryUtilization: item["percentageMemoryUtilization"],
    avsTargetNode: item["avsTargetNode"],
  };
}

export function errorArrayDeserializer(result: Array<ErrorModel>): any[] {
  return result.map((item) => {
    return errorDeserializer(item);
  });
}

/** Error web model class. */
export interface ErrorModel {
  /** Gets the error ID. */
  readonly id?: number;
  /** Gets the error code. */
  readonly code?: string;
  /** Gets the Run as account ID. */
  readonly runAsAccountId?: string;
  /** Gets the Appliance name. */
  readonly applianceName?: string;
  /** Gets the error message. */
  readonly message?: string;
  /** Gets the error summary message. */
  readonly summaryMessage?: string;
  /** Gets the agent scenario where this error occurred. */
  readonly agentScenario?: string;
  /** Gets the error possible causes. */
  readonly possibleCauses?: string;
  /** Gets the recommended action for the error. */
  readonly recommendedAction?: string;
  /** Gets the error severity. */
  readonly severity?: string;
  /** Gets the error message parameters. */
  readonly messageParameters?: NameValuePair[];
  /** Gets the time stamp when the error was updated. */
  readonly updatedTimeStamp?: Date;
  /** Gets the type of assessment impacted by this error. */
  readonly impactedAssessmentType?: string;
}

export function errorDeserializer(item: any): ErrorModel {
  return {
    id: item["id"],
    code: item["code"],
    runAsAccountId: item["runAsAccountId"],
    applianceName: item["applianceName"],
    message: item["message"],
    summaryMessage: item["summaryMessage"],
    agentScenario: item["agentScenario"],
    possibleCauses: item["possibleCauses"],
    recommendedAction: item["recommendedAction"],
    severity: item["severity"],
    messageParameters: !item["messageParameters"]
      ? item["messageParameters"]
      : nameValuePairArrayDeserializer(item["messageParameters"]),
    updatedTimeStamp: !item["updatedTimeStamp"]
      ? item["updatedTimeStamp"]
      : new Date(item["updatedTimeStamp"]),
    impactedAssessmentType: item["impactedAssessmentType"],
  };
}

export function avsAssessedDiskV2ArrayDeserializer(result: Array<AvsAssessedDiskV2>): any[] {
  return result.map((item) => {
    return avsAssessedDiskV2Deserializer(item);
  });
}

/** AVS assessed disk web model class. */
export interface AvsAssessedDiskV2 {
  /** Gets the ID of the disk. */
  readonly name?: string;
  /** Gets the display name of the disk. */
  readonly displayName?: string;
  /** Gigabytes Provisioned for a disk in private data center. */
  readonly gigabytesProvisioned?: number;
  /** Disk Read Throughput in MB/s. */
  readonly megabytesPerSecondOfRead?: number;
  /** Disk Write Throughput in MB/s. */
  readonly megabytesPerSecondOfWrite?: number;
  /** Read Operations per second. */
  readonly numberOfReadOperationsPerSecond?: number;
  /** Write Operations per second. */
  readonly numberOfWriteOperationsPerSecond?: number;
  /** Associated storage Type recommended for Disk. */
  readonly assessedExternalStorageType?: ExternalStorageType;
  /** Estimated Disk Size in GB. */
  readonly estimatedDiskSizeInGB?: number;
}

export function avsAssessedDiskV2Deserializer(item: any): AvsAssessedDiskV2 {
  return {
    name: item["name"],
    displayName: item["displayName"],
    gigabytesProvisioned: item["gigabytesProvisioned"],
    megabytesPerSecondOfRead: item["megabytesPerSecondOfRead"],
    megabytesPerSecondOfWrite: item["megabytesPerSecondOfWrite"],
    numberOfReadOperationsPerSecond: item["numberOfReadOperationsPerSecond"],
    numberOfWriteOperationsPerSecond: item["numberOfWriteOperationsPerSecond"],
    assessedExternalStorageType: item["assessedExternalStorageType"],
    estimatedDiskSizeInGB: item["estimatedDiskSizeInGB"],
  };
}

export function avsAssessedNetworkAdapterArrayDeserializer(
  result: Array<AvsAssessedNetworkAdapter>,
): any[] {
  return result.map((item) => {
    return avsAssessedNetworkAdapterDeserializer(item);
  });
}

/** Second level object returned as part of AVS AssessedMachine REST resource. */
export interface AvsAssessedNetworkAdapter {
  /** Mac address of the NIC. */
  readonly macAddress?: string;
  /** IP V4 addresses for the machine. */
  readonly ipAddresses?: string[];
  /** Gets the display name of the network adapter. */
  readonly displayName?: string;
  /** Gets the name of the network adapter. */
  readonly name?: string;
  /**
   * Gets the Recieved data for Network Adapter in MB/s.
   *             This value is
   * the percentile of historical data based on options selected in Assessment.
   */
  readonly megabytesPerSecondRecieved?: number;
  /**
   * Gets the Transmitted data for Network Adapter in MB/s.
   *             This value
   * is the percentile of historical data based on options selected in Assessment.
   */
  readonly megabytesPerSecondTransmitted?: number;
}

export function avsAssessedNetworkAdapterDeserializer(item: any): AvsAssessedNetworkAdapter {
  return {
    macAddress: item["macAddress"],
    ipAddresses: !item["ipAddresses"]
      ? item["ipAddresses"]
      : item["ipAddresses"].map((p: any) => {
          return p;
        }),
    displayName: item["displayName"],
    name: item["name"],
    megabytesPerSecondRecieved: item["megabytesPerSecondRecieved"],
    megabytesPerSecondTransmitted: item["megabytesPerSecondTransmitted"],
  };
}

/** Machine Boot Type */
export enum KnownMachineBootType {
  /** Unknown - Machine Boot Type */
  Unknown = "Unknown",
  /** EFI - Machine Boot Type */
  EFI = "EFI",
  /** BIOS - Machine Boot Type */
  Bios = "BIOS",
  /** NotSpecified - Machine Boot Type */
  NotSpecified = "NotSpecified",
}

/**
 * Machine Boot Type \
 * {@link KnownMachineBootType} can be used interchangeably with MachineBootType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Machine Boot Type \
 * **EFI**: EFI - Machine Boot Type \
 * **BIOS**: BIOS - Machine Boot Type \
 * **NotSpecified**: NotSpecified - Machine Boot Type
 */
export type MachineBootType = string;

/** Guest operating system architecture */
export enum KnownGuestOperatingSystemArchitecture {
  /** Unknown - Guest operating system architecture */
  Unknown = "Unknown",
  /** X86 - Guest operating system architecture */
  X86 = "X86",
  /** X64 - Guest operating system architecture */
  X64 = "X64",
}

/**
 * Guest operating system architecture \
 * {@link KnownGuestOperatingSystemArchitecture} can be used interchangeably with GuestOperatingSystemArchitecture,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Guest operating system architecture \
 * **X86**: X86 - Guest operating system architecture \
 * **X64**: X64 - Guest operating system architecture
 */
export type GuestOperatingSystemArchitecture = string;

/** Assessed machine type */
export enum KnownAssessedMachineType {
  /** Unknown - Assessed machine type */
  Unknown = "Unknown",
  /** AssessedMachine - Assessed machine type */
  AssessedMachine = "AssessedMachine",
  /** AvsAssessedMachine - Assessed machine type */
  AvsAssessedMachine = "AvsAssessedMachine",
  /** SqlAssessedMachine - Assessed machine type */
  SqlAssessedMachine = "SqlAssessedMachine",
}

/**
 * Assessed machine type \
 * {@link KnownAssessedMachineType} can be used interchangeably with AssessedMachineType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Assessed machine type \
 * **AssessedMachine**: AssessedMachine - Assessed machine type \
 * **AvsAssessedMachine**: AvsAssessedMachine - Assessed machine type \
 * **SqlAssessedMachine**: SqlAssessedMachine - Assessed machine type
 */
export type AssessedMachineType = string;

/** The response of a AvsAssessedMachineV2 list operation. */
export interface _AvsAssessedMachineV2ListResult {
  /** The AvsAssessedMachineV2 items on this page */
  value: AvsAssessedMachineV2[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _avsAssessedMachineV2ListResultDeserializer(
  item: any,
): _AvsAssessedMachineV2ListResult {
  return {
    value: avsAssessedMachineV2ArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function avsAssessedMachineV2ArrayDeserializer(result: Array<AvsAssessedMachineV2>): any[] {
  return result.map((item) => {
    return avsAssessedMachineV2Deserializer(item);
  });
}

/** AVS Assessment Summary REST resource. */
export interface AvsAssessmentV2Summary extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AvsAssessmentSummaryPropertiesV2;
}

export function avsAssessmentV2SummaryDeserializer(item: any): AvsAssessmentV2Summary {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : avsAssessmentSummaryPropertiesV2Deserializer(item["properties"]),
  };
}

/** Properties of the Machine Assessment V2 Summary. */
export interface AvsAssessmentSummaryPropertiesV2 {
  /** The summary type */
  readonly summaryType?: SummaryType;
  /** The summary name */
  readonly summaryName?: string;
  /** The source details list. */
  readonly sources?: SourceDetails[];
  /** The target details list. */
  readonly targets?: TargetDetails[];
  /** The target source mapping. */
  readonly targetSourceMapping?: TargetSourcePair[];
  /** The cost components. */
  readonly costComponents?: CostDetailsCommon[];
  /** The cost components. */
  readonly savingsComponents?: SavingsDetailsCommon[];
  /** Gets or sets the Assessment cloud suitability. */
  readonly suitability?: CloudSuitability;
  /** Gets or sets the Assessment suitability explanation. */
  readonly suitabilityExplanation?: AzureAvsSuitabilityExplanation;
  /** Recommended number of nodes. */
  readonly numberOfNodes?: number;
  /** Predicted CPU utilization. */
  readonly cpuUtilization?: number;
  /** Predicted RAM utilization. */
  readonly ramUtilization?: number;
  /** Predicted storage utilization. */
  readonly storageUtilization?: number;
  /** Predicted total CPU cores used. */
  readonly totalCpuCores?: number;
  /** Predicted total RAM used in GB. */
  readonly totalRamInGB?: number;
  /** Predicted total Storage used in GB. */
  readonly totalStorageInGB?: number;
  /** Estimated AVS SKU for Assessment. */
  readonly avsEstimatedNodes?: AvsEstimatedNode[];
  /** Estimated External Storage for Assessment. */
  readonly avsEstimatedExternalStorages?: AvsEstimatedExternalStorage[];
  /** Estimated External Storage for Assessment. */
  readonly avsEstimatedNetworks?: AvsEstimatedNetwork[];
  /** Limiting factor. */
  readonly limitingFactor?: string;
}

export function avsAssessmentSummaryPropertiesV2Deserializer(
  item: any,
): AvsAssessmentSummaryPropertiesV2 {
  return {
    summaryType: item["summaryType"],
    summaryName: item["summaryName"],
    sources: !item["sources"] ? item["sources"] : sourceDetailsArrayDeserializer(item["sources"]),
    targets: !item["targets"] ? item["targets"] : targetDetailsArrayDeserializer(item["targets"]),
    targetSourceMapping: !item["targetSourceMapping"]
      ? item["targetSourceMapping"]
      : targetSourcePairArrayDeserializer(item["targetSourceMapping"]),
    costComponents: !item["costComponents"]
      ? item["costComponents"]
      : costDetailsCommonArrayDeserializer(item["costComponents"]),
    savingsComponents: !item["savingsComponents"]
      ? item["savingsComponents"]
      : savingsDetailsCommonArrayDeserializer(item["savingsComponents"]),
    suitability: item["suitability"],
    suitabilityExplanation: item["suitabilityExplanation"],
    numberOfNodes: item["numberOfNodes"],
    cpuUtilization: item["cpuUtilization"],
    ramUtilization: item["ramUtilization"],
    storageUtilization: item["storageUtilization"],
    totalCpuCores: item["totalCpuCores"],
    totalRamInGB: item["totalRamInGB"],
    totalStorageInGB: item["totalStorageInGB"],
    avsEstimatedNodes: !item["avsEstimatedNodes"]
      ? item["avsEstimatedNodes"]
      : avsEstimatedNodeArrayDeserializer(item["avsEstimatedNodes"]),
    avsEstimatedExternalStorages: !item["avsEstimatedExternalStorages"]
      ? item["avsEstimatedExternalStorages"]
      : avsEstimatedExternalStorageArrayDeserializer(item["avsEstimatedExternalStorages"]),
    avsEstimatedNetworks: !item["avsEstimatedNetworks"]
      ? item["avsEstimatedNetworks"]
      : avsEstimatedNetworkArrayDeserializer(item["avsEstimatedNetworks"]),
    limitingFactor: item["limitingFactor"],
  };
}

/** Summary Type */
export enum KnownSummaryType {
  /** Unknown - Summary Type */
  Unknown = "Unknown",
  /** Strategy - Summary Type */
  Strategy = "Strategy",
  /** Target - Summary Type */
  Target = "Target",
}

/**
 * Summary Type \
 * {@link KnownSummaryType} can be used interchangeably with SummaryType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Summary Type \
 * **Strategy**: Strategy - Summary Type \
 * **Target**: Target - Summary Type
 */
export type SummaryType = string;

export function sourceDetailsArrayDeserializer(result: Array<SourceDetails>): any[] {
  return result.map((item) => {
    return sourceDetailsDeserializer(item);
  });
}

/** Source details */
export interface SourceDetails {
  /** The source name. */
  readonly sourceName?: AssessmentSource;
  /** The source type. */
  readonly sourceType?: MigrateWorkloadType;
  /** The migration platform. */
  readonly platform?: MigrationPlatform;
  /** The count of a type of source. */
  readonly count?: number;
}

export function sourceDetailsDeserializer(item: any): SourceDetails {
  return {
    sourceName: item["sourceName"],
    sourceType: item["sourceType"],
    platform: item["platform"],
    count: item["count"],
  };
}

/** Assessment Source */
export enum KnownAssessmentSource {
  /** Unknown - Assessment Source */
  Unknown = "Unknown",
  /** Machine - Assessment Source */
  Machine = "Machine",
  /** IIS - Assessment Source */
  IIS = "IIS",
  /** TomCat - Assessment Source */
  TomCat = "TomCat",
  /** OracleServer - Assessment Source */
  OracleServer = "OracleServer",
  /** OracleDatabase - Assessment Source */
  OracleDatabase = "OracleDatabase",
  /** SAPInstance - Assessment Source */
  SAPInstance = "SAPInstance",
  /** SpringbootApplication - Assessment Source */
  SpringbootApplication = "SpringbootApplication",
  /** MySQLServer - Assessment Source */
  MySQLServer = "MySQLServer",
  /** SqlInstance - Assessment Source */
  SqlInstance = "SqlInstance",
  /** SqlDatabase - Assessment Source */
  SqlDatabase = "SqlDatabase",
  /** WebApps - Assessment Source */
  WebApps = "WebApps",
}

/**
 * Assessment Source \
 * {@link KnownAssessmentSource} can be used interchangeably with AssessmentSource,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Assessment Source \
 * **Machine**: Machine - Assessment Source \
 * **IIS**: IIS - Assessment Source \
 * **TomCat**: TomCat - Assessment Source \
 * **OracleServer**: OracleServer - Assessment Source \
 * **OracleDatabase**: OracleDatabase - Assessment Source \
 * **SAPInstance**: SAPInstance - Assessment Source \
 * **SpringbootApplication**: SpringbootApplication - Assessment Source \
 * **MySQLServer**: MySQLServer - Assessment Source \
 * **SqlInstance**: SqlInstance - Assessment Source \
 * **SqlDatabase**: SqlDatabase - Assessment Source \
 * **WebApps**: WebApps - Assessment Source
 */
export type AssessmentSource = string;

export function targetDetailsArrayDeserializer(result: Array<TargetDetails>): any[] {
  return result.map((item) => {
    return targetDetailsDeserializer(item);
  });
}

/** Target details */
export interface TargetDetails {
  /** The target name. */
  readonly targetName?: AzureTarget;
  /** The target type. */
  readonly targetType?: MigrateWorkloadType;
  /** The migration platform. */
  readonly platform?: MigrationPlatform;
  /** The count of a type of source. */
  readonly count?: number;
}

export function targetDetailsDeserializer(item: any): TargetDetails {
  return {
    targetName: item["targetName"],
    targetType: item["targetType"],
    platform: item["platform"],
    count: item["count"],
  };
}

export function targetSourcePairArrayDeserializer(result: Array<TargetSourcePair>): any[] {
  return result.map((item) => {
    return targetSourcePairDeserializer(item);
  });
}

/** Target source pair */
export interface TargetSourcePair {
  /** The source name. */
  readonly sourceRef?: AssessmentSource;
  /** The target name. */
  readonly targetRef?: AzureTarget;
  /** The count of a type of source. */
  readonly sourceCount?: number;
  /** The count of a type of target. */
  readonly targetCount?: number;
  /** The migration details. */
  readonly migrationDetails?: MigrationDetails;
  /** The management details. */
  readonly managementDetails?: ManagementDetails[];
  /** The cost details. */
  readonly costDetails?: CostDetailsCommon[];
  /** The savings details. */
  readonly savingsDetails?: SavingsDetailsCommon[];
  /** The confidence score. */
  readonly confidenceScore?: number;
}

export function targetSourcePairDeserializer(item: any): TargetSourcePair {
  return {
    sourceRef: item["sourceRef"],
    targetRef: item["targetRef"],
    sourceCount: item["sourceCount"],
    targetCount: item["targetCount"],
    migrationDetails: !item["migrationDetails"]
      ? item["migrationDetails"]
      : migrationDetailsDeserializer(item["migrationDetails"]),
    managementDetails: !item["managementDetails"]
      ? item["managementDetails"]
      : managementDetailsArrayDeserializer(item["managementDetails"]),
    costDetails: !item["costDetails"]
      ? item["costDetails"]
      : costDetailsCommonArrayDeserializer(item["costDetails"]),
    savingsDetails: !item["savingsDetails"]
      ? item["savingsDetails"]
      : savingsDetailsCommonArrayDeserializer(item["savingsDetails"]),
    confidenceScore: item["confidenceScore"],
  };
}

/** Migration details. */
export interface MigrationDetails {
  /** The readiness summary. */
  readonly readinessSummary?: NameValuePairCloudSuitabilityCommon[];
  /** The migration type */
  readonly migrationType?: MigrationType;
}

export function migrationDetailsDeserializer(item: any): MigrationDetails {
  return {
    readinessSummary: !item["readinessSummary"]
      ? item["readinessSummary"]
      : nameValuePairCloudSuitabilityCommonArrayDeserializer(item["readinessSummary"]),
    migrationType: item["migrationType"],
  };
}

export function nameValuePairCloudSuitabilityCommonArrayDeserializer(
  result: Array<NameValuePairCloudSuitabilityCommon>,
): any[] {
  return result.map((item) => {
    return nameValuePairCloudSuitabilityCommonDeserializer(item);
  });
}

/** The generic name value pair. */
export interface NameValuePairCloudSuitabilityCommon {
  /** The name. */
  readonly name?: CloudSuitabilityCommon;
  /** The value. */
  readonly value?: number;
}

export function nameValuePairCloudSuitabilityCommonDeserializer(
  item: any,
): NameValuePairCloudSuitabilityCommon {
  return {
    name: item["name"],
    value: item["value"],
  };
}

/** Migration Type */
export enum KnownMigrationType {
  /** Unknown - Migration Type */
  Unknown = "Unknown",
  /** Replatform - Migration Type */
  Replatform = "Replatform",
  /** Rehost - Migration Type */
  Rehost = "Rehost",
  /** Retain - Migration Type */
  Retain = "Retain",
  /** Rearchitect - Migration Type */
  Rearchitect = "Rearchitect",
}

/**
 * Migration Type \
 * {@link KnownMigrationType} can be used interchangeably with MigrationType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown - Migration Type \
 * **Replatform**: Replatform - Migration Type \
 * **Rehost**: Rehost - Migration Type \
 * **Retain**: Retain - Migration Type \
 * **Rearchitect**: Rearchitect - Migration Type
 */
export type MigrationType = string;

export function managementDetailsArrayDeserializer(result: Array<ManagementDetails>): any[] {
  return result.map((item) => {
    return managementDetailsDeserializer(item);
  });
}

/** Management details. */
export interface ManagementDetails {
  /** The management summary name. */
  readonly name?: AzureManagementOfferingType;
  /** The management suitability summary. */
  readonly readinessSummary?: NameValuePairCloudSuitabilityCommon[];
}

export function managementDetailsDeserializer(item: any): ManagementDetails {
  return {
    name: item["name"],
    readinessSummary: !item["readinessSummary"]
      ? item["readinessSummary"]
      : nameValuePairCloudSuitabilityCommonArrayDeserializer(item["readinessSummary"]),
  };
}

/** Azure management Offering type */
export enum KnownAzureManagementOfferingType {
  /** No - Azure management Offering type */
  No = "No",
  /** SCOMMI - Azure management Offering type */
  Scommi = "SCOMMI",
  /** AzMon - Azure management Offering type */
  AzMon = "AzMon",
  /** AUM - Azure management Offering type */
  AUM = "AUM",
  /** AzureBackup - Azure management Offering type */
  AzureBackup = "AzureBackup",
}

/**
 * Azure management Offering type \
 * {@link KnownAzureManagementOfferingType} can be used interchangeably with AzureManagementOfferingType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **No**: No - Azure management Offering type \
 * **SCOMMI**: SCOMMI - Azure management Offering type \
 * **AzMon**: AzMon - Azure management Offering type \
 * **AUM**: AUM - Azure management Offering type \
 * **AzureBackup**: AzureBackup - Azure management Offering type
 */
export type AzureManagementOfferingType = string;

/** Cloud Suitability for Azure. */
export enum KnownCloudSuitability {
  /** Unknown. Indicates missing data. */
  Unknown = "Unknown",
  /** Not Suitable for Azure. */
  NotSuitable = "NotSuitable",
  /** Suitable for Azure. */
  Suitable = "Suitable",
  /** Conditionally Suitable for Azure. */
  ConditionallySuitable = "ConditionallySuitable",
  /** Unknown Readiness for Azure. */
  ReadinessUnknown = "ReadinessUnknown",
}

/**
 * Cloud Suitability for Azure. \
 * {@link KnownCloudSuitability} can be used interchangeably with CloudSuitability,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown. Indicates missing data. \
 * **NotSuitable**: Not Suitable for Azure. \
 * **Suitable**: Suitable for Azure. \
 * **ConditionallySuitable**: Conditionally Suitable for Azure. \
 * **ReadinessUnknown**: Unknown Readiness for Azure.
 */
export type CloudSuitability = string;

/** Azure AVS Suitability Detail */
export enum KnownAzureAvsSuitabilityExplanation {
  /** Suitability Unknown */
  Unknown = "Unknown",
  /** Suitability Not applicable */
  NotApplicable = "NotApplicable",
  /** Unsupported location for selected node */
  UnsupportedLocationForSelectedNode = "UnsupportedLocationForSelectedNode",
  /** Internal error in recommendation */
  InternalErrorInRecommendation = "InternalErrorInRecommendation",
  /** Unsupported location for selected external storage types */
  UnsupportedLocationForSelectedExternalStorageTypes = "UnsupportedLocationForSelectedExternalStorageTypes",
}

/**
 * Azure AVS Suitability Detail \
 * {@link KnownAzureAvsSuitabilityExplanation} can be used interchangeably with AzureAvsSuitabilityExplanation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Suitability Unknown \
 * **NotApplicable**: Suitability Not applicable \
 * **UnsupportedLocationForSelectedNode**: Unsupported location for selected node \
 * **InternalErrorInRecommendation**: Internal error in recommendation \
 * **UnsupportedLocationForSelectedExternalStorageTypes**: Unsupported location for selected external storage types
 */
export type AzureAvsSuitabilityExplanation = string;

export function avsEstimatedNodeArrayDeserializer(result: Array<AvsEstimatedNode>): any[] {
  return result.map((item) => {
    return avsEstimatedNodeDeserializer(item);
  });
}

/** Details on the Estimated nodes for AVS Assessment. */
export interface AvsEstimatedNode {
  /** Total monthly cost for type and number of nodes. */
  monthlyPrice?: number;
  /** Recommended SKU. */
  nodeType?: AzureAvsNodeType;
  /** Number of nodes that will be needed. */
  nodeNumber?: number;
  /** Predicted CPU utilization. */
  cpuUtilization?: number;
  /** Predicted RAM utilization. */
  ramUtilization?: number;
  /** Predicted storage utilization. */
  storageUtilization?: number;
  /** Predicted total CPU cores across the set of nodes. */
  totalCpu?: number;
  /** Predicted total RAM used in GB. */
  totalRam?: number;
  /** Predicted total Storage used in GB. */
  totalStorage?: number;
  /** Pricing model indicates what hour multiplier to use while estimating the Nodes cost. */
  pricingModel?: AzureReservedInstance;
  /** FttRaidLevel recommended for Node. */
  fttRaidLevel?: FttAndRaidLevel;
}

export function avsEstimatedNodeDeserializer(item: any): AvsEstimatedNode {
  return {
    monthlyPrice: item["monthlyPrice"],
    nodeType: item["nodeType"],
    nodeNumber: item["nodeNumber"],
    cpuUtilization: item["cpuUtilization"],
    ramUtilization: item["ramUtilization"],
    storageUtilization: item["storageUtilization"],
    totalCpu: item["totalCpu"],
    totalRam: item["totalRam"],
    totalStorage: item["totalStorage"],
    pricingModel: item["pricingModel"],
    fttRaidLevel: item["fttRaidLevel"],
  };
}

/** Azure reserved Instance */
export enum KnownAzureReservedInstance {
  /** None Azure reserved Instance */
  None = "None",
  /** RI1Year Azure reserved Instance */
  RI1Year = "RI1Year",
  /** RI3Year Azure reserved Instance */
  RI3Year = "RI3Year",
}

/**
 * Azure reserved Instance \
 * {@link KnownAzureReservedInstance} can be used interchangeably with AzureReservedInstance,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **None**: None Azure reserved Instance \
 * **RI1Year**: RI1Year Azure reserved Instance \
 * **RI3Year**: RI3Year Azure reserved Instance
 */
export type AzureReservedInstance = string;

export function avsEstimatedExternalStorageArrayDeserializer(
  result: Array<AvsEstimatedExternalStorage>,
): any[] {
  return result.map((item) => {
    return avsEstimatedExternalStorageDeserializer(item);
  });
}

/** Details on the Estimated External Storage for AVS Assessment. */
export interface AvsEstimatedExternalStorage {
  /** Total monthly cost for type of storage. */
  monthlyPrice?: number;
  /** Recommended External Storage. */
  storageType?: ExternalStorageType;
  /** Predicted total Storage used in GB. */
  totalStorageInGB?: number;
  /** Predicted storage utilization. */
  storageUtilization?: number;
}

export function avsEstimatedExternalStorageDeserializer(item: any): AvsEstimatedExternalStorage {
  return {
    monthlyPrice: item["monthlyPrice"],
    storageType: item["storageType"],
    totalStorageInGB: item["totalStorageInGB"],
    storageUtilization: item["storageUtilization"],
  };
}

export function avsEstimatedNetworkArrayDeserializer(result: Array<AvsEstimatedNetwork>): any[] {
  return result.map((item) => {
    return avsEstimatedNetworkDeserializer(item);
  });
}

/** Details on the Estimated Network Costs for AVS Assessment. */
export interface AvsEstimatedNetwork {
  /** Monthly cost for network type. */
  monthlyPrice?: number;
  /** Recommended Network Sku. */
  networkType?: NetworkSkuType;
}

export function avsEstimatedNetworkDeserializer(item: any): AvsEstimatedNetwork {
  return {
    monthlyPrice: item["monthlyPrice"],
    networkType: item["networkType"],
  };
}

/** Different network skus. */
export enum KnownNetworkSkuType {
  /** Indicates un-supported network SKU. */
  Unknown = "Unknown",
  /** Indicates No network SKU. */
  None = "None",
  /** Express Route network type with Ultra SKU. */
  ExpressRouteUltra = "ExpressRouteUltra",
}

/**
 * Different network skus. \
 * {@link KnownNetworkSkuType} can be used interchangeably with NetworkSkuType,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Indicates un-supported network SKU. \
 * **None**: Indicates No network SKU. \
 * **ExpressRouteUltra**: Express Route network type with Ultra SKU.
 */
export type NetworkSkuType = string;

/** The response of a AvsAssessmentV2Summary list operation. */
export interface _AvsAssessmentV2SummaryListResult {
  /** The AvsAssessmentV2Summary items on this page */
  value: AvsAssessmentV2Summary[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _avsAssessmentV2SummaryListResultDeserializer(
  item: any,
): _AvsAssessmentV2SummaryListResult {
  return {
    value: avsAssessmentV2SummaryArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function avsAssessmentV2SummaryArrayDeserializer(
  result: Array<AvsAssessmentV2Summary>,
): any[] {
  return result.map((item) => {
    return avsAssessmentV2SummaryDeserializer(item);
  });
}

/** AVS Assessment Summary REST resource. */
export interface AvsGraphAssessmentOptions extends ProxyResource {
  /** The resource-specific properties for this resource. */
  properties?: AvsGraphAssessmentOptionsProperties;
}

export function avsGraphAssessmentOptionsDeserializer(item: any): AvsGraphAssessmentOptions {
  return {
    id: item["id"],
    name: item["name"],
    type: item["type"],
    systemData: !item["systemData"]
      ? item["systemData"]
      : systemDataDeserializer(item["systemData"]),
    properties: !item["properties"]
      ? item["properties"]
      : avsGraphAssessmentOptionsPropertiesDeserializer(item["properties"]),
  };
}

/** The properties of the assessment options. */
export interface AvsGraphAssessmentOptionsProperties {
  /** Gets or sets the edges. */
  edges: Record<string, AvsAssessmentOptionsOutboundEdgeGroup>;
}

export function avsGraphAssessmentOptionsPropertiesDeserializer(
  item: any,
): AvsGraphAssessmentOptionsProperties {
  return {
    edges: avsAssessmentOptionsOutboundEdgeGroupRecordDeserializer(item["edges"]),
  };
}

export function avsAssessmentOptionsOutboundEdgeGroupRecordDeserializer(
  item: Record<string, any>,
): Record<string, AvsAssessmentOptionsOutboundEdgeGroup> {
  const result: Record<string, any> = {};
  Object.keys(item).map((key) => {
    result[key] = !item[key]
      ? item[key]
      : avsAssessmentOptionsOutboundEdgeGroupDeserializer(item[key]);
  });
  return result;
}

/** A class that represents the outbound edges from a given node. */
export interface AvsAssessmentOptionsOutboundEdgeGroup {
  /** Gets or sets the Azure Locations. */
  targetLocations: AzureLocation[];
  /** Gets or sets the Azure Currency. */
  currencies: AzureCurrency[];
  /** Gets or sets the Assessment Savings Options. */
  savingsOptions: SavingsOptions[];
  /** Gets or sets the Licensing Program. */
  licensingProgram: LicensingProgram[];
  /** Gets or sets the Avs External Storage Type. */
  avsExternalStorageTypes: ExternalStorageType[];
  /** Gets or sets the Azure Avs Node Type. */
  avsNodes: AzureAvsNodeType[];
  /** Gets or sets the Azure SQL service tiers. */
  failuresToTolerateAndRaidLevelValues: FttAndRaidLevel[];
}

export function avsAssessmentOptionsOutboundEdgeGroupDeserializer(
  item: any,
): AvsAssessmentOptionsOutboundEdgeGroup {
  return {
    targetLocations: item["targetLocations"].map((p: any) => {
      return p;
    }),
    currencies: item["currencies"].map((p: any) => {
      return p;
    }),
    savingsOptions: item["savingsOptions"].map((p: any) => {
      return p;
    }),
    licensingProgram: item["licensingProgram"].map((p: any) => {
      return p;
    }),
    avsExternalStorageTypes: item["avsExternalStorageTypes"].map((p: any) => {
      return p;
    }),
    avsNodes: item["avsNodes"].map((p: any) => {
      return p;
    }),
    failuresToTolerateAndRaidLevelValues: item["failuresToTolerateAndRaidLevelValues"].map(
      (p: any) => {
        return p;
      },
    ),
  };
}

/** Location for Azure. */
export enum KnownAzureLocation {
  /** Unknown Location for Azure */
  Unknown = "Unknown",
  /** EastAsia Location for Azure */
  EastAsia = "EastAsia",
  /** SoutheastAsia Location for Azure */
  SoutheastAsia = "SoutheastAsia",
  /** AustraliaEast Location for Azure */
  AustraliaEast = "AustraliaEast",
  /** AustraliaSoutheast Location for Azure */
  AustraliaSoutheast = "AustraliaSoutheast",
  /** BrazilSouth Location for Azure */
  BrazilSouth = "BrazilSouth",
  /** CanadaCentral Location for Azure */
  CanadaCentral = "CanadaCentral",
  /** CanadaEast Location for Azure */
  CanadaEast = "CanadaEast",
  /** WestEurope Location for Azure */
  WestEurope = "WestEurope",
  /** NorthEurope Location for Azure */
  NorthEurope = "NorthEurope",
  /** CentralIndia Location for Azure */
  CentralIndia = "CentralIndia",
  /** SouthIndia Location for Azure */
  SouthIndia = "SouthIndia",
  /** WestIndia Location for Azure */
  WestIndia = "WestIndia",
  /** JapanEast Location for Azure */
  JapanEast = "JapanEast",
  /** JapanWest Location for Azure */
  JapanWest = "JapanWest",
  /** KoreaCentral Location for Azure */
  KoreaCentral = "KoreaCentral",
  /** KoreaSouth Location for Azure */
  KoreaSouth = "KoreaSouth",
  /** UkWest Location for Azure */
  UkWest = "UkWest",
  /** UkSouth Location for Azure */
  UkSouth = "UkSouth",
  /** NorthCentralUs Location for Azure */
  NorthCentralUs = "NorthCentralUs",
  /** EastUs Location for Azure */
  EastUs = "EastUs",
  /** WestUs2 Location for Azure */
  WestUs2 = "WestUs2",
  /** SouthCentralUs Location for Azure */
  SouthCentralUs = "SouthCentralUs",
  /** CentralUs Location for Azure */
  CentralUs = "CentralUs",
  /** EastUs2 Location for Azure */
  EastUs2 = "EastUs2",
  /** WestUs Location for Azure */
  WestUs = "WestUs",
  /** WestCentralUs Location for Azure */
  WestCentralUs = "WestCentralUs",
  /** GermanyCentral Location for Azure */
  GermanyCentral = "GermanyCentral",
  /** GermanyNortheast Location for Azure */
  GermanyNortheast = "GermanyNortheast",
  /** ChinaNorth Location for Azure */
  ChinaNorth = "ChinaNorth",
  /** ChinaEast Location for Azure */
  ChinaEast = "ChinaEast",
  /** USGovArizona Location for Azure */
  USGovArizona = "USGovArizona",
  /** USGovTexas Location for Azure */
  USGovTexas = "USGovTexas",
  /** USGovIowa Location for Azure */
  USGovIowa = "USGovIowa",
  /** USGovVirginia Location for Azure */
  USGovVirginia = "USGovVirginia",
  /** USDoDCentral Location for Azure */
  USDoDCentral = "USDoDCentral",
  /** USDoDEast Location for Azure */
  USDoDEast = "USDoDEast",
  /** FranceCentral Location for Azure */
  FranceCentral = "FranceCentral",
  /** AustraliaCentral Location for Azure */
  AustraliaCentral = "AustraliaCentral",
  /** SouthAfricaNorth Location for Azure */
  SouthAfricaNorth = "SouthAfricaNorth",
  /** FranceSouth Location for Azure */
  FranceSouth = "FranceSouth",
  /** AustraliaCentral2 Location for Azure */
  AustraliaCentral2 = "AustraliaCentral2",
  /** SouthAfricaWest Location for Azure */
  SouthAfricaWest = "SouthAfricaWest",
  /** GermanyNorth Location for Azure */
  GermanyNorth = "GermanyNorth",
  /** GermanyWestCentral Location for Azure */
  GermanyWestCentral = "GermanyWestCentral",
  /** NorwayEast Location for Azure */
  NorwayEast = "NorwayEast",
  /** NorwayWest Location for Azure */
  NorwayWest = "NorwayWest",
  /** ChinaEast2 Location for Azure */
  ChinaEast2 = "ChinaEast2",
  /** ChinaNorth2 Location for Azure */
  ChinaNorth2 = "ChinaNorth2",
  /** SwitzerlandNorth Location for Azure */
  SwitzerlandNorth = "SwitzerlandNorth",
  /** SwitzerlandWest Location for Azure */
  SwitzerlandWest = "SwitzerlandWest",
  /** UAENorth Location for Azure */
  UAENorth = "UAENorth",
  /** UAECentral Location for Azure */
  UAECentral = "UAECentral",
  /** UsNatEast Location for Azure */
  UsNatEast = "UsNatEast",
  /** UsNatWest Location for Azure */
  UsNatWest = "UsNatWest",
  /** UsSecEast Location for Azure */
  UsSecEast = "UsSecEast",
  /** UsSecCentral Location for Azure */
  UsSecCentral = "UsSecCentral",
  /** UsSecWest Location for Azure */
  UsSecWest = "UsSecWest",
  /** SwedenCentral Location for Azure */
  SwedenCentral = "SwedenCentral",
  /** QatarCentral Location for Azure */
  QatarCentral = "QatarCentral",
  /** JioIndiaWest Location for Azure */
  JioIndiaWest = "JioIndiaWest",
  /** ItalyNorth Location for Azure */
  ItalyNorth = "ItalyNorth",
  /** PolandCentral Location for Azure */
  PolandCentral = "PolandCentral",
  /** IsraelCentral Location for Azure */
  IsraelCentral = "IsraelCentral",
  /** MexicoCentral Location for Azure */
  MexicoCentral = "MexicoCentral",
  /** NewZealandNorth Location for Azure */
  NewZealandNorth = "NewZealandNorth",
  /** SpainCentral Location for Azure */
  SpainCentral = "SpainCentral",
}

/**
 * Location for Azure. \
 * {@link KnownAzureLocation} can be used interchangeably with AzureLocation,
 *  this enum contains the known values that the service supports.
 * ### Known values supported by the service
 * **Unknown**: Unknown Location for Azure \
 * **EastAsia**: EastAsia Location for Azure \
 * **SoutheastAsia**: SoutheastAsia Location for Azure \
 * **AustraliaEast**: AustraliaEast Location for Azure \
 * **AustraliaSoutheast**: AustraliaSoutheast Location for Azure \
 * **BrazilSouth**: BrazilSouth Location for Azure \
 * **CanadaCentral**: CanadaCentral Location for Azure \
 * **CanadaEast**: CanadaEast Location for Azure \
 * **WestEurope**: WestEurope Location for Azure \
 * **NorthEurope**: NorthEurope Location for Azure \
 * **CentralIndia**: CentralIndia Location for Azure \
 * **SouthIndia**: SouthIndia Location for Azure \
 * **WestIndia**: WestIndia Location for Azure \
 * **JapanEast**: JapanEast Location for Azure \
 * **JapanWest**: JapanWest Location for Azure \
 * **KoreaCentral**: KoreaCentral Location for Azure \
 * **KoreaSouth**: KoreaSouth Location for Azure \
 * **UkWest**: UkWest Location for Azure \
 * **UkSouth**: UkSouth Location for Azure \
 * **NorthCentralUs**: NorthCentralUs Location for Azure \
 * **EastUs**: EastUs Location for Azure \
 * **WestUs2**: WestUs2 Location for Azure \
 * **SouthCentralUs**: SouthCentralUs Location for Azure \
 * **CentralUs**: CentralUs Location for Azure \
 * **EastUs2**: EastUs2 Location for Azure \
 * **WestUs**: WestUs Location for Azure \
 * **WestCentralUs**: WestCentralUs Location for Azure \
 * **GermanyCentral**: GermanyCentral Location for Azure \
 * **GermanyNortheast**: GermanyNortheast Location for Azure \
 * **ChinaNorth**: ChinaNorth Location for Azure \
 * **ChinaEast**: ChinaEast Location for Azure \
 * **USGovArizona**: USGovArizona Location for Azure \
 * **USGovTexas**: USGovTexas Location for Azure \
 * **USGovIowa**: USGovIowa Location for Azure \
 * **USGovVirginia**: USGovVirginia Location for Azure \
 * **USDoDCentral**: USDoDCentral Location for Azure \
 * **USDoDEast**: USDoDEast Location for Azure \
 * **FranceCentral**: FranceCentral Location for Azure \
 * **AustraliaCentral**: AustraliaCentral Location for Azure \
 * **SouthAfricaNorth**: SouthAfricaNorth Location for Azure \
 * **FranceSouth**: FranceSouth Location for Azure \
 * **AustraliaCentral2**: AustraliaCentral2 Location for Azure \
 * **SouthAfricaWest**: SouthAfricaWest Location for Azure \
 * **GermanyNorth**: GermanyNorth Location for Azure \
 * **GermanyWestCentral**: GermanyWestCentral Location for Azure \
 * **NorwayEast**: NorwayEast Location for Azure \
 * **NorwayWest**: NorwayWest Location for Azure \
 * **ChinaEast2**: ChinaEast2 Location for Azure \
 * **ChinaNorth2**: ChinaNorth2 Location for Azure \
 * **SwitzerlandNorth**: SwitzerlandNorth Location for Azure \
 * **SwitzerlandWest**: SwitzerlandWest Location for Azure \
 * **UAENorth**: UAENorth Location for Azure \
 * **UAECentral**: UAECentral Location for Azure \
 * **UsNatEast**: UsNatEast Location for Azure \
 * **UsNatWest**: UsNatWest Location for Azure \
 * **UsSecEast**: UsSecEast Location for Azure \
 * **UsSecCentral**: UsSecCentral Location for Azure \
 * **UsSecWest**: UsSecWest Location for Azure \
 * **SwedenCentral**: SwedenCentral Location for Azure \
 * **QatarCentral**: QatarCentral Location for Azure \
 * **JioIndiaWest**: JioIndiaWest Location for Azure \
 * **ItalyNorth**: ItalyNorth Location for Azure \
 * **PolandCentral**: PolandCentral Location for Azure \
 * **IsraelCentral**: IsraelCentral Location for Azure \
 * **MexicoCentral**: MexicoCentral Location for Azure \
 * **NewZealandNorth**: NewZealandNorth Location for Azure \
 * **SpainCentral**: SpainCentral Location for Azure
 */
export type AzureLocation = string;

/** The response of a AvsGraphAssessmentOptions list operation. */
export interface _AvsGraphAssessmentOptionsListResult {
  /** The AvsGraphAssessmentOptions items on this page */
  value: AvsGraphAssessmentOptions[];
  /** The link to the next page of items */
  nextLink?: string;
}

export function _avsGraphAssessmentOptionsListResultDeserializer(
  item: any,
): _AvsGraphAssessmentOptionsListResult {
  return {
    value: avsGraphAssessmentOptionsArrayDeserializer(item["value"]),
    nextLink: item["nextLink"],
  };
}

export function avsGraphAssessmentOptionsArrayDeserializer(
  result: Array<AvsGraphAssessmentOptions>,
): any[] {
  return result.map((item) => {
    return avsGraphAssessmentOptionsDeserializer(item);
  });
}

/** API Versions for Avs Assessment Resource. */
export enum KnownAvsApiVersions {
  /** 2024-03-03-preview API Version. */
  V20240303Preview = "2024-03-03-preview",
}
