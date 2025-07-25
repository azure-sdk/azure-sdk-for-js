// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import assert from "node:assert";
import type { Expectation } from "./types.js";
import type {
  MetricsData,
  MonitorBase,
  RequestData,
  TelemetryItem as Envelope,
  MonitorDomain,
} from "./models/index.js";
import { KnownContextTagKeys } from "./models/index.js";
import { TelemetryItem as EnvelopeMapper } from "./models/mappers.js";

export const assertData = (actual: MonitorBase, expected: MonitorBase): void => {
  assert.strictEqual(actual.baseType, expected.baseType);

  assert.ok(actual.baseData, "Actual base data must be defined.");
  assert.ok(expected.baseData, "Expected base data must be defined.");
  for (const [key, value] of Object.entries(expected.baseData)) {
    const serializedKey = (EnvelopeMapper.type as any).modelProperties![key]?.serializedName ?? key;
    if (typeof value === "object") {
      for (const [nestedKey, nestedValue] of Object.entries(value)) {
        assert.deepStrictEqual(
          expected.baseData[serializedKey][nestedKey],
          nestedValue,
          `baseData.${serializedKey}.${nestedKey} should be equal\nActual: ${JSON.stringify(actual.baseData[serializedKey][nestedKey])}\nExpected: ${JSON.stringify(nestedValue)}`,
        );
      }
    } else {
      assert.deepStrictEqual(
        actual.baseData[serializedKey],
        value,
        `baseData.${serializedKey} should be equal\nActual: ${JSON.stringify(actual.baseData[serializedKey])}\nExpected: ${JSON.stringify(value)}`,
      );
    }
  }
};

export const assertTrace = (actual: Envelope[], expectation: Expectation): void => {
  let envelope: any = null;
  if (expectation.data!.baseData!.name) {
    envelope = actual.filter((e) => {
      return (
        (e.data!.baseData as RequestData).name === (expectation.data!.baseData as RequestData).name
      );
    });
  } else {
    envelope = actual.filter((e) => {
      return e.name === expectation.name;
    });
  }
  if (envelope.length !== 1) {
    assert.ok(false, `assertTrace: could not find exported envelope: ${expectation.name}`);
  }
  const operationId = envelope[0].tags![KnownContextTagKeys.AiOperationId];

  for (const child of expectation.children) {
    let childEnvelopes: any = null;
    const spanId = (envelope[0].data!.baseData as RequestData).id;
    if (child.data!.baseData!.name) {
      childEnvelopes = actual.filter((e) => {
        return (
          e.tags![KnownContextTagKeys.AiOperationId] === operationId &&
          e.tags![KnownContextTagKeys.AiOperationParentId] === spanId &&
          (e.data!.baseData as RequestData).name === (child.data!.baseData as RequestData).name
        );
      });
    } else {
      childEnvelopes = actual.filter((e) => {
        return (
          e.tags![KnownContextTagKeys.AiOperationId] === operationId &&
          e.tags![KnownContextTagKeys.AiOperationParentId] === spanId &&
          e.name === child.name
        );
      });
    }
    assert.strictEqual(
      childEnvelopes.length,
      1,
      `Envelope ${(envelope[0].data!.baseData as RequestData).name} found ${childEnvelopes.length}`,
    );
  }
};

export const assertCount = (actual: Envelope[], expectations: Expectation[]): void => {
  const countExpectations = (expectation: Expectation[]): number => {
    return (
      expectation.length + expectation.reduce((sum, e) => sum + countExpectations(e.children), 0)
    );
  };
  const expectationsLength = countExpectations(expectations);
  assert.strictEqual(actual.length, expectationsLength);
};

