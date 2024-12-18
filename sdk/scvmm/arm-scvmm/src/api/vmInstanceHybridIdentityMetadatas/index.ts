// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  ScVmmContext as Client,
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
} from "../index.js";
import {
  VmInstanceHybridIdentityMetadata,
  vmInstanceHybridIdentityMetadataDeserializer,
  _VmInstanceHybridIdentityMetadataListResult,
  _vmInstanceHybridIdentityMetadataListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _vmInstanceHybridIdentityMetadatasGetSend(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata/default",
      { value: resourceUri, allowReserved: true },
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _vmInstanceHybridIdentityMetadatasGetDeserialize(
  result: PathUncheckedResponse,
): Promise<VmInstanceHybridIdentityMetadata> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return vmInstanceHybridIdentityMetadataDeserializer(result.body);
}

/** Implements HybridIdentityMetadata GET method. */
export async function vmInstanceHybridIdentityMetadatasGet(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasGetOptionalParams = {
    requestOptions: {},
  },
): Promise<VmInstanceHybridIdentityMetadata> {
  const result = await _vmInstanceHybridIdentityMetadatasGetSend(
    context,
    resourceUri,
    options,
  );
  return _vmInstanceHybridIdentityMetadatasGetDeserialize(result);
}

export function _vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceSend(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/{resourceUri}/providers/Microsoft.ScVmm/virtualMachineInstances/default/hybridIdentityMetadata",
      { value: resourceUri, allowReserved: true },
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDeserialize(
  result: PathUncheckedResponse,
): Promise<_VmInstanceHybridIdentityMetadataListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _vmInstanceHybridIdentityMetadataListResultDeserializer(result.body);
}

/** Returns the list of HybridIdentityMetadata of the given VM. */
export function vmInstanceHybridIdentityMetadatasListByVirtualMachineInstance(
  context: Client,
  resourceUri: string,
  options: VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<VmInstanceHybridIdentityMetadata> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceSend(
        context,
        resourceUri,
        options,
      ),
    _vmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
