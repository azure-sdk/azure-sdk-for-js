// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { EncryptionSettings } from "./EncryptionSettings.js";
import type { EncryptionSettingForProperty } from "./EncryptionSettingForProperty.js";
import type { AeadAes256CbcHmacSha256Algorithm } from "./AeadAes256CbcHmacSha256Algorithm/index.js";
import type { ContainerDefinition, Database, ItemDefinition } from "../client/index.js";
import type { PartitionKeyInternal } from "../documents/index.js";
import type { TypeMarker } from "./enums/TypeMarker.js";
import type { ClientContext } from "../ClientContext.js";
import type { ClientEncryptionKeyRequest } from "./ClientEncryptionKey/index.js";
import type { ClientEncryptionKeyProperties } from "./ClientEncryptionKey/index.js";
import type { DiagnosticNodeInternal } from "../diagnostics/DiagnosticNodeInternal.js";
import {
  Constants,
  ResourceType,
  StatusCodes,
  createDeserializer,
  createSerializer,
  extractPath,
} from "../common/index.js";
import type { RequestOptions } from "../request/index.js";
import { ErrorResponse } from "../request/index.js";
import { withDiagnostics } from "../utils/diagnostics.js";
import type { EncryptionManager } from "./EncryptionManager.js";
import type { JSONValue } from "../queryExecutionContext/index.js";

export class EncryptionProcessor {
  constructor(
    private readonly containerId: string,
    public containerRid: string,
    private readonly database: Database,
    private readonly clientContext: ClientContext,
    private encryptionManager: EncryptionManager,
  ) {}

  async encrypt<T extends ItemDefinition>(
    body: T,
  ): Promise<{ body: T; propertiesEncryptedCount: number }> {
    if (!body) {
      throw new ErrorResponse("Input body is null or undefined.");
    }
    let propertiesEncryptedCount = 0;
    const encryptionSettings = await this.getEncryptionSetting();
    if (!encryptionSettings) return { body, propertiesEncryptedCount };
    for (const pathToEncrypt of encryptionSettings.pathsToEncrypt) {
      const propertyName = pathToEncrypt.slice(1);
      if (!Object.prototype.hasOwnProperty.call(body, propertyName)) {
        continue;
      }

      const settingForProperty = encryptionSettings.getEncryptionSettingForProperty(pathToEncrypt);
      if (!settingForProperty) {
        throw new ErrorResponse("Invalid Encryption Setting for the Property: " + propertyName);
      }
      body[propertyName as keyof T] = await this.encryptToken(
        body[propertyName],
        settingForProperty,
        propertyName === "id",
      );
      propertiesEncryptedCount++;
    }
    return { body, propertiesEncryptedCount };
  }

  async isPathEncrypted(path: string): Promise<boolean> {
    path = extractPath(path);
    const encryptionSettings = await this.getEncryptionSetting();
    const settingForProperty = encryptionSettings.getEncryptionSettingForProperty(path);
    if (!settingForProperty) return false;
    return true;
  }

  async encryptProperty(path: string, value: JSONValue): Promise<any> {
    path = extractPath(path);
    const encryptionSettings = await this.getEncryptionSetting();
    if (!encryptionSettings) return value;
    const settingForProperty = encryptionSettings.getEncryptionSettingForProperty(path);
    if (!settingForProperty) {
      return value;
    }

    value = await this.encryptToken(value, settingForProperty, path === "/id");
    return value;
  }

  async getEncryptedPartitionKeyValue(
    partitionKeyList: PartitionKeyInternal,
  ): Promise<{ partitionKeyList: PartitionKeyInternal; encryptedCount: number }> {
    const encryptionSettings = await this.getEncryptionSetting();
    let encryptedCount = 0;
    if (!encryptionSettings) return { partitionKeyList, encryptedCount };
    const partitionKeyPaths = encryptionSettings.partitionKeyPaths;
    for (let i = 0; i < partitionKeyPaths.length; i++) {
      const partitionKeyPath = extractPath(partitionKeyPaths[i]);
      if (encryptionSettings.pathsToEncrypt.includes(partitionKeyPath)) {
        const settingForProperty =
          encryptionSettings.getEncryptionSettingForProperty(partitionKeyPath);
        partitionKeyList[i] = await this.encryptToken(
          partitionKeyList[i],
          settingForProperty,
          partitionKeyPath === "/id",
        );
        encryptedCount++;
      }
    }
    return { partitionKeyList, encryptedCount };
  }

