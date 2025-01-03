// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import { RsaEncryptionAlgorithm } from "@azure/keyvault-keys";
import { randomBytes } from "node:crypto";
import { CryptographyTest } from "./cryptography.spec.js";

export class UnwrapKeyTest extends CryptographyTest {
  encryptedKey?: Uint8Array;
  private wrapAlgorithm: RsaEncryptionAlgorithm = "RSA-OAEP-256";

  async setup() {
    const wrapResult = await CryptographyTest.cryptoClient!.wrapKey(
      this.wrapAlgorithm,
      randomBytes(32),
    );
    this.encryptedKey = wrapResult.result;
  }

  async run(): Promise<void> {
    await CryptographyTest.cryptoClient!.unwrapKey(this.wrapAlgorithm, this.encryptedKey!);
  }
}
