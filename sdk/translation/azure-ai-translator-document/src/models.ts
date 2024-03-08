// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Document Translate Request / Content. */
export interface DocumentTranslateContent {
  /**
   * Document to be translated in the form
   *
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  document:
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File;
  /**
   * Glossary / translation memory will be used during translation in the form.
   *
   * NOTE: The following type 'File' is part of WebAPI and available since Node 20. If your Node version is lower than Node 20.
   * You could leverage our helpers 'createFile' or 'createFileFromStream' to create a File object. They could help you specify filename, type, and others.
   */
  glossary?: (
    | string
    | Uint8Array
    | ReadableStream<Uint8Array>
    | NodeJS.ReadableStream
    | File
  )[];
}
