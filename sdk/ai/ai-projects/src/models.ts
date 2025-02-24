// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Evaluation Definition */
export interface Evaluation {
  /** Data for evaluation. */
  data: InputData;
  /** Display Name for evaluation. It helps to find the evaluation easily in AI Foundry. It does not need to be unique. */
  displayName?: string;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
}

/** Abstract data class for input data configuration. */
export interface InputDataParent {
  type: string;
}

/** Data Source for Application Insights. */
export interface ApplicationInsightsConfiguration extends InputDataParent {
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
export interface Dataset extends InputDataParent {
  /** Evaluation input data */
  id: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Evaluator Configuration */
export interface EvaluatorConfiguration {
  /** Identifier of the evaluator. */
  id: string;
  /** Initialization parameters of the evaluator. */
  initParams?: Record<string, unknown>;
  /** Data parameters of the evaluator. */
  dataMapping?: Record<string, string>;
}

/** Evaluation Schedule Definition */
export interface EvaluationSchedule {
  /** Data for evaluation. */
  data: ApplicationInsightsConfiguration;
  /** Description of the evaluation. It can be used to store additional information about the evaluation and is mutable. */
  description?: string;
  /** Evaluation's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Evaluation's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Evaluators to be used for the evaluation. */
  evaluators: Record<string, EvaluatorConfiguration>;
  /** Trigger for the evaluation. */
  trigger: Trigger;
}

/** Abstract data class for input data configuration. */
export interface TriggerParent {
  type: string;
}

/** Recurrence Trigger Definition */
export interface RecurrenceTrigger extends TriggerParent {
  /**
   * The frequency to trigger schedule.
   *
   * Possible values: "Month", "Week", "Day", "Hour", "Minute"
   */
  frequency: Frequency;
  /** Specifies schedule interval in conjunction with frequency */
  interval: number;
  /** The recurrence schedule. */
  schedule?: RecurrenceSchedule;
}

/** RecurrenceSchedule Definition */
export interface RecurrenceSchedule {
  /** List of hours for the schedule. */
  hours: number[];
  /** List of minutes for the schedule. */
  minutes: number[];
  /** List of days for the schedule. */
  weekDays?: WeekDays[];
  /** List of month days for the schedule */
  monthDays?: number[];
}

/** Cron Trigger Definition */
export interface CronTrigger extends TriggerParent {
  /** Cron expression for the trigger. */
  expression: string;
}

/** Abstract data class for input data configuration. */
export type InputData =
  | InputDataParent
  | ApplicationInsightsConfiguration
  | Dataset;
/** Abstract data class for input data configuration. */
export type Trigger = TriggerParent | RecurrenceTrigger | CronTrigger;
/** The Type (or category) of the connection */
export type ConnectionType =
  | "AzureOpenAI"
  | "Serverless"
  | "AzureBlob"
  | "AIServices"
  | "CognitiveSearch"
  | "ApiKey";
/** Alias for Frequency */
export type Frequency = string;
/** Alias for WeekDays */
export type WeekDays = string;
