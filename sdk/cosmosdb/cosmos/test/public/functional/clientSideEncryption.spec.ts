// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { randomUUID } from "@azure/core-util";
import { Constants, EncryptionAlgorithm } from "../../../src/index.js";
import type {
  Database,
  Container,
  ContainerDefinition,
  OperationInput,
  PatchOperation,
  EncryptionKeyWrapMetadata,
  ClientEncryptionPolicy,
  ClientEncryptionIncludedPath,
} from "../../../src/index.js";
import {
  CosmosClient,
  KeyEncryptionAlgorithm,
  EncryptionType,
  EncryptionKeyResolverName,
  StatusCodes,
  BulkOperationType,
  ChangeFeedStartFrom,
  EncryptionQueryBuilder,
  PatchOperationType,
  PartitionKeyDefinitionVersion,
  ChangeFeedMode,
  ChangeFeedPolicy,
  ChangeFeedRetentionTimeSpan,
  PartitionKeyKind,
  PermissionMode,
} from "../../../src/index.js";
import { masterKey } from "../common/_fakeTestSecrets.js";
import { endpoint, skipTestForSignOff } from "../common/_testConfig.js";
import {
  compareMetadata,
  MockKeyVaultEncryptionKeyResolver,
  testCreateClientEncryptionKey,
  testCreateItem,
  TestDoc,
  verifyExpectedDocResponse,
  verifyItemByRead,
  testRewrapClientEncryptionKey,
  testUpsertItem,
  validateQueryResults,
  testPatchItem,
  testReplaceItem,
  testDeleteItem,
  verifyDiagnostics,
} from "../common/encryptionTestHelpers.js";
import { removeAllDatabases } from "../common/TestHelpers.js";
import type { CosmosEncryptedNumber } from "../../../src/encryption/CosmosEncryptedNumber.js";
import { CosmosEncryptedNumberType } from "../../../src/encryption/CosmosEncryptedNumber.js";
import { describe, it, assert, beforeEach, beforeAll, afterAll } from "vitest";

let encryptionClient: CosmosClient;
let metadata1: EncryptionKeyWrapMetadata;
let metadata2: EncryptionKeyWrapMetadata;
let database: Database;
let encryptionContainer: Container;
let encryptionContainerForChangeFeed: Container;
let testKeyEncryptionKeyResolver: MockKeyVaultEncryptionKeyResolver;
let containerDefinition: ContainerDefinition;
let clientEncryptionPolicy: ClientEncryptionPolicy;

const testKeyVault = "TESTKEYSTORE_VAULT" as EncryptionKeyResolverName;

