// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  listSchemaGroups,
  listSchemaVersions,
  getSchemaById,
  getSchemaByVersion,
  getSchemaPropertiesByContent,
  registerSchema,
} from "./operations.js";
export {
  createSchemaRegistry,
  SchemaRegistryContext,
  SchemaRegistryClientOptionalParams,
} from "./schemaRegistryContext.js";
