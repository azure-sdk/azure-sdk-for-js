// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

/** Long running operation resource for person directory. */
export interface FaceOperationStatusOutput {
  /** Operation ID of the operation. */
  readonly operationId: string;
  /** Current status of the operation. */
  status: "notStarted" | "running" | "succeeded" | "failed";
  /** Date and time the operation was created. */
  createdDateTime: string;
  /** Date and time the operation was finished. */
  finishedDateTime?: string;
  /** Message for the operation. */
  message?: string;
}

/** Response for detect API. */
export interface FaceDetectionResultOutput {
  /** Unique faceId of the detected face, created by detection API and it will expire 24 hours after the detection call. To return this, it requires 'returnFaceId' parameter to be true. */
  faceId: string;
  /** The 'recognitionModel' associated with this faceId. This is only returned when 'returnRecognitionModel' is explicitly set as true. */
  recognitionModel?: RecognitionModelOutput;
  /** A rectangle area for the face location on image. */
  faceRectangle?: FaceRectangleOutput;
  /** An array of 27-point face landmarks pointing to the important positions of face components. To return this, it requires 'returnFaceLandmarks' parameter to be true. */
  faceLandmarks?: FaceLandmarksOutput;
  /** Face attributes for detected face. */
  faceAttributes?: FaceAttributesOutput;
}

/** A rectangle within which a face can be found. */
export interface FaceRectangleOutput {
  /** The distance from the top edge if the image to the top edge of the rectangle, in pixels. */
  top: number;
  /** The distance from the left edge if the image to the left edge of the rectangle, in pixels. */
  left: number;
  /** The width of the rectangle, in pixels. */
  width: number;
  /** The height of the rectangle, in pixels. */
  height: number;
}

/** A collection of 27-point face landmarks pointing to the important positions of face components. */
export interface FaceLandmarksOutput {
  /** Coordinates within an image */
  pupilLeft: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  pupilRight: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseTip: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  mouthLeft: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  mouthRight: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyebrowLeftOuter: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyebrowLeftInner: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeLeftOuter: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeLeftTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeLeftBottom: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeLeftInner: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyebrowRightInner: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyebrowRightOuter: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeRightInner: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeRightTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeRightBottom: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  eyeRightOuter: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseRootLeft: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseRootRight: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseLeftAlarTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseRightAlarTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseLeftAlarOutTip: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  noseRightAlarOutTip: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  upperLipTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  upperLipBottom: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  underLipTop: LandmarkCoordinateOutput;
  /** Coordinates within an image */
  underLipBottom: LandmarkCoordinateOutput;
}

/** Coordinates within an image. */
export interface LandmarkCoordinateOutput {
  /** The horizontal component, in pixels. */
  x: number;
  /** The vertical component, in pixels. */
  y: number;
}

/** Face attributes for the detected face. */
export interface FaceAttributesOutput {
  /** Age in years */
  age?: number;
  /** Smile intensity, a number between [0,1] */
  smile?: number;
  /** Properties describing facial hair attributes. */
  facialHair?: FacialHairOutput;
  /** Glasses type if any of the face. */
  glasses?: "noGlasses" | "readingGlasses" | "sunglasses" | "swimmingGoggles";
  /** 3-D roll/yaw/pitch angles for face direction. */
  headPose?: HeadPoseOutput;
  /** Properties describing hair attributes. */
  hair?: HairPropertiesOutput;
  /** Properties describing occlusions on a given face. */
  occlusion?: OcclusionPropertiesOutput;
  /** Properties describing any accessories on a given face. */
  accessories?: Array<AccessoryItemOutput>;
  /** Properties describing any presence of blur within the image. */
  blur?: BlurPropertiesOutput;
  /** Properties describing exposure level of the image. */
  exposure?: ExposurePropertiesOutput;
  /** Properties describing noise level of the image. */
  noise?: NoisePropertiesOutput;
  /** Properties describing the presence of a mask on a given face. */
  mask?: MaskPropertiesOutput;
  /** Properties describing the overall image quality regarding whether the image being used in the detection is of sufficient quality to attempt face recognition on. */
  qualityForRecognition?: "low" | "medium" | "high";
}

/** Properties describing facial hair attributes. */
export interface FacialHairOutput {
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  moustache: number;
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  beard: number;
  /** A number ranging from 0 to 1 indicating a level of confidence associated with a property. */
  sideburns: number;
}