export const assertTraceExpectation = (actual: Envelope[], expectations: Expectation[]): void => {
  for (const expectation of expectations) {
    let envelope: any = null;

    if (expectation.data?.baseData?.name) {
      envelope = actual.filter((e) => {
        return (
          (e.data!.baseData as MonitorDomain).name ===
          (expectation.data!.baseData as MonitorDomain).name
        );
      });
    } else {
      envelope = actual.filter((e) => {
        return e.name === expectation.name;
      });
    }
    if (envelope.length !== 1) {
      assert.ok(
        false,
        `assertExpectation: could not find exported envelope: ${
          (expectation.data?.baseData as MonitorDomain).name
        }`,
      );
    }

    for (const [key, value] of Object.entries(expectation) as [keyof Expectation, unknown][]) {
      const serializedKey =
        (EnvelopeMapper.type as any).modelProperties![key]?.serializedName ?? undefined;
      switch (key) {
        case "children":
          if (expectation.children.length > 0) {
            assertTrace(actual, expectation);
            assertTraceExpectation(actual, expectation.children);
          }
          break;
        case "data":
          if (envelope[0].data) {
            assertData(envelope[0].data, value as MonitorBase);
          }
          break;
        default:
          assert.ok(serializedKey, `Serialized key for ${key}`);
          assert.strictEqual(
            envelope[0][serializedKey as keyof Envelope], // as keyof Serialized(Envelope)
            value,
            `envelope.${serializedKey} should be equal\nActual: ${envelope[0][key]}\nExpected: ${value}`,
          );
      }
    }
  }
};

export const assertMetricExpectation = (actual: Envelope[], expectations: Expectation[]): void => {
  for (const expectation of expectations) {
    let envelope: any = null;
    if (expectation.data!.baseData!.metrics && expectation.data!.baseData!.metrics.length > 0) {
      envelope = actual.filter((e) => {
        return (
          (e.data!.baseData as MetricsData).metrics[0].name ===
          (expectation.data!.baseData as MetricsData).metrics[0].name
        );
      });
    } else {
      envelope = actual.filter((e) => {
        return e.name === expectation.name;
      });
    }
    if (envelope.length !== 1) {
      assert.ok(
        false,
        `assertExpectation: Envelope ${
          (expectation.data?.baseData as MetricsData).metrics[0].name
        } found ${envelope.length} times.`,
      );
    }

    for (const [key, value] of Object.entries(expectation) as [keyof Expectation, unknown][]) {
      const serializedKey =
        (EnvelopeMapper.type as any).modelProperties![key]?.serializedName ?? undefined;
      switch (key) {
        case "data":
          if (envelope[0].data) {
            assertData(envelope[0].data, value as MonitorBase);
          }
          break;
        case "children":
          // Do not check for children
          break;
        default:
          assert.ok(serializedKey, `Serialized key for ${key}`);
          assert.strictEqual(
            envelope[0][serializedKey as keyof Envelope], // as keyof Serialized(Envelope)
            value,
            `envelope.${serializedKey} should be equal\nActual: ${envelope[0][key]}\nExpected: ${value}`,
          );
      }
    }
  }
};

export const assertLogExpectation = (actual: Envelope[], expectations: Expectation[]): void => {
  for (const expectation of expectations) {
    let envelope: any = null;
    if (expectation.data!.baseData!.name) {
      envelope = actual.filter((e) => {
        return (e.data!.baseData as any).name === (expectation.data!.baseData as any).name;
      });
    } else {
      envelope = actual.filter((e) => {
        return e.name === expectation.name;
      });
    }
    if (envelope.length !== 1) {
      assert.ok(
        false,
        `assertExpectation: could not find exported envelope: ${
          (expectation.data?.baseData as any).name
        }`,
      );
    }

    for (const [key, value] of Object.entries(expectation) as [keyof Expectation, unknown][]) {
      const serializedKey =
        (EnvelopeMapper.type as any).modelProperties![key]?.serializedName ?? undefined;
      switch (key) {
        case "data":
          if (envelope[0].data) {
            assertData(envelope[0].data, value as MonitorBase);
          }
          break;
        case "children":
          // Do not check for children
          break;
        default:
          assert.ok(serializedKey, `Serialized key for ${key}`);
          assert.strictEqual(
            envelope[0][serializedKey as keyof Envelope], // as keyof Serialized(Envelope)
            value,
            `envelope.${serializedKey} should be equal\nActual: ${envelope[0][key]}\nExpected: ${value}`,
          );
      }
    }
  }
};
