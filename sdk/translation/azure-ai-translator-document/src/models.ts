// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Document Translate Request / Content. */
export interface DocumentTranslateContent {
  /** Document to be translated in the form */
  document: string;
  /** Glossary / translation memory will be used during translation in the form. */
  glossary?: string[];
}
