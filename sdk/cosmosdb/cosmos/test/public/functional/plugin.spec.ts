// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
/* eslint-disable no-unused-expressions */
import type { CosmosClientOptions } from "../../../src";
import { CosmosClient } from "../../../src";
import type { RequestContext } from "../../../src";
import type { Plugin, Next, PluginConfig } from "../../../src";

import * as assert from "assert";
import type { DiagnosticNodeInternal } from "../../../src/diagnostics/DiagnosticNodeInternal";
import { expect } from "chai";
import { getEmptyCosmosDiagnostics } from "../../../src/utils/diagnostics";

describe("Plugin", function () {
  it("should handle all requests", async function () {
    const successResponse = {
      headers: {},
      code: 200,
      result: {
        message: "yay",
      },
      diagnostics: getEmptyCosmosDiagnostics(),
    };
    let requestCount = 0;
    const FAILCOUNT = 2;
    const sometimesThrow: Plugin<any> = async (
      context: RequestContext,
      diagNode: DiagnosticNodeInternal,
    ) => {
      expect(diagNode, "DiagnosticsNode should not be undefined or null").to.exist;
      requestCount++;
      if (context.path.includes("dbs") && requestCount <= FAILCOUNT) {
        throw {
          code: "ECONNRESET",
        };
      }
      return successResponse;
    };

    const options: CosmosClientOptions = {
      endpoint: "https://faaaaaaaaaaaaake.com",
      key: "THIS IS A FAKE KEY",
    };

    const plugins: PluginConfig[] = [
      {
        on: "request",
        plugin: sometimesThrow,
      },
    ];

    const client = new CosmosClient({ ...options, plugins } as any);
    const response = await client.database("foo").read();
    assert.equal(requestCount, FAILCOUNT + 1); // Get Database Account + FAILED GET Database + Get Database
    assert.notEqual(response, undefined);
    assert.equal(response.statusCode, successResponse.code);
    assert.deepEqual(response.resource, successResponse.result);
    client.dispose();
  });

  it("should handle all operations", async function () {
    const successResponse = {
      headers: {},
      code: 200,
      result: {
        message: "yay",
      },
      diagnostics: getEmptyCosmosDiagnostics(),
    };
    let requestCount = 0;
    const alwaysSucceed: Plugin<any> = async () => {
      requestCount++;
      return successResponse;
    };
    const alwaysThrow: Plugin<any> = async () => {
      throw new Error("I always throw!");
    };

    const options: CosmosClientOptions = {
      endpoint: "https://faaaaaaaaaaaaake.com",
      key: "THIS IS A FAKE KEY",
    };

    const plugins: PluginConfig[] = [
      {
        on: "request",
        plugin: alwaysThrow, // I'll never be called since operation will always succeed.
      },
      {
        on: "operation",
        plugin: alwaysSucceed,
      },
    ];

    const client = new CosmosClient({ ...options, plugins } as any);
    const response = await client.database("foo").read();
    assert.equal(requestCount, 2); // Get Database Account + Get Database
    assert.notEqual(response, undefined);
    assert.equal(response.statusCode, successResponse.code);
    assert.deepEqual(response.resource, successResponse.result);
    client.dispose();
  });

  it("should allow next to be called", async function () {
    const successResponse = {
      headers: {},
      code: 200,
      result: {
        message: "yay",
      },
      diagnostics: getEmptyCosmosDiagnostics(),
    };
    let innerRequestCount = 0;
    const alwaysSucceed: Plugin<any> = async () => {
      innerRequestCount++;
      return successResponse;
    };

    let requestCount = 0;
    let responseCount = 0;
    const counts: Plugin<any> = async (context: RequestContext, diagNode, next: Next<any>) => {
      expect(diagNode, "DiagnosticsNode should not be undefined or null").to.exist;
      requestCount++;
      const response = await next(context);
      responseCount++;
      return response;
    };

    const options: CosmosClientOptions = {
      endpoint: "https://faaaaaaaaaaaaake.com",
      key: "THIS IS A FAKE KEY",
    };

    const plugins: PluginConfig[] = [
      {
        on: "operation",
        plugin: counts, // I'll never be called since operation will always succeed.
      },
      {
        on: "operation",
        plugin: alwaysSucceed,
      },
    ];

    const client = new CosmosClient({ ...options, plugins } as any);
    const response = await client.database("foo").read();
    assert.equal(requestCount, 2); // Get Database Account + Get Database
    assert.equal(responseCount, 2); // Get Database Account + Get Database
    assert.equal(innerRequestCount, 2); // Get Database Account + Get Database
    assert.notEqual(response, undefined);
    assert.equal(response.statusCode, successResponse.code);
    assert.deepEqual(response.resource, successResponse.result);
    client.dispose();
  });
});
