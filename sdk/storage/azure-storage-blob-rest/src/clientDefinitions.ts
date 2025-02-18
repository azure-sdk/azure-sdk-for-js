// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ServiceSetPropertiesParameters,
  ServiceGetPropertiesParameters,
  ServiceGetStatisticsParameters,
  ServiceListContainersSegmentParameters,
  ServiceGetUserDelegationKeyParameters,
  ServiceGetAccountInfoParameters,
  ServiceSubmitBatchParameters,
  ServiceFilterBlobsParameters,
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
  BlobDownloadParameters,
  BlobGetPropertiesParameters,
  BlobDeleteParameters,
  BlobUndeleteParameters,
  BlobSetExpiryParameters,
  BlobSetHttpHeadersParameters,
  BlobSetImmutabilityPolicyParameters,
  BlobDeleteImmutabilityPolicyParameters,
  BlobSetLegalHoldParameters,
  BlobSetMetadataParameters,
  BlobAcquireLeaseParameters,
  BlobReleaseLeaseParameters,
  BlobRenewLeaseParameters,
  BlobChangeLeaseParameters,
  BlobBreakLeaseParameters,
  BlobCreateSnapshotParameters,
  BlobStartCopyFromUrlParameters,
  BlobCopyFromUrlParameters,
  BlobAbortCopyFromUrlParameters,
  BlobSetTierParameters,
  BlobGetAccountInfoParameters,
  BlobQueryParameters,
  BlobGetTagsParameters,
  BlobSetTagsParameters,
  PageBlobCreateParameters,
  PageBlobUploadPagesParameters,
  PageBlobClearPagesParameters,
  PageBlobUploadPagesFromUrlParameters,
  PageBlobGetPageRangesParameters,
  PageBlobGetPageRangesDiffParameters,
  PageBlobResizeParameters,
  PageBlobUpdateSequenceNumberParameters,
  PageBlobCopyIncrementalParameters,
  AppendBlobCreateParameters,
  AppendBlobAppendBlockParameters,
  AppendBlobAppendBlockFromUrlParameters,
  AppendBlobSealParameters,
  BlockBlobUploadParameters,
  BlockBlobPutBlobFromUrlParameters,
  BlockBlobStageBlockParameters,
  BlockBlobStageBlockFromUrlParameters,
  BlockBlobCommitBlockListParameters,
  BlockBlobGetBlockListParameters,
} from "./parameters.js";
import type {
  ServiceSetProperties202Response,
  ServiceSetPropertiesDefaultResponse,
  ServiceGetProperties200Response,
  ServiceGetPropertiesDefaultResponse,
  ServiceGetStatistics200Response,
  ServiceGetStatisticsDefaultResponse,
  ServiceListContainersSegment200Response,
  ServiceListContainersSegmentDefaultResponse,
  ServiceGetUserDelegationKey200Response,
  ServiceGetUserDelegationKeyDefaultResponse,
  ServiceGetAccountInfo200Response,
  ServiceGetAccountInfoDefaultResponse,
  ServiceSubmitBatch200Response,
  ServiceSubmitBatchDefaultResponse,
  ServiceFilterBlobs200Response,
  ServiceFilterBlobsDefaultResponse,
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
  BlobDownload200Response,
  BlobDownload206Response,
  BlobDownloadDefaultResponse,
  BlobGetProperties200Response,
  BlobGetPropertiesDefaultResponse,
  BlobDelete202Response,
  BlobDeleteDefaultResponse,
  BlobUndelete200Response,
  BlobUndeleteDefaultResponse,
  BlobSetExpiry200Response,
  BlobSetExpiryDefaultResponse,
  BlobSetHttpHeaders200Response,
  BlobSetHttpHeadersDefaultResponse,
  BlobSetImmutabilityPolicy200Response,
  BlobSetImmutabilityPolicyDefaultResponse,
  BlobDeleteImmutabilityPolicy200Response,
  BlobDeleteImmutabilityPolicyDefaultResponse,
  BlobSetLegalHold200Response,
  BlobSetLegalHoldDefaultResponse,
  BlobSetMetadata200Response,
  BlobSetMetadataDefaultResponse,
  BlobAcquireLease201Response,
  BlobAcquireLeaseDefaultResponse,
  BlobReleaseLease200Response,
  BlobReleaseLeaseDefaultResponse,
  BlobRenewLease200Response,
  BlobRenewLeaseDefaultResponse,
  BlobChangeLease200Response,
  BlobChangeLeaseDefaultResponse,
  BlobBreakLease202Response,
  BlobBreakLeaseDefaultResponse,
  BlobCreateSnapshot201Response,
  BlobCreateSnapshotDefaultResponse,
  BlobStartCopyFromUrl202Response,
  BlobStartCopyFromUrlDefaultResponse,
  BlobCopyFromUrl202Response,
  BlobCopyFromUrlDefaultResponse,
  BlobAbortCopyFromUrl204Response,
  BlobAbortCopyFromUrlDefaultResponse,
  BlobSetTier200Response,
  BlobSetTier202Response,
  BlobSetTierDefaultResponse,
  BlobGetAccountInfo200Response,
  BlobGetAccountInfoDefaultResponse,
  BlobQuery200Response,
  BlobQuery206Response,
  BlobQueryDefaultResponse,
  BlobGetTags200Response,
  BlobGetTagsDefaultResponse,
  BlobSetTags204Response,
  BlobSetTagsDefaultResponse,
  PageBlobCreate201Response,
  PageBlobCreateDefaultResponse,
  PageBlobUploadPages201Response,
  PageBlobUploadPagesDefaultResponse,
  PageBlobClearPages201Response,
  PageBlobClearPagesDefaultResponse,
  PageBlobUploadPagesFromUrl201Response,
  PageBlobUploadPagesFromUrlDefaultResponse,
  PageBlobGetPageRanges200Response,
  PageBlobGetPageRangesDefaultResponse,
  PageBlobGetPageRangesDiff200Response,
  PageBlobGetPageRangesDiffDefaultResponse,
  PageBlobResize200Response,
  PageBlobResizeDefaultResponse,
  PageBlobUpdateSequenceNumber200Response,
  PageBlobUpdateSequenceNumberDefaultResponse,
  PageBlobCopyIncremental202Response,
  PageBlobCopyIncrementalDefaultResponse,
  AppendBlobCreate201Response,
  AppendBlobCreateDefaultResponse,
  AppendBlobAppendBlock201Response,
  AppendBlobAppendBlockDefaultResponse,
  AppendBlobAppendBlockFromUrl201Response,
  AppendBlobAppendBlockFromUrlDefaultResponse,
  AppendBlobSeal200Response,
  AppendBlobSealDefaultResponse,
  BlockBlobUpload201Response,
  BlockBlobUploadDefaultResponse,
  BlockBlobPutBlobFromUrl201Response,
  BlockBlobPutBlobFromUrlDefaultResponse,
  BlockBlobStageBlock201Response,
  BlockBlobStageBlockDefaultResponse,
  BlockBlobStageBlockFromUrl201Response,
  BlockBlobStageBlockFromUrlDefaultResponse,
  BlockBlobCommitBlockList201Response,
  BlockBlobCommitBlockListDefaultResponse,
  BlockBlobGetBlockList200Response,
  BlockBlobGetBlockListDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ServiceSetProperties {
  /** Sets properties for a storage account's Blob service endpoint, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules */
  put(
    options: ServiceSetPropertiesParameters,
  ): StreamableMethod<
    ServiceSetProperties202Response | ServiceSetPropertiesDefaultResponse
  >;
  /** Retrieves properties of a storage account's Blob service, including properties for Storage Analytics and CORS (Cross-Origin Resource Sharing) rules. */
  get(
    options: ServiceGetPropertiesParameters,
  ): StreamableMethod<
    ServiceGetProperties200Response | ServiceGetPropertiesDefaultResponse
  >;
}

export interface ServiceGetStatistics {
  /** Retrieves statistics related to replication for the Blob service. It is only available on the secondary location endpoint when read-access geo-redundant replication is enabled for the storage account. */
  get(
    options: ServiceGetStatisticsParameters,
  ): StreamableMethod<
    ServiceGetStatistics200Response | ServiceGetStatisticsDefaultResponse
  >;
}

export interface ServiceListContainersSegment {
  /** The List Containers Segment operation returns a list of the containers under the specified account */
  get(
    options: ServiceListContainersSegmentParameters,
  ): StreamableMethod<
    | ServiceListContainersSegment200Response
    | ServiceListContainersSegmentDefaultResponse
  >;
}

export interface ServiceGetUserDelegationKey {
  /** Retrieves a user delegation key for the Blob service. This is only a valid operation when using bearer token authentication. */
  post(
    options: ServiceGetUserDelegationKeyParameters,
  ): StreamableMethod<
    | ServiceGetUserDelegationKey200Response
    | ServiceGetUserDelegationKeyDefaultResponse
  >;
}

export interface ServiceGetAccountInfo {
  /** Returns the sku name and account kind. */
  get(
    options: ServiceGetAccountInfoParameters,
  ): StreamableMethod<
    ServiceGetAccountInfo200Response | ServiceGetAccountInfoDefaultResponse
  >;
}

export interface ServiceSubmitBatch {
  /** The Batch operation allows multiple API calls to be embedded into a single HTTP request. */
  post(
    options: ServiceSubmitBatchParameters,
  ): StreamableMethod<
    ServiceSubmitBatch200Response | ServiceSubmitBatchDefaultResponse
  >;
}

export interface ServiceFilterBlobs {
  /** The Filter Blobs operation enables callers to list blobs across all containers whose tags match a given search expression. */
  get(
    options: ServiceFilterBlobsParameters,
  ): StreamableMethod<
    ServiceFilterBlobs200Response | ServiceFilterBlobsDefaultResponse
  >;
}

export interface ContainerCreate {
  /** Creates a new container under the specified account. If the container with the same name already exists, the operation fails. */
  put(
    options: ContainerCreateParameters,
  ): StreamableMethod<
    ContainerCreate201Response | ContainerCreateDefaultResponse
  >;
  /** returns all user-defined metadata and system properties for the specified container. The data returned does not include the container's list of blobs */
  get(
    options: ContainerGetPropertiesParameters,
  ): StreamableMethod<
    ContainerGetProperties200Response | ContainerGetPropertiesDefaultResponse
  >;
  /** operation marks the specified container for deletion. The container and any blobs contained within it are later deleted during garbage collection */
  delete(
    options: ContainerDeleteParameters,
  ): StreamableMethod<
    ContainerDelete202Response | ContainerDeleteDefaultResponse
  >;
}

export interface ContainerSetMetadata {
  /** operation sets one or more user-defined name-value pairs for the specified container. */
  put(
    options: ContainerSetMetadataParameters,
  ): StreamableMethod<
    ContainerSetMetadata200Response | ContainerSetMetadataDefaultResponse
  >;
}

export interface ContainerGetAccessPolicy {
  /** gets the permissions for the specified container. The permissions indicate whether container data may be accessed publicly. */
  get(
    options: ContainerGetAccessPolicyParameters,
  ): StreamableMethod<
    | ContainerGetAccessPolicy200Response
    | ContainerGetAccessPolicyDefaultResponse
  >;
  /** sets the permissions for the specified container. The permissions indicate whether blobs in a container may be accessed publicly. */
  put(
    options: ContainerSetAccessPolicyParameters,
  ): StreamableMethod<
    | ContainerSetAccessPolicy200Response
    | ContainerSetAccessPolicyDefaultResponse
  >;
}

export interface ContainerRestore {
  /** Restores a previously-deleted container. */
  put(
    options: ContainerRestoreParameters,
  ): StreamableMethod<
    ContainerRestore201Response | ContainerRestoreDefaultResponse
  >;
}

export interface ContainerRename {
  /** Renames an existing container. */
  put(
    options: ContainerRenameParameters,
  ): StreamableMethod<
    ContainerRename200Response | ContainerRenameDefaultResponse
  >;
}

export interface ContainerSubmitBatch {
  /** The Batch operation allows multiple API calls to be embedded into a single HTTP request. */
  post(
    options: ContainerSubmitBatchParameters,
  ): StreamableMethod<
    ContainerSubmitBatch202Response | ContainerSubmitBatchDefaultResponse
  >;
}

export interface ContainerFilterBlobs {
  /** The Filter Blobs operation enables callers to list blobs in a container whose tags match a given search expression.  Filter blobs searches within the given container. */
  get(
    options: ContainerFilterBlobsParameters,
  ): StreamableMethod<
    ContainerFilterBlobs200Response | ContainerFilterBlobsDefaultResponse
  >;
}

export interface ContainerAcquireLease {
  /** The Acquire Lease operation requests a new lease on a container. The lease lock duration can be 15 to 60 seconds, or can be infinite. */
  put(
    options: ContainerAcquireLeaseParameters,
  ): StreamableMethod<
    ContainerAcquireLease201Response | ContainerAcquireLeaseDefaultResponse
  >;
}

export interface ContainerReleaseLease {
  /** The Release Lease operation frees the lease if it's no longer needed, so that another client can immediately acquire a lease against the container. */
  put(
    options: ContainerReleaseLeaseParameters,
  ): StreamableMethod<
    ContainerReleaseLease200Response | ContainerReleaseLeaseDefaultResponse
  >;
}

export interface ContainerRenewLease {
  /** The Renew Lease operation renews an existing lease. */
  put(
    options: ContainerRenewLeaseParameters,
  ): StreamableMethod<
    ContainerRenewLease200Response | ContainerRenewLeaseDefaultResponse
  >;
}

export interface ContainerBreakLease {
  /** The Break Lease operation ends a lease and ensures that another client can't acquire a new lease until the current lease period has expired. */
  put(
    options: ContainerBreakLeaseParameters,
  ): StreamableMethod<
    ContainerBreakLease202Response | ContainerBreakLeaseDefaultResponse
  >;
}

export interface ContainerChangeLease {
  /** The Change Lease operation is used to change the ID of an existing lease. */
  put(
    options: ContainerChangeLeaseParameters,
  ): StreamableMethod<
    ContainerChangeLease200Response | ContainerChangeLeaseDefaultResponse
  >;
}

export interface ContainerListBlobFlatSegment {
  /** The List Blobs operation returns a list of the blobs under the specified container. */
  get(
    options: ContainerListBlobFlatSegmentParameters,
  ): StreamableMethod<
    | ContainerListBlobFlatSegment200Response
    | ContainerListBlobFlatSegmentDefaultResponse
  >;
}

export interface ContainerListBlobHierarchySegment {
  /** The List Blobs operation returns a list of the blobs under the specified container. A delimiter can be used to traverse a virtual hierarchy of blobs as though it were a file system. */
  get(
    options: ContainerListBlobHierarchySegmentParameters,
  ): StreamableMethod<
    | ContainerListBlobHierarchySegment200Response
    | ContainerListBlobHierarchySegmentDefaultResponse
  >;
}

export interface ContainerGetAccountInfo {
  /** Returns the sku name and account kind */
  get(
    options: ContainerGetAccountInfoParameters,
  ): StreamableMethod<
    ContainerGetAccountInfo200Response | ContainerGetAccountInfoDefaultResponse
  >;
}

export interface BlobDownload {
  /** The Download operation reads or downloads a blob from the system, including its metadata and properties. You can also call Download to read a snapshot. */
  get(
    options: BlobDownloadParameters,
  ): StreamableMethod<
    | BlobDownload200Response
    | BlobDownload206Response
    | BlobDownloadDefaultResponse
  >;
  /** The Get Properties operation returns all user-defined metadata, standard HTTP properties, and system properties for the blob. It does not return the content of the blob. */
  head(
    options: BlobGetPropertiesParameters,
  ): StreamableMethod<
    BlobGetProperties200Response | BlobGetPropertiesDefaultResponse
  >;
  /** If the storage account's soft delete feature is disabled then, when a blob is deleted, it is permanently removed from the storage account. If the storage account's soft delete feature is enabled, then, when a blob is deleted, it is marked for deletion and becomes inaccessible immediately. However, the blob service retains the blob or snapshot for the number of days specified by the DeleteRetentionPolicy section of [Storage service properties] (Set-Blob-Service-Properties.md). After the specified number of days has passed, the blob's data is permanently removed from the storage account. Note that you continue to be charged for the soft-deleted blob's storage until it is permanently removed. Use the List Blobs API and specify the \"include=deleted\" query parameter to discover which blobs and snapshots have been soft deleted. You can then use the Undelete Blob API to restore a soft-deleted blob. All other operations on a soft-deleted blob or snapshot causes the service to return an HTTP status code of 404 (ResourceNotFound). */
  delete(
    options: BlobDeleteParameters,
  ): StreamableMethod<BlobDelete202Response | BlobDeleteDefaultResponse>;
}

export interface BlobUndelete {
  /** Undelete a blob that was previously soft deleted */
  put(
    options: BlobUndeleteParameters,
  ): StreamableMethod<BlobUndelete200Response | BlobUndeleteDefaultResponse>;
}

export interface BlobSetExpiry {
  /** Set the expiration time of a blob */
  put(
    options: BlobSetExpiryParameters,
  ): StreamableMethod<BlobSetExpiry200Response | BlobSetExpiryDefaultResponse>;
}

export interface BlobSetHttpHeaders {
  /** The Set HTTP Headers operation sets system properties on the blob. */
  put(
    options: BlobSetHttpHeadersParameters,
  ): StreamableMethod<
    BlobSetHttpHeaders200Response | BlobSetHttpHeadersDefaultResponse
  >;
}

export interface BlobSetImmutabilityPolicy {
  /** Set the immutability policy of a blob */
  put(
    options: BlobSetImmutabilityPolicyParameters,
  ): StreamableMethod<
    | BlobSetImmutabilityPolicy200Response
    | BlobSetImmutabilityPolicyDefaultResponse
  >;
  /** The Delete Immutability Policy operation deletes the immutability policy on the blob. */
  delete(
    options: BlobDeleteImmutabilityPolicyParameters,
  ): StreamableMethod<
    | BlobDeleteImmutabilityPolicy200Response
    | BlobDeleteImmutabilityPolicyDefaultResponse
  >;
}

export interface BlobSetLegalHold {
  /** The Set Legal Hold operation sets a legal hold on the blob. */
  put(
    options: BlobSetLegalHoldParameters,
  ): StreamableMethod<
    BlobSetLegalHold200Response | BlobSetLegalHoldDefaultResponse
  >;
}

export interface BlobSetMetadata {
  /** The Set Metadata operation sets user-defined metadata for the specified blob as one or more name-value pairs. */
  put(
    options: BlobSetMetadataParameters,
  ): StreamableMethod<
    BlobSetMetadata200Response | BlobSetMetadataDefaultResponse
  >;
}

export interface BlobAcquireLease {
  /** The Acquire Lease operation requests a new lease on a blob. The lease lock duration can be 15 to 60 seconds, or can be infinite. */
  put(
    options: BlobAcquireLeaseParameters,
  ): StreamableMethod<
    BlobAcquireLease201Response | BlobAcquireLeaseDefaultResponse
  >;
}

export interface BlobReleaseLease {
  /** The Release Lease operation frees the lease if it's no longer needed, so that another client can immediately acquire a lease against the blob. */
  put(
    options: BlobReleaseLeaseParameters,
  ): StreamableMethod<
    BlobReleaseLease200Response | BlobReleaseLeaseDefaultResponse
  >;
}

export interface BlobRenewLease {
  /** The Renew Lease operation renews an existing lease. */
  put(
    options: BlobRenewLeaseParameters,
  ): StreamableMethod<
    BlobRenewLease200Response | BlobRenewLeaseDefaultResponse
  >;
}

export interface BlobChangeLease {
  /** The Change Lease operation is used to change the ID of an existing lease. */
  put(
    options: BlobChangeLeaseParameters,
  ): StreamableMethod<
    BlobChangeLease200Response | BlobChangeLeaseDefaultResponse
  >;
}

export interface BlobBreakLease {
  /** The Break Lease operation ends a lease and ensures that another client can't acquire a new lease until the current lease period has expired. */
  put(
    options: BlobBreakLeaseParameters,
  ): StreamableMethod<
    BlobBreakLease202Response | BlobBreakLeaseDefaultResponse
  >;
}

export interface BlobCreateSnapshot {
  /** The Create Snapshot operation creates a read-only snapshot of a blob */
  put(
    options: BlobCreateSnapshotParameters,
  ): StreamableMethod<
    BlobCreateSnapshot201Response | BlobCreateSnapshotDefaultResponse
  >;
}

export interface BlobStartCopyFromUrl {
  /** The Start Copy From URL operation copies a blob or an internet resource to a new blob. */
  put(
    options: BlobStartCopyFromUrlParameters,
  ): StreamableMethod<
    BlobStartCopyFromUrl202Response | BlobStartCopyFromUrlDefaultResponse
  >;
}

export interface BlobCopyFromUrl {
  /** The Copy From URL operation copies a blob or an internet resource to a new blob. It will not return a response until the copy is complete. */
  put(
    options: BlobCopyFromUrlParameters,
  ): StreamableMethod<
    BlobCopyFromUrl202Response | BlobCopyFromUrlDefaultResponse
  >;
}

export interface BlobAbortCopyFromUrl {
  /** The Abort Copy From URL operation aborts a pending Copy From URL operation, and leaves a destination blob with zero length and full metadata. */
  put(
    options: BlobAbortCopyFromUrlParameters,
  ): StreamableMethod<
    BlobAbortCopyFromUrl204Response | BlobAbortCopyFromUrlDefaultResponse
  >;
}

export interface BlobSetTier {
  /** The Set Tier operation sets the tier on a block blob. The operation is allowed on a page blob or block blob, but not on an append blob. A block blob's tier determines Hot/Cool/Archive storage type. This operation does not update the blob's ETag. */
  put(
    options: BlobSetTierParameters,
  ): StreamableMethod<
    BlobSetTier200Response | BlobSetTier202Response | BlobSetTierDefaultResponse
  >;
}

export interface BlobGetAccountInfo {
  /** Returns the sku name and account kind */
  get(
    options: BlobGetAccountInfoParameters,
  ): StreamableMethod<
    BlobGetAccountInfo200Response | BlobGetAccountInfoDefaultResponse
  >;
}

export interface BlobQuery {
  /** The Query operation enables users to select/project on blob data by providing simple query expressions. */
  post(
    options: BlobQueryParameters,
  ): StreamableMethod<
    BlobQuery200Response | BlobQuery206Response | BlobQueryDefaultResponse
  >;
}

export interface BlobGetTags {
  /** The Get Blob Tags operation enables users to get tags on a blob. */
  get(
    options: BlobGetTagsParameters,
  ): StreamableMethod<BlobGetTags200Response | BlobGetTagsDefaultResponse>;
  /** The Set Tags operation enables users to set tags on a blob. */
  put(
    options: BlobSetTagsParameters,
  ): StreamableMethod<BlobSetTags204Response | BlobSetTagsDefaultResponse>;
}

export interface PageBlobCreate {
  /** The Create operation creates a new page blob. */
  put(
    options: PageBlobCreateParameters,
  ): StreamableMethod<
    PageBlobCreate201Response | PageBlobCreateDefaultResponse
  >;
}

export interface PageBlobUploadPages {
  /** The Upload Pages operation writes a range of pages to a page blob */
  put(
    options: PageBlobUploadPagesParameters,
  ): StreamableMethod<
    PageBlobUploadPages201Response | PageBlobUploadPagesDefaultResponse
  >;
}

export interface PageBlobClearPages {
  /** The Clear Pages operation clears a range of pages from a page blob */
  put(
    options: PageBlobClearPagesParameters,
  ): StreamableMethod<
    PageBlobClearPages201Response | PageBlobClearPagesDefaultResponse
  >;
}

export interface PageBlobUploadPagesFromUrl {
  /** The Upload Pages operation writes a range of pages to a page blob where the contents are read from a URL. */
  put(
    options: PageBlobUploadPagesFromUrlParameters,
  ): StreamableMethod<
    | PageBlobUploadPagesFromUrl201Response
    | PageBlobUploadPagesFromUrlDefaultResponse
  >;
}

export interface PageBlobGetPageRanges {
  /** The Get Page Ranges operation returns the list of valid page ranges for a page blob or snapshot of a page blob. */
  get(
    options: PageBlobGetPageRangesParameters,
  ): StreamableMethod<
    PageBlobGetPageRanges200Response | PageBlobGetPageRangesDefaultResponse
  >;
}

export interface PageBlobGetPageRangesDiff {
  /** The Get Page Ranges Diff operation returns the list of valid page ranges for a page blob or snapshot of a page blob. */
  get(
    options: PageBlobGetPageRangesDiffParameters,
  ): StreamableMethod<
    | PageBlobGetPageRangesDiff200Response
    | PageBlobGetPageRangesDiffDefaultResponse
  >;
}

export interface PageBlobResize {
  /** The Resize operation increases the size of the page blob to the specified size. */
  put(
    options: PageBlobResizeParameters,
  ): StreamableMethod<
    PageBlobResize200Response | PageBlobResizeDefaultResponse
  >;
}

export interface PageBlobUpdateSequenceNumber {
  /** The Update Sequence Number operation sets the blob's sequence number. The operation will fail if the specified sequence number is less than the current sequence number of the blob. */
  put(
    options: PageBlobUpdateSequenceNumberParameters,
  ): StreamableMethod<
    | PageBlobUpdateSequenceNumber200Response
    | PageBlobUpdateSequenceNumberDefaultResponse
  >;
}

export interface PageBlobCopyIncremental {
  /** The Copy Incremental operation copies a snapshot of the source page blob to a destination page blob. The snapshot is copied such that only the differential changes between the previously copied snapshot are transferred to the destination. The copied snapshots are complete copies of the original snapshot and can be read or copied from as usual. This API is supported since REST version 2016-05-31. */
  put(
    options: PageBlobCopyIncrementalParameters,
  ): StreamableMethod<
    PageBlobCopyIncremental202Response | PageBlobCopyIncrementalDefaultResponse
  >;
}

export interface AppendBlobCreate {
  /** The Create operation creates a new append blob. */
  put(
    options: AppendBlobCreateParameters,
  ): StreamableMethod<
    AppendBlobCreate201Response | AppendBlobCreateDefaultResponse
  >;
}

export interface AppendBlobAppendBlock {
  /** The Append Block operation commits a new block of data to the end of an append blob. */
  put(
    options: AppendBlobAppendBlockParameters,
  ): StreamableMethod<
    AppendBlobAppendBlock201Response | AppendBlobAppendBlockDefaultResponse
  >;
}

export interface AppendBlobAppendBlockFromUrl {
  /** The Append Block From URL operation creates a new block to be committed as part of an append blob where the contents are read from a URL. */
  put(
    options: AppendBlobAppendBlockFromUrlParameters,
  ): StreamableMethod<
    | AppendBlobAppendBlockFromUrl201Response
    | AppendBlobAppendBlockFromUrlDefaultResponse
  >;
}

export interface AppendBlobSeal {
  /** The Seal operation seals the Append Blob to make it read-only. Seal is supported only on version 2019-12-12 version or later. */
  put(
    options: AppendBlobSealParameters,
  ): StreamableMethod<
    AppendBlobSeal200Response | AppendBlobSealDefaultResponse
  >;
}

export interface BlockBlobUpload {
  /** The Upload Block Blob operation updates the content of an existing block blob. Updating an existing block blob overwrites any existing metadata on the blob. Partial updates are not supported with Put Blob; the content of the existing blob is overwritten with the content of the new blob. To perform a partial update of the content of a block blob, use the Put Block List operation. */
  put(
    options: BlockBlobUploadParameters,
  ): StreamableMethod<
    BlockBlobUpload201Response | BlockBlobUploadDefaultResponse
  >;
}

export interface BlockBlobPutBlobFromUrl {
  /** The Put Blob from URL operation creates a new Block Blob where the contents of the blob are read from a given URL.  This API is supported beginning with the 2020-04-08 version. Partial updates are not supported with Put Blob from URL; the content of an existing blob is overwritten with the content of the new blob.  To perform partial updates to a block blob’s contents using a source URL, use the Put Block from URL API in conjunction with Put Block List. */
  put(
    options: BlockBlobPutBlobFromUrlParameters,
  ): StreamableMethod<
    BlockBlobPutBlobFromUrl201Response | BlockBlobPutBlobFromUrlDefaultResponse
  >;
}

export interface BlockBlobStageBlock {
  /** The Stage Block operation creates a new block to be committed as part of a blob */
  put(
    options: BlockBlobStageBlockParameters,
  ): StreamableMethod<
    BlockBlobStageBlock201Response | BlockBlobStageBlockDefaultResponse
  >;
}

export interface BlockBlobStageBlockFromUrl {
  /** The Stage Block From URL operation creates a new block to be committed as part of a blob where the contents are read from a URL. */
  put(
    options: BlockBlobStageBlockFromUrlParameters,
  ): StreamableMethod<
    | BlockBlobStageBlockFromUrl201Response
    | BlockBlobStageBlockFromUrlDefaultResponse
  >;
}

export interface BlockBlobCommitBlockList {
  /** The Commit Block List operation writes a blob by specifying the list of block IDs that make up the blob. In order to be written as part of a blob, a block must have been successfully written to the server in a prior Put Block operation. You can call Put Block List to update a blob by uploading only those blocks that have changed, then committing the new and existing blocks together. You can do this by specifying whether to commit a block from the committed block list or from the uncommitted block list, or to commit the most recently uploaded version of the block, whichever list it may belong to. */
  put(
    options: BlockBlobCommitBlockListParameters,
  ): StreamableMethod<
    | BlockBlobCommitBlockList201Response
    | BlockBlobCommitBlockListDefaultResponse
  >;
  /** The Get Block List operation retrieves the list of blocks that have been uploaded as part of a block blob. */
  get(
    options: BlockBlobGetBlockListParameters,
  ): StreamableMethod<
    BlockBlobGetBlockList200Response | BlockBlobGetBlockListDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/?restype=service&comp=properties' has methods for the following verbs: put, get */
  (path: "/?restype=service&comp=properties"): ServiceSetProperties;
  /** Resource for '/?restype=service&comp=stats' has methods for the following verbs: get */
  (path: "/?restype=service&comp=stats"): ServiceGetStatistics;
  /** Resource for '/?comp=list' has methods for the following verbs: get */
  (path: "/?comp=list"): ServiceListContainersSegment;
  /** Resource for '/?restype=service&comp=userdelegationkey' has methods for the following verbs: post */
  (
    path: "/?restype=service&comp=userdelegationkey",
  ): ServiceGetUserDelegationKey;
  /** Resource for '/?restype=account&comp=properties' has methods for the following verbs: get */
  (path: "/?restype=account&comp=properties"): ServiceGetAccountInfo;
  /** Resource for '/?comp=batch' has methods for the following verbs: post */
  (path: "/?comp=batch"): ServiceSubmitBatch;
  /** Resource for '/?comp=blobs' has methods for the following verbs: get */
  (path: "/?comp=blobs"): ServiceFilterBlobs;
  /** Resource for '/\{containerName\}?restype=container' has methods for the following verbs: put, get, delete */
  (
    path: "/{containerName}?restype=container",
    containerName: string,
  ): ContainerCreate;
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
  (
    path: "/{containerName}?restype=container&comp=rename",
    containerName: string,
  ): ContainerRename;
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
  /** Resource for '/\{containerName\}/\{blob\}' has methods for the following verbs: get, head, delete */
  (
    path: "/{containerName}/{blob}",
    containerName: string,
    blob: string,
  ): BlobDownload;
  /** Resource for '/\{containerName\}/\{blob\}?comp=undelete' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=undelete",
    containerName: string,
    blob: string,
  ): BlobUndelete;
  /** Resource for '/\{containerName\}/\{blob\}?comp=expiry' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=expiry",
    containerName: string,
    blob: string,
  ): BlobSetExpiry;
  /** Resource for '/\{containerName\}/\{blob\}?comp=properties&SetHTTPHeaders' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=properties&SetHTTPHeaders",
    containerName: string,
    blob: string,
  ): BlobSetHttpHeaders;
  /** Resource for '/\{containerName\}/\{blob\}?comp=immutabilityPolicies' has methods for the following verbs: put, delete */
  (
    path: "/{containerName}/{blob}?comp=immutabilityPolicies",
    containerName: string,
    blob: string,
  ): BlobSetImmutabilityPolicy;
  /** Resource for '/\{containerName\}/\{blob\}?comp=legalhold' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=legalhold",
    containerName: string,
    blob: string,
  ): BlobSetLegalHold;
  /** Resource for '/\{containerName\}/\{blob\}?comp=metadata' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=metadata",
    containerName: string,
    blob: string,
  ): BlobSetMetadata;
  /** Resource for '/\{containerName\}/\{blob\}?comp=lease&acquire' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=lease&acquire",
    containerName: string,
    blob: string,
  ): BlobAcquireLease;
  /** Resource for '/\{containerName\}/\{blob\}?comp=lease&release' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=lease&release",
    containerName: string,
    blob: string,
  ): BlobReleaseLease;
  /** Resource for '/\{containerName\}/\{blob\}?comp=lease&renew' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=lease&renew",
    containerName: string,
    blob: string,
  ): BlobRenewLease;
  /** Resource for '/\{containerName\}/\{blob\}?comp=lease&change' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=lease&change",
    containerName: string,
    blob: string,
  ): BlobChangeLease;
  /** Resource for '/\{containerName\}/\{blob\}?comp=lease&break' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=lease&break",
    containerName: string,
    blob: string,
  ): BlobBreakLease;
  /** Resource for '/\{containerName\}/\{blob\}?comp=snapshot' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=snapshot",
    containerName: string,
    blob: string,
  ): BlobCreateSnapshot;
  /** Resource for '/\{containerName\}/\{blob\}?comp=copy' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=copy",
    containerName: string,
    blob: string,
  ): BlobStartCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=copy&sync' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=copy&sync",
    containerName: string,
    blob: string,
  ): BlobCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=copy&copyid' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=copy&copyid",
    containerName: string,
    blob: string,
  ): BlobAbortCopyFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=tier' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=tier",
    containerName: string,
    blob: string,
  ): BlobSetTier;
  /** Resource for '/\{containerName\}/\{blob\}?restype=account&comp=properties&blob' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blob}?restype=account&comp=properties&blob",
    containerName: string,
    blob: string,
  ): BlobGetAccountInfo;
  /** Resource for '/\{containerName\}/\{blob\}?comp=query' has methods for the following verbs: post */
  (
    path: "/{containerName}/{blob}?comp=query",
    containerName: string,
    blob: string,
  ): BlobQuery;
  /** Resource for '/\{containerName\}/\{blob\}?comp=tags' has methods for the following verbs: get, put */
  (
    path: "/{containerName}/{blob}?comp=tags",
    containerName: string,
    blob: string,
  ): BlobGetTags;
  /** Resource for '/\{containerName\}/\{blob\}?PageBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?PageBlob",
    containerName: string,
    blob: string,
  ): PageBlobCreate;
  /** Resource for '/\{containerName\}/\{blob\}?comp=page&update' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=page&update",
    containerName: string,
    blob: string,
  ): PageBlobUploadPages;
  /** Resource for '/\{containerName\}/\{blob\}?comp=page&clear' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=page&clear",
    containerName: string,
    blob: string,
  ): PageBlobClearPages;
  /** Resource for '/\{containerName\}/\{blob\}?comp=page&update&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=page&update&fromUrl",
    containerName: string,
    blob: string,
  ): PageBlobUploadPagesFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=pagelist' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blob}?comp=pagelist",
    containerName: string,
    blob: string,
  ): PageBlobGetPageRanges;
  /** Resource for '/\{containerName\}/\{blob\}?comp=pagelist&diff' has methods for the following verbs: get */
  (
    path: "/{containerName}/{blob}?comp=pagelist&diff",
    containerName: string,
    blob: string,
  ): PageBlobGetPageRangesDiff;
  /** Resource for '/\{containerName\}/\{blob\}?comp=properties&Resize' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=properties&Resize",
    containerName: string,
    blob: string,
  ): PageBlobResize;
  /** Resource for '/\{containerName\}/\{blob\}?comp=properties&UpdateSequenceNumber' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=properties&UpdateSequenceNumber",
    containerName: string,
    blob: string,
  ): PageBlobUpdateSequenceNumber;
  /** Resource for '/\{containerName\}/\{blob\}?comp=incrementalcopy' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=incrementalcopy",
    containerName: string,
    blob: string,
  ): PageBlobCopyIncremental;
  /** Resource for '/\{containerName\}/\{blob\}?AppendBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?AppendBlob",
    containerName: string,
    blob: string,
  ): AppendBlobCreate;
  /** Resource for '/\{containerName\}/\{blob\}?comp=appendblock' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=appendblock",
    containerName: string,
    blob: string,
  ): AppendBlobAppendBlock;
  /** Resource for '/\{containerName\}/\{blob\}?comp=appendblock&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=appendblock&fromUrl",
    containerName: string,
    blob: string,
  ): AppendBlobAppendBlockFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=seal' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=seal",
    containerName: string,
    blob: string,
  ): AppendBlobSeal;
  /** Resource for '/\{containerName\}/\{blob\}?BlockBlob' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?BlockBlob",
    containerName: string,
    blob: string,
  ): BlockBlobUpload;
  /** Resource for '/\{containerName\}/\{blob\}?BlockBlob&fromUrl' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?BlockBlob&fromUrl",
    containerName: string,
    blob: string,
  ): BlockBlobPutBlobFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=block' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=block",
    containerName: string,
    blob: string,
  ): BlockBlobStageBlock;
  /** Resource for '/\{containerName\}/\{blob\}?comp=block&fromURL' has methods for the following verbs: put */
  (
    path: "/{containerName}/{blob}?comp=block&fromURL",
    containerName: string,
    blob: string,
  ): BlockBlobStageBlockFromUrl;
  /** Resource for '/\{containerName\}/\{blob\}?comp=blocklist' has methods for the following verbs: put, get */
  (
    path: "/{containerName}/{blob}?comp=blocklist",
    containerName: string,
    blob: string,
  ): BlockBlobCommitBlockList;
}

export type BlobClient = Client & {
  path: Routes;
};
