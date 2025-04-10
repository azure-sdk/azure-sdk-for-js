// Licensed under the MIT License.

import { OperationOptions } from "@typespec/ts-http-runtime";

/** Optional parameters. */
export interface AutoUpgradeProfileOperationsGenerateUpdateRunOptionalParams
  extends OperationOptions {
  /** Delay to wait until next poll, in milliseconds. */
  updateIntervalInMs?: number;
}
