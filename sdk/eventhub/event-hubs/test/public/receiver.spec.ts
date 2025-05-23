// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  EventData,
  EventHubConsumerClient,
  EventHubProducerClient,
  ReceivedEventData,
  Subscription,
} from "../../src/index.js";
import { earliestEventPosition, latestEventPosition } from "../../src/index.js";
import debugModule from "debug";
import { should } from "../utils/chai.js";
import "../utils/chai.js";
import { describe, it, afterEach, beforeEach } from "vitest";
import { createConsumer, createProducer } from "../utils/clients.js";

const debug = debugModule("azure:event-hubs:receiver-spec");

describe("EventHubConsumerClient", () => {
  let producerClient: EventHubProducerClient;
  let consumerClient: EventHubConsumerClient;
  let partitionIds: string[];

  beforeEach(async () => {
    producerClient = createProducer().producer;
    consumerClient = createConsumer().consumer;
    partitionIds = await producerClient.getPartitionIds({});
  });

  afterEach(async () => {
    await producerClient.close();
    await consumerClient.close();
  });

  describe("subscribe() with partitionId 0 as number", () => {
    it("should not throw an error", async () => {
      let subscription: Subscription | undefined;
      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          // @ts-expect-error Testing the value 0 can be provided as a number for JS users.
          0,
          {
            processEvents: async () => {
              resolve();
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: latestEventPosition,
            maxWaitTimeInSeconds: 0, // Set timeout of 0 to resolve the promise ASAP
          },
        );
      });
      await subscription!.close();
    });
  });

  describe("subscribe() with EventPosition specified as", () => {
    let partitionId: string;
    let eventSentBeforeSubscribe: EventData;
    let eventsSentAfterSubscribe: EventData[];

    beforeEach(async () => {
      partitionId = partitionIds[0];

      eventSentBeforeSubscribe = {
        body: "Hello awesome world " + Math.random(),
      };
      await producerClient.sendBatch([eventSentBeforeSubscribe], { partitionId });

      eventsSentAfterSubscribe = [];
      for (let i = 0; i < 5; i++) {
        eventsSentAfterSubscribe.push({
          body: "Hello awesome world " + Math.random(),
          properties: {
            stamp: Math.random(),
          },
        });
      }
    });

    it("'from end of stream' should receive messages correctly", async () => {
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 0, "Received events when none were sent yet.");
                await producerClient.sendBatch(eventsSentAfterSubscribe, { partitionId });
                return;
              }
              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: latestEventPosition,
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      if (eventsReceived.find((event) => event.body === eventSentBeforeSubscribe.body)) {
        should.fail("Received event sent before subscribe call with latestEventPosition.");
      }

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );
      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });

    it("'after a particular sequence number' should receive messages correctly", async () => {
      const partitionInfo = await consumerClient.getPartitionProperties(partitionId);
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 0, "Received events when none were sent yet.");
                await producerClient.sendBatch(eventsSentAfterSubscribe, { partitionId });
                return;
              }
              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: { sequenceNumber: partitionInfo.lastEnqueuedSequenceNumber },
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      if (eventsReceived.find((event) => event.body === eventSentBeforeSubscribe.body)) {
        should.fail("Received event sent before subscribe call with last sequence number.");
      }

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );
      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });

    it("'after a particular sequence number' with isInclusive should receive messages correctly", async () => {
      const partitionInfo = await consumerClient.getPartitionProperties(partitionId);
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 1, "Expected 1 event sent right before subscribe call.");
                should.equal(
                  data[0].body,
                  eventSentBeforeSubscribe.body,
                  "Should have received only the 1 event sent right before subscribe call.",
                );

                await producerClient.sendBatch(eventsSentAfterSubscribe, { partitionId });
                return;
              }

              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: {
              sequenceNumber: partitionInfo.lastEnqueuedSequenceNumber,
              isInclusive: true,
            },
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );

      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });

    it("'after a particular offset' should receive messages correctly", async () => {
      const partitionInfo = await consumerClient.getPartitionProperties(partitionId);
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 0, "Received events when none were sent yet.");
                await producerClient.sendBatch(eventsSentAfterSubscribe, { partitionId });
                return;
              }
              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: { offset: partitionInfo.lastEnqueuedOffset },
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      if (eventsReceived.find((event) => event.body === eventSentBeforeSubscribe.body)) {
        should.fail("Received event sent before subscribe call with last offset.");
      }

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );
      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });

    it("'after a particular offset' with isInclusive should receive messages correctly", async () => {
      const partitionInfo = await consumerClient.getPartitionProperties(partitionId);
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 1, "Expected 1 event sent right before subscribe call.");
                should.equal(
                  data[0].body,
                  eventSentBeforeSubscribe.body,
                  "Should have received only the 1 event sent right before subscribe call.",
                );

                await producerClient.sendBatch(eventsSentAfterSubscribe, {
                  partitionId,
                });
                return;
              }

              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: {
              offset: partitionInfo.lastEnqueuedOffset,
              isInclusive: true,
            },
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );

      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });

    it("'after a particular enqueued time' should receive messages correctly", async () => {
      const partitionInfo = await consumerClient.getPartitionProperties(partitionId);
      let subscription: Subscription | undefined;
      let processEventsCalled = false;
      const eventsReceived: ReceivedEventData[] = [];

      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data) => {
              if (!processEventsCalled) {
                processEventsCalled = true;
                should.equal(data.length, 0, "Received events when none were sent yet.");
                await producerClient.sendBatch(eventsSentAfterSubscribe, {
                  partitionId,
                });
                return;
              }

              eventsReceived.push(...data);
              if (eventsReceived.length === eventsSentAfterSubscribe.length) {
                resolve();
              }
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: { enqueuedOn: partitionInfo.lastEnqueuedOnUtc },
            maxWaitTimeInSeconds: 30,
          },
        );
      });
      await subscription!.close();

      if (eventsReceived.find((event) => event.body === eventSentBeforeSubscribe.body)) {
        should.fail("Received event sent before subscribe call with last offset.");
      }

      should.equal(
        eventsReceived.length,
        eventsSentAfterSubscribe.length,
        "Not received the same number of events that were sent.",
      );
      for (let i = 0; i < eventsSentAfterSubscribe.length; i++) {
        eventsReceived[i].body.should.equal(eventsSentAfterSubscribe[i].body);
        eventsReceived[i].properties!.stamp.should.equal(
          eventsSentAfterSubscribe[i].properties!.stamp,
        );
      }
    });
  });

  describe("subscribe() with trackLastEnqueuedEventProperties", () => {
    it("should have lastEnqueuedEventProperties populated", async () => {
      const partitionId = partitionIds[0];

      const eventData = { body: "Hello awesome world " + Math.random() };
      await producerClient.sendBatch([eventData], { partitionId });
      debug("sent: ", eventData);

      const pInfo = await consumerClient.getPartitionProperties(partitionId);
      debug("partition info: ", pInfo);

      let subscription: Subscription | undefined;
      await new Promise<void>((resolve, reject) => {
        subscription = consumerClient.subscribe(
          partitionId,
          {
            processEvents: async (data, context) => {
              data.length.should.equal(1);
              should.exist(context.lastEnqueuedEventProperties);
              context.lastEnqueuedEventProperties!.offset!.should.equal(pInfo.lastEnqueuedOffset);
              context.lastEnqueuedEventProperties!.sequenceNumber!.should.equal(
                pInfo.lastEnqueuedSequenceNumber,
              );
              context
                .lastEnqueuedEventProperties!.enqueuedOn!.getTime()
                .should.equal(pInfo.lastEnqueuedOnUtc.getTime());
              context
                .lastEnqueuedEventProperties!.retrievedOn!.getTime()
                .should.be.greaterThan(Date.now() - 60000);

              resolve();
            },
            processError: async (err) => {
              reject(err);
            },
          },
          {
            startPosition: earliestEventPosition,
            maxBatchSize: 1,
            trackLastEnqueuedEventProperties: true,
          },
        );
      });
      await subscription!.close();
    });
  });
});
