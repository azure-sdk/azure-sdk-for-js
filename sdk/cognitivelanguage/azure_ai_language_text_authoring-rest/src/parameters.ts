// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeadersInput } from "@azure/core-rest-pipeline";
import type { RequestParameters } from "@azure-rest/core-client";
import type {
  TextAnalysisAuthoringCreateProjectOptions,
  TextAnalysisAuthoringCopyAuthorizationOptions,
  TextAnalysisAuthoringCopyProjectOptions,
  StringIndexType,
  TextAnalysisAuthoringExportedProject,
  TextAnalysisAuthoringTrainingJobOptions,
  TextAnalysisAuthoringCreateDeploymentOptions,
  TextAnalysisAuthoringDeleteDeploymentOptions,
  TextAnalysisAuthoringSwapDeploymentsOptions,
  TextAnalysisAuthoringExportedModelOptions,
  TextAnalysisAuthoringEvaluationOptions,
  TextAnalysisAuthoringAssignDeploymentResourcesOptions,
  TextAnalysisAuthoringUnassignDeploymentResourcesOptions,
  ProjectKind,
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
export type TextAnalysisAuthoringCreateProjectOptionsResourceMergeAndPatch =
  Partial<TextAnalysisAuthoringCreateProjectOptions>;

export interface CreateProjectBodyParam {
  /** The request body */
  body: TextAnalysisAuthoringCreateProjectOptionsResourceMergeAndPatch;
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
  body: TextAnalysisAuthoringCopyAuthorizationOptions;
}

export type CopyProjectAuthorizationParameters =
  CopyProjectAuthorizationBodyParam & RequestParameters;

export interface CopyProjectBodyParam {
  /** The copy project info. */
  body: TextAnalysisAuthoringCopyProjectOptions;
}

export type CopyProjectParameters = CopyProjectBodyParam & RequestParameters;

export interface ExportQueryParamProperties {
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

export interface ImportHeaders {
  /** The format of the project to import. The currently supported formats are json and aml formats. If not provided, the default is set to json. */
  format?: string;
}

export interface ImportBodyParam {
  /** The project data to import. */
  body: TextAnalysisAuthoringExportedProject;
}

export interface ImportHeaderParam {
  headers?: RawHttpHeadersInput & ImportHeaders;
}

export type ImportParameters = ImportHeaderParam &
  ImportBodyParam &
  RequestParameters;

export interface TrainBodyParam {
  /** The training input parameters. */
  body: TextAnalysisAuthoringTrainingJobOptions;
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
export type GetDeploymentParameters = RequestParameters;

export interface DeployProjectBodyParam {
  /** The new deployment info. */
  body: TextAnalysisAuthoringCreateDeploymentOptions;
}

export type DeployProjectParameters = DeployProjectBodyParam &
  RequestParameters;
export type DeleteDeploymentParameters = RequestParameters;

export interface DeleteDeploymentFromResourcesBodyParam {
  /** The options for deleting the deployment. */
  body: TextAnalysisAuthoringDeleteDeploymentOptions;
}

export type DeleteDeploymentFromResourcesParameters =
  DeleteDeploymentFromResourcesBodyParam & RequestParameters;
export type GetDeploymentDeleteFromResourcesStatusParameters =
  RequestParameters;
export type GetDeploymentStatusParameters = RequestParameters;

export interface SwapDeploymentsBodyParam {
  /** The job object to swap two deployments. */
  body: TextAnalysisAuthoringSwapDeploymentsOptions;
}

export type SwapDeploymentsParameters = SwapDeploymentsBodyParam &
  RequestParameters;
export type GetSwapDeploymentsStatusParameters = RequestParameters;
export type GetExportStatusParameters = RequestParameters;

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
export type GetExportedModelParameters = RequestParameters;

export interface CreateOrUpdateExportedModelBodyParam {
  /** The exported model info. */
  body: TextAnalysisAuthoringExportedModelOptions;
}

export type CreateOrUpdateExportedModelParameters =
  CreateOrUpdateExportedModelBodyParam & RequestParameters;
export type DeleteExportedModelParameters = RequestParameters;
export type GetExportedModelJobStatusParameters = RequestParameters;
export type GetExportedModelManifestParameters = RequestParameters;
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
  body: TextAnalysisAuthoringEvaluationOptions;
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
  body: TextAnalysisAuthoringAssignDeploymentResourcesOptions;
}

export type AssignDeploymentResourcesParameters =
  AssignDeploymentResourcesBodyParam & RequestParameters;

export interface UnassignDeploymentResourcesBodyParam {
  /** The info for the deployment resources to be deleted. */
  body: TextAnalysisAuthoringUnassignDeploymentResourcesOptions;
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
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListAssignedResourceDeploymentsQueryParam {
  queryParameters?: ListAssignedResourceDeploymentsQueryParamProperties;
}

export type ListAssignedResourceDeploymentsParameters =
  ListAssignedResourceDeploymentsQueryParam & RequestParameters;

export interface GetSupportedLanguagesQueryParamProperties {
  /**
   * The project kind, default value is CustomSingleLabelClassification.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind?: ProjectKind;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface GetSupportedLanguagesQueryParam {
  queryParameters?: GetSupportedLanguagesQueryParamProperties;
}

export type GetSupportedLanguagesParameters = GetSupportedLanguagesQueryParam &
  RequestParameters;
export type GetSupportedPrebuiltEntitiesParameters = RequestParameters;

export interface ListTrainingConfigVersionsQueryParamProperties {
  /**
   * The project kind, default value is CustomSingleLabelClassification.
   *
   * Possible values: "CustomSingleLabelClassification", "CustomMultiLabelClassification", "CustomEntityRecognition", "CustomAbstractiveSummarization", "CustomHealthcare", "CustomTextSentiment"
   */
  projectKind?: ProjectKind;
  /** The number of result items to return. */
  top?: number;
  /** The number of result items to skip. */
  skip?: number;
  /** The maximum number of result items per page. */
  maxpagesize?: number;
}

export interface ListTrainingConfigVersionsQueryParam {
  queryParameters?: ListTrainingConfigVersionsQueryParamProperties;
}

export type ListTrainingConfigVersionsParameters =
  ListTrainingConfigVersionsQueryParam & RequestParameters;
