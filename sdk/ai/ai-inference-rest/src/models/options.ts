// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { OperationOptions } from "@azure-rest/core-client";
import { ExtraParameters } from "./models.js";

/** Optional parameters. */
export interface CompleteOptionalParams extends OperationOptions {
  /**
   * Controls what happens if extra parameters, undefined by the REST API,
   * are passed in the JSON request payload.
   * This sets the HTTP request header `extra-parameters`.
   */
  extraParams?: ExtraParameters;
}

/** Optional parameters. */
export interface GetModelInfoOptionalParams extends OperationOptions {}