  async getEncryptedUrl(id: string): Promise<string> {
    const parts = id.split("/");
    const lastPart = parts[parts.length - 1];
    const encryptedLastPart = await this.getEncryptedId(lastPart);
    parts[parts.length - 1] = encryptedLastPart;
    return parts.join("/");
  }

  async getEncryptedId(id: string): Promise<string> {
    const encryptionSettings = await this.getEncryptionSetting();
    if (!encryptionSettings) return id;
    const settingForProperty = encryptionSettings.getEncryptionSettingForProperty("/id");

    if (!settingForProperty) return id;
    id = await this.encryptToken(id, settingForProperty, true);
    return id;
  }

  async encryptQueryParameter(
    path: string,
    value: JSONValue,
    isValueId: boolean,
    type?: TypeMarker,
  ): Promise<JSONValue> {
    if (value === null) {
      return value;
    }
    path = extractPath(path);
    const encryptionSettings = await this.getEncryptionSetting();
    if (!encryptionSettings) return value;
    const settingForProperty = encryptionSettings.getEncryptionSettingForProperty(path);
    if (!settingForProperty) {
      return value;
    }
    return this.encryptToken(value, settingForProperty, isValueId, type);
  }

  private async encryptToken(
    valueToEncrypt: any,
    propertySetting: EncryptionSettingForProperty,
    isValueId: boolean,
    type?: TypeMarker,
  ): Promise<any> {
    if (typeof valueToEncrypt === "object" && valueToEncrypt !== null) {
      for (const key in valueToEncrypt) {
        if (Object.prototype.hasOwnProperty.call(valueToEncrypt, key)) {
          valueToEncrypt[key] = await this.encryptToken(
            valueToEncrypt[key],
            propertySetting,
            isValueId,
            type,
          );
        }
      }
    } else if (Array.isArray(type)) {
      for (let i = 0; i < valueToEncrypt.length; i++) {
        valueToEncrypt[i] = await this.encryptToken(
          valueToEncrypt[i],
          propertySetting,
          isValueId,
          type,
        );
      }
    } else {
      valueToEncrypt = await this.serializeAndEncryptValue(
        valueToEncrypt,
        propertySetting,
        isValueId,
        type,
      );
    }
    return valueToEncrypt;
  }

