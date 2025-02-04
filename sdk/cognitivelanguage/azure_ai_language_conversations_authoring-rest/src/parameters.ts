// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RequestParameters } from "@azure-rest/core-client";
import type {
  AnalyzeConversationAuthoringCreateProjectOptions,
  AnalyzeConversationAuthoringCopyAuthorizationOptions,
  AnalyzeConversationAuthoringCopyProjectOptions,
  ExportedProjectFormat,
  StringIndexType,
  AnalyzeConversationAuthoringExportedProject,
  AnalyzeConversationAuthoringTrainingJobOptions,
  AnalyzeConversationAuthoringSwapDeploymentsOptions,
  AnalyzeConversationAuthoringCreateDeploymentOptions,
  AnalyzeConversationAuthoringDeleteDeploymentOptions,
  AnalyzeConversationAuthoringEvaluationOptions,
  AnalyzeConversationAuthoringAssignDeploymentResourcesOptions,
  AnalyzeConversationAuthoringUnassignDeploymentResourcesOptions,
  ProjectKind,
  ExportedModelOptions,
} from "./models.js";

export interface ListProjectsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListProjectsQueryParam {
  queryParameters?: ListProjectsQueryParamProperties;
}

export type ListProjectsParameters = ListProjectsQueryParam & RequestParameters;
export type GetProjectParameters = RequestParameters;
/** The request body */
export type AnalyzeConversationAuthoringCreateProjectOptionsResourceMergeAndPatch =
  Partial<AnalyzeConversationAuthoringCreateProjectOptions>;

export interface CreateProjectBodyParam {
  /** The request body */
  body: AnalyzeConversationAuthoringCreateProjectOptionsResourceMergeAndPatch;
}

export interface CreateProjectMediaTypesParam {
  /** This request has a JSON Merge Patch body. */
  contentType: "application/merge-patch+json";
}

export type CreateProjectParameters = CreateProjectMediaTypesParam &
  CreateProjectBodyParam &
  RequestParameters;
export type DeleteProjectParameters = RequestParameters;

export interface CopyProjectAuthorizationBodyParam {
  body: AnalyzeConversationAuthoringCopyAuthorizationOptions;
}

export type CopyProjectAuthorizationParameters =
  CopyProjectAuthorizationBodyParam & RequestParameters;

export interface CopyProjectBodyParam {
  /** The copy project info. */
  body: AnalyzeConversationAuthoringCopyProjectOptions;
}

export type CopyProjectParameters = CopyProjectBodyParam & RequestParameters;

export interface ExportQueryParamProperties {
  /**
   * The format of the exported project file to use.
   *
   * Possible values: "Conversation", "Luis"
   */
  format?: ExportedProjectFormat;
  /**
   * Specifies the method used to interpret string offsets. For additional information see https://aka.ms/text-analytics-offsets.
   *
   * Possible values: "Utf16CodeUnit"
   */
  stringIndexType: StringIndexType;
  /** Kind of asset to export. */
  assetKind?: string;
  /** Trained model label to export. If the trainedModelLabel is null, the default behavior is to export the current working copy. */
  trainedModelLabel?: string;
}

export interface ExportQueryParam {
  queryParameters: ExportQueryParamProperties;
}

export type ExportParameters = ExportQueryParam & RequestParameters;

export interface ImportBodyParam {
  /** The project data to import. */
  body: AnalyzeConversationAuthoringExportedProject;
}

export interface ImportQueryParamProperties {
  /**
   * The format of the exported project file to use.
   *
   * Possible values: "Conversation", "Luis"
   */
  format?: ExportedProjectFormat;
}

export interface ImportQueryParam {
  queryParameters?: ImportQueryParamProperties;
}

export type ImportParameters = ImportQueryParam &
  ImportBodyParam &
  RequestParameters;

export interface TrainBodyParam {
  /** The training input parameters. */
  body: AnalyzeConversationAuthoringTrainingJobOptions;
}