describe("ClientSideEncryption", () => {
  beforeAll(async () => {
    await removeAllDatabases();
    testKeyEncryptionKeyResolver = new MockKeyVaultEncryptionKeyResolver();
    metadata1 = {
      type: testKeyVault,
      name: "key1",
      value: "cmkpath1",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    metadata2 = {
      type: testKeyVault,
      name: "key2",
      value: "cmkpath2",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    encryptionClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: testKeyEncryptionKeyResolver,
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    database = (await encryptionClient.databases.createIfNotExists({ id: randomUUID() })).database;
    const revokedKekMetadata: EncryptionKeyWrapMetadata = {
      type: testKeyVault,
      name: "revokedKek",
      value: "revokedcmkpath",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    await testCreateClientEncryptionKey(database, "key1", metadata1);
    await testCreateClientEncryptionKey(database, "key2", metadata2);
    await testCreateClientEncryptionKey(database, "keyWithRevokedKek", revokedKekMetadata);
    const key1Paths = [
      "/PK",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_IntFormat",
      "/sensitive_DateFormat",
      "/sensitive_FloatFormat",
      "/sensitive_ArrayMultiTypes",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    const key2Paths = [
      "/id",
      "/sensitive_DecimalFormat",
      "/sensitive_BoolFormat",
      "/sensitive_IntMultiDimArray",
      "/sensitive_ObjectArrayType",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key2",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    const paths = key1Paths.concat(key2Paths);
    paths.push({
      path: "/sensitive_ArrayFormat",
      clientEncryptionKeyId: "keyWithRevokedKek",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    });
    clientEncryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerDefinition = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: clientEncryptionPolicy,
    };

    const containerDefinitionForChangeFeed = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: clientEncryptionPolicy,
    };
    encryptionContainer = (await database.containers.createIfNotExists(containerDefinition))
      .container;
    encryptionContainerForChangeFeed = (
      await database.containers.createIfNotExists(containerDefinitionForChangeFeed)
    ).container;
    // initialize Encryption will warm up the cache beforehand
    // not calling it for encryptionContainer as cache will be initialized with first encryption operation
    await encryptionContainerForChangeFeed.initializeEncryption();
  });

  beforeEach(async () => {
    const iterator = encryptionContainer.items.readAll();
    const { resources: items } = await iterator.fetchAll();
    if (items.length > 0) {
      for (const item of items) {
        await encryptionContainer.item(item.id, item.PK).delete();
      }
    }
  });

  it("create client encryption included paths and policy", async () => {
    // check policy format version
    let path: ClientEncryptionIncludedPath = {
      path: "/id",
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    let policy: ClientEncryptionPolicy = {
      includedPaths: [path],
    };
    try {
      await database.containers.createIfNotExists({
        id: randomUUID(),
        clientEncryptionPolicy: policy,
      });
    } catch (err) {
      assert.ok(
        err.message.includes(
          "Encryption of partition key or id is only supported with policy format version 2",
        ),
      );
    }
    // check deterministic encryption for id
    path = {
      path: "/id",
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.RANDOMIZED,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };

    policy = {
      includedPaths: [path],
      policyFormatVersion: 2,
    };
    try {
      await database.containers.createIfNotExists({
        id: randomUUID(),
        clientEncryptionPolicy: policy,
      });
    } catch (err) {
      assert.ok(
        err.message.includes(
          "The '/id' property must be encrypted using Deterministic encryption.",
        ),
      );
    }
    // check deterministic encryption for partition key
    path = {
      path: "/address",
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.RANDOMIZED,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    policy = {
      includedPaths: [path],
      policyFormatVersion: 2,
    };
    let containerDef = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK", "/address/zip"],
      },
      clientEncryptionPolicy: policy,
    };
    try {
      await database.containers.createIfNotExists(containerDef);
    } catch (err) {
      assert.ok(
        err.message.includes(
          "Path: /address which is part of the partition key has to be encrypted with Deterministic type Encryption.",
        ),
      );
    }

    // check invalid path
    path = {
      path: "/id",
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    policy = {
      includedPaths: [path],
      policyFormatVersion: 2,
    };
    containerDef = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: policy,
    };
    try {
      await database.containers.createIfNotExists(containerDef);
    } catch (err) {
      assert.ok(
        err.message.includes("Path in ClientEncryptionIncludedPath needs to start with '/'"),
      );
    }
    // check for nested path
    path = {
      path: "/address/zip",
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    policy = {
      includedPaths: [path],
    };
    containerDef = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK", "/address/zip"],
      },
      clientEncryptionPolicy: policy,
    };
    try {
      await database.containers.createIfNotExists(containerDef);
    } catch (err) {
      assert.ok(
        err.message.includes("Only top-level paths are currently supported for encryption"),
      );
    }
    // check empty key
    path = {
      path: "/id",
      clientEncryptionKeyId: "",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    policy = {
      includedPaths: [path],
      policyFormatVersion: 2,
    };
    containerDef = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: policy,
    };
    try {
      await database.containers.createIfNotExists(containerDef);
    } catch (err) {
      assert.ok(
        err.message.includes(
          "ClientEncryptionKeyId needs to be defined as string type in ClientEncryptionIncludedPath",
        ),
      );
    }
  });

  it("create and delete database with encryption enabled client without cek", async () => {
    const testdatabase = (await encryptionClient.databases.create({ id: "NoCEKDatabase" }))
      .database;
    const containerProperties = {
      id: "NoCEPContainer",
      partitionKey: {
        paths: ["/PK"],
      },
      throughput: 400,
    };
    const testcontainer = (await testdatabase.containers.create(containerProperties)).container;
    await testcontainer.initializeEncryption();
    const testDoc = TestDoc.create();
    const createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    await testdatabase.delete();
  });
  // skipping since timeout at pipeline is set to 100 seconds
  it.skip("validate encryption time to live", async () => {
    const testKeyResolver = new MockKeyVaultEncryptionKeyResolver();
    // client with ttl of 1 min
    const newClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: testKeyResolver,
        encryptionKeyTimeToLiveInSeconds: 60,
      },
    });
    const newDatabase = newClient.database(database.id);
    const newContainer = newDatabase.container(encryptionContainer.id);
    for (let i = 0; i < 2; i++) {
      await testCreateItem(newContainer);
    }
    // expecting just one unwrap, since the key should be cached for 1 min
    assert.ok(testKeyResolver.unwrapKeyCallsCount["cmkpath1"] === 1);
    // wait for some to ensure that cache is cleared
    await new Promise((resolve) => setTimeout(resolve, 120000));

    for (let i = 0; i < 2; i++) {
      await testCreateItem(newContainer);
    }
    // again the unwrap key should be called once, since the cache has cleared
    assert.equal(testKeyResolver.unwrapKeyCallsCount["cmkpath1"], 2);
    newClient.dispose();
  });

  it("encryption bulk operation", async () => {
    const docToCreate = TestDoc.create();

    const { resource: docToReplace } = await testCreateItem(encryptionContainer);
    docToReplace.nonsensitive = randomUUID();
    docToReplace.sensitive_StringFormat = randomUUID();

    const { resource: docToUpsert } = await testCreateItem(encryptionContainer);
    docToUpsert.nonsensitive = randomUUID();
    docToUpsert.sensitive_StringFormat = randomUUID();

    // doc not created before
    const docToUpsert2 = TestDoc.create();

    const { resource: docToDelete } = await testCreateItem(encryptionContainer);

    const clientWithBulk = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });

    const databaseWithBulk = clientWithBulk.database(database.id);
    const encryptionContainerWithBulk = databaseWithBulk.container(encryptionContainer.id);

    const operations = [
      {
        operationType: BulkOperationType.Create,
        resourceBody: JSON.parse(JSON.stringify(docToCreate)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert2.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert2)),
      },
      {
        operationType: BulkOperationType.Replace,
        partitionKey: docToReplace.PK,
        id: docToReplace.id,
        resourceBody: JSON.parse(JSON.stringify(docToReplace)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert)),
      },
      {
        operationType: BulkOperationType.Delete,
        id: docToDelete.id,
        partitionKey: docToDelete.PK,
      },
    ];

    const response = await encryptionContainerWithBulk.items.bulk(operations);
    // num of encrypted operations - 4*12 for encrypting body + 4 pk + 2 id
    verifyDiagnostics(response.diagnostics, true, true, 54, 48);
    assert.equal(StatusCodes.Created, response[0].statusCode);
    verifyExpectedDocResponse(docToCreate, response[0].resourceBody);
    assert.equal(StatusCodes.Created, response[1].statusCode);
    verifyExpectedDocResponse(docToUpsert2, response[1].resourceBody);
    assert.equal(StatusCodes.Ok, response[2].statusCode);
    verifyExpectedDocResponse(new TestDoc(docToReplace), response[2].resourceBody);
    assert.equal(StatusCodes.Ok, response[3].statusCode);
    verifyExpectedDocResponse(new TestDoc(docToUpsert), response[3].resourceBody);
    assert.equal(StatusCodes.NoContent, response[4].statusCode);
    assert.isNotObject(response[4].resourceBody);
    clientWithBulk.dispose();
  });

  it("encryption executeBulkOperations API", async () => {
    const docToCreate = TestDoc.create();

    const { resource: docToReplace } = await testCreateItem(encryptionContainer);
    docToReplace.nonsensitive = randomUUID();
    docToReplace.sensitive_StringFormat = randomUUID();

    const { resource: docToUpsert } = await testCreateItem(encryptionContainer);
    docToUpsert.nonsensitive = randomUUID();
    docToUpsert.sensitive_StringFormat = randomUUID();

    // doc not created before
    const docToUpsert2 = TestDoc.create();

    const { resource: docToDelete } = await testCreateItem(encryptionContainer);

    const { resource: docToPatch } = await testCreateItem(encryptionContainer);
    docToPatch.sensitive_IntFormat = 500;

    const clientWithBulk = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });

    const databaseWithBulk = clientWithBulk.database(database.id);
    const encryptionContainerWithBulk = databaseWithBulk.container(encryptionContainer.id);
    const patchOperation = {
      operations: [
        {
          op: PatchOperationType.replace,
          path: "/sensitive_IntFormat",
          value: docToPatch.sensitive_IntFormat,
        },
      ],
    };
    const operations = [
      {
        operationType: BulkOperationType.Create,
        partitionKey: docToCreate.PK,
        resourceBody: JSON.parse(JSON.stringify(docToCreate)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert2.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert2)),
      },
      {
        operationType: BulkOperationType.Replace,
        partitionKey: docToReplace.PK,
        id: docToReplace.id,
        resourceBody: JSON.parse(JSON.stringify(docToReplace)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert)),
      },
      {
        operationType: BulkOperationType.Delete,
        id: docToDelete.id,
        partitionKey: docToDelete.PK,
      },
      {
        operationType: BulkOperationType.Patch,
        partitionKey: docToPatch.PK,
        id: docToPatch.id,
        resourceBody: patchOperation,
      },
    ];

    const result = await encryptionContainerWithBulk.items.executeBulkOperations(operations);
    result.forEach((r) => {
      assert.isNotNull(r.response.diagnostics);
      assert.isNotNull(r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics);
      const encryptContent =
        r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics.encryptContent;
      const decryptContent =
        r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics.decryptContent;
      assert.isNotNull(encryptContent);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsStartTime]);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount]);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsDuration]);
      assert.isNotNull(decryptContent);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsStartTime]);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount]);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsDuration]);
    });
    // Create
    assert.equal(StatusCodes.Created, result[0].response.statusCode);
    verifyExpectedDocResponse(docToCreate, result[0].response.resourceBody);
    // 12 encrypted field + 1 partition key for create and upsert encryption
    assert.equal(
      result[0].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      13,
    );
    assert.equal(
      result[0].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      12,
    );

    // Upsert new item
    assert.equal(StatusCodes.Created, result[1].response.statusCode);
    verifyExpectedDocResponse(docToUpsert2, result[1].response.resourceBody);
    assert.equal(
      result[1].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      13,
    );
    assert.equal(
      result[1].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      12,
    );

    // Replace
    assert.equal(StatusCodes.Ok, result[2].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToReplace), result[2].response.resourceBody);
    // 12 encrypted field + 1 partition key + 1 id for replace encryption
    assert.equal(
      result[2].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      14,
    );
    assert.equal(
      result[2].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      12,
    );

    // Upsert existing item
    assert.equal(StatusCodes.Ok, result[3].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToUpsert), result[3].response.resourceBody);
    assert.equal(
      result[3].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      13,
    );
    assert.equal(
      result[3].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      12,
    );

    // Delete
    assert.equal(StatusCodes.NoContent, result[4].response.statusCode);
    assert.isNotObject(result[4].response.resourceBody);
    // 1 partition key + 1 id for delete encryption
    assert.equal(
      result[4].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      2,
    );

    // Patch
    assert.equal(StatusCodes.Ok, result[5].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToPatch), result[5].response.resourceBody);
    // 1 partition key + 1 id + 1 field to patch for patch encryption
    assert.equal(
      result[5].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      3,
    );
    assert.equal(
      result[5].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      12,
    );

    clientWithBulk.dispose();
  });

  it("encryption create client encryption key", async () => {
    let cekId = "anotherCek";
    let cmkpath5: EncryptionKeyWrapMetadata = {
      type: testKeyVault,
      name: cekId,
      value: "cmkpath5",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    const clientEncryptionKeyProperties = (
      await testCreateClientEncryptionKey(database, cekId, cmkpath5)
    ).clientEncryptionKeyProperties;

    assert.ok(compareMetadata(cmkpath5, clientEncryptionKeyProperties.encryptionKeyWrapMetadata));

    // creating another key with same id should fail
    cmkpath5 = {
      type: testKeyVault,
      name: cekId,
      value: "testmetadata2",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    try {
      await testCreateClientEncryptionKey(database, cekId, cmkpath5);
      assert.fail("creating another key with same encryption key id should fail");
    } catch (error) {
      assert.equal(StatusCodes.Conflict, error.code);
    }

    cekId = "testAkvKid";
    const encryptionCosmosClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    let metadata: EncryptionKeyWrapMetadata = {
      type: EncryptionKeyResolverName.AzureKeyVault,
      name: "key1",
      value: "https://testkeyvault.vault.azure.net/keys/testkey/12345678",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    const database1 = (
      await encryptionCosmosClient.databases.createIfNotExists({ id: randomUUID() })
    ).database;
    let clientEncryptionKeyResponse = await database1.createClientEncryptionKey(
      cekId,
      EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      metadata,
    );
    assert.equal(StatusCodes.Created, clientEncryptionKeyResponse.statusCode);
    metadata = {
      type: EncryptionKeyResolverName.AzureKeyVault,
      name: "key1",
      value: "https://testkeyvault.vault.azure.net/keys/testkey/9101112",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    clientEncryptionKeyResponse = await database1.rewrapClientEncryptionKey(cekId, metadata);
    assert.equal(StatusCodes.Ok, clientEncryptionKeyResponse.statusCode);
    encryptionCosmosClient.dispose();
  });

  it("rewrap client encryption key", async () => {
    const cekId = "rewrapkeytest";
    const metadata: EncryptionKeyWrapMetadata = {
      type: testKeyVault,
      name: cekId,
      value: "cmkpath5",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    let clientEncryptionKeyProperties = (
      await testCreateClientEncryptionKey(database, cekId, metadata)
    ).clientEncryptionKeyProperties;
    assert.ok(
      compareMetadata(
        {
          type: testKeyVault,
          name: cekId,
          value: metadata.value,
          algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
        },
        clientEncryptionKeyProperties.encryptionKeyWrapMetadata,
      ),
    );
    const updatedMetadata: EncryptionKeyWrapMetadata = {
      type: testKeyVault,
      name: cekId,
      value: "metadata" + "updatedmetadata",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    clientEncryptionKeyProperties = (
      await testRewrapClientEncryptionKey(database, cekId, updatedMetadata)
    ).clientEncryptionKeyProperties;
    // check if cek is wrapped with updated metadata
    assert.ok(
      compareMetadata(
        {
          type: testKeyVault,
          name: cekId,
          value: updatedMetadata.value,
          algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
        },
        clientEncryptionKeyProperties.encryptionKeyWrapMetadata,
      ),
    );
  });

  it("create encrypted item with null property", async () => {
    const testkeyEncryptionKeyResolver = new MockKeyVaultEncryptionKeyResolver();
    const client = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: testkeyEncryptionKeyResolver,
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    const testdatabase = client.database(database.id);
    const testcontainer = testdatabase.container(encryptionContainer.id);
    const testDoc = TestDoc.create();
    testDoc.sensitive_ArrayFormat = null;
    testDoc.sensitive_StringFormat = null;
    testDoc.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2.sensitive_StringFormatL2 =
      null;

    const createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);

    // query on document with null property

    const queryBuilder = new EncryptionQueryBuilder(
      "SELECT * FROM c where c.sensitive_StringFormat = @sensitive_StringFormat AND c.sensitive_ArrayFormat = @sensitive_ArrayFormat" +
        " AND c.sensitive_IntFormat = @sensitive_IntFormat" +
        " AND c.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2.sensitive_StringFormatL2 = @sensitive_StringFormatL2" +
        " AND c.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2.sensitive_DecimalFormatL2 = @sensitive_DecimalFormatL2",
    );
    // null parameters should also work with other add methods
    queryBuilder.addParameter(
      "@sensitive_StringFormat",
      testDoc.sensitive_StringFormat,
      "/sensitive_StringFormat",
    );
    queryBuilder.addParameter("@sensitive_ArrayFormat", null, "/sensitive_ArrayFormat");
    const intParam: CosmosEncryptedNumber = {
      value: testDoc.sensitive_IntFormat,
      numberType: CosmosEncryptedNumberType.Integer,
    };
    queryBuilder.addParameter("@sensitive_IntFormat", intParam, "/sensitive_IntFormat");
    queryBuilder.addParameter(
      "@sensitive_StringFormatL2",
      testDoc.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
        .sensitive_StringFormatL2,
      "/sensitive_NestedObjectFormatL1",
    );
    const decimalParam: CosmosEncryptedNumber = {
      value:
        testDoc.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
          .sensitive_DecimalFormatL2,
      numberType: CosmosEncryptedNumberType.Float,
    };

    queryBuilder.addParameter(
      "@sensitive_DecimalFormatL2",
      decimalParam,
      "/sensitive_NestedObjectFormatL1",
    );

    const expectedDocList: TestDoc[] = [];
    expectedDocList.push(new TestDoc(testDoc));
    await validateQueryResults(testcontainer, queryBuilder, expectedDocList);
    client.dispose();
  });

  it("encryption create item and query", async () => {
    const testDoc = (await testCreateItem(encryptionContainer)).resource;
    await verifyItemByRead(encryptionContainer, testDoc);

    const expectedDoc = new TestDoc(testDoc);
    const expectedDocList: TestDoc[] = [];
    expectedDocList.push(expectedDoc);
    let queryBuilder = new EncryptionQueryBuilder("SELECT * FROM c");
    await validateQueryResults(encryptionContainer, queryBuilder, expectedDocList);
    queryBuilder = new EncryptionQueryBuilder(
      "select * from c where c.id = @theId and c.PK = @thePK",
    );

    queryBuilder.addParameter("@theId", expectedDoc.id, "/id");
    queryBuilder.addParameter("@thePK", expectedDoc.PK, "/PK");

    await validateQueryResults(encryptionContainer, queryBuilder, expectedDocList);

    // query on non encrypted property
    queryBuilder = new EncryptionQueryBuilder(
      `SELECT * FROM c WHERE c.nonsensitive = @nonsensitive`,
    );
    queryBuilder.addUnencryptedParameter(
      "@nonsensitive",
      expectedDoc.nonsensitive,
      "/nonsensitive",
    );
    await validateQueryResults(encryptionContainer, queryBuilder, expectedDocList);

    // response should be null without using addIntegerParameter method
    queryBuilder = new EncryptionQueryBuilder(
      `SELECT * FROM c WHERE c.sensitive_IntFormat = '${expectedDoc.sensitive_IntFormat}'`,
    );
    await validateQueryResults(encryptionContainer, queryBuilder, null);
  });

  it("query on encrypted properties", async () => {
    const containerProperties = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: clientEncryptionPolicy,
    };
    const encryptionQueryContainer = (await database.containers.create(containerProperties))
      .container;
    encryptionQueryContainer.initializeEncryption();
    const testDoc1 = new TestDoc((await testCreateItem(encryptionQueryContainer)).resource);
    const testDoc2 = new TestDoc((await testCreateItem(encryptionQueryContainer)).resource);
    const testDoc3 = new TestDoc((await testCreateItem(encryptionQueryContainer)).resource);
    const arrayOfStringValues = [testDoc1.sensitive_StringFormat, "randomValue", null];
    let queryBuilder: EncryptionQueryBuilder;
    // string/object
    queryBuilder = new EncryptionQueryBuilder(
      "SELECT * FROM c where array_contains(@sensitive_StringFormat, c.sensitive_StringFormat) AND c.sensitive_NestedObjectFormatL1 = @sensitive_NestedObjectFormatL1",
    );
    queryBuilder.addParameter(
      "@sensitive_StringFormat",
      arrayOfStringValues,
      "/sensitive_StringFormat",
    );
    queryBuilder.addParameter(
      "@sensitive_NestedObjectFormatL1",
      testDoc1.sensitive_NestedObjectFormatL1,
      "/sensitive_NestedObjectFormatL1",
    );
    await validateQueryResults(encryptionQueryContainer, queryBuilder, [testDoc1]);
    // bool/float
    queryBuilder = new EncryptionQueryBuilder(
      "SELECT * FROM c where c.sensitive_BoolFormat = @sensitive_BoolFormat and c.sensitive_FloatFormat = @sensitive_FloatFormat",
    );
    queryBuilder.addParameter(
      "@sensitive_BoolFormat",
      testDoc1.sensitive_BoolFormat,
      "/sensitive_BoolFormat",
    );
    queryBuilder.addParameter(
      "@sensitive_FloatFormat",
      { value: testDoc1.sensitive_FloatFormat, numberType: CosmosEncryptedNumberType.Float },
      "/sensitive_FloatFormat",
    );
    await validateQueryResults(
      encryptionQueryContainer,
      queryBuilder,
      [testDoc1, testDoc2, testDoc3],
      true,
      36,
    );

    // with encrypted int and non encrypted properties
    const testDoc4 = new TestDoc((await testCreateItem(encryptionQueryContainer)).resource);
    queryBuilder = new EncryptionQueryBuilder(
      "SELECT * FROM c where c.nonsensitive = @nonsensitive and c.sensitive_IntFormat = @sensitive_IntFormat",
    );
    queryBuilder.addParameter("@nonsensitive", testDoc4.nonsensitive, "/nonsensitive");
    queryBuilder.addParameter(
      "@sensitive_IntFormat",
      { value: testDoc4.sensitive_IntFormat, numberType: CosmosEncryptedNumberType.Integer },
      "/sensitive_IntFormat",
    );
    await validateQueryResults(encryptionQueryContainer, queryBuilder, [testDoc4]);

    // without adding param
    queryBuilder = new EncryptionQueryBuilder("SELECT c.sensitive_DateFormat FROM c");
    const expectedRes = [
      { sensitive_DateFormat: testDoc1.sensitive_DateFormat },
      { sensitive_DateFormat: testDoc2.sensitive_DateFormat },
      { sensitive_DateFormat: testDoc3.sensitive_DateFormat },
      { sensitive_DateFormat: testDoc4.sensitive_DateFormat },
    ];
    await validateQueryResults(encryptionQueryContainer, queryBuilder, expectedRes, true, 4);
  });

  it("encryption batch CRUD", async () => {
    const partitionKey = "thePK";
    const doc1ToCreate = TestDoc.create(partitionKey);

    const doc1ToReplace = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    doc1ToReplace.nonsensitive = randomUUID();
    doc1ToReplace.sensitive_StringFormat = randomUUID();

    const doc2ToReplace = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    doc2ToReplace.nonsensitive = randomUUID();
    doc2ToReplace.sensitive_StringFormat = randomUUID();

    const doc1ToUpsert = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    doc1ToUpsert.nonsensitive = randomUUID();
    doc1ToUpsert.sensitive_StringFormat = randomUUID();

    const docToDelete = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );

    const docToPatch = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    docToPatch.sensitive_StringFormat = randomUUID();
    docToPatch.sensitive_DecimalFormat = 11.11;
    const patchOperations = {
      operations: [
        {
          op: PatchOperationType.replace,
          path: "/sensitive_StringFormat",
          value: docToPatch.sensitive_StringFormat,
        },
        {
          op: PatchOperationType.replace,
          path: "/sensitive_DecimalFormat",
          value: docToPatch.sensitive_DecimalFormat,
        },
      ],
    };
    const operations: OperationInput[] = [
      {
        operationType: "Create",
        resourceBody: JSON.parse(JSON.stringify(doc1ToCreate)),
      },
      {
        operationType: "Upsert",
        resourceBody: JSON.parse(JSON.stringify(doc1ToUpsert)),
      },
      {
        operationType: "Replace",
        id: doc1ToReplace.id,
        resourceBody: JSON.parse(JSON.stringify(doc1ToReplace)),
      },
      {
        operationType: "Patch",
        id: docToPatch.id,
        resourceBody: patchOperations,
      },
      {
        operationType: "Delete",
        id: docToDelete.id,
      },
    ];

    const response = await encryptionContainer.items.batch(operations, partitionKey);
    verifyDiagnostics(response.diagnostics, true, true, 41, 48);
    assert.equal(StatusCodes.Ok, response.code);

    const doc1 = response.result[0];

    verifyExpectedDocResponse(doc1ToCreate, doc1.resourceBody);

    const doc2 = response.result[1];
    verifyExpectedDocResponse(doc1ToUpsert, doc2.resourceBody);

    const doc3 = response.result[2];
    verifyExpectedDocResponse(doc1ToReplace, doc3.resourceBody);

    const doc4 = response.result[3];
    verifyExpectedDocResponse(docToPatch, doc4.resourceBody);

    await verifyItemByRead(encryptionContainer, doc1ToCreate);
    await verifyItemByRead(encryptionContainer, doc1ToReplace);
    await verifyItemByRead(encryptionContainer, doc1ToUpsert);
    await verifyItemByRead(encryptionContainer, docToPatch);

    const readResponse = await encryptionContainer.item(docToDelete.id, docToDelete.PK).read();
    assert.equal(StatusCodes.NotFound, readResponse.statusCode);
  });

  it("encryption batch conflict response", async () => {
    const partitionKey = "thePK";
    const doc1ToCreateAgain = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    doc1ToCreateAgain.nonsensitive = randomUUID();
    doc1ToCreateAgain.sensitive_StringFormat = randomUUID();

    const response = await encryptionContainer.items.batch(
      [
        {
          operationType: "Create",
          resourceBody: JSON.parse(JSON.stringify(doc1ToCreateAgain)),
        },
      ],
      partitionKey,
    );
    assert.equal(StatusCodes.Conflict, response.result[0].statusCode);
    assert.equal(1, response.result.length);
  });

  it("encryption patch items", async () => {
    const docPostPatching = new TestDoc((await testCreateItem(encryptionContainer)).resource);
    docPostPatching.nonsensitive = randomUUID();
    docPostPatching.nonsensitiveInt++;
    docPostPatching.sensitive_StringFormat = randomUUID();
    docPostPatching.sensitive_DateFormat = new Date();
    docPostPatching.sensitive_DecimalFormat = 11.11;
    docPostPatching.sensitive_IntArray[1] = 1;
    docPostPatching.sensitive_IntMultiDimArray[1][0] = 7;
    docPostPatching.sensitive_IntFormat = 2020;
    docPostPatching.sensitive_BoolFormat = false;
    docPostPatching.sensitive_FloatFormat = 2020.2;

    let patchOperations: PatchOperation[] = [
      {
        op: PatchOperationType.incr,
        path: "/nonsensitiveInt",
        value: 1,
      },
      {
        op: PatchOperationType.replace,
        path: "/nonsensitive",
        value: docPostPatching.nonsensitive,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_StringFormat",
        value: docPostPatching.sensitive_StringFormat,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_DateFormat",
        value: docPostPatching.sensitive_DateFormat,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_DecimalFormat",
        value: docPostPatching.sensitive_DecimalFormat,
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_IntArray/1",
        value: docPostPatching.sensitive_IntArray[1],
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_IntMultiDimArray/1/0",
        value: docPostPatching.sensitive_IntMultiDimArray[1][0],
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_IntFormat",
        value: docPostPatching.sensitive_IntFormat,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_BoolFormat",
        value: docPostPatching.sensitive_BoolFormat,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_FloatFormat",
        value: docPostPatching.sensitive_FloatFormat,
      },
    ];
    let patchResponse = await testPatchItem(
      encryptionContainer,
      patchOperations,
      docPostPatching,
      StatusCodes.Ok,
    );
    verifyDiagnostics(patchResponse.diagnostics, true, true, 8, 12);
    docPostPatching.sensitive_ArrayFormat = [
      {
        sensitive_ArrayIntFormat: 100,
        sensitive_ArrayDecimalFormat: 100.2,
      },
      {
        sensitive_ArrayIntFormat: 2222,
        sensitive_ArrayDecimalFormat: 2222.22,
      },
    ];
    docPostPatching.sensitive_ArrayMultiTypes[0][1] = {
      sensitive_NestedObjectFormatL0: {
        sensitive_IntFormatL0: 123,
        sensitive_DecimalFormatL0: 123.1,
      },
      sensitive_StringArrayMultiType: ["sensitivedata"],
      sensitive_ArrayMultiTypeDecimalFormat: 123.2,
      sensitive_IntArrayMultiType: [1, 2],
    };
    docPostPatching.sensitive_NestedObjectFormatL1 = {
      sensitive_IntArrayL1: [999, 100],
      sensitive_IntFormatL1: 1999,
      sensitive_DecimalFormatL1: 1.1,
      sensitive_ArrayFormatL1: [
        {
          sensitive_ArrayIntFormat: 0,
          sensitive_ArrayDecimalFormat: 0.1,
        },
        {
          sensitive_ArrayIntFormat: 0,
          sensitive_ArrayDecimalFormat: 0.5,
        },
        {
          sensitive_ArrayIntFormat: 1,
          sensitive_ArrayDecimalFormat: 2.1,
        },
        {
          sensitive_ArrayIntFormat: 2,
          sensitive_ArrayDecimalFormat: 3.1,
        },
      ],
    };
    // patch operation on nested path properties
    patchOperations = [
      {
        op: PatchOperationType.replace,
        path: "/sensitive_ArrayFormat/0",
        value: docPostPatching.sensitive_ArrayFormat[0],
      },
      {
        op: PatchOperationType.add,
        path: "/sensitive_ArrayFormat/1",
        value: docPostPatching.sensitive_ArrayFormat[1],
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_ArrayMultiTypes/0/1",
        value: docPostPatching.sensitive_ArrayMultiTypes[0][1],
      },
      {
        op: PatchOperationType.remove,
        path: "/sensitive_NestedObjectFormatL1/sensitive_NestedObjectFormatL2",
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_NestedObjectFormatL1/sensitive_ArrayFormatL1/0",
        value: docPostPatching.sensitive_NestedObjectFormatL1.sensitive_ArrayFormatL1[0],
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_NestedObjectFormatL1/sensitive_ArrayFormatL1/1",
        value: docPostPatching.sensitive_NestedObjectFormatL1.sensitive_ArrayFormatL1[1],
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_NestedObjectFormatL1/sensitive_DecimalFormatL1",
        value: docPostPatching.sensitive_NestedObjectFormatL1.sensitive_DecimalFormatL1,
      },
    ];
    patchResponse = await testPatchItem(
      encryptionContainer,
      patchOperations,
      docPostPatching,
      StatusCodes.Ok,
    );
    verifyDiagnostics(patchResponse.diagnostics, true, true, 8, 12);
    patchOperations = [
      {
        op: PatchOperationType.incr,
        path: "/sensitive_IntFormat",
        value: 1,
      },
    ];
    try {
      await encryptionContainer.item(docPostPatching.id, docPostPatching.PK).patch(patchOperations);
    } catch (err) {
      assert.ok(
        err.message.includes(
          "Increment patch operation is not allowed for encrypted path '/sensitive_IntFormat'",
        ),
      );
    }
  });

  it("Encryption RUD item", async () => {
    // upsert should create a new item
    const testDoc = new TestDoc(
      (await testUpsertItem(encryptionContainer, TestDoc.create(), StatusCodes.Created)).resource,
    );
    await verifyItemByRead(encryptionContainer, testDoc);
    testDoc.nonsensitive = randomUUID();
    testDoc.sensitive_StringFormat = randomUUID();

    // upsert should update the item
    const updatedDoc = new TestDoc(
      (await testUpsertItem(encryptionContainer, testDoc, StatusCodes.Ok)).resource,
    );
    await verifyItemByRead(encryptionContainer, updatedDoc);

    updatedDoc.nonsensitive = randomUUID();
    updatedDoc.sensitive_StringFormat = randomUUID();

    const replacedDoc = new TestDoc(
      (await testReplaceItem(encryptionContainer, updatedDoc)).resource,
    );
    await verifyItemByRead(encryptionContainer, replacedDoc);
    await testDeleteItem(encryptionContainer, replacedDoc);
  });

  it("validate Partition Key and ID encryption support", async () => {
    // encrypt string type PK
    let paths = ["/PK", "/id"].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let policy: ClientEncryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties = {
      id: "StringPKEncContainer",
      partitionKey: {
        paths: ["/id"],
      },
      clientEncryptionPolicy: policy,
    };
    let testcontainer = (await database.containers.create(containerProperties)).container;
    await testcontainer.initializeEncryption();
    const testDoc = TestDoc.create();
    let createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // readback
    let readResponse = await testcontainer.item(testDoc.id, testDoc.id).read();
    assert.equal(StatusCodes.Ok, readResponse.statusCode);
    verifyExpectedDocResponse(testDoc, readResponse.resource);

    // encrypt float type PK
    paths = ["/sensitive_FloatFormat", "/id"].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    policy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: "FloatPKEncContainer",
      partitionKey: {
        paths: ["/sensitive_FloatFormat"],
      },
      clientEncryptionPolicy: policy,
    };
    testcontainer = (await database.containers.create(containerProperties)).container;
    await testcontainer.initializeEncryption();

    createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);

    // readback
    readResponse = await testcontainer.item(testDoc.id, testDoc.sensitive_FloatFormat).read();
    assert.equal(StatusCodes.Ok, readResponse.statusCode);
    verifyExpectedDocResponse(testDoc, readResponse.resource);

    // encrypt boolean type PK
    paths = ["/sensitive_BoolFormat", "/id"].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    policy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: "BoolPKEncContainer",
      partitionKey: {
        paths: ["/sensitive_BoolFormat"],
      },
      clientEncryptionPolicy: policy,
    };
    testcontainer = (await database.containers.create(containerProperties)).container;
    await testcontainer.initializeEncryption();

    createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // readback
    readResponse = await testcontainer.item(testDoc.id, testDoc.sensitive_BoolFormat).read();
    assert.equal(StatusCodes.Ok, readResponse.statusCode);
    verifyExpectedDocResponse(testDoc, readResponse.resource);
  });

  it("create and delete database with encryption enabled client without cek", async () => {
    const testdatabase = (await encryptionClient.databases.create({ id: "NoCEKDatabase" }))
      .database;
    const containerProperties = {
      id: "NoCEPContainer",
      partitionKey: {
        paths: ["/PK"],
      },
    };
    const testcontainer = (await testdatabase.containers.create(containerProperties)).container;
    await testcontainer.initializeEncryption();
    const testDoc = TestDoc.create();
    const createResponse = await testcontainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    await testdatabase.delete();
  });

  // tests non-encrypted create operation with encrypted client
  it("encryption create item with no client encryption policy", async () => {
    await testCreateItem(encryptionContainer);
    const containerProperties = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
    };
    const encryptionContainerWithNoPolicy = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerWithNoPolicy.initializeEncryption();

    const testDoc = TestDoc.create();
    const createResponse = await encryptionContainerWithNoPolicy.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);

    const queryBuilder = new EncryptionQueryBuilder(
      `SELECT * FROM c where c.sensitive_StringFormat = @sensitive_StringFormat AND c.sensitive_IntFormat = @sensitive_IntFormat`,
    );
    queryBuilder.addParameter(
      "@sensitive_StringFormat",
      testDoc.sensitive_StringFormat,
      "/sensitive_StringFormat",
    );
    queryBuilder.addParameter(
      "@sensitive_IntFormat",
      {
        value: testDoc.sensitive_IntFormat,
        numberType: CosmosEncryptedNumberType.Integer,
      },
      "/sensitive_IntFormat",
    );
    const expectedDocList = [testDoc];
    await validateQueryResults(
      encryptionContainerWithNoPolicy,
      queryBuilder,
      expectedDocList,
      false,
    );
    await encryptionContainerWithNoPolicy.delete();
  });

  it("encryption change feed", async () => {
    const partitionKey = randomUUID();
    const changeFeedOptionsForEntireContainer = {
      changeFeedStartFrom: ChangeFeedStartFrom.Beginning(),
      maxItemCount: 1,
    };
    const changeFeedOptionsForPartitionKey = {
      changeFeedStartFrom: ChangeFeedStartFrom.Beginning(partitionKey),
    };

    const iteratorForPartitionKey = encryptionContainer.items.getChangeFeedIterator(
      changeFeedOptionsForPartitionKey,
    );
    const iteratorForEntireContainer = encryptionContainer.items.getChangeFeedIterator(
      changeFeedOptionsForEntireContainer,
    );
    const testDoc1 = new TestDoc(
      (await testCreateItem(encryptionContainer, partitionKey)).resource,
    );
    const testDoc2 = new TestDoc((await testCreateItem(encryptionContainer)).resource);

    let response = await iteratorForEntireContainer.readNext();

    verifyExpectedDocResponse(testDoc1, response.result[0]);
    assert.equal(StatusCodes.Ok, response.statusCode);
    response = await iteratorForEntireContainer.readNext();
    verifyExpectedDocResponse(testDoc2, response.result[0]);

    response = await iteratorForPartitionKey.readNext();
    assert.equal(StatusCodes.Ok, response.statusCode);
    assert.ok(response.result.length === 1);
    verifyExpectedDocResponse(testDoc1, response.result[0]);
  });

  it.skipIf(skipTestForSignOff)("encryption change feed with allVersionsAndDeletes", async () => {
    const newClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const newDatabase = newClient.database(database.id);
    const newTimeStamp = ChangeFeedRetentionTimeSpan.fromMinutes(5);
    const changeFeedPolicy = new ChangeFeedPolicy(newTimeStamp);
    const containerDefinitionChangeFeed = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
        version: PartitionKeyDefinitionVersion.V1,
      },
      clientEncryptionPolicy: clientEncryptionPolicy,
      changeFeedPolicy: changeFeedPolicy,
    };

    const encryptionContainerChangeFeed = (
      await newDatabase.containers.createIfNotExists(containerDefinitionChangeFeed)
    ).container;

    const partitionKey = randomUUID();
    // test encryption change feed with allVersionsAndDeletes for entire container
    const changeFeedOptionsForEntireContainer = {
      changeFeedStartFrom: ChangeFeedStartFrom.Now(),
      maxItemCount: 1,
      changeFeedMode: ChangeFeedMode.AllVersionsAndDeletes,
    };

    const iteratorForEntireContainer = encryptionContainerChangeFeed.items.getChangeFeedIterator(
      changeFeedOptionsForEntireContainer,
    );
    await iteratorForEntireContainer.readNext();
    const testDoc1 = new TestDoc(
      (await testCreateItem(encryptionContainerChangeFeed, partitionKey)).resource,
    );
    const response = await iteratorForEntireContainer.readNext();
    assert.equal(StatusCodes.Ok, response.statusCode);
    if ("current" in response.result[0]) {
      verifyExpectedDocResponse(testDoc1, response.result[0].current);
    } else {
      assert.fail("current not found in response");
    }
    verifyDiagnostics(response.diagnostics, false, true, 12, 12);
    // test encryption change feed with allVersionsAndDeletes for partition key
    const changeFeedOptionsForPartitionKey = {
      changeFeedStartFrom: ChangeFeedStartFrom.Now(partitionKey),
      changeFeedMode: ChangeFeedMode.AllVersionsAndDeletes,
    };

    const iteratorForPartitionKey = encryptionContainerChangeFeed.items.getChangeFeedIterator(
      changeFeedOptionsForPartitionKey,
    );
    await iteratorForPartitionKey.readNext();
    const testDoc2 = new TestDoc(
      (await testCreateItem(encryptionContainerChangeFeed, partitionKey)).resource,
    );
    await testCreateItem(encryptionContainerChangeFeed);

    await testDeleteItem(encryptionContainerChangeFeed, testDoc1);
    const responseForPartitionKey = await iteratorForPartitionKey.readNext();
    assert.equal(StatusCodes.Ok, responseForPartitionKey.statusCode);
    assert.ok(responseForPartitionKey.count === 2);

    if ("current" in responseForPartitionKey.result[0]) {
      verifyExpectedDocResponse(testDoc2, responseForPartitionKey.result[0].current);
    }
    if ("previous" in responseForPartitionKey.result[1]) {
      verifyExpectedDocResponse(testDoc1, responseForPartitionKey.result[1].previous);
    }
    newClient.dispose();
  });

  it("encryption validate policy refresh post container delete with patch", async () => {
    // create a container with 1st client
    let paths = [
      "/sensitive_IntArray",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_DoubleFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties: ContainerDefinition = {
      id: randomUUID(),
      partitionKey: { paths: ["/sensitive_DoubleFormat"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerToDelete.initializeEncryption();
    // create a document with 2nd client on same database and container
    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const otherDatabase = otherClient.database(database.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    const testDoc = TestDoc.create();
    const createResponse = await otherEncryptionContainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // Client 1 Deletes the Container referenced in Client 2 and Recreate with different policy
    await database.container(encryptionContainerToDelete.id).delete();
    paths = [
      {
        path: "/sensitive_StringFormat",
        clientEncryptionKeyId: "key1",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/sensitive_BoolFormat",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/PK",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
    ];
    encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: encryptionContainerToDelete.id,
      partitionKey: { paths: ["/PK"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    await database.containers.create(containerProperties);
    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (err) {
      verifyDiagnostics(err.diagnostics, true, false, 3, 0);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }

    const docPostPatching = (await testCreateItem(encryptionContainerToDelete)).resource;
    docPostPatching.nonsensitive = randomUUID();
    docPostPatching.nonSensitiveInt++;
    docPostPatching.sensitive_StringFormat = randomUUID();
    docPostPatching.sensitive_DateFormat = new Date();
    docPostPatching.sensitive_IntArray[1] = 19877;
    docPostPatching.sensitive_IntMultiDimArray[1][0] = 2020;
    docPostPatching.sensitive_IntFormat = 2020;
    docPostPatching.sensitive_NestedObjectFormatL1 = {
      sensitive_IntArrayL1: [999, 100],
      sensitive_IntFormatL1: 1999,
      sensitive_DecimalFormatL1: 1991.1,
      sensitive_ArrayFormatL1: [
        {
          sensitive_ArrayIntFormat: 0,
          sensitive_ArrayDecimalFormat: 0.1,
        },
        {
          sensitive_ArrayIntFormat: 1,
          sensitive_ArrayDecimalFormat: 2.1,
        },
        {
          sensitive_ArrayIntFormat: 2,
          sensitive_ArrayDecimalFormat: 3.1,
        },
      ],
    };
    const patchOperations = [
      {
        op: PatchOperationType.incr,
        path: "/nonSensitiveInt",
        value: 1,
      },
      {
        op: PatchOperationType.replace,
        path: "/nonsensitive",
        value: docPostPatching.nonsensitive,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_StringFormat",
        value: docPostPatching.sensitive_StringFormat,
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_DateFormat",
        value: docPostPatching.sensitive_DateFormat,
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_IntArray/1",
        value: docPostPatching.sensitive_IntArray[1],
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_IntMultiDimArray/1/0",
        value: docPostPatching.sensitive_IntMultiDimArray[1][0],
      },
      {
        op: PatchOperationType.replace,
        path: "/sensitive_IntFormat",
        value: docPostPatching.sensitive_IntFormat,
      },
      {
        op: PatchOperationType.remove,
        path: "/sensitive_NestedObjectFormatL1/sensitive_NestedObjectFormatL2",
        value: docPostPatching.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2,
      },
      {
        op: PatchOperationType.set,
        path: "/sensitive_NestedObjectFormatL1/sensitive_ArrayFormatL1/0",
        value: docPostPatching.sensitive_NestedObjectFormatL1.sensitive_ArrayFormatL1[0],
      },
    ];
    try {
      await testPatchItem(
        otherEncryptionContainer,
        patchOperations,
        docPostPatching,
        StatusCodes.Ok,
      );
      assert.fail("patch operation should fail");
    } catch (err) {
      verifyDiagnostics(err.diagnostics, true, false, 3, 0);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    await testPatchItem(otherEncryptionContainer, patchOperations, docPostPatching, StatusCodes.Ok);
    otherClient.dispose();
  });

  it("encryption validate policy refresh post container delete with query", async () => {
    // create a container with 1st client
    let paths = [
      "/sensitive_IntArray",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_DoubleFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties: ContainerDefinition = {
      id: randomUUID(),
      partitionKey: { paths: ["/sensitive_DoubleFormat"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerToDelete.initializeEncryption();
    // create a document with 2nd client on same database and container
    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const otherDatabase = otherClient.database(database.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    const testDoc = TestDoc.create();
    let createResponse = await otherEncryptionContainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // Client 1 Deletes the Container referenced in Client 2 and Recreate with different policy
    await database.container(encryptionContainerToDelete.id).delete();
    paths = [
      {
        path: "/sensitive_StringFormat",
        clientEncryptionKeyId: "key1",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/sensitive_BoolFormat",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/PK",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
    ];
    encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: encryptionContainerToDelete.id,
      partitionKey: { paths: ["/PK"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    await database.containers.create(containerProperties);
    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (err) {
      verifyDiagnostics(err.diagnostics, true, false, 3, 0);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    createResponse = await encryptionContainerToDelete.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);

    // check w.r.t to query if we are able to fail and update the policy
    try {
      await validateQueryResults(
        otherEncryptionContainer,
        new EncryptionQueryBuilder("SELECT * FROM c"),
        [testDoc],
        true,
        3,
      );
      assert.fail("query operation should fail");
    } catch (err) {
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    // previous failure would have updated the policy in the cache.
    await validateQueryResults(
      otherEncryptionContainer,
      new EncryptionQueryBuilder("SELECT * FROM c"),
      [testDoc],
      true,
      3,
    );
    otherClient.dispose();
  });

  it("encryption validate policy refresh post container delete with batch", async () => {
    // create a container with 1st client
    let paths = [
      "/sensitive_IntArray",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_DoubleFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties: ContainerDefinition = {
      id: randomUUID(),
      partitionKey: { paths: ["/sensitive_DoubleFormat"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerToDelete.initializeEncryption();
    // create a document with 2nd client on same database and container
    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const otherDatabase = otherClient.database(database.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    let testDoc = TestDoc.create();
    const createResponse = await otherEncryptionContainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // Client 1 Deletes the Container referenced in Client 2 and Recreate with different policy
    await database.container(encryptionContainerToDelete.id).delete();
    paths = [
      {
        path: "/sensitive_StringFormat",
        clientEncryptionKeyId: "key1",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/sensitive_BoolFormat",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/PK",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
    ];
    encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: encryptionContainerToDelete.id,
      partitionKey: { paths: ["/PK"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    await database.containers.create(containerProperties);
    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (err) {
      verifyDiagnostics(err.diagnostics, true, false, 3, 0);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    testDoc = new TestDoc((await testCreateItem(encryptionContainerToDelete)).resource);
    const partitionKey = "thePK";

    const doc1ToCreate = TestDoc.create(partitionKey);
    const doc2ToCreate = TestDoc.create(partitionKey);
    // check w.r.t to Batch if we are able to fail and update the policy.
    const operations: OperationInput[] = [
      {
        operationType: "Create",
        resourceBody: JSON.parse(JSON.stringify(doc1ToCreate)),
      },
      {
        operationType: "Create",
        resourceBody: JSON.parse(JSON.stringify(doc2ToCreate)),
      },
      {
        operationType: "Read",
        id: doc1ToCreate.id,
      },
      {
        operationType: "Delete",
        id: doc2ToCreate.id,
      },
    ];
    let batchResponse = null;
    try {
      batchResponse = await otherEncryptionContainer.items.batch(operations, partitionKey);
      assert.fail("batch operation should fail");
    } catch (err) {
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    batchResponse = await otherEncryptionContainer.items.batch(operations, partitionKey);
    assert.equal(StatusCodes.Ok, batchResponse.code);
    const doc1 = batchResponse.result[0].resourceBody;
    verifyExpectedDocResponse(doc1ToCreate, doc1);
    const doc2 = batchResponse.result[1].resourceBody;
    verifyExpectedDocResponse(doc2ToCreate, doc2);
    otherClient.dispose();
  });

  it("encryption validate policy refresh post container delete with bulk", async () => {
    // create a container with 1st client
    let paths = [
      "/sensitive_IntArray",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_DoubleFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties: ContainerDefinition = {
      id: randomUUID(),
      partitionKey: { paths: ["/sensitive_DoubleFormat"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerToDelete.initializeEncryption();
    // create a document with 2nd client on same database and container
    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const otherDatabase = otherClient.database(database.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    const testDoc = TestDoc.create();
    const createResponse = await otherEncryptionContainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // Client 1 Deletes the Container referenced in Client 2 and Recreate with different policy
    await database.container(encryptionContainerToDelete.id).delete();
    paths = [
      {
        path: "/sensitive_StringFormat",
        clientEncryptionKeyId: "key1",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/sensitive_BoolFormat",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/PK",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
    ];
    encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: encryptionContainerToDelete.id,
      partitionKey: { paths: ["/PK"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    await database.containers.create(containerProperties);
    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (err) {
      verifyDiagnostics(err.diagnostics, true, false, 3);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    const docToReplace = (await testCreateItem(encryptionContainerToDelete)).resource;
    docToReplace.sensitive_StringFormat = "docToBeReplaced";
    const docToUpsert = (await testCreateItem(encryptionContainerToDelete)).resource;
    docToUpsert.sensitive_StringFormat = "docToBeUpserted";
    const operations = [
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert)),
      },
      {
        operationType: BulkOperationType.Replace,
        id: docToReplace.id,
        partitionKey: docToReplace.PK,
        resourceBody: JSON.parse(JSON.stringify(docToReplace)),
      },
      {
        operationType: BulkOperationType.Create,
        resourceBody: JSON.parse(JSON.stringify(TestDoc.create())),
      },
    ];
    try {
      await otherEncryptionContainer.items.bulk(operations);
      assert.fail("bulk operation should fail");
    } catch (error) {
      verifyDiagnostics(error.diagnostics, true, false, 11, undefined);
      assert.ok(
        error.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    // retry bulk operation with 2nd client
    const res = await otherEncryptionContainer.items.bulk(operations);
    assert.equal(StatusCodes.Ok, res[0].statusCode);
    assert.equal(StatusCodes.Ok, res[1].statusCode);
    assert.equal(StatusCodes.Created, res[2].statusCode);
    await verifyItemByRead(encryptionContainerToDelete, docToReplace);
    await testCreateItem(encryptionContainerToDelete);
    await verifyItemByRead(encryptionContainerToDelete, docToUpsert);
    // validate if the right policy was used, by reading them all back
    await otherEncryptionContainer.items.readAll().fetchAll();
    otherClient.dispose();
  });

  it("encryption validate policy refresh post container delete with executeBulkOperation", async () => {
    // create a container with 1st client
    let paths = [
      "/sensitive_IntArray",
      "/sensitive_NestedObjectFormatL1",
      "/sensitive_DoubleFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    let encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    let containerProperties: ContainerDefinition = {
      id: randomUUID(),
      partitionKey: { paths: ["/sensitive_DoubleFormat"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (await database.containers.create(containerProperties))
      .container;
    await encryptionContainerToDelete.initializeEncryption();
    // create a document with 2nd client on same database and container
    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });
    const otherDatabase = otherClient.database(database.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    const testDoc = TestDoc.create();
    const createResponse = await otherEncryptionContainer.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    // Client 1 Deletes the Container referenced in Client 2 and Recreate with different policy
    await database.container(encryptionContainerToDelete.id).delete();
    paths = [
      {
        path: "/sensitive_StringFormat",
        clientEncryptionKeyId: "key1",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/sensitive_BoolFormat",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
      {
        path: "/PK",
        clientEncryptionKeyId: "key2",
        encryptionType: EncryptionType.DETERMINISTIC,
        encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      },
    ];
    encryptionPolicy = {
      includedPaths: paths,
      policyFormatVersion: 2,
    };
    containerProperties = {
      id: encryptionContainerToDelete.id,
      partitionKey: { paths: ["/PK"] },
      clientEncryptionPolicy: encryptionPolicy,
    };
    await database.containers.create(containerProperties);
    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (err) {
      // verifyDiagnostics(err.diagnostics, true, false, 3);
      assert.ok(
        err.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    const docToReplace = (await testCreateItem(encryptionContainerToDelete)).resource;
    docToReplace.sensitive_StringFormat = "docToBeReplaced";
    const docToUpsert = (await testCreateItem(encryptionContainerToDelete)).resource;
    docToUpsert.sensitive_StringFormat = "docToBeUpserted";
    const docToCreate = TestDoc.create();
    const operations = [
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: docToUpsert.PK,
        resourceBody: JSON.parse(JSON.stringify(docToUpsert)),
      },
      {
        operationType: BulkOperationType.Replace,
        id: docToReplace.id,
        partitionKey: docToReplace.PK,
        resourceBody: JSON.parse(JSON.stringify(docToReplace)),
      },
      {
        operationType: BulkOperationType.Create,
        partitionKey: docToCreate.PK,
        resourceBody: JSON.parse(JSON.stringify(docToCreate)),
      },
    ];
    try {
      await otherEncryptionContainer.items.executeBulkOperations(operations);
      assert.fail("bulk operation should fail");
    } catch (error) {
      // verifyDiagnostics(error.diagnostics, true, false, 11, undefined);
      assert.ok(
        error.message.includes(
          "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
        ),
      );
    }
    // retry bulk operation with 2nd client
    const res = await otherEncryptionContainer.items.executeBulkOperations(operations);
    assert.equal(StatusCodes.Ok, res[0].response?.statusCode);
    assert.equal(StatusCodes.Ok, res[1].response?.statusCode);
    assert.equal(StatusCodes.Created, res[2].response?.statusCode);
    await verifyItemByRead(encryptionContainerToDelete, docToReplace);
    await testCreateItem(encryptionContainerToDelete);
    await verifyItemByRead(encryptionContainerToDelete, docToUpsert);
    // validate if the right policy was used, by reading them all back
    await otherEncryptionContainer.items.readAll().fetchAll();
    otherClient.dispose();
  });

  it("encryption validate policy refresh post database delete", async () => {
    const mainCLient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
        encryptionKeyTimeToLiveInSeconds: 1800,
      },
    });
    let keyWrapMetadata: EncryptionKeyWrapMetadata = {
      type: testKeyVault,
      name: "myCek",
      value: "cmkpath3",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    let mainDatabase = (await mainCLient.databases.createIfNotExists({ id: "databaseToBeDeleted" }))
      .database;
    await mainDatabase.createClientEncryptionKey(
      keyWrapMetadata.name,
      EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      keyWrapMetadata,
    );

    const originalPaths = [
      "/sensitive_StringFormat",
      "/sensitive_ArrayFormat",
      "/sensitive_NestedObjectFormatL1",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "myCek",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    const encryptionPolicy = {
      includedPaths: originalPaths,
    };
    let containerDef: ContainerDefinition = {
      id: "containerToBeDeleted",
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: encryptionPolicy,
    };
    const encryptionContainerToDelete = (
      await mainDatabase.containers.createIfNotExists(containerDef)
    ).container;
    await encryptionContainerToDelete.initializeEncryption();
    await testCreateItem(encryptionContainerToDelete);

    const otherClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    const otherDatabase = otherClient.database(mainDatabase.id);
    const otherEncryptionContainer = otherDatabase.container(encryptionContainerToDelete.id);
    await testCreateItem(otherEncryptionContainer);

    // Client 1 Deletes the Database and  Container referenced in Client 2 and Recreate with different policy
    // delete database and recreate with same key name
    await mainDatabase.delete();
    mainDatabase = (await mainCLient.databases.createIfNotExists({ id: "databaseToBeDeleted" }))
      .database;
    keyWrapMetadata = {
      type: testKeyVault,
      name: "myCek",
      value: "cmkpath4",
      algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
    };
    await mainDatabase.createClientEncryptionKey(
      keyWrapMetadata.name,
      EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
      keyWrapMetadata,
    );
    const newModifiedPaths = [
      "/sensitive_IntArray",
      "/sensitive_DateFormat",
      "/sensitive_BoolFormat",
    ].map((path) => ({
      path: path,
      clientEncryptionKeyId: "myCek",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    clientEncryptionPolicy = {
      includedPaths: newModifiedPaths,
    };
    containerDef = {
      id: encryptionContainerToDelete.id,
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: clientEncryptionPolicy,
    };
    await mainDatabase.containers.createIfNotExists(containerDef);

    try {
      await testCreateItem(encryptionContainerToDelete);
      assert.fail("create operation should fail");
    } catch (error) {
      error.message.includes(
        "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
      );
    }
    // retrying should succeed
    let testDoc = new TestDoc((await testCreateItem(encryptionContainerToDelete)).resource);

    // try from other container. should fail due to policy mismatch
    try {
      await verifyItemByRead(otherEncryptionContainer, testDoc);
      assert.fail("read operation should fail");
    } catch (error) {
      error.message.includes(
        "Operation has failed due to a possible mismatch in Client Encryption Policy configured on the container.",
      );
    }
    // retrying should succeed
    await verifyItemByRead(otherEncryptionContainer, testDoc);

    // create new container in other client.
    // The test basically validates if the new key created is referenced, Since the other client would have had the old key cached.
    // and here we would not hit the incorrect container rid issue.
    const newModifiedPath2 = {
      path: "/PK",
      clientEncryptionKeyId: "myCek",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    const otherEncryptionContainer2 = (
      await otherDatabase.containers.createIfNotExists({
        id: "otherContainer2",
        partitionKey: "/PK",
        clientEncryptionPolicy: {
          includedPaths: [newModifiedPath2],
          policyFormatVersion: 2,
        },
      })
    ).container;

    // create an item
    const newDoc = new TestDoc((await testCreateItem(otherEncryptionContainer2)).resource);
    const otherClient2 = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
        encryptionKeyTimeToLiveInSeconds: 120,
      },
    });
    const otherDatabase2 = otherClient2.database(mainDatabase.id);
    const otherEncryptionContainer3 = otherDatabase2.container(otherEncryptionContainer2.id);
    await verifyItemByRead(otherEncryptionContainer3, newDoc);

    // validate from other client that we indeed are using the key with metadata2
    const otherEncryptionContainerFromClient2 = otherDatabase2.container(
      encryptionContainerToDelete.id,
    );
    await verifyItemByRead(otherEncryptionContainerFromClient2, testDoc);

    // previous referenced container
    await testCreateItem(otherEncryptionContainer);

    await testCreateItem(otherEncryptionContainer);
    await verifyItemByRead(otherEncryptionContainer, testDoc);

    testDoc = new TestDoc((await testCreateItem(otherEncryptionContainer)).resource);

    // to be sure if it was indeed encrypted with the new key.
    await verifyItemByRead(encryptionContainerToDelete, testDoc);

    // validate if the right policy was used, by reading them all back
    await encryptionContainerToDelete.items.readAll().fetchAll();
    await otherEncryptionContainer.items.readAll().fetchAll();

    await mainCLient.database(mainDatabase.id).delete();

    mainCLient.dispose();
    otherClient.dispose();
    otherClient2.dispose();
  });

  it("encryption decrypt group by query result test", async () => {
    const partitionKey = randomUUID();
    const testDoc1 = new TestDoc((await testCreateItem(encryptionContainer)).resource);

    const query = new EncryptionQueryBuilder(
      `SELECT COUNT(c.id), c.PK FROM c WHERE c.PK = @PK GROUP BY c.PK`,
    );

    query.addParameter("@PK", partitionKey, "/PK");
    let iterator = await encryptionContainer.items.getEncryptionQueryIterator(query);
    while (iterator.hasMoreResults()) {
      const response = await iterator.fetchNext();
      assert.isNotNull(response.diagnostics);
    }

    const withEncryptedParameter = new EncryptionQueryBuilder(
      "SELECT COUNT(c.id), c.sensitive_IntFormat FROM c WHERE c.sensitive_IntFormat = @Sensitive_IntFormat GROUP BY c.sensitive_IntFormat",
    );

    withEncryptedParameter.addParameter(
      "@Sensitive_IntFormat",
      { value: testDoc1.sensitive_IntFormat, numberType: CosmosEncryptedNumberType.Integer },
      "/sensitive_IntFormat",
    );

    iterator = await encryptionContainer.items.getEncryptionQueryIterator(withEncryptedParameter);
    while (iterator.hasMoreResults()) {
      const response = await iterator.fetchNext();
      assert.isNotNull(response.diagnostics);
    }
  });

  it("should fail creating cep with duplicate path", async () => {
    // duplicate paths in policy
    const pathdup1 = {
      path: "/sensitive_StringFormat",
      clientEncryptionKeyId: "key2",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    const pathdup2 = {
      path: "/sensitive_StringFormat",
      clientEncryptionKeyId: "key2",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    const pathsWithDups = [pathdup1, pathdup2];
    const contDef = {
      id: "containerWithDups",
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: {
        includedPaths: pathsWithDups,
      },
    };
    try {
      await database.containers.create(contDef);
      assert.fail("ClientEncryptionPolicy creation should have failed");
    } catch (err) {
      assert.ok(
        err.message.includes(
          err.message,
          "Duplicate path found: /sensitive_StringFormat in client encryption policy.",
        ),
      );
    }
  });

  it("encryption decrypt query result multiple docs", async () => {
    const testDoc1 = new TestDoc((await testCreateItem(encryptionContainer)).resource);
    const testDoc2 = new TestDoc((await testCreateItem(encryptionContainer)).resource);

    let query = `SELECT * FROM c WHERE c.nonsensitive IN ('${testDoc1.nonsensitive}', '${testDoc2.nonsensitive}')`;

    let iterator = encryptionContainer.items.query(query);
    let response = await iterator.fetchAll();
    assert.ok(response.resources.length === 2);
    for (const doc of response.resources) {
      assert.ok(doc.id === testDoc1.id || doc.id === testDoc2.id);
    }
    query += " ORDER BY c._ts";
    iterator = encryptionContainer.items.query(query);
    response = await iterator.fetchAll();
    assert.ok(response.resources.length === 2);
  });

  it("query with COUNT on encrypted item", async () => {
    await testCreateItem(encryptionContainer);
    const query = { query: "SELECT VALUE COUNT(1) FROM c" };
    const iterator = encryptionContainer.items.query(query);
    const response = await iterator.fetchAll();
    assert.equal(response.resources[0], 1);
  });

  it("encryption hierarchical partition key test", async () => {
    const key1Paths = ["/sensitive_LongFormat", "/sensitive_NestedObjectFormatL1"].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    const containerDef = {
      id: "hierarchical_partition_container",
      partitionKey: {
        paths: [
          "/sensitive_StringFormat",
          "/sensitive_NestedObjectFormatL1/sensitive_NestedObjectFormatL2/sensitive_StringFormatL2",
        ],
        version: 2,
        kind: PartitionKeyKind.MultiHash,
      },
      clientEncryptionPolicy: {
        includedPaths: key1Paths,
        policyFormatVersion: 2,
      },
      throughput: 400,
    };
    const container = (await database.containers.create(containerDef)).container;
    await container.initializeEncryption();
    const testDoc = TestDoc.create();
    const createResponse = await container.items.create(testDoc);
    assert.equal(StatusCodes.Created, createResponse.statusCode);
    const testDocPartitionKey = [
      testDoc.sensitive_StringFormat,
      testDoc.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
        .sensitive_StringFormatL2,
    ];
    verifyExpectedDocResponse(testDoc, createResponse.resource);
    const readResponse = await container.item(testDoc.id, testDocPartitionKey).read();
    assert.equal(StatusCodes.Ok, readResponse.statusCode);
    verifyExpectedDocResponse(testDoc, readResponse.resource);
    let query = new EncryptionQueryBuilder("SELECT * FROM c");
    let iterator = await container.items.getEncryptionQueryIterator(query);
    let queryResponse = await iterator.fetchAll();
    assert.equal(queryResponse.resources.length, 1);
    verifyExpectedDocResponse(testDoc, queryResponse.resources[0]);
    query = new EncryptionQueryBuilder(
      "SELECT * FROM c WHERE c.sensitive_StringFormat= @sensitive_StringFormat",
    );
    query.addParameter(
      "@sensitive_StringFormat",
      testDoc.sensitive_StringFormat,
      "/sensitive_StringFormat",
    );
    iterator = await container.items.getEncryptionQueryIterator(query);
    queryResponse = await iterator.fetchAll();
    assert.equal(queryResponse.resources.length, 1);
    verifyExpectedDocResponse(testDoc, queryResponse.resources[0]);

    query = new EncryptionQueryBuilder(
      "SELECT * FROM c WHERE c.sensitive_LongFormat= @sensitive_LongFormat",
    );
    query.addParameter(
      "@sensitive_LongFormat",
      { value: testDoc.sensitive_LongFormat, numberType: CosmosEncryptedNumberType.Integer },
      "/sensitive_LongFormat",
    );
    iterator = await container.items.getEncryptionQueryIterator(query);
    queryResponse = await iterator.fetchAll();
    assert.equal(queryResponse.resources.length, 1);
    verifyExpectedDocResponse(testDoc, queryResponse.resources[0]);

    query = new EncryptionQueryBuilder(
      "SELECT * FROM c WHERE c.sensitive_NestedObjectFormatL1= @sensitive_NestedObjectFormatL1",
    );
    query.addParameter(
      "@sensitive_NestedObjectFormatL1",
      testDoc.sensitive_NestedObjectFormatL1,
      "/sensitive_NestedObjectFormatL1",
    );
    iterator = await container.items.getEncryptionQueryIterator(query);
    queryResponse = await iterator.fetchAll();
    assert.equal(queryResponse.resources.length, 1);
    verifyExpectedDocResponse(testDoc, queryResponse.resources[0]);
    await container.delete();
  });

  it("encryption hierarchical partition key test with executeBulkOperations", async () => {
    const key1Paths = ["/sensitive_LongFormat", "/sensitive_NestedObjectFormatL1"].map((path) => ({
      path: path,
      clientEncryptionKeyId: "key1",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    }));
    const containerDef = {
      id: "hierarchical_partition_container",
      partitionKey: {
        paths: [
          "/sensitive_StringFormat",
          "/sensitive_NestedObjectFormatL1/sensitive_NestedObjectFormatL2/sensitive_StringFormatL2",
        ],
        version: 2,
        kind: PartitionKeyKind.MultiHash,
      },
      clientEncryptionPolicy: {
        includedPaths: key1Paths,
        policyFormatVersion: 2,
      },
      throughput: 400,
    };
    const container = (await database.containers.create(containerDef)).container;
    await container.initializeEncryption();

    const docToCreate = TestDoc.create();

    const { resource: docToReplace } = await testCreateItem(container);
    docToReplace.nonsensitive = randomUUID();

    const { resource: docToUpsert } = await testCreateItem(container);
    docToUpsert.nonsensitive = randomUUID();

    // doc not created before
    const docToUpsert2 = TestDoc.create();

    const { resource: docToDelete } = await testCreateItem(container);

    const { resource: docToPatch } = await testCreateItem(container);
    docToPatch.nonsensitive = randomUUID();

    const patchOperation = {
      operations: [
        {
          op: PatchOperationType.replace,
          path: "/nonsensitive",
          value: docToPatch.nonsensitive,
        },
      ],
    };
    const operations = [
      {
        operationType: BulkOperationType.Create,
        partitionKey: [
          docToCreate.sensitive_StringFormat,
          docToCreate.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
        resourceBody: JSON.parse(JSON.stringify(docToCreate)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: [
          docToUpsert2.sensitive_StringFormat,
          docToUpsert2.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
        resourceBody: JSON.parse(JSON.stringify(docToUpsert2)),
      },
      {
        operationType: BulkOperationType.Replace,
        partitionKey: [
          docToReplace.sensitive_StringFormat,
          docToReplace.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
        id: docToReplace.id,
        resourceBody: JSON.parse(JSON.stringify(docToReplace)),
      },
      {
        operationType: BulkOperationType.Upsert,
        partitionKey: [
          docToUpsert.sensitive_StringFormat,
          docToUpsert.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
        resourceBody: JSON.parse(JSON.stringify(docToUpsert)),
      },
      {
        operationType: BulkOperationType.Delete,
        id: docToDelete.id,
        partitionKey: [
          docToDelete.sensitive_StringFormat,
          docToDelete.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
      },
      {
        operationType: BulkOperationType.Patch,
        partitionKey: [
          docToPatch.sensitive_StringFormat,
          docToPatch.sensitive_NestedObjectFormatL1.sensitive_NestedObjectFormatL2
            .sensitive_StringFormatL2,
        ],
        id: docToPatch.id,
        resourceBody: patchOperation,
      },
    ];

    const result = await container.items.executeBulkOperations(operations);
    result.forEach((r) => {
      assert.isNotNull(r.response.diagnostics);
      assert.isNotNull(r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics);
      const encryptContent =
        r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics.encryptContent;
      const decryptContent =
        r.response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics.decryptContent;
      assert.isNotNull(encryptContent);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsStartTime]);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount]);
      assert.isNotNull(encryptContent[Constants.Encryption.DiagnosticsDuration]);
      assert.isNotNull(decryptContent);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsStartTime]);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount]);
      assert.isNotNull(decryptContent[Constants.Encryption.DiagnosticsDuration]);
    });
    // Create
    assert.equal(StatusCodes.Created, result[0].response.statusCode);
    verifyExpectedDocResponse(docToCreate, result[0].response.resourceBody);
    // 2 encrypted field + 1 partition key for create and upsert encryption
    assert.equal(
      result[0].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      3,
    );
    assert.equal(
      result[0].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      2,
    );

    // Upsert new item
    assert.equal(StatusCodes.Created, result[1].response.statusCode);
    verifyExpectedDocResponse(docToUpsert2, result[1].response.resourceBody);
    assert.equal(
      result[1].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      3,
    );
    assert.equal(
      result[1].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      2,
    );

    // Replace
    assert.equal(StatusCodes.Ok, result[2].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToReplace), result[2].response.resourceBody);
    // 2 encrypted field + 1 partition key  for replace encryption
    assert.equal(
      result[2].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      3,
    );
    assert.equal(
      result[2].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      2,
    );

    // Upsert existing item
    assert.equal(StatusCodes.Ok, result[3].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToUpsert), result[3].response.resourceBody);
    assert.equal(
      result[3].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      3,
    );
    assert.equal(
      result[3].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      2,
    );

    // Delete
    assert.equal(StatusCodes.NoContent, result[4].response.statusCode);
    assert.isNotObject(result[4].response.resourceBody);
    // 1 partition key for delete encryption
    assert.equal(
      result[4].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      1,
    );

    // Patch
    assert.equal(StatusCodes.Ok, result[5].response.statusCode);
    verifyExpectedDocResponse(new TestDoc(docToPatch), result[5].response.resourceBody);
    // 1 partition key
    assert.equal(
      result[5].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .encryptContent[Constants.Encryption.DiagnosticsPropertiesEncryptedCount],
      1,
    );
    assert.equal(
      result[5].response.diagnostics.clientSideRequestStatistics.encryptionDiagnostics
        .decryptContent[Constants.Encryption.DiagnosticsPropertiesDecryptedCount],
      2,
    );
    await container.delete();
  });

  it("encryption resource token auth restricted", async () => {
    const { resource: restrictedUserDef } = await database.users.create({ id: randomUUID() });
    const restrictedUser = database.user(restrictedUserDef.id);
    const { resource: restrictedUserPermission } = await restrictedUser.permissions.create({
      id: randomUUID(),
      permissionMode: PermissionMode.All,
      resource: encryptionContainer.url,
    });
    assert((restrictedUserPermission as any)._token !== undefined, "permission token is invalid");
    const resourceTokens: any = {};
    resourceTokens[database.id] = (restrictedUserPermission as any)._token;
    const restrictedClient = new CosmosClient({
      endpoint: endpoint,
      resourceTokens: resourceTokens,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: new MockKeyVaultEncryptionKeyResolver(),
      },
    });

    const datbaseForRestrictedUser = restrictedClient.database(database.id);

    try {
      const cekId = "testingCekId";
      const metadata: EncryptionKeyWrapMetadata = {
        type: testKeyVault,
        name: cekId,
        value: "cmkpath5",
        algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
      };
      await datbaseForRestrictedUser.createClientEncryptionKey(
        cekId,
        EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
        metadata,
      );
      assert.fail("CreateClientEncryptionKey should have failed due to restrictions");
    } catch (err) {
      assert.equal(StatusCodes.Forbidden, err.code);
    }

    try {
      const cekId = "testingCekId";
      const metadata: EncryptionKeyWrapMetadata = {
        type: testKeyVault,
        name: cekId,
        value: "cmkpath5" + "updated",
        algorithm: KeyEncryptionAlgorithm.RSA_OAEP,
      };
      await datbaseForRestrictedUser.rewrapClientEncryptionKey(cekId, metadata);
      assert.fail("RewrapClientEncryptionKey should have failed due to restrictions");
    } catch (err) {
      assert.equal(StatusCodes.Forbidden, err.code);
    }
    restrictedClient.dispose();
  });

  it("key encryption key revoke test", async () => {
    const keyEncryptionKeyResolver = new MockKeyVaultEncryptionKeyResolver();
    const encryptionTestClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: keyEncryptionKeyResolver,
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    const testdatabase = encryptionTestClient.database(database.id);

    // Once a Dek gets cached and the Kek is revoked, calls to unwrap/wrap keys would fail since KEK is revoked.
    // The Dek should be rewrapped if the KEK is revoked.
    // When an access to KeyVault fails, the Dek is fetched from the backend (force refresh to update the stale DEK) and cache is updated.
    const pathWithRevokedKek = {
      path: "/sensitive_NestedObjectFormatL1",
      clientEncryptionKeyId: "keyWithRevokedKek",
      encryptionType: EncryptionType.DETERMINISTIC,
      encryptionAlgorithm: EncryptionAlgorithm.AEAD_AES_256_CBC_HMAC_SHA256,
    };
    const paths = [pathWithRevokedKek];
    const clientEncryptionPolicyWithRevokedKek = {
      includedPaths: paths,
    };
    const containerProperties = {
      id: randomUUID(),
      partitionKey: {
        paths: ["/PK"],
      },
      clientEncryptionPolicy: clientEncryptionPolicyWithRevokedKek,
    };
    const testcontainer = (await testdatabase.containers.create(containerProperties)).container;
    const testDoc1 = new TestDoc((await testCreateItem(testcontainer)).resource);
    keyEncryptionKeyResolver.revokeAccessSet = true;
    // Try creating it and it should fail as it has been revoked.
    try {
      await testCreateItem(testcontainer);
      assert.fail("Create Item should have failed.");
    } catch (err) {
      assert.ok(
        err.message.includes(
          "needs to be rewrapped with a valid Key Encryption Key using rewrapClientEncryptionKey",
        ),
      );
    }
    // testing query read fail due to revoked access.
    const query = new EncryptionQueryBuilder("SELECT * FROM c");
    try {
      await validateQueryResults(testcontainer, query, [testDoc1]);
      assert.fail("Query should have failed.");
    } catch (error) {
      assert.ok(
        error.message.includes(
          "needs to be rewrapped with a valid Key Encryption Key using rewrapClientEncryptionKey",
        ),
      );
    }
    // Revoke access is set to false, so the next call should succeed after rewrap.
    keyEncryptionKeyResolver.revokeAccessSet = false;
    await testdatabase.rewrapClientEncryptionKey("keyWithRevokedKek", metadata2);
    await testCreateItem(testcontainer);
    testKeyEncryptionKeyResolver.revokeAccessSet = false;
    encryptionTestClient.dispose();
  });

  it("encryption diagnostics test", async () => {
    const createResponse = await testCreateItem(encryptionContainer);
    verifyDiagnostics(createResponse.diagnostics, true, true, 12, 12);

    const testDoc = new TestDoc(createResponse.resource);

    const readResponse = await encryptionContainer.item(testDoc.id, testDoc.PK).read();
    verifyDiagnostics(readResponse.diagnostics, false, true, undefined, 12);

    const testDoc1 = TestDoc.create();
    testDoc1.nonsensitive = randomUUID();
    testDoc1.sensitive_StringFormat = randomUUID();
    const upsertResponse = await testUpsertItem(encryptionContainer, testDoc1, StatusCodes.Created);
    const upsertedDoc = new TestDoc(upsertResponse.resource);
    verifyDiagnostics(upsertResponse.diagnostics, true, true, 12, 12);

    upsertedDoc.nonsensitive = randomUUID();
    upsertedDoc.sensitive_StringFormat = randomUUID();

    const replaceResponse = await testReplaceItem(encryptionContainer, upsertedDoc);
    verifyDiagnostics(replaceResponse.diagnostics, true, true, 14, 12);
  });

  it.skipIf(skipTestForSignOff)("encryption delete all items in a partition key", async () => {
    const testDoc1 = new TestDoc((await testCreateItem(encryptionContainer, "pk1")).resource);
    const testDoc2 = new TestDoc((await testCreateItem(encryptionContainer, "pk2")).resource);
    const testDoc3 = new TestDoc((await testCreateItem(encryptionContainer, "pk1")).resource);
    const testDoc4 = new TestDoc((await testCreateItem(encryptionContainer, "pk2")).resource);

    await encryptionContainer.deleteAllItemsForPartitionKey("pk1");

    const res1 = await encryptionContainer.item(testDoc1.id, "pk1").read();
    assert(res1.statusCode === StatusCodes.NotFound);

    const res2 = await encryptionContainer.item(testDoc2.id, "pk2").read();
    assert(res2.statusCode === StatusCodes.Ok);

    const res3 = await encryptionContainer.item(testDoc3.id, "pk1").read();
    assert(res3.statusCode === StatusCodes.NotFound);

    const res4 = await encryptionContainer.item(testDoc4.id, "pk2").read();
    assert(res4.statusCode === StatusCodes.Ok);
  });

  it("validate caching of protected dek", async () => {
    // no caching
    const testKeyResolver1 = new MockKeyVaultEncryptionKeyResolver();
    let newClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: testKeyResolver1,
        encryptionKeyTimeToLiveInSeconds: 0,
      },
    });
    let newDatabase = newClient.database(database.id);
    let newContainer = newDatabase.container(encryptionContainer.id);
    for (let i = 0; i < 2; i++) {
      await testCreateItem(newContainer);
    }
    let unwrapCount = testKeyResolver1.unwrapKeyCallsCount["cmkpath1"];
    assert.ok(unwrapCount > 1);
    const testKeyResolver2 = new MockKeyVaultEncryptionKeyResolver();
    // default cache ttl is 2 hrs
    newClient.dispose();
    newClient = new CosmosClient({
      endpoint: endpoint,
      key: masterKey,
      clientEncryptionOptions: {
        keyEncryptionKeyResolver: testKeyResolver2,
      },
    });
    newDatabase = newClient.database(database.id);
    newContainer = newDatabase.container(encryptionContainer.id);
    for (let i = 0; i < 2; i++) {
      await testCreateItem(newContainer);
    }
    unwrapCount = testKeyResolver2.unwrapKeyCallsCount["cmkpath1"];
    // expecting just one unwrap
    assert.ok(unwrapCount === 1);
    newClient.dispose();
  });

  afterAll(async () => {
    await removeAllDatabases();
    encryptionClient.dispose();
  });
});
