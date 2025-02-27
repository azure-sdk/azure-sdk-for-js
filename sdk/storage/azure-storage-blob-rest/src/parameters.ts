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

export interface ServiceSetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ServiceSetPropertiesBodyParam {
  body: StorageServiceProperties;
}

export interface ServiceSetPropertiesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceSetPropertiesQueryParam {
  queryParameters?: ServiceSetPropertiesQueryParamProperties;
}

export interface ServiceSetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & ServiceSetPropertiesHeaders;
}

export interface ServiceSetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceSetPropertiesParameters = ServiceSetPropertiesQueryParam &
  ServiceSetPropertiesHeaderParam &
  ServiceSetPropertiesMediaTypesParam &
  ServiceSetPropertiesBodyParam &
  RequestParameters;

export interface ServiceGetPropertiesHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ServiceGetPropertiesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceGetPropertiesQueryParam {
  queryParameters?: ServiceGetPropertiesQueryParamProperties;
}

export interface ServiceGetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & ServiceGetPropertiesHeaders;
}

export interface ServiceGetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceGetPropertiesParameters = ServiceGetPropertiesQueryParam &
  ServiceGetPropertiesHeaderParam &
  ServiceGetPropertiesMediaTypesParam &
  RequestParameters;

export interface ServiceGetStatisticsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ServiceGetStatisticsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceGetStatisticsQueryParam {
  queryParameters?: ServiceGetStatisticsQueryParamProperties;
}

export interface ServiceGetStatisticsHeaderParam {
  headers: RawHttpHeadersInput & ServiceGetStatisticsHeaders;
}

export interface ServiceGetStatisticsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceGetStatisticsParameters = ServiceGetStatisticsQueryParam &
  ServiceGetStatisticsHeaderParam &
  ServiceGetStatisticsMediaTypesParam &
  RequestParameters;

export interface ServiceListContainersSegmentHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ServiceListContainersSegmentIncludeQueryParam {
  /** Value of the parameter */
  value: ListContainersIncludeType[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ServiceListContainersSegmentQueryParamProperties {
  /** Filters the results to return only containers whose name begins with the specified prefix. */
  prefix?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Include this parameter to specify that the container's metadata be returned as part of the response body. */
  include?:
    | ListContainersIncludeType[]
    | ServiceListContainersSegmentIncludeQueryParam;
}

export interface ServiceListContainersSegmentQueryParam {
  queryParameters?: ServiceListContainersSegmentQueryParamProperties;
}

export interface ServiceListContainersSegmentHeaderParam {
  headers: RawHttpHeadersInput & ServiceListContainersSegmentHeaders;
}

export interface ServiceListContainersSegmentMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceListContainersSegmentParameters =
  ServiceListContainersSegmentQueryParam &
    ServiceListContainersSegmentHeaderParam &
    ServiceListContainersSegmentMediaTypesParam &
    RequestParameters;

export interface ServiceGetUserDelegationKeyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ServiceGetUserDelegationKeyBodyParam {
  body: KeyInfo;
}

export interface ServiceGetUserDelegationKeyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceGetUserDelegationKeyQueryParam {
  queryParameters?: ServiceGetUserDelegationKeyQueryParamProperties;
}

export interface ServiceGetUserDelegationKeyHeaderParam {
  headers: RawHttpHeadersInput & ServiceGetUserDelegationKeyHeaders;
}

export interface ServiceGetUserDelegationKeyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceGetUserDelegationKeyParameters =
  ServiceGetUserDelegationKeyQueryParam &
    ServiceGetUserDelegationKeyHeaderParam &
    ServiceGetUserDelegationKeyMediaTypesParam &
    ServiceGetUserDelegationKeyBodyParam &
    RequestParameters;

export interface ServiceGetAccountInfoHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface ServiceGetAccountInfoQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceGetAccountInfoQueryParam {
  queryParameters?: ServiceGetAccountInfoQueryParamProperties;
}

export interface ServiceGetAccountInfoHeaderParam {
  headers: RawHttpHeadersInput & ServiceGetAccountInfoHeaders;
}

export interface ServiceGetAccountInfoMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceGetAccountInfoParameters = ServiceGetAccountInfoQueryParam &
  ServiceGetAccountInfoHeaderParam &
  ServiceGetAccountInfoMediaTypesParam &
  RequestParameters;

export interface ServiceSubmitBatchHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
  /** The length of the request. */
  "Content-Length": number;
}

export interface ServiceSubmitBatchBodyParam {
  /** The body of the request. */
  body: string;
}

export interface ServiceSubmitBatchQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface ServiceSubmitBatchQueryParam {
  queryParameters?: ServiceSubmitBatchQueryParamProperties;
}

export interface ServiceSubmitBatchHeaderParam {
  headers: RawHttpHeadersInput & ServiceSubmitBatchHeaders;
}

export interface ServiceSubmitBatchMediaTypesParam {
  /** Required. The value of this header must be multipart/mixed with a batch boundary. Example header value: multipart/mixed; boundary=batch_<GUID> */
  contentType: "multipart/mixed";
}

export type ServiceSubmitBatchParameters = ServiceSubmitBatchQueryParam &
  ServiceSubmitBatchHeaderParam &
  ServiceSubmitBatchMediaTypesParam &
  ServiceSubmitBatchBodyParam &
  RequestParameters;

export interface ServiceFilterBlobsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

/** This is the wrapper object for the parameter `include` with explode set to false and style set to form. */
export interface ServiceFilterBlobsIncludeQueryParam {
  /** Value of the parameter */
  value: FilterBlobsIncludeItem[];
  /** Should we explode the value? */
  explode: false;
  /** Style of the value */
  style: "form";
}

export interface ServiceFilterBlobsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** Filters the results to return only to return only blobs whose tags match the specified expression. */
  where?: string;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
  /** Include this parameter to specify one or more datasets to include in the response. */
  include?: FilterBlobsIncludeItem[] | ServiceFilterBlobsIncludeQueryParam;
}

