// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
} from "../../api/options.js";
import { ScVmmContext } from "../../api/scVmmContext.js";
import {
  vmInstanceHybridIdentityMetadatasGet,
  vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance,
} from "../../api/vmInstanceHybridIdentityMetadatas/index.js";
import { VmInstanceHybridIdentityMetadata } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a VmInstanceHybridIdentityMetadatas operations. */
export interface VmInstanceHybridIdentityMetadatasOperations {
  /** Implements HybridIdentityMetadata GET method. */
  get: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
  ) => Promise<VmInstanceHybridIdentityMetadata>;
  /** Returns the list of HybridIdentityMetadata of the given VM. */
  listByVirtualMachineInstance: (
    resourceUri: string,
    options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
  ) => PagedAsyncIterableIterator<VmInstanceHybridIdentityMetadata>;
}

export function getVmInstanceHybridIdentityMetadatas(context: ScVmmContext) {
  return {
    get: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasGetOptionalParams,
    ) => vmInstanceHybridIdentityMetadatasGet(context, resourceUri, options),
    listByVirtualMachineInstance: (
      resourceUri: string,
      options?: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
    ) =>
      vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance(
        context,
        resourceUri,
        options,
      ),
  };
}

export function getVmInstanceHybridIdentityMetadatasOperations(
  context: ScVmmContext,
): VmInstanceHybridIdentityMetadatasOperations {
  return {
    ...getVmInstanceHybridIdentityMetadatas(context),
  };
}
