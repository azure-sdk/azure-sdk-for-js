// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProjectsContext } from "../../api/aIProjectContext.js";
import { GetAppInsightsResponse } from "../../models/models.js";
import { getAppInsights } from "../../api/telemetry/index.js";
import { TelemetryGetAppInsightsOptionalParams } from "../../models/options.js";

/** Interface representing a Telemetry operations. */
export interface TelemetryOperations {
  /** Gets the properties of the specified Application Insights resource */
  getAppInsights: (
    appInsightsResourceUrl: string,
    options?: TelemetryGetAppInsightsOptionalParams,
  ) => Promise<GetAppInsightsResponse>;
}

export function getTelemetry(context: ProjectsContext) {
  return {
    getAppInsights: (
      appInsightsResourceUrl: string,
      options?: TelemetryGetAppInsightsOptionalParams,
    ) => getAppInsights(context, appInsightsResourceUrl, options),
  };
}

export function getTelemetryOperations(
  context: ProjectsContext,
): TelemetryOperations {
  return {
    ...getTelemetry(context),
  };
}
