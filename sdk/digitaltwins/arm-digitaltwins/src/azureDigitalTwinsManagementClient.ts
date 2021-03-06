/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import { TokenCredential } from "@azure/core-auth";
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { AzureDigitalTwinsManagementClientContext } from "./azureDigitalTwinsManagementClientContext";


class AzureDigitalTwinsManagementClient extends AzureDigitalTwinsManagementClientContext {
  // Operation groups
  digitalTwins: operations.DigitalTwins;
  digitalTwinsEndpoint: operations.DigitalTwinsEndpoint;
  operations: operations.Operations;
  privateLinkResources: operations.PrivateLinkResources;
  privateEndpointConnections: operations.PrivateEndpointConnections;

  /**
   * Initializes a new instance of the AzureDigitalTwinsManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure. Credentials
   * implementing the TokenCredential interface from the @azure/identity package are recommended. For
   * more information about these credentials, see
   * {@link https://www.npmjs.com/package/@azure/identity}. Credentials implementing the
   * ServiceClientCredentials interface from the older packages @azure/ms-rest-nodeauth and
   * @azure/ms-rest-browserauth are also supported.
   * @param subscriptionId The subscription identifier.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials | TokenCredential, subscriptionId: string, options?: Models.AzureDigitalTwinsManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.digitalTwins = new operations.DigitalTwins(this);
    this.digitalTwinsEndpoint = new operations.DigitalTwinsEndpoint(this);
    this.operations = new operations.Operations(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
  }
}

// Operation Specifications

export {
  AzureDigitalTwinsManagementClient,
  AzureDigitalTwinsManagementClientContext,
  Models as AzureDigitalTwinsManagementModels,
  Mappers as AzureDigitalTwinsManagementMappers
};
export * from "./operations";
