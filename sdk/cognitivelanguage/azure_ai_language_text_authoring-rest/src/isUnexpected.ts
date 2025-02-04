// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  ListProjects200Response,
  ListProjectsDefaultResponse,
  GetProject200Response,
  GetProjectDefaultResponse,
  CreateProject200Response,
  CreateProject201Response,
  CreateProjectDefaultResponse,
  DeleteProject202Response,
  DeleteProjectLogicalResponse,
  DeleteProjectDefaultResponse,
  CopyProjectAuthorization200Response,
  CopyProjectAuthorizationDefaultResponse,
  CopyProject202Response,
  CopyProjectLogicalResponse,
  CopyProjectDefaultResponse,
  Export202Response,
  ExportLogicalResponse,
  ExportDefaultResponse,
  Import202Response,
  ImportLogicalResponse,
  ImportDefaultResponse,
  Train202Response,
  TrainLogicalResponse,
  TrainDefaultResponse,
  GetCopyProjectStatus200Response,
  GetCopyProjectStatusDefaultResponse,
  ListDeployments200Response,
  ListDeploymentsDefaultResponse,
  GetDeployment200Response,
  GetDeploymentDefaultResponse,
  DeployProject202Response,
  DeployProjectLogicalResponse,
  DeployProjectDefaultResponse,
  DeleteDeployment202Response,
  DeleteDeploymentLogicalResponse,
  DeleteDeploymentDefaultResponse,
  DeleteDeploymentFromResources202Response,
  DeleteDeploymentFromResourcesLogicalResponse,
  DeleteDeploymentFromResourcesDefaultResponse,
  GetDeploymentDeleteFromResourcesStatus200Response,
  GetDeploymentDeleteFromResourcesStatusDefaultResponse,
  GetDeploymentStatus200Response,
  GetDeploymentStatusDefaultResponse,
  SwapDeployments202Response,
  SwapDeploymentsLogicalResponse,
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
  CreateOrUpdateExportedModelLogicalResponse,
  CreateOrUpdateExportedModelDefaultResponse,
  DeleteExportedModel202Response,
  DeleteExportedModelLogicalResponse,
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
  EvaluateModelLogicalResponse,
  EvaluateModelDefaultResponse,
  LoadSnapshot202Response,
  LoadSnapshotLogicalResponse,
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
  AssignDeploymentResourcesLogicalResponse,
  AssignDeploymentResourcesDefaultResponse,
  UnassignDeploymentResources202Response,
  UnassignDeploymentResourcesLogicalResponse,
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
  CancelTrainingJobLogicalResponse,
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

