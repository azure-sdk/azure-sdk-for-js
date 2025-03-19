// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  BlockBlobQuery200Response,
  BlockBlobQuery206Response,
  BlockBlobQueryDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "PUT /?restype=service&comp=properties": ["202"],
  "GET /?restype=service&comp=properties": ["200"],
  "GET /?restype=service&comp=stats": ["200"],
  "GET /?comp=list": ["200"],
  "POST /?restype=service&comp=userdelegationkey": ["200"],
  "GET /?restype=account&comp=properties": ["200"],
  "POST /?comp=batch": ["200"],
  "GET /?comp=blobs": ["200"],
  "PUT /{containerName}?restype=container": ["201"],
  "GET /{containerName}?restype=container": ["200"],
  "DELETE /{containerName}?restype=container": ["202"],
  "PUT /{containerName}?restype=container&comp=metadata": ["200"],
  "GET /{containerName}?restype=container&comp=acl": ["200"],
  "PUT /{containerName}?restype=container&comp=acl": ["200"],
  "PUT /{containerName}?restype=container&comp=undelete": ["201"],
  "PUT /{containerName}?restype=container&comp=rename": ["200"],
  "POST /{containerName}?restype=container&comp=batch": ["202"],
  "GET /{containerName}?restype=container&comp=blobs": ["200"],
  "PUT /{containerName}?comp=lease&restype=container&acquire": ["201"],
  "PUT /{containerName}?comp=lease&restype=container&release": ["200"],
  "PUT /{containerName}?comp=lease&restype=container&renew": ["200"],
  "PUT /{containerName}?comp=lease&restype=container&break": ["202"],
  "PUT /{containerName}?comp=lease&restype=container&change": ["200"],
  "GET /{containerName}?restype=container&comp=list&flat": ["200"],
  "GET /{containerName}?restype=container&comp=list&hierarchy": ["200"],
  "GET /{containerName}?restype=account&comp=properties": ["200"],
  "GET /{containerName}/{blob}": ["200", "206"],
  "HEAD /{containerName}/{blob}": ["200"],
  "DELETE /{containerName}/{blob}": ["202"],
  "PUT /{containerName}/{blob}?comp=undelete": ["200"],
  "PUT /{containerName}/{blob}?comp=expiry": ["200"],
  "PUT /{containerName}/{blob}?comp=properties&SetHTTPHeaders": ["200"],
  "PUT /{containerName}/{blob}?comp=immutabilityPolicies": ["200"],
  "DELETE /{containerName}/{blob}?comp=immutabilityPolicies": ["200"],
  "PUT /{containerName}/{blob}?comp=legalhold": ["200"],
  "PUT /{containerName}/{blob}?comp=metadata": ["200"],
  "PUT /{containerName}/{blob}?comp=lease&acquire": ["201"],
  "PUT /{containerName}/{blob}?comp=lease&release": ["200"],
  "PUT /{containerName}/{blob}?comp=lease&renew": ["200"],
  "PUT /{containerName}/{blob}?comp=lease&change": ["200"],
  "PUT /{containerName}/{blob}?comp=lease&break": ["202"],
  "PUT /{containerName}/{blob}?comp=snapshot": ["201"],
  "PUT /{containerName}/{blob}?comp=copy": ["202"],
  "PUT /{containerName}/{blob}?comp=copy&sync": ["202"],
  "PUT /{containerName}/{blob}?comp=copy&copyid": ["204"],
  "PUT /{containerName}/{blob}?comp=tier": ["200", "202"],
  "GET /{containerName}/{blob}?restype=account&comp=properties&blob": ["200"],
  "GET /{containerName}/{blob}?comp=tags": ["200"],
  "PUT /{containerName}/{blob}?comp=tags": ["204"],
  "PUT /{containerName}/{blob}?PageBlob": ["201"],
  "PUT /{containerName}/{blob}?comp=page&update": ["201"],
  "PUT /{containerName}/{blob}?comp=page&clear": ["201"],
  "PUT /{containerName}/{blob}?comp=page&update&fromUrl": ["201"],
  "GET /{containerName}/{blob}?comp=pagelist": ["200"],
  "GET /{containerName}/{blob}?comp=pagelist&diff": ["200"],
  "PUT /{containerName}/{blob}?comp=properties&Resize": ["200"],
  "PUT /{containerName}/{blob}?comp=properties&UpdateSequenceNumber": ["200"],
  "PUT /{containerName}/{blob}?comp=incrementalcopy": ["202"],
  "PUT /{containerName}/{blob}?AppendBlob": ["201"],
  "PUT /{containerName}/{blob}?comp=appendblock": ["201"],
  "PUT /{containerName}/{blob}?comp=appendblock&fromUrl": ["201"],
  "PUT /{containerName}/{blob}?comp=seal": ["200"],
  "PUT /{containerName}/{blob}?BlockBlob": ["201"],
  "PUT /{containerName}/{blob}?BlockBlob&fromUrl": ["201"],
  "PUT /{containerName}/{blob}?comp=block": ["201"],
  "PUT /{containerName}/{blob}?comp=block&fromURL": ["201"],
  "PUT /{containerName}/{blob}?comp=blocklist": ["201"],
  "GET /{containerName}/{blob}?comp=blocklist": ["200"],
  "POST /{containerName}/{blob}?comp=query": ["200", "206"],
};

