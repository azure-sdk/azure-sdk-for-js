// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  QueryServiceQueryApiExecute200Response,
  QueryServiceQueryApiExecuteDefaultResponse,
  OperationStatusOperationProgressGetOperationResult200Response,
  OperationStatusOperationProgressGetOperationResultDefaultResponse,
  InstructionsInstructionsGet200Response,
  InstructionsInstructionsGetDefaultResponse,
  InstructionsInstructionsUpdate200Response,
  InstructionsInstructionsUpdate201Response,
  InstructionsInstructionsUpdateLogicalResponse,
  InstructionsInstructionsUpdateDefaultResponse,
  InstructionsInstructionsDelete202Response,
  InstructionsInstructionsDeleteLogicalResponse,
  InstructionsInstructionsDeleteDefaultResponse,
  InstructionsInstructionsList200Response,
  InstructionsInstructionsListDefaultResponse,
  InstructionsInstructionsCreate202Response,
  InstructionsInstructionsCreateLogicalResponse,
  InstructionsInstructionsCreateDefaultResponse,
  InstructionsInstructionsUpdateStatus202Response,
  InstructionsInstructionsUpdateStatusLogicalResponse,
  InstructionsInstructionsUpdateStatusDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsGetExample200Response,
  ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsUpdateExample200Response,
  ExampleQueryServiceExampleQueryOperationsUpdateExample201Response,
  ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsDeleteExample204Response,
  ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsListAllExamples200Response,
  ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsCreateExample201Response,
  ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse,
  ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response,
  ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse,
  AliasDictionaryAliasesGet200Response,
  AliasDictionaryAliasesGetDefaultResponse,
  AliasDictionaryAliasesUpdate200Response,
  AliasDictionaryAliasesUpdate201Response,
  AliasDictionaryAliasesUpdateLogicalResponse,
  AliasDictionaryAliasesUpdateDefaultResponse,
  AliasDictionaryAliasesDelete204Response,
  AliasDictionaryAliasesDeleteDefaultResponse,
  AliasDictionaryAliasesCreate202Response,
  AliasDictionaryAliasesCreateLogicalResponse,
  AliasDictionaryAliasesCreateDefaultResponse,
  AliasDictionaryAliasesList200Response,
  AliasDictionaryAliasesListDefaultResponse,
  AliasDictionaryAliasesActivate200Response,
  AliasDictionaryAliasesActivateDefaultResponse,
  ValidateQueryServiceValidateQueryApiExecute200Response,
  ValidateQueryServiceValidateQueryApiExecuteDefaultResponse,
  ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response,
  ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse,
  ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response,
  ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse,
  FeedbackServiceFeedbackSubmit201Response,
  FeedbackServiceFeedbackSubmitDefaultResponse,
} from "./responses.js";

const responseMap: Record<string, string[]> = {
  "POST /copilot/query:execute": ["200"],
  "GET /copilot/operation/{operationId}": ["200"],
  "GET /copilot/instruction/{id}": ["200"],
  "PATCH /copilot/instruction/{id}": ["200", "201"],
  "DELETE /copilot/instruction/{id}": ["202"],
  "GET /copilot/instruction": ["200"],
  "POST /copilot/instruction": ["202"],
  "GET /copilot/instruction/{id}:updateStatus": ["200", "202"],
  "POST /copilot/instruction/{id}:updateStatus": ["202"],
  "GET /copilot/exampleQuery/{exampleId}": ["200"],
  "PATCH /copilot/exampleQuery/{exampleId}": ["200", "201"],
  "DELETE /copilot/exampleQuery/{exampleId}": ["204"],
  "GET /copilot/exampleQuery": ["200"],
  "POST /copilot/exampleQuery": ["201"],
  "POST /copilot/exampleQuery/{exampleId}:linkInstruction": ["200"],
  "GET /copilot/aliases/{id}": ["200"],
  "PATCH /copilot/aliases/{id}": ["200", "201"],
  "DELETE /copilot/aliases/{id}": ["204"],
  "GET /copilot/aliases": ["200"],
  "POST /copilot/aliases": ["202"],
  "POST /copilot/aliases/{id}:activate": ["200"],
  "POST /copilot/validate:execute": ["200"],
  "GET /copilot/validate/{validateTestId}": ["200"],
  "GET /copilot/validate": ["200"],
  "POST /copilot/feedback": ["201"],
};

