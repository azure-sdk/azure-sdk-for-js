// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  guestAgentsListByVirtualMachineInstance,
  guestAgentsDelete,
  guestAgentsCreate,
  guestAgentsGet,
} from "../../api/guestAgents/index.js";
import { GuestAgent } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsGetOptionalParams,
} from "../../api/options.js";

/** Interface representing a GuestAgents operations. */
export interface GuestAgentsOperations {
  /** Returns the list of GuestAgent of the given vm. */
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<GuestAgent>;
  /** Implements GuestAgent DELETE method. */
  delete: (resourceUri: string, options?: GuestAgentsDeleteOptionalParams) => Promise<void>;
  /** Create Or Update GuestAgent. */
  create: (
    resourceUri: string,
    resource: GuestAgent,
    options?: GuestAgentsCreateOptionalParams,
  ) => PollerLike<OperationState<GuestAgent>, GuestAgent>;
  /** Implements GuestAgent GET method. */
  get: (resourceUri: string, options?: GuestAgentsGetOptionalParams) => Promise<GuestAgent>;
}

function _getGuestAgents(context: ScVmmContext) {
  return {
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
    ) => guestAgentsListByVirtualMachineInstance(context, resourceUri, options),
    delete: (resourceUri: string, options?: GuestAgentsDeleteOptionalParams) =>
      guestAgentsDelete(context, resourceUri, options),
    create: (
      resourceUri: string,
      resource: GuestAgent,
      options?: GuestAgentsCreateOptionalParams,
    ) => guestAgentsCreate(context, resourceUri, resource, options),
    get: (resourceUri: string, options?: GuestAgentsGetOptionalParams) =>
      guestAgentsGet(context, resourceUri, options),
  };
}

export function _getGuestAgentsOperations(context: ScVmmContext): GuestAgentsOperations {
  return {
    ..._getGuestAgents(context),
  };
}
