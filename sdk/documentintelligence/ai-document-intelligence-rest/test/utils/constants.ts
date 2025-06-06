// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

export const EnvVarKeys = {
  SUBSCRIPTION_ID: "SUBSCRIPTION_ID",
  RESOURCE_GROUP: "RESOURCE_GROUP",
  COGNITIVE_ACCOUNT_NAME: "COGNITIVE_ACCOUNT_NAME",
  STORAGE_ACCOUNT_NAME: "STORAGE_ACCOUNT_NAME",
  STORAGE_RESOURCE_GROUP: "STORAGE_RESOURCE_GROUP",
  CONTAINER_TRAINING_DATA: "CONTAINER_TRAINING_DATA",
  CONTAINER_BATCH_TRAINING_DATA: "CONTAINER_BATCH_TRAINING_DATA",
  CONTAINER_BATCH_TRAINING_RESULT: "CONTAINER_BATCH_TRAINING_RESULT",
  CONTAINER_SELECTION_MARK_TRAINING_DATA: "CONTAINER_SELECTION_MARK_TRAINING_DATA",
  CONTAINER_TESTING_DATA: "CONTAINER_TESTING_DATA",
  CONTAINER_MULTI_PAGE_TESTING_DATA: "CONTAINER_MULTI_PAGE_TESTING_DATA",
  CONTAINER_CLASSIFIER_TRAINING_DATA: "CONTAINER_CLASSIFIER_TRAINING_DATA",
  ENDPOINT: "DOCUMENT_INTELLIGENCE_ENDPOINT",
  KEY: "DOCUMENT_INTELLIGENCE_API_KEY",
  DISABLE_LOCAL_AUTH: "DISABLE_LOCAL_AUTH",
  TRAINING_CONTAINER_SAS_URL: "DOCUMENT_INTELLIGENCE_TRAINING_CONTAINER_SAS_URL",
  TESTING_CONTAINER_SAS_URL: "DOCUMENT_INTELLIGENCE_TESTING_CONTAINER_SAS_URL",
  SELECTION_MARK_STORAGE_CONTAINER_SAS_URL:
    "DOCUMENT_INTELLIGENCE_SELECTION_MARK_STORAGE_CONTAINER_SAS_URL",
  CLASSIFIER_TRAINING_DATA_CONTAINER_SAS_URL:
    "DOCUMENT_INTELLIGENCE_CLASSIFIER_TRAINING_DATA_CONTAINER_SAS_URL",
  BATCH_TRAINING_DATA_CONTAINER_SAS_URL:
    "DOCUMENT_INTELLIGENCE_BATCH_TRAINING_DATA_CONTAINER_SAS_URL",
  BATCH_TRAINING_DATA_RESULT_CONTAINER_SAS_URL:
    "DOCUMENT_INTELLIGENCE_BATCH_TRAINING_DATA_RESULT_CONTAINER_SAS_URL",
  MULTIPAGE_TRAINING_DATA_CONTAINER_SAS_URL:
    "DOCUMENT_INTELLIGENCE_MULTIPAGE_TRAINING_DATA_CONTAINER_SAS_URL",
  TEST_MODE: "TEST_MODE",
} as const;

export const ENDPOINT = "https://endpoint/";
export const KEY = "api_key";
export const DISABLE_LOCAL_AUTH = false;
export const TRAINING_CONTAINER_SAS_URL = "Sanitized";
export const TESTING_CONTAINER_SAS_URL = "Sanitized";
export const SELECTION_MARK_STORAGE_CONTAINER_SAS_URL = "Sanitized";
export const CLASSIFIER_TRAINING_DATA_CONTAINER_SAS_URL = "Sanitized";
export const BATCH_TRAINING_DATA_CONTAINER_SAS_URL = "Sanitized";
export const BATCH_TRAINING_DATA_RESULT_CONTAINER_SAS_URL = "Sanitized";
export const MULTIPAGE_TRAINING_DATA_CONTAINER_SAS_URL = "Sanitized";
