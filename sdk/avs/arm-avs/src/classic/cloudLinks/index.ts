// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AvsContext } from "../../api/avsContext.js";
import {
  cloudLinksList,
  cloudLinksGet,
  cloudLinksCreateOrUpdate,
  cloudLinksDelete,
} from "../../api/cloudLinks/index.js";
import {
  CloudLinksListOptionalParams,
  CloudLinksGetOptionalParams,
  CloudLinksCreateOrUpdateOptionalParams,
  CloudLinksDeleteOptionalParams,
} from "../../api/options.js";
import { CloudLink } from "../../models/models.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a CloudLinks operations. */
export interface CloudLinksOperations {
  /** List CloudLink resources by PrivateCloud */
  list: (
    resourceGroupName: string,
    privateCloudName: string,
    options?: CloudLinksListOptionalParams,
  ) => PagedAsyncIterableIterator<CloudLink>;
  /** Get a CloudLink */
  get: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksGetOptionalParams,
  ) => Promise<CloudLink>;
  /** Create a CloudLink */
  createOrUpdate: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    cloudLink: CloudLink,
    options?: CloudLinksCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<CloudLink>, CloudLink>;
  /** Delete a CloudLink */
  delete: (
    resourceGroupName: string,
    privateCloudName: string,
    cloudLinkName: string,
    options?: CloudLinksDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
}

export function getCloudLinks(context: AvsContext, subscriptionId: string) {
  return {
    list: (
      resourceGroupName: string,
      privateCloudName: string,
      options?: CloudLinksListOptionalParams,
    ) =>
      cloudLinksList(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        options,
      ),
    get: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      options?: CloudLinksGetOptionalParams,
    ) =>
      cloudLinksGet(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      cloudLink: CloudLink,
      options?: CloudLinksCreateOrUpdateOptionalParams,
    ) =>
      cloudLinksCreateOrUpdate(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        cloudLink,
        options,
      ),
    delete: (
      resourceGroupName: string,
      privateCloudName: string,
      cloudLinkName: string,
      options?: CloudLinksDeleteOptionalParams,
    ) =>
      cloudLinksDelete(
        context,
        subscriptionId,
        resourceGroupName,
        privateCloudName,
        cloudLinkName,
        options,
      ),
  };
}

export function getCloudLinksOperations(
  context: AvsContext,
  subscriptionId: string,
): CloudLinksOperations {
  return {
    ...getCloudLinks(context, subscriptionId),
  };
}
