// Copyright (c) Microsoft Corporation.
// Licensed under the MIT License.

import type { CallConnection } from "../callConnection.js";
import type { CallConnectionProperties, CallParticipant } from "./models.js";
import type { RecordingState, RecordingKind } from "../generated/src/index.js";

/**
 * The interface used as parent of [action]CallResult
 */
export interface CallResult {
  /*
   * The callConnectionProperties
   */
  callConnectionProperties: CallConnectionProperties;

  /*
   * The callConnection
   */
  callConnection: CallConnection;
}

/**
 * CreateCall result
 */
export type CreateCallResult = CallResult;

/**
 * AnswerCall result
 */
export type AnswerCallResult = CallResult;

/**
 * ConnectCall result
 */
export type ConnectCallResult = CallResult;

/** The response payload for getting participants of the call. */
export interface ListParticipantsResult {
  /** List of the current participants in the call. */
  values?: CallParticipant[];
  /** Continue of the list of participants */
  nextLink?: string;
}

/** The response payload for adding participants to the call. */
export interface AddParticipantResult {
  /** invitation ID used to add the participant. */
  invitationId?: string;
  /** List of current participants in the call. */
  participant?: CallParticipant;
  /** The operation context provided by client. */
  operationContext?: string;
}

/** The response payload for transferring the call. */
export interface TransferCallResult {
  /** The operation context provided by client. */
  operationContext?: string;
}

/** The response payload for removing participants from the call. */
export interface RemoveParticipantResult {
  /** The operation context provided by client. */
  operationContext?: string;
}

/** The response payload for muting participant from the call. */
export interface MuteParticipantResult {
  /** The operation context provided by client. */
  operationContext?: string;
}

/** The response payload for starting a call recording or getting call recording state. */
export interface RecordingStateResult {
  recordingId: string;
  recordingKind: RecordingKind;
  recordingState: RecordingState;
}

/** The response payload for sending DTMF tones. */
export interface SendDtmfTonesResult {
  /** The operation context provided by client. */
  operationContext?: string;
}

/** The response payload for cancelling add participant request. */
export interface CancelAddParticipantOperationResult {
  /** the invitation ID used to cancel the add participant request. */
  invitationId?: string;
  /** The operation context provided by client. */
  operationContext?: string;
}
