// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { AvroReader, AvroParseOptions } from "@azure/storage-internal-avro";
import type { BlobChangeFeedEvent } from "./models/BlobChangeFeedEvent.js";
import type { CommonOptions } from "@azure/storage-blob";
import type { AbortSignalLike } from "@azure/abort-controller";
import { rawEventToBlobChangeFeedEvent } from "./utils/utils.common.js";

/**
 * Options to configure {@link Chunk.getChange} operation.
 */
export interface ChunkGetChangeOptions extends CommonOptions {
  /**
   * An implementation of the `AbortSignalLike` interface to signal the request to cancel the operation.
   * For example, use the &commat;azure/abort-controller to create an `AbortSignal`.
   */
  abortSignal?: AbortSignalLike;
}

export class Chunk {
  private readonly avroReader: AvroReader;
  private readonly iter: AsyncIterableIterator<Record<string, any> | null>;

  private _blockOffset: number;
  public get blockOffset(): number {
    return this._blockOffset;
  }

  private _eventIndex: number;
  public get eventIndex(): number {
    return this._eventIndex;
  }

  constructor(
    avroReader: AvroReader,
    blockOffset: number,
    eventIndex: number,
    public readonly chunkPath: string,
    avroOptions: AvroParseOptions = {},
  ) {
    this.avroReader = avroReader;
    this._blockOffset = blockOffset;
    this._eventIndex = eventIndex;

    this.iter = this.avroReader.parseObjects(avroOptions);
  }

  public hasNext(): boolean {
    return this.avroReader.hasNext();
  }

  public async getChange(): Promise<BlobChangeFeedEvent | undefined> {
    if (!this.hasNext()) {
      return undefined;
    }

    const next = await this.iter.next();
    this._eventIndex = this.avroReader.objectIndex;
    this._blockOffset = this.avroReader.blockOffset;
    if (next.done) {
      return undefined;
    } else {
      const eventRaw = next.value;
      if (eventRaw === null) {
        return undefined;
      }

      return rawEventToBlobChangeFeedEvent(eventRaw);
    }
  }
}
