// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Client, HttpResponse } from "@azure-rest/core-client";
import {
  CreateHttpPollerOptions,
  LongRunningOperation,
  LroResponse,
  OperationState,
  SimplePollerLike,
  createHttpPoller,
} from "@azure/core-lro";
import {
  DevBoxesCreateDevBox200Response,
  DevBoxesCreateDevBox201Response,
  DevBoxesCreateDevBoxDefaultResponse,
  DevBoxesCreateDevBoxLogicalResponse,
  DevBoxesDeleteDevBox202Response,
  DevBoxesDeleteDevBox204Response,
  DevBoxesDeleteDevBoxDefaultResponse,
  DevBoxesDeleteDevBoxLogicalResponse,
  DevBoxesStartDevBox202Response,
  DevBoxesStartDevBoxDefaultResponse,
  DevBoxesStartDevBoxLogicalResponse,
  DevBoxesStopDevBox202Response,
  DevBoxesStopDevBoxDefaultResponse,
  DevBoxesStopDevBoxLogicalResponse,
  DevBoxesRestartDevBox202Response,
  DevBoxesRestartDevBoxDefaultResponse,
  DevBoxesRestartDevBoxLogicalResponse,
  DevBoxesRepairDevBox202Response,
  DevBoxesRepairDevBoxDefaultResponse,
  DevBoxesRepairDevBoxLogicalResponse,
  DevBoxesValidateCustomizationTasksAction202Response,
  DevBoxesValidateCustomizationTasksActionDefaultResponse,
  DevBoxesValidateCustomizationTasksActionLogicalResponse,
  EnvironmentsCreateOrReplaceEnvironment201Response,
  EnvironmentsCreateOrReplaceEnvironmentDefaultResponse,
  EnvironmentsCreateOrReplaceEnvironmentLogicalResponse,
  EnvironmentsDeleteEnvironment202Response,
  EnvironmentsDeleteEnvironment204Response,
  EnvironmentsDeleteEnvironmentDefaultResponse,
  EnvironmentsDeleteEnvironmentLogicalResponse,
} from "./responses.js";
/**
 * Helper function that builds a Poller object to help polling a long running operation.
 * @param client - Client to use for sending the request to get additional pages.
 * @param initialResponse - The initial response.
 * @param options - Options to set a resume state or custom polling interval.
 * @returns - A poller object to poll for operation state updates and eventually get the final response.
 */
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesCreateDevBoxLogicalResponse
    | DevBoxesCreateDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesCreateDevBox200Response
    | DevBoxesCreateDevBox201Response
    | DevBoxesCreateDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesDeleteDevBoxLogicalResponse
    | DevBoxesDeleteDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesDeleteDevBox202Response
    | DevBoxesDeleteDevBox204Response
    | DevBoxesDeleteDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesStartDevBoxLogicalResponse
    | DevBoxesStartDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesStartDevBox202Response
    | DevBoxesStartDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesStopDevBoxLogicalResponse
    | DevBoxesStopDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesStopDevBox202Response
    | DevBoxesStopDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesRestartDevBoxLogicalResponse
    | DevBoxesRestartDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesRestartDevBox202Response
    | DevBoxesRestartDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesRepairDevBoxLogicalResponse
    | DevBoxesRepairDevBoxDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesRepairDevBox202Response
    | DevBoxesRepairDevBoxDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | DevBoxesValidateCustomizationTasksActionLogicalResponse
    | DevBoxesValidateCustomizationTasksActionDefaultResponse,
>(
  client: Client,
  initialResponse:
    | DevBoxesValidateCustomizationTasksAction202Response
    | DevBoxesValidateCustomizationTasksActionDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | EnvironmentsCreateOrReplaceEnvironmentLogicalResponse
    | EnvironmentsCreateOrReplaceEnvironmentDefaultResponse,
>(
  client: Client,
  initialResponse:
    | EnvironmentsCreateOrReplaceEnvironment201Response
    | EnvironmentsCreateOrReplaceEnvironmentDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<
  TResult extends
    | EnvironmentsDeleteEnvironmentLogicalResponse
    | EnvironmentsDeleteEnvironmentDefaultResponse,
>(
  client: Client,
  initialResponse:
    | EnvironmentsDeleteEnvironment202Response
    | EnvironmentsDeleteEnvironment204Response
    | EnvironmentsDeleteEnvironmentDefaultResponse,
  options?: CreateHttpPollerOptions<TResult, OperationState<TResult>>,
): Promise<SimplePollerLike<OperationState<TResult>, TResult>>;
export async function getLongRunningPoller<TResult extends HttpResponse>(
  client: Client,
  initialResponse: TResult,
  options: CreateHttpPollerOptions<TResult, OperationState<TResult>> = {},
): Promise<SimplePollerLike<OperationState<TResult>, TResult>> {
  const poller: LongRunningOperation<TResult> = {
    requestMethod: initialResponse.request.method,
    requestPath: initialResponse.request.url,
    sendInitialRequest: async () => {
      // In the case of Rest Clients we are building the LRO poller object from a response that's the reason
      // we are not triggering the initial request here, just extracting the information from the
      // response we were provided.
      return getLroResponse(initialResponse);
    },
    sendPollRequest: async (path) => {
      // This is the callback that is going to be called to poll the service
      // to get the latest status. We use the client provided and the polling path
      // which is an opaque URL provided by caller, the service sends this in one of the following headers: operation-location, azure-asyncoperation or location
      // depending on the lro pattern that the service implements. If non is provided we default to the initial path.
      const response = await client
        .pathUnchecked(path ?? initialResponse.request.url)
        .get();
      const lroResponse = getLroResponse(response as TResult);
      lroResponse.rawResponse.headers["x-ms-original-url"] =
        initialResponse.request.url;
      return lroResponse;
    },
  };

  options.resolveOnUnsuccessful = options.resolveOnUnsuccessful ?? true;
  return createHttpPoller(poller, options);
}

/**
 * Converts a Rest Client response to a response that the LRO implementation understands
 * @param response - a rest client http response
 * @returns - An LRO response that the LRO implementation understands
 */
function getLroResponse<TResult extends HttpResponse>(
  response: TResult,
): LroResponse<TResult> {
  if (Number.isNaN(response.status)) {
    throw new TypeError(
      `Status code of the response is not a number. Value: ${response.status}`,
    );
  }

  return {
    flatResponse: response,
    rawResponse: {
      ...response,
      statusCode: Number.parseInt(response.status),
      body: response.body,
    },
  };
}