const responseMap: Record<string, string[]> = {
  "GET /authoring/analyze-text/projects": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}": ["200"],
  "PATCH /authoring/analyze-text/projects/{projectName}": ["200", "201"],
  "DELETE /authoring/analyze-text/projects/{projectName}": ["202"],
  "POST /authoring/analyze-text/projects/{projectName}/:authorize-copy": [
    "200",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/:copy": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/:copy": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/:export": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/:export": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/:import": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/:import": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/:train": ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/:train": ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/copy/jobs/{jobId}": [
    "200",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/deployments": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["200"],
  "PUT /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["202"],
  "DELETE /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/:delete-from-resources":
    ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/:delete-from-resources":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/delete-from-resources/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/{deploymentName}/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/:swap": [
    "200",
    "202",
  ],
  "POST /authoring/analyze-text/projects/{projectName}/deployments/:swap": [
    "202",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/deployments/swap/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/export/jobs/{jobId}": [
    "200",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/exported-models": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}":
    ["200"],
  "PUT /authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}":
    ["202"],
  "DELETE /authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/exported-models/{exportedModelName}/manifest":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/import/jobs/{jobId}": [
    "200",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/models": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}":
    ["200"],
  "DELETE /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}":
    ["204"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:evaluate":
    ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:evaluate":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:load-snapshot":
    ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/:load-snapshot":
    ["202"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluate/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/result":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/evaluation/summary-result":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/models/{trainedModelLabel}/load-snapshot/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/resources": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/resources/:assign": [
    "200",
    "202",
  ],
  "POST /authoring/analyze-text/projects/{projectName}/resources/:assign": [
    "202",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/resources/:unassign": [
    "200",
    "202",
  ],
  "POST /authoring/analyze-text/projects/{projectName}/resources/:unassign": [
    "202",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/resources/assign/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/resources/unassign/jobs/{jobId}":
    ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/train/jobs": ["200"],
  "GET /authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}": [
    "200",
  ],
  "GET /authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}/:cancel":
    ["200", "202"],
  "POST /authoring/analyze-text/projects/{projectName}/train/jobs/{jobId}/:cancel":
    ["202"],
  "GET /authoring/analyze-text/projects/global/deletion-jobs/{jobId}": ["200"],
  "GET /authoring/analyze-text/projects/global/deployments/resources": ["200"],
  "GET /authoring/analyze-text/projects/global/languages": ["200"],
  "GET /authoring/analyze-text/projects/global/prebuilt-entities": ["200"],
  "GET /authoring/analyze-text/projects/global/training-config-versions": [
    "200",
  ],
};

export function isUnexpected(
  response: ListProjects200Response | ListProjectsDefaultResponse,
): response is ListProjectsDefaultResponse;
export function isUnexpected(
  response: GetProject200Response | GetProjectDefaultResponse,
): response is GetProjectDefaultResponse;
export function isUnexpected(
  response:
    | CreateProject200Response
    | CreateProject201Response
    | CreateProjectDefaultResponse,
): response is CreateProjectDefaultResponse;
export function isUnexpected(
  response:
    | DeleteProject202Response
    | DeleteProjectLogicalResponse
    | DeleteProjectDefaultResponse,
): response is DeleteProjectDefaultResponse;
export function isUnexpected(
  response:
    | CopyProjectAuthorization200Response
    | CopyProjectAuthorizationDefaultResponse,
): response is CopyProjectAuthorizationDefaultResponse;
export function isUnexpected(
  response:
    | CopyProject202Response
    | CopyProjectLogicalResponse
    | CopyProjectDefaultResponse,
): response is CopyProjectDefaultResponse;
export function isUnexpected(
  response: Export202Response | ExportLogicalResponse | ExportDefaultResponse,
): response is ExportDefaultResponse;
export function isUnexpected(
  response: Import202Response | ImportLogicalResponse | ImportDefaultResponse,
): response is ImportDefaultResponse;
export function isUnexpected(
  response: Train202Response | TrainLogicalResponse | TrainDefaultResponse,
): response is TrainDefaultResponse;
export function isUnexpected(
  response:
    | GetCopyProjectStatus200Response
    | GetCopyProjectStatusDefaultResponse,
): response is GetCopyProjectStatusDefaultResponse;
export function isUnexpected(
  response: ListDeployments200Response | ListDeploymentsDefaultResponse,
): response is ListDeploymentsDefaultResponse;
export function isUnexpected(
  response: GetDeployment200Response | GetDeploymentDefaultResponse,
): response is GetDeploymentDefaultResponse;
export function isUnexpected(
  response:
    | DeployProject202Response
    | DeployProjectLogicalResponse
    | DeployProjectDefaultResponse,
): response is DeployProjectDefaultResponse;
export function isUnexpected(
  response:
    | DeleteDeployment202Response
    | DeleteDeploymentLogicalResponse
    | DeleteDeploymentDefaultResponse,
): response is DeleteDeploymentDefaultResponse;
export function isUnexpected(
  response:
    | DeleteDeploymentFromResources202Response
    | DeleteDeploymentFromResourcesLogicalResponse
    | DeleteDeploymentFromResourcesDefaultResponse,
): response is DeleteDeploymentFromResourcesDefaultResponse;
export function isUnexpected(
  response:
    | GetDeploymentDeleteFromResourcesStatus200Response
    | GetDeploymentDeleteFromResourcesStatusDefaultResponse,
): response is GetDeploymentDeleteFromResourcesStatusDefaultResponse;
export function isUnexpected(
  response: GetDeploymentStatus200Response | GetDeploymentStatusDefaultResponse,
): response is GetDeploymentStatusDefaultResponse;
export function isUnexpected(
  response:
    | SwapDeployments202Response
    | SwapDeploymentsLogicalResponse
    | SwapDeploymentsDefaultResponse,
): response is SwapDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse,
): response is GetSwapDeploymentsStatusDefaultResponse;
export function isUnexpected(
  response: GetExportStatus200Response | GetExportStatusDefaultResponse,
): response is GetExportStatusDefaultResponse;
export function isUnexpected(
  response: ListExportedModels200Response | ListExportedModelsDefaultResponse,
): response is ListExportedModelsDefaultResponse;
export function isUnexpected(
  response: GetExportedModel200Response | GetExportedModelDefaultResponse,
): response is GetExportedModelDefaultResponse;
export function isUnexpected(
  response:
    | CreateOrUpdateExportedModel202Response
    | CreateOrUpdateExportedModelLogicalResponse
    | CreateOrUpdateExportedModelDefaultResponse,
): response is CreateOrUpdateExportedModelDefaultResponse;
export function isUnexpected(
  response:
    | DeleteExportedModel202Response
    | DeleteExportedModelLogicalResponse
    | DeleteExportedModelDefaultResponse,
): response is DeleteExportedModelDefaultResponse;
export function isUnexpected(
  response:
    | GetExportedModelJobStatus200Response
    | GetExportedModelJobStatusDefaultResponse,
): response is GetExportedModelJobStatusDefaultResponse;
export function isUnexpected(
  response:
    | GetExportedModelManifest200Response
    | GetExportedModelManifestDefaultResponse,
): response is GetExportedModelManifestDefaultResponse;
export function isUnexpected(
  response: GetImportStatus200Response | GetImportStatusDefaultResponse,
): response is GetImportStatusDefaultResponse;
export function isUnexpected(
  response: ListTrainedModels200Response | ListTrainedModelsDefaultResponse,
): response is ListTrainedModelsDefaultResponse;
export function isUnexpected(
  response: GetTrainedModel200Response | GetTrainedModelDefaultResponse,
): response is GetTrainedModelDefaultResponse;
export function isUnexpected(
  response: DeleteTrainedModel204Response | DeleteTrainedModelDefaultResponse,
): response is DeleteTrainedModelDefaultResponse;
export function isUnexpected(
  response:
    | EvaluateModel202Response
    | EvaluateModelLogicalResponse
    | EvaluateModelDefaultResponse,
): response is EvaluateModelDefaultResponse;
export function isUnexpected(
  response:
    | LoadSnapshot202Response
    | LoadSnapshotLogicalResponse
    | LoadSnapshotDefaultResponse,
): response is LoadSnapshotDefaultResponse;
export function isUnexpected(
  response: GetEvaluationStatus200Response | GetEvaluationStatusDefaultResponse,
): response is GetEvaluationStatusDefaultResponse;
export function isUnexpected(
  response:
    | GetModelEvaluationResults200Response
    | GetModelEvaluationResultsDefaultResponse,
): response is GetModelEvaluationResultsDefaultResponse;
export function isUnexpected(
  response:
    | GetModelEvaluationSummary200Response
    | GetModelEvaluationSummaryDefaultResponse,
): response is GetModelEvaluationSummaryDefaultResponse;
export function isUnexpected(
  response:
    | GetLoadSnapshotStatus200Response
    | GetLoadSnapshotStatusDefaultResponse,
): response is GetLoadSnapshotStatusDefaultResponse;
export function isUnexpected(
  response:
    | ListDeploymentResources200Response
    | ListDeploymentResourcesDefaultResponse,
): response is ListDeploymentResourcesDefaultResponse;
export function isUnexpected(
  response:
    | AssignDeploymentResources202Response
    | AssignDeploymentResourcesLogicalResponse
    | AssignDeploymentResourcesDefaultResponse,
): response is AssignDeploymentResourcesDefaultResponse;
export function isUnexpected(
  response:
    | UnassignDeploymentResources202Response
    | UnassignDeploymentResourcesLogicalResponse
    | UnassignDeploymentResourcesDefaultResponse,
): response is UnassignDeploymentResourcesDefaultResponse;
export function isUnexpected(
  response:
    | GetAssignDeploymentResourcesStatus200Response
    | GetAssignDeploymentResourcesStatusDefaultResponse,
): response is GetAssignDeploymentResourcesStatusDefaultResponse;
export function isUnexpected(
  response:
    | GetUnassignDeploymentResourcesStatus200Response
    | GetUnassignDeploymentResourcesStatusDefaultResponse,
): response is GetUnassignDeploymentResourcesStatusDefaultResponse;
export function isUnexpected(
  response: ListTrainingJobs200Response | ListTrainingJobsDefaultResponse,
): response is ListTrainingJobsDefaultResponse;
export function isUnexpected(
  response: GetTrainingStatus200Response | GetTrainingStatusDefaultResponse,
): response is GetTrainingStatusDefaultResponse;
export function isUnexpected(
  response:
    | CancelTrainingJob202Response
    | CancelTrainingJobLogicalResponse
    | CancelTrainingJobDefaultResponse,
): response is CancelTrainingJobDefaultResponse;
export function isUnexpected(
  response:
    | GetProjectDeletionStatus200Response
    | GetProjectDeletionStatusDefaultResponse,
): response is GetProjectDeletionStatusDefaultResponse;
export function isUnexpected(
  response:
    | ListAssignedResourceDeployments200Response
    | ListAssignedResourceDeploymentsDefaultResponse,
): response is ListAssignedResourceDeploymentsDefaultResponse;
export function isUnexpected(
  response:
    | GetSupportedLanguages200Response
    | GetSupportedLanguagesDefaultResponse,
): response is GetSupportedLanguagesDefaultResponse;
export function isUnexpected(
  response:
    | GetSupportedPrebuiltEntities200Response
    | GetSupportedPrebuiltEntitiesDefaultResponse,
): response is GetSupportedPrebuiltEntitiesDefaultResponse;
export function isUnexpected(
  response:
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse,
): response is ListTrainingConfigVersionsDefaultResponse;
export function isUnexpected(
  response:
    | ListProjects200Response
    | ListProjectsDefaultResponse
    | GetProject200Response
    | GetProjectDefaultResponse
    | CreateProject200Response
    | CreateProject201Response
    | CreateProjectDefaultResponse
    | DeleteProject202Response
    | DeleteProjectLogicalResponse
    | DeleteProjectDefaultResponse
    | CopyProjectAuthorization200Response
    | CopyProjectAuthorizationDefaultResponse
    | CopyProject202Response
    | CopyProjectLogicalResponse
    | CopyProjectDefaultResponse
    | Export202Response
    | ExportLogicalResponse
    | ExportDefaultResponse
    | Import202Response
    | ImportLogicalResponse
    | ImportDefaultResponse
    | Train202Response
    | TrainLogicalResponse
    | TrainDefaultResponse
    | GetCopyProjectStatus200Response
    | GetCopyProjectStatusDefaultResponse
    | ListDeployments200Response
    | ListDeploymentsDefaultResponse
    | GetDeployment200Response
    | GetDeploymentDefaultResponse
    | DeployProject202Response
    | DeployProjectLogicalResponse
    | DeployProjectDefaultResponse
    | DeleteDeployment202Response
    | DeleteDeploymentLogicalResponse
    | DeleteDeploymentDefaultResponse
    | DeleteDeploymentFromResources202Response
    | DeleteDeploymentFromResourcesLogicalResponse
    | DeleteDeploymentFromResourcesDefaultResponse
    | GetDeploymentDeleteFromResourcesStatus200Response
    | GetDeploymentDeleteFromResourcesStatusDefaultResponse
    | GetDeploymentStatus200Response
    | GetDeploymentStatusDefaultResponse
    | SwapDeployments202Response
    | SwapDeploymentsLogicalResponse
    | SwapDeploymentsDefaultResponse
    | GetSwapDeploymentsStatus200Response
    | GetSwapDeploymentsStatusDefaultResponse
    | GetExportStatus200Response
    | GetExportStatusDefaultResponse
    | ListExportedModels200Response
    | ListExportedModelsDefaultResponse
    | GetExportedModel200Response
    | GetExportedModelDefaultResponse
    | CreateOrUpdateExportedModel202Response
    | CreateOrUpdateExportedModelLogicalResponse
    | CreateOrUpdateExportedModelDefaultResponse
    | DeleteExportedModel202Response
    | DeleteExportedModelLogicalResponse
    | DeleteExportedModelDefaultResponse
    | GetExportedModelJobStatus200Response
    | GetExportedModelJobStatusDefaultResponse
    | GetExportedModelManifest200Response
    | GetExportedModelManifestDefaultResponse
    | GetImportStatus200Response
    | GetImportStatusDefaultResponse
    | ListTrainedModels200Response
    | ListTrainedModelsDefaultResponse
    | GetTrainedModel200Response
    | GetTrainedModelDefaultResponse
    | DeleteTrainedModel204Response
    | DeleteTrainedModelDefaultResponse
    | EvaluateModel202Response
    | EvaluateModelLogicalResponse
    | EvaluateModelDefaultResponse
    | LoadSnapshot202Response
    | LoadSnapshotLogicalResponse
    | LoadSnapshotDefaultResponse
    | GetEvaluationStatus200Response
    | GetEvaluationStatusDefaultResponse
    | GetModelEvaluationResults200Response
    | GetModelEvaluationResultsDefaultResponse
    | GetModelEvaluationSummary200Response
    | GetModelEvaluationSummaryDefaultResponse
    | GetLoadSnapshotStatus200Response
    | GetLoadSnapshotStatusDefaultResponse
    | ListDeploymentResources200Response
    | ListDeploymentResourcesDefaultResponse
    | AssignDeploymentResources202Response
    | AssignDeploymentResourcesLogicalResponse
    | AssignDeploymentResourcesDefaultResponse
    | UnassignDeploymentResources202Response
    | UnassignDeploymentResourcesLogicalResponse
    | UnassignDeploymentResourcesDefaultResponse
    | GetAssignDeploymentResourcesStatus200Response
    | GetAssignDeploymentResourcesStatusDefaultResponse
    | GetUnassignDeploymentResourcesStatus200Response
    | GetUnassignDeploymentResourcesStatusDefaultResponse
    | ListTrainingJobs200Response
    | ListTrainingJobsDefaultResponse
    | GetTrainingStatus200Response
    | GetTrainingStatusDefaultResponse
    | CancelTrainingJob202Response
    | CancelTrainingJobLogicalResponse
    | CancelTrainingJobDefaultResponse
    | GetProjectDeletionStatus200Response
    | GetProjectDeletionStatusDefaultResponse
    | ListAssignedResourceDeployments200Response
    | ListAssignedResourceDeploymentsDefaultResponse
    | GetSupportedLanguages200Response
    | GetSupportedLanguagesDefaultResponse
    | GetSupportedPrebuiltEntities200Response
    | GetSupportedPrebuiltEntitiesDefaultResponse
    | ListTrainingConfigVersions200Response
    | ListTrainingConfigVersionsDefaultResponse,
): response is
  | ListProjectsDefaultResponse
  | GetProjectDefaultResponse
  | CreateProjectDefaultResponse
  | DeleteProjectDefaultResponse
  | CopyProjectAuthorizationDefaultResponse
  | CopyProjectDefaultResponse
  | ExportDefaultResponse
  | ImportDefaultResponse
  | TrainDefaultResponse
  | GetCopyProjectStatusDefaultResponse
  | ListDeploymentsDefaultResponse
  | GetDeploymentDefaultResponse
  | DeployProjectDefaultResponse
  | DeleteDeploymentDefaultResponse
  | DeleteDeploymentFromResourcesDefaultResponse
  | GetDeploymentDeleteFromResourcesStatusDefaultResponse
  | GetDeploymentStatusDefaultResponse
  | SwapDeploymentsDefaultResponse
  | GetSwapDeploymentsStatusDefaultResponse
  | GetExportStatusDefaultResponse
  | ListExportedModelsDefaultResponse
  | GetExportedModelDefaultResponse
  | CreateOrUpdateExportedModelDefaultResponse
  | DeleteExportedModelDefaultResponse
  | GetExportedModelJobStatusDefaultResponse
  | GetExportedModelManifestDefaultResponse
  | GetImportStatusDefaultResponse
  | ListTrainedModelsDefaultResponse
  | GetTrainedModelDefaultResponse
  | DeleteTrainedModelDefaultResponse
  | EvaluateModelDefaultResponse
  | LoadSnapshotDefaultResponse
  | GetEvaluationStatusDefaultResponse
  | GetModelEvaluationResultsDefaultResponse
  | GetModelEvaluationSummaryDefaultResponse
  | GetLoadSnapshotStatusDefaultResponse
  | ListDeploymentResourcesDefaultResponse
  | AssignDeploymentResourcesDefaultResponse
  | UnassignDeploymentResourcesDefaultResponse
  | GetAssignDeploymentResourcesStatusDefaultResponse
  | GetUnassignDeploymentResourcesStatusDefaultResponse
  | ListTrainingJobsDefaultResponse
  | GetTrainingStatusDefaultResponse
  | CancelTrainingJobDefaultResponse
  | GetProjectDeletionStatusDefaultResponse
  | ListAssignedResourceDeploymentsDefaultResponse
  | GetSupportedLanguagesDefaultResponse
  | GetSupportedPrebuiltEntitiesDefaultResponse
  | ListTrainingConfigVersionsDefaultResponse {
  const lroOriginal = response.headers["x-ms-original-url"];
  const url = new URL(lroOriginal ?? response.request.url);
  const method = response.request.method;
  let pathDetails = responseMap[`${method} ${url.pathname}`];
  if (!pathDetails) {
    pathDetails = getParametrizedPathSuccess(method, url.pathname);
  }
  return !pathDetails.includes(response.status);
}

function getParametrizedPathSuccess(method: string, path: string): string[] {
  const pathParts = path.split("/");

  // Traverse list to match the longest candidate
  // matchedLen: the length of candidate path
  // matchedValue: the matched status code array
  let matchedLen = -1,
    matchedValue: string[] = [];

  // Iterate the responseMap to find a match
  for (const [key, value] of Object.entries(responseMap)) {
    // Extracting the path from the map key which is in format
    // GET /path/foo
    if (!key.startsWith(method)) {
      continue;
    }
    const candidatePath = getPathFromMapKey(key);
    // Get each part of the url path
    const candidateParts = candidatePath.split("/");

    // track if we have found a match to return the values found.
    let found = true;
    for (
      let i = candidateParts.length - 1, j = pathParts.length - 1;
      i >= 1 && j >= 1;
      i--, j--
    ) {
      if (
        candidateParts[i]?.startsWith("{") &&
        candidateParts[i]?.indexOf("}") !== -1
      ) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(
          `${candidateParts[i]?.slice(start, end)}`,
        ).test(pathParts[j] || "");

        if (!isMatched) {
          found = false;
          break;
        }
        continue;
      }

      // If the candidate part is not a template and
      // the parts don't match mark the candidate as not found
      // to move on with the next candidate path.
      if (candidateParts[i] !== pathParts[j]) {
        found = false;
        break;
      }
    }

    // We finished evaluating the current candidate parts
    // Update the matched value if and only if we found the longer pattern
    if (found && candidatePath.length > matchedLen) {
      matchedLen = candidatePath.length;
      matchedValue = value;
    }
  }

  return matchedValue;
}

function getPathFromMapKey(mapKey: string): string {
  const pathStart = mapKey.indexOf("/");
  return mapKey.slice(pathStart);
}
