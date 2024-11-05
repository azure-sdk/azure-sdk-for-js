// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DnsPrivateZone,
  _DnsPrivateZoneListResult,
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
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
} from "../../models/options.js";

export function _dnsPrivateZonesGetSend(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones/{dnsprivatezonename}",
      subscriptionId,
      location,
      dnsprivatezonename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateZonesGetDeserialize(
  result: PathUncheckedResponse,
): Promise<DnsPrivateZone> {
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
          isProtected: result.body.properties?.["isProtected"],
          lifecycleState: result.body.properties?.["lifecycleState"],
          self: result.body.properties?.["self"],
          serial: result.body.properties?.["serial"],
          version: result.body.properties?.["version"],
          viewId: result.body.properties?.["viewId"],
          zoneType: result.body.properties?.["zoneType"],
          timeCreated: new Date(result.body.properties?.["timeCreated"]),
          provisioningState: result.body.properties?.["provisioningState"],
        },
  };
}

/** Get a DnsPrivateZone */
export async function dnsPrivateZonesGet(
  context: Client,
  subscriptionId: string,
  location: string,
  dnsprivatezonename: string,
  options: DnsPrivateZonesGetOptionalParams = { requestOptions: {} },
): Promise<DnsPrivateZone> {
  const result = await _dnsPrivateZonesGetSend(
    context,
    subscriptionId,
    location,
    dnsprivatezonename,
    options,
  );
  return _dnsPrivateZonesGetDeserialize(result);
}

export function _dnsPrivateZonesListByLocationSend(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/locations/{location}/dnsPrivateZones",
      subscriptionId,
      location,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _dnsPrivateZonesListByLocationDeserialize(
  result: PathUncheckedResponse,
): Promise<_DnsPrivateZoneListResult> {
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
              isProtected: p.properties?.["isProtected"],
              lifecycleState: p.properties?.["lifecycleState"],
              self: p.properties?.["self"],
              serial: p.properties?.["serial"],
              version: p.properties?.["version"],
              viewId: p.properties?.["viewId"],
              zoneType: p.properties?.["zoneType"],
              timeCreated: new Date(p.properties?.["timeCreated"]),
              provisioningState: p.properties?.["provisioningState"],
            },
      };
    }),
    nextLink: result.body["nextLink"],
  };
}

/** List DnsPrivateZone resources by Location */
export function dnsPrivateZonesListByLocation(
  context: Client,
  subscriptionId: string,
  location: string,
  options: DnsPrivateZonesListByLocationOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<DnsPrivateZone> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _dnsPrivateZonesListByLocationSend(
        context,
        subscriptionId,
        location,
        options,
      ),
    _dnsPrivateZonesListByLocationDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
