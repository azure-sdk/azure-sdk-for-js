// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  StorageServiceProperties,
  ListContainersIncludeType,
  KeyInfo,
  FilterBlobsIncludeItem,
  PublicAccessType,
  SignedIdentifier,
  ListBlobsIncludeItem,
  EncryptionAlgorithmType,
  BlobDeleteType,
  DeleteSnapshotsOptionType,
  BlobExpiryOptions,
  BlobImmutabilityPolicyMode,
  AccessTier,
  RehydratePriority,
  BlobTags,
  PremiumPageBlobAccessTier,
  SequenceNumberActionType,
  BlockLookupList,
  BlockListType,
  QueryRequest,
} from "./models.js";

export interface SetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface SetPropertiesBodyParam {
  body: StorageServiceProperties;
}

export interface SetPropertiesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface SetPropertiesQueryParam {
  queryParameters?: SetPropertiesQueryParamProperties;
}

export interface SetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & SetPropertiesHeaders;
}

export interface SetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type SetPropertiesParameters = SetPropertiesQueryParam &
  SetPropertiesHeaderParam &
  SetPropertiesMediaTypesParam &
  SetPropertiesBodyParam &
  RequestParameters;

export interface GetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetPropertiesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface GetPropertiesQueryParam {
  queryParameters?: GetPropertiesQueryParamProperties;
}

export interface GetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & GetPropertiesHeaders;
}

export interface GetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type GetPropertiesParameters = GetPropertiesQueryParam &
  GetPropertiesHeaderParam &
  GetPropertiesMediaTypesParam &
  RequestParameters;

export interface GetStatisticsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetStatisticsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface GetStatisticsQueryParam {
  queryParameters?: GetStatisticsQueryParamProperties;
}

export interface GetStatisticsHeaderParam {
  headers: RawHttpHeadersInput & GetStatisticsHeaders;
}

export interface GetStatisticsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type GetStatisticsParameters = GetStatisticsQueryParam &
  GetStatisticsHeaderParam &
  GetStatisticsMediaTypesParam &
  RequestParameters;

