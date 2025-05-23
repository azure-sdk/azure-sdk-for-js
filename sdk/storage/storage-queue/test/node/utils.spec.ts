// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import { extractConnectionStringParts } from "../../src/utils/utils.common.js";
import { Recorder } from "@azure-tools/test-recorder";
import { recorderEnvSetup } from "../utils/index.js";
import { describe, it, assert, beforeEach, afterEach } from "vitest";

describe("Utility Helpers Node.js only", () => {
  let recorder: Recorder;
  const protocol = "https";
  const endpointSuffix = "core.windows.net";
  const accountName = "myaccount";
  const accountKey = "myAccountKey";
  const queueEndpoint = `${protocol}://${accountName}.queue.${endpointSuffix}`;

  function verifyConnectionString(connectionString: string) {
    const connectionStringParts = extractConnectionStringParts(connectionString);
    assert.equal(
      "AccountConnString",
      connectionStringParts.kind,
      "extractConnectionStringParts().kind is different than expected.",
    );
    assert.equal(
      queueEndpoint,
      connectionStringParts.url,
      "extractConnectionStringParts().url is different than expected.",
    );
    assert.equal(
      accountName,
      connectionStringParts.accountName,
      "extractConnectionStringParts().accountName is different than expected.",
    );
  }

  beforeEach(async (ctx) => {
    recorder = new Recorder(ctx);
    await recorder.start(recorderEnvSetup);
  });

  afterEach(async () => {
    await recorder.stop();
  });

  it("extractConnectionStringParts throws error when passed an invalid protocol in the connection string", async () => {
    try {
      extractConnectionStringParts(
        "DefaultEndpointsProtocol=a;AccountName=b;AccountKey=c;EndpointSuffix=d",
      );
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.ok(error);
    }
  });

  it("extractConnectionStringParts throws error when passed an invalid connection string with typo", async () => {
    try {
      extractConnectionStringParts(
        // Typo in the attributes
        "DefaultEndpointsProtocol=https;Name=b;AccountKey=c;EndpointSuffix=d",
      );

      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Invalid AccountName in the provided Connection String",
        error.message,
        "Connection string error message is different than expected",
      );
    }
  });

  it("extractConnectionStringParts throws error with empty EndpointSuffix in the connection string", async () => {
    try {
      extractConnectionStringParts(
        "DefaultEndpointsProtocol=https;AccountName=b;AccountKey=cdefg;EndpointSuffix=",
      );
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Invalid EndpointSuffix in the provided Connection String",
        error.message,
        "Connection string error message is different than expected",
      );
    }
  });

  it("extractConnectionStringParts throws error with empty AccountKey in the connection string", async () => {
    try {
      extractConnectionStringParts(
        "DefaultEndpointsProtocol=https;AccountName=b;AccountKey=;EndpointSuffix=d",
      );
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Invalid AccountKey in the provided Connection String",
        error.message,
        "Connection string error message is different than expected",
      );
    }
  });

  it("extractConnectionStringParts throws error with empty AccountName in the connection string", async () => {
    try {
      extractConnectionStringParts(
        "DefaultEndpointsProtocol=https;AccountName=;AccountKey=c;EndpointSuffix=d",
      );
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Invalid AccountName in the provided Connection String",
        error.message,
        "Connection string error message is different than expected",
      );
    }
  });

  it("extractConnectionStringParts throws error with empty DefaultEndpointsProtocol in the connection string", async () => {
    try {
      extractConnectionStringParts(
        "DefaultEndpointsProtocol=;AccountName=b;AccountKey=c;EndpointSuffix=d",
      );
      assert.fail("Expecting an thrown error but didn't get one.");
    } catch (error: any) {
      assert.equal(
        "Invalid DefaultEndpointsProtocol in the provided Connection String. Expecting 'https' or 'http'",
        error.message,
        "Connection string error message is different than expected",
      );
    }
  });

  it("extractConnectionStringParts parses connection string with complete service endpoint for each service", async () => {
    verifyConnectionString(
      `DefaultEndpointsProtocol=${protocol};
          BlobEndpoint=myBlobEndpoint;
          FileEndpoint=myFileEndpoint;
          QueueEndpoint=${queueEndpoint};
          TableEndpoint=myTableEndpoint;
          AccountName=${accountName};
          AccountKey=${accountKey}`,
    );
  });

  it("extractConnectionStringParts parses connection string with an explicit endpoint", async () => {
    verifyConnectionString(
      `DefaultEndpointsProtocol=${protocol};
        QueueEndpoint=${queueEndpoint};
        AccountName=${accountName};
        AccountKey=${accountKey}`,
    );
  });

  it("extractConnectionStringParts parses connection string with an endpoint suffix", async () => {
    verifyConnectionString(
      `DefaultEndpointsProtocol=${protocol};
        AccountName=${accountName};
        AccountKey=${accountKey};
        EndpointSuffix=${endpointSuffix};`,
    );
  });
});
