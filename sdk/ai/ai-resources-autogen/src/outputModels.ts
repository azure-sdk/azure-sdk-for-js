// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

/** Index resource Definition */
export interface IndexOutput {
  /** Fully qualified resource Id: azureml://workspace/{workspaceName}/indexes/{name}/versions/{version} of the index. */
  readonly id: string;
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Uri. Should work across storage types and auth scenarios. */
  storageUri: string;
}

/** Metadata pertaining to creation and last modification of the resource. */
export interface SystemDataOutput {
  /** The timestamp the resource was created at. */
  readonly createdAt?: string;
  /** The identity that created the resource. */
  readonly createdBy?: string;
  /** The identity type that created the resource. */
  readonly createdByType?: string;
  /** The timestamp of resource last modification (UTC) */
  readonly lastModifiedAt?: string;
}

/** Paged collection of IndexVersion items. */
export interface PagedIndexOutput {
  /** The list of Indexes. */
  value: Array<IndexOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}

/** Next version definition. */
export interface VersionInfoOutput {
  /** Next version as defined by the server. The server keeps track of all versions that are string-representations of integers. If one exists, the nextVersion will be a string representation of the highest integer value + 1. Otherwise, the nextVersion will default to '1'. */
  nextVersion?: number;
  /** Current latest version of the resource. */
  latestVersion: string;
}

/** Prompt resource definition */
export interface PromptOutput {
  /** Fully qualified resource Id: azureml://workspace/{workspaceName}/indexes/{name}/versions/{version} of the index. */
  readonly id: string;
  /** Update stage to 'Archive' to archive the asset. Default is Development, which means the asset is under development. */
  stage?: string;
  /** Description information of the asset. */
  description?: string;
  /** Metadata containing createdBy and modifiedBy information. */
  readonly systemData?: SystemDataOutput;
  /** Asset's tags. Unlike properties, tags are fully mutable. */
  tags?: Record<string, string>;
  /** Asset's properties. Unlike tags, properties are add-only. Once added, a property cannot be removed. */
  properties?: Record<string, string>;
  /** Default workspace blob storage Ui. Should work across storage types and auth scenarios. */
  dataUri: string;
  /** Relative path of the prompt data file at the dataUri location */
  templatePath: string;
}

/** Paged collection of PromptVersion items */
export interface PagedPromptOutput {
  /** The list of Prompts. */
  value: Array<PromptOutput>;
  /** The link to the next page of items */
  nextLink?: string;
}
