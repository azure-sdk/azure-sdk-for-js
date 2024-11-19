// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  AppComplianceAutomationContext as Client,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationGetOptionalParams,
  ScopingConfigurationListOptionalParams,
} from "../index.js";
import {
  ScopingConfigurationResource,
  scopingConfigurationResourceSerializer,
  scopingConfigurationResourceDeserializer,
  _ScopingConfigurationResourceListResult,
  _scopingConfigurationResourceListResultDeserializer,
} from "../../models/models.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _scopingConfigurationGetSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationGetDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingConfigurationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scopingConfigurationResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationGet(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): Promise<ScopingConfigurationResource> {
  const result = await _scopingConfigurationGetSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _scopingConfigurationGetDeserialize(result);
}

export function _scopingConfigurationCreateOrUpdateSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  properties: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .put({
      ...operationOptionsToRequestParameters(options),
      body: scopingConfigurationResourceSerializer(properties),
    });
}

export async function _scopingConfigurationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingConfigurationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return scopingConfigurationResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationCreateOrUpdate(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  properties: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingConfigurationResource> {
  const result = await _scopingConfigurationCreateOrUpdateSend(
    context,
    reportName,
    scopingConfigurationName,
    properties,
    options,
  );
  return _scopingConfigurationCreateOrUpdateDeserialize(result);
}

export function _scopingConfigurationDeleteSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}",
      reportName,
      scopingConfigurationName,
    )
    .delete({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationDeleteDeserialize(
  result: PathUncheckedResponse,
): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return;
}

/** Clean the AppComplianceAutomation scoping configuration of the specific report. */
export async function scopingConfigurationDelete(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _scopingConfigurationDeleteSend(
    context,
    reportName,
    scopingConfigurationName,
    options,
  );
  return _scopingConfigurationDeleteDeserialize(result);
}

export function _scopingConfigurationListSend(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  return context
    .path(
      "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations",
      reportName,
    )
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _scopingConfigurationListDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScopingConfigurationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    throw createRestError(result);
  }

  return _scopingConfigurationResourceListResultDeserializer(result.body);
}

/** Returns a list format of the singleton scopingConfiguration for a specified report. */
export function scopingConfigurationList(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScopingConfigurationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _scopingConfigurationListSend(context, reportName, options),
    _scopingConfigurationListDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}
