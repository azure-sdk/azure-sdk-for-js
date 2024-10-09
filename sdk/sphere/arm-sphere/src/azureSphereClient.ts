// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { TokenCredential } from "@azure/core-auth";
import { Pipeline } from "@azure/core-rest-pipeline";
import {
  getOperationsOperations,
  OperationsOperations,
} from "./classic/operations/index.js";
import {
  getCatalogsOperations,
  CatalogsOperations,
} from "./classic/catalogs/index.js";
import {
  getCertificatesOperations,
  CertificatesOperations,
} from "./classic/certificates/index.js";
import {
  getImagesOperations,
  ImagesOperations,
} from "./classic/images/index.js";
import {
  getProductsOperations,
  ProductsOperations,
} from "./classic/products/index.js";
import {
  getDeviceGroupsOperations,
  DeviceGroupsOperations,
} from "./classic/deviceGroups/index.js";
import {
  getDeploymentsOperations,
  DeploymentsOperations,
} from "./classic/deployments/index.js";
import {
  getDevicesOperations,
  DevicesOperations,
} from "./classic/devices/index.js";
import {
  createAzureSphere,
  AzureSphereContext,
  AzureSphereClientOptionalParams,
} from "./api/index.js";

export { AzureSphereClientOptionalParams } from "./api/azureSphereContext.js";

export class AzureSphereClient {
  private _client: AzureSphereContext;
  /** The pipeline used by this client to make requests */
  public readonly pipeline: Pipeline;

  /** Azure Sphere resource management API. */
  constructor(
    credential: TokenCredential,
    subscriptionId: string,
    options: AzureSphereClientOptionalParams = {},
  ) {
    const prefixFromOptions = options?.userAgentOptions?.userAgentPrefix;
    const userAgentPrefix = prefixFromOptions
      ? `${prefixFromOptions} azsdk-js-client`
      : "azsdk-js-client";
    this._client = createAzureSphere(credential, {
      ...options,
      userAgentOptions: { userAgentPrefix },
    });
    this.pipeline = this._client.pipeline;
    this.operations = getOperationsOperations(this._client);
    this.catalogs = getCatalogsOperations(this._client, subscriptionId);
    this.certificates = getCertificatesOperations(this._client, subscriptionId);
    this.images = getImagesOperations(this._client, subscriptionId);
    this.products = getProductsOperations(this._client, subscriptionId);
    this.deviceGroups = getDeviceGroupsOperations(this._client, subscriptionId);
    this.deployments = getDeploymentsOperations(this._client, subscriptionId);
    this.devices = getDevicesOperations(this._client, subscriptionId);
  }

  /** The operation groups for Operations */
  public readonly operations: OperationsOperations;
  /** The operation groups for Catalogs */
  public readonly catalogs: CatalogsOperations;
  /** The operation groups for Certificates */
  public readonly certificates: CertificatesOperations;
  /** The operation groups for Images */
  public readonly images: ImagesOperations;
  /** The operation groups for Products */
  public readonly products: ProductsOperations;
  /** The operation groups for DeviceGroups */
  public readonly deviceGroups: DeviceGroupsOperations;
  /** The operation groups for Deployments */
  public readonly deployments: DeploymentsOperations;
  /** The operation groups for Devices */
  public readonly devices: DevicesOperations;
}
