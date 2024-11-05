// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DnsPrivateView,
  _DnsPrivateViewListResult,
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
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../../models/options.js";

export function _dnsPrivateViewsGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews/{dnsprivateviewocid}",
      subscriptionId,
      location,
      dnsprivateviewocid,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateViewsGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DnsPrivateView> {
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
          ocid: result.body.properties?.["ocid"],
          displayName: result.body.properties?.["displayName"],
          isProtected: result.body.properties?.["isProtected"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          self: result.body.properties?.["self"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          timeUpdated: new Date(result.body.properties?.["timeUpdated"]),
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DnsPrivateView */
export async function dnsPrivateViewsGet(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivateviewocid: string,
  options: DnsPrivateViewsGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateView> {
  const result = await _dnsPrivateViewsGetSend(
    context,
    subscriptionId,
    location,
    dnsprivateviewocid,
    options,
  );
  return _dnsPrivateViewsGetDeserialize(result);
}

export function _dnsPrivateViewsListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateViews",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateViewsListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DnsPrivateViewListResult> {
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
              ocid: p.properties?.["ocid"],
              displayName: p.properties?.["displayName"],
              isProtected: p.properties?.["isProtected"],
              lifecycleState: p.properties?.["lifecycleState"],
              self: p.properties?.["self"],
              timeCreated: new Date(p.properties?.["timeCreated"]),
              timeUpdated: new Date(p.properties?.["timeUpdated"]),
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DnsPrivateView resources by Location */
export function dnsPrivateViewsListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateViewsListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateView> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dnsPrivateViewsListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _dnsPrivateViewsListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
