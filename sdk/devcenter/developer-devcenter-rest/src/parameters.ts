// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DevBox, Environment } from "./models";

export type ListProjectsParameters = RequestParameters;
export type GetProjectParameters = RequestParameters;
export type GetProjectOperationStatusParameters = RequestParameters;
export type ListPoolsParameters = RequestParameters;
export type GetPoolParameters = RequestParameters;
export type ListSchedulesParameters = RequestParameters;
export type GetScheduleParameters = RequestParameters;
export type ListDevBoxesParameters = RequestParameters;
export type GetDevBoxParameters = RequestParameters;

export interface CreateDevBoxBodyParam {
  /** Represents the body request of a Dev Box creation. Dev Box Pool name is required. Optionally set the owner of the Dev Box as local administrator */
  body: DevBox;
}

export type CreateDevBoxParameters = CreateDevBoxBodyParam & RequestParameters;
export type DeleteDevBoxParameters = RequestParameters;
export type StartDevBoxParameters = RequestParameters;

export interface StopDevBoxQueryParamProperties {
  /** Optional parameter to hibernate the dev box. */
  hibernate?: boolean;
}

export interface StopDevBoxQueryParam {
  queryParameters?: StopDevBoxQueryParamProperties;
}

export type StopDevBoxParameters = StopDevBoxQueryParam & RequestParameters;
export type RestartDevBoxParameters = RequestParameters;
export type GetRemoteConnectionParameters = RequestParameters;
export type ListDevBoxActionsParameters = RequestParameters;
export type GetDevBoxActionParameters = RequestParameters;
export type SkipActionParameters = RequestParameters;

export interface DelayActionQueryParamProperties {
  /** The time to delay the Dev Box action or actions until. */
  until: Date | string;
}

export interface DelayActionQueryParam {
  queryParameters: DelayActionQueryParamProperties;
}

export type DelayActionParameters = DelayActionQueryParam & RequestParameters;

export interface DelayAllActionsQueryParamProperties {
  /** The time to delay the Dev Box action or actions until. */
  until: Date | string;
}

export interface DelayAllActionsQueryParam {
  queryParameters: DelayAllActionsQueryParamProperties;
}

export type DelayAllActionsParameters = DelayAllActionsQueryParam &
  RequestParameters;
export type ListAllDevBoxesParameters = RequestParameters;
export type ListAllDevBoxesByUserParameters = RequestParameters;
export type ListAllEnvironmentsParameters = RequestParameters;
export type ListEnvironmentsParameters = RequestParameters;
export type GetEnvironmentParameters = RequestParameters;

export interface CreateOrUpdateEnvironmentBodyParam {
  /** Represents an environment. */
  body: Environment;
}

export type CreateOrUpdateEnvironmentParameters =
  CreateOrUpdateEnvironmentBodyParam & RequestParameters;
export type DeleteEnvironmentParameters = RequestParameters;
export type ListCatalogsParameters = RequestParameters;
export type GetCatalogParameters = RequestParameters;
export type ListEnvironmentDefinitionsParameters = RequestParameters;
export type ListEnvironmentDefinitionsByCatalogParameters = RequestParameters;
export type GetEnvironmentDefinitionParameters = RequestParameters;
export type ListEnvironmentTypesParameters = RequestParameters;
