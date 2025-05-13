// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ApisListParameters,
  ApisListAllParameters,
  ApisGetParameters,
  ApiDefinitionsListDefinitionsParameters,
  ApiDefinitionsGetDefinitionParameters,
  ApiDefinitionsGetExportSpecificationOperationStatusParameters,
  ApiDefinitionsExportSpecificationParameters,
  ApiDeploymentsListDeploymentsParameters,
  ApiDeploymentsGetDeploymentParameters,
  EnvironmentsListParameters,
  EnvironmentsListAllParameters,
  EnvironmentsGetParameters,
  ApiVersionsListVersionsParameters,
  ApiVersionsGetVersionParameters,
} from "./parameters.js";
import type {
  ApisList200Response,
  ApisListDefaultResponse,
  ApisListAll200Response,
  ApisListAllDefaultResponse,
  ApisGet200Response,
  ApisGetDefaultResponse,
  ApiDefinitionsListDefinitions200Response,
  ApiDefinitionsListDefinitionsDefaultResponse,
  ApiDefinitionsGetDefinition200Response,
  ApiDefinitionsGetDefinitionDefaultResponse,
  ApiDefinitionsGetExportSpecificationOperationStatus200Response,
  ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse,
  ApiDefinitionsExportSpecification202Response,
  ApiDefinitionsExportSpecificationDefaultResponse,
  ApiDeploymentsListDeployments200Response,
  ApiDeploymentsListDeploymentsDefaultResponse,
  ApiDeploymentsGetDeployment200Response,
  ApiDeploymentsGetDeploymentDefaultResponse,
  EnvironmentsList200Response,
  EnvironmentsListDefaultResponse,
  EnvironmentsListAll200Response,
  EnvironmentsListAllDefaultResponse,
  EnvironmentsGet200Response,
  EnvironmentsGetDefaultResponse,
  ApiVersionsListVersions200Response,
  ApiVersionsListVersionsDefaultResponse,
  ApiVersionsGetVersion200Response,
  ApiVersionsGetVersionDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ApisList {
  /** List a collection of APIs. */
  get(
    options?: ApisListParameters,
  ): StreamableMethod<ApisList200Response | ApisListDefaultResponse>;
}

export interface ApisListAll {
  /** List a collection of APIs across workspaces. */
  get(
    options?: ApisListAllParameters,
  ): StreamableMethod<ApisListAll200Response | ApisListAllDefaultResponse>;
}

export interface ApisGet {
  /** Get an API. */
  get(options?: ApisGetParameters): StreamableMethod<ApisGet200Response | ApisGetDefaultResponse>;
}

export interface ApiDefinitionsListDefinitions {
  /** List a collection of API definitions. */
  get(
    options?: ApiDefinitionsListDefinitionsParameters,
  ): StreamableMethod<
    ApiDefinitionsListDefinitions200Response | ApiDefinitionsListDefinitionsDefaultResponse
  >;
}

export interface ApiDefinitionsGetDefinition {
  /** Get an API definition. */
  get(
    options?: ApiDefinitionsGetDefinitionParameters,
  ): StreamableMethod<
    ApiDefinitionsGetDefinition200Response | ApiDefinitionsGetDefinitionDefaultResponse
  >;
}

export interface ApiDefinitionsGetExportSpecificationOperationStatus {
  /** Gets status of a an API specification export operation. */
  get(
    options?: ApiDefinitionsGetExportSpecificationOperationStatusParameters,
  ): StreamableMethod<
    | ApiDefinitionsGetExportSpecificationOperationStatus200Response
    | ApiDefinitionsGetExportSpecificationOperationStatusDefaultResponse
  >;
}

export interface ApiDefinitionsExportSpecification {
  /** Export an API specification asynchronously. */
  post(
    options?: ApiDefinitionsExportSpecificationParameters,
  ): StreamableMethod<
    ApiDefinitionsExportSpecification202Response | ApiDefinitionsExportSpecificationDefaultResponse
  >;
}

export interface ApiDeploymentsListDeployments {
  /** List a collection of API deployments. */
  get(
    options?: ApiDeploymentsListDeploymentsParameters,
  ): StreamableMethod<
    ApiDeploymentsListDeployments200Response | ApiDeploymentsListDeploymentsDefaultResponse
  >;
}

export interface ApiDeploymentsGetDeployment {
  /** Get an API deployment. */
  get(
    options?: ApiDeploymentsGetDeploymentParameters,
  ): StreamableMethod<
    ApiDeploymentsGetDeployment200Response | ApiDeploymentsGetDeploymentDefaultResponse
  >;
}

export interface EnvironmentsList {
  /** List a collection of environments. */
  get(
    options?: EnvironmentsListParameters,
  ): StreamableMethod<EnvironmentsList200Response | EnvironmentsListDefaultResponse>;
}

export interface EnvironmentsListAll {
  /** List a collection of environments across workspaces. */
  get(
    options?: EnvironmentsListAllParameters,
  ): StreamableMethod<EnvironmentsListAll200Response | EnvironmentsListAllDefaultResponse>;
}

export interface EnvironmentsGet {
  /** Get an environment. */
  get(
    options?: EnvironmentsGetParameters,
  ): StreamableMethod<EnvironmentsGet200Response | EnvironmentsGetDefaultResponse>;
}

export interface ApiVersionsListVersions {
  /** List a collection of API versions. */
  get(
    options?: ApiVersionsListVersionsParameters,
  ): StreamableMethod<ApiVersionsListVersions200Response | ApiVersionsListVersionsDefaultResponse>;
}

export interface ApiVersionsGetVersion {
  /** Get an API version. */
  get(
    options?: ApiVersionsGetVersionParameters,
  ): StreamableMethod<ApiVersionsGetVersion200Response | ApiVersionsGetVersionDefaultResponse>;
}

export interface Routes {
  /** Resource for '/workspaces/\{workspaceName\}/apis' has methods for the following verbs: get */
  (path: "/workspaces/{workspaceName}/apis", workspaceName: string): ApisList;
  /** Resource for '/apis' has methods for the following verbs: get */
  (path: "/apis"): ApisListAll;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}",
    workspaceName: string,
    apiName: string,
  ): ApisGet;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions/\{versionName\}/definitions' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions",
    workspaceName: string,
    apiName: string,
    versionName: string,
  ): ApiDefinitionsListDefinitions;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions/\{versionName\}/definitions/\{definitionName\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}",
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
  ): ApiDefinitionsGetDefinition;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions/\{versionName\}/definitions/\{definitionName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}/operations/{operationId}",
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
    operationId: string,
  ): ApiDefinitionsGetExportSpecificationOperationStatus;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions/\{versionName\}/definitions/\{definitionName\}:exportSpecification' has methods for the following verbs: post */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}/definitions/{definitionName}:exportSpecification",
    workspaceName: string,
    apiName: string,
    versionName: string,
    definitionName: string,
  ): ApiDefinitionsExportSpecification;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/deployments' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/deployments",
    workspaceName: string,
    apiName: string,
  ): ApiDeploymentsListDeployments;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/deployments/\{deploymentName\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/deployments/{deploymentName}",
    workspaceName: string,
    apiName: string,
    deploymentName: string,
  ): ApiDeploymentsGetDeployment;
  /** Resource for '/workspaces/\{workspaceName\}/environments' has methods for the following verbs: get */
  (path: "/workspaces/{workspaceName}/environments", workspaceName: string): EnvironmentsList;
  /** Resource for '/environments' has methods for the following verbs: get */
  (path: "/environments"): EnvironmentsListAll;
  /** Resource for '/workspaces/\{workspaceName\}/environments/\{environmentName\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/environments/{environmentName}",
    workspaceName: string,
    environmentName: string,
  ): EnvironmentsGet;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions",
    workspaceName: string,
    apiName: string,
  ): ApiVersionsListVersions;
  /** Resource for '/workspaces/\{workspaceName\}/apis/\{apiName\}/versions/\{versionName\}' has methods for the following verbs: get */
  (
    path: "/workspaces/{workspaceName}/apis/{apiName}/versions/{versionName}",
    workspaceName: string,
    apiName: string,
    versionName: string,
  ): ApiVersionsGetVersion;
}

export type DataApiClient = Client & {
  path: Routes;
};