export function isUnexpected(
  response: QueryServiceQueryApiExecute200Response | QueryServiceQueryApiExecuteDefaultResponse,
): response is QueryServiceQueryApiExecuteDefaultResponse;
export function isUnexpected(
  response:
    | OperationStatusOperationProgressGetOperationResult200Response
    | OperationStatusOperationProgressGetOperationResultDefaultResponse,
): response is OperationStatusOperationProgressGetOperationResultDefaultResponse;
export function isUnexpected(
  response: InstructionsInstructionsGet200Response | InstructionsInstructionsGetDefaultResponse,
): response is InstructionsInstructionsGetDefaultResponse;
export function isUnexpected(
  response:
    | InstructionsInstructionsUpdate200Response
    | InstructionsInstructionsUpdate201Response
    | InstructionsInstructionsUpdateLogicalResponse
    | InstructionsInstructionsUpdateDefaultResponse,
): response is InstructionsInstructionsUpdateDefaultResponse;
export function isUnexpected(
  response:
    | InstructionsInstructionsDelete202Response
    | InstructionsInstructionsDeleteLogicalResponse
    | InstructionsInstructionsDeleteDefaultResponse,
): response is InstructionsInstructionsDeleteDefaultResponse;
export function isUnexpected(
  response: InstructionsInstructionsList200Response | InstructionsInstructionsListDefaultResponse,
): response is InstructionsInstructionsListDefaultResponse;
export function isUnexpected(
  response:
    | InstructionsInstructionsCreate202Response
    | InstructionsInstructionsCreateLogicalResponse
    | InstructionsInstructionsCreateDefaultResponse,
): response is InstructionsInstructionsCreateDefaultResponse;
export function isUnexpected(
  response:
    | InstructionsInstructionsUpdateStatus202Response
    | InstructionsInstructionsUpdateStatusLogicalResponse
    | InstructionsInstructionsUpdateStatusDefaultResponse,
): response is InstructionsInstructionsUpdateStatusDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsGetExample200Response
    | ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsUpdateExample200Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExample201Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsDeleteExample204Response
    | ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsListAllExamples200Response
    | ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsCreateExample201Response
    | ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse;
