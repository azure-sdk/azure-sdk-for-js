// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import {
  scopingConfigurationPropertiesSerializer,
  ScopingConfigurationResource,
  _ScopingConfigurationResourceListResult,
} from "../../models/models.js";
import { AppComplianceAutomationContext as Client } from "../index.js";
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
  ScopingConfigurationGetOptionalParams,
  ScopingConfigurationCreateOrUpdateOptionalParams,
  ScopingConfigurationDeleteOptionalParams,
  ScopingConfigurationListOptionalParams,
} from "../../models/options.js";

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
    properties: {
      answers:
        result.body.properties["answers"] === undefined
          ? result.body.properties["answers"]
          : result.body.properties["answers"].map((p: any) => {
              return { questionId: p["questionId"], answers: p["answers"] };
            }),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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
      body: {
        properties: scopingConfigurationPropertiesSerializer(
          properties.properties,
        ),
      },
    });
}

export async function _scopingConfigurationCreateOrUpdateDeserialize(
  result: PathUncheckedResponse,
): Promise<ScopingConfigurationResource> {
  const expectedStatuses = ["200", "201"];
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
    properties: {
      answers:
        result.body.properties["answers"] === undefined
          ? result.body.properties["answers"]
          : result.body.properties["answers"].map((p: any) => {
              return { questionId: p["questionId"], answers: p["answers"] };
            }),
      provisioningState: result.body.properties["provisioningState"],
    },
  };
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
        properties: {
          answers:
            p.properties["answers"] === undefined
              ? p.properties["answers"]
              : p.properties["answers"].map((p: any) => {
                  return { questionId: p["questionId"], answers: p["answers"] };
                }),
          provisioningState: p.properties["provisioningState"],
        },
      };
    }),
    nextLink: result.body["nextLink"],
  };
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
