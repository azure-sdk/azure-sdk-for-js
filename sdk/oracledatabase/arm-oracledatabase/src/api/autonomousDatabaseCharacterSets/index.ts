// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseCharacterSet,
  _AutonomousDatabaseCharacterSetListResult,
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
  AutonomousDatabaseCharacterSetsGetOptionalParams,
  AutonomousDatabaseCharacterSetsListByLocationOptionalParams,
} from "../../models/options.js";

export function _autonomousDatabaseCharacterSetsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets/{adbscharsetname}",
      subscriptionId,
      location,
      adbscharsetname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseCharacterSetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseCharacterSet> {
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
      : { characterSet: result.body.properties?.["characterSet"] },
  };
}

/** Get a AutonomousDatabaseCharacterSet */
export async function autonomousDatabaseCharacterSetsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  adbscharsetname: string,
  options: AutonomousDatabaseCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseCharacterSet> {
  const result = await _autonomousDatabaseCharacterSetsGetSend(
    context,
    subscriptionId,
    location,
    adbscharsetname,
    options,
  );
  return _autonomousDatabaseCharacterSetsGetDeserialize(result);
}

export function _autonomousDatabaseCharacterSetsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseCharacterSets",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseCharacterSetsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseCharacterSetListResult> {
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
          : { characterSet: p.properties?.["characterSet"] },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDatabaseCharacterSet resources by Location */
export function autonomousDatabaseCharacterSetsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseCharacterSetsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _autonomousDatabaseCharacterSetsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
