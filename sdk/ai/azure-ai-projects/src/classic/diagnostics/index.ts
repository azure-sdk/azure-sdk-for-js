// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ProjectsContext } from "../../api/aIProjectContext.js";
import { GetAppInsightsResponse } from "../../models/models.js";
import { getAppInsights } from "../../api/diagnostics/index.js";
import { DiagnosticsGetAppInsightsOptionalParams } from "../../models/options.js";

/** Interface representing a Diagnostics operations. */
export interface DiagnosticsOperations {
  /** Gets the properties of the specified Application Insights resource */
  getAppInsights: (
    appInsightsResourceUrl: string,
    options?: DiagnosticsGetAppInsightsOptionalParams,
  ) => Promise<GetAppInsightsResponse>;
}

export function getDiagnostics(context: ProjectsContext) {
  return {
    getAppInsights: (
      appInsightsResourceUrl: string,
      options?: DiagnosticsGetAppInsightsOptionalParams,
    ) => getAppInsights(context, appInsightsResourceUrl, options),
  };
}

export function getDiagnosticsOperations(
  context: ProjectsContext,
): DiagnosticsOperations {
  return {
    ...getDiagnostics(context),
  };
}
