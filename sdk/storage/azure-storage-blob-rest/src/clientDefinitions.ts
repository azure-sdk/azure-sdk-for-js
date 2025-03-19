// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  SetPropertiesParameters,
  GetPropertiesParameters,
  GetStatisticsParameters,
  ListContainersSegmentParameters,
  GetUserDelegationKeyParameters,
  GetAccountInfoParameters,
  SubmitBatchParameters,
  FilterBlobsParameters,
  ContainerCreateParameters,
  ContainerGetPropertiesParameters,
  ContainerDeleteParameters,
  ContainerSetMetadataParameters,
  ContainerGetAccessPolicyParameters,
  ContainerSetAccessPolicyParameters,
  ContainerRestoreParameters,
  ContainerRenameParameters,
  ContainerSubmitBatchParameters,
  ContainerFilterBlobsParameters,
  ContainerAcquireLeaseParameters,
  ContainerReleaseLeaseParameters,
  ContainerRenewLeaseParameters,
  ContainerBreakLeaseParameters,
  ContainerChangeLeaseParameters,
  ContainerListBlobFlatSegmentParameters,
  ContainerListBlobHierarchySegmentParameters,
  ContainerGetAccountInfoParameters,
  ContainerBlobDownloadParameters,
  ContainerBlobGetPropertiesParameters,
  ContainerBlobDeleteParameters,
  ContainerBlobUndeleteParameters,
  ContainerBlobSetExpiryParameters,
  ContainerBlobSetHttpHeadersParameters,
  ContainerBlobSetImmutabilityPolicyParameters,
  ContainerBlobDeleteImmutabilityPolicyParameters,
  ContainerBlobSetLegalHoldParameters,
  ContainerBlobSetMetadataParameters,
  ContainerBlobAcquireLeaseParameters,
  ContainerBlobReleaseLeaseParameters,
  ContainerBlobRenewLeaseParameters,
  ContainerBlobChangeLeaseParameters,
  ContainerBlobBreakLeaseParameters,
  ContainerBlobCreateSnapshotParameters,
  ContainerBlobStartCopyFromUrlParameters,
  ContainerBlobCopyFromUrlParameters,
  ContainerBlobAbortCopyFromUrlParameters,
  ContainerBlobSetTierParameters,
  ContainerBlobGetAccountInfoParameters,
  ContainerBlobGetTagsParameters,
  ContainerBlobSetTagsParameters,
  ContainerPageBlobCreateParameters,
  ContainerPageBlobUploadPagesParameters,
  ContainerPageBlobClearPagesParameters,
  ContainerPageBlobUploadPagesFromUrlParameters,
  ContainerPageBlobGetPageRangesParameters,
  ContainerPageBlobGetPageRangesDiffParameters,
  ContainerPageBlobResizeParameters,
  ContainerPageBlobUpdateSequenceNumberParameters,
  ContainerPageBlobCopyIncrementalParameters,
  ContainerAppendBlobCreateParameters,
  ContainerAppendBlobAppendBlockParameters,
  ContainerAppendBlobAppendBlockFromUrlParameters,
  ContainerAppendBlobSealParameters,
  ContainerBlockBlobUploadParameters,
  ContainerBlockBlobPutBlobFromUrlParameters,
  ContainerBlockBlobStageBlockParameters,
  ContainerBlockBlobStageBlockFromUrlParameters,
  ContainerBlockBlobCommitBlockListParameters,
  ContainerBlockBlobGetBlockListParameters,
  ContainerBlockBlobQueryParameters,
} from "./parameters.js";
import type {
  SetProperties202Response,
  SetPropertiesDefaultResponse,
  GetProperties200Response,
  GetPropertiesDefaultResponse,
  GetStatistics200Response,
  GetStatisticsDefaultResponse,
  ListContainersSegment200Response,
  ListContainersSegmentDefaultResponse,
  GetUserDelegationKey200Response,
  GetUserDelegationKeyDefaultResponse,
  GetAccountInfo200Response,
  GetAccountInfoDefaultResponse,
  SubmitBatch200Response,
  SubmitBatchDefaultResponse,
  FilterBlobs200Response,
  FilterBlobsDefaultResponse,
  ContainerCreate201Response,
  ContainerCreateDefaultResponse,
  ContainerGetProperties200Response,
  ContainerGetPropertiesDefaultResponse,
  ContainerDelete202Response,
  ContainerDeleteDefaultResponse,
  ContainerSetMetadata200Response,
  ContainerSetMetadataDefaultResponse,
  ContainerGetAccessPolicy200Response,
  ContainerGetAccessPolicyDefaultResponse,
  ContainerSetAccessPolicy200Response,
  ContainerSetAccessPolicyDefaultResponse,
  ContainerRestore201Response,
  ContainerRestoreDefaultResponse,
  ContainerRename200Response,
  ContainerRenameDefaultResponse,
  ContainerSubmitBatch202Response,
  ContainerSubmitBatchDefaultResponse,
  ContainerFilterBlobs200Response,
  ContainerFilterBlobsDefaultResponse,
  ContainerAcquireLease201Response,
  ContainerAcquireLeaseDefaultResponse,
  ContainerReleaseLease200Response,
  ContainerReleaseLeaseDefaultResponse,
  ContainerRenewLease200Response,
  ContainerRenewLeaseDefaultResponse,
  ContainerBreakLease202Response,
  ContainerBreakLeaseDefaultResponse,
  ContainerChangeLease200Response,
  ContainerChangeLeaseDefaultResponse,
  ContainerListBlobFlatSegment200Response,
  ContainerListBlobFlatSegmentDefaultResponse,
  ContainerListBlobHierarchySegment200Response,
  ContainerListBlobHierarchySegmentDefaultResponse,
  ContainerGetAccountInfo200Response,
  ContainerGetAccountInfoDefaultResponse,
  ContainerBlobDownload200Response,
  ContainerBlobDownload206Response,
  ContainerBlobDownloadDefaultResponse,
  ContainerBlobGetProperties200Response,
  ContainerBlobGetPropertiesDefaultResponse,
  ContainerBlobDelete202Response,
  ContainerBlobDeleteDefaultResponse,
  ContainerBlobUndelete200Response,
  ContainerBlobUndeleteDefaultResponse,
  ContainerBlobSetExpiry200Response,
  ContainerBlobSetExpiryDefaultResponse,
  ContainerBlobSetHttpHeaders200Response,
  ContainerBlobSetHttpHeadersDefaultResponse,
  ContainerBlobSetImmutabilityPolicy200Response,
  ContainerBlobSetImmutabilityPolicyDefaultResponse,
  ContainerBlobDeleteImmutabilityPolicy200Response,
  ContainerBlobDeleteImmutabilityPolicyDefaultResponse,
  ContainerBlobSetLegalHold200Response,
  ContainerBlobSetLegalHoldDefaultResponse,
  ContainerBlobSetMetadata200Response,
  ContainerBlobSetMetadataDefaultResponse,
  ContainerBlobAcquireLease201Response,
  ContainerBlobAcquireLeaseDefaultResponse,
  ContainerBlobReleaseLease200Response,
  ContainerBlobReleaseLeaseDefaultResponse,
  ContainerBlobRenewLease200Response,
  ContainerBlobRenewLeaseDefaultResponse,
  ContainerBlobChangeLease200Response,
  ContainerBlobChangeLeaseDefaultResponse,
  ContainerBlobBreakLease202Response,
  ContainerBlobBreakLeaseDefaultResponse,
  ContainerBlobCreateSnapshot201Response,
  ContainerBlobCreateSnapshotDefaultResponse,
  ContainerBlobStartCopyFromUrl202Response,
  ContainerBlobStartCopyFromUrlDefaultResponse,
  ContainerBlobCopyFromUrl202Response,
  ContainerBlobCopyFromUrlDefaultResponse,
  ContainerBlobAbortCopyFromUrl204Response,
  ContainerBlobAbortCopyFromUrlDefaultResponse,
  ContainerBlobSetTier200Response,
  ContainerBlobSetTier202Response,
  ContainerBlobSetTierDefaultResponse,
  ContainerBlobGetAccountInfo200Response,
  ContainerBlobGetAccountInfoDefaultResponse,
  ContainerBlobGetTags200Response,
  ContainerBlobGetTagsDefaultResponse,
  ContainerBlobSetTags204Response,
  ContainerBlobSetTagsDefaultResponse,
  ContainerPageBlobCreate201Response,
  ContainerPageBlobCreateDefaultResponse,
  ContainerPageBlobUploadPages201Response,
  ContainerPageBlobUploadPagesDefaultResponse,
  ContainerPageBlobClearPages201Response,
  ContainerPageBlobClearPagesDefaultResponse,
  ContainerPageBlobUploadPagesFromUrl201Response,
  ContainerPageBlobUploadPagesFromUrlDefaultResponse,
  ContainerPageBlobGetPageRanges200Response,
  ContainerPageBlobGetPageRangesDefaultResponse,
  ContainerPageBlobGetPageRangesDiff200Response,
  ContainerPageBlobGetPageRangesDiffDefaultResponse,
  ContainerPageBlobResize200Response,
  ContainerPageBlobResizeDefaultResponse,
  ContainerPageBlobUpdateSequenceNumber200Response,
  ContainerPageBlobUpdateSequenceNumberDefaultResponse,
  ContainerPageBlobCopyIncremental202Response,
  ContainerPageBlobCopyIncrementalDefaultResponse,
  ContainerAppendBlobCreate201Response,
  ContainerAppendBlobCreateDefaultResponse,
  ContainerAppendBlobAppendBlock201Response,
  ContainerAppendBlobAppendBlockDefaultResponse,
  ContainerAppendBlobAppendBlockFromUrl201Response,
  ContainerAppendBlobAppendBlockFromUrlDefaultResponse,
  ContainerAppendBlobSeal200Response,
  ContainerAppendBlobSealDefaultResponse,
  ContainerBlockBlobUpload201Response,
  ContainerBlockBlobUploadDefaultResponse,
  ContainerBlockBlobPutBlobFromUrl201Response,
  ContainerBlockBlobPutBlobFromUrlDefaultResponse,
  ContainerBlockBlobStageBlock201Response,
  ContainerBlockBlobStageBlockDefaultResponse,
  ContainerBlockBlobStageBlockFromUrl201Response,
  ContainerBlockBlobStageBlockFromUrlDefaultResponse,
  ContainerBlockBlobCommitBlockList201Response,
  ContainerBlockBlobCommitBlockListDefaultResponse,
  ContainerBlockBlobGetBlockList200Response,
  ContainerBlockBlobGetBlockListDefaultResponse,
  ContainerBlockBlobQuery200Response,
  ContainerBlockBlobQuery206Response,
  ContainerBlockBlobQueryDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface SetProperties {
  /** Sets properties for a storage account's Blob service endpoint, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules */
  put(
    options: SetPropertiesParameters,
  ): StreamableMethod<SetProperties202Response | SetPropertiesDefaultResponse>;
  /** Retrieves properties of a storage account's Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. */
  get(
    options: GetPropertiesParameters,
  ): StreamableMethod<GetProperties200Response | GetPropertiesDefaultResponse>;
}

export interface GetStatistics {
  /** Retrieves statistics related to replication for the Blob service. It is only available on the secondary location endpoint when read-access geo-redundant replication is enabled for the storage account. */
  get(
    options: GetStatisticsParameters,
  ): StreamableMethod<GetStatistics200Response | GetStatisticsDefaultResponse>;
}

export interface ListContainersSegment {
  /** The List Containers Segment operation returns a list of the containers under the specified account */
  get(
    options: ListContainersSegmentParameters,
  ): StreamableMethod<ListContainersSegment200Response | ListContainersSegmentDefaultResponse>;
}

export interface GetUserDelegationKey {
  /** Retrieves a user delegation key for the Blob service. This is only a valid operation when using bearer token authentication. */
  post(
    options: GetUserDelegationKeyParameters,
  ): StreamableMethod<GetUserDelegationKey200Response | GetUserDelegationKeyDefaultResponse>;
}

export interface GetAccountInfo {
  /** Returns the sku name and account kind. */
  get(
    options: GetAccountInfoParameters,
  ): StreamableMethod<GetAccountInfo200Response | GetAccountInfoDefaultResponse>;
}

export interface SubmitBatch {
  /** The Batch operation allows multiple API calls to be embedded into a single HTTP request. */
  post(
    options: SubmitBatchParameters,
  ): StreamableMethod<SubmitBatch200Response | SubmitBatchDefaultResponse>;
}

export interface FilterBlobs {
  /** The Filter Blobs operation enables callers to list blobs across all containers whose tags match a given search expression. */
  get(
    options: FilterBlobsParameters,
  ): StreamableMethod<FilterBlobs200Response | FilterBlobsDefaultResponse>;
}

export interface ContainerCreate {
  /** Creates a new container under the specified account. If the container with the same name already exists, the operation fails. */
  put(
    options: ContainerCreateParameters,
  ): StreamableMethod<ContainerCreate201Response | ContainerCreateDefaultResponse>;
  /** returns all user-defined metadata and system properties for the specified container. The data returned does not include the container's list of blobs */
  get(
    options: ContainerGetPropertiesParameters,
  ): StreamableMethod<ContainerGetProperties200Response | ContainerGetPropertiesDefaultResponse>;
  /** operation marks the specified container for deletion. The container and any blobs contained within it are later deleted during garbage collection */
  delete(
    options: ContainerDeleteParameters,
  ): StreamableMethod<ContainerDelete202Response | ContainerDeleteDefaultResponse>;
}

export interface ContainerSetMetadata {
  /** operation sets one or more user-defined name-value pairs for the specified container. */
  put(
    options: ContainerSetMetadataParameters,
  ): StreamableMethod<ContainerSetMetadata200Response | ContainerSetMetadataDefaultResponse>;
}

export interface ContainerGetAccessPolicy {
  /** gets the permissions for the specified container. The permissions indicate whether container data may be accessed publicly. */
  get(
    options: ContainerGetAccessPolicyParameters,
  ): StreamableMethod<
    ContainerGetAccessPolicy200Response | ContainerGetAccessPolicyDefaultResponse
  >;
  /** sets the permissions for the specified container. The permissions indicate whether blobs in a container may be accessed publicly. */
  put(
    options: ContainerSetAccessPolicyParameters,
  ): StreamableMethod<
    ContainerSetAccessPolicy200Response | ContainerSetAccessPolicyDefaultResponse
  >;
}

export interface ContainerRestore {
  /** Restores a previously-deleted container. */
  put(
    options: ContainerRestoreParameters,
  ): StreamableMethod<ContainerRestore201Response | ContainerRestoreDefaultResponse>;
}

export interface ContainerRename {
  /** Renames an existing container. */
  put(
    options: ContainerRenameParameters,
  ): StreamableMethod<ContainerRename200Response | ContainerRenameDefaultResponse>;
}

export interface ContainerSubmitBatch {
  /** The Batch operation allows multiple API calls to be embedded into a single HTTP request. */
  post(
    options: ContainerSubmitBatchParameters,
  ): StreamableMethod<ContainerSubmitBatch202Response | ContainerSubmitBatchDefaultResponse>;
}

export interface ContainerFilterBlobs {
  /** The Filter Blobs operation enables callers to list blobs in a container whose tags match a given search expression.  Filter blobs searches within the given container. */
  get(
    options: ContainerFilterBlobsParameters,
  ): StreamableMethod<ContainerFilterBlobs200Response | ContainerFilterBlobsDefaultResponse>;
}

export interface ContainerAcquireLease {
  /** The Acquire Lease operation requests a new lease on a container. The lease lock duration can be 15 to 60 seconds, or can be infinite. */
  put(
    options: ContainerAcquireLeaseParameters,
  ): StreamableMethod<ContainerAcquireLease201Response | ContainerAcquireLeaseDefaultResponse>;
}

export interface ContainerReleaseLease {
  /** The Release Lease operation frees the lease if it's no longer needed, so that another client can immediately acquire a lease against the container. */
  put(
    options: ContainerReleaseLeaseParameters,
  ): StreamableMethod<ContainerReleaseLease200Response | ContainerReleaseLeaseDefaultResponse>;
}

export interface ContainerRenewLease {
  /** The Renew Lease operation renews an existing lease. */
  put(
    options: ContainerRenewLeaseParameters,
  ): StreamableMethod<ContainerRenewLease200Response | ContainerRenewLeaseDefaultResponse>;
}

export interface ContainerBreakLease {
  /** The Break Lease operation ends a lease and ensures that another client can't acquire a new lease until the current lease period has expired. */
  put(
    options: ContainerBreakLeaseParameters,
  ): StreamableMethod<ContainerBreakLease202Response | ContainerBreakLeaseDefaultResponse>;
}

export interface ContainerChangeLease {
  /** The Change Lease operation is used to change the ID of an existing lease. */
  put(
    options: ContainerChangeLeaseParameters,
  ): StreamableMethod<ContainerChangeLease200Response | ContainerChangeLeaseDefaultResponse>;
}

export interface ContainerListBlobFlatSegment {
  /** The List Blobs operation returns a list of the blobs under the specified container. */
  get(
    options: ContainerListBlobFlatSegmentParameters,
  ): StreamableMethod<
    ContainerListBlobFlatSegment200Response | ContainerListBlobFlatSegmentDefaultResponse
  >;
}

export interface ContainerListBlobHierarchySegment {
  /** The List Blobs operation returns a list of the blobs under the specified container. A delimiter can be used to traverse a virtual hierarchy of blobs as though it were a file system. */
  get(
    options: ContainerListBlobHierarchySegmentParameters,
  ): StreamableMethod<
    ContainerListBlobHierarchySegment200Response | ContainerListBlobHierarchySegmentDefaultResponse
  >;
}

export interface ContainerGetAccountInfo {
  /** Returns the sku name and account kind */
  get(
    options: ContainerGetAccountInfoParameters,
  ): StreamableMethod<ContainerGetAccountInfo200Response | ContainerGetAccountInfoDefaultResponse>;
}

export interface ContainerBlobDownload {
  /** The Download operation reads or downloads a blob from the system, including its metadata and properties. You can also call Download to read a snapshot. */
  get(
    options: ContainerBlobDownloadParameters,
  ): StreamableMethod<
    | ContainerBlobDownload200Response
    | ContainerBlobDownload206Response
    | ContainerBlobDownloadDefaultResponse
  >;
  /** The Get Properties operation returns all user-defined metadata, standard HTTP properties, and system properties for the blob. It does not return the content of the blob. */
  head(
    options: ContainerBlobGetPropertiesParameters,
  ): StreamableMethod<
    ContainerBlobGetProperties200Response | ContainerBlobGetPropertiesDefaultResponse
  >;
  /** If the storage account's soft delete feature is disabled then, when a blob is deleted, it is permanently removed from the storage account. If the storage account's soft delete feature is enabled, then, when a blob is deleted, it is marked for deletion and becomes inaccessible immediately. However, the blob service retains the blob or snapshot for the number of days specified by the DeleteRetentionPolicy section of [Storage service properties] (Set-Blob-Service-Properties.md). After the specified number of days has passed, the blob's data is permanently removed from the storage account. Note that you continue to be charged for the soft-deleted blob's storage until it is permanently removed. Use the List Blobs API and specify the \"include=deleted\" query parameter to discover which blobs and snapshots have been soft deleted. You can then use the Undelete Blob API to restore a soft-deleted blob. All other operations on a soft-deleted blob or snapshot causes the service to return an HTTP status code of 404 (ResourceNotFound). */
  delete(
    options: ContainerBlobDeleteParameters,
  ): StreamableMethod<ContainerBlobDelete202Response | ContainerBlobDeleteDefaultResponse>;
}

export interface ContainerBlobUndelete {
  /** Undelete a blob that was previously soft deleted */
  put(
    options: ContainerBlobUndeleteParameters,
  ): StreamableMethod<ContainerBlobUndelete200Response | ContainerBlobUndeleteDefaultResponse>;
}

export interface ContainerBlobSetExpiry {
  /** Set the expiration time of a blob */
  put(
    options: ContainerBlobSetExpiryParameters,
  ): StreamableMethod<ContainerBlobSetExpiry200Response | ContainerBlobSetExpiryDefaultResponse>;
}

export interface ContainerBlobSetHttpHeaders {
  /** The Set HTTP Headers operation sets system properties on the blob. */
  put(
    options: ContainerBlobSetHttpHeadersParameters,
  ): StreamableMethod<
    ContainerBlobSetHttpHeaders200Response | ContainerBlobSetHttpHeadersDefaultResponse
  >;
}

export interface ContainerBlobSetImmutabilityPolicy {
  /** Set the immutability policy of a blob */
  put(
    options: ContainerBlobSetImmutabilityPolicyParameters,
  ): StreamableMethod<
    | ContainerBlobSetImmutabilityPolicy200Response
    | ContainerBlobSetImmutabilityPolicyDefaultResponse
  >;
  /** The Delete Immutability Policy operation deletes the immutability policy on the blob. */
  delete(
    options: ContainerBlobDeleteImmutabilityPolicyParameters,
  ): StreamableMethod<
    | ContainerBlobDeleteImmutabilityPolicy200Response
    | ContainerBlobDeleteImmutabilityPolicyDefaultResponse
  >;
}

export interface ContainerBlobSetLegalHold {
  /** The Set Legal Hold operation sets a legal hold on the blob. */
  put(
    options: ContainerBlobSetLegalHoldParameters,
  ): StreamableMethod<
    ContainerBlobSetLegalHold200Response | ContainerBlobSetLegalHoldDefaultResponse
  >;
}

export interface ContainerBlobSetMetadata {
  /** The Set Metadata operation sets user-defined metadata for the specified blob as one or more name-value pairs. */
  put(
    options: ContainerBlobSetMetadataParameters,
  ): StreamableMethod<
    ContainerBlobSetMetadata200Response | ContainerBlobSetMetadataDefaultResponse
  >;
}

export interface ContainerBlobAcquireLease {
  /** The Acquire Lease operation requests a new lease on a blob. The lease lock duration can be 15 to 60 seconds, or can be infinite. */
  put(
    options: ContainerBlobAcquireLeaseParameters,
  ): StreamableMethod<
    ContainerBlobAcquireLease201Response | ContainerBlobAcquireLeaseDefaultResponse
  >;
}

export interface ContainerBlobReleaseLease {
  /** The Release Lease operation frees the lease if it's no longer needed, so that another client can immediately acquire a lease against the blob. */
  put(
    options: ContainerBlobReleaseLeaseParameters,
  ): StreamableMethod<
    ContainerBlobReleaseLease200Response | ContainerBlobReleaseLeaseDefaultResponse
  >;
}

export interface ContainerBlobRenewLease {
  /** The Renew Lease operation renews an existing lease. */
  put(
    options: ContainerBlobRenewLeaseParameters,
  ): StreamableMethod<ContainerBlobRenewLease200Response | ContainerBlobRenewLeaseDefaultResponse>;
}

export interface ContainerBlobChangeLease {
  /** The Change Lease operation is used to change the ID of an existing lease. */
  put(
    options: ContainerBlobChangeLeaseParameters,
  ): StreamableMethod<
    ContainerBlobChangeLease200Response | ContainerBlobChangeLeaseDefaultResponse
  >;
}

export interface ContainerBlobBreakLease {
  /** The Break Lease operation ends a lease and ensures that another client can't acquire a new lease until the current lease period has expired. */
  put(
    options: ContainerBlobBreakLeaseParameters,
  ): StreamableMethod<ContainerBlobBreakLease202Response | ContainerBlobBreakLeaseDefaultResponse>;
}

export interface ContainerBlobCreateSnapshot {
  /** The Create Snapshot operation creates a read-only snapshot of a blob */
  put(
    options: ContainerBlobCreateSnapshotParameters,
  ): StreamableMethod<
    ContainerBlobCreateSnapshot201Response | ContainerBlobCreateSnapshotDefaultResponse
  >;
}

export interface ContainerBlobStartCopyFromUrl {
  /** The Start Copy From URL operation copies a blob or an internet resource to a new blob. */
  put(
    options: ContainerBlobStartCopyFromUrlParameters,
  ): StreamableMethod<
    ContainerBlobStartCopyFromUrl202Response | ContainerBlobStartCopyFromUrlDefaultResponse
  >;
}

export interface ContainerBlobCopyFromUrl {
  /** The Copy From URL operation copies a blob or an internet resource to a new blob. It will not return a response until the copy is complete. */
  put(
    options: ContainerBlobCopyFromUrlParameters,
  ): StreamableMethod<
    ContainerBlobCopyFromUrl202Response | ContainerBlobCopyFromUrlDefaultResponse
  >;
}

export interface ContainerBlobAbortCopyFromUrl {
  /** The Abort Copy From URL operation aborts a pending Copy From URL operation, and leaves a destination blob with zero length and full metadata. */
  put(
    options: ContainerBlobAbortCopyFromUrlParameters,
  ): StreamableMethod<
    ContainerBlobAbortCopyFromUrl204Response | ContainerBlobAbortCopyFromUrlDefaultResponse
  >;
}

export interface ContainerBlobSetTier {
  /** The Set Tier operation sets the tier on a block blob. The operation is allowed on a page blob or block blob, but not on an append blob. A block blob's tier determines Hot/Cool/Archive storage type. This operation does not update the blob's ETag. */
  put(
    options: ContainerBlobSetTierParameters,
  ): StreamableMethod<
    | ContainerBlobSetTier200Response
    | ContainerBlobSetTier202Response
    | ContainerBlobSetTierDefaultResponse
  >;
}

export interface ContainerBlobGetAccountInfo {
  /** Returns the sku name and account kind */
  get(
    options: ContainerBlobGetAccountInfoParameters,
  ): StreamableMethod<
    ContainerBlobGetAccountInfo200Response | ContainerBlobGetAccountInfoDefaultResponse
  >;
}

export interface ContainerBlobGetTags {
  /** The Get Blob Tags operation enables users to get tags on a blob. */
  get(
    options: ContainerBlobGetTagsParameters,
  ): StreamableMethod<ContainerBlobGetTags200Response | ContainerBlobGetTagsDefaultResponse>;
  /** The Set Tags operation enables users to set tags on a blob. */
  put(
    options: ContainerBlobSetTagsParameters,
  ): StreamableMethod<ContainerBlobSetTags204Response | ContainerBlobSetTagsDefaultResponse>;
}

export interface ContainerPageBlobCreate {
  /** The Create operation creates a new page blob. */
  put(
    options: ContainerPageBlobCreateParameters,
  ): StreamableMethod<ContainerPageBlobCreate201Response | ContainerPageBlobCreateDefaultResponse>;
}

export interface ContainerPageBlobUploadPages {
  /** The Upload Pages operation writes a range of pages to a page blob */
  put(
    options: ContainerPageBlobUploadPagesParameters,
  ): StreamableMethod<
    ContainerPageBlobUploadPages201Response | ContainerPageBlobUploadPagesDefaultResponse
  >;
}

export interface ContainerPageBlobClearPages {
  /** The Clear Pages operation clears a range of pages from a page blob */
  put(
    options: ContainerPageBlobClearPagesParameters,
  ): StreamableMethod<
    ContainerPageBlobClearPages201Response | ContainerPageBlobClearPagesDefaultResponse
  >;
}

export interface ContainerPageBlobUploadPagesFromUrl {
  /** The Upload Pages operation writes a range of pages to a page blob where the contents are read from a URL. */
  put(
    options: ContainerPageBlobUploadPagesFromUrlParameters,
  ): StreamableMethod<
    | ContainerPageBlobUploadPagesFromUrl201Response
    | ContainerPageBlobUploadPagesFromUrlDefaultResponse
  >;
}

export interface ContainerPageBlobGetPageRanges {
  /** The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot of a page blob. */
  get(
    options: ContainerPageBlobGetPageRangesParameters,
  ): StreamableMethod<
    ContainerPageBlobGetPageRanges200Response | ContainerPageBlobGetPageRangesDefaultResponse
  >;
}

export interface ContainerPageBlobGetPageRangesDiff {
  /** The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob or snapshot of a page blob. */
  get(
    options: ContainerPageBlobGetPageRangesDiffParameters,
  ): StreamableMethod<
    | ContainerPageBlobGetPageRangesDiff200Response
    | ContainerPageBlobGetPageRangesDiffDefaultResponse
  >;
}

export interface ContainerPageBlobResize {
  /** The Resize operation increases the size of the page blob to the specified size. */
  put(
    options: ContainerPageBlobResizeParameters,
  ): StreamableMethod<ContainerPageBlobResize200Response | ContainerPageBlobResizeDefaultResponse>;
}

export interface ContainerPageBlobUpdateSequenceNumber {
  /** The Update Sequence Number operation sets the blob's sequence number. The operation will fail if the specified sequence number is less than the current sequence number of the blob. */
  put(
    options: ContainerPageBlobUpdateSequenceNumberParameters,
  ): StreamableMethod<
    | ContainerPageBlobUpdateSequenceNumber200Response
    | ContainerPageBlobUpdateSequenceNumberDefaultResponse
  >;
}

export interface ContainerPageBlobCopyIncremental {
  /** The Copy Incremental operation copies a snapshot of the source page blob to a destination page blob. The snapshot is copied such that only the differential changes between the previously copied snapshot are transferred to the destination. The copied snapshots are complete copies of the original snapshot and can be read or copied from as usual. This API is supported since REST version 2016-05-31. */
  put(
    options: ContainerPageBlobCopyIncrementalParameters,
  ): StreamableMethod<
    ContainerPageBlobCopyIncremental202Response | ContainerPageBlobCopyIncrementalDefaultResponse
  >;
}

export interface ContainerAppendBlobCreate {
  /** The Create operation creates a new append blob. */
  put(
    options: ContainerAppendBlobCreateParameters,
  ): StreamableMethod<
    ContainerAppendBlobCreate201Response | ContainerAppendBlobCreateDefaultResponse
  >;
}

export interface ContainerAppendBlobAppendBlock {
  /** The Append Block operation commits a new block of data to the end of an append blob. */
  put(
    options: ContainerAppendBlobAppendBlockParameters,
  ): StreamableMethod<
    ContainerAppendBlobAppendBlock201Response | ContainerAppendBlobAppendBlockDefaultResponse
  >;
}

export interface ContainerAppendBlobAppendBlockFromUrl {
  /** The Append Block From URL operation creates a new block to be committed as part of an append blob where the contents are read from a URL. */
  put(
    options: ContainerAppendBlobAppendBlockFromUrlParameters,
  ): StreamableMethod<
    | ContainerAppendBlobAppendBlockFromUrl201Response
    | ContainerAppendBlobAppendBlockFromUrlDefaultResponse
  >;
}

export interface ContainerAppendBlobSeal {
  /** The Seal operation seals the Append Blob to make it read-only. Seal is supported only on version 2019-12-12 version or later. */
  put(
    options: ContainerAppendBlobSealParameters,
  ): StreamableMethod<ContainerAppendBlobSeal200Response | ContainerAppendBlobSealDefaultResponse>;
}

export interface ContainerBlockBlobUpload {
  /** The Upload Block Blob operation updates the content of an existing block blob. Updating an existing block blob overwrites any existing metadata on the blob. Partial updates are not supported with Put Blob; the content of the existing blob is overwritten with the content of the new blob. To perform a partial update of the content of a block blob, use the Put Block List operation. */
  put(
    options: ContainerBlockBlobUploadParameters,
  ): StreamableMethod<
    ContainerBlockBlobUpload201Response | ContainerBlockBlobUploadDefaultResponse
  >;
}

export interface ContainerBlockBlobPutBlobFromUrl {
  /** The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read from a given URL.  This API is supported beginning with the 2020-04-08 version. Partial updates are not supported with Put Blob from URL; the content of an existing blob is overwritten with the content of the new blob.  To perform partial updates to a block blob’s contents using a source URL, use the Put Block from URL API in conjunction with Put Block List. */
  put(
    options: ContainerBlockBlobPutBlobFromUrlParameters,
  ): StreamableMethod<
    ContainerBlockBlobPutBlobFromUrl201Response | ContainerBlockBlobPutBlobFromUrlDefaultResponse
  >;
}

export interface ContainerBlockBlobStageBlock {
  /** The Stage Block operation creates a new block to be committed as part of a blob */
  put(
    options: ContainerBlockBlobStageBlockParameters,
  ): StreamableMethod<
    ContainerBlockBlobStageBlock201Response | ContainerBlockBlobStageBlockDefaultResponse
  >;
}

export interface ContainerBlockBlobStageBlockFromUrl {
  /** The Stage Block From URL operation creates a new block to be committed as part of a blob where the contents are read from a URL. */
  put(
    options: ContainerBlockBlobStageBlockFromUrlParameters,
  ): StreamableMethod<
    | ContainerBlockBlobStageBlockFromUrl201Response
    | ContainerBlockBlobStageBlockFromUrlDefaultResponse
  >;
}

export interface ContainerBlockBlobCommitBlockList {
  /** The Commit Block List operation writes a blob by specifying the list of block IDs that make up the blob. In order to be written as part of a blob, a block must have been successfully written to the server in a prior Put Block operation. You can call Put Block List to update a blob by uploading only those blocks that have changed, then committing the new and existing blocks together. You can do this by specifying whether to commit a block from the committed block list or from the uncommitted block list, or to commit the most recently uploaded version of the block, whichever list it may belong to. */
  put(
    options: ContainerBlockBlobCommitBlockListParameters,
  ): StreamableMethod<
    ContainerBlockBlobCommitBlockList201Response | ContainerBlockBlobCommitBlockListDefaultResponse
  >;
  /** The Get Block List operation retrieves the list of blocks that have been uploaded as part of a block blob. */
  get(
    options: ContainerBlockBlobGetBlockListParameters,
  ): StreamableMethod<
    ContainerBlockBlobGetBlockList200Response | ContainerBlockBlobGetBlockListDefaultResponse
  >;
}

export interface ContainerBlockBlobQuery {
  /** The Query operation enables users to select/project on blob data by providing simple query expressions. */
  post(
    options: ContainerBlockBlobQueryParameters,
  ): StreamableMethod<
    | ContainerBlockBlobQuery200Response
    | ContainerBlockBlobQuery206Response
    | ContainerBlockBlobQueryDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/?restype=service&comp=properties' has methods for the following verbs: put, get */
  (path: "/?restype=service&comp=properties"): SetProperties;
  /** Resource for '/?restype=service&comp=stats' has methods for the following verbs: get */
  (path: "/?restype=service&comp=stats"): GetStatistics;
  /** Resource for '/?comp=list' has methods for the following verbs: get */
  (path: "/?comp=list"): ListContainersSegment;
  /** Resource for '/?restype=service&comp=userdelegationkey' has methods for the following verbs: post */
  (path: "/?restype=service&comp=userdelegationkey"): GetUserDelegationKey;
  /** Resource for '/?restype=account&comp=properties' has methods for the following verbs: get */
  (path: "/?restype=account&comp=properties"): GetAccountInfo;
  /** Resource for '/?comp=batch' has methods for the following verbs: post */
  (path: "/?comp=batch"): SubmitBatch;
  /** Resource for '/?comp=blobs' has methods for the following verbs: get */
  (path: "/?comp=blobs"): FilterBlobs;
  /** Resource for '/\{containerName\}?restype=container' has methods for the following verbs: put, get, delete */
  (path: "/{containerName}?restype=container", containerName: string): ContainerCreate;
  /** Resource for '/\{containerName\}?restype=container&comp=metadata' has methods for the following verbs: put */
  (
    path: "/{containerName}?restype=container&comp=metadata",
    containerName: string,
  ): ContainerSetMetadata;
  /** Resource for '/\{containerName\}?restype=container&comp=acl' has methods for the following verbs: get, put */
  (
    path: "/{containerName}?restype=container&comp=acl",
    containerName: string,
  ): ContainerGetAccessPolicy;
  /** Resource for '/\{containerName\}?restype=container&comp=undelete' has methods for the following verbs: put */
  (
    path: "/{containerName}?restype=container&comp=undelete",
    containerName: string,
  ): ContainerRestore;
  /** Resource for '/\{containerName\}?restype=container&comp=rename' has methods for the following verbs: put */
  (path: "/{containerName}?restype=container&comp=rename", containerName: string): ContainerRename;
  /** Resource for '/\{containerName\}?restype=container&comp=batch' has methods for the following verbs: post */
  (
    path: "/{containerName}?restype=container&comp=batch",
    containerName: string,
  ): ContainerSubmitBatch;
  /** Resource for '/\{containerName\}?restype=container&comp=blobs' has methods for the following verbs: get */
  (
    path: "/{containerName}?restype=container&comp=blobs",
    containerName: string,
  ): ContainerFilterBlobs;
  /** Resource for '/\{containerName\}?comp=lease&restype=container&acquire' has methods for the following verbs: put */
  (
    path: "/{containerName}?comp=lease&restype=container&acquire",
    containerName: string,
  ): ContainerAcquireLease;
  /** Resource for '/\{containerName\}?comp=lease&restype=container&release' has methods for the following verbs: put */
  (
    path: "/{containerName}?comp=lease&restype=container&release",
    containerName: string,
  ): ContainerReleaseLease;
  /** Resource for '/\{containerName\}?comp=lease&restype=container&renew' has methods for the following verbs: put */
  (
    path: "/{containerName}?comp=lease&restype=container&renew",
    containerName: string,
  ): ContainerRenewLease;
  /** Resource for '/\{containerName\}?comp=lease&restype=container&break' has methods for the following verbs: put */
  (
    path: "/{containerName}?comp=lease&restype=container&break",
    containerName: string,
  ): ContainerBreakLease;
  /** Resource for '/\{containerName\}?comp=lease&restype=container&change' has methods for the following verbs: put */
  (
    path: "/{containerName}?comp=lease&restype=container&change",
    containerName: string,
  ): ContainerChangeLease;
  /** Resource for '/\{containerName\}?restype=container&comp=list&flat' has methods for the following verbs: get */
  (
    path: "/{containerName}?restype=container&comp=list&flat",
    containerName: string,
  ): ContainerListBlobFlatSegment;
  /** Resource for '/\{containerName\}?restype=container&comp=list&hierarchy' has methods for the following verbs: get */
  (
    path: "/{containerName}?restype=container&comp=list&hierarchy",
    containerName: string,
  ): ContainerListBlobHierarchySegment;
  /** Resource for '/\{containerName\}?restype=account&comp=properties' has methods for the following verbs: get */
  (
    path: "/{containerName}?restype=account&comp=properties",
    containerName: string,
  ): ContainerGetAccountInfo;
  /** Resource for '/\{containerName\}/\{blobName\}' has methods for the following verbs: get, head, delete */
  (
    path: "/{containerName}/{blobName}",
    containerName: string,
    blobName: string,
  ): ContainerBlobDownload;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=undelete' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=undelete",
    containerName: string,
    blobName: string,
  ): ContainerBlobUndelete;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=expiry' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=expiry",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetExpiry;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=properties&SetHTTPHeaders' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=properties&SetHTTPHeaders",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetHttpHeaders;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=immutabilityPolicies' has methods for the following verbs: put, delete */
  (
    path: "/{containerName}/{blobName}?comp=immutabilityPolicies",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetImmutabilityPolicy;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=legalhold' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=legalhold",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetLegalHold;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=metadata' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=metadata",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetMetadata;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=lease&acquire' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=lease&acquire",
    containerName: string,
    blobName: string,
  ): ContainerBlobAcquireLease;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=lease&release' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=lease&release",
    containerName: string,
    blobName: string,
  ): ContainerBlobReleaseLease;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=lease&renew' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=lease&renew",
    containerName: string,
    blobName: string,
  ): ContainerBlobRenewLease;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=lease&change' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=lease&change",
    containerName: string,
    blobName: string,
  ): ContainerBlobChangeLease;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=lease&break' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=lease&break",
    containerName: string,
    blobName: string,
  ): ContainerBlobBreakLease;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=snapshot' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=snapshot",
    containerName: string,
    blobName: string,
  ): ContainerBlobCreateSnapshot;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=copy' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=copy",
    containerName: string,
    blobName: string,
  ): ContainerBlobStartCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=copy&sync' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=copy&sync",
    containerName: string,
    blobName: string,
  ): ContainerBlobCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=copy&copyid' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=copy&copyid",
    containerName: string,
    blobName: string,
  ): ContainerBlobAbortCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=tier' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=tier",
    containerName: string,
    blobName: string,
  ): ContainerBlobSetTier;
  /** Resource for '/\{containerName\}/\{blobName\}?restype=account&comp=properties&blob' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blobName}?restype=account&comp=properties&blob",
    containerName: string,
    blobName: string,
  ): ContainerBlobGetAccountInfo;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=tags' has methods for the following verbs: get, put */
  (
    path: "/{containerName}/{blobName}?comp=tags",
    containerName: string,
    blobName: string,
  ): ContainerBlobGetTags;
  /** Resource for '/\{containerName\}/\{blobName\}?PageBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?PageBlob",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobCreate;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=page&update' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=page&update",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobUploadPages;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=page&clear' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=page&clear",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobClearPages;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=page&update&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=page&update&fromUrl",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobUploadPagesFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=pagelist' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blobName}?comp=pagelist",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobGetPageRanges;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=pagelist&diff' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blobName}?comp=pagelist&diff",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobGetPageRangesDiff;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=properties&Resize' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=properties&Resize",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobResize;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=properties&UpdateSequenceNumber' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=properties&UpdateSequenceNumber",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobUpdateSequenceNumber;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=incrementalcopy' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=incrementalcopy",
    containerName: string,
    blobName: string,
  ): ContainerPageBlobCopyIncremental;
  /** Resource for '/\{containerName\}/\{blobName\}?AppendBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?AppendBlob",
    containerName: string,
    blobName: string,
  ): ContainerAppendBlobCreate;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=appendblock' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=appendblock",
    containerName: string,
    blobName: string,
  ): ContainerAppendBlobAppendBlock;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=appendblock&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=appendblock&fromUrl",
    containerName: string,
    blobName: string,
  ): ContainerAppendBlobAppendBlockFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=seal' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=seal",
    containerName: string,
    blobName: string,
  ): ContainerAppendBlobSeal;
  /** Resource for '/\{containerName\}/\{blobName\}?BlockBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?BlockBlob",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobUpload;
  /** Resource for '/\{containerName\}/\{blobName\}?BlockBlob&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?BlockBlob&fromUrl",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobPutBlobFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=block' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=block",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobStageBlock;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=block&fromURL' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blobName}?comp=block&fromURL",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobStageBlockFromUrl;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=blocklist' has methods for the following verbs: put, get */
  (
    path: "/{containerName}/{blobName}?comp=blocklist",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobCommitBlockList;
  /** Resource for '/\{containerName\}/\{blobName\}?comp=query' has methods for the following verbs: post */
  (
    path: "/{containerName}/{blobName}?comp=query",
    containerName: string,
    blobName: string,
  ): ContainerBlockBlobQuery;
}

export type BlobClient = Client & {
  path: Routes;
};