export type TrainParameters = TrainBodyParam & RequestParameters;
export type GetCopyProjectStatusParameters = RequestParameters;

export interface ListDeploymentsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListDeploymentsQueryParam {
  queryParameters?: ListDeploymentsQueryParamProperties;
}

export type ListDeploymentsParameters = ListDeploymentsQueryParam &
  RequestParameters;

export interface SwapDeploymentsBodyParam {
  /** The job object to swap two deployments. */
  body: AnalyzeConversationAuthoringSwapDeploymentsOptions;
}

export type SwapDeploymentsParameters = SwapDeploymentsBodyParam &
  RequestParameters;
export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** The new deployment info. */
  body: AnalyzeConversationAuthoringCreateDeploymentOptions;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
export type DeleteDeploymentParameters = RequestParameters;

export interface DeleteDeploymentFromResourcesBodyParam {
  /** The options for deleting the deployment. */
  body: AnalyzeConversationAuthoringDeleteDeploymentOptions;
}

export type DeleteDeploymentFromResourcesParameters =
  DeleteDeploymentFromResourcesBodyParam & RequestParameters;
export type GetDeploymentDeleteFromResourcesStatusParameters =
  RequestParameters;
export type GetDeploymentStatusParameters = RequestParameters;
export type GetSwapDeploymentsStatusParameters = RequestParameters;
export type GetExportStatusParameters = RequestParameters;
export type GetImportStatusParameters = RequestParameters;

export interface ListTrainedModelsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTrainedModelsQueryParam {
  queryParameters?: ListTrainedModelsQueryParamProperties;
}

export type ListTrainedModelsParameters = ListTrainedModelsQueryParam &
  RequestParameters;
export type GetTrainedModelParameters = RequestParameters;
export type DeleteTrainedModelParameters = RequestParameters;

export interface EvaluateModelBodyParam {
  /** The training input parameters. */
  body: AnalyzeConversationAuthoringEvaluationOptions;
}

export type EvaluateModelParameters = EvaluateModelBodyParam &
  RequestParameters;
export type LoadSnapshotParameters = RequestParameters;
export type GetEvaluationStatusParameters = RequestParameters;

export interface GetModelEvaluationResultsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
  /**
   * Specifies the method used to interpret string offsets. For additional information see https://aka.ms/text-analytics-offsets.
   *
   * Possible values: "Utf16CodeUnit"
   */
  stringIndexType: StringIndexType;
}

export interface GetModelEvaluationResultsQueryParam {
  queryParameters: GetModelEvaluationResultsQueryParamProperties;
}

export type GetModelEvaluationResultsParameters =
  GetModelEvaluationResultsQueryParam & RequestParameters;
export type GetModelEvaluationSummaryParameters = RequestParameters;
export type GetLoadSnapshotStatusParameters = RequestParameters;

export interface ListDeploymentResourcesQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListDeploymentResourcesQueryParam {
  queryParameters?: ListDeploymentResourcesQueryParamProperties;
}

export type ListDeploymentResourcesParameters =
  ListDeploymentResourcesQueryParam & RequestParameters;

export interface AssignDeploymentResourcesBodyParam {
  /** The new project resources info. */
  body: AnalyzeConversationAuthoringAssignDeploymentResourcesOptions;
}

export type AssignDeploymentResourcesParameters =
  AssignDeploymentResourcesBodyParam & RequestParameters;

export interface UnassignDeploymentResourcesBodyParam {
  /** The info for the deployment resources to be deleted. */
  body: AnalyzeConversationAuthoringUnassignDeploymentResourcesOptions;
}

export type UnassignDeploymentResourcesParameters =
  UnassignDeploymentResourcesBodyParam & RequestParameters;
export type GetAssignDeploymentResourcesStatusParameters = RequestParameters;
export type GetUnassignDeploymentResourcesStatusParameters = RequestParameters;

