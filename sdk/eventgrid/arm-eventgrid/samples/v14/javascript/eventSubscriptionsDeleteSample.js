/*
 * Copyright (c) Microsoft Corporation.
 * Licensed under the MIT License.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
const { EventGridManagementClient } = require("@azure/arm-eventgrid");
const { DefaultAzureCredential } = require("@azure/identity");
require("dotenv/config");

/**
 * This sample demonstrates how to Delete an existing event subscription.
 *
 * @summary Delete an existing event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/EventSubscriptions_DeleteForCustomTopic.json
 */
async function eventSubscriptionsDeleteForCustomTopic() {
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventGrid/topics/exampletopic1";
  const eventSubscriptionName = "examplesubscription1";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.beginDeleteAndWait(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an existing event subscription.
 *
 * @summary Delete an existing event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/EventSubscriptions_DeleteForResource.json
 */
async function eventSubscriptionsDeleteForResource() {
  const scope =
    "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg/providers/Microsoft.EventHub/namespaces/examplenamespace1";
  const eventSubscriptionName = "examplesubscription10";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.beginDeleteAndWait(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an existing event subscription.
 *
 * @summary Delete an existing event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/EventSubscriptions_DeleteForResourceGroup.json
 */
async function eventSubscriptionsDeleteForResourceGroup() {
  const scope = "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4/resourceGroups/examplerg";
  const eventSubscriptionName = "examplesubscription2";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.beginDeleteAndWait(scope, eventSubscriptionName);
  console.log(result);
}

/**
 * This sample demonstrates how to Delete an existing event subscription.
 *
 * @summary Delete an existing event subscription.
 * x-ms-original-file: specification/eventgrid/resource-manager/Microsoft.EventGrid/stable/2025-02-15/examples/EventSubscriptions_DeleteForSubscription.json
 */
async function eventSubscriptionsDeleteForSubscription() {
  const scope = "subscriptions/5b4b650e-28b9-4790-b3ab-ddbd88d727c4";
  const eventSubscriptionName = "examplesubscription3";
  const credential = new DefaultAzureCredential();
  const client = new EventGridManagementClient(credential);
  const result = await client.eventSubscriptions.beginDeleteAndWait(scope, eventSubscriptionName);
  console.log(result);
}

async function main() {
  await eventSubscriptionsDeleteForCustomTopic();
  await eventSubscriptionsDeleteForResource();
  await eventSubscriptionsDeleteForResourceGroup();
  await eventSubscriptionsDeleteForSubscription();
}

main().catch(console.error);
