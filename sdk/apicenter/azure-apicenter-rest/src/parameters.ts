// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";

export interface ApisListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ApisListQueryParam {
  queryParameters?: ApisListQueryParamProperties;
}

export type ApisListParameters = ApisListQueryParam & RequestParameters;

export interface ApisListAllQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ApisListAllQueryParam {
  queryParameters?: ApisListAllQueryParamProperties;
}

export type ApisListAllParameters = ApisListAllQueryParam & RequestParameters;
export type ApisGetParameters = RequestParameters;

export interface ApiDefinitionsListDefinitionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ApiDefinitionsListDefinitionsQueryParam {
  queryParameters?: ApiDefinitionsListDefinitionsQueryParamProperties;
}

export type ApiDefinitionsListDefinitionsParameters = ApiDefinitionsListDefinitionsQueryParam &
  RequestParameters;
export type ApiDefinitionsGetDefinitionParameters = RequestParameters;
export type ApiDefinitionsGetExportSpecificationOperationStatusParameters = RequestParameters;
export type ApiDefinitionsExportSpecificationParameters = RequestParameters;

export interface ApiDeploymentsListDeploymentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ApiDeploymentsListDeploymentsQueryParam {
  queryParameters?: ApiDeploymentsListDeploymentsQueryParamProperties;
}

export type ApiDeploymentsListDeploymentsParameters = ApiDeploymentsListDeploymentsQueryParam &
  RequestParameters;
export type ApiDeploymentsGetDeploymentParameters = RequestParameters;

export interface EnvironmentsListQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EnvironmentsListQueryParam {
  queryParameters?: EnvironmentsListQueryParamProperties;
}

export type EnvironmentsListParameters = EnvironmentsListQueryParam & RequestParameters;

export interface EnvironmentsListAllQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface EnvironmentsListAllQueryParam {
  queryParameters?: EnvironmentsListAllQueryParamProperties;
}

export type EnvironmentsListAllParameters = EnvironmentsListAllQueryParam & RequestParameters;
export type EnvironmentsGetParameters = RequestParameters;

export interface ApiVersionsListVersionsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ApiVersionsListVersionsQueryParam {
  queryParameters?: ApiVersionsListVersionsQueryParamProperties;
}

export type ApiVersionsListVersionsParameters = ApiVersionsListVersionsQueryParam &
  RequestParameters;
export type ApiVersionsGetVersionParameters = RequestParameters;
