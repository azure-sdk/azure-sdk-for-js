// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Azure Analytics Logging settings. */
export interface LoggingOutput {
  /** The version of the logging properties. */
  version: string;
  /** Whether delete operation is logged. */
  delete: boolean;
  /** Whether read operation is logged. */
  read: boolean;
  /** Whether write operation is logged. */
  write: boolean;
  /** The retention policy of the logs. */
  retentionPolicy: RetentionPolicyOutput;
}

/** The retention policy. */
export interface RetentionPolicyOutput {
  /** Whether to enable the retention policy. */
  enabled: boolean;
  /** The number of days to retain the logs. */
  days?: number;
  /** Whether to allow permanent delete. */
  allowPermanentDelete?: boolean;
}

/** The metrics properties. */
export interface MetricsOutput {
  /** The version of the metrics properties. */
  version?: string;
  /** Whether it is enabled. */
  enabled: boolean;
  /** Whether to include API in the metrics. */
  includeApis?: boolean;
  /** The retention policy of the metrics. */
  retentionPolicy?: RetentionPolicyOutput;
}

/** CORS is an HTTP feature that enables a web application running under one domain to access resources in another domain. Web browsers implement a security restriction known as same-origin policy that prevents a web page from calling APIs in a different domain; CORS provides a secure way to allow one domain (the origin domain) to call APIs in another domain */
export interface CorsRuleOutput {
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
export interface StaticWebsiteOutput {
  /** Indicates whether this account is hosting a static website */
  enabled: boolean;
  /** The index document. */
  indexDocument?: string;
  /** The error document. */
  errorDocument404Path?: string;
  /** Absolute path of the default index page */
  defaultIndexDocumentPath?: string;
}

/** The error response. */
export interface StorageErrorOutput {
  /** The error message. */
  Message?: string;
}

/** The service properties. */
export interface StorageServicePropertiesOutput {
  /** The logging properties. */
  logging?: LoggingOutput;
  /** The hour metrics properties. */
  hourMetrics?: MetricsOutput;
  /** The minute metrics properties. */
  minuteMetrics?: MetricsOutput;
  /** The CORS properties. */
  cors?: Array<CorsRuleOutput>;
  /** The default service version. */
  defaultServiceVersion?: string;
  /** The delete retention policy. */
  deleteRetentionPolicy?: RetentionPolicyOutput;
  /** The static website properties. */
  staticWebsite?: StaticWebsiteOutput;
}

/** Stats for the storage service. */
export interface StorageServiceStatsOutput {
  /** The geo replication stats. */
  geoReplication?: GeoReplicationOutput;
}

/** Geo-Replication information for the Secondary Storage Service */
export interface GeoReplicationOutput {
  /**
   * The status of the secondary location
   *
   * Possible values: "live", "bootstrap", "unavailable"
   */
  status: GeoReplicationStatusTypeOutput;
  /** A GMT date/time value, to the second. All primary writes preceding this value are guaranteed to be available for read operations at the secondary. Primary writes after this point in time may or may not be available for reads. */
  lastSyncTime: string;
}

/** The list container segment response */
export interface ListContainersSegmentResponseOutput {
  /** The service endpoint. */
  serviceEndpoint: string;
  /** The prefix of the containers. */
  prefix?: string;
  /** The marker of the containers. */
  marker?: string;
  /** The max results of the containers. */
  maxResults?: number;
  /** The container segment. */
  containerItems: Array<ContainerItemOutput>;
  /** The next marker of the containers. */
  NextMarker?: string;
}

/** An Azure Storage container. */
export interface ContainerItemOutput {
  /** The name of the container. */
  name: string;
  /** Whether the container is deleted. */
  delete?: boolean;
  /** The version of the container. */
  version?: string;
  /** The properties of the container. */
  properties: ContainerPropertiesOutput;
  /** The metadata of the container. */
  metadata?: Record<string, string>;
}

/** The properties of a container. */
export interface ContainerPropertiesOutput {
  /** The date-time the container was last modified in RFC1123 format. */
  lastModified: string;
  /** The ETag of the container. */
  eTag: string;
  /**
   * The lease status of the container.
   *
   * Possible values: "unlocked", "locked"
   */
  leaseStatus?: LeaseStatusOutput;
  /**
   * The lease state of the container.
   *
   * Possible values: "available", "leased", "expired", "breaking", "broken"
   */
  leaseState?: LeaseStateOutput;
  /**
   * The lease duration of the container.
   *
   * Possible values: "infinite", "fixed"
   */
  leaseDuration?: LeaseDurationOutput;
  /**
   * The public access type of the container.
   *
   * Possible values: "blob", "container"
   */
  publicAccess?: PublicAccessTypeOutput;
  /** Whether it has an immutability policy. */
  hasImmutabilityPolicy?: boolean;
  /** The has legal hold status of the container. */
  hasLegalHold?: boolean;
  /** The default encryption scope of the container. */
  defaultEncryptionScope?: string;
  /** Whether to prevent encryption scope override. */
  denyEncryptionScopeOverride?: boolean;
  /** The deleted time of the container. */
  deletedTime?: string;
  /** The remaining retention days of the container. */
  remainingRetentionDays?: number;
  /** Whether immutable storage with versioning is enabled. */
  immutableStorageWithVersioningEnabled?: boolean;
}

/** A user delegation key. */
export interface UserDelegationKeyOutput {
  /** The Azure Active Directory object ID in GUID format. */
  signedOid: string;
  /** The Azure Active Directory tenant ID in GUID format. */
  signedTid: string;
  /** The date-time the key is active. */
  signedStart: string;
  /** The date-time the key expires. */
  signedExpiry: string;
  /** Abbreviation of the Azure Storage service that accepts the key. */
  signedService: string;
  /** The service version that created the key. */
  signedVersion: string;
  /** The key as a base64 string. */
  value: string;
}

/** The result of a Filter Blobs API call */
export interface FilterBlobSegmentOutput {
  /** The service endpoint. */
  serviceEndpoint: string;
  /** The filter for the blobs. */
  where: string;
  /** The blob segment. */
  blobs: Array<FilterBlobItemOutput>;
  /** The next marker of the blobs. */
  nextMarker?: string;
}

/** The filter blob item. */
export interface FilterBlobItemOutput {
  /** The name of the blob. */
  name: string;
  /** The properties of the blob. */
  containerName: string;
  /** The metadata of the blob. */
  tags?: BlobTagsOutput;
  /** The version ID of the blob. */
  versionId?: string;
  /** Whether it is the current version of the blob */
  isCurrentVersion?: boolean;
}

/** Represents blob tags. */
export interface BlobTagsOutput {
  /** Represents the blob tags. */
  blobTagSet: Array<BlobTagOutput>;
}

/** The blob tags. */
export interface BlobTagOutput {
  /** The key of the tag. */
  key: string;
  /** The value of the tag. */
  value: string;
}

/** The signed identifier. */
export interface SignedIdentifierOutput {
  /** The unique ID for the signed identifier. */
  id: string;
  /** The access policy for the signed identifier. */
  accessPolicy: AccessPolicyOutput;
}

/** Represents an access policy. */
export interface AccessPolicyOutput {
  /** The date-time the policy is active. */
  start: string;
  /** The date-time the policy expires. */
  expiry: string;
  /** The permissions for acl the policy. */
  permission: string;
}

/** An enumeration of blobs. */
export interface ListBlobsFlatSegmentResponseOutput {
  /** The service endpoint. */
  serviceEndpoint: string;
  /** The container name. */
  containerName: string;
  /** The prefix of the blobs. */
  prefix?: string;
  /** The marker of the blobs. */
  marker?: string;
  /** The max results of the blobs. */
  maxResults?: number;
  /** The blob segment. */
  segment: BlobFlatListSegmentOutput;
  /** The next marker of the blobs. */
  nextMarker?: string;
}

/** The blob flat list segment. */
export interface BlobFlatListSegmentOutput {
  /** The blob items. */
  blobItems: Array<BlobItemInternalOutput>;
}

/** An Azure Storage Blob */
export interface BlobItemInternalOutput {
  /** The name of the blob. */
  name: BlobNameOutput;
  /** Whether the blob is deleted. */
  deleted: boolean;
  /** The snapshot of the blob. */
  snapshot: string;
  /** The version id of the blob. */
  versionId?: string;
  /** Whether the blob is the current version. */
  isCurrentVersion?: boolean;
  /** The properties of the blob. */
  properties: BlobPropertiesInternalOutput;
  /** The metadata of the blob. */
  metadata?: BlobMetadataOutput;
  /** The tags of the blob. */
  blobTags?: BlobTagsOutput;
  /** The object replication metadata of the blob. */
  objectReplicationMetadata?: ObjectReplicationMetadataOutput;
  /** Whether the blog has versions only. */
  hasVersionsOnly?: boolean;
}

/** Represents a blob name. */
export interface BlobNameOutput {
  /** Whether the blob name is encoded. */
  encoded: boolean;
  /** The blob name. */
  content: string;
}

/** The properties of a blob. */
export interface BlobPropertiesInternalOutput {
  /** The date-time the blob was created in RFC1123 format. */
  creationTime?: string;
  /** The date-time the blob was last modified in RFC1123 format. */
  lastModified: string;
  /** The blog ETag. */
  eTag: string;
  /** The content length of the blob. */
  contentLength?: number;
  /** The content type of the blob. */
  contentType?: string;
  /** The content encoding of the blob. */
  contentEncoding?: string;
  /** The content language of the blob. */
  contentLanguage?: string;
  /** The content MD5 of the blob. */
  contentMd5?: string;
  /** The content disposition of the blob. */
  contentDisposition?: string;
  /** The cache control of the blob. */
  cacheControl?: string;
  /** The sequence number of the blob. */
  blobSequenceNumber?: number;
  /**
   * The blob type.
   *
   * Possible values: "BlockBlob", "PageBlob", "AppendBlob"
   */
  blobType?: BlobTypeOutput;
  /**
   * The lease status of the blob.
   *
   * Possible values: "unlocked", "locked"
   */
  leaseStatus?: LeaseStatusOutput;
  /**
   * The lease state of the blob.
   *
   * Possible values: "available", "leased", "expired", "breaking", "broken"
   */
  leaseState?: LeaseStateOutput;
  /**
   * The lease duration of the blob.
   *
   * Possible values: "infinite", "fixed"
   */
  leaseDuration?: LeaseDurationOutput;
  /** The copy ID of the blob. */
  copyId?: string;
  /**
   * The copy status of the blob.
   *
   * Possible values: "pending", "success", "failed", "aborted"
   */
  copyStatus?: CopyStatusOutput;
  /** The copy source of the blob. */
  copySource?: string;
  /** The copy progress of the blob. */
  copyProgress?: string;
  /** The copy completion time of the blob. */
  copyCompletionTime?: string;
  /** The copy status description of the blob. */
  copyStatusDescription?: string;
  /** Whether the blog is encrypted on the server. */
  serverEncrypted?: boolean;
  /** Whether the blog is incremental copy. */
  incrementalCopy?: boolean;
  /** The name of the destination snapshot. */
  destinationSnapshot?: string;
  /** The time the blob was deleted. */
  deletedTime?: string;
  /** The remaining retention days of the blob. */
  remainingRetentionDays?: number;
  /**
   * The access tier of the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  accessTier?: AccessTierOutput;
  /** Whether the access tier is inferred. */
  accessTierInferred?: boolean;
  /**
   * The archive status of the blob.
   *
   * Possible values: "rehydrate-pending-to-hot", "rehydrate-pending-to-cool", "rehydrate-pending-to-cold"
   */
  archiveStatus?: ArchiveStatusOutput;
  /** Customer provided key sha256 */
  customerProvidedKeySha256?: string;
  /** The encryption scope of the blob. */
  encryptionScope?: string;
  /** The access tier change time of the blob. */
  accessTierChangeTime?: string;
  /** The number of tags for the blob. */
  tagCount?: number;
  /** The expire time of the blob. */
  expiryTime?: string;
  /** Whether the blob is sealed. */
  sealed?: boolean;
  /**
   * The rehydrate priority of the blob.
   *
   * Possible values: "High", "Standard"
   */
  rehydratePriority?: RehydratePriorityOutput;
  /** The last access time of the blob. */
  lastAccessTime?: string;
  /** The immutability policy until time of the blob. */
  immutabilityPolicyUntilDate?: string;
  /**
   * The immutability policy mode of the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  immutabilityPolicyMode?: BlobImmutabilityPolicyModeOutput;
  /** Whether the blob is under legal hold. */
  legalHold?: boolean;
}

/** The blob metadata. */
export interface BlobMetadataOutput extends Record<string, string> {
  /** Whether the blob metadata is encrypted. */
  encrypted?: string;
}

/** The object replication metadata. */
export interface ObjectReplicationMetadataOutput
  extends Record<string, string> {}

/** An enumeration of blobs */
export interface ListBlobsHierarchySegmentResponseOutput {
  /** The service endpoint. */
  serviceEndpoint: string;
  /** The container name. */
  containerName: string;
  /** The delimiter of the blobs. */
  delimiter?: string;
  /** The prefix of the blobs. */
  prefix?: string;
  /** The marker of the blobs. */
  marker?: string;
  /** The max results of the blobs. */
  maxResults?: number;
  /** The blob segment. */
  segment: BlobHierarchyListSegmentOutput;
  /** The next marker of the blobs. */
  nextMarker?: string;
}

/** Represents an array of blobs. */
export interface BlobHierarchyListSegmentOutput {
  /** The blob items */
  blobItems: Array<BlobItemInternalOutput>;
  /** The blob prefixes. */
  blobPrefixes?: Array<BlobPrefixOutput>;
}

/** Represents a blob prefix. */
export interface BlobPrefixOutput {
  /** The blob name. */
  name: BlobNameOutput;
}

/** Represents a page list. */
export interface PageListOutput {
  /** The page ranges. */
  pageRange?: Array<PageRangeOutput>;
  /** The clear ranges. */
  clearRange?: Array<ClearRangeOutput>;
  /** The next marker. */
  nextMarker?: string;
}

/** The page range. */
export interface PageRangeOutput {
  /** The start of the byte range. */
  start: number;
  /** The end of the byte range. */
  end: number;
}

/** The clear range. */
export interface ClearRangeOutput {
  /** The start of the byte range. */
  start: number;
  /** The end of the byte range. */
  end: number;
}

/** Contains the committed and uncommitted blocks in a block blob. */
export interface BlockListOutput {
  /** The list of committed blocks. */
  committedBlocks?: Array<BlockOutput>;
  /** The list of uncommitted blocks. */
  uncommittedBlocks?: Array<BlockOutput>;
}

/** Represents a single block in a block blob. It describes the block's ID and size. */
export interface BlockOutput {
  /** The base64 encoded block ID. */
  name: string;
  /** The block size in bytes. */
  size: number;
}

/** Alias for GeoReplicationStatusTypeOutput */
export type GeoReplicationStatusTypeOutput = string;
/** Alias for LeaseStatusOutput */
export type LeaseStatusOutput = string;
/** Alias for LeaseStateOutput */
export type LeaseStateOutput = string;
/** Alias for LeaseDurationOutput */
export type LeaseDurationOutput = string;
/** Alias for PublicAccessTypeOutput */
export type PublicAccessTypeOutput = string;
/** Alias for SkuNameOutput */
export type SkuNameOutput = string;
/** Alias for AccountKindOutput */
export type AccountKindOutput = string;
/** Alias for BlobTypeOutput */
export type BlobTypeOutput = string;
/** Alias for CopyStatusOutput */
export type CopyStatusOutput = string;
/** Alias for AccessTierOutput */
export type AccessTierOutput = string;
/** Alias for ArchiveStatusOutput */
export type ArchiveStatusOutput = string;
/** Alias for RehydratePriorityOutput */
export type RehydratePriorityOutput = string;
/** Alias for BlobImmutabilityPolicyModeOutput */
export type BlobImmutabilityPolicyModeOutput = string;