/** 3-D roll/yaw/pitch angles for face direction. */
export interface HeadPoseOutput {
  /** Value of angles. */
  pitch: number;
  /** Value of angles. */
  roll: number;
  /** Value of angles. */
  yaw: number;
}

/** Properties describing hair attributes. */
export interface HairPropertiesOutput {
  /** A number describing confidence level of whether the person is bald. */
  bald: number;
  /** A boolean value describing whether the hair is visible in the image. */
  invisible: boolean;
  /** An array of candidate colors and confidence level in the presence of each. */
  hairColor: Array<HairColorOutput>;
}

/** An array of candidate colors and confidence level in the presence of each. */
export interface HairColorOutput {
  /** Name of the hair color. */
  color:
    | "unknown"
    | "white"
    | "gray"
    | "blond"
    | "brown"
    | "red"
    | "black"
    | "other";
  /** Confidence level of the color. Range between [0,1]. */
  confidence: number;
}

/** Properties describing occlusions on a given face. */
export interface OcclusionPropertiesOutput {
  /** A boolean value indicating whether forehead is occluded. */
  foreheadOccluded: boolean;
  /** A boolean value indicating whether eyes are occluded. */
  eyeOccluded: boolean;
  /** A boolean value indicating whether the mouth is occluded. */
  mouthOccluded: boolean;
}

/** Accessory item and corresponding confidence level. */
export interface AccessoryItemOutput {
  /** Type of the accessory. */
  type: "headwear" | "glasses" | "mask";
  /** Confidence level of the accessory type. Range between [0,1]. */
  confidence: number;
}

/** Properties describing any presence of blur within the image. */
export interface BlurPropertiesOutput {
  /** An enum value indicating level of blurriness. */
  blurLevel: "low" | "medium" | "high";
  /** A number indicating level of blurriness ranging from 0 to 1. */
  value: number;
}

/** Properties describing exposure level of the image. */
export interface ExposurePropertiesOutput {
  /** An enum value indicating level of exposure. */
  exposureLevel: "underExposure" | "goodExposure" | "overExposure";
  /** A number indicating level of exposure level ranging from 0 to 1. [0, 0.25) is under exposure. [0.25, 0.75) is good exposure. [0.75, 1] is over exposure. */
  value: number;
}

/** Properties describing noise level of the image. */
export interface NoisePropertiesOutput {
  /** An enum value indicating level of noise. */
  noiseLevel: "low" | "medium" | "high";
  /** A number indicating level of noise level ranging from 0 to 1. [0, 0.25) is under exposure. [0.25, 0.75) is good exposure. [0.75, 1] is over exposure. [0, 0.3) is low noise level. [0.3, 0.7) is medium noise level. [0.7, 1] is high noise level. */
  value: number;
}

/** Properties describing the presence of a mask on a given face. */
export interface MaskPropertiesOutput {
  /** A boolean value indicating whether nose and mouth are covered. */
  noseAndMouthCovered: boolean;
  /** Mask type if any of the face */
  type: "faceMask" | "noMask" | "otherMaskOrOcclusion" | "uncertain";
}

/** Response body for find similar face operation. */
export interface FindSimilarResultOutput {
  /** Confidence value of the candidate. The higher confidence, the more similar. Range between [0,1]. */
  confidence: number;
  /** faceId of candidate face when find by faceIds. faceId is created by Face - Detect and will expire 24 hours after the detection call. */
  faceId?: string;
  /** persistedFaceId of candidate face when find by faceListId or largeFaceListId. persistedFaceId in face list/large face list is persisted and will not expire. */
  persistedFaceId?: string;
}

/** Identify result. */
export interface IdentificationResultOutput {
  /** faceId of the query face. */
  faceId: string;
  /** Identified person candidates for that face (ranked by confidence). Array size should be no larger than input maxNumOfCandidatesReturned. If no person is identified, will return an empty array. */
  candidates: Array<IdentificationCandidateOutput>;
}

/** Candidate for identify call. */
export interface IdentificationCandidateOutput {
  /** personId of candidate person. */
  personId: string;
  /** Confidence value of the candidate. The higher confidence, the more similar. Range between [0,1]. */
  confidence: number;
}

/** Verify result. */
export interface VerificationResultOutput {
  /** True if the two faces belong to the same person or the face belongs to the person, otherwise false. */
  isIdentical: boolean;
  /** A number indicates the similarity confidence of whether two faces belong to the same person, or whether the face belongs to the person. By default, isIdentical is set to True if similarity confidence is greater than or equal to 0.5. This is useful for advanced users to override 'isIdentical' and fine-tune the result on their own data. */
  confidence: number;
}