export interface ListContainersSegmentHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ListContainersSegmentIncludeQueryParam {
  /** Value of the parameter */
  value: ListContainersIncludeType[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ListContainersSegmentQueryParamProperties {
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Include this parameter to specify that the container's metadata be returned as part of the response body. */
  include?: ListContainersIncludeType[] | ListContainersSegmentIncludeQueryParam;
}

export interface ListContainersSegmentQueryParam {
  queryParameters?: ListContainersSegmentQueryParamProperties;
}

export interface ListContainersSegmentHeaderParam {
  headers: RawHttpHeadersInput & ListContainersSegmentHeaders;
}

export interface ListContainersSegmentMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ListContainersSegmentParameters = ListContainersSegmentQueryParam &
  ListContainersSegmentHeaderParam &
  ListContainersSegmentMediaTypesParam &
  RequestParameters;

export interface GetUserDelegationKeyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetUserDelegationKeyBodyParam {
  body: KeyInfo;
}

export interface GetUserDelegationKeyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface GetUserDelegationKeyQueryParam {
  queryParameters?: GetUserDelegationKeyQueryParamProperties;
}

export interface GetUserDelegationKeyHeaderParam {
  headers: RawHttpHeadersInput & GetUserDelegationKeyHeaders;
}

export interface GetUserDelegationKeyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type GetUserDelegationKeyParameters = GetUserDelegationKeyQueryParam &
  GetUserDelegationKeyHeaderParam &
  GetUserDelegationKeyMediaTypesParam &
  GetUserDelegationKeyBodyParam &
  RequestParameters;

export interface GetAccountInfoHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface GetAccountInfoQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface GetAccountInfoQueryParam {
  queryParameters?: GetAccountInfoQueryParamProperties;
}

export interface GetAccountInfoHeaderParam {
  headers: RawHttpHeadersInput & GetAccountInfoHeaders;
}

export interface GetAccountInfoMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type GetAccountInfoParameters = GetAccountInfoQueryParam &
  GetAccountInfoHeaderParam &
  GetAccountInfoMediaTypesParam &
  RequestParameters;

export interface SubmitBatchHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The length of the request. */
  "Content-Length": number;
}

export interface SubmitBatchBodyParam {
  /** The body of the request. */
  body: { name: string; body: string };
}

export interface SubmitBatchQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface SubmitBatchQueryParam {
  queryParameters?: SubmitBatchQueryParamProperties;
}

export interface SubmitBatchHeaderParam {
  headers: RawHttpHeadersInput & SubmitBatchHeaders;
}

export interface SubmitBatchMediaTypesParam {
  /** Required. The value of this header must be multipart/mixed with a batch boundary. Example header value: multipart/mixed; boundary=batch_<GUID> */
  contentType: "multipart/mixed";
}

export type SubmitBatchParameters = SubmitBatchQueryParam &
  SubmitBatchHeaderParam &
  SubmitBatchMediaTypesParam &
  SubmitBatchBodyParam &
  RequestParameters;

export interface FilterBlobsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface FilterBlobsIncludeQueryParam {
  /** Value of the parameter */
  value: FilterBlobsIncludeItem[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface FilterBlobsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Filters the results to return only to return only blobs whose tags match the specified expression. */
  where?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: FilterBlobsIncludeItem[] | FilterBlobsIncludeQueryParam;
}

export interface FilterBlobsQueryParam {
  queryParameters?: FilterBlobsQueryParamProperties;
}

export interface FilterBlobsHeaderParam {
  headers: RawHttpHeadersInput & FilterBlobsHeaders;
}

export interface FilterBlobsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type FilterBlobsParameters = FilterBlobsQueryParam &
  FilterBlobsHeaderParam &
  FilterBlobsMediaTypesParam &
  RequestParameters;

export interface ContainerCreateHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /**
   * The public access setting for the container.
   *
   * Possible values: "blob", "container"
   */
  "x-ms-blob-public-access"?: PublicAccessType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the default encryption scope to set on the container and use for all future writes. */
  "x-ms-default-encryption-scope"?: string;
  /** If a blob has a lease and the lease is of infinite duration then the value of this header is set to true, otherwise it is set to false. */
  "x-ms-deny-encryption-scope-override"?: boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerCreateQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerCreateQueryParam {
  queryParameters?: ContainerCreateQueryParamProperties;
}

export interface ContainerCreateHeaderParam {
  headers: RawHttpHeadersInput & ContainerCreateHeaders;
}

export interface ContainerCreateMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerCreateParameters = ContainerCreateQueryParam &
  ContainerCreateHeaderParam &
  ContainerCreateMediaTypesParam &
  RequestParameters;

export interface ContainerGetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerGetPropertiesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerGetPropertiesQueryParam {
  queryParameters?: ContainerGetPropertiesQueryParamProperties;
}

export interface ContainerGetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & ContainerGetPropertiesHeaders;
}

export interface ContainerGetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerGetPropertiesParameters = ContainerGetPropertiesQueryParam &
  ContainerGetPropertiesHeaderParam &
  ContainerGetPropertiesMediaTypesParam &
  RequestParameters;

export interface ContainerDeleteHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerDeleteQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerDeleteQueryParam {
  queryParameters?: ContainerDeleteQueryParamProperties;
}

export interface ContainerDeleteHeaderParam {
  headers: RawHttpHeadersInput & ContainerDeleteHeaders;
}

export interface ContainerDeleteMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerDeleteParameters = ContainerDeleteQueryParam &
  ContainerDeleteHeaderParam &
  ContainerDeleteMediaTypesParam &
  RequestParameters;

export interface ContainerSetMetadataHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerSetMetadataQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerSetMetadataQueryParam {
  queryParameters?: ContainerSetMetadataQueryParamProperties;
}

export interface ContainerSetMetadataHeaderParam {
  headers: RawHttpHeadersInput & ContainerSetMetadataHeaders;
}

export interface ContainerSetMetadataMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerSetMetadataParameters = ContainerSetMetadataQueryParam &
  ContainerSetMetadataHeaderParam &
  ContainerSetMetadataMediaTypesParam &
  RequestParameters;

export interface ContainerGetAccessPolicyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerGetAccessPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerGetAccessPolicyQueryParam {
  queryParameters?: ContainerGetAccessPolicyQueryParamProperties;
}

export interface ContainerGetAccessPolicyHeaderParam {
  headers: RawHttpHeadersInput & ContainerGetAccessPolicyHeaders;
}

export interface ContainerGetAccessPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerGetAccessPolicyParameters = ContainerGetAccessPolicyQueryParam &
  ContainerGetAccessPolicyHeaderParam &
  ContainerGetAccessPolicyMediaTypesParam &
  RequestParameters;

export interface ContainerSetAccessPolicyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /**
   * The public access setting for the container.
   *
   * Possible values: "blob", "container"
   */
  "x-ms-blob-public-access"?: PublicAccessType;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerSetAccessPolicyBodyParam {
  /** The access control list for the container. */
  body: Array<SignedIdentifier>;
}

export interface ContainerSetAccessPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerSetAccessPolicyQueryParam {
  queryParameters?: ContainerSetAccessPolicyQueryParamProperties;
}

export interface ContainerSetAccessPolicyHeaderParam {
  headers: RawHttpHeadersInput & ContainerSetAccessPolicyHeaders;
}

export interface ContainerSetAccessPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerSetAccessPolicyParameters = ContainerSetAccessPolicyQueryParam &
  ContainerSetAccessPolicyHeaderParam &
  ContainerSetAccessPolicyMediaTypesParam &
  ContainerSetAccessPolicyBodyParam &
  RequestParameters;

export interface ContainerRestoreHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Optional.  Version 2019-12-12 and later.  Specifies the name of the deleted container to restore. */
  "x-ms-deleted-container-name"?: string;
  /** Optional.  Version 2019-12-12 and later.  Specifies the version of the deleted container to restore. */
  "x-ms-deleted-container-version"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerRestoreQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerRestoreQueryParam {
  queryParameters?: ContainerRestoreQueryParamProperties;
}

export interface ContainerRestoreHeaderParam {
  headers: RawHttpHeadersInput & ContainerRestoreHeaders;
}

export interface ContainerRestoreMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerRestoreParameters = ContainerRestoreQueryParam &
  ContainerRestoreHeaderParam &
  ContainerRestoreMediaTypesParam &
  RequestParameters;

export interface ContainerRenameHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  Specifies the name of the container to rename. */
  "x-ms-source-container-name": string;
  /** A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-source-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerRenameQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerRenameQueryParam {
  queryParameters?: ContainerRenameQueryParamProperties;
}

export interface ContainerRenameHeaderParam {
  headers: RawHttpHeadersInput & ContainerRenameHeaders;
}

export interface ContainerRenameMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerRenameParameters = ContainerRenameQueryParam &
  ContainerRenameHeaderParam &
  ContainerRenameMediaTypesParam &
  RequestParameters;

export interface ContainerSubmitBatchHeaders {
  /** The length of the request. */
  "Content-Length": number;
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerSubmitBatchBodyParam {
  /** The body of the request. */
  body: { name: string; body: string };
}

export interface ContainerSubmitBatchQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerSubmitBatchQueryParam {
  queryParameters?: ContainerSubmitBatchQueryParamProperties;
}

export interface ContainerSubmitBatchHeaderParam {
  headers: RawHttpHeadersInput & ContainerSubmitBatchHeaders;
}

export interface ContainerSubmitBatchMediaTypesParam {
  /** Required. The value of this header must be multipart/mixed with a batch boundary. Example header value: multipart/mixed; boundary=batch_<GUID> */
  contentType: "multipart/mixed";
}

export type ContainerSubmitBatchParameters = ContainerSubmitBatchQueryParam &
  ContainerSubmitBatchHeaderParam &
  ContainerSubmitBatchMediaTypesParam &
  ContainerSubmitBatchBodyParam &
  RequestParameters;

export interface ContainerFilterBlobsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ContainerFilterBlobsIncludeQueryParam {
  /** Value of the parameter */
  value: FilterBlobsIncludeItem[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ContainerFilterBlobsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Filters the results to return only to return only blobs whose tags match the specified expression. */
  where?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: FilterBlobsIncludeItem[] | ContainerFilterBlobsIncludeQueryParam;
}

export interface ContainerFilterBlobsQueryParam {
  queryParameters?: ContainerFilterBlobsQueryParamProperties;
}

export interface ContainerFilterBlobsHeaderParam {
  headers: RawHttpHeadersInput & ContainerFilterBlobsHeaders;
}

export interface ContainerFilterBlobsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerFilterBlobsParameters = ContainerFilterBlobsQueryParam &
  ContainerFilterBlobsHeaderParam &
  ContainerFilterBlobsMediaTypesParam &
  RequestParameters;

export interface ContainerAcquireLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. */
  "x-ms-lease-duration"?: number;
  /** Optional.  The proposed lease ID for the container. */
  "x-ms-proposed-lease-id"?: string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerAcquireLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerAcquireLeaseQueryParam {
  queryParameters?: ContainerAcquireLeaseQueryParamProperties;
}

export interface ContainerAcquireLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerAcquireLeaseHeaders;
}

export interface ContainerAcquireLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerAcquireLeaseParameters = ContainerAcquireLeaseQueryParam &
  ContainerAcquireLeaseHeaderParam &
  ContainerAcquireLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerReleaseLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerReleaseLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerReleaseLeaseQueryParam {
  queryParameters?: ContainerReleaseLeaseQueryParamProperties;
}

export interface ContainerReleaseLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerReleaseLeaseHeaders;
}

export interface ContainerReleaseLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerReleaseLeaseParameters = ContainerReleaseLeaseQueryParam &
  ContainerReleaseLeaseHeaderParam &
  ContainerReleaseLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerRenewLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerRenewLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerRenewLeaseQueryParam {
  queryParameters?: ContainerRenewLeaseQueryParamProperties;
}

export interface ContainerRenewLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerRenewLeaseHeaders;
}

export interface ContainerRenewLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerRenewLeaseParameters = ContainerRenewLeaseQueryParam &
  ContainerRenewLeaseHeaderParam &
  ContainerRenewLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBreakLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** For a break operation, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
  "x-ms-lease-break-period"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBreakLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBreakLeaseQueryParam {
  queryParameters?: ContainerBreakLeaseQueryParamProperties;
}

export interface ContainerBreakLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBreakLeaseHeaders;
}

export interface ContainerBreakLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBreakLeaseParameters = ContainerBreakLeaseQueryParam &
  ContainerBreakLeaseHeaderParam &
  ContainerBreakLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerChangeLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** Required.  The proposed lease ID for the container. */
  "x-ms-proposed-lease-id": string;
  /** A date-time value. A request is made under the condition that the resource has been modified since the specified date-time. */
  "If-Modified-Since"?: string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerChangeLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerChangeLeaseQueryParam {
  queryParameters?: ContainerChangeLeaseQueryParamProperties;
}

