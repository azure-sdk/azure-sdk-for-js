// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDatabaseNationalCharacterSet,
  _AutonomousDatabaseNationalCharacterSetListResult,
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
  AutonomousDatabaseNationalCharacterSetsGetOptionalParams,
  AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams,
} from "../../models/options.js";

export function _autonomousDatabaseNationalCharacterSetsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets/{adbsncharsetname}",
      subscriptionId,
      location,
      adbsncharsetname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseNationalCharacterSetsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDatabaseNationalCharacterSet> {
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

/** Get a AutonomousDatabaseNationalCharacterSet */
export async function autonomousDatabaseNationalCharacterSetsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  adbsncharsetname: string,
  options: AutonomousDatabaseNationalCharacterSetsGetOptionalParams = {
    requestOptions: {},
  },
): Promise<AutonomousDatabaseNationalCharacterSet> {
  const result = await _autonomousDatabaseNationalCharacterSetsGetSend(
    context,
    subscriptionId,
    location,
    adbsncharsetname,
    options,
  );
  return _autonomousDatabaseNationalCharacterSetsGetDeserialize(result);
}

export function _autonomousDatabaseNationalCharacterSetsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDatabaseNationalCharacterSets",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDatabaseNationalCharacterSetListResult> {
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

/** List AutonomousDatabaseNationalCharacterSet resources by Location */
export function autonomousDatabaseNationalCharacterSetsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseNationalCharacterSetsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDatabaseNationalCharacterSet> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseNationalCharacterSetsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _autonomousDatabaseNationalCharacterSetsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
