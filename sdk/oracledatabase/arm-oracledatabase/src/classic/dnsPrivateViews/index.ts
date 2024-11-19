// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { DatabaseContext } from "../../api/databaseContext.js";
import {
  dnsPrivateViewsGet,
  dnsPrivateViewsListByLocation,
} from "../../api/dnsPrivateViews/index.js";
import {
  DnsPrivateViewsGetOptionalParams,
  DnsPrivateViewsListByLocationOptionalParams,
} from "../../api/options.js";
import { DnsPrivateView } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";

/** Interface representing a DnsPrivateViews operations. */
export interface DnsPrivateViewsOperations {
  /** Get a DnsPrivateView */
  get: (
    location: string,
    dnsprivateviewocid: string,
    options?: DnsPrivateViewsGetOptionalParams,
  ) => Promise<DnsPrivateView>;
  /** List DnsPrivateView resources by Location */
  listByLocation: (
    location: string,
    options?: DnsPrivateViewsListByLocationOptionalParams,
  ) => PagedAsyncIterableIterator<DnsPrivateView>;
}

export function getDnsPrivateViews(
  context: DatabaseContext,
  subscriptionId: string,
) {
  return {
    get: (
      location: string,
      dnsprivateviewocid: string,
      options?: DnsPrivateViewsGetOptionalParams,
    ) =>
      dnsPrivateViewsGet(
        context,
        subscriptionId,
        location,
        dnsprivateviewocid,
        options,
      ),
    listByLocation: (
      location: string,
      options?: DnsPrivateViewsListByLocationOptionalParams,
    ) =>
      dnsPrivateViewsListByLocation(context, subscriptionId, location, options),
  };
}

export function getDnsPrivateViewsOperations(
  context: DatabaseContext,
  subscriptionId: string,
): DnsPrivateViewsOperations {
  return {
    ...getDnsPrivateViews(context, subscriptionId),
  };
}
