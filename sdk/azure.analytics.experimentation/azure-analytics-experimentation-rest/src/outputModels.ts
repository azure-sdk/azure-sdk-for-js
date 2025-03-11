// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A Metric object that describes the metric. */
export interface MetricOutput {
  /** An ID used to uniquely identify and reference the metric. */
  readonly id: string;
  /**
   * The stage in the metric lifecycle, which determines when the metric is calculated.
   *
   * Possible values: "Active", "Inactive"
   */
  lifecycle: LifecycleStageOutput;
  /** A display name for the metric to use for display rather than the ID. */
  displayName: string;
  /** A description of the metric. */
  description: string;
  /** The tags of the metric. */
  tags: string[];
  /**
   * Whether an increase or decrease to the metric value is desired.
   *
   * Possible values: "Increase", "Decrease", "Neutral"
   */
  desiredDirection: DesiredDirectionOutput;
  /** The metric definition, which determines how the metric value is calculated from event data. */
  definition: MetricDefinitionOutput;
  /** ETag of the metric */
  readonly eTag: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt: string;
}

/** The metric definition, which determines how the metric value is calculated from event data. */
export interface MetricDefinitionOutputParent {
  kind: string;
}

/** The definition of an EventCount metric. This metric kind counts the observations of an event. Experiment analysis accounts for unequal traffic allocation. */
export interface EventCountDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "EventCount";
  /** Event to observe. */
  event: ObservedEventOutput;
}

/** An event observed by a metric. */
export interface ObservedEventOutput {
  /** The name of the event. */
  eventName: string;
  /** [Optional] A condition to filter events. */
  filter?: string;
}

/** The definition of a UserCount metric. This metric kind counts the users who encounter an event. Experiment analysis accounts for unequal traffic allocation. */
export interface UserCountDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "UserCount";
  /** Event to observe. */
  event: ObservedEventOutput;
}

/** The definition of an EventRate metric. This metric kind counts the percentage of events that satisfy a condition. */
export interface EventRateDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "EventRate";
  /** Event to observe as the rate denominator. */
  event: ObservedEventOutput;
  /** The event contributes to the rate numerator if it satisfies this condition. */
  condition: string;
}

/** The definition of a UserRate metric. This metric kind counts the percentage of users with the start event that then encounter the end event. The metric denominator counts the number of users who encounter the start event at least once. The metric numerator counts the number of users who encounter both the start and end events at least once. The computation is ordered, so the start event must occur before the end event. */
export interface UserRateDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "UserRate";
  /** The start event to observe as the rate denominator. */
  startEvent: ObservedEventOutput;
  /** The end event to observe, which is a condition for the rate numerator. */
  endEvent: ObservedEventOutput;
}

/** The definition of a Sum metric. This metric kind measures the sum of an event property. Experiment analysis accounts for unequal traffic allocation. */
export interface SumDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "Sum";
  /** The value to aggregate. */
  value: AggregatedValueOutput;
}

/** An event property value aggregated by a metric. */
export interface AggregatedValueOutput {
  /** The name of the event. */
  eventName: string;
  /** [Optional] A condition to filter events. */
  filter?: string;
  /** The key of the event property to aggregate. */
  eventProperty: string;
}

/** The definition of an Average metric. This metric kind measures the average of an event property. */
export interface AverageDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "Average";
  /** The value to aggregate. */
  value: AggregatedValueOutput;
}

/** The definition of a Percentile metric. This metric kind measures the percentile of an event property. */
export interface PercentileDefinitionOutput extends MetricDefinitionOutputParent {
  /** The kind of metric. */
  kind: "Percentile";
  /** The value to aggregate. */
  value: AggregatedValueOutput;
  /** The percentile to measure. */
  percentile: number;
}

/** The result of validating a Metric. */
export interface MetricValidateResultOutput {
  /** The validation result. */
  readonly diagnostics: Array<DiagnosticInfoOutput>;
  /**
   * Whether the metric is valid.
   *
   * Possible values: "Valid", "Invalid"
   */
  result: ValidationResultOptionOutput;
}

/** The diagnostic information. */
export interface DiagnosticInfoOutput {
  /** The error message. */
  readonly message: string;
  /**
   * The error code.
   *
   * Possible values: "FailedSchemaValidation", "InvalidEventCondition", "UnsupportedEventCondition", "InvalidMetricDefinition"
   */
  readonly code: DiagnosticCodeOutput;
}

/** Paged collection of Metric items */
export interface PagedMetricOutput {
  /** The Metric items on this page */
  value: Array<MetricOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** The metric definition, which determines how the metric value is calculated from event data. */
export type MetricDefinitionOutput =
  | MetricDefinitionOutputParent
  | EventCountDefinitionOutput
  | UserCountDefinitionOutput
  | EventRateDefinitionOutput
  | UserRateDefinitionOutput
  | SumDefinitionOutput
  | AverageDefinitionOutput
  | PercentileDefinitionOutput;
/** Alias for LifecycleStageOutput */
export type LifecycleStageOutput = string;
/** Alias for DesiredDirectionOutput */
export type DesiredDirectionOutput = string;
/** Alias for DiagnosticCodeOutput */
export type DiagnosticCodeOutput = string;
/** Alias for ValidationResultOptionOutput */
export type ValidationResultOptionOutput = string;
