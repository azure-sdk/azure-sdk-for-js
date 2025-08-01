# Troubleshooting Azure Monitor Query Logs client library issues

This troubleshooting guide contains instructions to diagnose frequently encountered issues while using the Azure Monitor Query Logs client library for JavaScript.

## Table of contents

- [General troubleshooting](#general-troubleshooting)
  - [Enable client logging](#enable-client-logging)
  - [Authentication issues with logs query requests](#authentication-errors)
- [Logs query](#logs-query)
  - [Insufficient access error](#insufficient-access-error-for-logs-query)
  - [Invalid Kusto query](#invalid-kusto-query)
  - [Empty log query results](#empty-log-query-results)
  - [Server timeouts when executing logs query request](#server-timeouts-when-executing-logs-query-request)
  - [Partially successful logs query requests](#partially-successful-logs-query-requests)

## General troubleshooting

### Enable client logging

To troubleshoot issues with Azure Monitor Query library, it's important to first enable logging to monitor the behavior of the application. The errors and warnings in the logs generally provide useful insights into what went wrong and sometimes include corrective actions to fix issues. The Azure SDK client libraries for JavaScript allow you to enable logging with one of the following approaches:

- Through the `AZURE_LOG_LEVEL` environment variable
- At runtime by calling `setLogLevel` in the `@azure/logger` package

#### Logging via environment variable

To see a log of HTTP requests and responses:

1.  Set the `AZURE_LOG_LEVEL` environment variable to `info` in your _.env_ file:

```text
AZURE_LOG_LEVEL = info
```

2. Add the following code to the app:

```ts snippet:DotEnvSample
import { config } from "dotenv";

config({ path: ".env" });
```

#### Logging using setLogLevel

Alternatively, logging can be enabled at runtime by calling `setLogLevel` in the `@azure/logger`:

```ts snippet:SetLogLevel
import { setLogLevel } from "@azure/logger";

setLogLevel("info");
```

**NOTE**: When logging the body of request and response, ensure they don't contain confidential information. We already sanitize headers like `Authorization` that contain secrets.

For detailed instructions on how to enable logs, see the [@azure/logger package docs](https://github.com/Azure/azure-sdk-for-js/tree/main/sdk/core/logger).

### Authentication errors

The Azure Monitor Query Logs library supports Azure Active Directory authentication. The `logsQueryClient` has methods to set the credential. To provide a valid credential, you can use the `@azure/identity` dependency. For more details on getting started, see the [README](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/monitor-query-logs/README.md#create-the-client) of Azure Monitor Query Logs library. You can also refer to the [Azure Identity documentation](hhttps://learn.microsoft.com/javascript/api/overview/azure/identity-readme?view=azure-node-latest) for more details on the various credential types supported in `@azure/identity`.

For more help on troubleshooting authentication errors, see the Azure Identity client library [troubleshooting guide](https://aka.ms/azsdk/js/identity/troubleshoot).

## Logs query

### Insufficient access error for logs query

If you get an HTTP error with status code 403 (Forbidden), the provided credentials lack sufficient permissions to query the workspace.

```json
{
  "name": "RestError",
  "code": "InsufficientAccessError",
  "statusCode": 403,
  "request": {
    "url": "https://api.loganalytics.io/v1/workspaces/<workspace_id>/query",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
      "prefer": "REDACTED",
      "accept-encoding": "gzip,deflate",
      "user-agent": "azsdk-js-monitor-query-logs/2.0.0 azsdk-js-monitor-log-query/2.0.0 core-rest-pipeline/1.7.0 Node/v14.16.1 OS/(x64-Windows_NT-10.0.19044)",
      "x-ms-client-request-id": "56ee42f9-56f3-41ec-866c-bdfa7aa708a3",
      "authorization": "REDACTED",
      "content-length": "79"
    },
    "method": "POST",
    "timeout": 0,
    "disableKeepAlive": false,
    "streamResponseStatusCodes": {},
    "withCredentials": false,
    "requestId": "56ee42f9-56f3-41ec-866c-bdfa7aa708a3",
    "allowInsecureConnection": false,
    "enableBrowserStreams": false
  },
  "details": {
    "error": {
      "code": "InsufficientAccessError",
      "message": "The provided credentials have insufficient access to perform the requested operation",
      "correlationId": "1e1ad3fe-88ab-43a4-af9b-15e75b67d8a9"
    }
  },
  "message": "The provided credentials have insufficient access to perform the requested operation"
}
```

1. Check that the application or user making the request has sufficient permissions:
   - You can refer to this document to [manage access to workspaces](https://learn.microsoft.com/azure/azure-monitor/logs/manage-access#manage-access-using-workspace-permissions)
2. If the user or application is granted sufficient privileges to query the workspace, ensure you're authenticating as that user/application. If you're authenticating using the [DefaultAzureCredential](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/identity/identity/README.md#authenticating-with-the-defaultazurecredential), check the logs to verify the credential used is the one you expected. To enable logging, see the [Enable client logging](#enable-client-logging) section.

### Invalid Kusto query

If you get an HTTP error with status code 400 (Bad Request), you may have an error in your Kusto query. You'll see an error message similar to the one below.

```json
{
  "name": "RestError",
  "code": "BadArgumentError",
  "statusCode": 400,
  "request": {
    "url": "https://api.loganalytics.io/v1/workspaces/<workspace_id>/query",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
      "prefer": "REDACTED",
      "accept-encoding": "gzip,deflate",
      "user-agent": "azsdk-js-monitor-query-logs/2.0.0 azsdk-js-monitor-log-query/2.0.0 core-rest-pipeline/1.7.0 Node/v14.16.1 OS/(x64-Windows_NT-10.0.19044)",
      "x-ms-client-request-id": "6b3ee80a-c21d-4ecf-ba62-59c6ab970c83",
      "authorization": "REDACTED",
      "content-length": "157"
    },
    "method": "POST",
    "timeout": 0,
    "disableKeepAlive": false,
    "streamResponseStatusCodes": {},
    "withCredentials": false,
    "requestId": "6b3ee80a-c21d-4ecf-ba62-59c6ab970c83",
    "allowInsecureConnection": false,
    "enableBrowserStreams": false
  },
  "details": {
    "error": {
      "code": "BadArgumentError",
      "message": "The request had some invalid properties",
      "innerError": {
        "code": "SyntaxError",
        "message": "A recognition error occurred in the query.",
        "innerError": {
          "code": "SYN0002",
          "message": "Query could not be parsed at 'string' on line [1,4]",
          "line": 1,
          "pos": 4,
          "token": "string"
        }
      },
      "correlationId": "611dc354-bb4e-442f-955c-7b9469ca7f84"
    }
  },
  "message": "The request had some invalid properties"
}
```

The error message may include the line number and position where the Kusto query has an error (line 2, position 244 in the above example). You may also refer to the [Kusto Query Language](https://learn.microsoft.com/azure/data-explorer/kusto/query) reference docs to learn more about querying logs using KQL.

### Empty log query results

If your Kusto query returns empty no logs, validate the following:

- You have the correct workspace ID
- You're setting the correct time interval for the query. Try expanding the time interval for your query to see if that returns any results.
- If your Kusto query also has a time interval, the query is evaluated for the intersection of the time interval in the query string and the time interval set in the `QueryTimeInterval` parameter provided to the query API. The intersection of these time intervals may not have any logs. To avoid any confusion, it's recommended to remove any time interval in the Kusto query string. Use `QueryTimeInterval` explicitly.

### Server timeouts when executing logs query request

Some complex Kusto queries can take a long time to complete and such queries are aborted by the
service if they run for more than 3 minutes. For such scenarios, the query APIs on `LogsQueryClient`, provide options to
configure the timeout on the server. The server timeout can be extended up to 10 minutes.

You may see an error as follows:

```json
{
  "name": "RestError",
  "code": "GatewayTimeout",
  "statusCode": 504,
  "request": {
    "url": "https://api.loganalytics.io/v1/workspaces/<workspace_id>/query",
    "headers": {
      "content-type": "application/json",
      "accept": "application/json",
      "prefer": "REDACTED",
      "accept-encoding": "gzip,deflate",
      "user-agent": "azsdk-js-monitor-query-logs/2.0.0 azsdk-js-monitor-log-query/2.0.0 core-rest-pipeline/1.7.0 Node/v14.16.1 OS/(x64-Windows_NT-10.0.19044)",
      "x-ms-client-request-id": "b3269277-18d7-4971-9eb8-4a2259bc8576",
      "authorization": "REDACTED",
      "content-length": "76"
    },
    "method": "POST",
    "timeout": 0,
    "disableKeepAlive": false,
    "streamResponseStatusCodes": {},
    "withCredentials": false,
    "requestId": "b3269277-18d7-4971-9eb8-4a2259bc8576",
    "allowInsecureConnection": false,
    "enableBrowserStreams": false
  },
  "details": {
    "error": {
      "code": "GatewayTimeout",
      "message": "Gateway timeout",
      "innerError": {
        "code": "GatewayTimeout",
        "message": "Kusto query timed out"
      },
      "correlationId": "2572d63e-99ae-4d3c-92d0-032ba7651ed3"
    }
  },
  "message": "Gateway timeout"
}
```

The following code shows a sample of setting the server timeout to 10 minutes. By setting this server timeout, the Azure Monitor Query library automatically extends the client timeout to wait for 10 minutes for the server to respond. You don't need to configure your HTTP client to extend the response timeout, as shown in the previous section.

```ts snippet:TroubleShootingProcessServerTimeout
import { DefaultAzureCredential } from "@azure/identity";
import { LogsQueryClient, Durations } from "@azure/monitor-query-logs";

const monitorWorkspaceId = "<workspace_id>";
const kustoQuery = "AzureActivity | top 10 by TimeGenerated";

const credential = new DefaultAzureCredential();
const logsQueryClient = new LogsQueryClient(credential);

const result = await logsQueryClient.queryWorkspace(
  monitorWorkspaceId,
  kustoQuery,
  { duration: Durations.oneHour },
  { serverTimeoutInSeconds: 600 },
);
```

### Partially successful logs query requests

By default, if the execution of a Kusto query resulted in a partially successful response, the Azure Monitor Query client library will return the result of type `LogsQueryPartialResult` with the `status` field of `result` object set to `PartialFailure` to indicate to the user that the query was not fully successful. In case of multiple queries, when the results from all queries aren't successful, the `status` field of `result` object may be set to `Failure`.

In the case of single query, there can be only two possibilities for the value of `status` field of `result` object: `Success` or `PartialFailure`. You can access the details of the partially successful results with the following code snippet:

```ts snippet:TroubleShootingProcessPartialResult
import { LogsQueryClient, Durations, LogsQueryResultStatus } from "@azure/monitor-query-logs";
import { DefaultAzureCredential } from "@azure/identity";

const azureLogAnalyticsWorkspaceId = "<workspace_id>";
const kustoQuery = "AzureActivity | top 10 by TimeGenerated";

const logsQueryClient = new LogsQueryClient(new DefaultAzureCredential());
const result = await logsQueryClient.queryWorkspace(azureLogAnalyticsWorkspaceId, kustoQuery, {
  duration: Durations.twentyFourHours,
});

if (result.status === LogsQueryResultStatus.Success) {
  const tablesFromResult = result.tables;

  if (tablesFromResult.length === 0) {
    console.log(`No results for query '${kustoQuery}'`);
    return;
  }
  console.log(`This query has returned table(s) - `);
  processTables(tablesFromResult);
} else {
  console.log(`Error processing the query '${kustoQuery}' - ${result.partialError}`);
  if (result.partialTables.length > 0) {
    console.log(`This query has also returned partial data in the following table(s) - `);
    processTables(result.partialTables);
  }
}
```

For more details on the response hierarchy for single query, see [Handle logs query response](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/monitor-query-logs/README.md#handle-logs-query-response).

In the case of multiple queries, there are three possibilities for the value of `status` field of `result` object: `Success`, `PartialFailure`, or `Failure`. You can access the details of the partially successful results by the following code snippet:

```ts snippet:TroubleShootingProcessBatchResult
import { LogsQueryResultStatus } from "@azure/monitor-query-logs";

async function processBatchResult(result, queriesBatch) {
  let i = 0;
  for (const response of result) {
    console.log(`Results for query with query: ${queriesBatch[i]}`);
    if (response.status === LogsQueryResultStatus.Success) {
      console.log(
        `Printing results from query '${queriesBatch[i].query}' for '${queriesBatch[i].timespan}'`,
      );
      processTables(response.tables);
    } else if (response.status === LogsQueryResultStatus.PartialFailure) {
      console.log(
        `Printing partial results from query '${queriesBatch[i].query}' for '${queriesBatch[i].timespan}'`,
      );
      processTables(response.partialTables);
      console.log(
        ` Query had errors:${response.partialError.message} with code ${response.partialError.code}`,
      );
    } else {
      console.log(`Printing errors from query '${queriesBatch[i].query}'`);
      console.log(` Query had errors:${response.message} with code ${response.code}`);
    }
    // next query
    i++;
  }
}
function processTables(tablesFromResult) {
  for (const table of tablesFromResult) {
    const columnHeaderString = table.columnDescriptors
      .map((column) => `${column.name}(${column.type}) `)
      .join("| ");
    console.log("| " + columnHeaderString);
    for (const row of table.rows) {
      const columnValuesString = row.map((columnValue) => `'${columnValue}' `).join("| ");
      console.log("| " + columnValuesString);
    }
  }
}
```

For more details on the response hierarchy for multiple queries, see [Handle logs batch query response](https://github.com/Azure/azure-sdk-for-js/blob/main/sdk/monitor/monitor-query-logs/README.md#handle-logs-batch-query-response).
