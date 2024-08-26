// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import {
  MessageTextContent,
  MessageImageFileContent,
  MessageContentUnion,
  MessageTextFileCitationAnnotation,
  MessageTextFilePathAnnotation,
  MessageTextAnnotationUnion,
  SubmitToolOutputsAction,
  RequiredActionUnion,
  RunStepMessageCreationDetails,
  RunStepToolCallDetails,
  RunStepDetailsUnion,
  RunStepCodeInterpreterToolCall,
  RunStepFileSearchToolCall,
  RunStepToolCallUnion,
  RunStepCodeInterpreterImageOutput,
  RunStepCodeInterpreterToolCallOutputUnion,
  MessageDeltaImageFileContent,
  MessageDeltaTextContentObject,
  MessageDeltaContentUnion,
  MessageDeltaTextFileCitationAnnotationObject,
  MessageDeltaTextFilePathAnnotationObject,
  MessageDeltaTextAnnotationUnion,
  RunStepDeltaMessageCreation,
  RunStepDeltaToolCallObject,
  RunStepDeltaDetailUnion,
  RunStepDeltaFileSearchToolCall,
  RunStepDeltaCodeInterpreterToolCall,
  RunStepDeltaToolCallUnion,
  RunStepDeltaCodeInterpreterImageOutput,
  RunStepDeltaCodeInterpreterOutputUnion,
} from "../models/models.js";
import {
  MessageTextContentOutput,
  MessageImageFileContentOutput,
  MessageContentOutput,
  MessageTextFileCitationAnnotationOutput,
  MessageTextFilePathAnnotationOutput,
  MessageTextAnnotationOutput,
  SubmitToolOutputsActionOutput,
  RequiredActionOutput,
  RunStepMessageCreationDetailsOutput,
  RunStepToolCallDetailsOutput,
  RunStepDetailsOutput,
  RunStepCodeInterpreterToolCallOutput,
  RunStepFileSearchToolCallOutput,
  RunStepToolCallOutput,
  RunStepCodeInterpreterImageOutputOutput,
  RunStepCodeInterpreterToolCallOutputOutput,
  MessageDeltaImageFileContentOutput,
  MessageDeltaTextContentObjectOutput,
  MessageDeltaContentOutput,
  MessageDeltaTextFileCitationAnnotationObjectOutput,
  MessageDeltaTextFilePathAnnotationObjectOutput,
  MessageDeltaTextAnnotationOutput,
  RunStepDeltaMessageCreationOutput,
  RunStepDeltaToolCallObjectOutput,
  RunStepDeltaDetailOutput,
  RunStepDeltaFileSearchToolCallOutput,
  RunStepDeltaCodeInterpreterToolCallOutput,
  RunStepDeltaToolCallOutput,
  RunStepDeltaCodeInterpreterImageOutputOutput,
  RunStepDeltaCodeInterpreterOutputOutput,
} from "../rest/index.js";

/** deserialize function for MessageTextContent */
function deserializeMessageTextContent(
  obj: MessageTextContentOutput,
): MessageTextContent {
  return {
    type: obj["type"],
    text: {
      value: obj.text["value"],
      annotations: obj.text["annotations"].map((p: any) =>
        deserializeMessageTextAnnotationUnion(p),
      ),
    },
  };
}

/** deserialize function for MessageImageFileContent */
function deserializeMessageImageFileContent(
  obj: MessageImageFileContentOutput,
): MessageImageFileContent {
  return {
    type: obj["type"],
    imageFile: { fileId: obj.image_file["file_id"] },
  };
}

/** deserialize function for MessageContentOutput */
export function deserializeMessageContentUnion(
  obj: MessageContentOutput,
): MessageContentUnion {
  switch (obj.type) {
    case "text":
      return deserializeMessageTextContent(obj as MessageTextContent);
    case "image_file":
      return deserializeMessageImageFileContent(obj as MessageImageFileContent);
    default:
      return obj;
  }
}

/** deserialize function for MessageTextFileCitationAnnotation */
function deserializeMessageTextFileCitationAnnotation(
  obj: MessageTextFileCitationAnnotationOutput,
): MessageTextFileCitationAnnotation {
  return {
    type: obj["type"],
    text: obj["text"],
    fileCitation: {
      fileId: obj.file_citation["file_id"],
      quote: obj.file_citation["quote"],
    },
    startIndex: obj["start_index"],
    endIndex: obj["end_index"],
  };
}

