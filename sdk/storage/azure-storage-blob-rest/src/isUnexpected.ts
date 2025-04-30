// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  ContainerBlobStartCopyFromUrl202Response,
  ContainerBlobStartCopyFromUrlDefaultResponse,
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
  ContainerBlobPageBlobCreate201Response,
  ContainerBlobPageBlobCreateDefaultResponse,
  ContainerBlobPageBlobUploadPages201Response,
  ContainerBlobPageBlobUploadPagesDefaultResponse,
  ContainerBlobPageBlobClearPages201Response,
  ContainerBlobPageBlobClearPagesDefaultResponse,
  ContainerBlobPageBlobUploadPagesFromUrl201Response,
  ContainerBlobPageBlobUploadPagesFromUrlDefaultResponse,
  ContainerBlobPageBlobGetPageRanges200Response,
  ContainerBlobPageBlobGetPageRangesDefaultResponse,
  ContainerBlobPageBlobGetPageRangesDiff200Response,
  ContainerBlobPageBlobGetPageRangesDiffDefaultResponse,
  ContainerBlobPageBlobResize200Response,
  ContainerBlobPageBlobResizeDefaultResponse,
  ContainerBlobPageBlobUpdateSequenceNumber200Response,
  ContainerBlobPageBlobUpdateSequenceNumberDefaultResponse,
  ContainerBlobPageBlobCopyIncremental202Response,
  ContainerBlobPageBlobCopyIncrementalDefaultResponse,
  ContainerBlobAppendBlobCreate201Response,
  ContainerBlobAppendBlobCreateDefaultResponse,
  ContainerBlobAppendBlobAppendBlock201Response,
  ContainerBlobAppendBlobAppendBlockDefaultResponse,
  ContainerBlobAppendBlobAppendBlockFromUrl201Response,
  ContainerBlobAppendBlobAppendBlockFromUrlDefaultResponse,
  ContainerBlobAppendBlobSeal200Response,
  ContainerBlobAppendBlobSealDefaultResponse,
  ContainerBlobBlockBlobUpload201Response,
  ContainerBlobBlockBlobUploadDefaultResponse,
  ContainerBlobBlockBlobPutBlobFromUrl201Response,
  ContainerBlobBlockBlobPutBlobFromUrlDefaultResponse,
  ContainerBlobBlockBlobStageBlock201Response,
  ContainerBlobBlockBlobStageBlockDefaultResponse,
  ContainerBlobBlockBlobStageBlockFromUrl201Response,
  ContainerBlobBlockBlobStageBlockFromUrlDefaultResponse,
  ContainerBlobBlockBlobCommitBlockList201Response,
  ContainerBlobBlockBlobCommitBlockListDefaultResponse,
  ContainerBlobBlockBlobGetBlockList200Response,
  ContainerBlobBlockBlobGetBlockListDefaultResponse,
  ContainerBlobBlockBlobQuery200Response,
  ContainerBlobBlockBlobQuery206Response,
  ContainerBlobBlockBlobQueryDefaultResponse,
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
  "GET /{containerName}/{blobName}": ["200", "206"],
  "HEAD /{containerName}/{blobName}": ["200"],
  "DELETE /{containerName}/{blobName}": ["202"],
  "PUT /{containerName}/{blobName}": ["202"],
  "PUT /{containerName}/{blobName}?comp=undelete": ["200"],
  "PUT /{containerName}/{blobName}?comp=expiry": ["200"],
  "PUT /{containerName}/{blobName}?comp=properties&SetHTTPHeaders": ["200"],
  "PUT /{containerName}/{blobName}?comp=immutabilityPolicies": ["200"],
  "DELETE /{containerName}/{blobName}?comp=immutabilityPolicies": ["200"],
  "PUT /{containerName}/{blobName}?comp=legalhold": ["200"],
  "PUT /{containerName}/{blobName}?comp=metadata": ["200"],
  "PUT /{containerName}/{blobName}?comp=lease&acquire": ["201"],
  "PUT /{containerName}/{blobName}?comp=lease&release": ["200"],
  "PUT /{containerName}/{blobName}?comp=lease&renew": ["200"],
  "PUT /{containerName}/{blobName}?comp=lease&change": ["200"],
  "PUT /{containerName}/{blobName}?comp=lease&break": ["202"],
  "PUT /{containerName}/{blobName}?comp=snapshot": ["201"],
  "PUT /{containerName}/{blobName}?comp=copy&sync": ["202"],
  "PUT /{containerName}/{blobName}?comp=copy&copyid": ["204"],
  "PUT /{containerName}/{blobName}?comp=tier": ["200", "202"],
  "GET /{containerName}/{blobName}?restype=account&comp=properties&blob": ["200"],
  "GET /{containerName}/{blobName}?comp=tags": ["200"],
  "PUT /{containerName}/{blobName}?comp=tags": ["204"],
  "PUT /{containerName}/{blobName}?PageBlob": ["201"],
  "PUT /{containerName}/{blobName}?comp=page&update": ["201"],
  "PUT /{containerName}/{blobName}?comp=page&clear": ["201"],
  "PUT /{containerName}/{blobName}?comp=page&update&fromUrl": ["201"],
  "GET /{containerName}/{blobName}?comp=pagelist": ["200"],
  "GET /{containerName}/{blobName}?comp=pagelist&diff": ["200"],
  "PUT /{containerName}/{blobName}?comp=properties&Resize": ["200"],
  "PUT /{containerName}/{blobName}?comp=properties&UpdateSequenceNumber": ["200"],
  "PUT /{containerName}/{blobName}?comp=incrementalcopy": ["202"],
  "PUT /{containerName}/{blobName}?AppendBlob": ["201"],
  "PUT /{containerName}/{blobName}?comp=appendblock": ["201"],
  "PUT /{containerName}/{blobName}?comp=appendblock&fromUrl": ["201"],
  "PUT /{containerName}/{blobName}?comp=seal": ["200"],
  "PUT /{containerName}/{blobName}?BlockBlob": ["201"],
  "PUT /{containerName}/{blobName}?BlockBlob&fromUrl": ["201"],
  "PUT /{containerName}/{blobName}?comp=block": ["201"],
  "PUT /{containerName}/{blobName}?comp=block&fromURL": ["201"],
  "PUT /{containerName}/{blobName}?comp=blocklist": ["201"],
  "GET /{containerName}/{blobName}?comp=blocklist": ["200"],
  "POST /{containerName}/{blobName}?comp=query": ["200", "206"],
};

