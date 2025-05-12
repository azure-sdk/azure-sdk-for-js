// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { createEdgeOrder, EdgeOrderContext, EdgeOrderClientOptionalParams } from "./api/index.js";
import {
  OrdersOperationGroupOperations,
  _getOrdersOperationGroupOperations,
} from "./classic/ordersOperationGroup/index.js";
import {
  ProductsAndConfigurationsOperationGroupOperations,
  _getProductsAndConfigurationsOperationGroupOperations,
} from "./classic/productsAndConfigurationsOperationGroup/index.js";
import {
  OrderResourcesOperations,
  _getOrderResourcesOperations,
} from "./classic/orderResources/index.js";
import {
  OrderItemResourcesOperations,
  _getOrderItemResourcesOperations,
} from "./classic/orderItemResources/index.js";
import {
  AddressResourcesOperations,
  _getAddressResourcesOperations,
} from "./classic/addressResources/index.js";
import { OperationsOperations, _getOperationsOperations } from "./classic/operations/index.js";
import { Pipeline } from "@azure/core-rest-pipeline";
import { TokenCredential } from "@azure/core-auth";

export { EdgeOrderClientOptionalParams } from "./api/edgeOrderContext.js";

export class EdgeOrderClient {
  private _client: EdgeOrderContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Edge Order API's */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: EdgeOrderClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : `azsdk-js-client`;
    this._client = createEdgeOrder(credential, subscriptionId, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.ordersOperationGroup = _getOrdersOperationGroupOperations(this._client);
    this.productsAndConfigurationsOperationGroup =
      _getProductsAndConfigurationsOperationGroupOperations(this._client);
    this.orderResources = _getOrderResourcesOperations(this._client);
    this.orderItemResources = _getOrderItemResourcesOperations(this._client);
    this.addressResources = _getAddressResourcesOperations(this._client);
    this.operations = _getOperationsOperations(this._client);
  }

  /** The operation groups for ordersOperationGroup */
  public readonly ordersOperationGroup: OrdersOperationGroupOperations;
  /** The operation groups for productsAndConfigurationsOperationGroup */
  public readonly productsAndConfigurationsOperationGroup: ProductsAndConfigurationsOperationGroupOperations;
  /** The operation groups for orderResources */
  public readonly orderResources: OrderResourcesOperations;
  /** The operation groups for orderItemResources */
  public readonly orderItemResources: OrderItemResourcesOperations;
  /** The operation groups for addressResources */
  public readonly addressResources: AddressResourcesOperations;
  /** The operation groups for operations */
  public readonly operations: OperationsOperations;
}
