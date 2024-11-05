// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AutonomousDbVersion,
  _AutonomousDbVersionListResult,
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
  AutonomousDatabaseVersionsGetOptionalParams,
  AutonomousDatabaseVersionsListByLocationOptionalParams,
} from "../../models/options.js";

export function _autonomousDatabaseVersionsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions/{autonomousdbversionsname}",
      subscriptionId,
      location,
      autonomousdbversionsname,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseVersionsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<AutonomousDbVersion> {
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
          version: result.body.properties?.["version"],
          dbWorkload: result.body.properties?.["dbWorkload"],
          isDefaultForFree: result.body.properties?.["isDefaultForFree"],
          isDefaultForPaid: result.body.properties?.["isDefaultForPaid"],
          isFreeTierEnabled: result.body.properties?.["isFreeTierEnabled"],
          isPaidEnabled: result.body.properties?.["isPaidEnabled"],
        },
  };
}

/** Get a AutonomousDbVersion */
export async function autonomousDatabaseVersionsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  autonomousdbversionsname: string,
  options: AutonomousDatabaseVersionsGetOptionalParams = { requestOptions: {} },
): Promise<AutonomousDbVersion> {
  const result = await _autonomousDatabaseVersionsGetSend(
    context,
    subscriptionId,
    location,
    autonomousdbversionsname,
    options,
  );
  return _autonomousDatabaseVersionsGetDeserialize(result);
}

export function _autonomousDatabaseVersionsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/autonomousDbVersions",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _autonomousDatabaseVersionsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_AutonomousDbVersionListResult> {
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
              version: p.properties?.["version"],
              dbWorkload: p.properties?.["dbWorkload"],
              isDefaultForFree: p.properties?.["isDefaultForFree"],
              isDefaultForPaid: p.properties?.["isDefaultForPaid"],
              isFreeTierEnabled: p.properties?.["isFreeTierEnabled"],
              isPaidEnabled: p.properties?.["isPaidEnabled"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List AutonomousDbVersion resources by Location */
export function autonomousDatabaseVersionsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: AutonomousDatabaseVersionsListByLocationOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<AutonomousDbVersion> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _autonomousDatabaseVersionsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _autonomousDatabaseVersionsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
