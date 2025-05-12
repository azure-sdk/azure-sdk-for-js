// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { ElasticSanClient } from "@azure/arm-elasticsan";
import { DefaultAzureCredential } from "@azure/identity";

/**
 * This sample demonstrates how to create a Volume Snapshot.
 *
 * @summary create a Volume Snapshot.
 * x-ms-original-file: 2024-07-01-preview/VolumeSnapshots_Create_MaximumSet_Gen.json
 */
async function volumeSnapshotsCreateMaximumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  await client.snapshots.create(
    "resourcegroupname",
    "elasticsanname",
    "volumegroupname",
    "snapshotname",
  );
}

/**
 * This sample demonstrates how to create a Volume Snapshot.
 *
 * @summary create a Volume Snapshot.
 * x-ms-original-file: 2024-07-01-preview/VolumeSnapshots_Create_MinimumSet_Gen.json
 */
async function volumeSnapshotsCreateMinimumSetGen(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const subscriptionId = "subscriptionid";
  const client = new ElasticSanClient(credential, subscriptionId);
  await client.snapshots.create(
    "resourcegroupname",
    "elasticsanname",
    "volumegroupname",
    "snapshotname",
  );
}

async function main(): Promise<void> {
  await volumeSnapshotsCreateMaximumSetGen();
  await volumeSnapshotsCreateMinimumSetGen();
}

main().catch(console.error);
