// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { OperationOptions } from "@azure-rest/core-client";

/** Optional parameters. */
export interface AlertTemplatesListOptionalParams extends OperationOptions {
  /** The provider type for filtering alert templates. */
  providerType?: string;
}

/** Optional parameters. */
export interface AlertTemplatesGetOptionalParams extends OperationOptions {}
