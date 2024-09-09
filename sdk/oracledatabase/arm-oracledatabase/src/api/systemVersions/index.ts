// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  SystemVersion,
  _SystemVersionListResult,
} from "../../models/models.js";
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
  SystemVersionsGetOptionalParams,
  SystemVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export function _systemVersionsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions/{systemversionname}",
      subscriptionId,
      location,
      systemversionname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _systemVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<SystemVersion> {
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
      : { systemVersion: result.body.properties?.["systemVersion"] },
  };
}

/** Get a SystemVersion */
export async function systemVersionsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  systemversionname: string,
  options: SystemVersionsGetOptionalParams = { requestOptions: {} },
): Promise<SystemVersion> {
  const result = await _systemVersionsGetSend(
    context,
    subscriptionId,
    location,
    systemversionname,
    options,
  );
  return _systemVersionsGetDeserialize(result);
}

export function _systemVersionsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/systemVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _systemVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_SystemVersionListResult> {
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
          : { systemVersion: p.properties?.["systemVersion"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List SystemVersion resources by Location */
export function systemVersionsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: SystemVersionsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<SystemVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _systemVersionsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _systemVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
