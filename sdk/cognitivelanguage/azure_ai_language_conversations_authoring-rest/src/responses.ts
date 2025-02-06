// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { RawHttpHeaders } from "@azure/core-rest-pipeline";
import type { HttpResponse } from "@azure-rest/core-client";
import type {
  PagedAnalyzeConversationAuthoringProjectMetadataOutput,
  ErrorResponseOutput,
  AnalyzeConversationAuthoringProjectMetadataOutput,
  AnalyzeConversationAuthoringCopyProjectOptionsOutput,
  AnalyzeConversationAuthoringCopyProjectJobStateOutput,
  PagedAnalyzeConversationAuthoringProjectDeploymentOutput,
  AnalyzeConversationAuthoringProjectDeploymentOutput,
  AnalyzeConversationAuthoringDeploymentDeleteFromResourcesJobStateOutput,
  AnalyzeConversationAuthoringDeploymentJobStateOutput,
  AnalyzeConversationAuthoringSwapDeploymentsJobStateOutput,
  AnalyzeConversationAuthoringExportProjectJobStateOutput,
  AnalyzeConversationAuthoringImportProjectJobStateOutput,
  PagedAnalyzeConversationAuthoringProjectTrainedModelOutput,
  AnalyzeConversationAuthoringProjectTrainedModelOutput,
  AnalyzeConversationAuthoringEvaluationJobStateOutput,
  PagedAnalyzeConversationAuthoringUtteranceEvaluationResultOutput,
  AnalyzeConversationAuthoringEvaluationSummaryOutput,
  AnalyzeConversationAuthoringLoadSnapshotJobStateOutput,
  PagedAnalyzeConversationAuthoringAssignedDeploymentResourceOutput,
  AnalyzeConversationAuthoringDeploymentResourcesJobStateOutput,
  PagedAnalyzeConversationAuthoringTrainingJobStateOutput,
  AnalyzeConversationAuthoringTrainingJobStateOutput,
  AnalyzeConversationAuthoringProjectDeletionJobStateOutput,
  AnalyzeConversationAuthoringAssignedResourceDeploymentsMetadataOutput,
  AnalyzeConversationAuthoringSupportedLanguagesOutput,
  AnalyzeConversationAuthoringPrebuiltEntitiesOutput,
  AnalyzeConversationAuthoringTrainingConfigVersionsOutput,
  AnalyzeConversationAuthoringExportedTrainedModelOutput,
  PagedAnalyzeConversationAuthoringExportedTrainedModelOutput,
  AnalyzeConversationAuthoringExportedModelJobStateOutput,
} from "./outputModels.js";

/** The request has succeeded. */
export interface ListProjects200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringProjectMetadataOutput;
}

export interface ListProjectsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetProject200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringProjectMetadataOutput;
}

export interface GetProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface CreateProject200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringProjectMetadataOutput;
}

/** The request has succeeded and a new resource has been created as a result. */
export interface CreateProject201Response extends HttpResponse {
  status: "201";
  body: AnalyzeConversationAuthoringProjectMetadataOutput;
}

export interface CreateProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeleteProject202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteProject202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeleteProject202Headers;
}

export interface DeleteProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deleteProject operation */
export interface DeleteProjectLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface CopyProjectAuthorization200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringCopyProjectOptionsOutput;
}

export interface CopyProjectAuthorizationDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CopyProject202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CopyProject202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CopyProject202Headers;
}

export interface CopyProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running copyProject operation */
export interface CopyProjectLogicalResponse extends HttpResponse {
  status: "200";
}

export interface Export202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Export202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Export202Headers;
}

export interface ExportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running export operation */
export interface ExportLogicalResponse extends HttpResponse {
  status: "200";
}

export interface Import202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Import202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Import202Headers;
}

export interface ImportDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running import operation */
export interface ImportLogicalResponse extends HttpResponse {
  status: "200";
}

export interface Train202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface Train202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & Train202Headers;
}

export interface TrainDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running train operation */
export interface TrainLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetCopyProjectStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringCopyProjectJobStateOutput;
}

export interface GetCopyProjectStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListDeployments200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringProjectDeploymentOutput;
}

export interface ListDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface SwapDeployments202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface SwapDeployments202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & SwapDeployments202Headers;
}

export interface SwapDeploymentsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running swapDeployments operation */
export interface SwapDeploymentsLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetDeployment200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringProjectDeploymentOutput;
}

export interface GetDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeployProject202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeployProject202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeployProject202Headers;
}

export interface DeployProjectDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deployProject operation */
export interface DeployProjectLogicalResponse extends HttpResponse {
  status: "200";
}

export interface DeleteDeployment202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteDeployment202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeleteDeployment202Headers;
}

export interface DeleteDeploymentDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deleteDeployment operation */
export interface DeleteDeploymentLogicalResponse extends HttpResponse {
  status: "200";
}

export interface DeleteDeploymentFromResources202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteDeploymentFromResources202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeleteDeploymentFromResources202Headers;
}

export interface DeleteDeploymentFromResourcesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deleteDeploymentFromResources operation */
export interface DeleteDeploymentFromResourcesLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetDeploymentDeleteFromResourcesStatus200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringDeploymentDeleteFromResourcesJobStateOutput;
}

export interface GetDeploymentDeleteFromResourcesStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetDeploymentStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringDeploymentJobStateOutput;
}

export interface GetDeploymentStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetSwapDeploymentsStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringSwapDeploymentsJobStateOutput;
}

export interface GetSwapDeploymentsStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetExportStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringExportProjectJobStateOutput;
}

export interface GetExportStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetImportStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringImportProjectJobStateOutput;
}

export interface GetImportStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListTrainedModels200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringProjectTrainedModelOutput;
}

export interface ListTrainedModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetTrainedModel200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringProjectTrainedModelOutput;
}

export interface GetTrainedModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** There is no content to send for this request, but the headers may be useful. */
export interface DeleteTrainedModel204Response extends HttpResponse {
  status: "204";
}

export interface DeleteTrainedModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface EvaluateModel202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface EvaluateModel202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & EvaluateModel202Headers;
}

export interface EvaluateModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running evaluateModel operation */
export interface EvaluateModelLogicalResponse extends HttpResponse {
  status: "200";
}

export interface LoadSnapshot202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface LoadSnapshot202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & LoadSnapshot202Headers;
}

export interface LoadSnapshotDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running loadSnapshot operation */
export interface LoadSnapshotLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetEvaluationStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringEvaluationJobStateOutput;
}

export interface GetEvaluationStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetModelEvaluationResults200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringUtteranceEvaluationResultOutput;
}

export interface GetModelEvaluationResultsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetModelEvaluationSummary200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringEvaluationSummaryOutput;
}

export interface GetModelEvaluationSummaryDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetLoadSnapshotStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringLoadSnapshotJobStateOutput;
}

export interface GetLoadSnapshotStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListDeploymentResources200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringAssignedDeploymentResourceOutput;
}

export interface ListDeploymentResourcesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface AssignDeploymentResources202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface AssignDeploymentResources202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & AssignDeploymentResources202Headers;
}

export interface AssignDeploymentResourcesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running assignDeploymentResources operation */
export interface AssignDeploymentResourcesLogicalResponse extends HttpResponse {
  status: "200";
}

export interface UnassignDeploymentResources202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface UnassignDeploymentResources202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & UnassignDeploymentResources202Headers;
}

export interface UnassignDeploymentResourcesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running unassignDeploymentResources operation */
export interface UnassignDeploymentResourcesLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetAssignDeploymentResourcesStatus200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringDeploymentResourcesJobStateOutput;
}

export interface GetAssignDeploymentResourcesStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetUnassignDeploymentResourcesStatus200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringDeploymentResourcesJobStateOutput;
}

export interface GetUnassignDeploymentResourcesStatusDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListTrainingJobs200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringTrainingJobStateOutput;
}

export interface ListTrainingJobsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetTrainingStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringTrainingJobStateOutput;
}

export interface GetTrainingStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface CancelTrainingJob202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CancelTrainingJob202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CancelTrainingJob202Headers;
}

export interface CancelTrainingJobDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running cancelTrainingJob operation */
export interface CancelTrainingJobLogicalResponse extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetProjectDeletionStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringProjectDeletionJobStateOutput;
}

export interface GetProjectDeletionStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListAssignedResourceDeployments200Response
  extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringAssignedResourceDeploymentsMetadataOutput;
}

export interface ListAssignedResourceDeploymentsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetSupportedLanguages200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringSupportedLanguagesOutput;
}

export interface GetSupportedLanguagesDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetSupportedPrebuiltEntities200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringPrebuiltEntitiesOutput;
}

export interface GetSupportedPrebuiltEntitiesDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListTrainingConfigVersions200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringTrainingConfigVersionsOutput;
}

export interface ListTrainingConfigVersionsDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface GetExportedModel200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringExportedTrainedModelOutput;
}

export interface GetExportedModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The request has succeeded. */
export interface ListExportedModels200Response extends HttpResponse {
  status: "200";
  body: PagedAnalyzeConversationAuthoringExportedTrainedModelOutput;
}

export interface ListExportedModelsDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

export interface DeleteExportedModel202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface DeleteExportedModel202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & DeleteExportedModel202Headers;
}

export interface DeleteExportedModelDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running deleteExportedModel operation */
export interface DeleteExportedModelLogicalResponse extends HttpResponse {
  status: "200";
}

export interface CreateOrUpdateExportedModel202Headers {
  /** The location for monitoring the operation state. */
  "operation-location": string;
}

/** The request has been accepted for processing, but processing has not yet completed. */
export interface CreateOrUpdateExportedModel202Response extends HttpResponse {
  status: "202";
  headers: RawHttpHeaders & CreateOrUpdateExportedModel202Headers;
}

export interface CreateOrUpdateExportedModelDefaultResponse
  extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}

/** The final response for long-running createOrUpdateExportedModel operation */
export interface CreateOrUpdateExportedModelLogicalResponse
  extends HttpResponse {
  status: "200";
}

/** The request has succeeded. */
export interface GetExportedModelJobStatus200Response extends HttpResponse {
  status: "200";
  body: AnalyzeConversationAuthoringExportedModelJobStateOutput;
}

export interface GetExportedModelJobStatusDefaultResponse extends HttpResponse {
  status: string;
  body: ErrorResponseOutput;
}
