// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type {
  PhoneNumberIdentifier,
  CommunicationIdentifier,
  MicrosoftTeamsAppIdentifier,
} from "@azure/communication-common";
import type { OperationOptions } from "@azure/core-client";
import type {
  MediaStreamingOptions,
  TranscriptionOptions,
  CallRejectReason,
  FileSource,
  TextSource,
  SsmlSource,
  DtmfTone,
  RecognitionChoice,
  RecordingContent,
  RecordingChannel,
  RecordingFormat,
  RecordingStorage,
  CallLocator,
  ChannelAffinity,
  CallIntelligenceOptions,
  CustomCallingContext,
} from "./models.js";

/** Options to configure the recognize operation. */
export interface CallMediaRecognizeOptions extends OperationOptions {
  /** The source of the audio to be played for recognition. */
  playPrompt?: FileSource | TextSource | SsmlSource;
  /** The list source of the audio to be played for recognition. */
  playPrompts?: (FileSource | TextSource | SsmlSource)[];
  /** If set recognize can barge into other existing queued-up/currently-processing requests. */
  interruptCallMediaOperation?: boolean;
  /** @deprecated Not in use, instead use interruptCallMediaOperation for similar functionality*/
  stopCurrentOperations?: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** Determines if we interrupt the prompt and start recognizing. */
  interruptPrompt?: boolean;
  /** Time to wait for first input after prompt. */
  initialSilenceTimeoutInSeconds?: number;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/** The recognize configuration specific to Dtmf. */
export interface CallMediaRecognizeDtmfOptions extends CallMediaRecognizeOptions {
  /** Time to wait between DTMF inputs to stop recognizing. */
  interToneTimeoutInSeconds?: number;
  /** List of tones that will stop recognizing. */
  stopDtmfTones?: DtmfTone[];
  /** Maximum number of DTMF tones to be collected. */
  maxTonesToCollect?: number;
  readonly kind: "callMediaRecognizeDtmfOptions";
}

/** The recognize configuration specific to Choices. */
export interface CallMediaRecognizeChoiceOptions extends CallMediaRecognizeOptions {
  /** The IvR choices for recognize. */
  choices: RecognitionChoice[];
  /** Speech language to be recognized, If not set default is en-US */
  speechLanguage?: string;
  /** Endpoint where the custom model was deployed. */
  speechRecognitionModelEndpointId?: string;
  readonly kind: "callMediaRecognizeChoiceOptions";
}

/** The recognize configuration specific to Speech. */
export interface CallMediaRecognizeSpeechOptions extends CallMediaRecognizeOptions {
  /** The length of end silence when user stops speaking and cogservice send response. */
  endSilenceTimeoutInSeconds?: number;
  /** Speech language to be recognized, If not set default is en-US */
  speechLanguage?: string;
  /** Endpoint where the custom model was deployed. */
  speechRecognitionModelEndpointId?: string;
  readonly kind: "callMediaRecognizeSpeechOptions";
}

/** The recognize configuration for Speech or Dtmf  */
export interface CallMediaRecognizeSpeechOrDtmfOptions extends CallMediaRecognizeOptions {
  /** The length of end silence when user stops speaking and cogservice send response. */
  endSilenceTimeoutInSeconds?: number;
  /** Time to wait between DTMF inputs to stop recognizing. */
  interToneTimeoutInSeconds?: number;
  /** List of tones that will stop recognizing. */
  stopDtmfTones?: DtmfTone[];
  /** Maximum number of DTMF tones to be collected. */
  maxTonesToCollect?: number;
  /** Speech language to be recognized, If not set default is en-US */
  speechLanguage?: string;
  /** Endpoint where the custom model was deployed. */
  speechRecognitionModelEndpointId?: string;
  readonly kind: "callMediaRecognizeSpeechOrDtmfOptions";
}

/**
 * Options to create a call.
 */
export interface CreateCallOptions extends OperationOptions {
  /**
   * The source caller Id, a phone number, that's shown to the PSTN participant being invited.
   * Required only when calling a PSTN callee.
   */
  sourceCallIdNumber?: PhoneNumberIdentifier;
  /** Display name of the call if dialing out to a pstn number */
  sourceDisplayName?: string;
  /** The operation context. */
  operationContext?: string;
  /** AI options for the call. */
  callIntelligenceOptions?: CallIntelligenceOptions;
  /** Options for Media streaming. */
  mediaStreamingOptions?: MediaStreamingOptions;
  /** Options for live transcription. */
  transcriptionOptions?: TranscriptionOptions;
  /**
   * Overrides default client source by a MicrosoftTeamsAppIdentifier type source.
   * Required for creating call with Teams resource account ID.
   * This is per-operation setting and does not change the client's default source.
   */
  teamsAppSource?: MicrosoftTeamsAppIdentifier;
}

/**
 * Options to answer a call.
 */
export interface AnswerCallOptions extends OperationOptions {
  /** AI options for the call. */
  callIntelligenceOptions?: CallIntelligenceOptions;
  /** Options for Media streaming. */
  mediaStreamingOptions?: MediaStreamingOptions;
  /** Options for live transcription. */
  transcriptionOptions?: TranscriptionOptions;
  /** The operation context. */
  operationContext?: string;
}

/**
 * Options to redirect call.
 */
export type RedirectCallOptions = OperationOptions;

/**
 * Options to reject call.
 */
export interface RejectCallOptions extends OperationOptions {
  /** The rejection reason. */
  callRejectReason?: CallRejectReason;
}

/**
 * Options to transfer participants.
 */
export interface TransferCallToParticipantOptions extends OperationOptions {
  /** Used by customers when calling mid-call actions to correlate the request to the response event. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
  /** Transferee is the participant who is transferred away. */
  transferee?: CommunicationIdentifier;
  /** Used by customer to send custom context to targets. */
  customCallingContext?: CustomCallingContext;
  /** The source caller Id, a phone number, that's will be used as the transferor's(Contoso) caller id when transfering a call a pstn target. */
  sourceCallIdNumber?: PhoneNumberIdentifier;
}

/** Options to add participants. */
export interface AddParticipantOptions extends OperationOptions {
  /**
   * Gets or sets the timeout to wait for the invited participant to pickup.
   * The maximum value of this is 180 seconds
   */
  invitationTimeoutInSeconds?: number;
  /** Used by customers when calling mid-call actions to correlate the request to the response event. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to remove participants.
 */
export interface RemoveParticipantsOption extends OperationOptions {
  /** Used by customers when calling mid-call actions to correlate the request to the response event. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to mute participant.
 */
export interface MuteParticipantOption extends OperationOptions {
  /** Used by customers when calling mid-call actions to correlate the request to the response event. */
  operationContext?: string;
}

/**
 * Options to play audio.
 */
export interface PlayOptions extends OperationOptions {
  /** Determine if it is looping */
  loop?: boolean;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to playToAll audio.
 */
export interface PlayToAllOptions extends PlayOptions {
  /** If set play can barge into other existing queued-up/currently-processing requests. */
  interruptCallMediaOperation?: boolean;
}

/**
 * Options to get call connection properties.
 */
export type GetCallConnectionPropertiesOptions = OperationOptions;

/**
 * Options to hang up the call
 */
export type HangUpOptions = OperationOptions;

/**
 * Options to get a participant.
 */
export type GetParticipantOptions = OperationOptions;

/**
 * Options to get a start a recording.
 */
export interface StartRecordingOptions extends OperationOptions {
  /** The call locator. (Only one of callLocator or callConnectionId to be used) */
  callLocator?: CallLocator;
  /** The call connectionId. (Only one of callLocator or callConnectionId to be used) */
  callConnectionId?: string;
  /** The url to send notifications to. */
  recordingStateCallbackEndpointUrl?: string;
  /** The content type of call recording. */
  recordingContent?: RecordingContent;
  /** The channel type of call recording. */
  recordingChannel?: RecordingChannel;
  /** The format type of call recording. */
  recordingFormat?: RecordingFormat;
  /** Recording storage option. */
  recordingStorage?: RecordingStorage;
  /** Pause on start call recording option. */
  pauseOnStart?: boolean;
  /**
   * The sequential order in which audio channels are assigned to participants in the unmixed recording.
   * When 'recordingChannelType' is set to 'unmixed' and `audioChannelParticipantOrdering` is not specified,
   * the audio channel to participant mapping will be automatically assigned based on the order in which participant
   * first audio was detected.  Channel to participant mapping details can be found in the metadata of the recording.
   */
  audioChannelParticipantOrdering?: CommunicationIdentifier[];
  /**
   * The channel affinity of call recording
   * When 'recordingChannelType' is set to 'unmixed', if channelAffinity is not specified, 'channel' will be automatically assigned.
   * Channel-Participant mapping details can be found in the metadata of the recording.
   */
  channelAffinity?: ChannelAffinity[];
}

/**
 * Options to get a stop a recording.
 */
export type StopRecordingOptions = OperationOptions;

/**
 * Options to get a pause a recording.
 */
export type PauseRecordingOptions = OperationOptions;

/**
 * Options to get recording properties.
 */
export type GetRecordingPropertiesOptions = OperationOptions;

/**
 * Options to resume recording.
 */
export type ResumeRecordingOptions = OperationOptions;

/**
 * Options to delete recording.
 */
export type DeleteRecordingOptions = OperationOptions;

/**
 * Options to download recording.
 */
export interface DownloadRecordingOptions extends OperationOptions {
  /** Offset byte to start download from. */
  offset?: number;
  /** Max content length in bytes. */
  length?: number;
}

/**
 * Options to continuous Dtmf recognition.
 */
export interface ContinuousDtmfRecognitionOptions extends OperationOptions {
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to send Dtmf tones.
 */
export interface SendDtmfTonesOptions extends OperationOptions {
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/** Options for cancelling add participant request. */
export interface CancelAddParticipantOperationOptions extends OperationOptions {
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URL set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to start transcription
 */
export interface StartTranscriptionOptions extends OperationOptions {
  /** Defines Locale for the transcription e,g en-US */
  locale?: string;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /** Endpoint where the custom model was deployed. */
  speechRecognitionModelEndpointId?: string;
  /**
   * Set a callback URL that overrides the default callback URI set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to stop transcription
 */
export interface StopTranscriptionOptions extends OperationOptions {
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URI set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}

/**
 * Options to hold participant.
 */
export interface HoldOptions extends OperationOptions {
  /** A PlaySource representing the source to play. */
  playSource?: FileSource | TextSource | SsmlSource;
  /** Operation Context. */
  operationContext?: string;
  /** Set a callback URI that overrides the default callback URI set by CreateCall/AnswerCall for this operation. */
  operationCallbackUrl?: string;
}

/**
 * Options to Unhold participant.
 */
export interface UnholdOptions extends OperationOptions {
  /** Operation Context. */
  operationContext?: string;
  /** Set a callback URI that overrides the default callback URI set by CreateCall/AnswerCall for this operation. */
  operationCallbackUrl?: string;
}

/**
 * Options to Connect request.
 */
export interface ConnectCallOptions extends OperationOptions {
  /** Used by customers to correlate the request to the response event. */
  operationContext?: string;
  /** AI options for the call. */
  callIntelligenceOptions?: CallIntelligenceOptions;
  /** Options for Media streaming. */
  mediaStreamingOptions?: MediaStreamingOptions;
  /** Options for live transcription. */
  transcriptionOptions?: TranscriptionOptions;
}

/** Options for start media streaming request. */
export interface StartMediaStreamingOptions extends OperationOptions {
  /**
   * Set a callback URL that overrides the default callback URI set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
  /** The value to identify context of the operation. */
  operationContext?: string;
}

/** Options for stop media streaming request. */
export interface StopMediaStreamingOptions extends OperationOptions {
  /**
   * Set a callback URL that overrides the default callback URI set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
  /** The value to identify context of the operation. */
  operationContext?: string;
}

/**
 * Options to update transcription
 */
export interface UpdateTranscriptionOptions extends OperationOptions {
  /** Endpoint where the custom model was deployed. */
  speechRecognitionModelEndpointId?: string;
  /** The value to identify context of the operation. */
  operationContext?: string;
  /**
   * Set a callback URL that overrides the default callback URI set by CreateCall/AnswerCall for this operation.
   * This setup is per-action. If this is not set, the default callback URI set by CreateCall/AnswerCall will be used.
   */
  operationCallbackUrl?: string;
}
