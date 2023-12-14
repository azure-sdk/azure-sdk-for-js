// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Paged } from "@azure/core-paging";

/** API resource model. */
export interface ApiResourceOutput extends ApiOutput {
  /** API identifier. */
  apiName: string;
}

/** API contract */
export interface ApiOutput {
  /** The resource name. */
  name: string;
  /** The name of the API. */
  title: string;
  /** Short descrption of the API. */
  summary?: string;
  /** The description of the API */
  description?: string;
  /** Kind of API. For example, REST or GraphQL. */
  kind: string;
  /**
   * Current lifecycle stage of the API.
   *
   * Possible values: design, development, testing, preview, production, deprecated, retired
   */
  lifecycleStage?: string;
  /** Terms of service for the API. */
  termsOfService?: ApiTermsOfServiceOutput;
  /** The license information for the API. */
  license?: ApiLicenseModelOutput;
  /** External documentation */
  externalDocumentation?: Array<ApiExternalDocumentationOutput>;
  /** Points of contact for the API. */
  contacts?: Array<ApiContactOutput>;
  /** The custom metadata defined for API entries. */
  customProperties?: Record<string, string>;
  /** Last updated date and time. */
  lastUpdated: string;
}

/** API Terms of Service */
export interface ApiTermsOfServiceOutput {
  /** URL pointing to the terms of service. */
  url: string;
}

/** API License Model */
export interface ApiLicenseModelOutput {
  /** Name of the license. */
  name: string;
  /** URL pointing to the license details. The URL field is mutually exclusive of the identifier field. */
  url: string;
  /** SPDX license information for the API. The identifier field is mutually exclusive of the URL field. */
  identifier: string;
}

/** Api External Documentation Model */
export interface ApiExternalDocumentationOutput {
  /** Title of the documentation. */
  title: string;
  /** Description of the documentation. */
  description: string;
  /** URL pointing to the documentation. */
  url: string;
}

/** API contact information */
export interface ApiContactOutput {
  /** Name of the contact. */
  name: string;
  /** URL for the contact. */
  url: string;
  /** Email address for the contact. */
  email: string;
}

/** Provides the 'Repeatability-*' headers to enable repeatable requests. */
export interface RepeatabilityRequestHeadersOutput {}

/** Provides the 'Repeatability-*' headers to enable repeatable requests. */
export interface RepeatabilityResponseHeadersOutput {}

/** Provides the 'If-*' headers to enable conditional (cached) responses */
export interface ConditionalRequestHeadersOutput {}

/** Provides the 'ETag' header to enable conditional (cached) requests */
export interface EtagResponseEnvelopeOutput {}

/** Provides the 'x-ms-client-request-id' header to enable request correlation in requests and responses. */
export interface ClientRequestIdHeaderOutput {}

/** API Definition resource model. */
export interface ApiDefinitionResourceOutput extends ApiDefinitionOutput {
  /** Definition identifier. */
  apiDefinitionName: string;
}

/** API definition */
export interface ApiDefinitionOutput {
  /** The resource name. */
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

/** Export specification resource model. */
export interface ExportSpecificationResourceOutput
  extends ExportSpecificationOutput {
  /** Definition identifier. */
  apiDefinitionName: string;
}

/** API Deployment resource model. */
export interface ApiDeploymentResourceOutput extends ApiDeploymentOutput {
  /** Deployment identifier. */
  deploymentName: string;
}

/** API deployment */
export interface ApiDeploymentOutput {
  /** The resource name. */
  name: string;
  /** The name of the deployment. */
  title: string;
  /** The description of the deployment. */
  description?: string;
  /** The name of the deployment environment. */
  environment: string;
  /** The server information of the API deployment. */
  server: ApiDeploymentServerOutput;
  /** The custom metadata defined for Deployment entries.. */
  customProperties?: Record<string, string>;
  /** Indicates if this is currently recommended deployment. */
  recommended?: boolean;
}

/** Api Deployment Server */
export interface ApiDeploymentServerOutput {
  /** Base runtime URIs for this deployment. */
  runtimeUri: string[];
}

/** Environment resource model. */
export interface EnvironmentResourceOutput extends EnvironmentOutput {
  /** Environment identifier. */
  environmentName: string;
}

/** Environment */
export interface EnvironmentOutput {
  /** The resource name. */
  name: string;
  /** The name of the environment. */
  title: string;
  /** Kind of deployment environment. */
  kind: string;
  /** Description of the environment. */
  description?: string;
  /** Server information of the environment. */
  server?: EnvironmentServerOutput;
  /** Onboarding information for this environment. */
  onboarding?: EnvironmentOnboardingModelOutput;
  /** The custom metadata defined for Environment entries. */
  customProperties?: Record<string, string>;
}

/** Environment Server */
export interface EnvironmentServerOutput {
  /** Type of the server that represents the environment. */
  type: string;
  /** URIs of the server's management portal. */
  managementPortalUri: string[];
}

/** Environment Onboarding Model */
export interface EnvironmentOnboardingModelOutput {
  /** Instructions how to onboard to the environment. */
  instructions: string;
  /** Developer portal URIs of the environment. */
  developerPortalUri: string[];
}

/** API Version resource model. */
export interface ApiVersionResourceOutput extends ApiVersionOutput {
  /** Version identifier. */
  versionName: string;
}

/** API version */
export interface ApiVersionOutput {
  /** The resource name. */
  name: string;
  /** Version title. */
  title: string;
  /**
   * Current lifecycle stage of the API version.
   *
   * Possible values: design, development, testing, preview, production, deprecated, retired
   */
  lifecycleStage: string;
}

/** Paged collection of ApiResource items */
export type PagedApiResourceOutput = Paged<ApiResourceOutput>;
/** Paged collection of ApiDefinitionResource items */
export type PagedApiDefinitionResourceOutput =
  Paged<ApiDefinitionResourceOutput>;
/** Paged collection of ApiDeploymentResource items */
export type PagedApiDeploymentResourceOutput =
  Paged<ApiDeploymentResourceOutput>;
/** Paged collection of EnvironmentResource items */
export type PagedEnvironmentResourceOutput = Paged<EnvironmentResourceOutput>;
/** Paged collection of ApiVersionResource items */
export type PagedApiVersionResourceOutput = Paged<ApiVersionResourceOutput>;
