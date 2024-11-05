// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ScVmmContext } from "../../api/scVmmContext.js";
import { GuestAgent } from "../../models/models.js";
import {
  guestAgentsGet,
  guestAgentsCreate,
  guestAgentsDelete,
  guestAgentsListByVirtualMachineInstance,
} from "../../api/guestAgents/index.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";
import {
  GuestAgentsGetOptionalParams,
  GuestAgentsCreateOptionalParams,
  GuestAgentsDeleteOptionalParams,
  GuestAgentsListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

/** Interface representing a GuestAgents operations. */
export interface GuestAgentsOperations {
  /** Implements GuestAgent GET method. */
  get: (
    resourceUri: string,
    options?: GuestAgentsGetOptionalParams,
  ) => Promise<GuestAgent>;
  /** Create Or Update GuestAgent. */
  create: (
    resourceUri: string,
    resource: GuestAgent,
    options?: GuestAgentsCreateOptionalParams,
  ) => PollerLike<OperationState<GuestAgent>, GuestAgent>;
  /** Implements GuestAgent DELETE method. */
  delete: (
    resourceUri: string,
    options?: GuestAgentsDeleteOptionalParams,
  ) => Promise<void>;
  /** Returns the list of GuestAgent of the given vm. */
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<GuestAgent>;
}

export function getGuestAgents(context: ScVmmContext) {
  return {
    get: (resourceUri: string, options?: GuestAgentsGetOptionalParams) =>
      guestAgentsGet(context, resourceUri, options),
    create: (
      resourceUri: string,
      resource: GuestAgent,
      options?: GuestAgentsCreateOptionalParams,
    ) => guestAgentsCreate(context, resourceUri, resource, options),
    delete: (resourceUri: string, options?: GuestAgentsDeleteOptionalParams) =>
      guestAgentsDelete(context, resourceUri, options),
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: GuestAgentsListByVirtualMachineInstanceOptionalParams,
    ) => guestAgentsListByVirtualMachineInstance(context, resourceUri, options),
  };
}

export function getGuestAgentsOperations(
  context: ScVmmContext,
): GuestAgentsOperations {
  return {
    ...getGuestAgents(context),
  };
}
