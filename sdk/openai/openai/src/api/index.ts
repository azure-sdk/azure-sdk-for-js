// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

export {
  createOpenAI,
  OpenAIContext,
  OpenAIClientOptionalParams,
} from "./openAIContext.js";
export {
  getAudioTranscriptionAsPlainText,
  getAudioTranscriptionAsResponseObject,
  getAudioTranslationAsPlainText,
  getAudioTranslationAsResponseObject,
  getCompletions,
  getChatCompletions,
  getImageGenerations,
  generateSpeechFromText,
  getEmbeddings,
  listFiles,
  uploadFile,
  deleteFile,
  getFile,
  getFileContent,
  listBatches,
  createBatch,
  getBatch,
  cancelBatch,
} from "./operations.js";
