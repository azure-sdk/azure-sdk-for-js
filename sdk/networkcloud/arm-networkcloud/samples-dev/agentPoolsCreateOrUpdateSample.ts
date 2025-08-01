/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

import { AgentPool, NetworkCloud } from "@azure/arm-networkcloud";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

/**
 * This sample demonstrates how to Create a new Kubernetes cluster agent pool or update the properties of the existing one.
 *
 * @summary Create a new Kubernetes cluster agent pool or update the properties of the existing one.
 * x-ms-original-file: specification/networkcloud/resource-manager/Microsoft.NetworkCloud/stable/2025-02-01/examples/AgentPools_Create.json
 */
async function createOrUpdateKubernetesClusterAgentPool(): Promise<void> {
  const subscriptionId =
    process.env["NETWORKCLOUD_SUBSCRIPTION_ID"] ||
    "123e4567-e89b-12d3-a456-426655440000";
  const resourceGroupName =
    process.env["NETWORKCLOUD_RESOURCE_GROUP"] || "resourceGroupName";
  const kubernetesClusterName = "kubernetesClusterName";
  const agentPoolName = "agentPoolName";
  const agentPoolParameters: AgentPool = {
    administratorConfiguration: {
      adminUsername: "azure",
      sshPublicKeys: [
        {
          keyData:
            "ssh-rsa AAtsE3njSONzDYRIZv/WLjVuMfrUSByHp+jfaaOLHTIIB4fJvo6dQUZxE20w2iDHV3tEkmnTo84eba97VMueQD6OzJPEyWZMRpz8UYWOd0IXeRqiFu1lawNblZhwNT/ojNZfpB3af/YDzwQCZgTcTRyNNhL4o/blKUmug0daSsSXISTRnIDpcf5qytjs1Xo+yYyJMvzLL59mhAyb3p/cD+Y3/s3WhAx+l0XOKpzXnblrv9d3q4c2tWmm/SyFqthaqd0= admin@vm",
        },
      ],
    },
    agentOptions: { hugepagesCount: 96, hugepagesSize: "1G" },
    attachedNetworkConfiguration: {
      l2Networks: [
        {
          networkId:
            "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l2Networks/l2NetworkName",
          pluginType: "DPDK",
        },
      ],
      l3Networks: [
        {
          ipamEnabled: "False",
          networkId:
            "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/l3Networks/l3NetworkName",
          pluginType: "SRIOV",
        },
      ],
      trunkedNetworks: [
        {
          networkId:
            "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.NetworkCloud/trunkedNetworks/trunkedNetworkName",
          pluginType: "MACVLAN",
        },
      ],
    },
    availabilityZones: ["1", "2", "3"],
    count: 3,
    extendedLocation: {
      name: "/subscriptions/123e4567-e89b-12d3-a456-426655440000/resourceGroups/resourceGroupName/providers/Microsoft.ExtendedLocation/customLocations/clusterExtendedLocationName",
      type: "CustomLocation",
    },
    labels: [{ key: "kubernetes.label", value: "true" }],
    location: "location",
    mode: "System",
    tags: { key1: "myvalue1", key2: "myvalue2" },
    taints: [{ key: "kubernetes.taint", value: "true:NoSchedule" }],
    upgradeSettings: { maxSurge: "1" },
    vmSkuName: "NC_P46_224_v1",
  };
  const credential = new DefaultAzureCredential();
  const client = new NetworkCloud(credential, subscriptionId);
  const result = await client.agentPools.beginCreateOrUpdateAndWait(
    resourceGroupName,
    kubernetesClusterName,
    agentPoolName,
    agentPoolParameters,
  );
  console.log(result);
}

async function main(): Promise<void> {
  await createOrUpdateKubernetesClusterAgentPool();
}

main().catch(console.error);
