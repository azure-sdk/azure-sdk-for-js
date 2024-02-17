## 1.0.0-beta.2 (2024-02-17)
    
**Features**

  - Interface ImageAnalysisResultOutput has a new optional parameter caption
  - Interface ImageAnalysisResultOutput has a new optional parameter denseCaptions
  - Interface ImageAnalysisResultOutput has a new optional parameter objects
  - Interface ImageAnalysisResultOutput has a new optional parameter people
  - Interface ImageAnalysisResultOutput has a new optional parameter read
  - Interface ImageAnalysisResultOutput has a new optional parameter smartCrops
  - Interface ImageAnalysisResultOutput has a new optional parameter tags

**Breaking Changes**

  - Operation AnalyzeFromImageData.post has a new signature
  - Operation AnalyzeFromImageData.post has a new signature
  - Interface ImageAnalysisResultOutput no longer has parameter captionResult
  - Interface ImageAnalysisResultOutput no longer has parameter denseCaptionsResult
  - Interface ImageAnalysisResultOutput no longer has parameter objectsResult
  - Interface ImageAnalysisResultOutput no longer has parameter peopleResult
  - Interface ImageAnalysisResultOutput no longer has parameter readResult
  - Interface ImageAnalysisResultOutput no longer has parameter smartCropsResult
  - Interface ImageAnalysisResultOutput no longer has parameter tagsResult
  - Interface ImageBoundingBoxOutput no longer has parameter h
  - Interface ImageBoundingBoxOutput no longer has parameter w
  - Interface ImageBoundingBoxOutput has a new required parameter height
  - Interface ImageBoundingBoxOutput has a new required parameter width
    
# Release History

## 1.0.0-beta.2 (2024-02-14)

### Breaking Changes
The type names for AnalyzeFromBuffer* have changed to AnalyzeFromImageData*

## 1.0.0-beta.1 (2024-01-09)

### Features Added
Initial release of Image Analysis SDK. Uses the generally available [Computer Vision REST API (2023-10-01)](https://eastus.dev.cognitive.microsoft.com/docs/services/Cognitive_Services_Unified_Vision_API_2023-10-01).