export interface ListTrainingJobsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTrainingJobsQueryParam {
  queryParameters?: ListTrainingJobsQueryParamProperties;
}

export type ListTrainingJobsParameters = ListTrainingJobsQueryParam &
  RequestParameters;
export type GetTrainingStatusParameters = RequestParameters;
export type CancelTrainingJobParameters = RequestParameters;
export type GetProjectDeletionStatusParameters = RequestParameters;

export interface ListAssignedResourceDeploymentsQueryParamProperties {
  /** The maximum number of resources to return from the collection. */
  top?: number;
  /** An offset into the collection of the first resource to be returned. */
  skip?: number;
  /** The maximum number of resources to include in a single response. */
  maxpagesize?: number;
}

export interface ListAssignedResourceDeploymentsQueryParam {
  queryParameters?: ListAssignedResourceDeploymentsQueryParamProperties;
}

export type ListAssignedResourceDeploymentsParameters =
  ListAssignedResourceDeploymentsQueryParam & RequestParameters;

export interface GetSupportedLanguagesQueryParamProperties {
  /**
   * The project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKind;
  /** The maximum number of resources to return from the collection. */
  top?: number;
  /** An offset into the collection of the first resource to be returned. */
  skip?: number;
  /** The maximum number of resources to include in a single response. */
  maxpagesize?: number;
}

export interface GetSupportedLanguagesQueryParam {
  queryParameters: GetSupportedLanguagesQueryParamProperties;
}

export type GetSupportedLanguagesParameters = GetSupportedLanguagesQueryParam &
  RequestParameters;

export interface GetSupportedPrebuiltEntitiesQueryParamProperties {
  /** The language to get supported prebuilt entities for. Required if multilingual is false. This is BCP-47 representation of a language. For example, use "en" for English, "en-gb" for English (UK), "es" for Spanish etc. */
  language?: string;
  /** Whether to get the support prebuilt entities for multilingual or monolingual projects. If true, the language parameter is ignored. */
  multilingual?: string;
  /** The maximum number of resources to return from the collection. */
  top?: number;
  /** An offset into the collection of the first resource to be returned. */
  skip?: number;
  /** The maximum number of resources to include in a single response. */
  maxpagesize?: number;
}

export interface GetSupportedPrebuiltEntitiesQueryParam {
  queryParameters?: GetSupportedPrebuiltEntitiesQueryParamProperties;
}

export type GetSupportedPrebuiltEntitiesParameters =
  GetSupportedPrebuiltEntitiesQueryParam & RequestParameters;

export interface ListTrainingConfigVersionsQueryParamProperties {
  /**
   * The project kind.
   *
   * Possible values: "Conversation", "Orchestration", "CustomConversationSummarization"
   */
  projectKind: ProjectKind;
  /** The maximum number of resources to return from the collection. */
  top?: number;
  /** An offset into the collection of the first resource to be returned. */
  skip?: number;
  /** The maximum number of resources to include in a single response. */
  maxpagesize?: number;
}

export interface ListTrainingConfigVersionsQueryParam {
  queryParameters: ListTrainingConfigVersionsQueryParamProperties;
}

export type ListTrainingConfigVersionsParameters =
  ListTrainingConfigVersionsQueryParam & RequestParameters;
export type GetExportedModelParameters = RequestParameters;

export interface ListExportedModelsQueryParamProperties {
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListExportedModelsQueryParam {
  queryParameters?: ListExportedModelsQueryParamProperties;
}

export type ListExportedModelsParameters = ListExportedModelsQueryParam &
  RequestParameters;
export type DeleteExportedModelParameters = RequestParameters;

export interface CreateOrUpdateExportedModelBodyParam {
  /** The exported model info. */
  body: ExportedModelOptions;
}

export type CreateOrUpdateExportedModelParameters =
  CreateOrUpdateExportedModelBodyParam & RequestParameters;
export type GetExportedModelJobStatusParameters = RequestParameters;
