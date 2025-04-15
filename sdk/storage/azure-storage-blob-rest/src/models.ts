// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** The service properties. */
export interface StorageServiceProperties {
  /** The logging properties. */
  logging?: Logging;
  /** The hour metrics properties. */
  hourMetrics?: Metrics;
  /** The minute metrics properties. */
  minuteMetrics?: Metrics;
  /** The CORS properties. */
  cors?: Array<CorsRule>;
  /** The default service version. */
  defaultServiceVersion?: string;
  /** The delete retention policy. */
  deleteRetentionPolicy?: RetentionPolicy;
  /** The static website properties. */
  staticWebsite?: StaticWebsite;
}

/** Azure Analytics Logging settings. */
export interface Logging {
  /** The version of the logging properties. */
  version: string;
  /** Whether delete operation is logged. */
  delete: boolean;
  /** Whether read operation is logged. */
  read: boolean;
  /** Whether write operation is logged. */
  write: boolean;
  /** The retention policy of the logs. */
  retentionPolicy: RetentionPolicy;
}

/** The retention policy. */
export interface RetentionPolicy {
  /** Whether to enable the retention policy. */
  enabled: boolean;
  /** The number of days to retain the logs. */
  days?: number;
  /** Whether to allow permanent delete. */
  allowPermanentDelete?: boolean;
}

/** The metrics properties. */
export interface Metrics {
  /** The version of the metrics properties. */
  version?: string;
  /** Whether it is enabled. */
  enabled: boolean;
  /** Whether to include API in the metrics. */
  includeApis?: boolean;
  /** The retention policy of the metrics. */
  retentionPolicy?: RetentionPolicy;
}

/** CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain */
export interface CorsRule {
  /** The allowed origins. */
  allowedOrigins: string;
  /** The allowed methods. */
  allowedMethods: string;
  /** The allowed headers. */
  allowedHeaders: string;
  /** The exposed headers. */
  exposedHeaders: string;
  /** The maximum age in seconds. */
  maxAgeInSeconds: number;
}

/** The properties that enable an account to host a static website */
export interface StaticWebsite {
  /** Indicates whether this account is hosting a static website */
  enabled: boolean;
  /** The index document. */
  indexDocument?: string;
  /** The error document. */
  errorDocument404Path?: string;
  /** Absolute path of the default index page */
  defaultIndexDocumentPath?: string;
}

/** Key information */
export interface KeyInfo {
  /** The date-time the key is active. */
  start: string;
  /** The date-time the key expires. */
  expiry: string;
}

/** Represents blob tags. */
export interface BlobTags {
  /** Represents the blob tags. */
  blobTagSet: Array<BlobTag>;
}

/** The blob tags. */
export interface BlobTag {
  /** The key of the tag. */
  key: string;
  /** The value of the tag. */
  value: string;
}

/** The signed identifier. */
export interface SignedIdentifier {
  /** The unique ID for the signed identifier. */
  id: string;
  /** The access policy for the signed identifier. */
  accessPolicy: AccessPolicy;
}

/** Represents an access policy. */
export interface AccessPolicy {
  /** The date-time the policy is active. */
  start: Date | string;
  /** The date-time the policy expires. */
  expiry: Date | string;
  /** The permissions for acl the policy. */
  permission: string;
}

/** The Block lookup list. */
export interface BlockLookupList {
  /** The committed blocks */
  committed?: string[];
  /** The uncommitted blocks */
  uncommitted?: string[];
  /** The latest blocks */
  latest?: string[];
}

/** Groups the set of query request settings. */
export interface QueryRequest {
  /**
   * Required. The type of the provided query expression.
   *
   * Possible values: "SQL"
   */
  queryType: QueryRequestType;
  /** The query expression in SQL. The maximum size of the query expression is 256KiB. */
  expression: string;
  /** The input serialization settings. */
  inputSerialization?: QuerySerialization;
  /** The output serialization settings. */
  outputSerialization?: QuerySerialization;
}

/** The query serialization settings. */
export interface QuerySerialization {
  /** The query format. */
  format: QueryFormat;
}

/** The query format settings. */
export interface QueryFormat {
  /**
   * The query type.
   *
   * Possible values: "delimited", "json", "arrow", "parquet"
   */
  type: QueryType;
  /** The delimited text configuration. */
  delimitedTextConfiguration?: DelimitedTextConfiguration;
  /** The JSON text configuration. */
  jsonTextConfiguration?: JsonTextConfiguration;
  /** The Apache Arrow configuration. */
  arrowConfiguration?: ArrowConfiguration;
  /** The Parquet configuration. */
  parquetTextConfiguration?: ParquetConfiguration;
}

/** Represents the delimited text configuration. */
export interface DelimitedTextConfiguration {
  /** The string used to separate columns. */
  columnSeparator?: string;
  /** The string used to quote a specific field. */
  fieldQuote?: string;
  /** The string used to separate records. */
  recordSeparator?: string;
  /** The string used to escape a quote character in a field. */
  escapeChar?: string;
  /** Represents whether the data has headers. */
  headersPresent?: boolean;
}

/** Represents the JSON text configuration. */
export interface JsonTextConfiguration {
  /** The string used to separate records. */
  recordSeparator?: string;
}

/** Represents the Apache Arrow configuration. */
export interface ArrowConfiguration {
  /** The Apache Arrow schema */
  schema: Array<ArrowField>;
}

/** Represents an Apache Arrow field. */
export interface ArrowField {
  /** The arrow field type. */
  type: string;
  /** The arrow field name. */
  name?: string;
  /** The arrow field precision. */
  precision?: number;
  /** The arrow field scale. */
  scale?: number;
}

/** Represents the Parquet configuration. */
export interface ParquetConfiguration extends Record<string, unknown> {}

/** Alias for ListContainersIncludeType */
export type ListContainersIncludeType = string;
/** Alias for PublicAccessType */
export type PublicAccessType = string;
/** Alias for FilterBlobsIncludeItem */
export type FilterBlobsIncludeItem = string;
/** Alias for ListBlobsIncludeItem */
export type ListBlobsIncludeItem = string;
/** Alias for AccessTier */
export type AccessTier = string;
/** Alias for RehydratePriority */
export type RehydratePriority = string;
/** Alias for BlobImmutabilityPolicyMode */
export type BlobImmutabilityPolicyMode = string;
/** Alias for EncryptionAlgorithmType */
export type EncryptionAlgorithmType = string;
/** Alias for DeleteSnapshotsOptionType */
export type DeleteSnapshotsOptionType = string;
/** Alias for BlobDeleteType */
export type BlobDeleteType = string;
/** Alias for BlobExpiryOptions */
export type BlobExpiryOptions = string;
/** Alias for PremiumPageBlobAccessTier */
export type PremiumPageBlobAccessTier = string;
/** Alias for SequenceNumberActionType */
export type SequenceNumberActionType = string;
/** Alias for BlockListType */
export type BlockListType = string;
/** Alias for QueryRequestType */
export type QueryRequestType = string;
/** Alias for QueryType */
export type QueryType = string;
