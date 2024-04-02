## 1.0.0-beta.3 (2024-04-02)
    
**Features**

  - Added Type Alias VisualFeatures
  - Added Type Alias VisualFeaturesOutput

**Breaking Changes**

  - Operation AnalyzeFromImageData.post has a new signature
  - Operation AnalyzeFromImageData.post has a new signature
  - Type of parameter features of interface AnalyzeFromImageDataQueryParamProperties is changed from string[] to VisualFeatures[]
  - Type of parameter features of interface AnalyzeFromUrlQueryParamProperties is changed from string[] to VisualFeatures[]
    
# Release History

## 1.0.0-beta.2 (2024-02-14)

### Breaking Changes
The type names for AnalyzeFromBuffer* have changed to AnalyzeFromImageData*

## 1.0.0-beta.1 (2024-01-09)

### Features Added
Initial release of Image Analysis SDK. Uses the generally available [Computer Vision REST API (2023-10-01)](https://eastus.dev.cognitive.microsoft.com/docs/services/Cognitive_Services_Unified_Vision_API_2023-10-01).
