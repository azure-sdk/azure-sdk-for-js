// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AzureTerraformContext as Client,
  TerraformExportTerraformOptionalParams,
} from "../index.js";
import {
  baseExportModelUnionSerializer,
  BaseExportModelUnion,
  errorResponseDeserializer,
  TerraformOperationStatus,
  terraformOperationStatusDeserializer,
} from "../../models/models.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _terraformExportTerraformSend(
  context: Client,
  body: BaseExportModelUnion,
  options: TerraformExportTerraformOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzureTerraform/exportTerraform",
      context.subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      queryParameters: { "api-version": context.apiVersion },
      body: baseExportModelUnionSerializer(body),
    });
}

export async function _terraformExportTerraformDeserialize(
  result: PathUncheckedResponse,
): Promise<TerraformOperationStatus> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return terraformOperationStatusDeserializer(result.body);
}

/** Exports the Terraform configuration of the specified resource(s). */
export function terraformExportTerraform(
  context: Client,
  body: BaseExportModelUnion,
  options: TerraformExportTerraformOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<TerraformOperationStatus>, TerraformOperationStatus> {
  return getLongRunningPoller(context, _terraformExportTerraformDeserialize, ["202", "200"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () => _terraformExportTerraformSend(context, body, options),
    resourceLocationConfig: "azure-async-operation",
  }) as PollerLike<OperationState<TerraformOperationStatus>, TerraformOperationStatus>;
}