  private async serializeAndEncryptValue(
    valueToEncrypt: any,
    propertySetting: EncryptionSettingForProperty,
    isValueId: boolean,
    type?: TypeMarker,
  ): Promise<string> {
    if (valueToEncrypt === null) {
      return valueToEncrypt;
    }
    const [typeMarker, serializer] = createSerializer(valueToEncrypt, type);
    const plainText = serializer.serialize(valueToEncrypt);
    const encryptionAlgorithm = await this.buildEncryptionAlgorithm(propertySetting);
    const cipherText = encryptionAlgorithm.encrypt(plainText);
    if (isValueId) {
      if (typeof valueToEncrypt !== "string") {
        throw new ErrorResponse("The id should be of string type.");
      }
    }

    const cipherTextWithTypeMarker = Buffer.alloc(cipherText.length + 1);
    cipherTextWithTypeMarker[0] = typeMarker;
    cipherText.forEach((value, index) => {
      cipherTextWithTypeMarker[index + 1] = value;
    });
    let encryptedValue = Buffer.from(cipherTextWithTypeMarker).toString("base64");
    if (isValueId) {
      encryptedValue = encryptedValue.replace(/\//g, "_").replace(/\+/g, "-");
    }
    return encryptedValue;
  }

  async decrypt<T extends ItemDefinition>(
    body: T,
  ): Promise<{ body: T; propertiesDecryptedCount: number }> {
    let propertiesDecryptedCount = 0;
    if (body == null) {
      return { body, propertiesDecryptedCount };
    }
    const encryptionSettings = await this.getEncryptionSetting();
    if (!encryptionSettings) return { body, propertiesDecryptedCount };
    for (const pathToEncrypt of encryptionSettings.pathsToEncrypt) {
      const propertyName = pathToEncrypt.slice(1);
      if (!Object.prototype.hasOwnProperty.call(body, propertyName)) {
        continue;
      }
      const settingForProperty = encryptionSettings.getEncryptionSettingForProperty(pathToEncrypt);
      if (settingForProperty == null) {
        throw new ErrorResponse("Invalid Encryption Setting for the Path: " + pathToEncrypt);
      }

      body[propertyName as keyof T] = await this.decryptToken(
        body[propertyName],
        settingForProperty,
        propertyName === "id",
      );
      propertiesDecryptedCount++;
    }
    return { body, propertiesDecryptedCount };
  }

  private async decryptToken(
    valueToDecrypt: any,
    propertySetting: EncryptionSettingForProperty,
    isValueId: boolean,
  ): Promise<any> {
    if (typeof valueToDecrypt === "object") {
      for (const key in valueToDecrypt) {
        if (Object.prototype.hasOwnProperty.call(valueToDecrypt, key)) {
          valueToDecrypt[key] = await this.decryptToken(
            valueToDecrypt[key],
            propertySetting,
            isValueId,
          );
        }
      }
    } else if (Array.isArray(valueToDecrypt)) {
      for (let i = 0; i < valueToDecrypt.length; i++) {
        valueToDecrypt[i] = await this.decryptToken(valueToDecrypt[i], propertySetting, isValueId);
      }
    } else {
      valueToDecrypt = await this.deserializeAndDecryptValue(
        valueToDecrypt,
        propertySetting,
        isValueId,
      );
    }
    return valueToDecrypt;
  }

  private async deserializeAndDecryptValue(
    valueToDecrypt: string,
    propertySetting: EncryptionSettingForProperty,
    isValueId: boolean,
  ): Promise<any> {
    if (isValueId) {
      valueToDecrypt = valueToDecrypt.replace(/_/g, "/").replace(/-/g, "+");
    }
    const cipherTextWithTypeMarker = Buffer.from(valueToDecrypt, "base64");
    if (cipherTextWithTypeMarker === null) {
      return null;
    }

    let cipherText = Buffer.alloc(cipherTextWithTypeMarker.length - 1);
    cipherText = Buffer.from(cipherTextWithTypeMarker.slice(1));

    const encryptionAlgorithm = await this.buildEncryptionAlgorithm(propertySetting);
    const plainText = encryptionAlgorithm.decrypt(cipherText);
    if (plainText === null) {
      throw new ErrorResponse("returned null plain text");
    }

    const serializer = createDeserializer(cipherTextWithTypeMarker[0] as TypeMarker);
    return serializer.deserialize(plainText);
  }

  async getEncryptionSetting(forceRefresh?: boolean): Promise<EncryptionSettings> {
    const key = this.database._rid + "/" + this.containerRid;
    const encryptionSetting = this.encryptionManager.encryptionSettingsCache.get(key);
    if (forceRefresh || !encryptionSetting) {
      return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
        const path = `/dbs/${this.database.id}/colls/${this.containerId}`;
        const id = `dbs/${this.database.id}/colls/${this.containerId}`;
        const response = await this.clientContext.read<ContainerDefinition>({
          path,
          resourceType: ResourceType.container,
          resourceId: id,
          diagnosticNode,
        });
        if (!response || !response.result) {
          throw new ErrorResponse("Failed to fetch container definition");
        }
        const containerRid = response.result._rid;
        const clientEncryptionPolicy = response.result.clientEncryptionPolicy;
        const partitionKeyPaths = response.result.partitionKey.paths;
        const updatedEncryptionSetting =
          await this.encryptionManager.encryptionSettingsCache.create(
            key,
            containerRid,
            partitionKeyPaths,
            clientEncryptionPolicy,
          );
        return updatedEncryptionSetting;
      }, this.clientContext);
    }
    return encryptionSetting;
  }

  private async buildEncryptionAlgorithm(
    propertySetting: EncryptionSettingForProperty,
  ): Promise<AeadAes256CbcHmacSha256Algorithm> {
    const key = `${this.database._rid}/${propertySetting.encryptionKeyId}`;
    let clientEncryptionKeyProperties =
      this.encryptionManager.clientEncryptionKeyPropertiesCache.get(key);
    if (!clientEncryptionKeyProperties) {
      clientEncryptionKeyProperties = await this.fetchClientEncryptionKey(
        propertySetting.encryptionKeyId,
      );
    }
    try {
      // the buildEncryptionAlgorithm will build ProtectedDEK which calls unwrapKey  using the masterKey configured in
      // KeyEncryptionKey(created before creating Protected DEK)
      // we get wrapped key and key wrap metadata info from clientEncryptionKeyProperties.
      return await propertySetting.buildEncryptionAlgorithm(
        clientEncryptionKeyProperties,
        this.encryptionManager,
      );
    } catch (err) {
      if (err.statusCode !== StatusCodes.Forbidden) throw err;
      // if access to key is revoked, and in case there's stale value in cache
      clientEncryptionKeyProperties = await this.fetchClientEncryptionKey(
        propertySetting.encryptionKeyId,
      );

      try {
        // This will succeed after if client has rewrapped CEK and gateway cache has updated value.
        return await propertySetting.buildEncryptionAlgorithm(
          clientEncryptionKeyProperties,
          this.encryptionManager,
          true,
        );
      } catch (retryErr) {
        if (retryErr.statusCode !== StatusCodes.Forbidden) throw retryErr;

        // in case there's stale value in gateway cache. get fresh value from backend
        clientEncryptionKeyProperties = await this.fetchClientEncryptionKey(
          propertySetting.encryptionKeyId,
          clientEncryptionKeyProperties.etag,
        );
        return propertySetting.buildEncryptionAlgorithm(
          clientEncryptionKeyProperties,
          this.encryptionManager,
        );
      }
    }
  }

  private async fetchClientEncryptionKey(
    cekId: string,
    cekEtag?: string,
  ): Promise<ClientEncryptionKeyProperties> {
    return withDiagnostics(async (diagnosticNode: DiagnosticNodeInternal) => {
      const path = `/dbs/${this.database.id}/clientencryptionkeys/${cekId}`;
      const id = `dbs/${this.database.id}/clientencryptionkeys/${cekId}`;
      const options: RequestOptions = {};
      if (cekEtag) {
        options.accessCondition = {
          type: Constants.HttpHeaders.IfNoneMatch,
          condition: cekEtag,
        };
      }
      options.databaseRid = this.database._rid;
      const response = await this.clientContext.read<ClientEncryptionKeyRequest>({
        path: path,
        resourceType: ResourceType.clientencryptionkey,
        resourceId: id,
        options: options,
        diagnosticNode,
      });
      if (!response) {
        throw new ErrorResponse(`Failed to fetch client encryption key ${cekId}`);
      }
      if (response.code === StatusCodes.NotModified) {
        throw new ErrorResponse(
          `The Client Encryption Key with key id: ${cekId} on database: ${this.database.id} needs to be rewrapped with a valid Key Encryption Key using rewrapClientEncryptionKey. The Key Encryption Key used to wrap the Client Encryption Key has been revoked`,
        );
      }
      const clientEncryptionKeyProperties: ClientEncryptionKeyProperties = {
        id: response.result.id,
        encryptionAlgorithm: response.result.encryptionAlgorithm,
        wrappedDataEncryptionKey: new Uint8Array(
          Buffer.from(response.result.wrappedDataEncryptionKey, "base64"),
        ),
        encryptionKeyWrapMetadata: response.result.keyWrapMetadata,
        etag: response.result._etag,
      };
      const key = this.database._rid + "/" + cekId;
      this.encryptionManager.clientEncryptionKeyPropertiesCache.set(
        key,
        clientEncryptionKeyProperties,
      );
      return clientEncryptionKeyProperties;
    }, this.clientContext);
  }
}
