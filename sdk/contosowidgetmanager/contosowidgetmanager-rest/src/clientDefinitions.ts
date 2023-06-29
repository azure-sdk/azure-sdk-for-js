// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  GetWidget2Parameters,
  CreateOrUpdateWidgetParameters,
  DeleteWidgetParameters,
  GetWidgetOperationStatusParameters,
  ListWidgetsParameters,
} from "./parameters";
import {
  GetWidget2200Response,
  GetWidget2DefaultResponse,
  CreateOrUpdateWidget200Response,
  CreateOrUpdateWidget201Response,
  CreateOrUpdateWidgetDefaultResponse,
  DeleteWidget202Response,
  DeleteWidgetDefaultResponse,
  GetWidgetOperationStatus200Response,
  GetWidgetOperationStatusDefaultResponse,
  ListWidgets200Response,
  ListWidgetsDefaultResponse,
} from "./responses";
import { Client, StreamableMethod } from "@azure-rest/core-client";

export interface GetWidget2 {
  /** Fetch a Widget by name. */
  get(
    options?: GetWidget2Parameters
  ): StreamableMethod<GetWidget2200Response | GetWidget2DefaultResponse>;
  /** Creates or updates a Widget asynchronously. */
  patch(
    options: CreateOrUpdateWidgetParameters
  ): StreamableMethod<
    | CreateOrUpdateWidget200Response
    | CreateOrUpdateWidget201Response
    | CreateOrUpdateWidgetDefaultResponse
  >;
  /** Delete a Widget asynchronously. */
  delete(
    options?: DeleteWidgetParameters
  ): StreamableMethod<DeleteWidget202Response | DeleteWidgetDefaultResponse>;
}

export interface GetWidgetOperationStatus {
  /** Gets status of a Widget operation. */
  get(
    options?: GetWidgetOperationStatusParameters
  ): StreamableMethod<
    | GetWidgetOperationStatus200Response
    | GetWidgetOperationStatusDefaultResponse
  >;
}

export interface ListWidgets {
  /** List Widget resources */
  get(
    options?: ListWidgetsParameters
  ): StreamableMethod<ListWidgets200Response | ListWidgetsDefaultResponse>;
}

export interface Routes {
  /** Resource for '/widgets/\{widgetName\}' has methods for the following verbs: get, patch, delete */
  (path: "/widgets/{widgetName}", widgetName: string): GetWidget2;
  /** Resource for '/widgets/\{widgetName\}/operations/\{operationId\}' has methods for the following verbs: get */
  (
    path: "/widgets/{widgetName}/operations/{operationId}",
    widgetName: string,
    operationId: string
  ): GetWidgetOperationStatus;
  /** Resource for '/widgets' has methods for the following verbs: get */
  (path: "/widgets"): ListWidgets;
}

export type WidgetManagerClient = Client & {
  path: Routes;
};
