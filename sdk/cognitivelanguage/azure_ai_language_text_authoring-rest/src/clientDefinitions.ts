// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ListProjectsParameters,
  GetProjectParameters,
  CreateProjectParameters,
  DeleteProjectParameters,
  CopyProjectAuthorizationParameters,
  CopyProjectParameters,
  ExportParameters,
  ImportParameters,
  TrainParameters,
  GetCopyProjectStatusParameters,
  ListDeploymentsParameters,
  GetDeploymentParameters,
  DeployProjectParameters,
  DeleteDeploymentParameters,
  DeleteDeploymentFromResourcesParameters,
  GetDeploymentDeleteFromResourcesStatusParameters,
  GetDeploymentStatusParameters,
  SwapDeploymentsParameters,
  GetSwapDeploymentsStatusParameters,
  GetExportStatusParameters,
  ListExportedModelsParameters,
  GetExportedModelParameters,
  CreateOrUpdateExportedModelParameters,
  DeleteExportedModelParameters,
  GetExportedModelJobStatusParameters,
  GetExportedModelManifestParameters,
  GetImportStatusParameters,
  ListTrainedModelsParameters,
  GetTrainedModelParameters,
  DeleteTrainedModelParameters,
  EvaluateModelParameters,
  LoadSnapshotParameters,
  GetEvaluationStatusParameters,
  GetModelEvaluationResultsParameters,
  GetModelEvaluationSummaryParameters,
  GetLoadSnapshotStatusParameters,
  ListDeploymentResourcesParameters,
  AssignDeploymentResourcesParameters,
  UnassignDeploymentResourcesParameters,
  GetAssignDeploymentResourcesStatusParameters,
  GetUnassignDeploymentResourcesStatusParameters,
  ListTrainingJobsParameters,
  GetTrainingStatusParameters,
  CancelTrainingJobParameters,
  GetProjectDeletionStatusParameters,
  ListAssignedResourceDeploymentsParameters,
  GetSupportedLanguagesParameters,
  GetSupportedPrebuiltEntitiesParameters,
  ListTrainingConfigVersionsParameters,
} from "./parameters.js";
import type {
  ListProjects200Response,
  ListProjectsDefaultResponse,
  GetProject200Response,
  GetProjectDefaultResponse,
  CreateProject200Response,
  CreateProject201Response,
  CreateProjectDefaultResponse,
  DeleteProject202Response,
  DeleteProjectDefaultResponse,
  CopyProjectAuthorization200Response,
  CopyProjectAuthorizationDefaultResponse,
  CopyProject202Response,
  CopyProjectDefaultResponse,
  Export202Response,
  ExportDefaultResponse,
  Import202Response,
  ImportDefaultResponse,
  Train202Response,
  TrainDefaultResponse,
  GetCopyProjectStatus200Response,
  GetCopyProjectStatusDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject202Response,
  DeployProjectDefaultResponse,
  DeleteDeployment202Response,
  DeleteDeploymentDefaultResponse,
  DeleteDeploymentFromResources202Response,
  DeleteDeploymentFromResourcesDefaultResponse,
  GetDeploymentDeleteFromResourcesStatus200Response,
  GetDeploymentDeleteFromResourcesStatusDefaultResponse,
  GetDeploymentStatus200Response,
  GetDeploymentStatusDefaultResponse,
  SwapDeployments202Response,
  SwapDeploymentsDefaultResponse,
  GetSwapDeploymentsStatus200Response,
  GetSwapDeploymentsStatusDefaultResponse,
  GetExportStatus200Response,
  GetExportStatusDefaultResponse,
  ListExportedModels200Response,
  ListExportedModelsDefaultResponse,
  GetExportedModel200Response,
  GetExportedModelDefaultResponse,
  CreateOrUpdateExportedModel202Response,
  CreateOrUpdateExportedModelDefaultResponse,
  DeleteExportedModel202Response,
  DeleteExportedModelDefaultResponse,
  GetExportedModelJobStatus200Response,
  GetExportedModelJobStatusDefaultResponse,
  GetExportedModelManifest200Response,
  GetExportedModelManifestDefaultResponse,
  GetImportStatus200Response,
  GetImportStatusDefaultResponse,
  ListTrainedModels200Response,
  ListTrainedModelsDefaultResponse,
  GetTrainedModel200Response,
  GetTrainedModelDefaultResponse,
  DeleteTrainedModel204Response,
  DeleteTrainedModelDefaultResponse,
  EvaluateModel202Response,
  EvaluateModelDefaultResponse,
  LoadSnapshot202Response,
  LoadSnapshotDefaultResponse,
  GetEvaluationStatus200Response,
  GetEvaluationStatusDefaultResponse,
  GetModelEvaluationResults200Response,
  GetModelEvaluationResultsDefaultResponse,
  GetModelEvaluationSummary200Response,
  GetModelEvaluationSummaryDefaultResponse,
  GetLoadSnapshotStatus200Response,
  GetLoadSnapshotStatusDefaultResponse,
  ListDeploymentResources200Response,
  ListDeploymentResourcesDefaultResponse,
  AssignDeploymentResources202Response,
  AssignDeploymentResourcesDefaultResponse,
  UnassignDeploymentResources202Response,
  UnassignDeploymentResourcesDefaultResponse,
  GetAssignDeploymentResourcesStatus200Response,
  GetAssignDeploymentResourcesStatusDefaultResponse,
  GetUnassignDeploymentResourcesStatus200Response,
  GetUnassignDeploymentResourcesStatusDefaultResponse,
  ListTrainingJobs200Response,
  ListTrainingJobsDefaultResponse,
  GetTrainingStatus200Response,
  GetTrainingStatusDefaultResponse,
  CancelTrainingJob202Response,
  CancelTrainingJobDefaultResponse,
  GetProjectDeletionStatus200Response,
  GetProjectDeletionStatusDefaultResponse,
  ListAssignedResourceDeployments200Response,
  ListAssignedResourceDeploymentsDefaultResponse,
  GetSupportedLanguages200Response,
  GetSupportedLanguagesDefaultResponse,
  GetSupportedPrebuiltEntities200Response,
  GetSupportedPrebuiltEntitiesDefaultResponse,
  ListTrainingConfigVersions200Response,
  ListTrainingConfigVersionsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface ListProjects {
  /** Lists the existing projects. */
  get(
    options?: ListProjectsParameters,
  ): StreamableMethod<ListProjects200Response | ListProjectsDefaultResponse>;
}

export interface GetProject {
  /** Gets the details of a project. */
  get(
    options?: GetProjectParameters,
  ): StreamableMethod<GetProject200Response | GetProjectDefaultResponse>;
  /** The most basic operation that applies to a resource. */
  patch(
    options: CreateProjectParameters,
  ): StreamableMethod<
    | CreateProject200Response
    | CreateProject201Response
    | CreateProjectDefaultResponse
  >;
  /** Deletes a project. */
  delete(
    options?: DeleteProjectParameters,
  ): StreamableMethod<DeleteProject202Response | DeleteProjectDefaultResponse>;
}

export interface CopyProjectAuthorization {
  /** Generates a copy project operation authorization to the current target Azure resource. */
  post(
    options: CopyProjectAuthorizationParameters,
  ): StreamableMethod<
    | CopyProjectAuthorization200Response
    | CopyProjectAuthorizationDefaultResponse
  >;
}

export interface CopyProject {
  /** Copies an existing project to another Azure resource. */
  post(
    options: CopyProjectParameters,
  ): StreamableMethod<CopyProject202Response | CopyProjectDefaultResponse>;
}

export interface Export {
  /** Triggers a job to export a project's data. */
  post(
    options: ExportParameters,
  ): StreamableMethod<Export202Response | ExportDefaultResponse>;
}

export interface Import {
  /** Triggers a job to import a project. If a project with the same name already exists, the data of that project is replaced. */
  post(
    options: ImportParameters,
  ): StreamableMethod<Import202Response | ImportDefaultResponse>;
}

export interface Train {
  /** Triggers a training job for a project. */
  post(
    options: TrainParameters,
  ): StreamableMethod<Train202Response | TrainDefaultResponse>;
}

export interface GetCopyProjectStatus {
  /** Gets the status of an existing copy project job. */
  get(
    options?: GetCopyProjectStatusParameters,
  ): StreamableMethod<
    GetCopyProjectStatus200Response | GetCopyProjectStatusDefaultResponse
  >;
}

export interface ListDeployments {
  /** Lists the deployments belonging to a project. */
  get(
    options?: ListDeploymentsParameters,
  ): StreamableMethod<
    ListDeployments200Response | ListDeploymentsDefaultResponse
  >;
}

export interface GetDeployment {
  /** Gets the details of a deployment. */
  get(
    options?: GetDeploymentParameters,
  ): StreamableMethod<GetDeployment200Response | GetDeploymentDefaultResponse>;
  /** Creates a new deployment or replaces an existing one. */
  put(
    options: DeployProjectParameters,
  ): StreamableMethod<DeployProject202Response | DeployProjectDefaultResponse>;
  /** Deletes a project deployment. */
  delete(
    options?: DeleteDeploymentParameters,
  ): StreamableMethod<
    DeleteDeployment202Response | DeleteDeploymentDefaultResponse
  >;
}

export interface DeleteDeploymentFromResources {
  /** Deletes a project deployment from the specified assigned resources. */
  post(
    options: DeleteDeploymentFromResourcesParameters,
  ): StreamableMethod<
    | DeleteDeploymentFromResources202Response
    | DeleteDeploymentFromResourcesDefaultResponse
  >;
}

export interface GetDeploymentDeleteFromResourcesStatus {
  /** Gets the status of an existing delete deployment from specific resources job. */
  get(
    options?: GetDeploymentDeleteFromResourcesStatusParameters,
  ): StreamableMethod<
    | GetDeploymentDeleteFromResourcesStatus200Response
    | GetDeploymentDeleteFromResourcesStatusDefaultResponse
  >;
}

export interface GetDeploymentStatus {
  /** Gets the status of an existing deployment job. */
  get(
    options?: GetDeploymentStatusParameters,
  ): StreamableMethod<
    GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse
  >;
}

export interface SwapDeployments {
  /** Swaps two existing deployments with each other. */
  post(
    options: SwapDeploymentsParameters,
  ): StreamableMethod<
    SwapDeployments202Response | SwapDeploymentsDefaultResponse
  >;
}

export interface GetSwapDeploymentsStatus {
  /** Gets the status of an existing swap deployment job. */
  get(
    options?: GetSwapDeploymentsStatusParameters,
  ): StreamableMethod<
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse
  >;
}

export interface GetExportStatus {
  /** Gets the status of an export job. Once job completes, returns the project metadata, and assets. */
  get(
    options?: GetExportStatusParameters,
  ): StreamableMethod<
    GetExportStatus200Response | GetExportStatusDefaultResponse
  >;
}

export interface ListExportedModels {
  /** Lists the exported models belonging to a project. */
  get(
    options?: ListExportedModelsParameters,
  ): StreamableMethod<
    ListExportedModels200Response | ListExportedModelsDefaultResponse
  >;
}

export interface GetExportedModel {
  /** Gets the details of an exported model. */
  get(
    options?: GetExportedModelParameters,
  ): StreamableMethod<
    GetExportedModel200Response | GetExportedModelDefaultResponse
  >;
  /** Creates a new exported model or replaces an existing one. */
  put(
    options: CreateOrUpdateExportedModelParameters,
  ): StreamableMethod<
    | CreateOrUpdateExportedModel202Response
    | CreateOrUpdateExportedModelDefaultResponse
  >;
  /** Deletes an existing exported model. */
  delete(
    options?: DeleteExportedModelParameters,
  ): StreamableMethod<
    DeleteExportedModel202Response | DeleteExportedModelDefaultResponse
  >;
}

export interface GetExportedModelJobStatus {
  /** Gets the status for an existing job to create or update an exported model. */
  get(
    options?: GetExportedModelJobStatusParameters,
  ): StreamableMethod<
    | GetExportedModelJobStatus200Response
    | GetExportedModelJobStatusDefaultResponse
  >;
}

export interface GetExportedModelManifest {
  /** Gets the details and URL needed to download the exported model. */
  get(
    options?: GetExportedModelManifestParameters,
  ): StreamableMethod<
    | GetExportedModelManifest200Response
    | GetExportedModelManifestDefaultResponse
  >;
}

export interface GetImportStatus {
  /** Gets the status for an import. */
  get(
    options?: GetImportStatusParameters,
  ): StreamableMethod<
    GetImportStatus200Response | GetImportStatusDefaultResponse
  >;
}

export interface ListTrainedModels {
  /** Lists the trained models belonging to a project. */
  get(
    options?: ListTrainedModelsParameters,
  ): StreamableMethod<
    ListTrainedModels200Response | ListTrainedModelsDefaultResponse
  >;
}

export interface GetTrainedModel {
  /** Gets the details of a trained model. */
  get(
    options?: GetTrainedModelParameters,
  ): StreamableMethod<
    GetTrainedModel200Response | GetTrainedModelDefaultResponse
  >;
  /** Deletes an existing trained model. */
  delete(
    options?: DeleteTrainedModelParameters,
  ): StreamableMethod<
    DeleteTrainedModel204Response | DeleteTrainedModelDefaultResponse
  >;
}

export interface EvaluateModel {
  /** Triggers evaluation operation on a trained model. */
  post(
    options: EvaluateModelParameters,
  ): StreamableMethod<EvaluateModel202Response | EvaluateModelDefaultResponse>;
}

export interface LoadSnapshot {
  /** Long-running operation. */
  post(
    options?: LoadSnapshotParameters,
  ): StreamableMethod<LoadSnapshot202Response | LoadSnapshotDefaultResponse>;
}

export interface GetEvaluationStatus {
  /** Gets the status for an evaluation job. */
  get(
    options?: GetEvaluationStatusParameters,
  ): StreamableMethod<
    GetEvaluationStatus200Response | GetEvaluationStatusDefaultResponse
  >;
}

export interface GetModelEvaluationResults {
  /** Gets the detailed results of the evaluation for a trained model. This includes the raw inference results for the data included in the evaluation process. */
  get(
    options: GetModelEvaluationResultsParameters,
  ): StreamableMethod<
    | GetModelEvaluationResults200Response
    | GetModelEvaluationResultsDefaultResponse
  >;
}

export interface GetModelEvaluationSummary {
  /** Gets the evaluation summary of a trained model. The summary includes high level performance measurements of the model e.g., F1, Precision, Recall, etc. */
  get(
    options?: GetModelEvaluationSummaryParameters,
  ): StreamableMethod<
    | GetModelEvaluationSummary200Response
    | GetModelEvaluationSummaryDefaultResponse
  >;
}

export interface GetLoadSnapshotStatus {
  /** Gets the status for loading a snapshot. */
  get(
    options?: GetLoadSnapshotStatusParameters,
  ): StreamableMethod<
    GetLoadSnapshotStatus200Response | GetLoadSnapshotStatusDefaultResponse
  >;
}

export interface ListDeploymentResources {
  /** Lists the deployments resources assigned to the project. */
  get(
    options?: ListDeploymentResourcesParameters,
  ): StreamableMethod<
    ListDeploymentResources200Response | ListDeploymentResourcesDefaultResponse
  >;
}

export interface AssignDeploymentResources {
  /** Assign new Azure resources to a project to allow deploying new deployments to them. This API is available only via AAD authentication and not supported via subscription key authentication. For more details about AAD authentication, check here: https://learn.microsoft.com/en-us/azure/cognitive-services/authentication?tabs=powershell#authenticate-with-azure-active-directory */
  post(
    options: AssignDeploymentResourcesParameters,
  ): StreamableMethod<
    | AssignDeploymentResources202Response
    | AssignDeploymentResourcesDefaultResponse
  >;
}

export interface UnassignDeploymentResources {
  /** Unassign resources from a project. This disallows deploying new deployments to these resources, and deletes existing deployments assigned to them. */
  post(
    options: UnassignDeploymentResourcesParameters,
  ): StreamableMethod<
    | UnassignDeploymentResources202Response
    | UnassignDeploymentResourcesDefaultResponse
  >;
}

export interface GetAssignDeploymentResourcesStatus {
  /** Gets the status of an existing assign deployment resources job. */
  get(
    options?: GetAssignDeploymentResourcesStatusParameters,
  ): StreamableMethod<
    | GetAssignDeploymentResourcesStatus200Response
    | GetAssignDeploymentResourcesStatusDefaultResponse
  >;
}

export interface GetUnassignDeploymentResourcesStatus {
  /** Gets the status of an existing unassign deployment resources job. */
  get(
    options?: GetUnassignDeploymentResourcesStatusParameters,
  ): StreamableMethod<
    | GetUnassignDeploymentResourcesStatus200Response
    | GetUnassignDeploymentResourcesStatusDefaultResponse
  >;
}

export interface ListTrainingJobs {
  /** Lists the non-expired training jobs created for a project. */
  get(
    options?: ListTrainingJobsParameters,
  ): StreamableMethod<
    ListTrainingJobs200Response | ListTrainingJobsDefaultResponse
  >;
}

export interface GetTrainingStatus {
  /** Gets the status for a training job. */
  get(
    options?: GetTrainingStatusParameters,
  ): StreamableMethod<
    GetTrainingStatus200Response | GetTrainingStatusDefaultResponse
  >;
}

export interface CancelTrainingJob {
  /** Triggers a cancellation for a running training job. */
  post(
    options?: CancelTrainingJobParameters,
  ): StreamableMethod<
    CancelTrainingJob202Response | CancelTrainingJobDefaultResponse
  >;
}

export interface GetProjectDeletionStatus {
  /** Gets the status for a project deletion job. */
  get(
    options?: GetProjectDeletionStatusParameters,
  ): StreamableMethod<
    | GetProjectDeletionStatus200Response
    | GetProjectDeletionStatusDefaultResponse
  >;
}

export interface ListAssignedResourceDeployments {
  /** Lists the deployments to which an Azure resource is assigned. This doesn't return deployments belonging to projects owned by this resource. It only returns deployments belonging to projects owned by other resources. */
  get(
    options?: ListAssignedResourceDeploymentsParameters,
  ): StreamableMethod<
    | ListAssignedResourceDeployments200Response
    | ListAssignedResourceDeploymentsDefaultResponse
  >;
}

export interface GetSupportedLanguages {
  /** Lists the supported languages. */
  get(
    options?: GetSupportedLanguagesParameters,
  ): StreamableMethod<
    GetSupportedLanguages200Response | GetSupportedLanguagesDefaultResponse
  >;
}

export interface GetSupportedPrebuiltEntities {
  /** Lists the supported prebuilt entities that can be used while creating composed entities. */
  get(
    options?: GetSupportedPrebuiltEntitiesParameters,
  ): StreamableMethod<
    | GetSupportedPrebuiltEntities200Response
    | GetSupportedPrebuiltEntitiesDefaultResponse
  >;
}

export interface ListTrainingConfigVersions {
  /** Lists the support training config version for a given project type. */
  get(
    options?: ListTrainingConfigVersionsParameters,
  ): StreamableMethod<
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse
  >;
}

export interface Routes {
  /** Resource for '/authoring/analyze-text/projects' has methods for the following verbs: get */
  (path: "/authoring/analyze-text/projects"): ListProjects;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}' has methods for the following verbs: get, patch, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}",
    projectName: string,
  ): GetProject;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/:authorize-copy' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/:authorize-copy",
    projectName: string,
  ): CopyProjectAuthorization;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/:copy' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/:copy",
    projectName: string,
  ): CopyProject;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/:export' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/:export",
    projectName: string,
  ): Export;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/:import' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/:import",
    projectName: string,
  ): Import;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/:train' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/:train",
    projectName: string,
  ): Train;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/copy/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/copy/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetCopyProjectStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments",
    projectName: string,
  ): ListDeployments;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}",
    projectName: string,
    deploymentName: string,
  ): GetDeployment;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}/:delete-from-resources' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/:delete-from-resources",
    projectName: string,
    deploymentName: string,
  ): DeleteDeploymentFromResources;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}/delete-from-resources/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/delete-from-resources/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string,
  ): GetDeploymentDeleteFromResourcesStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/\{deploymentName\}/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}",
    projectName: string,
    deploymentName: string,
    jobId: string,
  ): GetDeploymentStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/:swap' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/:swap",
    projectName: string,
  ): SwapDeployments;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/deployments/swap/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/deployments/swap/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetSwapDeploymentsStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/export/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/export/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetExportStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/exported-models' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/exported-models",
    projectName: string,
  ): ListExportedModels;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/exported-models/\{exportedModelName\}' has methods for the following verbs: get, put, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}",
    projectName: string,
    exportedModelName: string,
  ): GetExportedModel;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/exported-models/\{exportedModelName\}/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}/jobs/{jobId}",
    projectName: string,
    exportedModelName: string,
    jobId: string,
  ): GetExportedModelJobStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/exported-models/\{exportedModelName\}/manifest' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}/manifest",
    projectName: string,
    exportedModelName: string,
  ): GetExportedModelManifest;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/import/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/import/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetImportStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models",
    projectName: string,
  ): ListTrainedModels;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}' has methods for the following verbs: get, delete */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}",
    projectName: string,
    trainedModelLabel: string,
  ): GetTrainedModel;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/:evaluate' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:evaluate",
    projectName: string,
    trainedModelLabel: string,
  ): EvaluateModel;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/:load-snapshot' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:load-snapshot",
    projectName: string,
    trainedModelLabel: string,
  ): LoadSnapshot;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/evaluate/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluate/jobs/{jobId}",
    projectName: string,
    trainedModelLabel: string,
    jobId: string,
  ): GetEvaluationStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/evaluation/result' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/result",
    projectName: string,
    trainedModelLabel: string,
  ): GetModelEvaluationResults;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/evaluation/summary-result' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/summary-result",
    projectName: string,
    trainedModelLabel: string,
  ): GetModelEvaluationSummary;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/models/\{trainedModelLabel\}/load-snapshot/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/load-snapshot/jobs/{jobId}",
    projectName: string,
    trainedModelLabel: string,
    jobId: string,
  ): GetLoadSnapshotStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/resources' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/resources",
    projectName: string,
  ): ListDeploymentResources;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/resources/:assign' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/resources/:assign",
    projectName: string,
  ): AssignDeploymentResources;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/resources/:unassign' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/resources/:unassign",
    projectName: string,
  ): UnassignDeploymentResources;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/resources/assign/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/resources/assign/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetAssignDeploymentResourcesStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/resources/unassign/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/resources/unassign/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetUnassignDeploymentResourcesStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/train/jobs' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/train/jobs",
    projectName: string,
  ): ListTrainingJobs;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/train/jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}",
    projectName: string,
    jobId: string,
  ): GetTrainingStatus;
  /** Resource for '/authoring/analyze-text/projects/\{projectName\}/train/jobs/\{jobId\}/:cancel' has methods for the following verbs: post */
  (
    path: "/authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}/:cancel",
    projectName: string,
    jobId: string,
  ): CancelTrainingJob;
  /** Resource for '/authoring/analyze-text/projects/global/deletion-jobs/\{jobId\}' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/deletion-jobs/{jobId}",
    jobId: string,
  ): GetProjectDeletionStatus;
  /** Resource for '/authoring/analyze-text/projects/global/deployments/resources' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/deployments/resources",
  ): ListAssignedResourceDeployments;
  /** Resource for '/authoring/analyze-text/projects/global/languages' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/languages",
  ): GetSupportedLanguages;
  /** Resource for '/authoring/analyze-text/projects/global/prebuilt-entities' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/prebuilt-entities",
  ): GetSupportedPrebuiltEntities;
  /** Resource for '/authoring/analyze-text/projects/global/training-config-versions' has methods for the following verbs: get */
  (
    path: "/authoring/analyze-text/projects/global/training-config-versions",
  ): ListTrainingConfigVersions;
}

export type AuthoringClient = Client & {
  path: Routes;
};