export interface ContainerChangeLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerChangeLeaseHeaders;
}

export interface ContainerChangeLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerChangeLeaseParameters = ContainerChangeLeaseQueryParam &
  ContainerChangeLeaseHeaderParam &
  ContainerChangeLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerListBlobFlatSegmentHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ContainerListBlobFlatSegmentIncludeQueryParam {
  /** Value of the parameter */
  value: ListBlobsIncludeItem[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ContainerListBlobFlatSegmentQueryParamProperties {
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[] | ContainerListBlobFlatSegmentIncludeQueryParam;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerListBlobFlatSegmentQueryParam {
  queryParameters?: ContainerListBlobFlatSegmentQueryParamProperties;
}

export interface ContainerListBlobFlatSegmentHeaderParam {
  headers: RawHttpHeadersInput & ContainerListBlobFlatSegmentHeaders;
}

export interface ContainerListBlobFlatSegmentMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerListBlobFlatSegmentParameters = ContainerListBlobFlatSegmentQueryParam &
  ContainerListBlobFlatSegmentHeaderParam &
  ContainerListBlobFlatSegmentMediaTypesParam &
  RequestParameters;

export interface ContainerListBlobHierarchySegmentHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ContainerListBlobHierarchySegmentIncludeQueryParam {
  /** Value of the parameter */
  value: ListBlobsIncludeItem[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ContainerListBlobHierarchySegmentQueryParamProperties {
  /** When the request includes this parameter, the operation returns a BlobPrefix element in the response body that acts as a placeholder for all blobs whose names begin with the same substring up to the appearance of the delimiter character. The delimiter may be a single character or a string. */
  delimiter: string;
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: ListBlobsIncludeItem[] | ContainerListBlobHierarchySegmentIncludeQueryParam;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerListBlobHierarchySegmentQueryParam {
  queryParameters: ContainerListBlobHierarchySegmentQueryParamProperties;
}

export interface ContainerListBlobHierarchySegmentHeaderParam {
  headers: RawHttpHeadersInput & ContainerListBlobHierarchySegmentHeaders;
}

export interface ContainerListBlobHierarchySegmentMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerListBlobHierarchySegmentParameters =
  ContainerListBlobHierarchySegmentQueryParam &
    ContainerListBlobHierarchySegmentHeaderParam &
    ContainerListBlobHierarchySegmentMediaTypesParam &
    RequestParameters;

export interface ContainerGetAccountInfoHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerGetAccountInfoQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerGetAccountInfoQueryParam {
  queryParameters?: ContainerGetAccountInfoQueryParamProperties;
}

export interface ContainerGetAccountInfoHeaderParam {
  headers: RawHttpHeadersInput & ContainerGetAccountInfoHeaders;
}

export interface ContainerGetAccountInfoMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerGetAccountInfoParameters = ContainerGetAccountInfoQueryParam &
  ContainerGetAccountInfoHeaderParam &
  ContainerGetAccountInfoMediaTypesParam &
  RequestParameters;

export interface ContainerBlobDownloadHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** Return only the bytes of the blob in the specified range. */
  "x-ms-range"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** When set to true and specified together with the Range, the service returns the MD5 hash for the range, as long as the range is less than or equal to 4 MB in size. */
  "x-ms-range-get-content-md5"?: boolean;
  /** Optional.  When this header is set to true and specified together with the Range header, the service returns the CRC64 hash for the range, as long as the range is less than or equal to 4 MB in size. */
  "x-ms-range-get-content-crc64"?: boolean;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
}

export interface ContainerBlobDownloadQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobDownloadQueryParam {
  queryParameters?: ContainerBlobDownloadQueryParamProperties;
}

export interface ContainerBlobDownloadHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobDownloadHeaders;
}

export type ContainerBlobDownloadParameters = ContainerBlobDownloadQueryParam &
  ContainerBlobDownloadHeaderParam &
  RequestParameters;

export interface ContainerBlobGetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobGetPropertiesQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobGetPropertiesQueryParam {
  queryParameters?: ContainerBlobGetPropertiesQueryParamProperties;
}

export interface ContainerBlobGetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobGetPropertiesHeaders;
}

export interface ContainerBlobGetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobGetPropertiesParameters = ContainerBlobGetPropertiesQueryParam &
  ContainerBlobGetPropertiesHeaderParam &
  ContainerBlobGetPropertiesMediaTypesParam &
  RequestParameters;

export interface ContainerBlobDeleteHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /**
   * Required if the blob has associated snapshots. Specify one of the following two options: include: Delete the base blob and all of its snapshots. only: Delete only the blob's snapshots and not the blob itself
   *
   * Possible values: "only", "include"
   */
  "x-ms-delete-snapshots"?: DeleteSnapshotsOptionType;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobDeleteQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /**
   * Optional.  Only possible value is 'permanent', which specifies to permanently delete a blob if blob soft delete is enabled.
   *
   * Possible values: "Permanent"
   */
  deletetype?: BlobDeleteType;
}

export interface ContainerBlobDeleteQueryParam {
  queryParameters?: ContainerBlobDeleteQueryParamProperties;
}

export interface ContainerBlobDeleteHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobDeleteHeaders;
}

export interface ContainerBlobDeleteMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobDeleteParameters = ContainerBlobDeleteQueryParam &
  ContainerBlobDeleteHeaderParam &
  ContainerBlobDeleteMediaTypesParam &
  RequestParameters;

export interface ContainerBlobUndeleteHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobUndeleteQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobUndeleteQueryParam {
  queryParameters?: ContainerBlobUndeleteQueryParamProperties;
}

export interface ContainerBlobUndeleteHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobUndeleteHeaders;
}

export interface ContainerBlobUndeleteMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobUndeleteParameters = ContainerBlobUndeleteQueryParam &
  ContainerBlobUndeleteHeaderParam &
  ContainerBlobUndeleteMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetExpiryHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /**
   * Required. Indicates mode of the expiry time
   *
   * Possible values: "NeverExpire", "RelativeToCreation", "RelativeToNow", "Absolute"
   */
  "x-ms-expiry-option": BlobExpiryOptions;
  /** The time this blob will expire. */
  "x-ms-expiry-time"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetExpiryQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobSetExpiryQueryParam {
  queryParameters?: ContainerBlobSetExpiryQueryParamProperties;
}

export interface ContainerBlobSetExpiryHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetExpiryHeaders;
}

export interface ContainerBlobSetExpiryMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetExpiryParameters = ContainerBlobSetExpiryQueryParam &
  ContainerBlobSetExpiryHeaderParam &
  ContainerBlobSetExpiryMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetHttpHeadersHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetHttpHeadersQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobSetHttpHeadersQueryParam {
  queryParameters?: ContainerBlobSetHttpHeadersQueryParamProperties;
}

export interface ContainerBlobSetHttpHeadersHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetHttpHeadersHeaders;
}

export interface ContainerBlobSetHttpHeadersMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetHttpHeadersParameters = ContainerBlobSetHttpHeadersQueryParam &
  ContainerBlobSetHttpHeadersHeaderParam &
  ContainerBlobSetHttpHeadersMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetImmutabilityPolicyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** A date-time value. A request is made under the condition that the resource has not been modified since the specified date-time. */
  "If-Unmodified-Since"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetImmutabilityPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface ContainerBlobSetImmutabilityPolicyQueryParam {
  queryParameters?: ContainerBlobSetImmutabilityPolicyQueryParamProperties;
}

