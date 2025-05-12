// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface SkusOperationGroupListOptionalParams extends OperationOptions {
  /** Specify $filter='location eq <location>' to filter on location. */
  filter?: string;
}