/** deserialize function for MessageTextFilePathAnnotation */
function deserializeMessageTextFilePathAnnotation(
  obj: MessageTextFilePathAnnotationOutput,
): MessageTextFilePathAnnotation {
  return {
    type: obj["type"],
    text: obj["text"],
    filePath: { fileId: obj.file_path["file_id"] },
    startIndex: obj["start_index"],
    endIndex: obj["end_index"],
  };
}

/** deserialize function for MessageTextAnnotationOutput */
export function deserializeMessageTextAnnotationUnion(
  obj: MessageTextAnnotationOutput,
): MessageTextAnnotationUnion {
  switch (obj.type) {
    case "file_citation":
      return deserializeMessageTextFileCitationAnnotation(
        obj as MessageTextFileCitationAnnotation,
      );
    case "file_path":
      return deserializeMessageTextFilePathAnnotation(
        obj as MessageTextFilePathAnnotation,
      );
    default:
      return obj;
  }
}

/** deserialize function for SubmitToolOutputsAction */
function deserializeSubmitToolOutputsAction(
  obj: SubmitToolOutputsActionOutput,
): SubmitToolOutputsAction {
  return {
    type: obj["type"],
    submitToolOutputs: { toolCalls: obj.submit_tool_outputs["tool_calls"] },
  };
}

/** deserialize function for RequiredActionOutput */
export function deserializeRequiredActionUnion(
  obj: RequiredActionOutput,
): RequiredActionUnion {
  switch (obj.type) {
    case "submit_tool_outputs":
      return deserializeSubmitToolOutputsAction(obj as SubmitToolOutputsAction);
    default:
      return obj;
  }
}

/** deserialize function for RunStepMessageCreationDetails */
function deserializeRunStepMessageCreationDetails(
  obj: RunStepMessageCreationDetailsOutput,
): RunStepMessageCreationDetails {
  return {
    type: obj["type"],
    messageCreation: { messageId: obj.message_creation["message_id"] },
  };
}

/** deserialize function for RunStepToolCallDetails */
function deserializeRunStepToolCallDetails(
  obj: RunStepToolCallDetailsOutput,
): RunStepToolCallDetails {
  return {
    type: obj["type"],
    toolCalls: obj["tool_calls"].map((p: any) =>
      deserializeRunStepToolCallUnion(p),
    ),
  };
}

/** deserialize function for RunStepDetailsOutput */
export function deserializeRunStepDetailsUnion(
  obj: RunStepDetailsOutput,
): RunStepDetailsUnion {
  switch (obj.type) {
    case "message_creation":
      return deserializeRunStepMessageCreationDetails(
        obj as RunStepMessageCreationDetails,
      );
    case "tool_calls":
      return deserializeRunStepToolCallDetails(obj as RunStepToolCallDetails);
    default:
      return obj;
  }
}

/** deserialize function for RunStepCodeInterpreterToolCall */
function deserializeRunStepCodeInterpreterToolCall(
  obj: RunStepCodeInterpreterToolCallOutput,
): RunStepCodeInterpreterToolCall {
  return {
    type: obj["type"],
    id: obj["id"],
    codeInterpreter: {
      input: obj.code_interpreter["input"],
      outputs: obj.code_interpreter["outputs"].map((p: any) =>
        deserializeRunStepCodeInterpreterToolCallOutputUnion(p),
      ),
    },
  };
}

/** deserialize function for RunStepFileSearchToolCall */
function deserializeRunStepFileSearchToolCall(
  obj: RunStepFileSearchToolCallOutput,
): RunStepFileSearchToolCall {
  return { type: obj["type"], id: obj["id"], fileSearch: obj["file_search"] };
}

/** deserialize function for RunStepToolCallOutput */
export function deserializeRunStepToolCallUnion(
  obj: RunStepToolCallOutput,
): RunStepToolCallUnion {
  switch (obj.type) {
    case "code_interpreter":
      return deserializeRunStepCodeInterpreterToolCall(
        obj as RunStepCodeInterpreterToolCall,
      );
    case "file_search":
      return deserializeRunStepFileSearchToolCall(
        obj as RunStepFileSearchToolCall,
      );
    default:
      return obj;
  }
}

