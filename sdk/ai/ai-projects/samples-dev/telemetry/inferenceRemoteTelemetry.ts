// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/**
 * @summary This sample demonstrates how to enable remote telemetry for inference operations using AIProjectClient.
 */

import { trace, context } from "@opentelemetry/api";
import { AzureMonitorOpenTelemetryOptions, useAzureMonitor } from "@azure/monitor-opentelemetry";
import { AIProjectClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";
import "dotenv/config";

const endpoint = process.env["AZURE_AI_PROJECT_ENDPOINT_STRING"] || "<project endpoint string>";
const deploymentName = process.env["DEPLOYMENT_NAME"] || "<deployment name>";

const options: AzureMonitorOpenTelemetryOptions = {
  azureMonitorExporterOptions: {
    connectionString: process.env["TELEMETRY_CONNECTION_STRING"] || "<your connection string>",
  },
};
useAzureMonitor(options);

export async function main(): Promise<void> {
  const tracer = trace.getTracer("inference-sample", "0.1.0");

  const project = new AIProjectClient(endpoint, new DefaultAzureCredential());
  const client = project.inference.chatCompletions({
    apiVersion: "2024-05-01-preview",
  });
  const response = await tracer.startActiveSpan("chatCompletions", async (span) => {
    const res = await client.post({
      body: {
        model: deploymentName,
        messages: [
          {
            role: "system",
            content: "You are a helpful assistant. You will talk like a pirate.",
          }, // System role not supported for some models
          { role: "user", content: "How many feet are in a mile?" },
        ],
      },
      tracingOptions: {
        tracingContext: context.active(),
      },
    });
    span.end();
    return res;
  });

  console.log("response = ", JSON.stringify(response, null, 2));
}

main().catch((err) => {
  console.error("Error running sample:", err);
});
