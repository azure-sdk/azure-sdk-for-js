// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  dnsPrivateZonesListByLocation,
  dnsPrivateZonesGet,
} from "../../api/dnsPrivateZones/index.js";
import {
  DnsPrivateZonesListByLocationOptionalParams,
  DnsPrivateZonesGetOptionalParams,
} from "../../api/options.js";
import { DnsPrivateZone } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DnsPrivateZones operations. */
export interface DnsPrivateZonesOperations {
  /** List DnsPrivateZone resources by Location */
  listByLocation: (
    location: string,
    options?: DnsPrivateZonesListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DnsPrivateZone>;
  /** Get a DnsPrivateZone */
  get: (
    location: string,
    dnsprivatezonename: string,
    options?: DnsPrivateZonesGetOptionalParams,
  ) => Promise<DnsPrivateZone>;
}

function _getDnsPrivateZones(context: DatabaseContext) {
  return {
    listByLocation: (location: string, options?: DnsPrivateZonesListByLocationOptionalParams) =>
      dnsPrivateZonesListByLocation(context, location, options),
    get: (
      location: string,
      dnsprivatezonename: string,
      options?: DnsPrivateZonesGetOptionalParams,
    ) => dnsPrivateZonesGet(context, location, dnsprivatezonename, options),
  };
}

export function _getDnsPrivateZonesOperations(context: DatabaseContext): DnsPrivateZonesOperations {
  return {
    ..._getDnsPrivateZones(context),
  };
}
