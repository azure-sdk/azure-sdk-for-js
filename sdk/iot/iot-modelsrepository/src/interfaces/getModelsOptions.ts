// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { OperationOptions } from "@azure/core-client";
import type { dependencyResolutionType } from "../dependencyResolutionType.js";

/**
 * Options for getting models.
 */
export interface GetModelsOptions extends OperationOptions {
  /**
   * This is the format of dependency resolution (no dependency resolution, standard dependency
   * resolution, resolution using the expanded json format) that will be used when retrieving
   * models. This overwrites the default dependencyResolution settings of the client.
   */
  dependencyResolution?: dependencyResolutionType;
}
