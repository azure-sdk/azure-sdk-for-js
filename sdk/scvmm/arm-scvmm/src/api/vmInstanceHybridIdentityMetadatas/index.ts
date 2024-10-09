// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  VmInstanceHybridIdentityMetadata,
  _VmInstanceHybridIdentityMetadataListResult,
} from "../../models/models.js";
import { ScVmmContext as Client } from "../index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  PathUncheckedResponse,
  createRestError,
} from "@azure-rest/core-client";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  VmInstanceHybridIdentityMetadatasGetOptionalParams,
  VmInstanceHybridIdentityMetadatasListByVirtualMachineInstanceOptionalParams,
} from "../../models/options.js";

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
      resourceUri,
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

  return {
    id: result.body["id"],
    name: result.body["name"],
    type: result.body["type"],
    systemData: !result.body.systemData
      ? undefined
      : {
          createdBy: result.body.systemData?.["createdBy"],
          createdByType: result.body.systemData?.["createdByType"],
          createdAt:
            result.body.systemData?.["createdAt"] !== undefined
              ? new Date(result.body.systemData?.["createdAt"])
              : undefined,
          lastModifiedBy: result.body.systemData?.["lastModifiedBy"],
          lastModifiedByType: result.body.systemData?.["lastModifiedByType"],
          lastModifiedAt:
            result.body.systemData?.["lastModifiedAt"] !== undefined
              ? new Date(result.body.systemData?.["lastModifiedAt"])
              : undefined,
        },
    properties: !result.body.properties
      ? undefined
      : {
          resourceUid: result.body.properties?.["resourceUid"],
          publicKey: result.body.properties?.["publicKey"],
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
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
      resourceUri,
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

  return {
    value: result.body["value"].map((p: any) => {
      return {
        id: p["id"],
        name: p["name"],
        type: p["type"],
        systemData: !p.systemData
          ? undefined
          : {
              createdBy: p.systemData?.["createdBy"],
              createdByType: p.systemData?.["createdByType"],
              createdAt:
                p.systemData?.["createdAt"] !== undefined
                  ? new Date(p.systemData?.["createdAt"])
                  : undefined,
              lastModifiedBy: p.systemData?.["lastModifiedBy"],
              lastModifiedByType: p.systemData?.["lastModifiedByType"],
              lastModifiedAt:
                p.systemData?.["lastModifiedAt"] !== undefined
                  ? new Date(p.systemData?.["lastModifiedAt"])
                  : undefined,
            },
        properties: !p.properties
          ? undefined
          : {
              resourceUid: p.properties?.["resourceUid"],
              publicKey: p.properties?.["publicKey"],
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