/** Response body for group face operation. */
export interface GroupingResultOutput {
  /** A partition of the original faces based on face similarity. Groups are ranked by number of faces. */
  groups: string[][];
  /** Face ids array of faces that cannot find any similar faces from original faces. */
  messyGroup: string[];
}

/** Face list is a list of faces, up to 1,000 faces. */
export interface FaceListOutput {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds. */
  recognitionModel?: RecognitionModelOutput;
  /** Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. */
  readonly faceListId: string;
  /** Face ids of registered faces in the face list. */
  persistedFaces?: Array<FaceListFaceOutput>;
}

/** Face resource for face list. */
export interface FaceListFaceOutput {
  /** Face ID of the face. */
  readonly persistedFaceId: string;
  /** User-provided data attached to the face. The length limit is 1K. */
  userData?: string;
}

/** Face list item for list face list. */
export interface FaceListItemOutput {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds. */
  recognitionModel?: RecognitionModelOutput;
  /** Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. */
  faceListId: string;
}

/** Response body for adding face. */
export interface AddFaceResultOutput {
  /** persistedFaceId of the added face, which is persisted and will not expire. Different from faceId which is created in Face - Detect and will expire in 24 hours after the detection call. */
  persistedFaceId: string;
}

/** Large face list is a list of faces, up to 1,000,000 faces. */
export interface LargeFaceListOutput {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds. */
  recognitionModel?: RecognitionModelOutput;
  /** Valid character is letter in lower case or digit or '-' or '_', maximum length is 64. */
  readonly largeFaceListId: string;
}

/** Training status of a container */
export interface TrainingStatusOutput {
  /** Training status of the container. */
  status: "notStarted" | "running" | "succeeded" | "failed";
  /** A combined UTC date and time string that describes the created time of the person group, large person group or large face list. */
  createdDateTime: string;
  /** A combined UTC date and time string that describes the last modify time of the person group, large person group or large face list, could be null value when the group is not successfully trained. */
  lastActionDateTime: string;
  /** A combined UTC date and time string that describes the last successful training time of the person group, large person group or large face list. */
  lastSuccessfulTrainingDateTime: string;
  /** Show failure message when training failed (omitted when training succeed). */
  message?: string;
}

/** Face resource for large face list. */
export interface LargeFaceListFaceOutput {
  /** Face ID of the face. */
  readonly persistedFaceId: string;
  /** User-provided data attached to the face. The length limit is 1K. */
  userData?: string;
}

/** The container of the uploaded person data, including face recognition feature, and up to 10,000 persons. To handle larger scale face identification problem, please consider using LargePersonGroup. */
export interface PersonGroupOutput {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds. */
  recognitionModel?: RecognitionModelOutput;
  /** ID of the container. */
  readonly personGroupId: string;
}

/** Response of create person. */
export interface CreatePersonResultOutput {
  /** Person ID of the person. */
  personId: string;
}

/** The person in a specified person group. To add face to this person, please call LargePersonGroup PersonFace - Add. */
export interface PersonGroupPersonOutput {
  /** ID of the person. */
  readonly personId: string;
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Face ids of registered faces in the person. */
  readonly persistedFaceIds?: string[];
}

/** Face resource for person group person. */
export interface PersonGroupPersonFaceOutput {
  /** Face ID of the face. */
  readonly persistedFaceId: string;
  /** User-provided data attached to the face. The length limit is 1K. */
  userData?: string;
}

/** The container of the uploaded person data, including face recognition feature, and up to 1,000,000 people. */
export interface LargePersonGroupOutput {
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Name of recognition model. Recognition model is used when the face features are extracted and associated with detected faceIds. */
  recognitionModel?: RecognitionModelOutput;
  /** ID of the container. */
  readonly largePersonGroupId: string;
}

/** The person in a specified large person group. To add face to this person, please call LargePersonGroup PersonFace - Add. */
export interface LargePersonGroupPersonOutput {
  /** ID of the person. */
  readonly personId: string;
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
  /** Face ids of registered faces in the person. */
  readonly persistedFaceIds?: string[];
}

/** Face resource for large person group person. */
export interface LargePersonGroupPersonFaceOutput {
  /** Face ID of the face. */
  readonly persistedFaceId: string;
  /** User-provided data attached to the face. The length limit is 1K. */
  userData?: string;
}