export function isUnexpected(
  response: SetProperties202Response | SetPropertiesDefaultResponse,
): response is SetPropertiesDefaultResponse;
export function isUnexpected(
  response: GetProperties200Response | GetPropertiesDefaultResponse,
): response is GetPropertiesDefaultResponse;
export function isUnexpected(
  response: GetStatistics200Response | GetStatisticsDefaultResponse,
): response is GetStatisticsDefaultResponse;
export function isUnexpected(
  response: ListContainersSegment200Response | ListContainersSegmentDefaultResponse,
): response is ListContainersSegmentDefaultResponse;
export function isUnexpected(
  response: GetUserDelegationKey200Response | GetUserDelegationKeyDefaultResponse,
): response is GetUserDelegationKeyDefaultResponse;
export function isUnexpected(
  response: GetAccountInfo200Response | GetAccountInfoDefaultResponse,
): response is GetAccountInfoDefaultResponse;
export function isUnexpected(
  response: SubmitBatch200Response | SubmitBatchDefaultResponse,
): response is SubmitBatchDefaultResponse;
export function isUnexpected(
  response: FilterBlobs200Response | FilterBlobsDefaultResponse,
): response is FilterBlobsDefaultResponse;
export function isUnexpected(
  response: ContainerCreate201Response | ContainerCreateDefaultResponse,
): response is ContainerCreateDefaultResponse;
export function isUnexpected(
  response: ContainerGetProperties200Response | ContainerGetPropertiesDefaultResponse,
): response is ContainerGetPropertiesDefaultResponse;
export function isUnexpected(
  response: ContainerDelete202Response | ContainerDeleteDefaultResponse,
): response is ContainerDeleteDefaultResponse;
export function isUnexpected(
  response: ContainerSetMetadata200Response | ContainerSetMetadataDefaultResponse,
): response is ContainerSetMetadataDefaultResponse;
export function isUnexpected(
  response: ContainerGetAccessPolicy200Response | ContainerGetAccessPolicyDefaultResponse,
): response is ContainerGetAccessPolicyDefaultResponse;
export function isUnexpected(
  response: ContainerSetAccessPolicy200Response | ContainerSetAccessPolicyDefaultResponse,
): response is ContainerSetAccessPolicyDefaultResponse;
export function isUnexpected(
  response: ContainerRestore201Response | ContainerRestoreDefaultResponse,
): response is ContainerRestoreDefaultResponse;
export function isUnexpected(
  response: ContainerRename200Response | ContainerRenameDefaultResponse,
): response is ContainerRenameDefaultResponse;
export function isUnexpected(
  response: ContainerSubmitBatch202Response | ContainerSubmitBatchDefaultResponse,
): response is ContainerSubmitBatchDefaultResponse;
export function isUnexpected(
  response: ContainerFilterBlobs200Response | ContainerFilterBlobsDefaultResponse,
): response is ContainerFilterBlobsDefaultResponse;
export function isUnexpected(
  response: ContainerAcquireLease201Response | ContainerAcquireLeaseDefaultResponse,
): response is ContainerAcquireLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerReleaseLease200Response | ContainerReleaseLeaseDefaultResponse,
): response is ContainerReleaseLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerRenewLease200Response | ContainerRenewLeaseDefaultResponse,
): response is ContainerRenewLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBreakLease202Response | ContainerBreakLeaseDefaultResponse,
): response is ContainerBreakLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerChangeLease200Response | ContainerChangeLeaseDefaultResponse,
): response is ContainerChangeLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerListBlobFlatSegment200Response | ContainerListBlobFlatSegmentDefaultResponse,
): response is ContainerListBlobFlatSegmentDefaultResponse;
export function isUnexpected(
  response:
    | ContainerListBlobHierarchySegment200Response
    | ContainerListBlobHierarchySegmentDefaultResponse,
): response is ContainerListBlobHierarchySegmentDefaultResponse;
export function isUnexpected(
  response: ContainerGetAccountInfo200Response | ContainerGetAccountInfoDefaultResponse,
): response is ContainerGetAccountInfoDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobDownload200Response
    | ContainerBlobDownload206Response
    | ContainerBlobDownloadDefaultResponse,
): response is ContainerBlobDownloadDefaultResponse;
export function isUnexpected(
  response: ContainerBlobGetProperties200Response | ContainerBlobGetPropertiesDefaultResponse,
): response is ContainerBlobGetPropertiesDefaultResponse;
export function isUnexpected(
  response: ContainerBlobDelete202Response | ContainerBlobDeleteDefaultResponse,
): response is ContainerBlobDeleteDefaultResponse;
export function isUnexpected(
  response: ContainerBlobStartCopyFromUrl202Response | ContainerBlobStartCopyFromUrlDefaultResponse,
): response is ContainerBlobStartCopyFromUrlDefaultResponse;
export function isUnexpected(
  response: ContainerBlobUndelete200Response | ContainerBlobUndeleteDefaultResponse,
): response is ContainerBlobUndeleteDefaultResponse;
export function isUnexpected(
  response: ContainerBlobSetExpiry200Response | ContainerBlobSetExpiryDefaultResponse,
): response is ContainerBlobSetExpiryDefaultResponse;
export function isUnexpected(
  response: ContainerBlobSetHttpHeaders200Response | ContainerBlobSetHttpHeadersDefaultResponse,
): response is ContainerBlobSetHttpHeadersDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobSetImmutabilityPolicy200Response
    | ContainerBlobSetImmutabilityPolicyDefaultResponse,
): response is ContainerBlobSetImmutabilityPolicyDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobDeleteImmutabilityPolicy200Response
    | ContainerBlobDeleteImmutabilityPolicyDefaultResponse,
): response is ContainerBlobDeleteImmutabilityPolicyDefaultResponse;
export function isUnexpected(
  response: ContainerBlobSetLegalHold200Response | ContainerBlobSetLegalHoldDefaultResponse,
): response is ContainerBlobSetLegalHoldDefaultResponse;
export function isUnexpected(
  response: ContainerBlobSetMetadata200Response | ContainerBlobSetMetadataDefaultResponse,
): response is ContainerBlobSetMetadataDefaultResponse;
export function isUnexpected(
  response: ContainerBlobAcquireLease201Response | ContainerBlobAcquireLeaseDefaultResponse,
): response is ContainerBlobAcquireLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBlobReleaseLease200Response | ContainerBlobReleaseLeaseDefaultResponse,
): response is ContainerBlobReleaseLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBlobRenewLease200Response | ContainerBlobRenewLeaseDefaultResponse,
): response is ContainerBlobRenewLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBlobChangeLease200Response | ContainerBlobChangeLeaseDefaultResponse,
): response is ContainerBlobChangeLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBlobBreakLease202Response | ContainerBlobBreakLeaseDefaultResponse,
): response is ContainerBlobBreakLeaseDefaultResponse;
export function isUnexpected(
  response: ContainerBlobCreateSnapshot201Response | ContainerBlobCreateSnapshotDefaultResponse,
): response is ContainerBlobCreateSnapshotDefaultResponse;
export function isUnexpected(
  response: ContainerBlobCopyFromUrl202Response | ContainerBlobCopyFromUrlDefaultResponse,
): response is ContainerBlobCopyFromUrlDefaultResponse;
export function isUnexpected(
  response: ContainerBlobAbortCopyFromUrl204Response | ContainerBlobAbortCopyFromUrlDefaultResponse,
): response is ContainerBlobAbortCopyFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobSetTier200Response
    | ContainerBlobSetTier202Response
    | ContainerBlobSetTierDefaultResponse,
): response is ContainerBlobSetTierDefaultResponse;
export function isUnexpected(
  response: ContainerBlobGetAccountInfo200Response | ContainerBlobGetAccountInfoDefaultResponse,
): response is ContainerBlobGetAccountInfoDefaultResponse;
export function isUnexpected(
  response: ContainerBlobGetTags200Response | ContainerBlobGetTagsDefaultResponse,
): response is ContainerBlobGetTagsDefaultResponse;
export function isUnexpected(
  response: ContainerBlobSetTags204Response | ContainerBlobSetTagsDefaultResponse,
): response is ContainerBlobSetTagsDefaultResponse;
export function isUnexpected(
  response: ContainerBlobPageBlobCreate201Response | ContainerBlobPageBlobCreateDefaultResponse,
): response is ContainerBlobPageBlobCreateDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobUploadPages201Response
    | ContainerBlobPageBlobUploadPagesDefaultResponse,
): response is ContainerBlobPageBlobUploadPagesDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobClearPages201Response
    | ContainerBlobPageBlobClearPagesDefaultResponse,
): response is ContainerBlobPageBlobClearPagesDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobUploadPagesFromUrl201Response
    | ContainerBlobPageBlobUploadPagesFromUrlDefaultResponse,
): response is ContainerBlobPageBlobUploadPagesFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobGetPageRanges200Response
    | ContainerBlobPageBlobGetPageRangesDefaultResponse,
): response is ContainerBlobPageBlobGetPageRangesDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobGetPageRangesDiff200Response
    | ContainerBlobPageBlobGetPageRangesDiffDefaultResponse,
): response is ContainerBlobPageBlobGetPageRangesDiffDefaultResponse;
export function isUnexpected(
  response: ContainerBlobPageBlobResize200Response | ContainerBlobPageBlobResizeDefaultResponse,
): response is ContainerBlobPageBlobResizeDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobUpdateSequenceNumber200Response
    | ContainerBlobPageBlobUpdateSequenceNumberDefaultResponse,
): response is ContainerBlobPageBlobUpdateSequenceNumberDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobPageBlobCopyIncremental202Response
    | ContainerBlobPageBlobCopyIncrementalDefaultResponse,
): response is ContainerBlobPageBlobCopyIncrementalDefaultResponse;
export function isUnexpected(
  response: ContainerBlobAppendBlobCreate201Response | ContainerBlobAppendBlobCreateDefaultResponse,
): response is ContainerBlobAppendBlobCreateDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobAppendBlobAppendBlock201Response
    | ContainerBlobAppendBlobAppendBlockDefaultResponse,
): response is ContainerBlobAppendBlobAppendBlockDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobAppendBlobAppendBlockFromUrl201Response
    | ContainerBlobAppendBlobAppendBlockFromUrlDefaultResponse,
): response is ContainerBlobAppendBlobAppendBlockFromUrlDefaultResponse;
export function isUnexpected(
  response: ContainerBlobAppendBlobSeal200Response | ContainerBlobAppendBlobSealDefaultResponse,
): response is ContainerBlobAppendBlobSealDefaultResponse;
export function isUnexpected(
  response: ContainerBlobBlockBlobUpload201Response | ContainerBlobBlockBlobUploadDefaultResponse,
): response is ContainerBlobBlockBlobUploadDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobPutBlobFromUrl201Response
    | ContainerBlobBlockBlobPutBlobFromUrlDefaultResponse,
): response is ContainerBlobBlockBlobPutBlobFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobStageBlock201Response
    | ContainerBlobBlockBlobStageBlockDefaultResponse,
): response is ContainerBlobBlockBlobStageBlockDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobStageBlockFromUrl201Response
    | ContainerBlobBlockBlobStageBlockFromUrlDefaultResponse,
): response is ContainerBlobBlockBlobStageBlockFromUrlDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobCommitBlockList201Response
    | ContainerBlobBlockBlobCommitBlockListDefaultResponse,
): response is ContainerBlobBlockBlobCommitBlockListDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobGetBlockList200Response
    | ContainerBlobBlockBlobGetBlockListDefaultResponse,
): response is ContainerBlobBlockBlobGetBlockListDefaultResponse;
export function isUnexpected(
  response:
    | ContainerBlobBlockBlobQuery200Response
    | ContainerBlobBlockBlobQuery206Response
    | ContainerBlobBlockBlobQueryDefaultResponse,
): response is ContainerBlobBlockBlobQueryDefaultResponse;
export function isUnexpected(
  response:
    | SetProperties202Response
    | SetPropertiesDefaultResponse
    | GetProperties200Response
    | GetPropertiesDefaultResponse
    | GetStatistics200Response
    | GetStatisticsDefaultResponse
    | ListContainersSegment200Response
    | ListContainersSegmentDefaultResponse
    | GetUserDelegationKey200Response
    | GetUserDelegationKeyDefaultResponse
    | GetAccountInfo200Response
    | GetAccountInfoDefaultResponse
    | SubmitBatch200Response
    | SubmitBatchDefaultResponse
    | FilterBlobs200Response
    | FilterBlobsDefaultResponse
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
    | ContainerBlobDownload200Response
    | ContainerBlobDownload206Response
    | ContainerBlobDownloadDefaultResponse
    | ContainerBlobGetProperties200Response
    | ContainerBlobGetPropertiesDefaultResponse
    | ContainerBlobDelete202Response
    | ContainerBlobDeleteDefaultResponse
    | ContainerBlobStartCopyFromUrl202Response
    | ContainerBlobStartCopyFromUrlDefaultResponse
    | ContainerBlobUndelete200Response
    | ContainerBlobUndeleteDefaultResponse
    | ContainerBlobSetExpiry200Response
    | ContainerBlobSetExpiryDefaultResponse
    | ContainerBlobSetHttpHeaders200Response
    | ContainerBlobSetHttpHeadersDefaultResponse
    | ContainerBlobSetImmutabilityPolicy200Response
    | ContainerBlobSetImmutabilityPolicyDefaultResponse
    | ContainerBlobDeleteImmutabilityPolicy200Response
    | ContainerBlobDeleteImmutabilityPolicyDefaultResponse
    | ContainerBlobSetLegalHold200Response
    | ContainerBlobSetLegalHoldDefaultResponse
    | ContainerBlobSetMetadata200Response
    | ContainerBlobSetMetadataDefaultResponse
    | ContainerBlobAcquireLease201Response
    | ContainerBlobAcquireLeaseDefaultResponse
    | ContainerBlobReleaseLease200Response
    | ContainerBlobReleaseLeaseDefaultResponse
    | ContainerBlobRenewLease200Response
    | ContainerBlobRenewLeaseDefaultResponse
    | ContainerBlobChangeLease200Response
    | ContainerBlobChangeLeaseDefaultResponse
    | ContainerBlobBreakLease202Response
    | ContainerBlobBreakLeaseDefaultResponse
    | ContainerBlobCreateSnapshot201Response
    | ContainerBlobCreateSnapshotDefaultResponse
    | ContainerBlobCopyFromUrl202Response
    | ContainerBlobCopyFromUrlDefaultResponse
    | ContainerBlobAbortCopyFromUrl204Response
    | ContainerBlobAbortCopyFromUrlDefaultResponse
    | ContainerBlobSetTier200Response
    | ContainerBlobSetTier202Response
    | ContainerBlobSetTierDefaultResponse
    | ContainerBlobGetAccountInfo200Response
    | ContainerBlobGetAccountInfoDefaultResponse
    | ContainerBlobGetTags200Response
    | ContainerBlobGetTagsDefaultResponse
    | ContainerBlobSetTags204Response
    | ContainerBlobSetTagsDefaultResponse
    | ContainerBlobPageBlobCreate201Response
    | ContainerBlobPageBlobCreateDefaultResponse
    | ContainerBlobPageBlobUploadPages201Response
    | ContainerBlobPageBlobUploadPagesDefaultResponse
    | ContainerBlobPageBlobClearPages201Response
    | ContainerBlobPageBlobClearPagesDefaultResponse
    | ContainerBlobPageBlobUploadPagesFromUrl201Response
    | ContainerBlobPageBlobUploadPagesFromUrlDefaultResponse
    | ContainerBlobPageBlobGetPageRanges200Response
    | ContainerBlobPageBlobGetPageRangesDefaultResponse
    | ContainerBlobPageBlobGetPageRangesDiff200Response
    | ContainerBlobPageBlobGetPageRangesDiffDefaultResponse
    | ContainerBlobPageBlobResize200Response
    | ContainerBlobPageBlobResizeDefaultResponse
    | ContainerBlobPageBlobUpdateSequenceNumber200Response
    | ContainerBlobPageBlobUpdateSequenceNumberDefaultResponse
    | ContainerBlobPageBlobCopyIncremental202Response
    | ContainerBlobPageBlobCopyIncrementalDefaultResponse
    | ContainerBlobAppendBlobCreate201Response
    | ContainerBlobAppendBlobCreateDefaultResponse
    | ContainerBlobAppendBlobAppendBlock201Response
    | ContainerBlobAppendBlobAppendBlockDefaultResponse
    | ContainerBlobAppendBlobAppendBlockFromUrl201Response
    | ContainerBlobAppendBlobAppendBlockFromUrlDefaultResponse
    | ContainerBlobAppendBlobSeal200Response
    | ContainerBlobAppendBlobSealDefaultResponse
    | ContainerBlobBlockBlobUpload201Response
    | ContainerBlobBlockBlobUploadDefaultResponse
    | ContainerBlobBlockBlobPutBlobFromUrl201Response
    | ContainerBlobBlockBlobPutBlobFromUrlDefaultResponse
    | ContainerBlobBlockBlobStageBlock201Response
    | ContainerBlobBlockBlobStageBlockDefaultResponse
    | ContainerBlobBlockBlobStageBlockFromUrl201Response
    | ContainerBlobBlockBlobStageBlockFromUrlDefaultResponse
    | ContainerBlobBlockBlobCommitBlockList201Response
    | ContainerBlobBlockBlobCommitBlockListDefaultResponse
    | ContainerBlobBlockBlobGetBlockList200Response
    | ContainerBlobBlockBlobGetBlockListDefaultResponse
    | ContainerBlobBlockBlobQuery200Response
    | ContainerBlobBlockBlobQuery206Response
    | ContainerBlobBlockBlobQueryDefaultResponse,
): response is
  | SetPropertiesDefaultResponse
  | GetPropertiesDefaultResponse
  | GetStatisticsDefaultResponse
  | ListContainersSegmentDefaultResponse
  | GetUserDelegationKeyDefaultResponse
  | GetAccountInfoDefaultResponse
  | SubmitBatchDefaultResponse
  | FilterBlobsDefaultResponse
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
  | ContainerBlobDownloadDefaultResponse
  | ContainerBlobGetPropertiesDefaultResponse
  | ContainerBlobDeleteDefaultResponse
  | ContainerBlobStartCopyFromUrlDefaultResponse
  | ContainerBlobUndeleteDefaultResponse
  | ContainerBlobSetExpiryDefaultResponse
  | ContainerBlobSetHttpHeadersDefaultResponse
  | ContainerBlobSetImmutabilityPolicyDefaultResponse
  | ContainerBlobDeleteImmutabilityPolicyDefaultResponse
  | ContainerBlobSetLegalHoldDefaultResponse
  | ContainerBlobSetMetadataDefaultResponse
  | ContainerBlobAcquireLeaseDefaultResponse
  | ContainerBlobReleaseLeaseDefaultResponse
  | ContainerBlobRenewLeaseDefaultResponse
  | ContainerBlobChangeLeaseDefaultResponse
  | ContainerBlobBreakLeaseDefaultResponse
  | ContainerBlobCreateSnapshotDefaultResponse
  | ContainerBlobCopyFromUrlDefaultResponse
  | ContainerBlobAbortCopyFromUrlDefaultResponse
  | ContainerBlobSetTierDefaultResponse
  | ContainerBlobGetAccountInfoDefaultResponse
  | ContainerBlobGetTagsDefaultResponse
  | ContainerBlobSetTagsDefaultResponse
  | ContainerBlobPageBlobCreateDefaultResponse
  | ContainerBlobPageBlobUploadPagesDefaultResponse
  | ContainerBlobPageBlobClearPagesDefaultResponse
  | ContainerBlobPageBlobUploadPagesFromUrlDefaultResponse
  | ContainerBlobPageBlobGetPageRangesDefaultResponse
  | ContainerBlobPageBlobGetPageRangesDiffDefaultResponse
  | ContainerBlobPageBlobResizeDefaultResponse
  | ContainerBlobPageBlobUpdateSequenceNumberDefaultResponse
  | ContainerBlobPageBlobCopyIncrementalDefaultResponse
  | ContainerBlobAppendBlobCreateDefaultResponse
  | ContainerBlobAppendBlobAppendBlockDefaultResponse
  | ContainerBlobAppendBlobAppendBlockFromUrlDefaultResponse
  | ContainerBlobAppendBlobSealDefaultResponse
  | ContainerBlobBlockBlobUploadDefaultResponse
  | ContainerBlobBlockBlobPutBlobFromUrlDefaultResponse
  | ContainerBlobBlockBlobStageBlockDefaultResponse
  | ContainerBlobBlockBlobStageBlockFromUrlDefaultResponse
  | ContainerBlobBlockBlobCommitBlockListDefaultResponse
  | ContainerBlobBlockBlobGetBlockListDefaultResponse
  | ContainerBlobBlockBlobQueryDefaultResponse {
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
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

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
