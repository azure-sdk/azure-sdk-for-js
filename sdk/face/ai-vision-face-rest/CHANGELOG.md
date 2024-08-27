## 1.0.0-beta.1 (2024-08-27)
    
### Features Added

  - Added operation group GetSessionImage
  - Added Interface AddFaceFromUrlRequest
  - Added Interface CreateCollectionRequest
  - Added Interface CreateLivenessWithVerifySessionJsonContent
  - Added Interface CreateLivenessWithVerifySessionMultipartContentParametersPartDescriptor
  - Added Interface CreateLivenessWithVerifySessionMultipartContentVerifyImagePartDescriptor
  - Added Interface DetectFromSessionImageId200Response
  - Added Interface DetectFromSessionImageIdBodyParam
  - Added Interface DetectFromSessionImageIdDefaultHeaders
  - Added Interface DetectFromSessionImageIdDefaultResponse
  - Added Interface DetectFromSessionImageIdMediaTypesParam
  - Added Interface DetectFromSessionImageIdQueryParam
  - Added Interface DetectFromSessionImageIdQueryParamProperties
  - Added Interface FaceUserData
  - Added Interface GetSessionImage200Headers
  - Added Interface GetSessionImage200Response
  - Added Interface GetSessionImageDefaultHeaders
  - Added Interface GetSessionImageDefaultResponse
  - Added Interface UserDefinedFields
  - Added Interface UserDefinedFieldsForUpdate
  - Added Type Alias CreateLivenessWithVerifySessionMultipartContent
  - Added Type Alias DetectFromSessionImageIdParameters
  - Added Type Alias GetSessionImageParameters
  - Added Type Alias LivenessModel
  - Interface CreateLivenessSessionContent has a new optional parameter enableSessionImage
  - Interface CreateLivenessSessionContent has a new optional parameter livenessSingleModalModel
  - Interface LivenessSessionAuditEntryOutput has a new optional parameter sessionImageId
  - Interface LivenessSessionAuditEntryOutput has a new optional parameter verifyImageHash

### Breaking Changes

  - Operation AddFaceListFaceFromUrl.post has a new signature
  - Operation AddFaceListFaceFromUrl.post has a new signature
  - Operation AddLargeFaceListFaceFromUrl.post has a new signature
  - Operation AddLargeFaceListFaceFromUrl.post has a new signature
  - Operation AddLargePersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddLargePersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddPersonFace.post has a new signature
  - Operation AddPersonFace.post has a new signature
  - Operation AddPersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddPersonGroupPersonFaceFromUrl.post has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateLivenessSession.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation DetectFromUrl.post has a new signature
  - Operation DetectFromUrl.post has a new signature
  - Operation DetectFromUrl.post has a new signature
  - Operation DetectFromUrl.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation IdentifyFromPersonGroup.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Parameter body of interface CreateLivenessSessionBodyParam is now required
  - Parameter body of interface CreateLivenessWithVerifySessionBodyParam is now required
  - Parameter body of interface CreateLivenessWithVerifySessionWithVerifyImageBodyParam is now required
  - Type of parameter body of interface AddFaceListFaceFromUrlBodyParam is changed from {
        url: string;
    } to AddFaceFromUrlRequest
  - Type of parameter body of interface AddLargeFaceListFaceFromUrlBodyParam is changed from {
        url: string;
    } to AddFaceFromUrlRequest
  - Type of parameter body of interface AddLargePersonGroupPersonFaceFromUrlBodyParam is changed from {
        url: string;
    } to AddFaceFromUrlRequest
  - Type of parameter body of interface AddPersonGroupPersonFaceFromUrlBodyParam is changed from {
        url: string;
    } to AddFaceFromUrlRequest
  - Type of parameter body of interface CreateDynamicPersonGroupBodyParam is changed from {
        name: string;
        userData?: string;
    } to UserDefinedFields
  - Type of parameter body of interface CreateFaceListBodyParam is changed from {
        name: string;
        userData?: string;
        recognitionModel?: RecognitionModel;
    } to CreateCollectionRequest
  - Type of parameter body of interface CreateLargeFaceListBodyParam is changed from {
        name: string;
        userData?: string;
        recognitionModel?: RecognitionModel;
    } to CreateCollectionRequest
  - Type of parameter body of interface CreateLargePersonGroupBodyParam is changed from {
        name: string;
        userData?: string;
        recognitionModel?: RecognitionModel;
    } to CreateCollectionRequest
  - Type of parameter body of interface CreateLargePersonGroupPersonBodyParam is changed from {
        name: string;
        userData?: string;
    } to UserDefinedFields
  - Type of parameter body of interface CreateLivenessWithVerifySessionBodyParam is changed from CreateLivenessSessionContent to CreateLivenessWithVerifySessionJsonContent
  - Type of parameter body of interface CreateLivenessWithVerifySessionWithVerifyImageBodyParam is changed from CreateLivenessWithVerifySessionContent to CreateLivenessWithVerifySessionMultipartContent
  - Type of parameter body of interface CreatePersonBodyParam is changed from {
        name: string;
        userData?: string;
    } to UserDefinedFields
  - Type of parameter body of interface CreatePersonGroupBodyParam is changed from {
        name: string;
        userData?: string;
        recognitionModel?: RecognitionModel;
    } to CreateCollectionRequest
  - Type of parameter body of interface CreatePersonGroupPersonBodyParam is changed from {
        name: string;
        userData?: string;
    } to UserDefinedFields
  - Type of parameter body of interface UpdateDynamicPersonGroupBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdateFaceListBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdateLargeFaceListBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdateLargeFaceListFaceBodyParam is changed from {
        userData?: string;
    } to FaceUserData
  - Type of parameter body of interface UpdateLargePersonGroupBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdateLargePersonGroupPersonBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdateLargePersonGroupPersonFaceBodyParam is changed from {
        userData?: string;
    } to FaceUserData
  - Type of parameter body of interface UpdatePersonBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdatePersonFaceBodyParam is changed from {
        userData?: string;
    } to FaceUserData
  - Type of parameter body of interface UpdatePersonGroupBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdatePersonGroupPersonBodyParam is changed from {
        name?: string;
        userData?: string;
    } to UserDefinedFieldsForUpdate
  - Type of parameter body of interface UpdatePersonGroupPersonFaceBodyParam is changed from {
        userData?: string;
    } to FaceUserData
    
