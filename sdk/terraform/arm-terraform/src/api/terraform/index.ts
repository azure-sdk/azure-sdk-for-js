// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  baseExportModelUnionSerializer,
  TerraformOperationStatus,
  BaseExportModelUnion,
} from "../../models/models.js";
import { AzureTerraformContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import { TerraformExportTerraformOptionalParams } from "../../models/options.js";

export function _terraformExportTerraformSend(
  context: Client,
  subscriptionId: string,
  body: BaseExportModelUnion,
  options: TerraformExportTerraformOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Microsoft.AzureTerraform/exportTerraform",
      subscriptionId,
    )
    .post({
      ...operationOptionsToRequestParameters(options),
      body: baseExportModelUnionSerializer(body),
    });
}

export async function _terraformExportTerraformDeserialize(
  result: PathUncheckedResponse,
): Promise<TerraformOperationStatus> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    properties: !result.body.properties
      ? undefined
      : {
          configuration: result.body.properties?.["configuration"],
          skippedResources: result.body.properties?.["skippedResources"],
          errors:
            result.body.properties?.["errors"] === undefined
              ? result.body.properties?.["errors"]
              : result.body.properties?.["errors"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  };
                }),
        },
    status: result.body["status"],
    name: result.body["name"],
    startTime:
      result.body["startTime"] !== undefined
        ? new Date(result.body["startTime"])
        : undefined,
    endTime:
      result.body["endTime"] !== undefined
        ? new Date(result.body["endTime"])
        : undefined,
    percentComplete: result.body["percentComplete"],
    error: !result.body.error
      ? undefined
      : {
          code: result.body.error?.["code"],
          message: result.body.error?.["message"],
          target: result.body.error?.["target"],
          details:
            result.body.error?.["details"] === undefined
              ? result.body.error?.["details"]
              : result.body.error?.["details"].map((p: any) => {
                  return {
                    code: p["code"],
                    message: p["message"],
                    target: p["target"],
                    details: !p.details ? undefined : p.details,
                    additionalInfo:
                      p["additionalInfo"] === undefined
                        ? p["additionalInfo"]
                        : p["additionalInfo"].map((p: any) => {
                            return { type: p["type"], info: p["info"] };
                          }),
                  };
                }),
          additionalInfo:
            result.body.error?.["additionalInfo"] === undefined
              ? result.body.error?.["additionalInfo"]
              : result.body.error?.["additionalInfo"].map((p: any) => {
                  return { type: p["type"], info: p["info"] };
                }),
        },
  };
}

/** Exports the Terraform configuration of the specified resource(s). */
export function terraformExportTerraform(
  context: Client,
  subscriptionId: string,
  body: BaseExportModelUnion,
  options: TerraformExportTerraformOptionalParams = { requestOptions: {} },
): PollerLike<
  OperationState<TerraformOperationStatus>,
  TerraformOperationStatus
> {
  return getLongRunningPoller(
    context,
    _terraformExportTerraformDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _terraformExportTerraformSend(context, subscriptionId, body, options),
    },
  ) as PollerLike<
    OperationState<TerraformOperationStatus>,
    TerraformOperationStatus
  >;
}
