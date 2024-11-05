// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Index resource Definition */
export interface Index {
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Uri. Should work across storage types and auth scenarios. */
  storageUri: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemData {}

/** Prompt resource definition */
export interface Prompt {
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Ui. Should work across storage types and auth scenarios. */
  dataUri: string;
  /** Relative path of the prompt data file at the dataUri location */
  templatePath: string;
}
