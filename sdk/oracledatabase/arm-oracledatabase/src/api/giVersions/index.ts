// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { GiVersion, _GiVersionListResult } from "../../models/models.js";
import { DatabaseContext as Client } from "../index.js";
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
  GiVersionsGetOptionalParams,
  GiVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export function _giVersionsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions/{giversionname}",
      subscriptionId,
      location,
      giversionname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _giVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<GiVersion> {
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
      : { version: result.body.properties?.["version"] },
  };
}

/** Get a GiVersion */
export async function giVersionsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  giversionname: string,
  options: GiVersionsGetOptionalParams = { requestOptions: {} },
): Promise<GiVersion> {
  const result = await _giVersionsGetSend(
    context,
    subscriptionId,
    location,
    giversionname,
    options,
  );
  return _giVersionsGetDeserialize(result);
}

export function _giVersionsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/giVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _giVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_GiVersionListResult> {
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
          : { version: p.properties?.["version"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List GiVersion resources by Location */
export function giVersionsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: GiVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<GiVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _giVersionsListByLocationSend(context, subscriptionId, location, options),
    _giVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
