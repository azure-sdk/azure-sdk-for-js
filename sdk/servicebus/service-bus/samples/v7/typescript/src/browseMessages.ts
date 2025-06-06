// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * This sample demonstrates how the peekMessages() function can be used to browse a Service Bus message.
 *
 * See https://learn.microsoft.com/azure/service-bus-messaging/message-browsing to learn about message browsing.
 *
 * Setup: Please run "sendMessages" sample before running this to populate the queue/topic
 *
 * @summary Demonstrates how to browse a Service Bus message
 */

import { ServiceBusClient } from "@azure/service-bus";
import { DefaultAzureCredential } from "@azure/identity";

// Load the .env file if it exists
import "dotenv/config";
// Define connection string and related Service Bus entity names here
const fqdn = process.env.SERVICEBUS_FQDN || "<your-servicebus-namespace>.servicebus.windows.net";
const queueName = process.env.QUEUE_NAME || "<queue name>";

export async function main(): Promise<void> {
  const credential = new DefaultAzureCredential();
  const sbClient = new ServiceBusClient(fqdn, credential);

  // If receiving from a subscription you can use the createReceiver(topicName, subscriptionName) overload
  const queueReceiver = sbClient.createReceiver(queueName);

  try {
    // peeking messages does not lock or remove messages from a queue or subscription.
    // For locking and/or removal, look at the `receiveMessagesLoop` or `receiveMessagesStreaming` samples,
    // which cover using a receiver with a `receiveMode`.
    console.log(`Attempting to peek 10 messages at a time`);
    const peekedMessages = await queueReceiver.peekMessages(10);

    console.log(`Got ${peekedMessages.length} messages.`);

    for (let i = 0; i < peekedMessages.length; ++i) {
      console.log(`Peeked message #${i}: ${peekedMessages[i].body}`);
    }

    await queueReceiver.close();
  } finally {
    await sbClient.close();
  }
}

main().catch((err) => {
  console.log("BrowseMessages Sample - Error occurred: ", err);
  process.exit(1);
});