export function isUnexpected(
  response:
    | ServiceSetProperties202Response
    | ServiceSetPropertiesDefaultResponse,
): response is ServiceSetPropertiesDefaultResponse;
export function isUnexpected(
  response:
    | ServiceGetProperties200Response
    | ServiceGetPropertiesDefaultResponse,
): response is ServiceGetPropertiesDefaultResponse;
export function isUnexpected(
  response:
    | ServiceGetStatistics200Response
    | ServiceGetStatisticsDefaultResponse,
): response is ServiceGetStatisticsDefaultResponse;
export function isUnexpected(
  response:
    | ServiceListContainersSegment200Response
    | ServiceListContainersSegmentDefaultResponse,
): response is ServiceListContainersSegmentDefaultResponse;
export function isUnexpected(
  response:
    | ServiceGetUserDelegationKey200Response
    | ServiceGetUserDelegationKeyDefaultResponse,
): response is ServiceGetUserDelegationKeyDefaultResponse;
export function isUnexpected(
  response:
    | ServiceGetAccountInfo200Response
    | ServiceGetAccountInfoDefaultResponse,
): response is ServiceGetAccountInfoDefaultResponse;
export function isUnexpected(
  response: ServiceSubmitBatch200Response | ServiceSubmitBatchDefaultResponse,
): response is ServiceSubmitBatchDefaultResponse;
export function isUnexpected(
  response: ServiceFilterBlobs200Response | ServiceFilterBlobsDefaultResponse,
): response is ServiceFilterBlobsDefaultResponse;
export function isUnexpected(
  response: ContainerCreate201Response | ContainerCreateDefaultResponse,
): response is ContainerCreateDefaultResponse;
export function isUnexpected(
  response:
    | ContainerGetProperties200Response
    | ContainerGetPropertiesDefaultResponse,
): response is ContainerGetPropertiesDefaultResponse;
export function isUnexpected(
  response: ContainerDelete202Response | ContainerDeleteDefaultResponse,
): response is ContainerDeleteDefaultResponse;
export function isUnexpected(
  response:
    | ContainerSetMetadata200Response
    | ContainerSetMetadataDefaultResponse,
): response is ContainerSetMetadataDefaultResponse;
export function isUnexpected(
  response:
    | ContainerGetAccessPolicy200Response
    | ContainerGetAccessPolicyDefaultResponse,
): response is ContainerGetAccessPolicyDefaultResponse;
export function isUnexpected(
  response:
    | ContainerSetAccessPolicy200Response
    | ContainerSetAccessPolicyDefaultResponse,
): response is ContainerSetAccessPolicyDefaultResponse;
export function isUnexpected(
  response: ContainerRestore201Response | ContainerRestoreDefaultResponse,
): response is ContainerRestoreDefaultResponse;
export function isUnexpected(
  response: ContainerRename200Response | ContainerRenameDefaultResponse,
): response is ContainerRenameDefaultResponse;
export function isUnexpected(
  response:
    | ContainerSubmitBatch202Response
    | ContainerSubmitBatchDefaultResponse,
): response is ContainerSubmitBatchDefaultResponse;
export function isUnexpected(
  response:
    | ContainerFilterBlobs200Response
    | ContainerFilterBlobsDefaultResponse,
): response is ContainerFilterBlobsDefaultResponse;
export function isUnexpected(
  response:
    | ContainerAcquireLease201Response
    | ContainerAcquireLeaseDefaultResponse,
): response is ContainerAcquireLeaseDefaultResponse;
export function isUnexpected(
  response:
    | ContainerReleaseLease200Response
    | ContainerReleaseLeaseDefaultResponse,
): response is ContainerReleaseLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerRenewLease200Response | ContainerRenewLeaseDefaultResponse,
): response is ContainerRenewLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBreakLease202Response | ContainerBreakLeaseDefaultResponse,
): response is ContainerBreakLeaseDefaultResponse;
export function isUnexpected(
  response:
    | ContainerChangeLease200Response
    | ContainerChangeLeaseDefaultResponse,
): response is ContainerChangeLeaseDefaultResponse;
export function isUnexpected(
  response:
    | ContainerListBlobFlatSegment200Response
    | ContainerListBlobFlatSegmentDefaultResponse,
): response is ContainerListBlobFlatSegmentDefaultResponse;
export function isUnexpected(
  response:
    | ContainerListBlobHierarchySegment200Response
    | ContainerListBlobHierarchySegmentDefaultResponse,
): response is ContainerListBlobHierarchySegmentDefaultResponse;
export function isUnexpected(
  response:
    | ContainerGetAccountInfo200Response
    | ContainerGetAccountInfoDefaultResponse,
): response is ContainerGetAccountInfoDefaultResponse;
export function isUnexpected(
  response:
    | BlobDownload200Response
    | BlobDownload206Response
    | BlobDownloadDefaultResponse,
): response is BlobDownloadDefaultResponse;
export function isUnexpected(
  response: BlobGetProperties200Response | BlobGetPropertiesDefaultResponse,
): response is BlobGetPropertiesDefaultResponse;
export function isUnexpected(
  response: BlobDelete202Response | BlobDeleteDefaultResponse,
): response is BlobDeleteDefaultResponse;
export function isUnexpected(
  response: BlobUndelete200Response | BlobUndeleteDefaultResponse,
): response is BlobUndeleteDefaultResponse;
export function isUnexpected(
  response: BlobSetExpiry200Response | BlobSetExpiryDefaultResponse,
): response is BlobSetExpiryDefaultResponse;
export function isUnexpected(
  response: BlobSetHttpHeaders200Response | BlobSetHttpHeadersDefaultResponse,
): response is BlobSetHttpHeadersDefaultResponse;
export function isUnexpected(
  response:
    | BlobSetImmutabilityPolicy200Response
    | BlobSetImmutabilityPolicyDefaultResponse,
): response is BlobSetImmutabilityPolicyDefaultResponse;
export function isUnexpected(
  response:
    | BlobDeleteImmutabilityPolicy200Response
    | BlobDeleteImmutabilityPolicyDefaultResponse,
): response is BlobDeleteImmutabilityPolicyDefaultResponse;
export function isUnexpected(
  response: BlobSetLegalHold200Response | BlobSetLegalHoldDefaultResponse,
): response is BlobSetLegalHoldDefaultResponse;
export function isUnexpected(
  response: BlobSetMetadata200Response | BlobSetMetadataDefaultResponse,
): response is BlobSetMetadataDefaultResponse;
export function isUnexpected(
  response: BlobAcquireLease201Response | BlobAcquireLeaseDefaultResponse,
): response is BlobAcquireLeaseDefaultResponse;
export function isUnexpected(
  response: BlobReleaseLease200Response | BlobReleaseLeaseDefaultResponse,
): response is BlobReleaseLeaseDefaultResponse;
export function isUnexpected(
  response: BlobRenewLease200Response | BlobRenewLeaseDefaultResponse,
): response is BlobRenewLeaseDefaultResponse;
export function isUnexpected(
  response: BlobChangeLease200Response | BlobChangeLeaseDefaultResponse,
): response is BlobChangeLeaseDefaultResponse;
export function isUnexpected(
  response: BlobBreakLease202Response | BlobBreakLeaseDefaultResponse,
): response is BlobBreakLeaseDefaultResponse;
export function isUnexpected(
  response: BlobCreateSnapshot201Response | BlobCreateSnapshotDefaultResponse,
): response is BlobCreateSnapshotDefaultResponse;
export function isUnexpected(
  response:
    | BlobStartCopyFromUrl202Response
    | BlobStartCopyFromUrlDefaultResponse,
): response is BlobStartCopyFromUrlDefaultResponse;
export function isUnexpected(
  response: BlobCopyFromUrl202Response | BlobCopyFromUrlDefaultResponse,
): response is BlobCopyFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | BlobAbortCopyFromUrl204Response
    | BlobAbortCopyFromUrlDefaultResponse,
): response is BlobAbortCopyFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | BlobSetTier200Response
    | BlobSetTier202Response
    | BlobSetTierDefaultResponse,
): response is BlobSetTierDefaultResponse;
export function isUnexpected(
  response: BlobGetAccountInfo200Response | BlobGetAccountInfoDefaultResponse,
): response is BlobGetAccountInfoDefaultResponse;
export function isUnexpected(
  response: BlobGetTags200Response | BlobGetTagsDefaultResponse,
): response is BlobGetTagsDefaultResponse;
export function isUnexpected(
  response: BlobSetTags204Response | BlobSetTagsDefaultResponse,
): response is BlobSetTagsDefaultResponse;
export function isUnexpected(
  response: PageBlobCreate201Response | PageBlobCreateDefaultResponse,
): response is PageBlobCreateDefaultResponse;
export function isUnexpected(
  response: PageBlobUploadPages201Response | PageBlobUploadPagesDefaultResponse,
): response is PageBlobUploadPagesDefaultResponse;
export function isUnexpected(
  response: PageBlobClearPages201Response | PageBlobClearPagesDefaultResponse,
): response is PageBlobClearPagesDefaultResponse;
export function isUnexpected(
  response:
    | PageBlobUploadPagesFromUrl201Response
    | PageBlobUploadPagesFromUrlDefaultResponse,
): response is PageBlobUploadPagesFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | PageBlobGetPageRanges200Response
    | PageBlobGetPageRangesDefaultResponse,
): response is PageBlobGetPageRangesDefaultResponse;
export function isUnexpected(
  response:
    | PageBlobGetPageRangesDiff200Response
    | PageBlobGetPageRangesDiffDefaultResponse,
): response is PageBlobGetPageRangesDiffDefaultResponse;
export function isUnexpected(
  response: PageBlobResize200Response | PageBlobResizeDefaultResponse,
): response is PageBlobResizeDefaultResponse;
export function isUnexpected(
  response:
    | PageBlobUpdateSequenceNumber200Response
    | PageBlobUpdateSequenceNumberDefaultResponse,
): response is PageBlobUpdateSequenceNumberDefaultResponse;
export function isUnexpected(
  response:
    | PageBlobCopyIncremental202Response
    | PageBlobCopyIncrementalDefaultResponse,
): response is PageBlobCopyIncrementalDefaultResponse;
export function isUnexpected(
  response: AppendBlobCreate201Response | AppendBlobCreateDefaultResponse,
): response is AppendBlobCreateDefaultResponse;
export function isUnexpected(
  response:
    | AppendBlobAppendBlock201Response
    | AppendBlobAppendBlockDefaultResponse,
): response is AppendBlobAppendBlockDefaultResponse;
export function isUnexpected(
  response:
    | AppendBlobAppendBlockFromUrl201Response
    | AppendBlobAppendBlockFromUrlDefaultResponse,
): response is AppendBlobAppendBlockFromUrlDefaultResponse;
export function isUnexpected(
  response: AppendBlobSeal200Response | AppendBlobSealDefaultResponse,
): response is AppendBlobSealDefaultResponse;
export function isUnexpected(
  response: BlockBlobUpload201Response | BlockBlobUploadDefaultResponse,
): response is BlockBlobUploadDefaultResponse;
export function isUnexpected(
  response:
    | BlockBlobPutBlobFromUrl201Response
    | BlockBlobPutBlobFromUrlDefaultResponse,
): response is BlockBlobPutBlobFromUrlDefaultResponse;
export function isUnexpected(
  response: BlockBlobStageBlock201Response | BlockBlobStageBlockDefaultResponse,
): response is BlockBlobStageBlockDefaultResponse;
export function isUnexpected(
  response:
    | BlockBlobStageBlockFromUrl201Response
    | BlockBlobStageBlockFromUrlDefaultResponse,
): response is BlockBlobStageBlockFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | BlockBlobCommitBlockList201Response
    | BlockBlobCommitBlockListDefaultResponse,
): response is BlockBlobCommitBlockListDefaultResponse;
export function isUnexpected(
  response:
    | BlockBlobGetBlockList200Response
    | BlockBlobGetBlockListDefaultResponse,
): response is BlockBlobGetBlockListDefaultResponse;
export function isUnexpected(
  response:
    | BlockBlobQuery200Response
    | BlockBlobQuery206Response
    | BlockBlobQueryDefaultResponse,
): response is BlockBlobQueryDefaultResponse;
export function isUnexpected(
  response:
    | ServiceSetProperties202Response
    | ServiceSetPropertiesDefaultResponse
    | ServiceGetProperties200Response
    | ServiceGetPropertiesDefaultResponse
    | ServiceGetStatistics200Response
    | ServiceGetStatisticsDefaultResponse
    | ServiceListContainersSegment200Response
    | ServiceListContainersSegmentDefaultResponse
    | ServiceGetUserDelegationKey200Response
    | ServiceGetUserDelegationKeyDefaultResponse
    | ServiceGetAccountInfo200Response
    | ServiceGetAccountInfoDefaultResponse
    | ServiceSubmitBatch200Response
    | ServiceSubmitBatchDefaultResponse
    | ServiceFilterBlobs200Response
    | ServiceFilterBlobsDefaultResponse
    | ContainerCreate201Response
    | ContainerCreateDefaultResponse
    | ContainerGetProperties200Response
    | ContainerGetPropertiesDefaultResponse
    | ContainerDelete202Response
    | ContainerDeleteDefaultResponse
    | ContainerSetMetadata200Response
    | ContainerSetMetadataDefaultResponse
    | ContainerGetAccessPolicy200Response
    | ContainerGetAccessPolicyDefaultResponse
    | ContainerSetAccessPolicy200Response
    | ContainerSetAccessPolicyDefaultResponse
    | ContainerRestore201Response
    | ContainerRestoreDefaultResponse
    | ContainerRename200Response
    | ContainerRenameDefaultResponse
    | ContainerSubmitBatch202Response
    | ContainerSubmitBatchDefaultResponse
    | ContainerFilterBlobs200Response
    | ContainerFilterBlobsDefaultResponse
    | ContainerAcquireLease201Response
    | ContainerAcquireLeaseDefaultResponse
    | ContainerReleaseLease200Response
    | ContainerReleaseLeaseDefaultResponse
    | ContainerRenewLease200Response
    | ContainerRenewLeaseDefaultResponse
    | ContainerBreakLease202Response
    | ContainerBreakLeaseDefaultResponse
    | ContainerChangeLease200Response
    | ContainerChangeLeaseDefaultResponse
    | ContainerListBlobFlatSegment200Response
    | ContainerListBlobFlatSegmentDefaultResponse
    | ContainerListBlobHierarchySegment200Response
    | ContainerListBlobHierarchySegmentDefaultResponse
    | ContainerGetAccountInfo200Response
    | ContainerGetAccountInfoDefaultResponse
    | BlobDownload200Response
    | BlobDownload206Response
    | BlobDownloadDefaultResponse
    | BlobGetProperties200Response
    | BlobGetPropertiesDefaultResponse
    | BlobDelete202Response
    | BlobDeleteDefaultResponse
    | BlobUndelete200Response
    | BlobUndeleteDefaultResponse
    | BlobSetExpiry200Response
    | BlobSetExpiryDefaultResponse
    | BlobSetHttpHeaders200Response
    | BlobSetHttpHeadersDefaultResponse
    | BlobSetImmutabilityPolicy200Response
    | BlobSetImmutabilityPolicyDefaultResponse
    | BlobDeleteImmutabilityPolicy200Response
    | BlobDeleteImmutabilityPolicyDefaultResponse
    | BlobSetLegalHold200Response
    | BlobSetLegalHoldDefaultResponse
    | BlobSetMetadata200Response
    | BlobSetMetadataDefaultResponse
    | BlobAcquireLease201Response
    | BlobAcquireLeaseDefaultResponse
    | BlobReleaseLease200Response
    | BlobReleaseLeaseDefaultResponse
    | BlobRenewLease200Response
    | BlobRenewLeaseDefaultResponse
    | BlobChangeLease200Response
    | BlobChangeLeaseDefaultResponse
    | BlobBreakLease202Response
    | BlobBreakLeaseDefaultResponse
    | BlobCreateSnapshot201Response
    | BlobCreateSnapshotDefaultResponse
    | BlobStartCopyFromUrl202Response
    | BlobStartCopyFromUrlDefaultResponse
    | BlobCopyFromUrl202Response
    | BlobCopyFromUrlDefaultResponse
    | BlobAbortCopyFromUrl204Response
    | BlobAbortCopyFromUrlDefaultResponse
    | BlobSetTier200Response
    | BlobSetTier202Response
    | BlobSetTierDefaultResponse
    | BlobGetAccountInfo200Response
    | BlobGetAccountInfoDefaultResponse
    | BlobGetTags200Response
    | BlobGetTagsDefaultResponse
    | BlobSetTags204Response
    | BlobSetTagsDefaultResponse
    | PageBlobCreate201Response
    | PageBlobCreateDefaultResponse
    | PageBlobUploadPages201Response
    | PageBlobUploadPagesDefaultResponse
    | PageBlobClearPages201Response
    | PageBlobClearPagesDefaultResponse
    | PageBlobUploadPagesFromUrl201Response
    | PageBlobUploadPagesFromUrlDefaultResponse
    | PageBlobGetPageRanges200Response
    | PageBlobGetPageRangesDefaultResponse
    | PageBlobGetPageRangesDiff200Response
    | PageBlobGetPageRangesDiffDefaultResponse
    | PageBlobResize200Response
    | PageBlobResizeDefaultResponse
    | PageBlobUpdateSequenceNumber200Response
    | PageBlobUpdateSequenceNumberDefaultResponse
    | PageBlobCopyIncremental202Response
    | PageBlobCopyIncrementalDefaultResponse
    | AppendBlobCreate201Response
    | AppendBlobCreateDefaultResponse
    | AppendBlobAppendBlock201Response
    | AppendBlobAppendBlockDefaultResponse
    | AppendBlobAppendBlockFromUrl201Response
    | AppendBlobAppendBlockFromUrlDefaultResponse
    | AppendBlobSeal200Response
    | AppendBlobSealDefaultResponse
    | BlockBlobUpload201Response
    | BlockBlobUploadDefaultResponse
    | BlockBlobPutBlobFromUrl201Response
    | BlockBlobPutBlobFromUrlDefaultResponse
    | BlockBlobStageBlock201Response
    | BlockBlobStageBlockDefaultResponse
    | BlockBlobStageBlockFromUrl201Response
    | BlockBlobStageBlockFromUrlDefaultResponse
    | BlockBlobCommitBlockList201Response
    | BlockBlobCommitBlockListDefaultResponse
    | BlockBlobGetBlockList200Response
    | BlockBlobGetBlockListDefaultResponse
    | BlockBlobQuery200Response
    | BlockBlobQuery206Response
    | BlockBlobQueryDefaultResponse,
): response is
  | ServiceSetPropertiesDefaultResponse
  | ServiceGetPropertiesDefaultResponse
  | ServiceGetStatisticsDefaultResponse
  | ServiceListContainersSegmentDefaultResponse
  | ServiceGetUserDelegationKeyDefaultResponse
  | ServiceGetAccountInfoDefaultResponse
  | ServiceSubmitBatchDefaultResponse
  | ServiceFilterBlobsDefaultResponse
  | ContainerCreateDefaultResponse
  | ContainerGetPropertiesDefaultResponse
  | ContainerDeleteDefaultResponse
  | ContainerSetMetadataDefaultResponse
  | ContainerGetAccessPolicyDefaultResponse
  | ContainerSetAccessPolicyDefaultResponse
  | ContainerRestoreDefaultResponse
  | ContainerRenameDefaultResponse
  | ContainerSubmitBatchDefaultResponse
  | ContainerFilterBlobsDefaultResponse
  | ContainerAcquireLeaseDefaultResponse
  | ContainerReleaseLeaseDefaultResponse
  | ContainerRenewLeaseDefaultResponse
  | ContainerBreakLeaseDefaultResponse
  | ContainerChangeLeaseDefaultResponse
  | ContainerListBlobFlatSegmentDefaultResponse
  | ContainerListBlobHierarchySegmentDefaultResponse
  | ContainerGetAccountInfoDefaultResponse
  | BlobDownloadDefaultResponse
  | BlobGetPropertiesDefaultResponse
  | BlobDeleteDefaultResponse
  | BlobUndeleteDefaultResponse
  | BlobSetExpiryDefaultResponse
  | BlobSetHttpHeadersDefaultResponse
  | BlobSetImmutabilityPolicyDefaultResponse
  | BlobDeleteImmutabilityPolicyDefaultResponse
  | BlobSetLegalHoldDefaultResponse
  | BlobSetMetadataDefaultResponse
  | BlobAcquireLeaseDefaultResponse
  | BlobReleaseLeaseDefaultResponse
  | BlobRenewLeaseDefaultResponse
  | BlobChangeLeaseDefaultResponse
  | BlobBreakLeaseDefaultResponse
  | BlobCreateSnapshotDefaultResponse
  | BlobStartCopyFromUrlDefaultResponse
  | BlobCopyFromUrlDefaultResponse
  | BlobAbortCopyFromUrlDefaultResponse
  | BlobSetTierDefaultResponse
  | BlobGetAccountInfoDefaultResponse
  | BlobGetTagsDefaultResponse
  | BlobSetTagsDefaultResponse
  | PageBlobCreateDefaultResponse
  | PageBlobUploadPagesDefaultResponse
  | PageBlobClearPagesDefaultResponse
  | PageBlobUploadPagesFromUrlDefaultResponse
  | PageBlobGetPageRangesDefaultResponse
  | PageBlobGetPageRangesDiffDefaultResponse
  | PageBlobResizeDefaultResponse
  | PageBlobUpdateSequenceNumberDefaultResponse
  | PageBlobCopyIncrementalDefaultResponse
  | AppendBlobCreateDefaultResponse
  | AppendBlobAppendBlockDefaultResponse
  | AppendBlobAppendBlockFromUrlDefaultResponse
  | AppendBlobSealDefaultResponse
  | BlockBlobUploadDefaultResponse
  | BlockBlobPutBlobFromUrlDefaultResponse
  | BlockBlobStageBlockDefaultResponse
  | BlockBlobStageBlockFromUrlDefaultResponse
  | BlockBlobCommitBlockListDefaultResponse
  | BlockBlobGetBlockListDefaultResponse
  | BlockBlobQueryDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
