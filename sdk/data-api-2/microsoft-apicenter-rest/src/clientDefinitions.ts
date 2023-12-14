// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  ListApisParameters,
  GetApiParameters,
  ListDefinitionsParameters,
  GetDefinitionParameters,
  ExportSpecificationParameters,
  ListDeploymentsParameters,
  GetDeploymentParameters,
  ListEnvironmentsParameters,
  GetEnvironmentParameters,
  ListVersionsParameters,
  GetVersionParameters,
} from "./parameters";
import {
  ListApis200Response,
  ListApisDefaultResponse,
  GetApi200Response,
  GetApiDefaultResponse,
  ListDefinitions200Response,
  ListDefinitionsDefaultResponse,
  GetDefinition200Response,
  GetDefinitionDefaultResponse,
  ExportSpecification200Response,
  ExportSpecificationDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  ListEnvironments200Response,
  ListEnvironmentsDefaultResponse,
  GetEnvironment200Response,
  GetEnvironmentDefaultResponse,
  ListVersions200Response,
  ListVersionsDefaultResponse,
  GetVersion200Response,
  GetVersionDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListApis {
  /** List a collection of APIs. */
  get(
    options?: ListApisParameters
  ): StreamableMethod<ListApis200Response | ListApisDefaultResponse>;
}

export interface GetApi {
  /** Get an API. */
  get(
    options?: GetApiParameters
  ): StreamableMethod<GetApi200Response | GetApiDefaultResponse>;
}

export interface ListDefinitions {
  /** List a collection of API definitions. */
  get(
    options?: ListDefinitionsParameters
  ): StreamableMethod<
    ListDefinitions200Response | ListDefinitionsDefaultResponse
  >;
}

export interface GetDefinition {
  /** Get an API definition. */
  get(
    options?: GetDefinitionParameters
  ): StreamableMethod<GetDefinition200Response | GetDefinitionDefaultResponse>;
}

export interface ExportSpecification {
  /** Export an API specification. */
  post(
    options?: ExportSpecificationParameters
  ): StreamableMethod<
    ExportSpecification200Response | ExportSpecificationDefaultResponse
  >;
}

export interface ListDeployments {
  /** List a collection of API deployments. */
  get(
    options?: ListDeploymentsParameters
  ): StreamableMethod<
    ListDeployments200Response | ListDeploymentsDefaultResponse
  >;
}

export interface GetDeployment {
  /** Get an API deployment. */
  get(
    options?: GetDeploymentParameters
  ): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse>;
}

export interface ListEnvironments {
  /** List a collection of environments. */
  get(
    options?: ListEnvironmentsParameters
  ): StreamableMethod<
    ListEnvironments200Response | ListEnvironmentsDefaultResponse
  >;
}

export interface GetEnvironment {
  /** Get an environment. */
  get(
    options?: GetEnvironmentParameters
  ): StreamableMethod<
    GetEnvironment200Response | GetEnvironmentDefaultResponse
  >;
}

export interface ListVersions {
  /** List a collection of API versions. */
  get(
    options?: ListVersionsParameters
  ): StreamableMethod<ListVersions200Response | ListVersionsDefaultResponse>;
}

export interface GetVersion {
  /** Get an API version. */
  get(
    options?: GetVersionParameters
  ): StreamableMethod<GetVersion200Response | GetVersionDefaultResponse>;
}

export interface Routes {
  /** Resource for '/apis' has methods for the following verbs: get */
  (path: "/apis"): ListApis;
  /** Resource for '/apis/\{apiName\}' has methods for the following verbs: get */
  (path: "/apis/{apiName}", apiName: string): GetApi;
  /** Resource for '/apis/\{apiName\}/versions/\{versionName\}/definitions' has methods for the following verbs: get */
  (
    path: "/apis/{apiName}/versions/{versionName}/definitions",
    apiName: string,
    versionName: string
  ): ListDefinitions;
  /** Resource for '/apis/\{apiName\}/versions/\{versionName\}/definitions/\{apiDefinitionName\}' has methods for the following verbs: get */
  (
    path: "/apis/{apiName}/versions/{versionName}/definitions/{apiDefinitionName}",
    apiName: string,
    versionName: string,
    apiDefinitionName: string
  ): GetDefinition;
  /** Resource for '/apis/\{apiName\}/versions/\{versionName\}/definitions/\{apiDefinitionName\}:exportSpecification' has methods for the following verbs: post */
  (
    path: "/apis/{apiName}/versions/{versionName}/definitions/{apiDefinitionName}:exportSpecification",
    apiName: string,
    versionName: string,
    apiDefinitionName: string
  ): ExportSpecification;
  /** Resource for '/apis/\{apiName\}/deployments' has methods for the following verbs: get */
  (path: "/apis/{apiName}/deployments", apiName: string): ListDeployments;
  /** Resource for '/apis/\{apiName\}/deployments/\{deploymentName\}' has methods for the following verbs: get */
  (
    path: "/apis/{apiName}/deployments/{deploymentName}",
    apiName: string,
    deploymentName: string
  ): GetDeployment;
  /** Resource for '/environments' has methods for the following verbs: get */
  (path: "/environments"): ListEnvironments;
  /** Resource for '/environments/\{environmentName\}' has methods for the following verbs: get */
  (
    path: "/environments/{environmentName}",
    environmentName: string
  ): GetEnvironment;
  /** Resource for '/apis/\{apiName\}/versions' has methods for the following verbs: get */
  (path: "/apis/{apiName}/versions", apiName: string): ListVersions;
  /** Resource for '/apis/\{apiName\}/versions/\{versionName\}' has methods for the following verbs: get */
  (
    path: "/apis/{apiName}/versions/{versionName}",
    apiName: string,
    versionName: string
  ): GetVersion;
}

export type DataApiClient = Client & {
  path: Routes;
};