export interface ContainerBlobSetImmutabilityPolicyHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetImmutabilityPolicyHeaders;
}

export interface ContainerBlobSetImmutabilityPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetImmutabilityPolicyParameters =
  ContainerBlobSetImmutabilityPolicyQueryParam &
    ContainerBlobSetImmutabilityPolicyHeaderParam &
    ContainerBlobSetImmutabilityPolicyMediaTypesParam &
    RequestParameters;

export interface ContainerBlobDeleteImmutabilityPolicyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobDeleteImmutabilityPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface ContainerBlobDeleteImmutabilityPolicyQueryParam {
  queryParameters?: ContainerBlobDeleteImmutabilityPolicyQueryParamProperties;
}

export interface ContainerBlobDeleteImmutabilityPolicyHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobDeleteImmutabilityPolicyHeaders;
}

export interface ContainerBlobDeleteImmutabilityPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobDeleteImmutabilityPolicyParameters =
  ContainerBlobDeleteImmutabilityPolicyQueryParam &
    ContainerBlobDeleteImmutabilityPolicyHeaderParam &
    ContainerBlobDeleteImmutabilityPolicyMediaTypesParam &
    RequestParameters;

export interface ContainerBlobSetLegalHoldHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  Specifies the legal hold status to set on the blob. */
  "x-ms-legal-hold": boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetLegalHoldQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface ContainerBlobSetLegalHoldQueryParam {
  queryParameters?: ContainerBlobSetLegalHoldQueryParamProperties;
}

export interface ContainerBlobSetLegalHoldHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetLegalHoldHeaders;
}

export interface ContainerBlobSetLegalHoldMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetLegalHoldParameters = ContainerBlobSetLegalHoldQueryParam &
  ContainerBlobSetLegalHoldHeaderParam &
  ContainerBlobSetLegalHoldMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetMetadataHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetMetadataQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobSetMetadataQueryParam {
  queryParameters?: ContainerBlobSetMetadataQueryParamProperties;
}

export interface ContainerBlobSetMetadataHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetMetadataHeaders;
}

export interface ContainerBlobSetMetadataMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetMetadataParameters = ContainerBlobSetMetadataQueryParam &
  ContainerBlobSetMetadataHeaderParam &
  ContainerBlobSetMetadataMediaTypesParam &
  RequestParameters;

export interface ContainerBlobAcquireLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Specifies the duration of the lease, in seconds, or negative one (-1) for a lease that never expires. A non-infinite lease can be between 15 and 60 seconds. A lease duration cannot be changed using renew or change. */
  "x-ms-lease-duration"?: number;
  /** Optional.  The proposed lease ID for the container. */
  "x-ms-proposed-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAcquireLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobAcquireLeaseQueryParam {
  queryParameters?: ContainerBlobAcquireLeaseQueryParamProperties;
}

export interface ContainerBlobAcquireLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAcquireLeaseHeaders;
}

export interface ContainerBlobAcquireLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobAcquireLeaseParameters = ContainerBlobAcquireLeaseQueryParam &
  ContainerBlobAcquireLeaseHeaderParam &
  ContainerBlobAcquireLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBlobReleaseLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobReleaseLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobReleaseLeaseQueryParam {
  queryParameters?: ContainerBlobReleaseLeaseQueryParamProperties;
}

export interface ContainerBlobReleaseLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobReleaseLeaseHeaders;
}

export interface ContainerBlobReleaseLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobReleaseLeaseParameters = ContainerBlobReleaseLeaseQueryParam &
  ContainerBlobReleaseLeaseHeaderParam &
  ContainerBlobReleaseLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBlobRenewLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobRenewLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobRenewLeaseQueryParam {
  queryParameters?: ContainerBlobRenewLeaseQueryParamProperties;
}

export interface ContainerBlobRenewLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobRenewLeaseHeaders;
}

export interface ContainerBlobRenewLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobRenewLeaseParameters = ContainerBlobRenewLeaseQueryParam &
  ContainerBlobRenewLeaseHeaderParam &
  ContainerBlobRenewLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBlobChangeLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  A lease ID for the source path. If specified, the source path must have an active lease and the lease ID must match. */
  "x-ms-lease-id": string;
  /** Optional.  The proposed lease ID for the container. */
  "x-ms-proposed-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobChangeLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobChangeLeaseQueryParam {
  queryParameters?: ContainerBlobChangeLeaseQueryParamProperties;
}

export interface ContainerBlobChangeLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobChangeLeaseHeaders;
}

export interface ContainerBlobChangeLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobChangeLeaseParameters = ContainerBlobChangeLeaseQueryParam &
  ContainerBlobChangeLeaseHeaderParam &
  ContainerBlobChangeLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBlobBreakLeaseHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** For a break operation, proposed duration the lease should continue before it is broken, in seconds, between 0 and 60. This break period is only used if it is shorter than the time remaining on the lease. If longer, the time remaining on the lease is used. A new lease will not be available before the break period has expired, but the lease may be held for longer than the break period. If this header does not appear with a break operation, a fixed-duration lease breaks after the remaining lease period elapses, and an infinite lease breaks immediately. */
  "x-ms-lease-break-period"?: number;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBreakLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBreakLeaseQueryParam {
  queryParameters?: ContainerBlobBreakLeaseQueryParamProperties;
}

export interface ContainerBlobBreakLeaseHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBreakLeaseHeaders;
}

export interface ContainerBlobBreakLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobBreakLeaseParameters = ContainerBlobBreakLeaseQueryParam &
  ContainerBlobBreakLeaseHeaderParam &
  ContainerBlobBreakLeaseMediaTypesParam &
  RequestParameters;

export interface ContainerBlobCreateSnapshotHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobCreateSnapshotQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobCreateSnapshotQueryParam {
  queryParameters?: ContainerBlobCreateSnapshotQueryParamProperties;
}

export interface ContainerBlobCreateSnapshotHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobCreateSnapshotHeaders;
}

export interface ContainerBlobCreateSnapshotMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobCreateSnapshotParameters = ContainerBlobCreateSnapshotQueryParam &
  ContainerBlobCreateSnapshotHeaderParam &
  ContainerBlobCreateSnapshotMediaTypesParam &
  RequestParameters;

export interface ContainerBlobStartCopyFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /**
   * The tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier"?: AccessTier;
  /**
   * If an object is in rehydrate pending state then this header is returned with priority of rehydrate. Valid values are High and Standard.
   *
   * Possible values: "High", "Standard"
   */
  "x-ms-rehydrate-priority"?: RehydratePriority;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-source-if-tags"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specifies the name of the source page blob snapshot. This value is a URL of up to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would appear in a request URI. The source blob must either be public or must be authenticated via a shared access signature. */
  "x-ms-copy-source": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Overrides the sealed state of the destination blob.  Service version 2019-12-12 and newer. */
  "x-ms-seal-blob"?: boolean;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobStartCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobStartCopyFromUrlQueryParam {
  queryParameters?: ContainerBlobStartCopyFromUrlQueryParamProperties;
}

export interface ContainerBlobStartCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobStartCopyFromUrlHeaders;
}