export interface ServiceFilterBlobsQueryParam {
  queryParameters?: ServiceFilterBlobsQueryParamProperties;
}

export interface ServiceFilterBlobsHeaderParam {
  headers: RawHttpHeadersInput & ServiceFilterBlobsHeaders;
}

export interface ServiceFilterBlobsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type ServiceFilterBlobsParameters = ServiceFilterBlobsQueryParam &
  ServiceFilterBlobsHeaderParam &
  ServiceFilterBlobsMediaTypesParam &
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

export type ContainerGetPropertiesParameters =
  ContainerGetPropertiesQueryParam &
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

export type ContainerGetAccessPolicyParameters =
  ContainerGetAccessPolicyQueryParam &
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

export type ContainerSetAccessPolicyParameters =
  ContainerSetAccessPolicyQueryParam &
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
  body: string;
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
  include?:
    | ListBlobsIncludeItem[]
    | ContainerListBlobFlatSegmentIncludeQueryParam;
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

export type ContainerListBlobFlatSegmentParameters =
  ContainerListBlobFlatSegmentQueryParam &
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
  include?:
    | ListBlobsIncludeItem[]
    | ContainerListBlobHierarchySegmentIncludeQueryParam;
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

export type ContainerGetAccountInfoParameters =
  ContainerGetAccountInfoQueryParam &
    ContainerGetAccountInfoHeaderParam &
    ContainerGetAccountInfoMediaTypesParam &
    RequestParameters;