/** Person resource for person directory */
export interface PersonDirectoryPersonOutput {
  /** Person ID of the person. */
  readonly personId: string;
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
}

/** Response of list dynamic person group of person. */
export interface ListGroupReferenceResultOutput {
  /** Array of PersonDirectory DynamicPersonGroup ids. */
  dynamicPersonGroupIds: string[];
}

/** Face resource for person directory person. */
export interface PersonDirectoryFaceOutput {
  /** Face ID of the face. */
  readonly persistedFaceId: string;
  /** User-provided data attached to the face. The length limit is 1K. */
  userData?: string;
}

/** Response of list face of person. */
export interface ListFaceResultOutput {
  /** Id of person. */
  personId: string;
  /** Array of persisted face ids. */
  persistedFaceIds: string[];
}

/** A container that references PersonDirectory Person - Create. */
export interface DynamicPersonGroupOutput {
  /** ID of the dynamic person group. */
  readonly dynamicPersonGroupId: string;
  /** User defined name, maximum length is 128. */
  name: string;
  /** Optional user defined data. Length should not exceed 16K. */
  userData?: string;
}

/** Response of list dynamic person group person. */
export interface ListPersonResultOutput {
  /** Array of PersonDirectory Person ids. */
  personIds: string[];
}

/** Response of liveness session creation. */
export interface LivenessSessionCreationResultOutput {
  /** Unique ID to reference this session. */
  sessionId: string;
  /** Authorization token for use by the client application */
  authToken: string;
}

/** Session result of detect liveness. */
export interface LivenessSessionOutput {
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  readonly createdDateTime: string;
  /** Session started time from session auth token. */
  readonly sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  readonly sessionExpired: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The session status. */
  readonly status: FaceSessionStatusOutput;
  /** The last result of session. */
  readonly result?: LivenessSessionAuditEntryOutput;
}

/** Audit entry for a request in session. */
export interface LivenessSessionAuditEntryOutput {
  /** ID of this audit entry. */
  id: number;
  /** Session ID of this audit entry. */
  sessionId: string;
  /** Request ID in the request header. */
  requestId: string;
  /** Client request ID in the request header. */
  clientRequestId: string;
  /** The UTC date time of the request. */
  receivedDateTime: string;
  /** The request of this entry. */
  request: SessionAuditEntryRequestInfoOutput;
  /** The response of this entry. */
  response: SessionAuditEntryResponseInfoOutput;
  /** The digest of the request body. */
  digest: string;
}

/** Audit entry for a request in the session. */
export interface SessionAuditEntryRequestInfoOutput {
  /** The relative URL of the liveness request. */
  url: string;
  /** The HTTP method of the request. */
  method: string;
  /** The length of the request body in bytes. */
  contentLength?: number;
  /** The content type of the request. */
  contentType: string;
  /** The user agent of the request. */
  userAgent?: string;
}

/** Audit entry for a response in the session. */
export interface SessionAuditEntryResponseInfoOutput {
  /** The response body. */
  body: Record<string, any>;
  /** The HTTP status code of the request. */
  statusCode: number;
  /** The latency of the request. */
  latencyInMilliseconds: number;
}

/** Session data returned for enumeration. */
export interface LivenessSessionItemOutput {
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  readonly createdDateTime: string;
  /** Session started time from session auth token. */
  readonly sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  readonly sessionExpired: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
}

/** Session result of detect liveness with verify. */
export interface LivenessWithVerifySessionOutput {
  /** Unique ID to reference this session. */
  readonly id: string;
  /** Session creation time in millisecond from epoch. */
  readonly createdDateTime: string;
  /** Session started time from session auth token. */
  readonly sessionStartDateTime?: string;
  /** Whether or not the session is expired. */
  readonly sessionExpired: boolean;
  /** Device Correlation Id to use for linking multiple sessions together. */
  deviceCorrelationId: string;
  /** Session length in seconds. Range is 60 to 86400 seconds. */
  authTokenTimeToLiveInSeconds?: number;
  /** The session status. */
  readonly status: FaceSessionStatusOutput;
  /** The last result of session. */
  readonly result?: LivenessSessionAuditEntryOutput;
}

/** Alias for RecognitionModelOutput */
export type RecognitionModelOutput =
  | string
  | "recognition_01"
  | "recognition_02"
  | "recognition_03"
  | "recognition_04";
/** Alias for FaceSessionStatusOutput */
export type FaceSessionStatusOutput =
  | string
  | "NotStarted"
  | "Started"
  | "ResultAvailable";
