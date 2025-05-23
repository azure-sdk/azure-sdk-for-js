// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import type { OperationType, ResourceType } from "../common/index.js";

/**
 * @hidden
 */
export interface SessionContext {
  resourceId?: string;
  resourceAddress?: string;
  resourceType?: ResourceType;
  isNameBased?: boolean;
  operationType?: OperationType;
}
