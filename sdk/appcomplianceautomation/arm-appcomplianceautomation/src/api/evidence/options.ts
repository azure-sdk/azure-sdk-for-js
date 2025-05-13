// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface EvidenceDownloadOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EvidenceListByReportOptionalParams extends OperationOptions {
  /** Skip over when retrieving results. */
  skipToken?: string;
  /** Number of elements to return when retrieving results. */
  top?: number;
  /** OData Select statement. Limits the properties on each entry to just those requested, e.g. ?$select=reportName,id. */
  select?: string;
  /** The filter to apply on the operation. */
  filter?: string;
  /** OData order by query option. */
  orderby?: string;
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface EvidenceDeleteOptionalParams extends OperationOptions {}

/** Optional parameters. */
export interface EvidenceCreateOrUpdateOptionalParams extends OperationOptions {
  /** The offerGuid which mapping to the reports. */
  offerGuid?: string;
  /** The tenant id of the report creator. */
  reportCreatorTenantId?: string;
}

/** Optional parameters. */
export interface EvidenceGetOptionalParams extends OperationOptions {}
