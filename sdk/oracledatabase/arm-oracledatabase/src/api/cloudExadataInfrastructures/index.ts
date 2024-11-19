// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  DatabaseContext as Client,
  CloudExadataInfrastructuresAddStorageCapacityOptionalParams,
  CloudExadataInfrastructuresCreateOrUpdateOptionalParams,
  CloudExadataInfrastructuresDeleteOptionalParams,
  CloudExadataInfrastructuresGetOptionalParams,
  CloudExadataInfrastructuresListByResourceGroupOptionalParams,
  CloudExadataInfrastructuresListBySubscriptionOptionalParams,
  CloudExadataInfrastructuresUpdateOptionalParams,
} from "../index.js";
import {
  _CloudExadataInfrastructureListResult,
  _cloudExadataInfrastructureListResultDeserializer,
  CloudExadataInfrastructure,
  cloudExadataInfrastructureSerializer,
  cloudExadataInfrastructureDeserializer,
  CloudExadataInfrastructureUpdate,
  cloudExadataInfrastructureUpdateSerializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _cloudExadataInfrastructuresListBySubscriptionSend(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresListBySubscriptionDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudExadataInfrastructureListResultDeserializer(result.body);
}

/** List CloudExadataInfrastructure resources by subscription ID */
export function cloudExadataInfrastructuresListBySubscription(
  context: Client,
  subscriptionId: string,
  options: CloudExadataInfrastructuresListBySubscriptionOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudExadataInfrastructuresListBySubscriptionSend(
        context,
        subscriptionId,
        options,
      ),
    _cloudExadataInfrastructuresListBySubscriptionDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudExadataInfrastructuresGetSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresGetDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Get a CloudExadataInfrastructure */
export async function cloudExadataInfrastructuresGet(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresGetOptionalParams = {
    requestOptions: {},
  },
): Promise<CloudExadataInfrastructure> {
  const result = await _cloudExadataInfrastructuresGetSend(
    context,
    subscriptionId,
    resourceGroupName,
    cloudexadatainfrastructurename,
    options,
  );
  return _cloudExadataInfrastructuresGetDeserialize(result);
}

export function _cloudExadataInfrastructuresUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .patch({
      ...operationOptionsToRequestParameters(options),
      body: cloudExadataInfrastructureUpdateSerializer(properties),
    });
}

export async function _cloudExadataInfrastructuresUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Update a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  properties: CloudExadataInfrastructureUpdate,
  options: CloudExadataInfrastructuresUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresUpdateDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          properties,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _cloudExadataInfrastructuresDeleteSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["202", "204", "200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Delete a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresDelete(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresDeleteOptionalParams = {
    requestOptions: {},
  },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresDeleteDeserialize,
    ["202", "204", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresDeleteSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _cloudExadataInfrastructuresCreateOrUpdateSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: cloudExadataInfrastructureSerializer(resource),
    });
}

export async function _cloudExadataInfrastructuresCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Create a CloudExadataInfrastructure */
export function cloudExadataInfrastructuresCreateOrUpdate(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  resource: CloudExadataInfrastructure,
  options: CloudExadataInfrastructuresCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresCreateOrUpdateDeserialize,
    ["200", "201"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresCreateOrUpdateSend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          resource,
          options,
        ),
      resourceLocationConfig: "azure-async-operation",
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}

export function _cloudExadataInfrastructuresListByResourceGroupSend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures",
      subscriptionId,
      resourceGroupName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresListByResourceGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_CloudExadataInfrastructureListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _cloudExadataInfrastructureListResultDeserializer(result.body);
}

/** List CloudExadataInfrastructure resources by resource group */
export function cloudExadataInfrastructuresListByResourceGroup(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  options: CloudExadataInfrastructuresListByResourceGroupOptionalParams = {
    requestOptions: {},
  },
): PagedAsyncIterableIterator<CloudExadataInfrastructure> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _cloudExadataInfrastructuresListByResourceGroupSend(
        context,
        subscriptionId,
        resourceGroupName,
        options,
      ),
    _cloudExadataInfrastructuresListByResourceGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _cloudExadataInfrastructuresAddStorageCapacitySend(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Oracle.Database/cloudExadataInfrastructures/{cloudexadatainfrastructurename}/addStorageCapacity",
      subscriptionId,
      resourceGroupName,
      cloudexadatainfrastructurename,
    )
    .post({ ...operationOptionsToRequestParameters(options) });
}

export async function _cloudExadataInfrastructuresAddStorageCapacityDeserialize(
  result: PathUncheckedResponse,
): Promise<CloudExadataInfrastructure> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return cloudExadataInfrastructureDeserializer(result.body);
}

/** Perform add storage capacity on exadata infra */
export function cloudExadataInfrastructuresAddStorageCapacity(
  context: Client,
  subscriptionId: string,
  resourceGroupName: string,
  cloudexadatainfrastructurename: string,
  options: CloudExadataInfrastructuresAddStorageCapacityOptionalParams = {
    requestOptions: {},
  },
): PollerLike<
  OperationState<CloudExadataInfrastructure>,
  CloudExadataInfrastructure
> {
  return getLongRunningPoller(
    context,
    _cloudExadataInfrastructuresAddStorageCapacityDeserialize,
    ["200", "202"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _cloudExadataInfrastructuresAddStorageCapacitySend(
          context,
          subscriptionId,
          resourceGroupName,
          cloudexadatainfrastructurename,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<
    OperationState<CloudExadataInfrastructure>,
    CloudExadataInfrastructure
  >;
}
