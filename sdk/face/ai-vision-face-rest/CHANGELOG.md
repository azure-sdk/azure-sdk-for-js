## 1.0.0-beta.1 (2024-09-13)
    
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
  - Operation AddFaceListFaceFromUrl.post has a new signature
  - Operation AddLargeFaceListFaceFromUrl.post has a new signature
  - Operation AddLargeFaceListFaceFromUrl.post has a new signature
  - Operation AddLargeFaceListFaceFromUrl.post has a new signature
  - Operation AddLargePersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddLargePersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddLargePersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddPersonFace.post has a new signature
  - Operation AddPersonFace.post has a new signature
  - Operation AddPersonFace.post has a new signature
  - Operation AddPersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddPersonGroupPersonFaceFromUrl.post has a new signature
  - Operation AddPersonGroupPersonFaceFromUrl.post has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.patch has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateDynamicPersonGroupWithPerson.put has a new signature
  - Operation CreateFaceList.patch has a new signature
  - Operation CreateFaceList.put has a new signature
  - Operation CreateLargeFaceList.patch has a new signature
  - Operation CreateLargeFaceList.put has a new signature
  - Operation CreateLargePersonGroup.patch has a new signature
  - Operation CreateLargePersonGroup.put has a new signature
  - Operation CreateLargePersonGroupPerson.post has a new signature
  - Operation CreateLivenessSession.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation CreateLivenessWithVerifySessionWithVerifyImage.post has a new signature
  - Operation CreatePerson.post has a new signature
  - Operation CreatePersonGroup.patch has a new signature
  - Operation CreatePersonGroup.put has a new signature
  - Operation CreatePersonGroupPerson.post has a new signature
  - Operation DeleteLargeFaceListFace.patch has a new signature
  - Operation DeleteLargePersonGroupPerson.patch has a new signature
  - Operation DeleteLargePersonGroupPersonFace.patch has a new signature
  - Operation DeletePerson.patch has a new signature
  - Operation DeletePersonFace.patch has a new signature
  - Operation DeletePersonGroupPerson.patch has a new signature
  - Operation DeletePersonGroupPersonFace.patch has a new signature
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
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation FindSimilar.post has a new signature
  - Operation Group.post has a new signature
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
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Operation VerifyFaceToFace.post has a new signature
  - Parameter body of interface AddFaceListFaceFromUrlBodyParam is now required
  - Parameter body of interface AddLargeFaceListFaceFromUrlBodyParam is now required
  - Parameter body of interface AddLargePersonGroupPersonFaceFromUrlBodyParam is now required
  - Parameter body of interface AddPersonFaceFromUrlBodyParam is now required
  - Parameter body of interface AddPersonGroupPersonFaceFromUrlBodyParam is now required
  - Parameter body of interface CreateDynamicPersonGroupBodyParam is now required
  - Parameter body of interface CreateDynamicPersonGroupWithPersonBodyParam is now required
  - Parameter body of interface CreateFaceListBodyParam is now required
  - Parameter body of interface CreateLargeFaceListBodyParam is now required
  - Parameter body of interface CreateLargePersonGroupBodyParam is now required
  - Parameter body of interface CreateLargePersonGroupPersonBodyParam is now required
  - Parameter body of interface CreateLivenessSessionBodyParam is now required
  - Parameter body of interface CreateLivenessWithVerifySessionBodyParam is now required
  - Parameter body of interface CreateLivenessWithVerifySessionWithVerifyImageBodyParam is now required
  - Parameter body of interface CreatePersonBodyParam is now required
  - Parameter body of interface CreatePersonGroupBodyParam is now required
  - Parameter body of interface CreatePersonGroupPersonBodyParam is now required
  - Parameter body of interface DetectFromUrlBodyParam is now required
  - Parameter body of interface FindSimilarBodyParam is now required
  - Parameter body of interface FindSimilarFromFaceListBodyParam is now required
  - Parameter body of interface FindSimilarFromLargeFaceListBodyParam is now required
  - Parameter body of interface GroupBodyParam is now required
  - Parameter body of interface IdentifyFromDynamicPersonGroupBodyParam is now required
  - Parameter body of interface IdentifyFromLargePersonGroupBodyParam is now required
  - Parameter body of interface IdentifyFromPersonDirectoryBodyParam is now required
  - Parameter body of interface IdentifyFromPersonGroupBodyParam is now required
  - Parameter body of interface UpdateDynamicPersonGroupBodyParam is now required
  - Parameter body of interface UpdateDynamicPersonGroupWithPersonChangesBodyParam is now required
  - Parameter body of interface UpdateFaceListBodyParam is now required
  - Parameter body of interface UpdateLargeFaceListBodyParam is now required
  - Parameter body of interface UpdateLargeFaceListFaceBodyParam is now required
  - Parameter body of interface UpdateLargePersonGroupBodyParam is now required
  - Parameter body of interface UpdateLargePersonGroupPersonBodyParam is now required
  - Parameter body of interface UpdateLargePersonGroupPersonFaceBodyParam is now required
  - Parameter body of interface UpdatePersonBodyParam is now required
  - Parameter body of interface UpdatePersonFaceBodyParam is now required
  - Parameter body of interface UpdatePersonGroupBodyParam is now required
  - Parameter body of interface UpdatePersonGroupPersonBodyParam is now required
  - Parameter body of interface UpdatePersonGroupPersonFaceBodyParam is now required
  - Parameter body of interface VerifyFaceToFaceBodyParam is now required
  - Parameter body of interface VerifyFromLargePersonGroupBodyParam is now required
  - Parameter body of interface VerifyFromPersonDirectoryBodyParam is now required
  - Parameter body of interface VerifyFromPersonGroupBodyParam is now required
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
    