export function isUnexpected(
  response:
    | ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response
    | ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse,
): response is ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse;
export function isUnexpected(
  response: AliasDictionaryAliasesGet200Response | AliasDictionaryAliasesGetDefaultResponse,
): response is AliasDictionaryAliasesGetDefaultResponse;
export function isUnexpected(
  response:
    | AliasDictionaryAliasesUpdate200Response
    | AliasDictionaryAliasesUpdate201Response
    | AliasDictionaryAliasesUpdateLogicalResponse
    | AliasDictionaryAliasesUpdateDefaultResponse,
): response is AliasDictionaryAliasesUpdateDefaultResponse;
export function isUnexpected(
  response: AliasDictionaryAliasesDelete204Response | AliasDictionaryAliasesDeleteDefaultResponse,
): response is AliasDictionaryAliasesDeleteDefaultResponse;
export function isUnexpected(
  response:
    | AliasDictionaryAliasesCreate202Response
    | AliasDictionaryAliasesCreateLogicalResponse
    | AliasDictionaryAliasesCreateDefaultResponse,
): response is AliasDictionaryAliasesCreateDefaultResponse;
export function isUnexpected(
  response: AliasDictionaryAliasesList200Response | AliasDictionaryAliasesListDefaultResponse,
): response is AliasDictionaryAliasesListDefaultResponse;
export function isUnexpected(
  response:
    | AliasDictionaryAliasesActivate200Response
    | AliasDictionaryAliasesActivateDefaultResponse,
): response is AliasDictionaryAliasesActivateDefaultResponse;
export function isUnexpected(
  response:
    | ValidateQueryServiceValidateQueryApiExecute200Response
    | ValidateQueryServiceValidateQueryApiExecuteDefaultResponse,
): response is ValidateQueryServiceValidateQueryApiExecuteDefaultResponse;
export function isUnexpected(
  response:
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse,
): response is ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse;
export function isUnexpected(
  response:
    | ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response
    | ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse,
): response is ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse;
export function isUnexpected(
  response: FeedbackServiceFeedbackSubmit201Response | FeedbackServiceFeedbackSubmitDefaultResponse,
): response is FeedbackServiceFeedbackSubmitDefaultResponse;
export function isUnexpected(
  response:
    | QueryServiceQueryApiExecute200Response
    | QueryServiceQueryApiExecuteDefaultResponse
    | OperationStatusOperationProgressGetOperationResult200Response
    | OperationStatusOperationProgressGetOperationResultDefaultResponse
    | InstructionsInstructionsGet200Response
    | InstructionsInstructionsGetDefaultResponse
    | InstructionsInstructionsUpdate200Response
    | InstructionsInstructionsUpdate201Response
    | InstructionsInstructionsUpdateLogicalResponse
    | InstructionsInstructionsUpdateDefaultResponse
    | InstructionsInstructionsDelete202Response
    | InstructionsInstructionsDeleteLogicalResponse
    | InstructionsInstructionsDeleteDefaultResponse
    | InstructionsInstructionsList200Response
    | InstructionsInstructionsListDefaultResponse
    | InstructionsInstructionsCreate202Response
    | InstructionsInstructionsCreateLogicalResponse
    | InstructionsInstructionsCreateDefaultResponse
    | InstructionsInstructionsUpdateStatus202Response
    | InstructionsInstructionsUpdateStatusLogicalResponse
    | InstructionsInstructionsUpdateStatusDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsGetExample200Response
    | ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsUpdateExample200Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExample201Response
    | ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsDeleteExample204Response
    | ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsListAllExamples200Response
    | ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsCreateExample201Response
    | ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse
    | ExampleQueryServiceExampleQueryOperationsLinkInstruction200Response
    | ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse
    | AliasDictionaryAliasesGet200Response
    | AliasDictionaryAliasesGetDefaultResponse
    | AliasDictionaryAliasesUpdate200Response
    | AliasDictionaryAliasesUpdate201Response
    | AliasDictionaryAliasesUpdateLogicalResponse
    | AliasDictionaryAliasesUpdateDefaultResponse
    | AliasDictionaryAliasesDelete204Response
    | AliasDictionaryAliasesDeleteDefaultResponse
    | AliasDictionaryAliasesCreate202Response
    | AliasDictionaryAliasesCreateLogicalResponse
    | AliasDictionaryAliasesCreateDefaultResponse
    | AliasDictionaryAliasesList200Response
    | AliasDictionaryAliasesListDefaultResponse
    | AliasDictionaryAliasesActivate200Response
    | AliasDictionaryAliasesActivateDefaultResponse
    | ValidateQueryServiceValidateQueryApiExecute200Response
    | ValidateQueryServiceValidateQueryApiExecuteDefaultResponse
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetails200Response
    | ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse
    | ValidateQueryServiceValidateQueryApiListValidateTestRequests200Response
    | ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse
    | FeedbackServiceFeedbackSubmit201Response
    | FeedbackServiceFeedbackSubmitDefaultResponse,
): response is
  | QueryServiceQueryApiExecuteDefaultResponse
  | OperationStatusOperationProgressGetOperationResultDefaultResponse
  | InstructionsInstructionsGetDefaultResponse
  | InstructionsInstructionsUpdateDefaultResponse
  | InstructionsInstructionsDeleteDefaultResponse
  | InstructionsInstructionsListDefaultResponse
  | InstructionsInstructionsCreateDefaultResponse
  | InstructionsInstructionsUpdateStatusDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsGetExampleDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsUpdateExampleDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsDeleteExampleDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsListAllExamplesDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsCreateExampleDefaultResponse
  | ExampleQueryServiceExampleQueryOperationsLinkInstructionDefaultResponse
  | AliasDictionaryAliasesGetDefaultResponse
  | AliasDictionaryAliasesUpdateDefaultResponse
  | AliasDictionaryAliasesDeleteDefaultResponse
  | AliasDictionaryAliasesCreateDefaultResponse
  | AliasDictionaryAliasesListDefaultResponse
  | AliasDictionaryAliasesActivateDefaultResponse
  | ValidateQueryServiceValidateQueryApiExecuteDefaultResponse
  | ValidateQueryServiceValidateQueryApiGetValidateTestDetailsDefaultResponse
  | ValidateQueryServiceValidateQueryApiListValidateTestRequestsDefaultResponse
  | FeedbackServiceFeedbackSubmitDefaultResponse {
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
    for (let i = candidateParts.length - 1, j = pathParts.length - 1; i >= 1 && j >= 1; i--, j--) {
      if (candidateParts[i]?.startsWith("{") && candidateParts[i]?.indexOf("}") !== -1) {
        const start = candidateParts[i]!.indexOf("}") + 1,
          end = candidateParts[i]?.length;
        // If the current part of the candidate is a "template" part
        // Try to use the suffix of pattern to match the path
        // {guid} ==> $
        // {guid}:export ==> :export$
        const isMatched = new RegExp(`${candidateParts[i]?.slice(start, end)}`).test(
          pathParts[j] || "",
        );

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
