/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import {
  OperationParameter,
  OperationURLParameter,
  OperationQueryParameter,
} from "@azure/core-client";
import {
  Cluster as ClusterMapper,
  ClusterForUpdate as ClusterForUpdateMapper,
  PromoteRequest as PromoteRequestMapper,
  NameAvailabilityRequest as NameAvailabilityRequestMapper,
  ServerConfiguration as ServerConfigurationMapper,
  FirewallRule as FirewallRuleMapper,
  Role as RoleMapper,
  PrivateEndpointConnection as PrivateEndpointConnectionMapper,
} from "../models/mappers.js";

export const accept: OperationParameter = {
  parameterPath: "accept",
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Accept",
    type: {
      name: "String",
    },
  },
};

export const $host: OperationURLParameter = {
  parameterPath: "$host",
  mapper: {
    serializedName: "$host",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const apiVersion: OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    defaultValue: "2023-03-02-preview",
    isConstant: true,
    serializedName: "api-version",
    type: {
      name: "String",
    },
  },
};

export const subscriptionId: OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    serializedName: "subscriptionId",
    required: true,
    type: {
      name: "Uuid",
    },
  },
};

export const resourceGroupName: OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    constraints: {
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "resourceGroupName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const contentType: OperationParameter = {
  parameterPath: ["options", "contentType"],
  mapper: {
    defaultValue: "application/json",
    isConstant: true,
    serializedName: "Content-Type",
    type: {
      name: "String",
    },
  },
};

export const parameters: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterMapper,
};

export const clusterName: OperationURLParameter = {
  parameterPath: "clusterName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^(?![0-9]+$)(?!-)[a-z0-9-]{3,40}(?<!-)$"),
      MaxLength: 40,
      MinLength: 3,
    },
    serializedName: "clusterName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters1: OperationParameter = {
  parameterPath: "parameters",
  mapper: ClusterForUpdateMapper,
};

export const promoteRequest: OperationParameter = {
  parameterPath: ["options", "promoteRequest"],
  mapper: PromoteRequestMapper,
};

export const nameAvailabilityRequest: OperationParameter = {
  parameterPath: "nameAvailabilityRequest",
  mapper: NameAvailabilityRequestMapper,
};

export const nextLink: OperationURLParameter = {
  parameterPath: "nextLink",
  mapper: {
    serializedName: "nextLink",
    required: true,
    type: {
      name: "String",
    },
  },
  skipEncoding: true,
};

export const serverName: OperationURLParameter = {
  parameterPath: "serverName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "serverName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const configurationName: OperationURLParameter = {
  parameterPath: "configurationName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
      MaxLength: 90,
      MinLength: 1,
    },
    serializedName: "configurationName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters2: OperationParameter = {
  parameterPath: "parameters",
  mapper: ServerConfigurationMapper,
};

export const parameters3: OperationParameter = {
  parameterPath: "parameters",
  mapper: FirewallRuleMapper,
};

export const firewallRuleName: OperationURLParameter = {
  parameterPath: "firewallRuleName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "firewallRuleName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const roleName: OperationURLParameter = {
  parameterPath: "roleName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "roleName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters4: OperationParameter = {
  parameterPath: "parameters",
  mapper: RoleMapper,
};

export const privateEndpointConnectionName: OperationURLParameter = {
  parameterPath: "privateEndpointConnectionName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "privateEndpointConnectionName",
    required: true,
    type: {
      name: "String",
    },
  },
};

export const parameters5: OperationParameter = {
  parameterPath: "parameters",
  mapper: PrivateEndpointConnectionMapper,
};

export const privateLinkResourceName: OperationURLParameter = {
  parameterPath: "privateLinkResourceName",
  mapper: {
    constraints: {
      Pattern: new RegExp("^[-\\w\\._]+$"),
    },
    serializedName: "privateLinkResourceName",
    required: true,
    type: {
      name: "String",
    },
  },
};