/** deserialize function for RunStepCodeInterpreterImageOutput */
function deserializeRunStepCodeInterpreterImageOutput(
  obj: RunStepCodeInterpreterImageOutputOutput,
): RunStepCodeInterpreterImageOutput {
  return { type: obj["type"], image: { fileId: obj.image["file_id"] } };
}

/** deserialize function for RunStepCodeInterpreterToolCallOutputOutput */
export function deserializeRunStepCodeInterpreterToolCallOutputUnion(
  obj: RunStepCodeInterpreterToolCallOutputOutput,
): RunStepCodeInterpreterToolCallOutputUnion {
  switch (obj.type) {
    case "image":
      return deserializeRunStepCodeInterpreterImageOutput(
        obj as RunStepCodeInterpreterImageOutput,
      );
    default:
      return obj;
  }
}

/** deserialize function for MessageDeltaImageFileContent */
function deserializeMessageDeltaImageFileContent(
  obj: MessageDeltaImageFileContentOutput,
): MessageDeltaImageFileContent {
  return {
    index: obj["index"],
    type: obj["type"],
    imageFile: !obj.image_file
      ? undefined
      : { fileId: obj.image_file?.["file_id"] },
  };
}

/** deserialize function for MessageDeltaTextContentObject */
function deserializeMessageDeltaTextContentObject(
  obj: MessageDeltaTextContentObjectOutput,
): MessageDeltaTextContentObject {
  return {
    index: obj["index"],
    type: obj["type"],
    text: !obj.text
      ? undefined
      : {
          value: obj.text?.["value"],
          annotations:
            obj.text?.["annotations"] === undefined
              ? obj.text?.["annotations"]
              : obj.text?.["annotations"].map((p: any) =>
                  deserializeMessageDeltaTextAnnotationUnion(p),
                ),
        },
  };
}

/** deserialize function for MessageDeltaContentOutput */
export function deserializeMessageDeltaContentUnion(
  obj: MessageDeltaContentOutput,
): MessageDeltaContentUnion {
  switch (obj.type) {
    case "image_file":
      return deserializeMessageDeltaImageFileContent(
        obj as MessageDeltaImageFileContent,
      );
    case "text":
      return deserializeMessageDeltaTextContentObject(
        obj as MessageDeltaTextContentObject,
      );
    default:
      return obj;
  }
}

/** deserialize function for MessageDeltaTextFileCitationAnnotationObject */
function deserializeMessageDeltaTextFileCitationAnnotationObject(
  obj: MessageDeltaTextFileCitationAnnotationObjectOutput,
): MessageDeltaTextFileCitationAnnotationObject {
  return {
    index: obj["index"],
    type: obj["type"],
    fileCitation: !obj.file_citation
      ? undefined
      : {
          fileId: obj.file_citation?.["file_id"],
          quote: obj.file_citation?.["quote"],
        },
    text: obj["text"],
    startIndex: obj["start_index"],
    endIndex: obj["end_index"],
  };
}

/** deserialize function for MessageDeltaTextFilePathAnnotationObject */
function deserializeMessageDeltaTextFilePathAnnotationObject(
  obj: MessageDeltaTextFilePathAnnotationObjectOutput,
): MessageDeltaTextFilePathAnnotationObject {
  return {
    index: obj["index"],
    type: obj["type"],
    filePath: !obj.file_path
      ? undefined
      : { fileId: obj.file_path?.["file_id"] },
    startIndex: obj["start_index"],
    endIndex: obj["end_index"],
    text: obj["text"],
  };
}

/** deserialize function for MessageDeltaTextAnnotationOutput */
export function deserializeMessageDeltaTextAnnotationUnion(
  obj: MessageDeltaTextAnnotationOutput,
): MessageDeltaTextAnnotationUnion {
  switch (obj.type) {
    case "file_citation":
      return deserializeMessageDeltaTextFileCitationAnnotationObject(
        obj as MessageDeltaTextFileCitationAnnotationObject,
      );
    case "file_path":
      return deserializeMessageDeltaTextFilePathAnnotationObject(
        obj as MessageDeltaTextFilePathAnnotationObject,
      );
    default:
      return obj;
  }
}

