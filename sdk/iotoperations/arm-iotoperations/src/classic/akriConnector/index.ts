// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { IoTOperationsContext } from "../../api/ioTOperationsContext.js";
import { AkriConnectorResource } from "../../models/models.js";
import {
  AkriConnectorListByTemplateOptionalParams,
  AkriConnectorDeleteOptionalParams,
  AkriConnectorCreateOrUpdateOptionalParams,
  AkriConnectorGetOptionalParams,
} from "../../api/akriConnector/options.js";
import {
  listByTemplate,
  $delete,
  createOrUpdate,
  get,
} from "../../api/akriConnector/operations.js";
import { PagedAsyncIterableIterator } from "../../static-helpers/pagingHelpers.js";
import { PollerLike, OperationState } from "@azure/core-lro";

/** Interface representing a AkriConnector operations. */
export interface AkriConnectorOperations {
  /** List AkriConnectorResource resources by AkriConnectorTemplateResource */
  listByTemplate: (
    resourceGroupName: string,
    instanceName: string,
    akriConnectorTemplateName: string,
    options?: AkriConnectorListByTemplateOptionalParams,
  ) => PagedAsyncIterableIterator<AkriConnectorResource>;
  /** Delete a AkriConnectorResource */
  /**
   *  @fixme delete is a reserved word that cannot be used as an operation name.
   *         Please add @clientName("clientName") or @clientName("<JS-Specific-Name>", "javascript")
   *         to the operation to override the generated name.
   */
  delete: (
    resourceGroupName: string,
    instanceName: string,
    akriConnectorTemplateName: string,
    akriConnectorName: string,
    options?: AkriConnectorDeleteOptionalParams,
  ) => PollerLike<OperationState<void>, void>;
  /** Create a AkriConnectorResource */
  createOrUpdate: (
    resourceGroupName: string,
    instanceName: string,
    akriConnectorTemplateName: string,
    akriConnectorName: string,
    resource: AkriConnectorResource,
    options?: AkriConnectorCreateOrUpdateOptionalParams,
  ) => PollerLike<OperationState<AkriConnectorResource>, AkriConnectorResource>;
  /** Get a AkriConnectorResource */
  get: (
    resourceGroupName: string,
    instanceName: string,
    akriConnectorTemplateName: string,
    akriConnectorName: string,
    options?: AkriConnectorGetOptionalParams,
  ) => Promise<AkriConnectorResource>;
}

function _getAkriConnector(context: IoTOperationsContext) {
  return {
    listByTemplate: (
      resourceGroupName: string,
      instanceName: string,
      akriConnectorTemplateName: string,
      options?: AkriConnectorListByTemplateOptionalParams,
    ) =>
      listByTemplate(context, resourceGroupName, instanceName, akriConnectorTemplateName, options),
    delete: (
      resourceGroupName: string,
      instanceName: string,
      akriConnectorTemplateName: string,
      akriConnectorName: string,
      options?: AkriConnectorDeleteOptionalParams,
    ) =>
      $delete(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        akriConnectorName,
        options,
      ),
    createOrUpdate: (
      resourceGroupName: string,
      instanceName: string,
      akriConnectorTemplateName: string,
      akriConnectorName: string,
      resource: AkriConnectorResource,
      options?: AkriConnectorCreateOrUpdateOptionalParams,
    ) =>
      createOrUpdate(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        akriConnectorName,
        resource,
        options,
      ),
    get: (
      resourceGroupName: string,
      instanceName: string,
      akriConnectorTemplateName: string,
      akriConnectorName: string,
      options?: AkriConnectorGetOptionalParams,
    ) =>
      get(
        context,
        resourceGroupName,
        instanceName,
        akriConnectorTemplateName,
        akriConnectorName,
        options,
      ),
  };
}

export function _getAkriConnectorOperations(
  context: IoTOperationsContext,
): AkriConnectorOperations {
  return {
    ..._getAkriConnector(context),
  };
}
