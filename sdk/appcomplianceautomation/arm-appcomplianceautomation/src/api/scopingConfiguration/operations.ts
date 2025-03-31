// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { AppComplianceAutomationContext as Client } from "../index.js";
import {
  errorResponseDeserializer,
  ScopingConfigurationResource,
  scopingConfigurationResourceSerializer,
  scopingConfigurationResourceDeserializer,
  _ScopingConfigurationResourceListResult,
  _scopingConfigurationResourceListResultDeserializer,
} from "../../models/models.js";
import {
  ScopingConfigurationListOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationGetOptionalParams,
} from "./options.js";
import {
  PagedAsyncIterableIterator,
  buildPagedAsyncIterator,
} from "../../static-helpers/pagingHelpers.js";
import { expandUrlTemplate } from "../../static-helpers/urlTemplate.js";
import {
  StreamableMethod,
  PathUncheckedResponse,
  createRestError,
  operationOptionsToRequestParameters,
} from "@azure-rest/core-client";

export function _listSend(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations{?api-version}",
    {
      reportName: reportName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _listDeserialize(
  result: PathUncheckedResponse,
): Promise<_ScopingConfigurationResourceListResult> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return _scopingConfigurationResourceListResultDeserializer(result.body);
}

/** Returns a list format of the singleton scopingConfiguration for a specified report. */
export function list(
  context: Client,
  reportName: string,
  options: ScopingConfigurationListOptionalParams = { requestOptions: {} },
): PagedAsyncIterableIterator<ScopingConfigurationResource> {
  return buildPagedAsyncIterator(
    context,
    () => _listSend(context, reportName, options),
    _listDeserialize,
    ["200"],
    { itemName: "value", nextLinkName: "nextLink" },
  );
}

export function _$deleteSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}{?api-version}",
    {
      reportName: reportName,
      scopingConfigurationName: scopingConfigurationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).delete({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _$deleteDeserialize(result: PathUncheckedResponse): Promise<void> {
  const expectedStatuses = ["200", "204"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return;
}

/** Clean the AppComplianceAutomation scoping configuration of the specific report. */
/**
 *  @fixme delete is a reserved word that cannot be used as an operation name.
 *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
 *         to the operation to override the generated name.
 */
export async function $delete(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationDeleteOptionalParams = { requestOptions: {} },
): Promise<void> {
  const result = await _$deleteSend(context, reportName, scopingConfigurationName, options);
  return _$deleteDeserialize(result);
}

export function _createOrUpdateSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  properties: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}{?api-version}",
    {
      reportName: reportName,
      scopingConfigurationName: scopingConfigurationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).put({
    ...operationOptionsToRequestParameters(options),
    contentType: "application/json",
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
    body: scopingConfigurationResourceSerializer(properties),
  });
}

export async function _createOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingConfigurationResource> {
  const expectedStatuses = ["200", "201"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scopingConfigurationResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function createOrUpdate(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  properties: ScopingConfigurationResource,
  options: ScopingConfigurationCreateOrUpdateOptionalParams = {
    requestOptions: {},
  },
): Promise<ScopingConfigurationResource> {
  const result = await _createOrUpdateSend(
    context,
    reportName,
    scopingConfigurationName,
    properties,
    options,
  );
  return _createOrUpdateDeserialize(result);
}

export function _getSend(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): StreamableMethod {
  const path = expandUrlTemplate(
    "/providers/Microsoft.AppComplianceAutomation/reports/{reportName}/scopingConfigurations/{scopingConfigurationName}{?api-version}",
    {
      reportName: reportName,
      scopingConfigurationName: scopingConfigurationName,
      "api-version": context.apiVersion,
    },
    {
      allowReserved: options?.requestOptions?.skipUrlEncoding,
    },
  );
  return context.path(path).get({
    ...operationOptionsToRequestParameters(options),
    headers: {
      accept: "application/json",
      ...options.requestOptions?.headers,
    },
  });
}

export async function _getDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingConfigurationResource> {
  const expectedStatuses = ["200"];
  if (!expectedStatuses.includes(result.status)) {
    const error = createRestError(result);
    error.details = errorResponseDeserializer(result.body);
    throw error;
  }

  return scopingConfigurationResourceDeserializer(result.body);
}

/** Get the AppComplianceAutomation scoping configuration of the specific report. */
export async function get(
  context: Client,
  reportName: string,
  scopingConfigurationName: string,
  options: ScopingConfigurationGetOptionalParams = { requestOptions: {} },
): Promise<ScopingConfigurationResource> {
  const result = await _getSend(context, reportName, scopingConfigurationName, options);
  return _getDeserialize(result);
}
