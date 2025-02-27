// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Response from the Workspace - Get operation */
export interface GetWorkspaceResponseOutput {
  /** A unique identifier for the resource */
  id: string;
  /** The name of the resource */
  name: string;
  /** The properties of the resource */
  properties: WorkspacePropertiesOutput;
}

/** workspace properties */
export interface WorkspacePropertiesOutput {
  /** Authentication type of the connection target */
  applicationInsights: string;
}

/** Response from the list operation */
export interface ListConnectionsResponseOutput {
  /** A list of connection list secrets */
  value: Array<GetConnectionResponseOutput>;
}

/** Response from the listSecrets operation */
export interface GetConnectionResponseOutput {
  /** A unique identifier for the connection */
  id: string;
  /** The name of the resource */
  name: string;
  /** The properties of the resource */
  properties: InternalConnectionPropertiesOutput;
}

/** Connection properties */
export interface InternalConnectionPropertiesOutputParent {
  /** Category of the connection */
  category: ConnectionTypeOutput;
  /** The connection URL to be used for this service */
  target: string;
  authType: AuthenticationTypeOutput;
}

/** Connection properties for connections with API key authentication */
export interface InternalConnectionPropertiesApiKeyAuthOutput
  extends InternalConnectionPropertiesOutputParent {
  /** Authentication type of the connection target */
  authType: "ApiKey";
  /** Credentials will only be present for authType=ApiKey */
  credentials: CredentialsApiKeyAuthOutput;
}

/** The credentials needed for API key authentication */
export interface CredentialsApiKeyAuthOutput {
  /** The API key */
  key: string;
}

/** Connection properties for connections with AAD authentication (aka `Entra ID passthrough`) */
export interface InternalConnectionPropertiesAADAuthOutput
  extends InternalConnectionPropertiesOutputParent {
  /** Authentication type of the connection target */
  authType: "AAD";
}

/** Connection properties for connections with SAS authentication */
export interface InternalConnectionPropertiesSASAuthOutput
  extends InternalConnectionPropertiesOutputParent {
  /** Authentication type of the connection target */
  authType: "SAS";
  /** Credentials will only be present for authType=ApiKey */
  credentials: CredentialsSASAuthOutput;
}

/** The credentials needed for Shared Access Signatures (SAS) authentication */
export interface CredentialsSASAuthOutput {
  /** The Shared Access Signatures (SAS) token */
  SAS: string;
}

/** Connection properties for connections with no authentication */
export interface InternalConnectionPropertiesNoAuthOutput
  extends InternalConnectionPropertiesOutputParent {
  /** Authentication type of the connection target */
  authType: "None";
}

/** Response from getting properties of the Application Insights resource */
export interface GetAppInsightsResponseOutput {
  /** A unique identifier for the resource */
  id: string;
  /** The name of the resource */
  name: string;
  /** The properties of the resource */
  properties: AppInsightsPropertiesOutput;
}

/** The properties of the Application Insights resource */
export interface AppInsightsPropertiesOutput {
  /** Authentication type of the connection target */
  ConnectionString: string;
}

/** Evaluation Definition */
export interface EvaluationOutput {
  /** Identifier of the evaluation. */
  readonly id: string;
  /** Data for evaluation. */
  data: InputDataOutput;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
  /** Status of the evaluation. It is set by service and is read-only. */
  readonly status?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfigurationOutput>;
}

/** Abstract data class for input data configuration. */
export interface InputDataOutputParent {
  type: string;
}

/** Data Source for Application Insights. */
export interface ApplicationInsightsConfigurationOutput
  extends InputDataOutputParent {
  readonly type: "app_insights";
  /** LogAnalytic Workspace resourceID associated with ApplicationInsights */
  resourceId: string;
  /** Query to fetch the data. */
  query: string;
  /** Service name. */
  serviceName?: string;
  /** Connection String to connect to ApplicationInsights. */
  connectionString?: string;
}

/** Dataset as source for evaluation. */
export interface DatasetOutput extends InputDataOutputParent {
  readonly type: "dataset";
  /** Evaluation input data */
  id: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The timestamp the resource was created at. */
  readonly createdAt?: string;
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The identity type that created the resource. */
  readonly createdByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** Evaluator Configuration */
export interface EvaluatorConfigurationOutput {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, any>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Paged collection of Evaluation items */
export interface PagedEvaluationOutput {
  /** The Evaluation items on this page */
  value: Array<EvaluationOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Evaluation Schedule Definition */
export interface EvaluationScheduleOutput {
  /** Name of the schedule, which also serves as the unique identifier for the evaluation */
  readonly name: string;
  /** Data for evaluation. */
  data: ApplicationInsightsConfigurationOutput;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
  /** Provisioning State of the evaluation. It is set by service and is read-only. */
  readonly provisioningState?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Enabled status of the evaluation. It is set by service and is read-only. */
  readonly isEnabled?: string;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfigurationOutput>;
  /** Trigger for the evaluation. */
  trigger: TriggerOutput;
}

/** Abstract data class for input data configuration. */
export interface TriggerOutputParent {
  type: string;
}

/** Recurrence Trigger Definition */
export interface RecurrenceTriggerOutput extends TriggerOutputParent {
  readonly type: "Recurrence";
  /**
   * The frequency to trigger schedule.
   *
   * Possible values: "Month", "Week", "Day", "Hour", "Minute"
   */
  frequency: FrequencyOutput;
  /** Specifies schedule interval in conjunction with frequency */
  interval: number;
  /** The recurrence schedule. */
  schedule?: RecurrenceScheduleOutput;
}

/** RecurrenceSchedule Definition */
export interface RecurrenceScheduleOutput {
  /** List of hours for the schedule. */
  hours: number[];
  /** List of minutes for the schedule. */
  minutes: number[];
  /** List of days for the schedule. */
  weekDays?: WeekDaysOutput[];
  /** List of month days for the schedule */
  monthDays?: number[];
}

/** Cron Trigger Definition */
export interface CronTriggerOutput extends TriggerOutputParent {
  readonly type: "Cron";
  /** Cron expression for the trigger. */
  expression: string;
}

/** Paged collection of EvaluationSchedule items */
export interface PagedEvaluationScheduleOutput {
  /** The EvaluationSchedule items on this page */
  value: Array<EvaluationScheduleOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Connection properties */
export type InternalConnectionPropertiesOutput =
  | InternalConnectionPropertiesOutputParent
  | InternalConnectionPropertiesApiKeyAuthOutput
  | InternalConnectionPropertiesAADAuthOutput
  | InternalConnectionPropertiesSASAuthOutput
  | InternalConnectionPropertiesNoAuthOutput;
/** Abstract data class for input data configuration. */
export type InputDataOutput =
  | InputDataOutputParent
  | ApplicationInsightsConfigurationOutput
  | DatasetOutput;
/** Abstract data class for input data configuration. */
export type TriggerOutput =
  | TriggerOutputParent
  | RecurrenceTriggerOutput
  | CronTriggerOutput;
/** The Type (or category) of the connection */
export type ConnectionTypeOutput =
  | "AzureOpenAI"
  | "Serverless"
  | "AzureBlob"
  | "AIServices"
  | "CognitiveSearch"
  | "ApiKey";
/** Authentication type used by Azure AI service to connect to another service */
export type AuthenticationTypeOutput = "ApiKey" | "AAD" | "SAS" | "None";
/** Alias for FrequencyOutput */
export type FrequencyOutput = string;
/** Alias for WeekDaysOutput */
export type WeekDaysOutput = string;
