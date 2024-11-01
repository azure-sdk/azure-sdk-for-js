// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { GetAppInsightsResponse } from "../../models/models.js";
import { ProjectsContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import { TelemetryGetAppInsightsOptionalParams } from "../../models/options.js";

export function _getAppInsightsSend(
  context: Client,
  appInsightsResourceUrl: string,
  options: TelemetryGetAppInsightsOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path("/{appInsightsResourceUrl}", appInsightsResourceUrl)
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _getAppInsightsDeserialize(
  result: PathUncheckedResponse,
): Promise<GetAppInsightsResponse> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return {
    id: result.body["id"],
    name: result.body["name"],
    properties: {
      connectionString: result.body.properties["ConnectionString"],
    },
  };
}

/** Gets the properties of the specified Application Insights resource */
export async function getAppInsights(
  context: Client,
  appInsightsResourceUrl: string,
  options: TelemetryGetAppInsightsOptionalParams = { requestOptions: {} },
): Promise<GetAppInsightsResponse> {
  const result = await _getAppInsightsSend(
    context,
    appInsightsResourceUrl,
    options,
  );
  return _getAppInsightsDeserialize(result);
}