export interface ContainerBlobStartCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobStartCopyFromUrlParameters = ContainerBlobStartCopyFromUrlQueryParam &
  ContainerBlobStartCopyFromUrlHeaderParam &
  ContainerBlobStartCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface ContainerBlobCopyFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /**
   * The tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier"?: AccessTier;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specifies the name of the source page blob snapshot. This value is a URL of up to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would appear in a request URI. The source blob must either be public or must be authenticated via a shared access signature. */
  "x-ms-copy-source": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-md5"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** Only Bearer type is supported. Credentials should be a valid OAuth access token to copy source. */
  "x-ms-copy-source-authorization"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** Optional, default 'replace'.  Indicates if source tags should be copied or replaced with the tags specified by x-ms-tags. */
  "x-ms-copy-source-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobCopyFromUrlQueryParam {
  queryParameters?: ContainerBlobCopyFromUrlQueryParamProperties;
}

export interface ContainerBlobCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobCopyFromUrlHeaders;
}

export interface ContainerBlobCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobCopyFromUrlParameters = ContainerBlobCopyFromUrlQueryParam &
  ContainerBlobCopyFromUrlHeaderParam &
  ContainerBlobCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface ContainerBlobAbortCopyFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAbortCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The copy identifier provided in the x-ms-copy-id header of the original Copy Blob operation. */
  copyid: string;
}

export interface ContainerBlobAbortCopyFromUrlQueryParam {
  queryParameters: ContainerBlobAbortCopyFromUrlQueryParamProperties;
}

export interface ContainerBlobAbortCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAbortCopyFromUrlHeaders;
}

export interface ContainerBlobAbortCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobAbortCopyFromUrlParameters = ContainerBlobAbortCopyFromUrlQueryParam &
  ContainerBlobAbortCopyFromUrlHeaderParam &
  ContainerBlobAbortCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetTierHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /**
   * Indicates the tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier": AccessTier;
  /**
   * If an object is in rehydrate pending state then this header is returned with priority of rehydrate. Valid values are High and Standard.
   *
   * Possible values: "High", "Standard"
   */
  "x-ms-rehydrate-priority"?: RehydratePriority;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetTierQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobSetTierQueryParam {
  queryParameters?: ContainerBlobSetTierQueryParamProperties;
}

export interface ContainerBlobSetTierHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetTierHeaders;
}

export interface ContainerBlobSetTierMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetTierParameters = ContainerBlobSetTierQueryParam &
  ContainerBlobSetTierHeaderParam &
  ContainerBlobSetTierMediaTypesParam &
  RequestParameters;

export interface ContainerBlobGetAccountInfoHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobGetAccountInfoQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobGetAccountInfoQueryParam {
  queryParameters?: ContainerBlobGetAccountInfoQueryParamProperties;
}

export interface ContainerBlobGetAccountInfoHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobGetAccountInfoHeaders;
}

export interface ContainerBlobGetAccountInfoMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobGetAccountInfoParameters = ContainerBlobGetAccountInfoQueryParam &
  ContainerBlobGetAccountInfoHeaderParam &
  ContainerBlobGetAccountInfoMediaTypesParam &
  RequestParameters;

export interface ContainerBlobGetTagsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobGetTagsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface ContainerBlobGetTagsQueryParam {
  queryParameters?: ContainerBlobGetTagsQueryParamProperties;
}

export interface ContainerBlobGetTagsHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobGetTagsHeaders;
}

export interface ContainerBlobGetTagsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobGetTagsParameters = ContainerBlobGetTagsQueryParam &
  ContainerBlobGetTagsHeaderParam &
  ContainerBlobGetTagsMediaTypesParam &
  RequestParameters;

export interface ContainerBlobSetTagsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobSetTagsBodyParam {
  /** The blob tags. */
  body: BlobTags;
}

export interface ContainerBlobSetTagsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface ContainerBlobSetTagsQueryParam {
  queryParameters?: ContainerBlobSetTagsQueryParamProperties;
}

export interface ContainerBlobSetTagsHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobSetTagsHeaders;
}

export interface ContainerBlobSetTagsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobSetTagsParameters = ContainerBlobSetTagsQueryParam &
  ContainerBlobSetTagsHeaderParam &
  ContainerBlobSetTagsMediaTypesParam &
  ContainerBlobSetTagsBodyParam &
  RequestParameters;

export interface ContainerBlobPageBlobCreateHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /**
   * Optional. Indicates the tier to be set on the page blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80"
   */
  "x-ms-access-tier"?: PremiumPageBlobAccessTier;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** This header specifies the maximum size for the page blob, up to 1 TB. The page blob size must be aligned to a 512-byte boundary. */
  "x-ms-blob-content-length": number;
  /** Optional.  The sequence number is a user-controlled property that you can use to track requests. The value of the sequence number must be between 0 and 2^63 - 1. The default value is 0. */
  "x-ms-blob-sequence-number"?: number;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** The type of the blob. */
  "x-ms-blob-type": "PageBlob";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobCreateQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobCreateQueryParam {
  queryParameters?: ContainerBlobPageBlobCreateQueryParamProperties;
}

export interface ContainerBlobPageBlobCreateHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobCreateHeaders;
}

export interface ContainerBlobPageBlobCreateMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobPageBlobCreateParameters = ContainerBlobPageBlobCreateQueryParam &
  ContainerBlobPageBlobCreateHeaderParam &
  ContainerBlobPageBlobCreateMediaTypesParam &
  RequestParameters;

export interface ContainerBlobPageBlobUploadPagesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** Return only the bytes of the blob in the specified range. */
  "x-ms-range"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** Specify this header value to operate only on a blob if it has a sequence number less than or equal to the specified. */
  "x-ms-if-sequence-number-le"?: number;
  /** Specify this header value to operate only on a blob if it has a sequence number less than the specified. */
  "x-ms-if-sequence-number-lt"?: number;
  /** Specify this header value to operate only on a blob if it has the specified sequence number. */
  "x-ms-if-sequence-number-eq"?: number;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Required if the request body is a structured message. Specifies the message schema version and properties. */
  "x-ms-structured-body"?: string;
  /** Required if the request body is a structured message. Specifies the length of the blob/file content inside the message body. Will always be smaller than Content-Length. */
  "x-ms-structured-content-length"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobUploadPagesBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface ContainerBlobPageBlobUploadPagesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobUploadPagesQueryParam {
  queryParameters?: ContainerBlobPageBlobUploadPagesQueryParamProperties;
}

export interface ContainerBlobPageBlobUploadPagesHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobUploadPagesHeaders;
}

export interface ContainerBlobPageBlobUploadPagesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobPageBlobUploadPagesParameters =
  ContainerBlobPageBlobUploadPagesQueryParam &
    ContainerBlobPageBlobUploadPagesHeaderParam &
    ContainerBlobPageBlobUploadPagesMediaTypesParam &
    ContainerBlobPageBlobUploadPagesBodyParam &
    RequestParameters;

export interface ContainerBlobPageBlobClearPagesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The length of the request. */
  "Content-Length": number;
  /** Return only the bytes of the blob in the specified range. */
  "x-ms-range"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** Specify this header value to operate only on a blob if it has a sequence number less than or equal to the specified. */
  "x-ms-if-sequence-number-le"?: number;
  /** Specify this header value to operate only on a blob if it has a sequence number less than the specified. */
  "x-ms-if-sequence-number-lt"?: number;
  /** Specify this header value to operate only on a blob if it has the specified sequence number. */
  "x-ms-if-sequence-number-eq"?: number;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobClearPagesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobClearPagesQueryParam {
  queryParameters?: ContainerBlobPageBlobClearPagesQueryParamProperties;
}

export interface ContainerBlobPageBlobClearPagesHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobClearPagesHeaders;
}

export interface ContainerBlobPageBlobClearPagesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobPageBlobClearPagesParameters = ContainerBlobPageBlobClearPagesQueryParam &
  ContainerBlobPageBlobClearPagesHeaderParam &
  ContainerBlobPageBlobClearPagesMediaTypesParam &
  RequestParameters;

export interface ContainerBlobPageBlobUploadPagesFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Specify a URL to the copy source. */
  "x-ms-copy-source": string;
  /** Bytes of source data in the specified range. The length of this range should match the ContentLength header and x-ms-range/Range destination range header. */
  "x-ms-source-range": string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-md5"?: string;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-crc64"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /** Bytes of source data in the specified range. The length of this range should match the ContentLength header and x-ms-range/Range destination range header. */
  "x-ms-range": string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify this header value to operate only on a blob if it has a sequence number less than or equal to the specified. */
  "x-ms-if-sequence-number-le"?: number;
  /** Specify this header value to operate only on a blob if it has a sequence number less than the specified. */
  "x-ms-if-sequence-number-lt"?: number;
  /** Specify this header value to operate only on a blob if it has the specified sequence number. */
  "x-ms-if-sequence-number-eq"?: number;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** Only Bearer type is supported. Credentials should be a valid OAuth access token to copy source. */
  "x-ms-copy-source-authorization"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobUploadPagesFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobUploadPagesFromUrlQueryParam {
  queryParameters?: ContainerBlobPageBlobUploadPagesFromUrlQueryParamProperties;
}

export interface ContainerBlobPageBlobUploadPagesFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobUploadPagesFromUrlHeaders;
}

export interface ContainerBlobPageBlobUploadPagesFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobPageBlobUploadPagesFromUrlParameters =
  ContainerBlobPageBlobUploadPagesFromUrlQueryParam &
    ContainerBlobPageBlobUploadPagesFromUrlHeaderParam &
    ContainerBlobPageBlobUploadPagesFromUrlMediaTypesParam &
    RequestParameters;

export interface ContainerBlobPageBlobGetPageRangesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Return only the bytes of the blob in the specified range. */
  "x-ms-range"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobGetPageRangesQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
}

export interface ContainerBlobPageBlobGetPageRangesQueryParam {
  queryParameters?: ContainerBlobPageBlobGetPageRangesQueryParamProperties;
}

export interface ContainerBlobPageBlobGetPageRangesHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobGetPageRangesHeaders;
}

export interface ContainerBlobPageBlobGetPageRangesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobPageBlobGetPageRangesParameters =
  ContainerBlobPageBlobGetPageRangesQueryParam &
    ContainerBlobPageBlobGetPageRangesHeaderParam &
    ContainerBlobPageBlobGetPageRangesMediaTypesParam &
    RequestParameters;

export interface ContainerBlobPageBlobGetPageRangesDiffHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Optional. This header is only supported in service versions 2019-04-19 and after and specifies the URL of a previous snapshot of the target blob. The response will only contain pages that were changed between the target blob and its previous snapshot. */
  "x-ms-previous-snapshot-url"?: string;
  /** Return only the bytes of the blob in the specified range. */
  "x-ms-range"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobGetPageRangesDiffQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Optional in version 2015-07-08 and newer. The prevsnapshot parameter is a DateTime value that specifies that the response will contain only pages that were changed between target blob and previous snapshot. Changed pages include both updated and cleared pages. The target blob may be a snapshot, as long as the snapshot specified by prevsnapshot is the older of the two. Note that incremental snapshots are currently supported only for blobs created on or after January 1, 2016. */
  prevsnapshot?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
}

export interface ContainerBlobPageBlobGetPageRangesDiffQueryParam {
  queryParameters?: ContainerBlobPageBlobGetPageRangesDiffQueryParamProperties;
}

export interface ContainerBlobPageBlobGetPageRangesDiffHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobGetPageRangesDiffHeaders;
}

export interface ContainerBlobPageBlobGetPageRangesDiffMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobPageBlobGetPageRangesDiffParameters =
  ContainerBlobPageBlobGetPageRangesDiffQueryParam &
    ContainerBlobPageBlobGetPageRangesDiffHeaderParam &
    ContainerBlobPageBlobGetPageRangesDiffMediaTypesParam &
    RequestParameters;

export interface ContainerBlobPageBlobResizeHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** This header specifies the maximum size for the page blob, up to 1 TB. The page blob size must be aligned to a 512-byte boundary. */
  "x-ms-blob-content-length": number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobResizeQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobResizeQueryParam {
  queryParameters?: ContainerBlobPageBlobResizeQueryParamProperties;
}

export interface ContainerBlobPageBlobResizeHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobResizeHeaders;
}

export interface ContainerBlobPageBlobResizeMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobPageBlobResizeParameters = ContainerBlobPageBlobResizeQueryParam &
  ContainerBlobPageBlobResizeHeaderParam &
  ContainerBlobPageBlobResizeMediaTypesParam &
  RequestParameters;

export interface ContainerBlobPageBlobUpdateSequenceNumberHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /**
   * Required if the x-ms-blob-sequence-number header is set for the request. This property applies to page blobs only. This property indicates how the service should modify the blob's sequence number
   *
   * Possible values: "increment", "max", "update"
   */
  "x-ms-sequence-number-action": SequenceNumberActionType;
  /** Set for page blobs only. The sequence number is a user-controlled value that you can use to track requests. The value of the sequence number must be between 0 and 2^63 - 1. */
  "x-ms-blob-sequence-number"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobUpdateSequenceNumberQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobUpdateSequenceNumberQueryParam {
  queryParameters?: ContainerBlobPageBlobUpdateSequenceNumberQueryParamProperties;
}

export interface ContainerBlobPageBlobUpdateSequenceNumberHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobUpdateSequenceNumberHeaders;
}

export interface ContainerBlobPageBlobUpdateSequenceNumberMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobPageBlobUpdateSequenceNumberParameters =
  ContainerBlobPageBlobUpdateSequenceNumberQueryParam &
    ContainerBlobPageBlobUpdateSequenceNumberHeaderParam &
    ContainerBlobPageBlobUpdateSequenceNumberMediaTypesParam &
    RequestParameters;

export interface ContainerBlobPageBlobCopyIncrementalHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specifies the name of the source page blob snapshot. This value is a URL of up to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would appear in a request URI. The source blob must either be public or must be authenticated via a shared access signature. */
  "x-ms-copy-source": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobPageBlobCopyIncrementalQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobPageBlobCopyIncrementalQueryParam {
  queryParameters?: ContainerBlobPageBlobCopyIncrementalQueryParamProperties;
}

export interface ContainerBlobPageBlobCopyIncrementalHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobPageBlobCopyIncrementalHeaders;
}

export interface ContainerBlobPageBlobCopyIncrementalMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobPageBlobCopyIncrementalParameters =
  ContainerBlobPageBlobCopyIncrementalQueryParam &
    ContainerBlobPageBlobCopyIncrementalHeaderParam &
    ContainerBlobPageBlobCopyIncrementalMediaTypesParam &
    RequestParameters;

export interface ContainerBlobAppendBlobCreateHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** The type of the blob. */
  "x-ms-blob-type": "AppendBlob";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAppendBlobCreateQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobAppendBlobCreateQueryParam {
  queryParameters?: ContainerBlobAppendBlobCreateQueryParamProperties;
}

export interface ContainerBlobAppendBlobCreateHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAppendBlobCreateHeaders;
}

export interface ContainerBlobAppendBlobCreateMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobAppendBlobCreateParameters = ContainerBlobAppendBlobCreateQueryParam &
  ContainerBlobAppendBlobCreateHeaderParam &
  ContainerBlobAppendBlobCreateMediaTypesParam &
  RequestParameters;

export interface ContainerBlobAppendBlobAppendBlockHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  "x-ms-blob-condition-maxsize"?: number;
  /** Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  "x-ms-blob-condition-appendpos"?: number;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Required if the request body is a structured message. Specifies the message schema version and properties. */
  "x-ms-structured-body"?: string;
  /** Required if the request body is a structured message. Specifies the length of the blob/file content inside the message body. Will always be smaller than Content-Length. */
  "x-ms-structured-content-length"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAppendBlobAppendBlockBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface ContainerBlobAppendBlobAppendBlockQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobAppendBlobAppendBlockQueryParam {
  queryParameters?: ContainerBlobAppendBlobAppendBlockQueryParamProperties;
}

export interface ContainerBlobAppendBlobAppendBlockHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAppendBlobAppendBlockHeaders;
}

export interface ContainerBlobAppendBlobAppendBlockMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobAppendBlobAppendBlockParameters =
  ContainerBlobAppendBlobAppendBlockQueryParam &
    ContainerBlobAppendBlobAppendBlockHeaderParam &
    ContainerBlobAppendBlobAppendBlockMediaTypesParam &
    ContainerBlobAppendBlobAppendBlockBodyParam &
    RequestParameters;

export interface ContainerBlobAppendBlobAppendBlockFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Specify a URL to the copy source. */
  "x-ms-copy-source": string;
  /** Bytes of source data in the specified range. */
  "x-ms-source-range"?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-md5"?: string;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-crc64"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional conditional header. The max length in bytes permitted for the append blob. If the Append Block operation would cause the blob to exceed that limit or if the blob size is already greater than the value specified in this header, the request will fail with MaxBlobSizeConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  "x-ms-blob-condition-maxsize"?: number;
  /** Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  "x-ms-blob-condition-appendpos"?: number;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** Only Bearer type is supported. Credentials should be a valid OAuth access token to copy source. */
  "x-ms-copy-source-authorization"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAppendBlobAppendBlockFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobAppendBlobAppendBlockFromUrlQueryParam {
  queryParameters?: ContainerBlobAppendBlobAppendBlockFromUrlQueryParamProperties;
}

export interface ContainerBlobAppendBlobAppendBlockFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAppendBlobAppendBlockFromUrlHeaders;
}

export interface ContainerBlobAppendBlobAppendBlockFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobAppendBlobAppendBlockFromUrlParameters =
  ContainerBlobAppendBlobAppendBlockFromUrlQueryParam &
    ContainerBlobAppendBlobAppendBlockFromUrlHeaderParam &
    ContainerBlobAppendBlobAppendBlockFromUrlMediaTypesParam &
    RequestParameters;

export interface ContainerBlobAppendBlobSealHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Optional conditional header, used only for the Append Block operation. A number indicating the byte offset to compare. Append Block will succeed only if the append position is equal to this number. If it is not, the request will fail with the AppendPositionConditionNotMet error (HTTP status code 412 - Precondition Failed). */
  "x-ms-blob-condition-appendpos"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobAppendBlobSealQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobAppendBlobSealQueryParam {
  queryParameters?: ContainerBlobAppendBlobSealQueryParamProperties;
}

export interface ContainerBlobAppendBlobSealHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobAppendBlobSealHeaders;
}

export interface ContainerBlobAppendBlobSealMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobAppendBlobSealParameters = ContainerBlobAppendBlobSealQueryParam &
  ContainerBlobAppendBlobSealHeaderParam &
  ContainerBlobAppendBlobSealMediaTypesParam &
  RequestParameters;

export interface ContainerBlobBlockBlobUploadHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /**
   * The tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier"?: AccessTier;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** The type of the blob. */
  "x-ms-blob-type": "BlockBlob";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobUploadBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface ContainerBlobBlockBlobUploadQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobUploadQueryParam {
  queryParameters?: ContainerBlobBlockBlobUploadQueryParamProperties;
}

export interface ContainerBlobBlockBlobUploadHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobUploadHeaders;
}

export interface ContainerBlobBlockBlobUploadMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobBlockBlobUploadParameters = ContainerBlobBlockBlobUploadQueryParam &
  ContainerBlobBlockBlobUploadHeaderParam &
  ContainerBlobBlockBlobUploadMediaTypesParam &
  ContainerBlobBlockBlobUploadBodyParam &
  RequestParameters;

export interface ContainerBlobBlockBlobPutBlobFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /**
   * The tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier"?: AccessTier;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-source-if-tags"?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-md5"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the name of the source page blob snapshot. This value is a URL of up to 2 KB in length that specifies a page blob snapshot. The value should be URL-encoded as it would appear in a request URI. The source blob must either be public or must be authenticated via a shared access signature. */
  "x-ms-copy-source": string;
  /** Optional, default is true.  Indicates if properties from the source blob should be copied. */
  "x-ms-copy-source-blob-properties"?: boolean;
  /** Only Bearer type is supported. Credentials should be a valid OAuth access token to copy source. */
  "x-ms-copy-source-authorization"?: string;
  /** Optional, default 'replace'.  Indicates if source tags should be copied or replaced with the tags specified by x-ms-tags. */
  "x-ms-copy-source-tags"?: string;
  /** The type of the blob. */
  "x-ms-blob-type": "BlockBlob";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobPutBlobFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobPutBlobFromUrlQueryParam {
  queryParameters?: ContainerBlobBlockBlobPutBlobFromUrlQueryParamProperties;
}

export interface ContainerBlobBlockBlobPutBlobFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobPutBlobFromUrlHeaders;
}

export interface ContainerBlobBlockBlobPutBlobFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobBlockBlobPutBlobFromUrlParameters =
  ContainerBlobBlockBlobPutBlobFromUrlQueryParam &
    ContainerBlobBlockBlobPutBlobFromUrlHeaderParam &
    ContainerBlobBlockBlobPutBlobFromUrlMediaTypesParam &
    RequestParameters;

export interface ContainerBlobBlockBlobStageBlockHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The length of the request. */
  "Content-Length": number;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobStageBlockBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body: string | Uint8Array | ReadableStream<Uint8Array> | NodeJS.ReadableStream;
}

export interface ContainerBlobBlockBlobStageBlockQueryParamProperties {
  /** A valid Base64 string value that identifies the block. Prior to encoding, the string must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified for the blockid parameter must be the same size for each block. */
  blockid: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobStageBlockQueryParam {
  queryParameters: ContainerBlobBlockBlobStageBlockQueryParamProperties;
}

export interface ContainerBlobBlockBlobStageBlockHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobStageBlockHeaders;
}

export interface ContainerBlobBlockBlobStageBlockMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type ContainerBlobBlockBlobStageBlockParameters =
  ContainerBlobBlockBlobStageBlockQueryParam &
    ContainerBlobBlockBlobStageBlockHeaderParam &
    ContainerBlobBlockBlobStageBlockMediaTypesParam &
    ContainerBlobBlockBlobStageBlockBodyParam &
    RequestParameters;