export interface BlobDownloadHeaders {
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
  /** Specifies the response content should be returned as a structured message and specifies the message schema version and properties. */
  "x-ms-structured-body"?: string;
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

export interface BlobDownloadQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobDownloadQueryParam {
  queryParameters?: BlobDownloadQueryParamProperties;
}

export interface BlobDownloadHeaderParam {
  headers: RawHttpHeadersInput & BlobDownloadHeaders;
}

export type BlobDownloadParameters = BlobDownloadQueryParam &
  BlobDownloadHeaderParam &
  RequestParameters;

export interface BlobGetPropertiesHeaders {
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

export interface BlobGetPropertiesQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobGetPropertiesQueryParam {
  queryParameters?: BlobGetPropertiesQueryParamProperties;
}

export interface BlobGetPropertiesHeaderParam {
  headers: RawHttpHeadersInput & BlobGetPropertiesHeaders;
}

export interface BlobGetPropertiesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type BlobGetPropertiesParameters = BlobGetPropertiesQueryParam &
  BlobGetPropertiesHeaderParam &
  BlobGetPropertiesMediaTypesParam &
  RequestParameters;

export interface BlobDeleteHeaders {
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

export interface BlobDeleteQueryParamProperties {
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

export interface BlobDeleteQueryParam {
  queryParameters?: BlobDeleteQueryParamProperties;
}

export interface BlobDeleteHeaderParam {
  headers: RawHttpHeadersInput & BlobDeleteHeaders;
}

export interface BlobDeleteMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobDeleteParameters = BlobDeleteQueryParam &
  BlobDeleteHeaderParam &
  BlobDeleteMediaTypesParam &
  RequestParameters;

export interface BlobUndeleteHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobUndeleteQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobUndeleteQueryParam {
  queryParameters?: BlobUndeleteQueryParamProperties;
}

export interface BlobUndeleteHeaderParam {
  headers: RawHttpHeadersInput & BlobUndeleteHeaders;
}

export interface BlobUndeleteMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobUndeleteParameters = BlobUndeleteQueryParam &
  BlobUndeleteHeaderParam &
  BlobUndeleteMediaTypesParam &
  RequestParameters;

export interface BlobSetExpiryHeaders {
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

export interface BlobSetExpiryQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobSetExpiryQueryParam {
  queryParameters?: BlobSetExpiryQueryParamProperties;
}

export interface BlobSetExpiryHeaderParam {
  headers: RawHttpHeadersInput & BlobSetExpiryHeaders;
}

export interface BlobSetExpiryMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetExpiryParameters = BlobSetExpiryQueryParam &
  BlobSetExpiryHeaderParam &
  BlobSetExpiryMediaTypesParam &
  RequestParameters;

export interface BlobSetHttpHeadersHeaders {
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

export interface BlobSetHttpHeadersQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobSetHttpHeadersQueryParam {
  queryParameters?: BlobSetHttpHeadersQueryParamProperties;
}

export interface BlobSetHttpHeadersHeaderParam {
  headers: RawHttpHeadersInput & BlobSetHttpHeadersHeaders;
}

export interface BlobSetHttpHeadersMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetHttpHeadersParameters = BlobSetHttpHeadersQueryParam &
  BlobSetHttpHeadersHeaderParam &
  BlobSetHttpHeadersMediaTypesParam &
  RequestParameters;

export interface BlobSetImmutabilityPolicyHeaders {
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

export interface BlobSetImmutabilityPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface BlobSetImmutabilityPolicyQueryParam {
  queryParameters?: BlobSetImmutabilityPolicyQueryParamProperties;
}

export interface BlobSetImmutabilityPolicyHeaderParam {
  headers: RawHttpHeadersInput & BlobSetImmutabilityPolicyHeaders;
}

export interface BlobSetImmutabilityPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetImmutabilityPolicyParameters =
  BlobSetImmutabilityPolicyQueryParam &
    BlobSetImmutabilityPolicyHeaderParam &
    BlobSetImmutabilityPolicyMediaTypesParam &
    RequestParameters;

export interface BlobDeleteImmutabilityPolicyHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobDeleteImmutabilityPolicyQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface BlobDeleteImmutabilityPolicyQueryParam {
  queryParameters?: BlobDeleteImmutabilityPolicyQueryParamProperties;
}

export interface BlobDeleteImmutabilityPolicyHeaderParam {
  headers: RawHttpHeadersInput & BlobDeleteImmutabilityPolicyHeaders;
}

export interface BlobDeleteImmutabilityPolicyMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobDeleteImmutabilityPolicyParameters =
  BlobDeleteImmutabilityPolicyQueryParam &
    BlobDeleteImmutabilityPolicyHeaderParam &
    BlobDeleteImmutabilityPolicyMediaTypesParam &
    RequestParameters;

export interface BlobSetLegalHoldHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** Required.  Specifies the legal hold status to set on the blob. */
  "x-ms-legal-hold": boolean;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobSetLegalHoldQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface BlobSetLegalHoldQueryParam {
  queryParameters?: BlobSetLegalHoldQueryParamProperties;
}

export interface BlobSetLegalHoldHeaderParam {
  headers: RawHttpHeadersInput & BlobSetLegalHoldHeaders;
}

export interface BlobSetLegalHoldMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetLegalHoldParameters = BlobSetLegalHoldQueryParam &
  BlobSetLegalHoldHeaderParam &
  BlobSetLegalHoldMediaTypesParam &
  RequestParameters;

export interface BlobSetMetadataHeaders {
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

export interface BlobSetMetadataQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobSetMetadataQueryParam {
  queryParameters?: BlobSetMetadataQueryParamProperties;
}

export interface BlobSetMetadataHeaderParam {
  headers: RawHttpHeadersInput & BlobSetMetadataHeaders;
}

export interface BlobSetMetadataMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetMetadataParameters = BlobSetMetadataQueryParam &
  BlobSetMetadataHeaderParam &
  BlobSetMetadataMediaTypesParam &
  RequestParameters;

export interface BlobAcquireLeaseHeaders {
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

export interface BlobAcquireLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobAcquireLeaseQueryParam {
  queryParameters?: BlobAcquireLeaseQueryParamProperties;
}

export interface BlobAcquireLeaseHeaderParam {
  headers: RawHttpHeadersInput & BlobAcquireLeaseHeaders;
}

export interface BlobAcquireLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobAcquireLeaseParameters = BlobAcquireLeaseQueryParam &
  BlobAcquireLeaseHeaderParam &
  BlobAcquireLeaseMediaTypesParam &
  RequestParameters;

export interface BlobReleaseLeaseHeaders {
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

export interface BlobReleaseLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobReleaseLeaseQueryParam {
  queryParameters?: BlobReleaseLeaseQueryParamProperties;
}

export interface BlobReleaseLeaseHeaderParam {
  headers: RawHttpHeadersInput & BlobReleaseLeaseHeaders;
}

export interface BlobReleaseLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobReleaseLeaseParameters = BlobReleaseLeaseQueryParam &
  BlobReleaseLeaseHeaderParam &
  BlobReleaseLeaseMediaTypesParam &
  RequestParameters;

export interface BlobRenewLeaseHeaders {
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

export interface BlobRenewLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobRenewLeaseQueryParam {
  queryParameters?: BlobRenewLeaseQueryParamProperties;
}

export interface BlobRenewLeaseHeaderParam {
  headers: RawHttpHeadersInput & BlobRenewLeaseHeaders;
}

export interface BlobRenewLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobRenewLeaseParameters = BlobRenewLeaseQueryParam &
  BlobRenewLeaseHeaderParam &
  BlobRenewLeaseMediaTypesParam &
  RequestParameters;

export interface BlobChangeLeaseHeaders {
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

export interface BlobChangeLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobChangeLeaseQueryParam {
  queryParameters?: BlobChangeLeaseQueryParamProperties;
}

export interface BlobChangeLeaseHeaderParam {
  headers: RawHttpHeadersInput & BlobChangeLeaseHeaders;
}

export interface BlobChangeLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobChangeLeaseParameters = BlobChangeLeaseQueryParam &
  BlobChangeLeaseHeaderParam &
  BlobChangeLeaseMediaTypesParam &
  RequestParameters;

export interface BlobBreakLeaseHeaders {
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

export interface BlobBreakLeaseQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobBreakLeaseQueryParam {
  queryParameters?: BlobBreakLeaseQueryParamProperties;
}

export interface BlobBreakLeaseHeaderParam {
  headers: RawHttpHeadersInput & BlobBreakLeaseHeaders;
}

export interface BlobBreakLeaseMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobBreakLeaseParameters = BlobBreakLeaseQueryParam &
  BlobBreakLeaseHeaderParam &
  BlobBreakLeaseMediaTypesParam &
  RequestParameters;

export interface BlobCreateSnapshotHeaders {
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

export interface BlobCreateSnapshotQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobCreateSnapshotQueryParam {
  queryParameters?: BlobCreateSnapshotQueryParamProperties;
}

export interface BlobCreateSnapshotHeaderParam {
  headers: RawHttpHeadersInput & BlobCreateSnapshotHeaders;
}

export interface BlobCreateSnapshotMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobCreateSnapshotParameters = BlobCreateSnapshotQueryParam &
  BlobCreateSnapshotHeaderParam &
  BlobCreateSnapshotMediaTypesParam &
  RequestParameters;

export interface BlobStartCopyFromUrlHeaders {
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

export interface BlobStartCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobStartCopyFromUrlQueryParam {
  queryParameters?: BlobStartCopyFromUrlQueryParamProperties;
}

export interface BlobStartCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & BlobStartCopyFromUrlHeaders;
}

export interface BlobStartCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobStartCopyFromUrlParameters = BlobStartCopyFromUrlQueryParam &
  BlobStartCopyFromUrlHeaderParam &
  BlobStartCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface BlobCopyFromUrlHeaders {
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

export interface BlobCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobCopyFromUrlQueryParam {
  queryParameters?: BlobCopyFromUrlQueryParamProperties;
}

export interface BlobCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & BlobCopyFromUrlHeaders;
}

export interface BlobCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobCopyFromUrlParameters = BlobCopyFromUrlQueryParam &
  BlobCopyFromUrlHeaderParam &
  BlobCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface BlobAbortCopyFromUrlHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobAbortCopyFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The copy identifier provided in the x-ms-copy-id header of the original Copy Blob operation. */
  copyid: string;
}

export interface BlobAbortCopyFromUrlQueryParam {
  queryParameters: BlobAbortCopyFromUrlQueryParamProperties;
}

export interface BlobAbortCopyFromUrlHeaderParam {
  headers: RawHttpHeadersInput & BlobAbortCopyFromUrlHeaders;
}

export interface BlobAbortCopyFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobAbortCopyFromUrlParameters = BlobAbortCopyFromUrlQueryParam &
  BlobAbortCopyFromUrlHeaderParam &
  BlobAbortCopyFromUrlMediaTypesParam &
  RequestParameters;

export interface BlobSetTierHeaders {
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

export interface BlobSetTierQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobSetTierQueryParam {
  queryParameters?: BlobSetTierQueryParamProperties;
}

export interface BlobSetTierHeaderParam {
  headers: RawHttpHeadersInput & BlobSetTierHeaders;
}

export interface BlobSetTierMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetTierParameters = BlobSetTierQueryParam &
  BlobSetTierHeaderParam &
  BlobSetTierMediaTypesParam &
  RequestParameters;

export interface BlobGetAccountInfoHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobGetAccountInfoQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlobGetAccountInfoQueryParam {
  queryParameters?: BlobGetAccountInfoQueryParamProperties;
}

export interface BlobGetAccountInfoHeaderParam {
  headers: RawHttpHeadersInput & BlobGetAccountInfoHeaders;
}

export interface BlobGetAccountInfoMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobGetAccountInfoParameters = BlobGetAccountInfoQueryParam &
  BlobGetAccountInfoHeaderParam &
  BlobGetAccountInfoMediaTypesParam &
  RequestParameters;

export interface BlobGetTagsHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlobGetTagsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface BlobGetTagsQueryParam {
  queryParameters?: BlobGetTagsQueryParamProperties;
}

export interface BlobGetTagsHeaderParam {
  headers: RawHttpHeadersInput & BlobGetTagsHeaders;
}

export interface BlobGetTagsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobGetTagsParameters = BlobGetTagsQueryParam &
  BlobGetTagsHeaderParam &
  BlobGetTagsMediaTypesParam &
  RequestParameters;

export interface BlobSetTagsHeaders {
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

export interface BlobSetTagsBodyParam {
  /** The blob tags. */
  body: BlobTags;
}

export interface BlobSetTagsQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** The version id parameter is an opaque DateTime value that, when present, specifies the version of the blob to operate on. It's for service version 2019-10-10 and newer. */
  versionid?: string;
}

export interface BlobSetTagsQueryParam {
  queryParameters?: BlobSetTagsQueryParamProperties;
}

export interface BlobSetTagsHeaderParam {
  headers: RawHttpHeadersInput & BlobSetTagsHeaders;
}

export interface BlobSetTagsMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlobSetTagsParameters = BlobSetTagsQueryParam &
  BlobSetTagsHeaderParam &
  BlobSetTagsMediaTypesParam &
  BlobSetTagsBodyParam &
  RequestParameters;

export interface PageBlobCreateHeaders {
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

export interface PageBlobCreateQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobCreateQueryParam {
  queryParameters?: PageBlobCreateQueryParamProperties;
}

export interface PageBlobCreateHeaderParam {
  headers: RawHttpHeadersInput & PageBlobCreateHeaders;
}

export interface PageBlobCreateMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type PageBlobCreateParameters = PageBlobCreateQueryParam &
  PageBlobCreateHeaderParam &
  PageBlobCreateMediaTypesParam &
  RequestParameters;

export interface PageBlobUploadPagesHeaders {
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

export interface PageBlobUploadPagesBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface PageBlobUploadPagesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobUploadPagesQueryParam {
  queryParameters?: PageBlobUploadPagesQueryParamProperties;
}

export interface PageBlobUploadPagesHeaderParam {
  headers: RawHttpHeadersInput & PageBlobUploadPagesHeaders;
}

export interface PageBlobUploadPagesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type PageBlobUploadPagesParameters = PageBlobUploadPagesQueryParam &
  PageBlobUploadPagesHeaderParam &
  PageBlobUploadPagesMediaTypesParam &
  PageBlobUploadPagesBodyParam &
  RequestParameters;

export interface PageBlobClearPagesHeaders {
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

export interface PageBlobClearPagesQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobClearPagesQueryParam {
  queryParameters?: PageBlobClearPagesQueryParamProperties;
}

export interface PageBlobClearPagesHeaderParam {
  headers: RawHttpHeadersInput & PageBlobClearPagesHeaders;
}

export interface PageBlobClearPagesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type PageBlobClearPagesParameters = PageBlobClearPagesQueryParam &
  PageBlobClearPagesHeaderParam &
  PageBlobClearPagesMediaTypesParam &
  RequestParameters;

export interface PageBlobUploadPagesFromUrlHeaders {
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

export interface PageBlobUploadPagesFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobUploadPagesFromUrlQueryParam {
  queryParameters?: PageBlobUploadPagesFromUrlQueryParamProperties;
}

export interface PageBlobUploadPagesFromUrlHeaderParam {
  headers: RawHttpHeadersInput & PageBlobUploadPagesFromUrlHeaders;
}

export interface PageBlobUploadPagesFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type PageBlobUploadPagesFromUrlParameters =
  PageBlobUploadPagesFromUrlQueryParam &
    PageBlobUploadPagesFromUrlHeaderParam &
    PageBlobUploadPagesFromUrlMediaTypesParam &
    RequestParameters;

export interface PageBlobGetPageRangesHeaders {
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

export interface PageBlobGetPageRangesQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
  /** A string value that identifies the portion of the list of containers to be returned with the next listing operation. The operation returns the NextMarker value within the response body if the listing operation did not return all containers remaining to be listed with the current page. The NextMarker value can be used as the value for the marker parameter in a subsequent call to request the next page of list items. The marker value is opaque to the client. */
  marker?: string;
  /** Specifies the maximum number of containers to return. If the request does not specify maxresults, or specifies a value greater than 5000, the server will return up to 5000 items. */
  maxresults?: number;
}

export interface PageBlobGetPageRangesQueryParam {
  queryParameters?: PageBlobGetPageRangesQueryParamProperties;
}

export interface PageBlobGetPageRangesHeaderParam {
  headers: RawHttpHeadersInput & PageBlobGetPageRangesHeaders;
}

export interface PageBlobGetPageRangesMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type PageBlobGetPageRangesParameters = PageBlobGetPageRangesQueryParam &
  PageBlobGetPageRangesHeaderParam &
  PageBlobGetPageRangesMediaTypesParam &
  RequestParameters;

export interface PageBlobGetPageRangesDiffHeaders {
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

export interface PageBlobGetPageRangesDiffQueryParamProperties {
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

export interface PageBlobGetPageRangesDiffQueryParam {
  queryParameters?: PageBlobGetPageRangesDiffQueryParamProperties;
}

export interface PageBlobGetPageRangesDiffHeaderParam {
  headers: RawHttpHeadersInput & PageBlobGetPageRangesDiffHeaders;
}

export interface PageBlobGetPageRangesDiffMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type PageBlobGetPageRangesDiffParameters =
  PageBlobGetPageRangesDiffQueryParam &
    PageBlobGetPageRangesDiffHeaderParam &
    PageBlobGetPageRangesDiffMediaTypesParam &
    RequestParameters;

export interface PageBlobResizeHeaders {
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

export interface PageBlobResizeQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobResizeQueryParam {
  queryParameters?: PageBlobResizeQueryParamProperties;
}

export interface PageBlobResizeHeaderParam {
  headers: RawHttpHeadersInput & PageBlobResizeHeaders;
}

export interface PageBlobResizeMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type PageBlobResizeParameters = PageBlobResizeQueryParam &
  PageBlobResizeHeaderParam &
  PageBlobResizeMediaTypesParam &
  RequestParameters;

export interface PageBlobUpdateSequenceNumberHeaders {
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

export interface PageBlobUpdateSequenceNumberQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobUpdateSequenceNumberQueryParam {
  queryParameters?: PageBlobUpdateSequenceNumberQueryParamProperties;
}

export interface PageBlobUpdateSequenceNumberHeaderParam {
  headers: RawHttpHeadersInput & PageBlobUpdateSequenceNumberHeaders;
}

export interface PageBlobUpdateSequenceNumberMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type PageBlobUpdateSequenceNumberParameters =
  PageBlobUpdateSequenceNumberQueryParam &
    PageBlobUpdateSequenceNumberHeaderParam &
    PageBlobUpdateSequenceNumberMediaTypesParam &
    RequestParameters;

export interface PageBlobCopyIncrementalHeaders {
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

export interface PageBlobCopyIncrementalQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface PageBlobCopyIncrementalQueryParam {
  queryParameters?: PageBlobCopyIncrementalQueryParamProperties;
}

export interface PageBlobCopyIncrementalHeaderParam {
  headers: RawHttpHeadersInput & PageBlobCopyIncrementalHeaders;
}

export interface PageBlobCopyIncrementalMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type PageBlobCopyIncrementalParameters =
  PageBlobCopyIncrementalQueryParam &
    PageBlobCopyIncrementalHeaderParam &
    PageBlobCopyIncrementalMediaTypesParam &
    RequestParameters;

export interface AppendBlobCreateHeaders {
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

export interface AppendBlobCreateQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface AppendBlobCreateQueryParam {
  queryParameters?: AppendBlobCreateQueryParamProperties;
}

export interface AppendBlobCreateHeaderParam {
  headers: RawHttpHeadersInput & AppendBlobCreateHeaders;
}

export interface AppendBlobCreateMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type AppendBlobCreateParameters = AppendBlobCreateQueryParam &
  AppendBlobCreateHeaderParam &
  AppendBlobCreateMediaTypesParam &
  RequestParameters;

export interface AppendBlobAppendBlockHeaders {
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

export interface AppendBlobAppendBlockBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface AppendBlobAppendBlockQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface AppendBlobAppendBlockQueryParam {
  queryParameters?: AppendBlobAppendBlockQueryParamProperties;
}

export interface AppendBlobAppendBlockHeaderParam {
  headers: RawHttpHeadersInput & AppendBlobAppendBlockHeaders;
}

export interface AppendBlobAppendBlockMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type AppendBlobAppendBlockParameters = AppendBlobAppendBlockQueryParam &
  AppendBlobAppendBlockHeaderParam &
  AppendBlobAppendBlockMediaTypesParam &
  AppendBlobAppendBlockBodyParam &
  RequestParameters;

export interface AppendBlobAppendBlockFromUrlHeaders {
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

export interface AppendBlobAppendBlockFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface AppendBlobAppendBlockFromUrlQueryParam {
  queryParameters?: AppendBlobAppendBlockFromUrlQueryParamProperties;
}

export interface AppendBlobAppendBlockFromUrlHeaderParam {
  headers: RawHttpHeadersInput & AppendBlobAppendBlockFromUrlHeaders;
}

export interface AppendBlobAppendBlockFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type AppendBlobAppendBlockFromUrlParameters =
  AppendBlobAppendBlockFromUrlQueryParam &
    AppendBlobAppendBlockFromUrlHeaderParam &
    AppendBlobAppendBlockFromUrlMediaTypesParam &
    RequestParameters;

export interface AppendBlobSealHeaders {
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

export interface AppendBlobSealQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface AppendBlobSealQueryParam {
  queryParameters?: AppendBlobSealQueryParamProperties;
}

export interface AppendBlobSealHeaderParam {
  headers: RawHttpHeadersInput & AppendBlobSealHeaders;
}

export interface AppendBlobSealMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type AppendBlobSealParameters = AppendBlobSealQueryParam &
  AppendBlobSealHeaderParam &
  AppendBlobSealMediaTypesParam &
  RequestParameters;

export interface BlockBlobUploadHeaders {
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
  /** Required if the request body is a structured message. Specifies the message schema version and properties. */
  "x-ms-structured-body"?: string;
  /** Required if the request body is a structured message. Specifies the length of the blob/file content inside the message body. Will always be smaller than Content-Length. */
  "x-ms-structured-content-length"?: number;
  /** The type of the blob. */
  "x-ms-blob-type": "BlockBlob";
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlockBlobUploadBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface BlockBlobUploadQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobUploadQueryParam {
  queryParameters?: BlockBlobUploadQueryParamProperties;
}

export interface BlockBlobUploadHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobUploadHeaders;
}

export interface BlockBlobUploadMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type BlockBlobUploadParameters = BlockBlobUploadQueryParam &
  BlockBlobUploadHeaderParam &
  BlockBlobUploadMediaTypesParam &
  BlockBlobUploadBodyParam &
  RequestParameters;

export interface BlockBlobPutBlobFromUrlHeaders {
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

export interface BlockBlobPutBlobFromUrlQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobPutBlobFromUrlQueryParam {
  queryParameters?: BlockBlobPutBlobFromUrlQueryParamProperties;
}

export interface BlockBlobPutBlobFromUrlHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobPutBlobFromUrlHeaders;
}

export interface BlockBlobPutBlobFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type BlockBlobPutBlobFromUrlParameters =
  BlockBlobPutBlobFromUrlQueryParam &
    BlockBlobPutBlobFromUrlHeaderParam &
    BlockBlobPutBlobFromUrlMediaTypesParam &
    RequestParameters;

export interface BlockBlobStageBlockHeaders {
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
  /** Required if the request body is a structured message. Specifies the message schema version and properties. */
  "x-ms-structured-body"?: string;
  /** Required if the request body is a structured message. Specifies the length of the blob/file content inside the message body. Will always be smaller than Content-Length. */
  "x-ms-structured-content-length"?: number;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlockBlobStageBlockBodyParam {
  /**
   * The body of the request.
   *
   * Value may contain any sequence of octets
   */
  body:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream;
}

export interface BlockBlobStageBlockQueryParamProperties {
  /** A valid Base64 string value that identifies the block. Prior to encoding, the string must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified for the blockid parameter must be the same size for each block. */
  blockid: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobStageBlockQueryParam {
  queryParameters: BlockBlobStageBlockQueryParamProperties;
}

export interface BlockBlobStageBlockHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobStageBlockHeaders;
}

export interface BlockBlobStageBlockMediaTypesParam {
  /** Content-Type header */
  contentType: "application/octet-stream";
}

export type BlockBlobStageBlockParameters = BlockBlobStageBlockQueryParam &
  BlockBlobStageBlockHeaderParam &
  BlockBlobStageBlockMediaTypesParam &
  BlockBlobStageBlockBodyParam &
  RequestParameters;

export interface BlockBlobStageBlockFromUrlHeaders {
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

export interface BlockBlobStageBlockFromUrlQueryParamProperties {
  /** A valid Base64 string value that identifies the block. Prior to encoding, the string must be less than or equal to 64 bytes in size. For a given blob, the length of the value specified for the blockid parameter must be the same size for each block. */
  blockid: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobStageBlockFromUrlQueryParam {
  queryParameters: BlockBlobStageBlockFromUrlQueryParamProperties;
}

export interface BlockBlobStageBlockFromUrlHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobStageBlockFromUrlHeaders;
}

export interface BlockBlobStageBlockFromUrlMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlockBlobStageBlockFromUrlParameters =
  BlockBlobStageBlockFromUrlQueryParam &
    BlockBlobStageBlockFromUrlHeaderParam &
    BlockBlobStageBlockFromUrlMediaTypesParam &
    RequestParameters;

export interface BlockBlobCommitBlockListHeaders {
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

export interface BlockBlobCommitBlockListBodyParam {
  /** Blob Blocks. */
  body: BlockLookupList;
}

export interface BlockBlobCommitBlockListQueryParamProperties {
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobCommitBlockListQueryParam {
  queryParameters?: BlockBlobCommitBlockListQueryParamProperties;
}

export interface BlockBlobCommitBlockListHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobCommitBlockListHeaders;
}

export interface BlockBlobCommitBlockListMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlockBlobCommitBlockListParameters =
  BlockBlobCommitBlockListQueryParam &
    BlockBlobCommitBlockListHeaderParam &
    BlockBlobCommitBlockListMediaTypesParam &
    BlockBlobCommitBlockListBodyParam &
    RequestParameters;

export interface BlockBlobGetBlockListHeaders {
  /** Specifies the version of the operation to use for this request. */
  "x-ms-version": string;
  /** If specified, the operation only succeeds if the resource's lease is active and matches this ID. */
  "x-ms-lease-id"?: string;
  /** Specify a SQL where clause on blob tags to operate only on blobs with a matching value. */
  "x-ms-if-tags"?: string;
  /** An opaque, globally-unique, client-generated string identifier for the request. */
  "x-ms-client-request-id"?: string;
}

export interface BlockBlobGetBlockListQueryParamProperties {
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

export interface BlockBlobGetBlockListQueryParam {
  queryParameters: BlockBlobGetBlockListQueryParamProperties;
}

export interface BlockBlobGetBlockListHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobGetBlockListHeaders;
}

export interface BlockBlobGetBlockListMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlockBlobGetBlockListParameters = BlockBlobGetBlockListQueryParam &
  BlockBlobGetBlockListHeaderParam &
  BlockBlobGetBlockListMediaTypesParam &
  RequestParameters;

export interface BlockBlobQueryHeaders {
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

export interface BlockBlobQueryBodyParam {
  /** The query request */
  body: QueryRequest;
}

export interface BlockBlobQueryQueryParamProperties {
  /** The snapshot parameter is an opaque DateTime value that, when present, specifies the blob snapshot to retrieve. For more information on working with blob snapshots, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/creating-a-snapshot-of-a-blob">Creating a Snapshot of a Blob.</a> */
  snapshot?: string;
  /** The timeout parameter is expressed in seconds. For more information, see <a href="https://docs.microsoft.com/en-us/rest/api/storageservices/fileservices/setting-timeouts-for-blob-service-operations">Setting Timeouts for Blob Service Operations.</a> */
  timeout?: number;
}

export interface BlockBlobQueryQueryParam {
  queryParameters?: BlockBlobQueryQueryParamProperties;
}

export interface BlockBlobQueryHeaderParam {
  headers: RawHttpHeadersInput & BlockBlobQueryHeaders;
}

export interface BlockBlobQueryMediaTypesParam {
  /** Content-Type header */
  contentType: "application/xml";
}

export type BlockBlobQueryParameters = BlockBlobQueryQueryParam &
  BlockBlobQueryHeaderParam &
  BlockBlobQueryMediaTypesParam &
  BlockBlobQueryBodyParam &
  RequestParameters;
