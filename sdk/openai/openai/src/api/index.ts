// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

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
  createUpload,
  addUploadPart,
  completeUpload,
  cancelUpload,
} from "./operations.js";
