// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  Volume,
  volumeSerializer,
  volumeDeserializer,
  VolumeUpdate,
  volumeUpdateSerializer,
  _VolumeList,
  _volumeListDeserializer,
} from "../../models/models.js";
import {
  VolumesRestoreVolumeOptionalParams,
  VolumesListByVolumeGroupOptionalParams,
  VolumesDeleteOptionalParams,
  VolumesUpdateOptionalParams,
  VolumesCreateOptionalParams,
  VolumesGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { getLongRunningPoller } from "../../static-helpers/pollingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";
import { PollerLike, OperationState } from "@azure/core-lro";

export function _restoreVolumeSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesRestoreVolumeOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}/restore{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .post({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _restoreVolumeDeserialize(
  result: PathUncheckedResponse,
): Promise<Volume> {
  const expectedStatuses = ["202", "200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return volumeDeserializer(result.body);
}

/** Restore Soft Deleted Volumes. The volume name is obtained by using the API to list soft deleted volumes by volume group */
export function restoreVolume(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesRestoreVolumeOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Volume>, Volume> {
  return getLongRunningPoller(
    context,
    _restoreVolumeDeserialize,
    ["202", "200"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _restoreVolumeSend(
          context,
          resourceGroupName,
          elasticSanName,
          volumeGroupName,
          volumeName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<Volume>, Volume>;
}

export function _listByVolumeGroupSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  options: VolumesListByVolumeGroupOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.xMsAccessSoftDeletedResources !== undefined
          ? {
              "x-ms-access-soft-deleted-resources":
                options?.xMsAccessSoftDeletedResources,
            }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _listByVolumeGroupDeserialize(
  result: PathUncheckedResponse,
): Promise<_VolumeList> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _volumeListDeserializer(result.body);
}

/** List Volumes in a VolumeGroup. */
export function listByVolumeGroup(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  options: VolumesListByVolumeGroupOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<Volume> {
  return buildPagedAsyncIterator(
    context,
    () =>
      _listByVolumeGroupSend(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        options,
      ),
    _listByVolumeGroupDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}{?api%2Dversion,deleteType}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion,
      deleteType: options?.deleteType,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .delete({
      ...operationOptionsToRequestParameters(options),
      headers: {
        ...(options?.xMsDeleteSnapshots !== undefined
          ? { "x-ms-delete-snapshots": options?.xMsDeleteSnapshots }
          : {}),
        ...(options?.xMsForceDelete !== undefined
          ? { "x-ms-force-delete": options?.xMsForceDelete }
          : {}),
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _$deleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "202", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Delete an Volume. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export function $delete(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesDeleteOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(
    context,
    _$deleteDeserialize,
    ["200", "202", "204"],
    {
      updateIntervalInMs: options?.updateIntervalInMs,
      abortSignal: options?.abortSignal,
      getInitialResponse: () =>
        _$deleteSend(
          context,
          resourceGroupName,
          elasticSanName,
          volumeGroupName,
          volumeName,
          options,
        ),
      resourceLocationConfig: "location",
    },
  ) as PollerLike<OperationState<void>, void>;
}

export function _updateSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  parameters: VolumeUpdate,
  options: VolumesUpdateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .patch({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: volumeUpdateSerializer(parameters),
    });
}

export async function _updateDeserialize(
  result: PathUncheckedResponse,
): Promise<Volume> {
  const expectedStatuses = ["200", "202"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return volumeDeserializer(result.body);
}

/** Update an Volume. */
export function update(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  parameters: VolumeUpdate,
  options: VolumesUpdateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<Volume>, Volume> {
  return getLongRunningPoller(context, _updateDeserialize, ["200", "202"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _updateSend(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<Volume>, Volume>;
}

export function _createSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  parameters: Volume,
  options: VolumesCreateOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .put({
      ...operationOptionsToRequestParameters(options),
      contentType: "application/json",
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
      body: volumeSerializer(parameters),
    });
}

export async function _createDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Create a Volume. */
export function create(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  parameters: Volume,
  options: VolumesCreateOptionalParams = { requestOptions: {} },
): PollerLike<OperationState<void>, void> {
  return getLongRunningPoller(context, _createDeserialize, ["200", "201"], {
    updateIntervalInMs: options?.updateIntervalInMs,
    abortSignal: options?.abortSignal,
    getInitialResponse: () =>
      _createSend(
        context,
        resourceGroupName,
        elasticSanName,
        volumeGroupName,
        volumeName,
        parameters,
        options,
      ),
    resourceLocationConfig: "location",
  }) as PollerLike<OperationState<void>, void>;
}

export function _getSend(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ElasticSan/elasticSans/{elasticSanName}/volumegroups/{volumeGroupName}/volumes/{volumeName}{?api%2Dversion}",
    {
      subscriptionId: context.subscriptionId,
      resourceGroupName: resourceGroupName,
      elasticSanName: elasticSanName,
      volumeGroupName: volumeGroupName,
      volumeName: volumeName,
      "api%2Dversion": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context
    .path(path)
    .get({
      ...operationOptionsToRequestParameters(options),
      headers: {
        accept: "application/json",
        ...options.requestOptions?.headers,
      },
    });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<Volume> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return volumeDeserializer(result.body);
}

/** Get an Volume. */
export async function get(
  context: Client,
  resourceGroupName: string,
  elasticSanName: string,
  volumeGroupName: string,
  volumeName: string,
  options: VolumesGetOptionalParams = { requestOptions: {} },
): Promise<Volume> {
  const result = await _getSend(
    context,
    resourceGroupName,
    elasticSanName,
    volumeGroupName,
    volumeName,
    options,
  );
  return _getDeserialize(result);
}