/** deserialize function for RunStepDeltaMessageCreation */
function deserializeRunStepDeltaMessageCreation(
  obj: RunStepDeltaMessageCreationOutput,
): RunStepDeltaMessageCreation {
  return {
    type: obj["type"],
    messageCreation: !obj.message_creation
      ? undefined
      : { messageId: obj.message_creation?.["message_id"] },
  };
}

/** deserialize function for RunStepDeltaToolCallObject */
function deserializeRunStepDeltaToolCallObject(
  obj: RunStepDeltaToolCallObjectOutput,
): RunStepDeltaToolCallObject {
  return {
    type: obj["type"],
    toolCalls:
      obj["tool_calls"] === undefined
        ? obj["tool_calls"]
        : obj["tool_calls"].map((p: any) =>
            deserializeRunStepDeltaToolCallUnion(p),
          ),
  };
}

/** deserialize function for RunStepDeltaDetailOutput */
export function deserializeRunStepDeltaDetailUnion(
  obj: RunStepDeltaDetailOutput,
): RunStepDeltaDetailUnion {
  switch (obj.type) {
    case "message_creation":
      return deserializeRunStepDeltaMessageCreation(
        obj as RunStepDeltaMessageCreation,
      );
    case "tool_calls":
      return deserializeRunStepDeltaToolCallObject(
        obj as RunStepDeltaToolCallObject,
      );
    default:
      return obj;
  }
}

/** deserialize function for RunStepDeltaFileSearchToolCall */
function deserializeRunStepDeltaFileSearchToolCall(
  obj: RunStepDeltaFileSearchToolCallOutput,
): RunStepDeltaFileSearchToolCall {
  return {
    index: obj["index"],
    id: obj["id"],
    type: obj["type"],
    fileSearch: obj["file_search"],
  };
}

/** deserialize function for RunStepDeltaCodeInterpreterToolCall */
function deserializeRunStepDeltaCodeInterpreterToolCall(
  obj: RunStepDeltaCodeInterpreterToolCallOutput,
): RunStepDeltaCodeInterpreterToolCall {
  return {
    index: obj["index"],
    id: obj["id"],
    type: obj["type"],
    codeInterpreter: !obj.code_interpreter
      ? undefined
      : {
          input: obj.code_interpreter?.["input"],
          outputs:
            obj.code_interpreter?.["outputs"] === undefined
              ? obj.code_interpreter?.["outputs"]
              : obj.code_interpreter?.["outputs"].map((p: any) =>
                  deserializeRunStepDeltaCodeInterpreterOutputUnion(p),
                ),
        },
  };
}

/** deserialize function for RunStepDeltaToolCallOutput */
export function deserializeRunStepDeltaToolCallUnion(
  obj: RunStepDeltaToolCallOutput,
): RunStepDeltaToolCallUnion {
  switch (obj.type) {
    case "file_search":
      return deserializeRunStepDeltaFileSearchToolCall(
        obj as RunStepDeltaFileSearchToolCall,
      );
    case "code_interpreter":
      return deserializeRunStepDeltaCodeInterpreterToolCall(
        obj as RunStepDeltaCodeInterpreterToolCall,
      );
    default:
      return obj;
  }
}

/** deserialize function for RunStepDeltaCodeInterpreterImageOutput */
function deserializeRunStepDeltaCodeInterpreterImageOutput(
  obj: RunStepDeltaCodeInterpreterImageOutputOutput,
): RunStepDeltaCodeInterpreterImageOutput {
  return {
    index: obj["index"],
    type: obj["type"],
    image: !obj.image ? undefined : { fileId: obj.image?.["file_id"] },
  };
}

/** deserialize function for RunStepDeltaCodeInterpreterOutputOutput */
export function deserializeRunStepDeltaCodeInterpreterOutputUnion(
  obj: RunStepDeltaCodeInterpreterOutputOutput,
): RunStepDeltaCodeInterpreterOutputUnion {
  switch (obj.type) {
    case "image":
      return deserializeRunStepDeltaCodeInterpreterImageOutput(
        obj as RunStepDeltaCodeInterpreterImageOutput,
      );
    default:
      return obj;
  }
}
