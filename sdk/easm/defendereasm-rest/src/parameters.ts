// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import {
  AssetResponseType,
  AssetUpdateData,
  AssetsExportRequest,
  DeltaDetailsRequest,
  DeltaSummaryRequest,
  DataConnectionData,
  DiscoGroupData,
  AssetChainRequest,
  ReportAssetSnapshotRequest,
  ReportAssetSummaryRequest,
  ReportAssetSnapshotExportRequest,
  SavedFilterData,
} from "./models.js";

export interface ListAssetResourceQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** A list of expressions that specify the order of the returned resources. */
  orderby?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /** Specify this value instead of 'skip' to use cursor-based searching. Initial value is '*' and subsequent values are returned in the response. */
  mark?: string;
  /** Specify the response type. The possible values are: ID, STANDARD, FULL, REDUCED */
  responseType?: AssetResponseType;
  /** The properties to include in the response. */
  responseIncludes?: string[];
  /** If it's recent only. */
  recentOnly?: boolean;
}

export interface ListAssetResourceQueryParam {
  queryParameters?: ListAssetResourceQueryParamProperties;
}

export type ListAssetResourceParameters = ListAssetResourceQueryParam &
  RequestParameters;

export interface UpdateAssetsBodyParam {
  body?: AssetUpdateData;
}

export interface UpdateAssetsQueryParamProperties {
  /** An expression on the resource type that selects the resources to be returned. */
  filter: string;
}

export interface UpdateAssetsQueryParam {
  queryParameters: UpdateAssetsQueryParamProperties;
}

export type UpdateAssetsParameters = UpdateAssetsQueryParam &
  UpdateAssetsBodyParam &
  RequestParameters;
export type GetAssetResourceParameters = RequestParameters;

export interface GetAssetsExportBodyParam {
  body?: AssetsExportRequest;
}

export interface GetAssetsExportQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** A list of expressions that specify the order of the returned resources. */
  orderby?: string;
}

export interface GetAssetsExportQueryParam {
  queryParameters?: GetAssetsExportQueryParamProperties;
}

export type GetAssetsExportParameters = GetAssetsExportQueryParam &
  GetAssetsExportBodyParam &
  RequestParameters;

export interface GetObservationsQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** A list of expressions that specify the order of the returned resources. */
  orderby?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GetObservationsQueryParam {
  queryParameters?: GetObservationsQueryParamProperties;
}

export type GetObservationsParameters = GetObservationsQueryParam &
  RequestParameters;

export interface GetDeltaDetailsBodyParam {
  body?: DeltaDetailsRequest;
}

export interface GetDeltaDetailsQueryParamProperties {
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GetDeltaDetailsQueryParam {
  queryParameters?: GetDeltaDetailsQueryParamProperties;
}

export type GetDeltaDetailsParameters = GetDeltaDetailsQueryParam &
  GetDeltaDetailsBodyParam &
  RequestParameters;

export interface GetDeltaSummaryBodyParam {
  body?: DeltaSummaryRequest;
}

export type GetDeltaSummaryParameters = GetDeltaSummaryBodyParam &
  RequestParameters;

export interface ListDataConnectionQueryParamProperties {
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListDataConnectionQueryParam {
  queryParameters?: ListDataConnectionQueryParamProperties;
}

export type ListDataConnectionParameters = ListDataConnectionQueryParam &
  RequestParameters;

export interface ValidateDataConnectionBodyParam {
  body?: DataConnectionData;
}

export type ValidateDataConnectionParameters = ValidateDataConnectionBodyParam &
  RequestParameters;
export type GetDataConnectionParameters = RequestParameters;

export interface CreateOrReplaceDataConnectionBodyParam {
  body?: DataConnectionData;
}

export type CreateOrReplaceDataConnectionParameters =
  CreateOrReplaceDataConnectionBodyParam & RequestParameters;
export type DeleteDataConnectionParameters = RequestParameters;

export interface ListDiscoGroupQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListDiscoGroupQueryParam {
  queryParameters?: ListDiscoGroupQueryParamProperties;
}

export type ListDiscoGroupParameters = ListDiscoGroupQueryParam &
  RequestParameters;

export interface ValidateDiscoGroupBodyParam {
  body?: DiscoGroupData;
}

export type ValidateDiscoGroupParameters = ValidateDiscoGroupBodyParam &
  RequestParameters;
export type GetDiscoGroupParameters = RequestParameters;

export interface CreateOrReplaceDiscoGroupBodyParam {
  body?: DiscoGroupData;
}

export type CreateOrReplaceDiscoGroupParameters =
  CreateOrReplaceDiscoGroupBodyParam & RequestParameters;
export type RunDiscoGroupParameters = RequestParameters;

export interface ListRunsQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListRunsQueryParam {
  queryParameters?: ListRunsQueryParamProperties;
}

export type ListRunsParameters = ListRunsQueryParam & RequestParameters;
export type DeleteDiscoGroupParameters = RequestParameters;

export interface GetAssetChainSummaryBodyParam {
  body?: AssetChainRequest;
}

export type GetAssetChainSummaryParameters = GetAssetChainSummaryBodyParam &
  RequestParameters;

export interface DismissAssetChainBodyParam {
  body?: AssetChainRequest;
}

export type DismissAssetChainParameters = DismissAssetChainBodyParam &
  RequestParameters;

export interface ListDiscoTemplateQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListDiscoTemplateQueryParam {
  queryParameters?: ListDiscoTemplateQueryParamProperties;
}

export type ListDiscoTemplateParameters = ListDiscoTemplateQueryParam &
  RequestParameters;
export type GetDiscoTemplateParameters = RequestParameters;
export type GetBillableParameters = RequestParameters;

export interface GetSnapshotBodyParam {
  body?: ReportAssetSnapshotRequest;
}

export type GetSnapshotParameters = GetSnapshotBodyParam & RequestParameters;

export interface GetSummaryBodyParam {
  body?: ReportAssetSummaryRequest;
}

export type GetSummaryParameters = GetSummaryBodyParam & RequestParameters;

export interface GetSnapshotExportBodyParam {
  body?: ReportAssetSnapshotExportRequest;
}

export type GetSnapshotExportParameters = GetSnapshotExportBodyParam &
  RequestParameters;

export interface ListSavedFilterQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListSavedFilterQueryParam {
  queryParameters?: ListSavedFilterQueryParamProperties;
}

export type ListSavedFilterParameters = ListSavedFilterQueryParam &
  RequestParameters;
export type GetSavedFilterParameters = RequestParameters;

export interface CreateOrReplaceSavedFilterBodyParam {
  body?: SavedFilterData;
}

export type CreateOrReplaceSavedFilterParameters =
  CreateOrReplaceSavedFilterBodyParam & RequestParameters;
export type DeleteSavedFilterParameters = RequestParameters;

export interface ListTaskQueryParamProperties {
  /** Filter the result list using the given expression. */
  filter?: string;
  /** A list of expressions that specify the order of the returned resources. */
  orderby?: string;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTaskQueryParam {
  queryParameters?: ListTaskQueryParamProperties;
}

export type ListTaskParameters = ListTaskQueryParam & RequestParameters;
export type GetTaskParameters = RequestParameters;
export type CancelTaskParameters = RequestParameters;
export type RunTaskParameters = RequestParameters;
export type DownloadTaskParameters = RequestParameters;
export type GetCisaCvesParameters = RequestParameters;
export type GetCisaCveParameters = RequestParameters;