export interface ContainerBlobBlockBlobStageBlockFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** The length of the request. */
  "Content-Length": number;
  /** Specify a URL to the copy source. */
  "x-ms-copy-source": string;
  /** Bytes of source data in the specified range. */
  "x-ms-source-range"?: string;
  /** Specify the md5 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-md5"?: string;
  /** Specify the crc64 calculated for the range of bytes that must be read from the copy source. */
  "x-ms-source-content-crc64"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-modified-since"?: string;
  /** Specify this header value to operate only on a blob if it has not been modified since the specified date/time. */
  "x-ms-source-if-unmodified-since"?: string;
  /** Specify an ETag value to operate only on blobs with a matching value. */
  "x-ms-source-if-match"?: string;
  /** Specify this header value to operate only on a blob if it has been modified since the specified date/time. */
  "x-ms-source-if-none-match"?: string;
  /** Only Bearer type is supported. Credentials should be a valid OAuth access token to copy source. */
  "x-ms-copy-source-authorization"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobStageBlockFromUrlQueryParamProperties {
  /** A valid Base64 string value that identifies the block. Prior to encoding, the string must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified for the blockid parameter must be the same size for each block. */
  blockid: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobStageBlockFromUrlQueryParam {
  queryParameters: ContainerBlobBlockBlobStageBlockFromUrlQueryParamProperties;
}

export interface ContainerBlobBlockBlobStageBlockFromUrlHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobStageBlockFromUrlHeaders;
}

export interface ContainerBlobBlockBlobStageBlockFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobBlockBlobStageBlockFromUrlParameters =
  ContainerBlobBlockBlobStageBlockFromUrlQueryParam &
    ContainerBlobBlockBlobStageBlockFromUrlHeaderParam &
    ContainerBlobBlockBlobStageBlockFromUrlMediaTypesParam &
    RequestParameters;

export interface ContainerBlobBlockBlobCommitBlockListHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Optional. Sets the blob's cache control. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-cache-control"?: string;
  /** Optional. Sets the blob's content type. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-type"?: string;
  /** Optional. Sets the blob's content encoding. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-encoding"?: string;
  /** Optional. Set the blob's content language. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-language"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "x-ms-blob-content-md5"?: string;
  /** Optional. An MD5 hash of the blob content. Note that this hash is not validated, as the hashes for the individual blocks were validated when each was uploaded. */
  "Content-MD5"?: string;
  /** Specify the transactional crc64 for the body, to be validated by the service. */
  "x-ms-content-crc64"?: string;
  /** The metadata headers. */
  "x-ms-meta"?: string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional. Sets the blob's content disposition. If specified, this property is stored with the blob and returned with a read request. */
  "x-ms-blob-content-disposition"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption scope to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-scope"?: string;
  /**
   * The tier to be set on the blob.
   *
   * Possible values: "P4", "P6", "P10", "P15", "P20", "P30", "P40", "P50", "P60", "P70", "P80", "Hot", "Cool", "Archive", "Premium", "Cold"
   */
  "x-ms-access-tier"?: AccessTier;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** Optional.  Used to set blob tags in various blob operations. */
  "x-ms-tags"?: string;
  /** Specifies the date time when the blobs immutability policy is set to expire. */
  "x-ms-immutability-policy-until-date"?: string;
  /**
   * Specifies the immutability policy mode to set on the blob.
   *
   * Possible values: "Mutable", "Locked", "Unlocked"
   */
  "x-ms-immutability-policy-mode"?: BlobImmutabilityPolicyMode;
  /** Specified if a legal hold should be set on the blob. */
  "x-ms-legal-hold"?: boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobCommitBlockListBodyParam {
  /** Blob Blocks. */
  body: BlockLookupList;
}

export interface ContainerBlobBlockBlobCommitBlockListQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobCommitBlockListQueryParam {
  queryParameters?: ContainerBlobBlockBlobCommitBlockListQueryParamProperties;
}

export interface ContainerBlobBlockBlobCommitBlockListHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobCommitBlockListHeaders;
}

export interface ContainerBlobBlockBlobCommitBlockListMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobBlockBlobCommitBlockListParameters =
  ContainerBlobBlockBlobCommitBlockListQueryParam &
    ContainerBlobBlockBlobCommitBlockListHeaderParam &
    ContainerBlobBlockBlobCommitBlockListMediaTypesParam &
    ContainerBlobBlockBlobCommitBlockListBodyParam &
    RequestParameters;

export interface ContainerBlobBlockBlobGetBlockListHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobGetBlockListQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /**
   * Specifies whether to return the list of committed blocks, the list of uncommitted blocks, or both lists together.
   *
   * Possible values: "committed", "uncommitted", "all"
   */
  blocklisttype: BlockListType;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobGetBlockListQueryParam {
  queryParameters: ContainerBlobBlockBlobGetBlockListQueryParamProperties;
}

export interface ContainerBlobBlockBlobGetBlockListHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobGetBlockListHeaders;
}

export interface ContainerBlobBlockBlobGetBlockListMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobBlockBlobGetBlockListParameters =
  ContainerBlobBlockBlobGetBlockListQueryParam &
    ContainerBlobBlockBlobGetBlockListHeaderParam &
    ContainerBlobBlockBlobGetBlockListMediaTypesParam &
    RequestParameters;

export interface ContainerBlobBlockBlobQueryHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the encryption key to use to encrypt the data provided in the request. If not specified, the request will be encrypted with the root account key. */
  "x-ms-encryption-key"?: string;
  /** Optional.  Version 2019-07-07 and later.  Specifies the SHA256 hash of the encryption key used to encrypt the data provided in the request. This header is only used for encryption with a customer-provided key. If the request is authenticated with a client token, this header should be specified using the SHA256 hash of the encryption key. */
  "x-ms-encryption-key-sha256"?: string;
  /**
   * Optional.  Version 2019-07-07 and later.  Specifies the algorithm to use for encryption. If not specified, the default is AES256.
   *
   * Possible values: "AES256"
   */
  "x-ms-encryption-algorithm"?: EncryptionAlgorithmType;
  /** The request should only proceed if an entity matches this string. */
  "If-Match"?: string;
  /** The request should only proceed if no entity matches this string. */
  "If-None-Match"?: string;
  /** The request should only proceed if the entity was not modified after this time. */
  "If-Unmodified-Since"?: string;
  /** The request should only proceed if the entity was modified after this time. */
  "If-Modified-Since"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ContainerBlobBlockBlobQueryBodyParam {
  /** The query request */
  body: QueryRequest;
}

export interface ContainerBlobBlockBlobQueryQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ContainerBlobBlockBlobQueryQueryParam {
  queryParameters?: ContainerBlobBlockBlobQueryQueryParamProperties;
}

export interface ContainerBlobBlockBlobQueryHeaderParam {
  headers: RawHttpHeadersInput & ContainerBlobBlockBlobQueryHeaders;
}

export interface ContainerBlobBlockBlobQueryMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ContainerBlobBlockBlobQueryParameters = ContainerBlobBlockBlobQueryQueryParam &
  ContainerBlobBlockBlobQueryHeaderParam &
  ContainerBlobBlockBlobQueryMediaTypesParam &
  ContainerBlobBlockBlobQueryBodyParam &
  RequestParameters;
