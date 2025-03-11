// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** A Metric object that describes the metric. */
export interface Metric {
  /**
   * The stage in the metric lifecycle, which determines when the metric is calculated.
   *
   * Possible values: "Active", "Inactive"
   */
  lifecycle: LifecycleStage;
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
  desiredDirection: DesiredDirection;
  /** The metric definition, which determines how the metric value is calculated from event data. */
  definition: MetricDefinition;
}

/** The metric definition, which determines how the metric value is calculated from event data. */
export interface MetricDefinitionParent {
  kind: string;
}

/** The definition of an EventCount metric. This metric kind counts the observations of an event. Experiment analysis accounts for unequal traffic allocation. */
export interface EventCountDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "EventCount";
  /** Event to observe. */
  event: ObservedEvent;
}

/** An event observed by a metric. */
export interface ObservedEvent {
  /** The name of the event. */
  eventName: string;
  /** [Optional] A condition to filter events. */
  filter?: string;
}

/** The definition of a UserCount metric. This metric kind counts the users who encounter an event. Experiment analysis accounts for unequal traffic allocation. */
export interface UserCountDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "UserCount";
  /** Event to observe. */
  event: ObservedEvent;
}

/** The definition of an EventRate metric. This metric kind counts the percentage of events that satisfy a condition. */
export interface EventRateDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "EventRate";
  /** Event to observe as the rate denominator. */
  event: ObservedEvent;
  /** The event contributes to the rate numerator if it satisfies this condition. */
  condition: string;
}

/** The definition of a UserRate metric. This metric kind counts the percentage of users with the start event that then encounter the end event. The metric denominator counts the number of users who encounter the start event at least once. The metric numerator counts the number of users who encounter both the start and end events at least once. The computation is ordered, so the start event must occur before the end event. */
export interface UserRateDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "UserRate";
  /** The start event to observe as the rate denominator. */
  startEvent: ObservedEvent;
  /** The end event to observe, which is a condition for the rate numerator. */
  endEvent: ObservedEvent;
}

/** The definition of a Sum metric. This metric kind measures the sum of an event property. Experiment analysis accounts for unequal traffic allocation. */
export interface SumDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "Sum";
  /** The value to aggregate. */
  value: AggregatedValue;
}

/** An event property value aggregated by a metric. */
export interface AggregatedValue {
  /** The name of the event. */
  eventName: string;
  /** [Optional] A condition to filter events. */
  filter?: string;
  /** The key of the event property to aggregate. */
  eventProperty: string;
}

/** The definition of an Average metric. This metric kind measures the average of an event property. */
export interface AverageDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "Average";
  /** The value to aggregate. */
  value: AggregatedValue;
}

/** The definition of a Percentile metric. This metric kind measures the percentile of an event property. */
export interface PercentileDefinition extends MetricDefinitionParent {
  /** The kind of metric. */
  kind: "Percentile";
  /** The value to aggregate. */
  value: AggregatedValue;
  /** The percentile to measure. */
  percentile: number;
}

/** The metric definition, which determines how the metric value is calculated from event data. */
export type MetricDefinition =
  | MetricDefinitionParent
  | EventCountDefinition
  | UserCountDefinition
  | EventRateDefinition
  | UserRateDefinition
  | SumDefinition
  | AverageDefinition
  | PercentileDefinition;
/** Alias for LifecycleStage */
export type LifecycleStage = string;
/** Alias for DesiredDirection */
export type DesiredDirection = string;
