## 1.0.0 (2024-10-28)
    
### Features Added

  - Added operation group DetectTextProtectedMaterial
  - Added Interface ContentSafetyClientOptions
  - Added Interface DetectTextProtectedMaterial200Response
  - Added Interface DetectTextProtectedMaterialBodyParam
  - Added Interface DetectTextProtectedMaterialDefaultHeaders
  - Added Interface DetectTextProtectedMaterialDefaultResponse
  - Added Interface DetectTextProtectedMaterialOptions
  - Added Interface DetectTextProtectedMaterialResultOutput
  - Added Interface ImageData
  - Added Interface TextProtectedMaterialAnalysisResultOutput
  - Added Type Alias AnalyzeImageOutputType
  - Added Type Alias AnalyzeTextOutputType
  - Added Type Alias DetectTextProtectedMaterialParameters
  - Added Type Alias ImageCategory
  - Added Type Alias ImageCategoryOutput
  - Added Type Alias TextCategory
  - Added Type Alias TextCategoryOutput
  - Interface TextBlocklistItem has a new optional parameter isRegex
  - Interface TextBlocklistItemOutput has a new optional parameter isRegex

### Breaking Changes

  - Type of parameter categories of interface AnalyzeImageOptions is changed from string[] to ImageCategory[]
  - Type of parameter image of interface AnalyzeImageOptions is changed from ImageData_2 to ImageData
  - Type of parameter outputType of interface AnalyzeImageOptions is changed from string to AnalyzeImageOutputType
  - Type of parameter categories of interface AnalyzeTextOptions is changed from string[] to TextCategory[]
  - Type of parameter outputType of interface AnalyzeTextOptions is changed from string to AnalyzeTextOutputType
  - Type of parameter category of interface ImageCategoriesAnalysisOutput is changed from string to ImageCategoryOutput
  - Type of parameter category of interface TextCategoriesAnalysisOutput is changed from string to TextCategoryOutput
    
