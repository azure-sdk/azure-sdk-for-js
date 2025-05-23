// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.
import {
  sanitizeHeaders,
  sanitizeURL,
  extractConnectionStringParts,
  isIpEndpointStyle,
} from "../src/utils/utils.common.js";
import { createHttpHeaders } from "@azure/core-rest-pipeline";
import { describe, it, assert } from "vitest";

describe("Utility Helpers", () => {
  const protocol = "https";
  const endpointSuffix = "core.windows.net";
  const accountName = "myaccount";
  const fileEndpoint = `${protocol}://${accountName}.file.${endpointSuffix}`;
  const customDomainFileEndpoint = `${protocol}://customdomain.com`;
  const sharedAccessSignature = "sasToken";

  function verifySASConnectionString(sasConnectionString: string): void {
    const connectionStringParts = extractConnectionStringParts(sasConnectionString);
    assert.equal(
      "SASConnString",
      connectionStringParts.kind,
      "extractConnectionStringParts().kind is different than expected.",
    );
    assert.equal(
      fileEndpoint,
      connectionStringParts.url,
      "extractConnectionStringParts().url is different than expected.",
    );
    assert.equal(
      accountName,
      connectionStringParts.accountName,
      "extractConnectionStringParts().accountName is different than expected.",
    );
  }

  it("sanitizeURL redacts SAS token", () => {
    const url = "https://some.url.com/container/blob?sig=sasstring";
    const sanitized = sanitizeURL(url);
    assert.ok(sanitized.indexOf("sasstring") === -1, "Expecting SAS string to be redacted.");
    assert.ok(sanitized.indexOf("*****") !== -1, "Expecting SAS string to be redacted.");
  });

  it("sanitizeHeaders redacts SAS token", () => {
    const url = "https://some.url.com/container/blob?sig=sasstring";
    const headers = createHttpHeaders();
    headers.set("authorization", "Bearer abcdefg");
    headers.set("x-ms-copy-source", url);
    headers.set("otherheader", url);

    const sanitized = sanitizeHeaders(headers);
    assert.ok(
      sanitized.get("x-ms-copy-source")!.indexOf("sasstring") === -1,
      "Expecting SAS string to be redacted.",
    );
    assert.ok(
      sanitized.get("x-ms-copy-source")!.indexOf("*****") !== -1,
      "Expecting SAS string to be redacted.",
    );
    assert.ok(
      sanitized.get("authorization")! === "*****",
      "Expecting authorization header value to be redacted.",
    );

    assert.ok(
      sanitized.get("otherheader")!.indexOf("sasstring") !== -1,
      "Other header should not be changed.",
    );
  });

  it("extractConnectionStringParts parses sas connection string with queue and file endpoints", async () => {
    verifySASConnectionString(
      `FileEndpoint=${fileEndpoint};
        FileEndpoint=https://storagesample.file.core.windows.net;
        SharedAccessSignature=${sharedAccessSignature}`,
    );
  });

  it("extractConnectionStringParts parses sas connection string with queue endpoint", async () => {
    verifySASConnectionString(
      `FileEndpoint=${fileEndpoint};
        FileEndpoint=https://storagesample.file.core.windows.net;
        SharedAccessSignature=${sharedAccessSignature}`,
    );
  });

  it("extractConnectionStringParts parses sas connection string with custom domain", async () => {
    const sasConnectionString = `FileEndpoint=${customDomainFileEndpoint};
    SharedAccessSignature=${sharedAccessSignature}`;
    const connectionStringParts = extractConnectionStringParts(sasConnectionString);
    assert.equal(
      "SASConnString",
      connectionStringParts.kind,
      "extractConnectionStringParts().kind is different than expected.",
    );
    assert.equal(
      customDomainFileEndpoint,
      connectionStringParts.url,
      "extractConnectionStringParts().url is different than expected.",
    );
    assert.equal(
      "",
      connectionStringParts.accountName,
      "extractConnectionStringParts().accountName is different than expected.",
    );
  });

  it("isIpEndpointStyle", async () => {
    assert.equal(
      isIpEndpointStyle(new URL("https://192.0.0.10:1900/accountName/containerName/blobName")),
      true,
    );
    assert.equal(
      isIpEndpointStyle(
        new URL(
          "https://[2001:db8:85a3:8d3:1319:8a2e:370:7348]:443/accountName/containerName/blobName",
        ),
      ),
      true,
    );
    assert.equal(
      isIpEndpointStyle(new URL("https://localhost:80/accountName/containerName/blobName")),
      true,
    );

    assert.equal(isIpEndpointStyle(new URL("https://192.0.0.10:1900/")), true);
    assert.equal(isIpEndpointStyle(new URL("https://192.0.0.10")), true);

    assert.equal(
      isIpEndpointStyle(
        new URL("https://[2001:db8:85a3:8d3:1319:8a2e:370:7348]/accountName/containerName"),
      ),
      true,
    );
  });
});
