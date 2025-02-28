// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  GetWidgetSecureParameters,
  CreateOrUpdateWidgetParameters,
  DeleteWidgetParameters,
  GetWidgetOperationStatusParameters,
  ListWidgetsParameters,
} from "./parameters.js";
import type {
  GetWidgetSecure200Response,
  GetWidgetSecureDefaultResponse,
  CreateOrUpdateWidget200Response,
  CreateOrUpdateWidget201Response,
  CreateOrUpdateWidgetDefaultResponse,
  DeleteWidget202Response,
  DeleteWidgetDefaultResponse,
  GetWidgetOperationStatus200Response,
  GetWidgetOperationStatusDefaultResponse,
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
} from "./responses.js";
import type { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetWidgetSecure {
  /** Fetch a Widget by name. */
  get(
    options?: GetWidgetSecureParameters,
  ): StreamableMethod<GetWidgetSecure200Response | GetWidgetSecureDefaultResponse>;
  /** Creates or updates a Widget asynchronously. */
  patch(
    options: CreateOrUpdateWidgetParameters,
  ): StreamableMethod<
    | CreateOrUpdateWidget200Response
    | CreateOrUpdateWidget201Response
    | CreateOrUpdateWidgetDefaultResponse
  >;
  /** Delete a Widget asynchronously. */
  delete(
    options?: DeleteWidgetParameters,
  ): StreamableMethod<DeleteWidget202Response | DeleteWidgetDefaultResponse>;
}

export interface GetWidgetOperationStatus {
  /** Gets status of a Widget operation. */
  get(
    options?: GetWidgetOperationStatusParameters,
  ): StreamableMethod<
    GetWidgetOperationStatus200Response | GetWidgetOperationStatusDefaultResponse
  >;
}

export interface ListWidgets {
  /** List Widget resources */
  get(
    options?: ListWidgetsParameters,
  ): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse>;
}

export interface Routes {
  /** Resource for '/widgets/\{widgetName\}' has methods for the following verbs: get, patch, delete */
  (path: "/widgets/{widgetName}", widgetName: string): GetWidgetSecure;
  /** Resource for '/widgets/\{widgetName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/widgets/{widgetName}/operations/{operationId}",
    widgetName: string,
    operationId: string,
  ): GetWidgetOperationStatus;
  /** Resource for '/widgets' has methods for the following verbs: get */
  (path: "/widgets"): ListWidgets;
}

export type WidgetManagerClient = Client & {
  path: Routes;
};
