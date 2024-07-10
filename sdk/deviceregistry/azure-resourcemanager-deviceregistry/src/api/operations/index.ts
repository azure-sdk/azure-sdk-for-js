// Licensed under the MIT license.

import {
  Origin,
  ActionType,
  _OperationListResult,
} from "../../models/models.js";
import {
  isUnexpected,
  DeviceRegistryContext as Client,
  OperationsList200Response,
  OperationsListDefaultResponse,
} from "../../rest/index.js";
import {
  StreamableMethod,
  operationOptionsToRequestParameters,
  createRestError,
} from "@typespec/ts-http-runtime";
import { OperationsListOptionalParams } from "../../models/options.js";

export function _listSend(
  context: Client,
  options: OperationsListOptionalParams = { requestOptions: {} },
): StreamableMethod<OperationsList200Response | OperationsListDefaultResponse> {
  return context
    .path("/providers/Microsoft.DeviceRegistry/operations")
    .get({ ...operationOptionsToRequestParameters(options) });
}

export async function _listDeserialize(
  result: OperationsList200Response | OperationsListDefaultResponse,
): Promise<_OperationListResult> {
  if (isUnexpected(result)) {
    throw createRestError(result);
  }

  return {
    value: result.body["value"].map((p) => ({
      name: p["name"],
      isDataAction: p["isDataAction"],
      display: !p.display
        ? undefined
        : {
            provider: p.display?.["provider"],
            resource: p.display?.["resource"],
            operation: p.display?.["operation"],
            description: p.display?.["description"],
          },
      origin: p["origin"] as Origin,
      actionType: p["actionType"] as ActionType,
    })),
    nextLink: result.body["nextLink"],
  };
}

/** List the operations for the provider */
export async function list(
  context: Client,
  options: OperationsListOptionalParams = { requestOptions: {} },
): Promise<_OperationListResult> {
  const result = await _listSend(context, options);
  return _listDeserialize(result);
}
