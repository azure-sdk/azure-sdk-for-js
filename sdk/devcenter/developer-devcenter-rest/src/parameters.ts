// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { RequestParameters } from "@azure-rest/core-client";
import { DevBox, Environment } from "./models.js";

export type DevCenterListProjectsParameters = RequestParameters;
export type DevCenterGetProjectParameters = RequestParameters;
export type OperationStatusesGetParameters = RequestParameters;
export type DevBoxesListPoolsParameters = RequestParameters;
export type DevBoxesGetPoolParameters = RequestParameters;
export type DevBoxesListAllDevBoxesParameters = RequestParameters;
export type DevBoxesListAllDevBoxesByUserParameters = RequestParameters;
export type DevBoxesListSchedulesByPoolParameters = RequestParameters;
export type DevBoxesGetScheduleByPoolParameters = RequestParameters;
export type DevBoxesListSchedulesByProjectParameters = RequestParameters;
export type DevBoxesListDevBoxesByUserParameters = RequestParameters;
export type DevBoxesGetDevBoxByUserParameters = RequestParameters;

export interface DevBoxesCreateDevBoxBodyParam {
  /** Represents the body request of a Dev Box creation. Dev Box Pool name is required. Optionally set the owner of the Dev Box as local administrator */
  body: DevBox;
}

export type DevBoxesCreateDevBoxParameters = DevBoxesCreateDevBoxBodyParam &
  RequestParameters;
export type DevBoxesDeleteDevBoxParameters = RequestParameters;
export type DevBoxesStartDevBoxParameters = RequestParameters;

export interface DevBoxesStopDevBoxQueryParamProperties {
  /** Optional parameter to hibernate the dev box. */
  hibernate?: boolean;
}

export interface DevBoxesStopDevBoxQueryParam {
  queryParameters?: DevBoxesStopDevBoxQueryParamProperties;
}

export type DevBoxesStopDevBoxParameters = DevBoxesStopDevBoxQueryParam &
  RequestParameters;
export type DevBoxesRestartDevBoxParameters = RequestParameters;
export type DevBoxesRepairDevBoxParameters = RequestParameters;
export type DevBoxesGetRemoteConnectionParameters = RequestParameters;
export type DevBoxesListActionsParameters = RequestParameters;
export type DevBoxesGetActionParameters = RequestParameters;
export type DevBoxesSkipActionParameters = RequestParameters;

export interface DevBoxesDelayActionQueryParamProperties {
  /** The time to delay the Dev Box action or actions until. */
  until: Date | string;
}

export interface DevBoxesDelayActionQueryParam {
  queryParameters: DevBoxesDelayActionQueryParamProperties;
}

export type DevBoxesDelayActionParameters = DevBoxesDelayActionQueryParam &
  RequestParameters;

export interface DevBoxesDelayActionsQueryParamProperties {
  /** The time to delay the Dev Box action or actions until. */
  until: Date | string;
}

export interface DevBoxesDelayActionsQueryParam {
  queryParameters: DevBoxesDelayActionsQueryParamProperties;
}

export type DevBoxesDelayActionsParameters = DevBoxesDelayActionsQueryParam &
  RequestParameters;
export type DevBoxesListOperationsParameters = RequestParameters;
export type DevBoxesGetOperationParameters = RequestParameters;
export type EnvironmentsListEnvironmentsParameters = RequestParameters;
export type EnvironmentsListEnvironmentsByUserParameters = RequestParameters;
export type EnvironmentsGetEnvironmentByUserParameters = RequestParameters;

export interface EnvironmentsCreateOrReplaceEnvironmentBodyParam {
  /** Represents an environment. */
  body: Environment;
}

export type EnvironmentsCreateOrReplaceEnvironmentParameters =
  EnvironmentsCreateOrReplaceEnvironmentBodyParam & RequestParameters;
/** Represents an environment. */
export type EnvironmentResourceMergeAndPatch = Partial<Environment>;

export interface EnvironmentsPatchEnvironmentBodyParam {
  /** Represents an environment. */
  body: EnvironmentResourceMergeAndPatch;
}

export interface EnvironmentsPatchEnvironmentMediaTypesParam {
  /** Set consumer to JSON merge patch. */
  contentType: "application/merge-patch+json";
}

export type EnvironmentsPatchEnvironmentParameters =
  EnvironmentsPatchEnvironmentMediaTypesParam &
    EnvironmentsPatchEnvironmentBodyParam &
    RequestParameters;
export type EnvironmentsDeleteEnvironmentParameters = RequestParameters;
export type EnvironmentsGetOutputsParameters = RequestParameters;
export type EnvironmentsListOperationsParameters = RequestParameters;
export type EnvironmentsGetOperationParameters = RequestParameters;
export type EnvironmentsGetLogsByOperationParameters = RequestParameters;
export type EnvironmentsListActionsParameters = RequestParameters;
export type EnvironmentsGetActionParameters = RequestParameters;
export type EnvironmentsSkipActionParameters = RequestParameters;

export interface EnvironmentsDelayActionQueryParamProperties {
  /** The time to delay the Environment action until. */
  until: Date | string;
}

export interface EnvironmentsDelayActionQueryParam {
  queryParameters: EnvironmentsDelayActionQueryParamProperties;
}

export type EnvironmentsDelayActionParameters =
  EnvironmentsDelayActionQueryParam & RequestParameters;
export type EnvironmentsListCatalogsByProjectParameters = RequestParameters;
export type EnvironmentsGetCatalogParameters = RequestParameters;
export type EnvironmentsListEnvironmentDefinitionsByProjectParameters =
  RequestParameters;
export type EnvironmentsListEnvironmentDefinitionsByCatalogParameters =
  RequestParameters;
export type EnvironmentsGetEnvironmentDefinitionParameters = RequestParameters;
export type EnvironmentsListEnvironmentTypesParameters = RequestParameters;
