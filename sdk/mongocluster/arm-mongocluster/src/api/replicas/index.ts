// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import { Replica, _ReplicaListResult } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../models/pagingTypes.js";
import { buildPagedAsyncIterator } from "../pagingHelpers.js";
import {
  isUnexpected,
  DocumentDBContext as Client,
  ReplicasListByParent200Response,
  ReplicasListByParentDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@azure-rest/core-client";
import { ReplicasListByParentOptionalParams } from "../../models/options.js";

export function _listByParentSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  options: ReplicasListByParentOptionalParams = { requestOptions: {} },
): StreamableMethod<
  ReplicasListByParent200Response | ReplicasListByParentDefaultResponse
> {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DocumentDB/mongoClusters/{mongoClusterName}/replicas",
      subscriptionId,
      resourceGroupName,
      mongoClusterName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listByParentDeserialize(
  result: ReplicasListByParent200Response | ReplicasListByParentDefaultResponse,
): Promise<_ReplicaListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => {
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
              createMode: p.properties?.["createMode"],
              restoreParameters: !p.properties?.restoreParameters
                ? undefined
                : {
                    pointInTimeUTC:
                      p.properties?.restoreParameters?.["pointInTimeUTC"] !==
                      undefined
                        ? new Date(
                            p.properties?.restoreParameters?.["pointInTimeUTC"],
                          )
                        : undefined,
                    sourceResourceId:
                      p.properties?.restoreParameters?.["sourceResourceId"],
                  },
              replicaParameters: !p.properties?.replicaParameters
                ? undefined
                : {
                    sourceResourceId:
                      p.properties?.replicaParameters?.["sourceResourceId"],
                    sourceLocation:
                      p.properties?.replicaParameters?.["sourceLocation"],
                  },
              administratorLogin: p.properties?.["administratorLogin"],
              administratorLoginPassword:
                p.properties?.["administratorLoginPassword"],
              serverVersion: p.properties?.["serverVersion"],
              connectionString: p.properties?.["connectionString"],
              earliestRestoreTime: p.properties?.["earliestRestoreTime"],
              provisioningState: p.properties?.["provisioningState"],
              clusterStatus: p.properties?.["clusterStatus"],
              publicNetworkAccess: p.properties?.["publicNetworkAccess"],
              nodeGroupSpecs:
                p.properties?.["nodeGroupSpecs"] === undefined
                  ? p.properties?.["nodeGroupSpecs"]
                  : p.properties?.["nodeGroupSpecs"].map((p) => {
                      return {
                        sku: p["sku"],
                        diskSizeGB: p["diskSizeGB"],
                        enableHa: p["enableHa"],
                        kind: p["kind"],
                        nodeCount: p["nodeCount"],
                      };
                    }),
              privateEndpointConnections:
                p.properties?.["privateEndpointConnections"] === undefined
                  ? p.properties?.["privateEndpointConnections"]
                  : p.properties?.["privateEndpointConnections"].map((p) => {
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
                              lastModifiedByType:
                                p.systemData?.["lastModifiedByType"],
                              lastModifiedAt:
                                p.systemData?.["lastModifiedAt"] !== undefined
                                  ? new Date(p.systemData?.["lastModifiedAt"])
                                  : undefined,
                            },
                        properties: !p.properties
                          ? undefined
                          : {
                              groupIds: p.properties?.["groupIds"],
                              privateEndpoint: !p.properties?.privateEndpoint
                                ? undefined
                                : { id: p.properties?.privateEndpoint?.["id"] },
                              privateLinkServiceConnectionState: {
                                status:
                                  p.properties
                                    ?.privateLinkServiceConnectionState[
                                    "status"
                                  ],
                                description:
                                  p.properties
                                    ?.privateLinkServiceConnectionState[
                                    "description"
                                  ],
                                actionsRequired:
                                  p.properties
                                    ?.privateLinkServiceConnectionState[
                                    "actionsRequired"
                                  ],
                              },
                              provisioningState:
                                p.properties?.["provisioningState"],
                            },
                      };
                    }),
              previewFeatures: p.properties?.["previewFeatures"],
              replica: !p.properties?.replica
                ? undefined
                : {
                    sourceResourceId:
                      p.properties?.replica?.["sourceResourceId"],
                    role: p.properties?.replica?.["role"],
                    replicationState:
                      p.properties?.replica?.["replicationState"],
                  },
              infrastructureVersion: p.properties?.["infrastructureVersion"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List all the replicas for the mongo cluster. */
export function listByParent(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  mongoClusterName: string,
  options: ReplicasListByParentOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Replica> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByParentSend(
        context,
        subscriptionId,
        resourceGroupName,
        mongoClusterName,
        options,
      ),
    _listByParentDeserialize,
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
