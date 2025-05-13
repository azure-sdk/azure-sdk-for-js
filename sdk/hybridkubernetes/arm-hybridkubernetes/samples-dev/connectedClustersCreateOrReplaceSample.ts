// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { KubernetesClient } from "@azure/arm-hybridkubernetes";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @summary aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: 2024-12-01-preview/CreateClusterAgentless_KindAWSExample.json
 */
async function createClusterAgentlessKindAWSExample(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const client = new KubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusters.createOrReplace("k8sc-rg", "testCluster");
  console.log(result);
}

/**
 * This sample demonstrates how to aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @summary aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: 2024-12-01-preview/CreateClusterExample.json
 */
async function createClusterExample(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const client = new KubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusters.createOrReplace("k8sc-rg", "testCluster");
  console.log(result);
}

/**
 * This sample demonstrates how to aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @summary aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: 2024-12-01-preview/CreateClusterPrivateLinkExample.json
 */
async function createClusterPrivateLinkExample(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const client = new KubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusters.createOrReplace("k8sc-rg", "testCluster");
  console.log(result);
}

/**
 * This sample demonstrates how to aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @summary aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: 2024-12-01-preview/CreateCluster_KindExample.json
 */
async function createClusterKindExample(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const client = new KubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusters.createOrReplace("k8sc-rg", "testCluster");
  console.log(result);
}

/**
 * This sample demonstrates how to aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 *
 * @summary aPI to register a new Kubernetes cluster and create or replace a connected cluster tracked resource in Azure Resource Manager (ARM).
 * x-ms-original-file: 2024-12-01-preview/UpdateClusterByPutExample.json
 */
async function updateClusterByPutExample(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "1bfbb5d0-917e-4346-9026-1d3b344417f5";
  const client = new KubernetesClient(credential, subscriptionId);
  const result = await client.connectedClusters.createOrReplace("k8sc-rg", "testCluster");
  console.log(result);
}

async function main(): Promise<void> {
  await createClusterAgentlessKindAWSExample();
  await createClusterExample();
  await createClusterPrivateLinkExample();
  await createClusterKindExample();
  await updateClusterByPutExample();
}

main().catch(console.error);
