// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { Paged } from "@azure/core-paging";
import { ErrorModel } from "@azure-rest/core-client";

/** API resource model. */
export interface ApiOutput {
  /** Api identifier. */
  name: string;
  /** The name of the API. */
  title: string;
  /** Short description of the API. */
  summary?: string;
  /** The description of the API */
  description?: string;
  /**
   * Kind of API. For example, REST or GraphQL.
   *
   * Possible values: "rest", "graphql", "grpc", "soap", "webhook", "websocket"
   */
  kind: ApiKindOutput;
  /**
   * Current lifecycle stage of the API.
   *
   * Possible values: "design", "development", "testing", "preview", "production", "deprecated", "retired"
   */
  readonly lifecycleStage?: LifecycleStageOutput;
  /** Terms of service for the API. */
  termsOfService?: TermsOfServiceOutput;
  /** The license information for the API. */
  license?: LicenseOutput;
  /** External documentation */
  externalDocumentation?: Array<ExternalDocumentationOutput>;
  /** Points of contact for the API. */
  contacts?: Array<ContactOutput>;
  /** The custom metadata defined for API entities. */
  customProperties?: Record<string, any>;
  /** Last updated date and time. */
  readonly lastUpdated?: string;
}

/** API Terms of Service */
export interface TermsOfServiceOutput {
  /** URL pointing to the terms of service. */
  url: string;
}

/** API License Model */
export interface LicenseOutput {
  /** Name of the license. */
  name: string;
  /** URL pointing to the license details. The URL field is mutually exclusive of the identifier field. */
  url?: string;
  /** SPDX license information for the API. The identifier field is mutually exclusive of the URL field. */
  identifier?: string;
}

/** Api External Documentation Model */
export interface ExternalDocumentationOutput {
  /** Title of the documentation. */
  title: string;
  /** Description of the documentation. */
  description: string;
  /** URL pointing to the documentation. */
  url: string;
}

/** API contact information */
export interface ContactOutput {
  /** Name of the contact. */
  name: string;
  /** URL for the contact. */
  url?: string;
  /** Email address for the contact. */
  email?: string;
}

/** Paged collection of API items across workspaces. */
export interface PagedApiAllOutput {
  /** The Api items on this page */
  value: Array<ApiOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** API definition resource model. */
export interface ApiDefinitionOutput {
  /** Definition identifier. */
  name: string;
  /** The name of the API definition. */
  title: string;
  /** The description of the API definition. */
  description?: string;
  /** The API specification details. */
  specification?: ApiSpecificationOutput;
}

/** API specification */
export interface ApiSpecificationOutput {
  /** API specification name, e.g. 'swagger' or 'openapi'. */
  name: string;
  /** API specification version, e.g. '3.0.1'. */
  version: string;
}

/** Provides status details for long running operations. */
export interface ResourceOperationStatusOutput {
  /** The unique ID of the operation. */
  id: string;
  /**
   * The status of the operation
   *
   * Possible values: "NotStarted", "Running", "Succeeded", "Failed", "Canceled"
   */
  status: OperationStateOutput;
  /** Error object that describes the error when status is "Failed". */
  error?: ErrorModel;
  /** The result of the operation. */
  result?: ApiSpecExportResultOutput;
}

/** Export specification result model. */
export interface ApiSpecExportResultOutput {
  /** API definition identifier. */
  definitionName: string;
  /** The result of the specification export. */
  value: string;
  /**
   * The format of the specification export result.
   *
   * Possible values: "link"
   */
  format: ApiSpecExportResultFormatOutput;
}

/** API deployment resource model. */
export interface ApiDeploymentOutput {
  /** Deployment identifier. */
  name: string;
  /** The name of the deployment. */
  title: string;
  /** The description of the deployment. */
  description?: string;
  /** The name of the deployment environment. */
  environment: string;
  /** The server information of the API deployment. */
  server: ApiDeploymentServerOutput;
  /** The custom metadata defined for API deployment entities. */
  customProperties?: Record<string, any>;
  /** Indicates if this is currently recommended deployment. */
  recommended?: boolean;
}

/** Api Deployment Server */
export interface ApiDeploymentServerOutput {
  /** Base runtime URIs for this deployment. */
  runtimeUris: string[];
}

/** Environment resource model. */
export interface EnvironmentOutput {
  /** Environment identifier. */
  name: string;
  /** The name of the environment. */
  title: string;
  /**
   * Kind of deployment environment.
   *
   * Possible values: "development", "testing", "staging", "production"
   */
  kind: EnvironmentKindOutput;
  /** Description of the environment. */
  description?: string;
  /** Server information of the environment. */
  server?: EnvironmentServerOutput;
  /** Onboarding information for this environment. */
  onboarding?: EnvironmentOnboardingModelOutput;
  /** The custom metadata defined for environment entities. */
  customProperties?: Record<string, any>;
}

/** Environment Server */
export interface EnvironmentServerOutput {
  /** Type of the server that represents the environment. */
  type: string;
  /** URIs of the server's management portal. */
  managementPortalUris: string[];
}

/** Environment Onboarding Model */
export interface EnvironmentOnboardingModelOutput {
  /** Instructions how to onboard to the environment. */
  instructions: string;
  /** Developer portal URIs of the environment. */
  developerPortalUris: string[];
}

/** Paged collection of Environment items across workspaces */
export interface PagedEnvironmentAllOutput {
  /** The Environment items on this page */
  value: Array<EnvironmentOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** API version resource model. */
export interface ApiVersionOutput {
  /** Version identifier. */
  name: string;
  /** Version title. */
  title: string;
  /**
   * Current lifecycle stage of the API version.
   *
   * Possible values: "design", "development", "testing", "preview", "production", "deprecated", "retired"
   */
  lifecycleStage: LifecycleStageOutput;
}

/** Paged collection of Api items */
export type PagedApiOutput = Paged<ApiOutput>;
/** Alias for ApiKindOutput */
export type ApiKindOutput = string;
/** Alias for LifecycleStageOutput */
export type LifecycleStageOutput = string;
/** Paged collection of ApiDefinition items */
export type PagedApiDefinitionOutput = Paged<ApiDefinitionOutput>;
/** Alias for OperationStateOutput */
export type OperationStateOutput = string;
/** Alias for ApiSpecExportResultFormatOutput */
export type ApiSpecExportResultFormatOutput = string;
/** Paged collection of ApiDeployment items */
export type PagedApiDeploymentOutput = Paged<ApiDeploymentOutput>;
/** Paged collection of Environment items */
export type PagedEnvironmentOutput = Paged<EnvironmentOutput>;
/** Alias for EnvironmentKindOutput */
export type EnvironmentKindOutput = string;
/** Paged collection of ApiVersion items */
export type PagedApiVersionOutput = Paged<ApiVersionOutput>;
