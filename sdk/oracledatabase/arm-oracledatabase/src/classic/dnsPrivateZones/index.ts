// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  dnsPrivateZonesGet,
  dnsPrivateZonesListByLocation,
} from "../../api/dnsPrivateZones/index.js";
import {
  DnsPrivateZonesGetOptionalParams,
  DnsPrivateZonesListByLocationOptionalParams,
} from "../../api/options.js";
import { DnsPrivateZone } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DnsPrivateZones operations. */
export interface DnsPrivateZonesOperations {
  /** Get a DnsPrivateZone */
  get: (
    location: string,
    dnsprivatezonename: string,
    options?: DnsPrivateZonesGetOptionalParams,
  ) => Promise<DnsPrivateZone>;
  /** List DnsPrivateZone resources by Location */
  listByLocation: (
    location: string,
    options?: DnsPrivateZonesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DnsPrivateZone>;
}

export function getDnsPrivateZones(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      dnsprivatezonename: string,
      options?: DnsPrivateZonesGetOptionalParams,
    ) =>
      dnsPrivateZonesGet(
        context,
        subscriptionId,
        location,
        dnsprivatezonename,
        options,
      ),
    listByLocation: (
      location: string,
      options?: DnsPrivateZonesListByLocationOptionalParams,
    ) =>
      dnsPrivateZonesListByLocation(context, subscriptionId, location, options),
  };
}

export function getDnsPrivateZonesOperations(
  context: DatabaseContext,
  subscriptionId: string,
): DnsPrivateZonesOperations {
  return {
    ...getDnsPrivateZones(context, subscriptionId),
  };
}
